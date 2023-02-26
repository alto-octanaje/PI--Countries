const { Router } = require('express');
const {json} = require('body-parser');
const allCountry = require('../routes')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
 

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/all",(req,res)=>{
    try {
        const allCountry1=allCountry();
        res.status(200).json([...allCountry1])
    } catch (error) {
        res.status(400).json({err: error.message})
    }
} )


module.exports = router;


// .use  para asociar middleware a una instancia de la aplicación
//.get  es un método utilizado para definir una ruta en la aplicación que maneja solicitudes GET