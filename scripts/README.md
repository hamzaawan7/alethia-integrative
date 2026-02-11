remote-git.sh — Usage

1) Make the script executable (run locally):

```bash
chmod +x scripts/remote-git.sh
```

2) Example: run `git pull` on the remote repo path `/home/u938549775/myrepo`:

```bash
./scripts/remote-git.sh /home/u938549775/myrepo "git pull origin main"
```

3) Example: commit & push on remote (runs interactively, you'll be prompted for password unless you use SSH keys):

```bash
./scripts/remote-git.sh /home/u938549775/myrepo "git add . && git commit -m 'Update' && git push origin main"
```

Notes and security:
- I cannot log in to your server or use the credentials you posted. Run the above locally on your machine.
- Prefer SSH keys: generate them with `ssh-keygen -t ed25519` and copy the public key to the server's `~/.ssh/authorized_keys`.
- Rotate/change the password you shared publicly as soon as possible.
