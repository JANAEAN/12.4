
const express=require('express');
const app=express();
app.post("/getdata",(req,res)=>{
    let obj=req.body;
    let data=JSON.parse(fs.readFileSync("./mock/data.json"));
    let filterdata=data.filter((item)=>{
        return item.name==obj.name&&item.pwd==obj.pwd;
    })
    if(filterdata.length>0){
        res.send(filterdata);
    }        
    console.log(data)                    
})

 app.listen(6868,()=>{
     console.log("成功")
 })