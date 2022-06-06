import axios from "axios";

export default class DepartmenService{
    getDepartmentByFacultyId(fid){
        return axios.get("https://agalar-university.herokuapp.com/department/"+ fid)
    }
    
    getDepartmentSlides(did){
        return axios.get("https://agalar-university.herokuapp.com/department-slide/"+ did)
    }
}