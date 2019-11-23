var express = require('express');
var mongoose = require('mongoose');
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
var app = express();

//Shemas
var Message = mongoose.model('Message',{
    name : String,
    message : String
  })
//Url bdd
mongoose.connect("mongodb+srv://oceane08:password974@cluster0-owldh.mongodb.net/test?retryWrites=true&w=majority", 
{useNewUrlParser: true},() =>

console.log("BDD CONNECTER")
);

app.use(express.static(__dirname));
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))


//middleware 
 
//Route pour afficher les messages
app.get('/messages', (req, res) => {
    Message.find({},(err, messages)=> {
      res.send(messages);
    })
  })

//Route pour afficher les messages

  app.post('/messages', (req, res) => {
    var message = new Message(req.body);
    message.save((err) =>{
      if(err)
        sendStatus(500);
      res.sendStatus(200);
    })
  })














//Connexion port 300
var server = app.listen(3000, () => {
    console.log("server is running on port", server.address().port);
   });