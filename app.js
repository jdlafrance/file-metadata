var express = require('express');
var multer = require('multer');
var upload = multer({ dest: './uploads/'});

var app = express();
app.set('view engine', 'pug');


app.get('/', function(req, res, next){

    res.render('index', {title: 'metadata', message: 'This gem of a software will return the size of the file you upload. Upload wisely!'});
    
});
app.post('/', upload.single('fileUpload'), function (req, res) {
    console.log(req.file);
    res.send(500, 'File size is ' + req.file.size);
});


app.listen(8080);