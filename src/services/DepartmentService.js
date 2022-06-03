import axios from "axios";

export default class DepartmenService{
    getOneNews(id){
        return axios.get("http://localhost:3000/departments/",{id:id})
    }
    
}