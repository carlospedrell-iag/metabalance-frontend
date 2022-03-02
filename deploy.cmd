npm run build
cd dist
git add -A
git commit -m 'New'
git push -f git@github.com:chumpbo/metabalance-frontend.git master:gh-pages
cd ..