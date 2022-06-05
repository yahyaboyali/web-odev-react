import axios from "axios";

export default class AdministrativeUnits{
    alldmins(){
        return axios.get("https://agalar-university.herokuapp.com/administrative-units")
    }
    getOneAdmin(id){
        return axios.get("https://agalar-university.herokuapp.com/administrative-units/",{id:id})
    }
    
}