var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/:id', function(req, res, next) {
    let idHerramienta = req.params.id;  
    let contenido = fs.readFileSync('./public/txt/'+idHerramienta+'.txt');
    let imagen = fs.readFileSync('./public/images/'+idHerramienta+'.jpg');
    let imagenString = Buffer.from(imagen).toString('base64');
    res.render('catalogo', { title: 'Catalogo de:'+idHerramienta,descripcion: contenido,imagen:imagenString});
});

module.exports = router;