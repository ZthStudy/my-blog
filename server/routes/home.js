const router = require("koa-router")();

router.prefix("/api/home");

router.get("/cards", async (ctx, next) => {
  ctx.body = {
    code: "success",
    data: [
      {
        imgSrc:
          "https://ae01.alicdn.com/kf/H2ff9a77e172a4ca0bfb6a3e808d14e66t.jpg",
        title: "Love",
        content: "tianhou & wangya",
      },
      {
        imgSrc:
          "https://ae01.alicdn.com/kf/H699aaad75c154f8da74a0aae74f375aem.jpg",
        title: "前端",
        content: "html、css、js、frameWork， happy record!",
      },
    ],
  };
});

module.exports = router;
