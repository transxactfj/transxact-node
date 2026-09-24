# Reference
<details><summary><code>client.<a href="/src/Client.ts">postV1CheckoutSessions</a>({ ...params }) -> TransxactApi.CheckoutSession</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.postV1CheckoutSessions({
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

**requestOptions:** `TransxactApiClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.<a href="/src/Client.ts">getV1CheckoutSessionsId</a>({ ...params }) -> TransxactApi.CheckoutSession</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.getV1CheckoutSessionsId({
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

**request:** `TransxactApi.GetV1CheckoutSessionsIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransxactApiClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.<a href="/src/Client.ts">getV1MerchantsMe</a>() -> TransxactApi.Merchant</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.getV1MerchantsMe();

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

**requestOptions:** `TransxactApiClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.<a href="/src/Client.ts">getV1Payouts</a>({ ...params }) -> TransxactApi.GetV1PayoutsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.getV1Payouts({
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

**request:** `TransxactApi.GetV1PayoutsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransxactApiClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.<a href="/src/Client.ts">getV1PayoutsId</a>({ ...params }) -> TransxactApi.Payout</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.getV1PayoutsId({
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

**request:** `TransxactApi.GetV1PayoutsIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransxactApiClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

