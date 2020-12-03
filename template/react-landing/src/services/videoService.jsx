import axios from "axios";

const getAllVideosApi = "http://localhost:8080/video/getallvideos";
const addVideoApi = "http://localhost:8080/video/addvideo";

class videoService {

    getAllVideos(){
        return axios.get(getAllVideosApi);
    }
    addVideo(params){
        return axios.post(addVideoApi, params);
    }
}

export default new videoService();