import axios from "axios";

export default class HaberServis{
    allActivities(){
        return axios.get("http://localhost:3000/allNews")
    }
    getOneActivities(id){
        return axios.get("http://localhost:3000/allActivities/",{id:id})
    }
    
}