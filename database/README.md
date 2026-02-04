# Database Setup Guide

This folder contains the SQL scripts needed to set up the Supabase database for AnyTechPros.

## Files

- **setup.sql** - Complete SQL script to create tables and policies
- **README.md** - This file

## Quick Start

### 1. In Supabase Dashboard

1. Go to your Supabase project: https://supabase.com/dashboard
2. Click on **SQL Editor** in the left sidebar
3. Click **New Query**
4. Open `setup.sql` from this folder
5. Copy **ALL** the SQL code
6. Paste it into the Supabase SQL Editor
7. Click **RUN** (or press Ctrl+Enter)

### 2. Create Storage Bucket

1. Go to **Storage** in the left sidebar
2. Click **New bucket**
3. Bucket name: `resumes`
4. Toggle **Public bucket** to ON
5. Click **Create bucket**

### 3. Get Your Credentials

1. Click the **Settings** (gear icon) in the sidebar
2. Go to **API** section
3. Copy these values:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public key**: The long key under "Project API keys"

### 4. Update Config File

1. Open `src/firebase/config.js` in your project
2. Replace the placeholders:
   ```javascript
   const supabaseUrl = 'https://ctxdkdcojofxjpawciug.supabase.co'; // Your actual URL
   const supabaseAnonKey = 'eyJhbGc...'; // Your actual key
   ```

## Database Schema

### Tables

#### 1. `jobs`
Stores all job postings created by admin.

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key (auto-generated) |
| title | TEXT | Job title |
| department | TEXT | Department name |
| location | TEXT | Job location |
| type | TEXT | Employment type (Full-time, Part-time, etc.) |
| description | TEXT | Job description |
| requirements | TEXT[] | Array of requirements |
| responsibilities | TEXT[] | Array of responsibilities |
| include_github | BOOLEAN | Whether to show GitHub field in application |
| posted_date | TIMESTAMP | When job was posted |
| created_at | TIMESTAMP | Record creation time |

#### 2. `applications`
Stores all job applications submitted by candidates.

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key (auto-generated) |
| job_id | UUID | Reference to jobs table |
| job_title | TEXT | Copy of job title |
| full_name | TEXT | Applicant's full name |
| email | TEXT | Applicant's email |
| phone | TEXT | Applicant's phone number |
| experience | TEXT | Years of experience |
| degree | TEXT | Educational qualification |
| linkedin | TEXT | LinkedIn profile URL |
| github | TEXT | GitHub profile URL (optional) |
| resume_url | TEXT | URL to uploaded resume |
| applied_date | TIMESTAMP | When application was submitted |
| created_at | TIMESTAMP | Record creation time |

### Storage Buckets

#### `resumes`
- **Type**: Public bucket
- **Purpose**: Store applicant resume/CV files
- **Format**: PDF, DOC, DOCX
- **Max Size**: 5MB per file

## Security (Row Level Security)

All tables have RLS enabled with public access policies:
- **Read**: Anyone can read data
- **Write**: Anyone can insert/update/delete

⚠️ **Note**: For production, you should restrict write access to authenticated admins only.

## Verification

After running the SQL, verify everything is set up:

```sql
-- Check tables exist
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public';

-- Check policies
SELECT tablename, policyname FROM pg_policies;
```

## Troubleshooting

**Error: relation "jobs" already exists**
- The table was already created. Skip that section or drop the table first.

**Error: policy already exists**
- The policy was already created. Skip that section or drop the policy first.

**Error: bucket not found**
- Create the `resumes` bucket manually in Storage section first.

## Admin Credentials

**User ID**: `Anytechpros2026`  
**Password**: `@#!Anytech2026`

These are hardcoded in `src/firebase/config.js` for admin login.
