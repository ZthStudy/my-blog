/*
 * @Description:
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2020-06-21 18:01:30
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2020-06-21 18:03:10
 */

const router = require("koa-router")();

router.prefix("/api/myLove");

router.get("/trips", async (ctx, next) => {
  ctx.body = {
    code: "success",
    data: [
      {
        name: "SanYa",
        title: "三亚-亚龙湾",
        children: [
          {
            subTitle: "亚龙湾",
            timestamp: "2020/5/16",
            imageSrcs: [
              "https://s1.ax1x.com/2020/06/19/NKQ3Jf.jpg",
              "https://s1.ax1x.com/2020/06/19/NKQtyQ.jpg",
              "https://s1.ax1x.com/2020/06/19/NKQYQg.jpg",
              "https://s1.ax1x.com/2020/06/19/NKQ8W8.jpg",
              "https://s1.ax1x.com/2020/06/19/NKQJSS.jpg",
            ],
          },
          {
            subTitle: "天堂森林公园",
            timestamp: "2020/5/17",
            imageSrcs: [
              "https://s1.ax1x.com/2020/06/19/NKnZHx.jpg",
              "https://s1.ax1x.com/2020/06/19/NKnPCF.jpg",
              "https://s1.ax1x.com/2020/06/19/NKnFgJ.jpg",
              "https://s1.ax1x.com/2020/06/19/NKn94U.jpg",
              "https://s1.ax1x.com/2020/06/19/NKnEuR.jpg",
              "https://s1.ax1x.com/2020/06/19/NKnVD1.jpg",
              "https://s1.ax1x.com/2020/06/19/NKnu4O.jpg",
              "https://s1.ax1x.com/2020/06/19/NKnmE6.jpg",
              "https://s1.ax1x.com/2020/06/19/NKu7lQ.jpg",
              "https://s1.ax1x.com/2020/06/19/NKuHyj.jpg",
              "https://s1.ax1x.com/2020/06/19/NK1FgO.jpg",
              "https://s1.ax1x.com/2020/06/19/NK1PC6.jpg",
              "https://s1.ax1x.com/2020/06/19/NK1EKe.jpg",
              "https://s1.ax1x.com/2020/06/19/NK1i8K.jpg",
            ],
          },
          {
            subTitle: "蜈支洲岛",
            timestamp: "2020/5/18",
            imageSrcs: [
              "https://s1.ax1x.com/2020/06/19/NK3eQU.jpg",
              "https://s1.ax1x.com/2020/06/19/NK3VzT.jpg",
              "https://s1.ax1x.com/2020/06/19/NK3ion.jpg",
              "https://s1.ax1x.com/2020/06/19/NK3AJ0.jpg",
              "https://s1.ax1x.com/2020/06/19/NK3kiq.jpg",
              "https://s1.ax1x.com/2020/06/19/NK3nL4.jpg",
              "https://s1.ax1x.com/2020/06/19/NK3myF.jpg",
            ],
          },
        ],
      },
    ],
  };
});

module.exports = router;
