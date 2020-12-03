import axios from "axios";

const api = "http://localhost:8080/video/getallvideos";

class mainService {

    getAllVideos(){
        return axios.get(api);
    }
}

export default new mainService();