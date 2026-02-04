# Supabase Setup Guide for AnyTechPros Admin Panel

## Admin Login Credentials
- **User ID:** `Anytechpros2026`
- **Password:** `@#!Anytech2026`

## Features Implemented

### 1. **Admin Panel**
- Secure admin login with hardcoded credentials (no database needed for auth)
- Session-based authentication using browser sessionStorage
- Full dashboard to manage job positions
- View all job applications with applicant details

### 2. **Database Integration**
- Supabase for database and storage
- Two main tables: `jobs` and `applications`
- Resume/CV storage in Supabase Storage

---

## Supabase Setup Instructions

### Step 1: Create a Supabase Project

1. Go to [Supabase Console](https://supabase.com/dashboard)
2. Click "New Project"
3. Enter project details:
   - **Name:** AnyTechPros
   - **Database Password:** (create a strong password and save it)
   - **Region:** Choose closest to your users
4. Click "Create new project"
5. Wait for the project to be provisioned (~2 minutes)

### Step 2: Create Database Tables

Go to **SQL Editor** in the left sidebar and run these commands:

#### Create Jobs Table
```sql
CREATE TABLE jobs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  department TEXT NOT NULL,
  location TEXT NOT NULL,
  type TEXT NOT NULL,
  description TEXT NOT NULL,
  requirements TEXT[] NOT NULL DEFAULT '{}',
  responsibilities TEXT[] NOT NULL DEFAULT '{}',
  include_github BOOLEAN DEFAULT false,
  posted_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read jobs
CREATE POLICY "Anyone can read jobs"
  ON jobs FOR SELECT
  USING (true);

-- Policy: Anyone can insert/update/delete (since we're using session-based auth)
CREATE POLICY "Anyone can insert jobs"
  ON jobs FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can update jobs"
  ON jobs FOR UPDATE
  USING (true);

CREATE POLICY "Anyone can delete jobs"
  ON jobs FOR DELETE
  USING (true);
```

#### Create Applications Table
```sql
CREATE TABLE applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  job_id UUID REFERENCES jobs(id) ON DELETE CASCADE,
  job_title TEXT NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  experience TEXT NOT NULL,
  degree TEXT NOT NULL,
  linkedin TEXT,
  github TEXT,
  resume_url TEXT,
  applied_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read applications (admin only in production)
CREATE POLICY "Anyone can read applications"
  ON applications FOR SELECT
  USING (true);

-- Policy: Anyone can submit applications
CREATE POLICY "Anyone can insert applications"
  ON applications FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can update applications"
  ON applications FOR UPDATE
  USING (true);

CREATE POLICY "Anyone can delete applications"
  ON applications FOR DELETE
  USING (true);
```

### Step 3: Create Storage Bucket for Resumes

1. Go to **Storage** in the left sidebar
2. Click "Create a new bucket"
3. Enter bucket details:
   - **Name:** `resumes`
   - **Public bucket:** Toggle ON (so resume URLs are accessible)
4. Click "Create bucket"

#### Set Storage Policies

Go to **Policies** tab for the `resumes` bucket and add:

```sql
-- Policy: Anyone can upload resumes
CREATE POLICY "Anyone can upload resumes"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'resumes');

-- Policy: Anyone can read resumes
CREATE POLICY "Anyone can read resumes"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'resumes');
```

### Step 4: Get Your Supabase Credentials

1. Go to **Project Settings** (gear icon in sidebar)
2. Click on **API** section
3. Copy the following values:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **anon public** key (the long key under "Project API keys")

### Step 5: Update Your Project Configuration

Open `src/firebase/config.js` and replace the placeholders:

```javascript
const supabaseUrl = 'YOUR_SUPABASE_URL'; // Paste your Project URL here
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY'; // Paste your anon public key here
```

**Example:**
```javascript
const supabaseUrl = 'https://abcdefghijklmnop.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
```

---

## How to Use the Admin Panel

### 1. **Access Admin Login**
- Go to your website: `https://yourdomain.com/careers`
- Look for a small hidden button in the **bottom-right corner** (it's invisible but clickable)
- Click it to navigate to `/admin-login`

**Or directly visit:** `https://yourdomain.com/admin-login`

### 2. **Login Credentials**
- **User ID:** `Anytechpros2026`
- **Password:** `@#!Anytech2026`

### 3. **Manage Jobs**
- Click on **"Jobs"** tab
- Click **"Add New Job"** to create a job posting
- Fill in all required fields
- Toggle **"Include GitHub Field"** for tech positions
- Click **"Save Job"**

### 4. **View Applications**
- Click on **"Applications"** tab
- See all job applications
- View applicant details
- Download resumes by clicking the **"View Resume"** link

### 5. **Logout**
- Click the **"Logout"** button in the top-right corner

---

## Security Notes

⚠️ **Important Security Considerations:**

1. **Admin Credentials:** The admin credentials are hardcoded in the source code. For production, consider:
   - Moving credentials to environment variables
   - Implementing a more secure authentication system
   - Using Supabase Auth with email/password

2. **Row Level Security (RLS):** The current setup allows public access. For production:
   - Restrict write operations to authenticated users only
   - Update RLS policies to check for admin session

3. **Storage Bucket:** The resumes bucket is public. For better security:
   - Make the bucket private
   - Generate signed URLs for admin-only access to resumes

---

## Troubleshooting

### Issue: "Cannot read properties of undefined"
**Solution:** Make sure you've updated the Supabase credentials in `src/firebase/config.js`

### Issue: "Table does not exist"
**Solution:** Run the SQL commands in Step 2 to create the tables

### Issue: "Storage bucket not found"
**Solution:** Create the `resumes` bucket in Supabase Storage (Step 3)

### Issue: "Resume upload fails"
**Solution:** Check that the resumes bucket is set to public and has the correct policies

### Issue: "Login doesn't work"
**Solution:** Ensure you're using the exact credentials:
- User ID: `Anytechpros2026` (case-sensitive)
- Password: `@#!Anytech2026` (case-sensitive)

---

## Next Steps

1. ✅ Complete Supabase setup (Steps 1-4)
2. ✅ Update configuration file with your credentials
3. ✅ Test admin login
4. ✅ Add a test job
5. ✅ Submit a test application
6. ✅ View applications in admin dashboard

---

## Support

For any issues or questions, check the Supabase documentation:
- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Storage Guide](https://supabase.com/docs/guides/storage)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
