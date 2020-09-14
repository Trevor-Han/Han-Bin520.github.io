# git基本命令
## git管理项目的优点
> 可以通过git status查看哪些文件没有被管理, 修改了哪些文件红色(没有被管理或者被修改了)、绿色(在暂缓区);
> 可以通过 git diff查看具体修改了哪些代码;
> 可以通过git log / git reflog查看项目演变历史;
> 可以通过git reset --hard 版本号  在任意版本之间切换;
> 无需备份多个文件, 每次commit提交Git会自动备份;
## git初始化
git init这个命令的作用是初始化项目。初始化后会有一个.git的隐藏文件夹。这个.git的作用域是当前文件夹。
## 初始化用户
初始化用户名和邮箱是为了便于多人git开发，我的git已经有了全局用户名和邮箱，可以进行修改

1. 修改全局用户名：$ git config --global user.name "name"

2. 修改全局邮箱：$ git config --global user.email "email"
## 添加文件夹
touch "文件名称"
## 加入暂缓区
加入所有：git add . 
## 提交master分支
git commit -m "描述"
## 忽略提交
在当前文件夹加入一个.gitignore文件，用于放置不需要被git管理的文件
## 查看修改代码
通过 git diff查看具体修改了哪些代码
## 查看演变历史
git log是完成查看；git reflog简短查看
## 版本切换
通过git reset --hard 版本号  在任意版本之间切换
## git分支命令
查看分支：git branch

创建分支：git branch "分支名称"

切换分支：git checkout"分支名称"

查看远程分支：git branch -r

提交到远程分支：git push --set-upstream origin

合并分支：git merge  "分支名称"(代表把"其他分支"合并到"主分支")

删除分支：git branch -d "分支名称"
## git log出现乱码
bash中：export LESSCHARSET=utf-8

cmd中：set LESSCHARSET=utf-8