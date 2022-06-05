import axios from "axios";

export default class FacultiesService{
    getOneNews(id){
        return axios.get("https://agalar-university.herokuapp.com/faculties/",{id:id})
    }
    
}