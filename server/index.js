const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');

const ROOT = path.resolve(__dirname, '../');

const app = new Koa();

// add static file
app.use(serve(ROOT + '/client'));

app.listen(3000);
console.log("access localhost:3000")