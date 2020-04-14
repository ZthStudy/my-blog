const router = require('koa-router')()

router.prefix('/api/home')

router.get('/menu', async (ctx, next) => {
    ctx.body = {
        code: 'success',
        data: [{
            name: '荒野人生1'
        },
        {
            name: '粗学杂记'
        }
        ]
    }
})

module.exports = router
