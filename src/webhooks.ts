import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Verifies a Transxact webhook's `Transxact-Signature` header.
 *
 * Not generated from the OpenAPI spec — HMAC signature verification isn't
 * something an OpenAPI spec describes (ADR-0010). Scheme: HMAC-SHA256 over
 * `timestamp.payload`, constant-time compare (ADR-0008).
 *
 * @param rawPayload The exact raw request body bytes, not re-serialized JSON.
 * @param header The `Transxact-Signature` header value, shaped `timestamp.signature`.
 * @param secret Your webhook signing secret, from the dashboard's webhook settings.
 * @param toleranceSeconds How old a signed timestamp may be. Defaults to 5 minutes.
 */
export function verifyWebhookSignature(
    rawPayload: string,
    header: string,
    secret: string,
    toleranceSeconds = 5 * 60,
): boolean {
    const [timestamp, signature] = header.split(".", 2);
    if (!timestamp || !signature) {
        return false;
    }
    if (Date.now() / 1000 - Number(timestamp) > toleranceSeconds) {
        return false;
    }

    const expected = createHmac("sha256", secret).update(`${timestamp}.${rawPayload}`).digest("hex");

    const signatureBuffer = Buffer.from(signature);
    const expectedBuffer = Buffer.from(expected);
    return signatureBuffer.length === expectedBuffer.length && timingSafeEqual(signatureBuffer, expectedBuffer);
}
