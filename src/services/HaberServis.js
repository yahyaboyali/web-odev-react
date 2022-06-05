import axios from "axios";

export default class HaberServis{
    allNews(){
        return axios.get("https://agalar-university.herokuapp.com/news")
    }
    getOneNews(id){
        return axios.get("https://agalar-university.herokuapp.com/news/",{id:id})
    }
    
}