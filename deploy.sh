
set -e
npm run build
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:Han-Bin520/Han-Bin520.github.io.git master
cd -