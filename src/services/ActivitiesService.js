import axios from "axios";

export default class ActivitiesService{
    allActivities(){
        return axios.get("https://agalar-university.herokuapp.com/activity")
    }
    getOneActivities(id){
        return axios.get("https://agalar-university.herokuapp.com/allActivities/",{id:id})
    }
    
}