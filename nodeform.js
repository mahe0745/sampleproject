const express = require('express');
const bodyParser= require('body-parser');
const { text } = require('express');
var fs = require('fs');
const { maxHeaderSize } = require('http');
const { del } = require('express/lib/application');


const app = express();


app.use(bodyParser.urlencoded(
    {extended:true}))



    const details =[

   {rollno:0,name:"shal"},
   
   {rollno:1,name:"kumar"},

   {rollno:2,name:"Rohit"},
    ];

    app.get('/',function(req,res){
    if (req.url == "/") {
        fs.readFile("form.html", function (error, pgResp) {
            if (error) {
                res.writeHead(404);
                res.write('Contents you are looking are Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(pgResp);
            }
            res.end();
        });
    }});

   app.get("/home",(req,res)=>{

       res.send(details);
   });
   
   
   app.post('/insert',function(req,res){
    
        const detail = [
            {rollno:details.length+1,
            name:req.body.email},


        ]
       details.push(detail);
       res.send(details);
  });
  
  app.post("/details/:rollno", (req, res) => {
    const itemId = parseInt(req.body.rollno1);
    console.log(itemId);
    const item = details.find(item1 => item1.rollno=== itemId);
 
    if (item) {
       res.send(item);
    } else {
       res.send("no");
    }
 });



  app.post("/delete",function(req,res){
        const roll = req.body.rollno1;
         console.log('deleting',roll);
         delete details[roll];
         res.send(details);


  });


  
  
    
app.listen(7000);
console.log("server running at 7000");




