import axios from "axios";

export default class FacultiesService{
    getOneFaculty(id){
        return axios.get("https://agalar-university.herokuapp.com/faculty/"+{id})
    }
    
}