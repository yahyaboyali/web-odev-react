import axios from "axios";

export default class LecturersService{
    getAll(){
        return axios.get("https://agalar-university.herokuapp.com/lecturers")
    }
    getOneLectures(id){
        return axios.get("https://agalar-university.herokuapp.com/lecturers/",{id:id})
    }

}