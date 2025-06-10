# 🚀 MongoDB Atlas Setup Guide

This guide walks you through setting up **MongoDB Atlas**, a cloud-based NoSQL database service, and connecting it to your **Node.js backend**.

---

## ✅ Step 1: Sign Up or Log In

1. Go to: [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Click **“Try Free”** or **“Sign In”**
3. Use your email, Google, or GitHub account to log in

---

## ✅ Step 2: Create a Free Cluster

1. Once logged in, click **“Build a Database”**
2. Choose:
   - **Shared** (Free Tier)
   - Cloud provider: **AWS** or **GCP**
   - Region: pick one closest to India (e.g., `Mumbai` or `Singapore`)
3. Click **“Create”**

🕒 *This may take 1–2 minutes to provision your cluster.*

---

## ✅ Step 3: Create a Database User

1. In the left sidebar, go to **Database Access**
2. Click **“Add New Database User”**
3. Fill out the form:
   - **Username**: e.g., `xyz`
   - **Password**: e.g., `password`
   - Role: Select **Built-In Roles → Read and write to any database**
4. Click **“Add User”**

> ⚠️ Keep your username and password safe! You'll use these in your backend connection string.

---

## ✅ Step 4: Whitelist IP Addresses

1. In the left sidebar, go to **Network Access**
2. Click **“Add IP Address”**
3. Choose:
   - ✅ **Allow access from anywhere** (`0.0.0.0/0`) *(recommended for development only)*
4. Click **Confirm**

---

## ✅ Step 5: Create a Database

1. Go to **Clusters → [Your Cluster] → Browse Collections**
2. Click **“Create Database”**
3. Fill in:
   - **Database name**: `MyApp`
   - **Collection name**: `names` *(or any collection name you prefer)*
4. Click **Create**

---

## ✅ Step 6: Get the Connection URI

1. Go to **Clusters → Connect → Connect your application**
2. Select **Driver: Node.js** and version `>= 3.0`
3. Copy the connection string:
    ```
        mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority
    ```

4. Replace the placeholders with your actual credentials:
   - `<username>` → your DB username (e.g., `xyz`)
   - `<password>` → your DB password (e.g., `password`)
   - `<cluster>` → your cluster name
   - `<dbname>` → your database name (e.g., `MyApp`)

---

🎉 That’s it! You’re now ready to connect MongoDB Atlas to your Node.js backend using Mongoose.

Need help with that next? Just say the word.

