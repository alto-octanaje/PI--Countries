const { Country, Activity } = require("../db");


module.exports={
    createActivities: async(name, difficulty, duration, season, countries )=>{
        let activityExists = await Activity.findAll({
            where: { name: name},
            include: [{ model:Country}]
        })
       if (activityExists.length===0) {
        try {
            let newActivity = await Activity.create({ 
                name, difficulty, duration, season 
            });
            for(let nCountry of countries){
                console.log(nCountry);
                const selectedCountry = await Country.findOne({where: {name: nCountry}})
                await newActivity.addCountry(selectedCountry)
            }
            
           return newActivity
        } 
        catch (error) {
            res.status(400).json({error: error.msg})

        }
       }
       else{
        // res.status(400).json({error: error.msg})
        throw new Error("Activity already exists");
       }
    }
}

// --------------------------------------------

// try {
//     console.log("cparte 1");
//     const {name, difficulty, 
//         duration, season, countries} = req.body
//         const selectedCountry = await Country.findOne({where: {name: nCountry}})
//         let newActivity = await Activity.create({ name, difficulty, duration, season })
//         await newActivity.addCountry(selectedCountry)

//     let notCreated = 0
//     let created = 0

//     if(!name || !difficulty || !duration || !season || !countries){
//         return res.status(404).json({msg: "incomplete form"})
//     }
//     console.log("cparte 2");
//     let activityExists = await Activity.findOne({
        
//         where: { name: name},
//         // include: [{ model:Country, where:{  name: countries } }]
//     })
//     console.log("cparte 3");
//     if(activityExists){
       
//         console.log("cparte 4");
//         res.status(200).json(activityExists);
//     }else{
//         console.log("cparte 5");
//         for(let nCountry of countries){
//             const selectedCountry = await Country.findOne({where: {name: nCountry}})
//             let newActivity = await Activity.create({ name, difficulty, duration, season })
//             await newActivity.addCountry(selectedCountry)

//         }
//         console.log("cparte 6");
//         created++;
      
//         console.log("cparte 7 ");

//         return res.status(200).json({created, activityWithCountr})
//     }

    