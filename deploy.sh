#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/gith-pgs-client"

echo "Building..."
npm run build

echo "Deploying..."
rm -rf /tmp/gh-deploy
cp -r dist /tmp/gh-deploy
touch /tmp/gh-deploy/.nojekyll

cd ..

git checkout gh-pages
rm -rf *
cp -r /tmp/gh-deploy/* .
git add -A
git commit -m "deploy: $(date +%Y-%m-%d)"
git push origin gh-pages

git checkout main
cd gith-pgs-client

echo "Done. https://jan-kiezun.github.io/ will update shortly."
