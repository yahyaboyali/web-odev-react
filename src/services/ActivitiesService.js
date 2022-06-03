import axios from "axios";

export default class ActivitiesService{
    allActivities(){
        return axios.get("http://localhost:3000/allActivities")
    }
    getOneActivities(id){
        return axios.get("http://localhost:3000/allActivities/",{id:id})
    }
    
}