

const Mock = (app) => {
    app.get('/api/user/info', function (req, res) {
        res.json({
            status: "ok",
            data: {
                id: 10000,
                name: '13500000000',
                avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
                email: 'antdesign@alipay.com',
                access: 'admin',
                phone: '13500000000',
                status: 'normal'
            }
        })
    })
  
}

module.exports = Mock