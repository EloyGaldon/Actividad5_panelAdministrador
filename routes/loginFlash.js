var express = require('express');
var router = express.Router();
var winston=require('../config/winston');

router.get('/', (req,res,next)=>{
    winston.info("Error en la generacion");
    res.send("hola");
   // res.send(res.flash('error'));
})

router.get('/create', (req,res,next)=>{
    req.flash('info','Sesion flash creada');
    req.flash('error','error de cualquier tipo');
    req.redirect('/loginFlash');
})

module.exports = router;