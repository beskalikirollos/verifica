app.get('/', function(req,res) {
    res.sendFile('index.html');
   });
   const path = require('path');

app.get('/',function(req,res){
 res.sendFile(path.join(__dirname, 'index.html')); //__dirname : Ritorna la cartella del progetto
});
