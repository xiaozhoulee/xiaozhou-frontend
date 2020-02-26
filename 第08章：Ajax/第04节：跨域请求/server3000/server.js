const Koa = require("koa");
const router = require("koa-router")();
const static = require("koa-static");
const app = new Koa();
app.use(static(__dirname + "/public"));
router.get("/data", ctx => {
    //设置服务器的响应头信息，就可以允许跨域请求
    ctx.set('Access-Control-Allow-Origin', 'http://127.0.0.1:8080'); 
    ctx.body = "hello world"
})

app.use(router.routes());
app.listen("3000",() => {
    console.log("server is running")
})