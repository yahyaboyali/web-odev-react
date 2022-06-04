import axios from "axios";

export default class CampusService{
    allCampuses(){
        return axios.get("https://agalar-university.herokuapp.com/campuses")
    }
    getOneNews(id){
        return axios.get("https://agalar-university.herokuapp.com/campuses/",{id:id})
    }
    
}