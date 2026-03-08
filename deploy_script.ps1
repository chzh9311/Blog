npm run build
cd .vuepress/dist

git config user.name "chzh9311"
git config user.email "chzh9311@163.com"

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:chzh931/chzh931.github.io.git master:gh-pages