import axios from "axios";

export default class DepartmenService{
    getOneNews(id){
        return axios.get("https://agalar-university.herokuapp.com/department/",{id:id})
    }
    
}