# Reference
## CheckoutSessions
<details><summary><code>client.checkoutSessions.<a href="/src/api/resources/checkoutSessions/client/Client.ts">create</a>({ ...params }) -> TransxactApi.CheckoutSession</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.checkoutSessions.create({
    "idempotency-key": "a1b2c3d4-order-9912",
    amount: 5000,
    currency: "FJD"
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

## Merchants
<details><summary><code>client.merchants.<a href="/src/api/resources/merchants/client/Client.ts">me</a>() -> TransxactApi.Merchant</code></summary>
<dl>
<dd>

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

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payouts.list({
    starting_after: "po_3f9c2b1a",
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

