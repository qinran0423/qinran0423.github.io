export default {
	base: '/blog/',
	title: "Mick's Blog",
	description: "记录一些东西",
	themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { 
                text: 'Mick 博客', 
                items: [
                    { text: 'Github', link: 'https://github.com/qinran0423' },
                    { text: '掘金', link: 'https://juejin.cn/user/2972688068406429/posts' }
                ]
            }
        ],
		sidebar: [
			{
				text: 'diff算法',
				link: '/',
				items: [
					{text: 'Vue2 双端diff算法', link: '/writing-article/'}
				]
			}
		]
    }
}