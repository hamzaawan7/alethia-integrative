#!/bin/bash
# remote-git.sh — wrapper to run git (or other) commands on a remote server via SSH
# Usage:
#   ./remote-git.sh /absolute/path/to/repo git pull origin main
#   ./remote-git.sh /absolute/path/to/repo "git add . && git commit -m 'msg' && git push origin main"

HOST="156.67.67.67"
PORT="65002"
USER="u938549775"

if [ -z "$1" ]; then
  echo "Usage: $0 /absolute/path/to/repo <command...>"
  exit 1
fi

REMOTE_PATH="$1"
shift

if [ -z "$1" ]; then
  echo "Provide the command to run inside the repo (e.g. git pull origin main)"
  exit 1
fi

# Build the remote command and run it over SSH (you will be prompted for the password unless you use keys)
REMOTE_CMD="cd '$REMOTE_PATH' && $*"

ssh -p "$PORT" "$USER@$HOST" "$REMOTE_CMD"
