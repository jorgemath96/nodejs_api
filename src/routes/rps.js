// Definiendo el router para el juego...
const { Router } = require('express');
const router = Router();
const Rps  = require('../controllers/rps-controller.js')

const rps = new Rps();


// Rutas del Juego...
router.get('/rps', (req, res) => {
  res.render('body/rps');
});

router.post('/rps', (req, res) => {
  res.redirect('/api/rps');
});

router.get('/jugado/:id', (req, res) => {
  var id = req.params.id;
  var nran = rps.nran(0,2);
  var imRan = rps.im[nran];
  var imRanName = rps.imName[nran];
  var seleN = rps.imName[rps.im.indexOf(id)];
  var resultado = rps.jugar(id,imRan, rps.im);
  res.render('body/rps-game', {  sele: id, seleName: seleN, seleWeb: imRan, seleWebName: imRanName, result: resultado });
});

router.post('/jugado/:id', (req, res) => {
  const id = req.params.id;
  res.redirect(`/api/jugado/${id}`);
});

// Exportar el router...
module.exports = router;