import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Verifies a Transxact webhook's `Transxact-Signature` header.
 *
 * Not generated from the OpenAPI spec — HMAC signature verification isn't
 * something an OpenAPI spec describes (ADR-0010). Scheme: header shaped
 * `t=<ms-timestamp>,v1=<hex-hmac>`, HMAC-SHA256 over `${timestamp}.${payload}`,
 * constant-time compare (ADR-0008).
 *
 * @param rawPayload The exact raw request body bytes, not re-serialized JSON.
 * @param header The `Transxact-Signature` header value, shaped `t=...,v1=...`.
 * @param secret Your webhook signing secret, from the dashboard's webhook settings.
 * @param toleranceMs How old a signed timestamp may be, in milliseconds. Defaults to 5 minutes.
 */
export function verifyWebhookSignature(
    rawPayload: string,
    header: string,
    secret: string,
    toleranceMs: number = 5 * 60 * 1000,
): boolean {
    const parts = Object.fromEntries(header.split(",").map((part) => part.split("=", 2) as [string, string]));
    const timestamp = parts.t;
    const signature = parts.v1;
    if (!timestamp || !signature) {
        return false;
    }
    if (Math.abs(Date.now() - Number(timestamp)) > toleranceMs) {
        return false;
    }

    const expected = createHmac("sha256", secret).update(`${timestamp}.${rawPayload}`).digest("hex");

    const signatureBuffer = Buffer.from(signature);
    const expectedBuffer = Buffer.from(expected);
    return signatureBuffer.length === expectedBuffer.length && timingSafeEqual(signatureBuffer, expectedBuffer);
}
