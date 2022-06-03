import axios from "axios";

export default class CanteenService{
    allNews(){
        return axios.get("http://localhost:3000/canteen")
    }
    getOneNews(id){
        return axios.get("http://localhost:3000/canteen/",{id:id})
    }

}