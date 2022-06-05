import axios from "axios";

export default class CanteenService{
    getAll(){
        return axios.get("https://agalar-university.herokuapp.com/canteen")
    }
    getOneItem(id){
        return axios.get("https://agalar-university.herokuapp.com/canteen/",{id:id})
    }

}