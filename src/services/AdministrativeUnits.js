import axios from "axios";

export default class AdministrativeUnits{
    alldmins(){
        return axios.get("https://agalar-university.herokuapp.com/administrativeUnits")
    }
    getOneAdmin(id){
        return axios.get("https://agalar-university.herokuapp.com/administrativeUnits/",{id:id})
    }
    
}