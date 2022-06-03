import axios from "axios";

export default class LecturersService{
    getAll(){
        return axios.get("http://localhost:3000/lecturers")
    }
    getOneLectures(id){
        return axios.get("http://localhost:3000/lecturers/",{id:id})
    }

}