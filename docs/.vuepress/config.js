module.exports = {
    title: "HAN-BIN",
    description: "MY BLOG",
    base:"/blog/",
    head: [
        ["link", { rel: "shortcut icon", type: "image/x-icon", href: "./logo.ico"}],
    ],
    markdown: {
        lineNumbers:true,
    },
    themeConfig: {
        smoothScroll: true,
        logo: "/logo.jpg",
        nav: [
            { text: "首页", link: "/" },
            { text: "笔记", link: "/foo/" },
            { text: "前端架构师", link: "https://hanbin666.gitee.io/resume/" },
            { text: "github", link: "https://github.com/Han-Bin520/" }
        ],
        sidebar: {
            "/foo/":[{
                title: "前端基础",
                collapsable:false,
                sidebarDepth:3,
                children: [
                    { title: "markdown基本语法",path: "/foo/"},
                    { title: "git基本命令",path: "/foo/git"},
                    { title: "css",path: "/foo/css"},
                    { title: "js",path: "/foo/js"},
                    { title: "jquery",path: "/foo/jquery"},
                    { title: "storage",path: "/foo/storage"},
                    { title: "HTTP/HTML",path: "/foo/html"},
                    { title: "vue",path: "/foo/vue"},
                ]
            }],
        }
    }
};