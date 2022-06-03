import axios from "axios";

export default class CampusService{
    allNews(){
        return axios.get("http://localhost:3000/campuses")
    }
    getOneNews(id){
        return axios.get("http://localhost:3000/campuses/",{id:id})
    }
    
}