# Reference
## CheckoutSessions
<details><summary><code>client.checkoutSessions.<a href="/src/api/resources/checkoutSessions/client/Client.ts">list</a>({ ...params }) -> TransxactApi.CheckoutSessionList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists your Checkout Sessions in the key's mode, newest first, so you can reconcile payments without having kept every id. Narrow it with `status` and a `from`/`to` created range. To page, pass the `nextCursor` you got as `cursor` until it is null.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkoutSessions.list({
    limit: "10",
    cursor: "1717086400000.cs_3f9c2b1a",
    status: "succeeded",
    from: "1717000000000",
    to: "1717086400000"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TransxactApi.ListCheckoutSessionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CheckoutSessionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.checkoutSessions.<a href="/src/api/resources/checkoutSessions/client/Client.ts">create</a>({ ...params }) -> TransxactApi.CheckoutSession</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Starts a payment: call this from your server, then redirect the Customer to the returned `hostedUrl`, which takes the payment with any Provider. Don't fulfil on the redirect; wait for the `checkout_session.succeeded` webhook or retrieve the session. The `Idempotency-Key` header is required: a retry with the same key replays the original session instead of creating a second one, so derive it from your order. An `sk_test_` key creates a Test mode session that simulates payment; an `sk_live_` key creates a Live mode session that moves real money.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkoutSessions.create({
    idempotencyKey: "a1b2c3d4-order-9912"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TransxactApi.CreateCheckoutSessionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CheckoutSessionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.checkoutSessions.<a href="/src/api/resources/checkoutSessions/client/Client.ts">retrieve</a>({ ...params }) -> TransxactApi.CheckoutSession</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a Checkout Session's current state. Use it to confirm the outcome when the Customer lands on your `successUrl` with `session_id`, or to check a webhook you missed. Only sessions created with a key of the same Merchant and mode are visible; anything else is 404.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkoutSessions.retrieve({
    id: "cs_3f9c2b1a"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TransxactApi.RetrieveCheckoutSessionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CheckoutSessionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.checkoutSessions.<a href="/src/api/resources/checkoutSessions/client/Client.ts">cancel</a>({ ...params }) -> TransxactApi.CheckoutSession</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Withdraws a `pending` Checkout Session so it can't be paid, e.g. when the order is abandoned or changed. Fails with `payment_in_progress` once the Customer has started paying; wait for the outcome webhook instead. Unpaid sessions also cancel on their own after `expiresAt`, unless the Customer has started paying.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkoutSessions.cancel({
    id: "cs_3f9c2b1a"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TransxactApi.CancelCheckoutSessionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CheckoutSessionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Invoices
<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">list</a>({ ...params }) -> TransxactApi.InvoiceList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists your Invoices in the key's mode, newest first. To page, pass the last `id` you got as `starting_after` while `hasMore` is true.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoices.list({
    limit: 10,
    startingAfter: 42
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TransxactApi.ListInvoicesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoicesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">create</a>({ ...params }) -> TransxactApi.Invoice</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a draft Invoice in the key's mode. It has no number and no working `url` until you send it. The total, with tax, must be under FJD 5,000.00 (at most 499999 cents), in Test mode and Live mode alike. The `Idempotency-Key` header is required: a retry with the same key returns the original draft instead of making a second.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoices.create({
    idempotencyKey: "a1b2c3d4-order-9912",
    customerName: "Mere Tuilagi",
    dueDate: "2026-11-30",
    items: [{
            description: "Tiling, kitchen",
            quantity: 2,
            unitPrice: 12000
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TransxactApi.CreateInvoiceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoicesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">retrieve</a>({ ...params }) -> TransxactApi.Invoice</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns one Invoice and its current state. Invoices from the other mode or another Merchant are 404.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoices.retrieve({
    id: 42
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TransxactApi.RetrieveInvoicesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoicesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">send</a>({ ...params }) -> TransxactApi.Invoice</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Releases a draft: assigns its Invoice number (from your prefix and counter in Settings) and makes its `url` work for the Customer. Transxact does not email it for you here; share the `url`, or email it from the dashboard. A sent Invoice can't be edited; void it and make another. The `Idempotency-Key` header is required: a retry returns the sent Invoice and uses no second number.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoices.send({
    idempotencyKey: "a1b2c3d4-order-9912",
    id: 42
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TransxactApi.SendInvoicesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoicesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">void</a>({ ...params }) -> TransxactApi.Invoice</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancels a sent, unpaid Invoice so it can no longer be paid. Its number is kept and never reused. Refused for a draft, a paid Invoice, or while a Customer is paying it right now. The `Idempotency-Key` header is required.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoices.void({
    idempotencyKey: "a1b2c3d4-order-9912",
    id: 42
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TransxactApi.VoidInvoicesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoicesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.invoices.<a href="/src/api/resources/invoices/client/Client.ts">retrievePdf</a>({ ...params }) -> core.BinaryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The Invoice as a PDF, the same file the Customer's page and emails carry. This is the `pdfUrl` on the Invoice. Available once the Invoice is sent.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoices.retrievePdf({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TransxactApi.RetrievePdfInvoicesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoicesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Merchants
<details><summary><code>client.merchants.<a href="/src/api/resources/merchants/client/Client.ts">me</a>() -> TransxactApi.Merchant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the Merchant that owns the API key: its tier, the key's mode, the balance not yet paid out in that mode, and the Payout schedule. A cheap way to check a key works and which mode it's in.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.merchants.me();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `MerchantsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Payouts
<details><summary><code>client.payouts.<a href="/src/api/resources/payouts/client/Client.ts">list</a>({ ...params }) -> TransxactApi.ListPayoutsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the Merchant's Payouts in the key's mode, oldest id first. Payouts are made on the Merchant's Payout schedule, or when the Merchant asks from the dashboard on the manual schedule; they can't be created through the API. To page, pass the last id you got as `starting_after` while `hasMore` is true.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payouts.list({
    startingAfter: "po_3f9c2b1a",
    limit: "10"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TransxactApi.ListPayoutsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PayoutsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.payouts.<a href="/src/api/resources/payouts/client/Client.ts">retrieve</a>({ ...params }) -> TransxactApi.Payout</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns one Payout by id: its amount, rail and status, and why it failed if it did. Payouts from the other mode or another Merchant are 404.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payouts.retrieve({
    id: "po_3f9c2b1a"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TransxactApi.RetrievePayoutsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PayoutsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

