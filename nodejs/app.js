var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var app = express();
var port = "3000";
var url="mongodb://localhost:27017/angular2";
var ObjectId = require('mongoose').Types.ObjectId;

var { Bags } = require('./model/bagsModel');
var { Phone } = require('./model/phoneModel');
var { Reqleave } = require('./model/requestLeaveModel');
var {UserForm} = require('./model/UserFormModel')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(url,(err,res)=>{
    if(!err){
        console.log("db is connected success");
    }else
    console.log('error in db connection '+JSON.stringify(err,undefined,2));
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

app.get('/',(req,res)=>{
    res.send("welcome to node js app")

})
app.get('/bags', (req, res) => {
    Bags.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving data :' + JSON.stringify(err, undefined, 2)); }
    });
});

app.get('/phone',(req,res)=>{
    Phone.find((err,docs)=>{
        if(!err){
            res.send(docs); 
        }else{console.log('error in Retriving data :'+JSON.stringify(err,undefined,2))}
    })
})
app.post('/phone',(req,res)=>{
    var phone = new Phone({
        name: req.body.name,
        price: req.body.price,
        company: req.body.company,
    });
    phone.save((err,docs)=>{
        if(!err){
            res.send(docs);
        }else console.log('error in saving data: '+JSON.stringify(err,undefined,2));
    })
})

app.get('/reqleave',(req,res)=>{
    Reqleave.find((err,result)=>{
        if(!err){
            res.send(result)
        }else console.log('error in geting data from server: ' +JSON.stringify(err,undefined,2))
    })
})

app.post('/reqleave',(req,res)=>{
    var reqleave = new Reqleave({
        employeeId : req.body.employeeId,
            name: req.body.name,
            resson : req.body.resson,
            date : req.body.date
    });
    console.log(req.body);
   reqleave.save((err,docs)=>{
       if(!err){
           res.send(docs)
       }else console.log('error in submit data: ' +JSON.stringify(err,undefined,2));
   })
})



app.get('/reqleave:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`no recorsd find with that id:${req.prams.id}`);

    Reqleave.findById(req.param.id,(err,docs)=>{
        if(!err){
            res.send(docs);
        }else{
            console.log('err in retriveing error: ' +JSON.stringify(err,undefined,2))
        }
    });
});
// router.get('/:id', (req, res) => {
//     if (!ObjectId.isValid(req.params.id))
//         return res.status(400).send(`No record with given id : ${req.params.id}`);

//     Employee.findById(req.params.id, (err, doc) => {
//         if (!err) { res.send(doc); }
//         else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
//     });
// });

app.get('/userform',(req,res)=>{
    UserForm.find((err,result)=>{
        if(!err){
            res.send(result)
        }else console.log('error in geting data from server: ' +JSON.stringify(err,undefined,2))
    })
})

app.post('/userform',(req,res)=>{
    var userform = new UserForm
    ({
            name: req.body.name,
            email : req.body.email,
            address:[{
            street:req.body.street ,
            city :req.body.city,
            zip:req.body.zip
        }],
            country:req.body.country

    });
    console.log(req.body);
    userform.save((err,docs)=>{
       if(!err){
           res.send(docs)
       }else console.log('error in submit data: ' +JSON.stringify(err,undefined,2));
   });
});
var server = app.listen(port)
    console.log("app running on port: ", +port)