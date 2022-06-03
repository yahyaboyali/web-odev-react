import axios from "axios";

export default class CampusService{
    allCampuses(){
        return axios.get("http://localhost:3000/campuses")
    }
    getOneNews(id){
        return axios.get("http://localhost:3000/campuses/",{id:id})
    }
    
}