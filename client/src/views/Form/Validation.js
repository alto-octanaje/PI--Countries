 const validation=(activityData)=>{
    let error={};
    if(!activityData.name){ // si el input esta vacio
        error.name ="This field cannot be empty";
    }
    if (!activityData.difficulty) {
        error.difficulty="You must select a difficulty" 
    }
    if(!activityData.duration){
        error.duration="You must select a duration" 
    }
    if(!activityData.season){
        error.season="You must select a season"
    }
    if(activityData.countries.length ===0){
        error.countries="You must select a counties"
    }
    

    return error;
}
export default validation;