const { Router } = require('express');
const { Activity, Country } = require('../db');
const activities = require("../controllers/activity")
const { Op } = require('sequelize')


const router = Router();
//This route generates all activities
router.get('/', async (req, res) => {
    const allActivities = await Activity.findAll({ 
        include: Country,
        tinclude: [{
            model:Country,
            through: {
                attributes: [ ]
            }
        }]
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
        return res.status(400).send(error.message);
    }
})

router.get('/', async (req, res) => {
    const allActivities = await Activity.findAll({ include: Country })
    //filtro para el front que trae todas las actividades
    const filterA = allActivities.filter(e => e.name=== req.query.name)
    const total = filterA.filter((item, index) => {
        return filterA.indexOf(item) === index;
    })
    res.json(filterA)
});




module.exports = router;

