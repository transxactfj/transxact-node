/**
 * This is a custom test file, if you wish to add more tests
 * to your SDK.
 * Be sure to mark this file in `.fernignore`.
 *
 * If you include example requests/responses in your fern definition,
 * you will have tests automatically generated for you.
 */
import { createHmac } from "node:crypto";
import { verifyWebhookSignature } from "../src/webhooks";

function sign(secret: string, timestamp: number, payload: string): string {
    const hmac = createHmac("sha256", secret).update(`${timestamp}.${payload}`).digest("hex");
    return `${timestamp}.${hmac}`;
}

describe("verifyWebhookSignature", () => {
    const secret = "whsec_test";
    const payload = '{"type":"checkout_session.succeeded"}';

    it("accepts a validly signed, fresh payload", () => {
        const header = sign(secret, Math.floor(Date.now() / 1000), payload);
        expect(verifyWebhookSignature(payload, header, secret)).toBe(true);
    });

    it("rejects a payload signed with the wrong secret", () => {
        const header = sign("wrong-secret", Math.floor(Date.now() / 1000), payload);
        expect(verifyWebhookSignature(payload, header, secret)).toBe(false);
    });

    it("rejects a signature older than the tolerance window", () => {
        const staleTimestamp = Math.floor(Date.now() / 1000) - 10 * 60;
        const header = sign(secret, staleTimestamp, payload);
        expect(verifyWebhookSignature(payload, header, secret)).toBe(false);
    });

    it("rejects a malformed header", () => {
        expect(verifyWebhookSignature(payload, "not-a-valid-header", secret)).toBe(false);
    });
});
