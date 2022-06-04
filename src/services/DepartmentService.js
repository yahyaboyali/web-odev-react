import axios from "axios";

export default class DepartmenService{
    getOneNews(id){
        return axios.get("https://agalar-university.herokuapp.com/departments/",{id:id})
    }
    
}