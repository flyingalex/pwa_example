const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');
const router = require("koa-router");
const send = require('koa-send');

const ROOT = path.resolve(__dirname, '../');

const app = new Koa();

// add static file
app.use(serve(ROOT + '/client'));

// router files


app.use(async (ctx) => {
  await send(ctx, path.resolve(ROOT, '/client/index.html'));
})

app.listen(3000);
console.log("access localhost:3000")