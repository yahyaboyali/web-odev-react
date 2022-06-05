import axios from "axios";

export default class SlideService{
    allSlides(){
        return axios.get("https://agalar-university.herokuapp.com/slide")
    }
}