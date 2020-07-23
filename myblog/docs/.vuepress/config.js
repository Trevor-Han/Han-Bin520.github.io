module.exports = {
    title: "HAN-BIN",
    description: "MY BLOG",
    themeConfig: {
        nav: [
            { text: "首页", link: "/" },
            { text: "基础教程", link: "/basics/" },
            { text: "基础知识", link: "/foo/" },
            { text: "项目实战", link: "/project/" },
            { text: "零散文章", link: "/article/" },
            { text: "一起学习", link: "/association/" },
            { text: "前端架构师", link: "/architect/" },
            { text: "github", link: "https://github.com/Han-Bin520/" }
        ],
        sidebar: {
            "/foo/": ["","one","two"]
        }
    }
}