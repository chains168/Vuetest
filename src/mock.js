const Mock = require('mockjs')
//使用mockjs模拟数据
Mock.mock('/api/data', (req, res) => {
    return {
        data: [
            {
                'img': 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1563456679&di=69dd1521c8d208f4f5cdfd6bce5d6caf&src=http://img5.duitang.com/uploads/item/201412/03/20141203230814_A2iSY.jpeg',
                id: '1'
            },
            {
                'img': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3645653887,168408008&fm=27&gp=0.jpg',
                id: '1'
            }
        ]
    }
})
// 新闻列表
Mock.mock('/api/newList', (req, res) => {
    return {
        data: [
            {
                'img': 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1563456679&di=69dd1521c8d208f4f5cdfd6bce5d6caf&src=http://img5.duitang.com/uploads/item/201412/03/20141203230814_A2iSY.jpeg',
                id: '1',
                title: '复合肥解放军防范和几点回家发电机房活动介绍费决定是否觉得是回家吃饭都是几点回家孵化基地',
                click: 2655,
                time: 2019 - 7 - 20
            },
            {
                'img': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3645653887,168408008&fm=27&gp=0.jpg',
                id: '2',
                title: '复合肥解放军防范和几点回家发电机房活动介绍费决定是否觉得是回家吃饭都是几点回家孵化基地',
                click: 11,
                time: 2019 - 7 - 20
            },
            {
                'img': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3645653887,168408008&fm=27&gp=0.jpg',
                id: '3',
                title: '附加费会计法',
                click: 11,
                time: 2019 - 7 - 22
            },
            {
                'img': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3645653887,168408008&fm=27&gp=0.jpg',
                id: '4',
                title: '附加费会计法',
                click: 11,
                time: 2019 - 7 - 22
            },
            {
                'img': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3645653887,168408008&fm=27&gp=0.jpg',
                id: '5',
                title: '附加费会计法',
                click: 11,
                time: 2019 - 7 - 22
            },
            {
                'img': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3645653887,168408008&fm=27&gp=0.jpg',
                id: '6',
                title: '附加费会计法',
                click: 11,
                time: 2019 - 7 - 22
            },
            {
                'img': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3645653887,168408008&fm=27&gp=0.jpg',
                id: '7',
                title: '附加费会计法',
                click: 11,
                time: 2019 - 7 - 22
            },
            {
                'img': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3645653887,168408008&fm=27&gp=0.jpg',
                id: '8',
                title: '附加费会计法',
                click: 11,
                time: 2019 - 7 - 22
            }
        ]
    }
})

// 图片列表
Mock.mock('/api/photolist', (req, res) => {
    return {
        data: [
            {
                'img': 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1563456679&di=69dd1521c8d208f4f5cdfd6bce5d6caf&src=http://img5.duitang.com/uploads/item/201412/03/20141203230814_A2iSY.jpeg',
                id: '1',
                title: '复合肥解放军防范和几点回家发电机房活动介绍费决定是否觉得是回家吃饭都是几点回家孵化基地',
                click: 2655,
                time: 2019 - 7 - 20
            },
            {
                'img': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3645653887,168408008&fm=27&gp=0.jpg',
                id: '2',
                title: '复合肥解放军防范和几点回家发电机房活动介绍费决定是否觉得是回家吃饭都是几点回家孵化基地',
                click: 11,
                time: 2019 - 7 - 20
            },
            {
                'img': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3645653887,168408008&fm=27&gp=0.jpg',
                id: '3',
                title: '附加费会计法',
                click: 11,
                time: 2019 - 7 - 22
            },
            {
                'img': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3645653887,168408008&fm=27&gp=0.jpg',
                id: '4',
                title: '附加费会计法',
                click: 11,
                time: 2019 - 7 - 22
            },
            {
                'img': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3645653887,168408008&fm=27&gp=0.jpg',
                id: '5',
                title: '附加费会计法',
                click: 11,
                time: 2019 - 7 - 22
            },
            {
                'img': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3645653887,168408008&fm=27&gp=0.jpg',
                id: '6',
                title: '附加费会计法',
                click: 11,
                time: 2019 - 7 - 22
            },
            {
                'img': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3645653887,168408008&fm=27&gp=0.jpg',
                id: '7',
                title: '附加费会计法',
                click: 11,
                time: 2019 - 7 - 22
            },
            {
                'img': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3645653887,168408008&fm=27&gp=0.jpg',
                id: '8',
                title: '附加费会计法',
                click: 11,
                time: 2019 - 7 - 22
            },
            {
                'img': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3645653887,168408008&fm=27&gp=0.jpg',
                id: '9',
                title: '附加费会计法',
                click: 11,
                time: 2019 - 7 - 22
            },
            {
                'img': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3645653887,168408008&fm=27&gp=0.jpg',
                id: '10',
                title: '附加费会计法',
                click: 11,
                time: 2019 - 7 - 22
            },
            
        ]
    }
})

// 图片详情列表
Mock.mock('/api/photoDetailList', (req, res) => {
    return {
        data: [
            {
                src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                alt: 'picture1',
                title: 'Image Caption 1',
                w: 600,
                h: 400
            },
            {
                src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                alt: 'picture1',
                title: 'Image Caption 1',
                w: 600,
                h: 400
            },
            {
                src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
                msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
                alt: 'picture2',
                title: 'Image Caption 2',
                w: 1200,
                h: 900
            },
            {
                src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                alt: 'picture1',
                title: 'Image Caption 1',
                w: 600,
                h: 400
            },
            {
                src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                alt: 'picture1',
                title: 'Image Caption 1',
                w: 600,
                h: 400
            },
            {
                src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                alt: 'picture1',
                title: 'Image Caption 1',
                w: 600,
                h: 400
            },
            {
                src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                alt: 'picture1',
                title: 'Image Caption 1',
                w: 600,
                h: 400
            },
            {
                src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                alt: 'picture1',
                title: 'Image Caption 1',
                w: 600,
                h: 400
            }
        ]
    }
})