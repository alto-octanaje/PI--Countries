const { Router } = require('express');
const { Activity, Country } = require('../db');
const activities = require("../controllers/activity")
const { Op } = require('sequelize')


const router = Router();

router.get("/", async(req,res)=>{
    try {
        const { name } = req.query;  
        console.log(name);
        if(name){
            const SearchActivity = await Activity.findAll({
                where: {
                    name:{
                        [Op.iLike]: `%${name}%`
                    }
                }
            })
            if(SearchActivity.length === 0){
                return res.status(404).json({
                    msg: "actividad no encontrado"
                })
        }
        res.status(200).json(SearchActivity)
    }else{
        const allActivities = await Activity.findAll({ include: Country })
        //filtro para el front que trae todas las actividades
        const filterA = allActivities.map(e => e.name.toLowerCase())
        const total = filterA.filter((item, index) => {
        return filterA.indexOf(item) === index;
    })
    res.json(total)
            
        }

    } catch (error) {
        res.status(400).json({error: error.msg})
    }
    
})

//This route generates all activities
router.get('/allActivities', async (req, res) => {
    const allActivities = await Activity.findAll({ 
        
    })
    res.json(allActivities)
});





router.post("/", async (req,res)=>{
    try {
        const {name, difficulty, duration, season, countries} = req.body
        if(!name || !difficulty || !duration || !season || !countries){
            return res.status(404).json({msg: "Fill in the necessary fields to complete the form"})
        }
        
        const newActivity= await activities.createActivities(
            name,
            difficulty,
            duration,
            season,
            countries
        )
        return res.status(200).json(newActivity);   
    }
    catch (error) {
        return res.status(400).send({error: error.message});
    }
})


module.exports = router;

// router.get('/', async (req, res) => {
    //     const {name}= req.query;
    //     name.toLowerCase();
    //     const allActivities = await Activity.findAll({ include: Country })
    //     //filtro para el front que trae todas las actividades
    //     const filterA = allActivities.filter(e => e.name=== name.toLowerCase())
    //     const total = filterA.filter((item, index) => {
    //         return filterA.indexOf(item) === index;
    //     })
    //     res.json(filterA)
    // });
