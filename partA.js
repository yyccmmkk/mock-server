const list = require("./store");
let count = 0;
const percentList = [20, 40, 60, 80, 100, 100];

list.push(
  ...[
    {
      path: "/test/work-progress",
      callback: (ctx, next) => {
        ctx.body = JSON.stringify({
          code: 0,
          data: percentList[count % percentList.length],
          msg: "修改成功"
        });
        count++;
      }
    },
    "/tms/vehicle-type/update",
    {
      method: "get",
      path: "/test/1",
      data: {
        code: 0,
        msg: "success"
      }
    },
    {
      path:'/test/8',
      data:()=>{
        return {
          data: Math.random()>0.5
        }
      }
    }
  ]
);
