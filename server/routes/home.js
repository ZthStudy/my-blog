const router = require("koa-router")();

router.prefix("/api/home");

router.get("/menu", async (ctx, next) => {
  ctx.body = {
    code: "success",
    data: [
      {
        name: "前端系列",
        route: "/study",
        id: 1,
      },
      {
        name: "荒野人生",
        route: "/life",
        id: 2,
      },
    ],
  };
});

module.exports = router;
