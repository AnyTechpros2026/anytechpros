# Admin Panel & Career Management Setup Guide

This guide will help you set up the admin panel and career management system for AnyTechPros.

## Features Implemented

### 1. **Admin Panel**
- Secure admin login page (hidden from main navigation)
- Full dashboard to manage job positions
- View all job applications with applicant details
- Add, edit, and delete job positions
- Custom job forms with conditional fields (GitHub field for tech positions)

### 2. **Career Page**
- Public-facing careers page with job listings
- Dynamic job application forms
- Resume/CV upload functionality
- Conditional form fields based on job type
- Real-time data from Firebase

### 3. **Fixed Issues**
- ✅ Footer links updated (removed duplicates and non-working links)
- ✅ Navbar color fixed (now consistent on scroll)
- ✅ Logo background matches navbar

---

## Firebase Setup Instructions

### Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add Project"
3. Enter project name: `anytechpros` (or your preferred name)
4. Disable Google Analytics (optional)
5. Click "Create Project"

### Step 2: Enable Authentication

1. In Firebase Console, click "Authentication" in the left sidebar
2. Click "Get Started"
3. Enable "Email/Password" authentication method
4. Click "Save"

### Step 3: Create Firestore Database

1. Click "Firestore Database" in the left sidebar
2. Click "Create Database"
3. Choose "Start in production mode"
4. Select your region (choose closest to your users)
5. Click "Enable"

### Step 4: Set Firestore Security Rules

Go to "Firestore Database" → "Rules" tab and replace with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Jobs collection - read by anyone, write only by authenticated admins
    match /jobs/{jobId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Applications collection - write by anyone (for job applications), read only by admins
    match /applications/{applicationId} {
      allow read: if request.auth != null;
      allow create: if true;
      allow update, delete: if request.auth != null;
    }
  }
}
```

Click "Publish"

### Step 5: Enable Storage

1. Click "Storage" in the left sidebar
2. Click "Get Started"
3. Use default security rules
4. Choose same region as Firestore
5. Click "Done"

### Step 6: Set Storage Security Rules

Go to "Storage" → "Rules" tab and replace with:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /resumes/{allPaths=**} {
      allow read: if request.auth != null;
      allow write: if request.resource.size < 5 * 1024 * 1024; // 5MB limit
    }
  }
}
```

Click "Publish"

### Step 7: Get Your Firebase Configuration

1. Click the gear icon ⚙️ next to "Project Overview"
2. Click "Project Settings"
3. Scroll down to "Your apps"
4. Click the web icon `</>`
5. Register your app (name: "AnyTechPros Web")
6. Copy the `firebaseConfig` object

### Step 8: Update Firebase Configuration File

Open `src/firebase/config.js` and replace the placeholder values with your actual Firebase configuration:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
```

### Step 9: Create Admin User

1. In Firebase Console, go to "Authentication"
2. Click "Users" tab
3. Click "Add User"
4. Enter admin email: `admin@anytechpros.com` (or your preferred email)
5. Enter a strong password
6. Click "Add User"

---

## Navbar Fixed Colors

The navbar now has a **fixed color scheme** that doesn't change on scroll:

### Light Mode:
- Background: `rgba(255, 255, 255, 0.95)` (white with 95% opacity)
- Backdrop blur: Medium
- Border: `rgba(47, 59, 53, 0.1)` (charcoal with 10% opacity)

### Dark Mode:
- Background: `rgba(47, 59, 53, 0.95)` (charcoal with 95% opacity)
- Backdrop blur: Medium
- Border: `rgba(232, 221, 208, 0.1)` (sandstone with 10% opacity)

### Logo Recommendations:
Create your logo with these background colors:
- **Light Mode Logo**: Use white (#FFFFFF) or very light background
- **Dark Mode Logo**: Use charcoal (#2F3B35) or very dark background

The logo will automatically switch based on the theme.

---

## How to Use the Admin Panel

### Accessing Admin Panel
1. Go to the careers page: `/careers`
2. Look for a tiny invisible button at the **bottom-right corner** of the page
3. Hover over it to make it visible
4. Click to go to admin login
5. Or directly navigate to: `/admin-login`

### Admin Login
- URL: `http://localhost:5173/admin-login`
- Use the email and password you created in Firebase Authentication

### Managing Jobs
1. After login, you'll see the Admin Dashboard
2. Click "Add New Job" to create a job posting
3. Fill in all required fields:
   - Job Title
   - Department (Technology/Sales/Marketing/Consulting/Operations)
   - Location
   - Job Type (Full-time/Part-time/Contract/Internship)
   - Description
   - Requirements (one per line)
   - Responsibilities (one per line)
   - Check "Include GitHub field" for technical positions
4. Click "Post Job"

### Managing Applications
1. Switch to "Applications" tab
2. View all applicants with their details
3. Click "View Resume/CV" to download and view resumes

---

## Testing the System

### Test Job Application Flow:

1. **Start Development Server**:
   ```bash
   npm run dev
   ```

2. **Create a Test Job** (as admin):
   - Go to `/admin-login`
   - Login with admin credentials
   - Create a test job posting

3. **Apply for the Job** (as user):
   - Go to `/careers`
   - Click "Apply Now" on the test job
   - Fill out the application form
   - Upload a test resume
   - Submit

4. **View Application** (as admin):
   - Go to Admin Dashboard
   - Switch to "Applications" tab
   - See the submitted application

---

## Security Notes

⚠️ **Important**:
- Never commit `src/firebase/config.js` with real credentials to public repositories
- Add `.env` file for production with environment variables
- The admin access button on careers page is intentionally hidden for security
- Always use strong passwords for admin accounts
- Regularly review Firebase security rules

---

## Footer Links Structure

### Expertise Section:
- About Us → `/about`
- Careers → `/careers`
- Contact Us → `/contact`

### What We Do Section:
- Consulting → `/services`
- Next-Gen Solutions → `/services`
- Products → `/services`

### Resources Section:
- Resources → `/resources`
- Privacy Policy → `/privacy`
- Terms of Service → `/terms`

---

## Troubleshooting

### "Firebase not configured" Error
- Make sure you updated `src/firebase/config.js` with your actual Firebase credentials

### Cannot Login to Admin Panel
- Verify the user exists in Firebase Authentication
- Check email and password are correct
- Check browser console for error messages

### Resume Upload Fails
- Ensure file is under 5MB
- Only PDF, DOC, DOCX files are accepted
- Check Firebase Storage rules are properly set

### Applications Not Showing
- Check Firestore security rules
- Verify data is being saved in Firebase Console → Firestore Database

---

## Production Deployment

Before deploying to production:

1. **Update Firebase Config**:
   - Use environment variables instead of hardcoded values
   - Create `.env` file:
     ```
     VITE_FIREBASE_API_KEY=your-api-key
     VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
     VITE_FIREBASE_PROJECT_ID=your-project-id
     VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
     VITE_FIREBASE_APP_ID=your-app-id
     ```

2. **Update `src/firebase/config.js`**:
   ```javascript
   const firebaseConfig = {
     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
     authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
     projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
     storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
     messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
     appId: import.meta.env.VITE_FIREBASE_APP_ID
   };
   ```

3. **Add `.env` to `.gitignore`**

4. **Set environment variables** in your hosting platform (Vercel, Netlify, etc.)

---

## Support

For issues or questions:
- Email: info@anytechpros.com
- Phone: +91 9893220811

---

**Developed by AnyTechPros Infotech LLP**
