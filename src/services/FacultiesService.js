import axios from "axios";

export default class FacultiesService{
    getOneNews(id){
        return axios.get("http://localhost:3000/faculties/",{id:id})
    }
    
}