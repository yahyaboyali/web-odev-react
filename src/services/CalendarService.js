import axios from "axios";

export default class CalendarService{
    allNews(){
        return axios.get("https://agalar-university.herokuapp.com/calendar")
    }
    getOneNews(id){
        return axios.get("https://agalar-university.herokuapp.com/calendar/",{id:id})
    }
    
}