(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{470:function(t,e,r){"use strict";r.r(e);var a=r(14),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"git-学习笔记"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git-学习笔记"}},[t._v("#")]),t._v(" Git 学习笔记")]),t._v(" "),r("h2",{attrs:{id:"安装与配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装与配置"}},[t._v("#")]),t._v(" 安装与配置")]),t._v(" "),r("p",[t._v("下载安装包："),r("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[t._v("git-scm.com/downloads")]),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("配置：")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("$ "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"username"')]),t._v("\n$ "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email@example.com"')]),t._v("  \n")])])]),r("h2",{attrs:{id:"基础语句"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基础语句"}},[t._v("#")]),t._v(" 基础语句")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200216204934.png",alt:""}})]),t._v(" "),r("h3",{attrs:{id:"基本流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本流程"}},[t._v("#")]),t._v(" 基本流程")]),t._v(" "),r("ol",[r("li",[t._v("切换到指定的路径下："),r("code",[t._v("$ cd git-learning")])]),t._v(" "),r("li",[t._v("初始化 Git 仓库："),r("code",[t._v("$ git init")])]),t._v(" "),r("li",[t._v("将已存在 / 新增的文件，由 "),r("strong",[t._v("工作区")]),t._v(" 转移至 "),r("strong",[t._v("暂存区")]),t._v(" ：\n"),r("ul",[r("li",[r("code",[t._v("$ git add .")]),t._v(" ：添加工作区的所有文件")]),t._v(" "),r("li",[r("code",[t._v("$ git add xxx.xx")]),t._v(" ：添加单个文件")])])]),t._v(" "),r("li",[t._v("提交更新至 "),r("strong",[t._v("暂存区分支")]),t._v(" ："),r("code",[t._v('$ git commit -m "description"')])]),t._v(" "),r("li",[t._v("切换至某一个版本："),r("code",[t._v("$ git reset --hard commit_id")])])]),t._v(" "),r("h3",{attrs:{id:"常用语句"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常用语句"}},[t._v("#")]),t._v(" 常用语句")]),t._v(" "),r("ul",[r("li",[t._v("查看修改（仅文件在工作区时可以使用）："),r("code",[t._v("$ git diff")])]),t._v(" "),r("li",[t._v("查看仓库状态："),r("code",[t._v("$ git status")])]),t._v(" "),r("li",[t._v("查看提交历史（按照提交顺序）："),r("code",[t._v("$ git log")]),t._v(" , 按 "),r("code",[t._v("q")]),t._v(" 退出")]),t._v(" "),r("li",[t._v("查看命令历史（所有提交记录）："),r("code",[t._v("$ git reflog")])])]),t._v(" "),r("h2",{attrs:{id:"远程仓库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库"}},[t._v("#")]),t._v(" 远程仓库")]),t._v(" "),r("h3",{attrs:{id:"本地项目远程化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#本地项目远程化"}},[t._v("#")]),t._v(" 本地项目远程化")]),t._v(" "),r("p",[t._v("适用于本地已有项目文件的情况。")]),t._v(" "),r("ol",[r("li",[t._v("创建 SSH Key："),r("code",[t._v('$ ssh-keygen -t rsa -C "youremail@example.com"')]),t._v(" "),r("ul",[r("li",[t._v("更换为你的邮箱，一路回车即可")])])]),t._v(" "),r("li",[t._v("点开 GitHub "),r("a",{attrs:{href:"https://github.com/settings/keys",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[t._v("个人设置 - SSH and GPG keys")]),r("OutboundLink")],1),t._v("，添加新的 SSH key\n"),r("ul",[r("li",[t._v("Title 任意，Key 为 "),r("code",[t._v("id_rsa.pub")]),t._v(" 文件中的内容")])])]),t._v(" "),r("li",[t._v("在 GitHub 新建仓库，不要勾选 "),r("code",[t._v("Initialize this repository with a README")]),t._v(" "),r("ul",[r("li",[t._v("如果不小心初始化了仓库，则要先 pull 下来："),r("code",[t._v("$ git pull origin master")])])])]),t._v(" "),r("li",[t._v("复制 SSH 地址（示例："),r("code",[t._v("git@github.com:linyuxuanlin/git-learning.git")]),t._v("），在本地 Git 仓库下运行命令："),r("code",[t._v("$ git remote add origin git@server-name:user/repo-name.git")])]),t._v(" "),r("li",[t._v("将本地内容推送到远程仓库："),r("code",[t._v("$ git push -u origin master")]),t._v(" "),r("ul",[r("li",[t._v("在出现提示信息时输入 "),r("code",[t._v("yes")]),t._v(" 并回车继续")]),t._v(" "),r("li",[t._v("由于远程库是空的，我们第一次推送 master 分支时，加上了 "),r("code",[t._v("-u")]),t._v(" 参数，Git 不但会把本地的 master 分支内容推送的远程新的 master 分支，还会把本地的 master 分支和远程的 master 分支关联起来，在以后的推送或者拉取时就可以简化命令")])])]),t._v(" "),r("li",[t._v("未来每一次提交："),r("code",[t._v("$ git push origin master")])])]),t._v(" "),r("h3",{attrs:{id:"远程项目本地化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#远程项目本地化"}},[t._v("#")]),t._v(" 远程项目本地化")]),t._v(" "),r("p",[t._v("适用于从零开始，或基于别人的项目开发的情况。")]),t._v(" "),r("ol",[r("li",[t._v("将远程仓库克隆下来："),r("code",[t._v("$ git clone git@server-name:user/repo-name.git")])])]),t._v(" "),r("h2",{attrs:{id:"分支管理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分支管理"}},[t._v("#")]),t._v(" 分支管理")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200217195056.png",alt:""}})]),t._v(" "),r("blockquote",[r("p",[t._v("分支就是科幻电影里面的平行宇宙，当你正在电脑前努力学习 Git 的时候，另一个你正在另一个平行宇宙里努力学习 SVN。"),r("br"),t._v("\n如果两个平行宇宙互不干扰，那对现在的你也没啥影响。不过，在某个时间点，两个平行宇宙合并了，结果，你既学会了 Git 又学会了 SVN!")]),t._v(" "),r("p",[t._v("分支在实际中有什么用呢？假设你准备开发一个新功能，但是需要两周才能完成，第一周你写了 50% 的代码，如果立刻提交，由于代码还没写完，不完整的代码库会导致别人不能干活了。如果等代码全部写完再一次提交，又存在丢失每天进度的巨大风险。"),r("br"),t._v("\n现在有了分支，就不用怕了。你创建了一个属于你自己的分支，别人看不到，还继续在原来的分支上正常工作，而你在自己的分支上干活，想提交就提交，直到开发完毕后，再一次性合并到原来的分支上，这样，既安全，又不影响别人工作。")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200217202649.png",alt:""}})]),t._v(" "),r("ol",[r("li",[t._v("创建并切换至新分支："),r("code",[t._v("$ git switch -c branch_name")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("-c")]),t._v(" 代表创建并切换分支")])])]),t._v(" "),r("li",[t._v("查看当前分支："),r("code",[t._v("git branch")])]),t._v(" "),r("li",[t._v("将新分支内容合并到 master 上："),r("code",[t._v("$ git merge branch_name")]),t._v(" "),r("ul",[r("li",[t._v("先切换到待合并的分支，再使用合并命令（示例：先切换到 master，再执行以上命令）")]),t._v(" "),r("li",[t._v("当 Git 无法自动合并分支时，就必须首先解决冲突。解决冲突后，再提交，合并完成")]),t._v(" "),r("li",[t._v("解决冲突就是把 Git 合并失败的文件手动编辑为我们希望的内容，再提交")])])]),t._v(" "),r("li",[t._v("删除某个分支："),r("code",[t._v("$ git branch -d dev")])]),t._v(" "),r("li",[t._v("禁用 Fast forward 合并分支："),r("code",[t._v('$ git merge --no-ff -m "commit text" branch_name')]),t._v(" "),r("ul",[r("li",[t._v("因为本次合并要创建一个新的 commit，所以加上 "),r("code",[t._v("-m")]),t._v(" 参数，把 commit 描述写进去")]),t._v(" "),r("li",[t._v("Fast forward 模式下，删除分支后，会丢掉分支信息")])])])]),t._v(" "),r("h2",{attrs:{id:"github-漫游指南"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#github-漫游指南"}},[t._v("#")]),t._v(" GitHub 漫游指南")]),t._v(" "),r("p",[t._v("借助 GitHub 平台，我们可以发现丰富多彩的开源项目，并于全世界的开发者一起搭建开源世界。"),r("br"),t._v("\n当我们发现了一个优秀的开源项目，可以先 Fork 到自己的 GitHub 账户下（这样才拥有读写权限），然后再通过 SSH 克隆到本地进行开发。"),r("br"),t._v("\n开发完成后，可以在 GitHub 上发起一个 pull request, 如果原项目所有者觉得你的修改合适，那么将并入原有的开源项目中。")]),t._v(" "),r("h3",{attrs:{id:"github-cli"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#github-cli"}},[t._v("#")]),t._v(" GitHub CLI")]),t._v(" "),r("p",[t._v("GitHub CLI 是 GitHub 的命令行工具，将 pull requests, issues 等功能搬到命令行使用。"),r("br"),t._v("\n下载地址："),r("a",{attrs:{href:"https://cli.github.com/",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[t._v("cli.github.com")]),r("OutboundLink")],1),r("br"),t._v("\nGitHub CLI 目前正处于 Beta 版本，值得一试。")]),t._v(" "),r("h2",{attrs:{id:"参考与致谢"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考与致谢"}},[t._v("#")]),t._v(" 参考与致谢")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/896043488029600",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 教程 - 廖雪峰"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://blog.csdn.net/ShuSheng0007/article/details/80791849",target:"_blank",rel:"noopener noreferrer"}},[t._v("实际项目中如何使用 Git 做分支管理"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://nvie.com/posts/a-successful-git-branching-model/",target:"_blank",rel:"noopener noreferrer"}},[t._v("A successful Git branching model"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/doc/git-cheatsheet.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("git-cheatsheet.pdf"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://git-scm.com/book/zh/v2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pro Git"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://cli.github.com/manual/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub CLI - Manual"),r("OutboundLink")],1)])]),t._v(" "),r("blockquote",[r("p",[t._v("文章作者："),r("strong",[t._v("Power Lin")]),r("br"),t._v("\n原文地址："),r("a",{attrs:{href:"https://wiki-power.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki-power.com"),r("OutboundLink")],1),r("br"),t._v("\n版权声明：文章采用 "),r("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/deed.zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC BY-NC-SA 4.0"),r("OutboundLink")],1),t._v(" 协议，转载请注明出处。")])])])}),[],!1,null,null,null);e.default=i.exports}}]);