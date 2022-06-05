import axios from "axios";

export default class HaberServis{
    allNews(){
        return axios.get("https://agalar-university.herokuapp.com/allNews")
    }
    getOneNews(id){
        return axios.get("https://agalar-university.herokuapp.com/allNews/",{id:id})
    }
    
}