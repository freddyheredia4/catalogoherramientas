var express = require('express');
var router = express.Router();
var herramientas = [
  {
    id: '01',
    descripcion: 'Martillo de goma'
  },
  {
    id: '02',
    descripcion: 'Desarmador estrella'
  },
  {
    id: '03',
    descripcion: 'Multimetro'
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Catalogo de Herramientas' ,herramientas: herramientas});
});

module.exports = router;
