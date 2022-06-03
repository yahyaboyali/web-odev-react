import axios from "axios";

export default class CanteenService{
    getAll(){
        return axios.get("http://localhost:3000/canteen")
    }
    getOneItem(id){
        return axios.get("http://localhost:3000/canteen/",{id:id})
    }

}