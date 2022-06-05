import axios from "axios";

export default class CalendarService{
    allCalendar(){
        return axios.get("https://agalar-university.herokuapp.com/calendar")
    }
    getOneCalendar(id){
        return axios.get("https://agalar-university.herokuapp.com/calendar/",{id:id})
    }
    
}