# Razorpay Payment Gateway Setup Guide

## Overview
Razorpay payment gateway has been successfully integrated into your AnyTechPros website. Users can now make direct payments for:
- **BotMinds ADDU SaaS Plans** (Standard, Premium, Enterprise)
- **Digital Marketing Plans** (RAW, MINIMAL, CULINARY, ULTRA CULINARY, Premium Package)

## 🔧 Configuration Required

### Step 1: Get Razorpay Credentials

1. **Sign up/Login to Razorpay**
   - Go to [https://dashboard.razorpay.com/signup](https://dashboard.razorpay.com/signup)
   - Create an account or login if you already have one

2. **Get Your API Keys**
   - Navigate to: **Settings** → **API Keys**
   - Generate keys if not already created
   - You'll see two keys:
     - **Key ID** (starts with `rzp_test_` for test mode or `rzp_live_` for live mode)
     - **Key Secret** (keep this private - never expose in frontend)

### Step 2: Update Your Website

1. **Open the file:** `src/context/useRazorpay.js`

2. **Replace the placeholder key** on line 13:
   ```javascript
   // Replace this line:
   const RAZORPAY_KEY_ID = 'rzp_test_XXXXXXXXXXXXXX';
   
   // With your actual key:
   const RAZORPAY_KEY_ID = 'rzp_test_YourActualKeyHere';
   ```

3. **For Production (Live Mode):**
   - Once testing is complete, get your **Live Mode** keys from Razorpay dashboard
   - Replace `rzp_test_` key with `rzp_live_` key
   - Test thoroughly before going live!

### Step 3: Backend Integration (Important!)

⚠️ **Security Notice:** The current implementation is frontend-only. For production, you MUST verify payments on your backend.

**What you need to do:**

1. **Create a backend API** to handle:
   - Payment verification (verify Razorpay signature)
   - Create subscription/user account
   - Send confirmation emails
   - Store transaction records

2. **Recommended Backend Setup:**
   ```
   POST /api/payments/verify
   - Verify payment signature using Razorpay secret key
   - Validate payment amount matches the plan
   - Create user subscription in database
   - Send confirmation email
   - Return success/failure response
   ```

3. **Update the payment success handlers** in:
   - `src/pages/BotMindsSaaSPage.jsx` (line ~139)
   - `src/pages/DigitalMarketingPage.jsx` (line ~76)

   Add API call to your backend:
   ```javascript
   onSuccess: async (paymentData) => {
     // Send to your backend for verification
     const response = await fetch('/api/payments/verify', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(paymentData)
     });
     
     const result = await response.json();
     if (result.verified) {
       // Show success message
       // Redirect to success page
     }
   }
   ```

## 📋 What's Already Implemented

### 1. **Razorpay Checkout Script**
- Added to `index.html`
- Loads Razorpay's hosted checkout interface

### 2. **Payment Utility Hook** 
- File: `src/context/useRazorpay.js`
- Handles payment initialization
- Manages success/failure callbacks
- Converts amounts to proper currency units

### 3. **Updated Pricing Pages**

**BotMinds SaaS Page:**
- "Buy Now" buttons for Standard and Premium plans
- Automatically calculates: `Price × 25 licenses` (minimum order requirement)
- "Contact Sales" button for Enterprise plan (redirects to contact page)
- Supports both INR and USD currency

**Digital Marketing Page:**
- "Buy Now" buttons for all plans (RAW, MINIMAL, CULINARY, ULTRA CULINARY)
- "Buy Now" for Premium Package (₹29,999/month)
- Supports both INR and USD currency

## 💳 Payment Flow

1. User selects a plan and clicks "Buy Now"
2. Razorpay checkout modal opens
3. User enters payment details (card, UPI, netbanking, etc.)
4. Payment is processed by Razorpay
5. On success:
   - `onSuccess` callback is triggered
   - Alert shows payment ID
   - (You should implement: send data to backend, verify, create subscription)
6. On failure:
   - `onFailure` callback is triggered
   - Error message is shown to user

## 🧪 Testing

### Test Mode

1. **Use Test Key** (`rzp_test_...`)
2. **Test Cards:** Use Razorpay's test cards (no real money charged)
   - **Success:** 4111 1111 1111 1111
   - **Failure:** 4111 1111 1111 1112
   - CVV: Any 3 digits
   - Expiry: Any future date
   - Name: Any name

3. **Test UPI:** 
   - Use: `success@razorpay`
   - Will simulate successful payment

4. **Check test payments** in Razorpay Dashboard

### Live Mode Testing

1. Switch to Live Mode keys
2. Test with small real amounts first
3. Verify backend verification is working
4. Test all payment methods (cards, UPI, netbanking)
5. Test failure scenarios
6. Verify email notifications

## 🎨 Customization Options

### Change Theme Color
In `src/context/useRazorpay.js` (line 70):
```javascript
theme: {
  color: '#2F3B35', // Change this to your preferred color
}
```

### Change Company Logo
Update the logo path (line 57):
```javascript
image: '/darklogo1.png', // Update to your logo path
```

### Pre-fill Customer Data
If you have user data, pre-fill the form (line 64):
```javascript
prefill: {
  name: user.name,
  email: user.email,
  contact: user.phone,
}
```

## 📊 Razorpay Dashboard Features

After payments start coming in:

1. **View Transactions:** Dashboard → Transactions
2. **Settlements:** Check when money will be settled to your bank
3. **Refunds:** Process refunds if needed
4. **Analytics:** View payment success rates, popular payment methods
5. **Customer Details:** See customer information
6. **Reports:** Download transaction reports

## 🔒 Security Best Practices

1. **Never expose Key Secret** in frontend code
2. **Always verify payment signature** on backend
3. **Use HTTPS** in production
4. **Validate payment amount** on backend
5. **Log all transactions** for audit trail
6. **Set up webhook** for payment notifications
7. **Test refund process** before going live

## 🌐 Webhooks (Recommended)

Set up webhooks to get real-time payment updates:

1. Go to Razorpay Dashboard → Webhooks
2. Add endpoint: `https://yourdomain.com/api/webhooks/razorpay`
3. Select events: `payment.captured`, `payment.failed`
4. Your backend should:
   - Verify webhook signature
   - Update subscription status
   - Send notifications

## 📞 Support

- **Razorpay Documentation:** [https://razorpay.com/docs/](https://razorpay.com/docs/)
- **Razorpay Support:** [https://razorpay.com/support/](https://razorpay.com/support/)
- **Integration Docs:** [https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/)

## ✅ Go-Live Checklist

- [ ] Replaced test key with live key
- [ ] Backend payment verification implemented
- [ ] Webhook setup and tested
- [ ] Email notifications working
- [ ] Refund process tested
- [ ] Error handling verified
- [ ] Database storing transactions
- [ ] Terms & Conditions linked
- [ ] Privacy Policy updated with payment info
- [ ] Test all payment methods
- [ ] SSL certificate active (HTTPS)

---

**Note:** The integration is currently frontend-only. For production use, backend verification is **mandatory** for security and compliance.
