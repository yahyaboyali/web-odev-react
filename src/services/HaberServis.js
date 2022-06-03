import axios from "axios";

export default class HaberServis{
    allNews(){
        return axios.get("http://localhost:3000/allNews")
    }
}