var express = require('express');
var router = express.Router();
var userModel=require('../models/userModel');
var destinoModel=require('../models/destinoModel');

/* GET home page. */
/* Antiguo render de home
router.get('/', function(req, res, next) {
  res.render('home',
      {
        title: 'Travel',
        layout: 'layout',
      });
});
*/
router.get('/login', function(req, res, next) {
    res.render('login',
        {
            title: 'Iniciar Sesion',
            layout: 'layout2',
        });
});

router.get('/registro', function(req, res, next) {
    res.render('registro',
        {
            title: 'Registro de Usuario',
            layout: 'layout2',
        });
});
// Controlador Destinos

//mostrar destinos en home
router.get('/', (req,res,next)=>{
    destinoModel.fetchActivo((error,destinos)=>{
        if(error) return res.status(500).json(error);
        res.render('home',{
            title:"Travel",
            layout:"layout",
            destinos
        })
    })
});

// Panel destinos

// Muestra todos los destinos
router.get('/admin/destinos', function(req, res, next) {
    destinoModel.fetchAll((error,destinos)=>{
        if(error) return res.status(500).json(error);
        res.render('panelDestinos',{
            title:"panel admin destinos",
            layout:"layout2",
            destinos
        })
    })
});
//Editamos el campo activo de destino

router.get('/admin/destinos/active/:id', function (req,res,next) {
    destinoModel.activoUpdate(req.params.id, (error,dest)=>{
         if(error) res.status(500).json(error);
         else{
             res.redirect('/admin/destinos');
         }
    })
});

//Eliminamos destino
router.get('/admin/destinos/delete/:id', function (req,res,next) {
    destinoModel.destinoDelete(req.params.id,(error,dest)=>{
        if(error) res.status(500).json(error);
        else{
            res.redirect('/admin/destinos');
        }
    })
});
//Creacion de destinos
router.post('/admin/destinos/create', function (req,res,next) {
    let destino={
        viaje:req.body.viaje,
        fechaIda:req.body.fecha_ida,
        fechaVuelta:req.body.fecha_vuelta,
        descripcion:req.body.descripcion,
        imagen:req.body.imagen,
        precio:req.body.precio,
        activo:req.body.activo
    }
    destinoModel.destinoCreate(destino,(error,dest)=>{
        if(error) res.status(500).json(error);
        else{
            res.redirect('/admin/destinos');
        }
    })

})



// Controlador Usuarios
router.get('/userlist', (req,res,next)=>{
    userModel.fetchAll((error,users)=>{
        if(error) return res.status(500).json(error);
        res.render('user-list',{
            title:"Listado de Ususrias",
            layout:"layout2",
            users
        })
    })
});

router.post('/loginook', function (req,res) {
    let Usuario={
        usuario:req.body.usuario,
        password:req.body.password
    }

    userModel.login(Usuario,function (error,result) {
        if(error) res.status(500).json(error);

        switch (result) {
            case 2:
                res.render('login', {
                    title: "Usuario erroneo",
                    layout: 'layout2',
                    errorLogin: true
                })
                break;
            case 1:
                console.log(Usuario);
                res.redirect('/');
                break;
        }
    })
});


router.post('/registrook', function (req, res) {
    let Usuario={
        usuario:req.body.usuario,
        email:req.body.email,
        password:req.body.password
    }
    userModel.registro(Usuario,function (error,result) {
        if(error) res.status(500).json(error);

        switch (result){
            case 1:
            res.render('registro',{
                title:"Usuario existente",
                layout:'layout2',
                errorUsuario:true
            })
                break;
            case 2:
            res.render('registro',{
                title:"Email existente",
                layout:'layout2',
                errorEmail:true
            })
                break;
            case 3:
            res.render('login',{
                title:"Registro correcto",
                layout:'layout2',
                correcto:true
            })
                break;
        }
    })
})
/*
router.get('/*', function(req, res, next) {
    res.render('error404',
        {
            title: 'error',
            layout: 'layout2',
        });
})
*/
module.exports = router;
