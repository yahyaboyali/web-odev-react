import axios from "axios";

export default class CalendarService{
    allNews(){
        return axios.get("http://localhost:3000/calendar")
    }
    getOneNews(id){
        return axios.get("http://localhost:3000/calendar/",{id:id})
    }
    
}