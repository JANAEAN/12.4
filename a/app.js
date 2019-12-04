const Koa=require('koa');
const app=new Koa();

app.use(async ctx=>{
    cyx.body="hello koa"
})
app.listen(2929,err=>{
    if (err) throw err;
    console.log('runing...');
})