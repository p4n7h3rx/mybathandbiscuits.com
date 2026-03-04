# GitHub Connection Guide for Local Projects

This guide outlines the steps to connect local development projects to GitHub, manage SSH keys, and handle remote repository configurations when switching between different projects.

## 1. Initial Setup (One-Time)

### Check for Existing SSH Keys
Before creating a new key, check if you already have one:
```powershell
ls ~/.ssh
```
Look for `id_ed25519.pub` or `id_rsa.pub`.

### Generate a New SSH Key
If you don't have one, generate it (replace with your email):
```powershell
ssh-keygen -t ed25519 -C "your_email@example.com"
```
Press Enter to accept the default file location and optional passphrase.

### Add SSH Key to GitHub
1. Copy your public key to the clipboard:
   ```powershell
   cat ~/.ssh/id_ed25519.pub | clip
   ```
2. Go to [GitHub Settings > SSH and GPG keys](https://github.com/settings/keys).
3. Click **New SSH key**, give it a title (e.g., "Work Laptop"), and paste the key.

---

## 2. Connecting a New Local Project

### Initialize Git
Navigate to your project root and run:
```powershell
git init
```

### Add Remote Repository
Connect your local folder to a GitHub repository:
```powershell
# Using SSH (Best for security/speed)
git remote add origin git@github.com:p4n7h3rx/rainbowpaws-grooming.git

# Using HTTPS (If SSH is not configured)
git remote add origin https://github.com/p4n7h3rx/rainbowpaws-grooming.git
```

### Verification
Confirm the remote URL:
```powershell
git remote -v
```

---

## 3. Pushing Changes

### Create First Commit
```powershell
git add .
git commit -m "Initial commit"
```

### Push to Main
```powershell
git branch -M main
git push -u origin main
```
*The `-u` flag sets the default branch for future `git push` commands.*

---

## 4. Reconnecting or Switching Projects

### Updating Remote URL
If you move the project or change the owner:
```powershell
git remote set-url origin git@github.com:p4n7h3rx/rainbowpaws-grooming.git
```

### Handling Multiple Accounts
If you use multiple GitHub accounts, use a `~/.ssh/config` file to manage different keys.

### Common Commands
- **Check Status**: `git status`
- **Recent Work**: `git branch`
- **Sync Changes**: `git pull origin main`

---

## 5. Security Checklist
- [ ] Add `.gitignore` to prevent pushing `node_modules`, `.env`, or secrets.
- [ ] Use SSH instead of HTTPS to avoid frequent password prompts.
- [ ] Never share your **Private Key** (the one without `.pub`).
