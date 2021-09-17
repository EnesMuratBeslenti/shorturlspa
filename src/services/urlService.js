import axios from "axios";

export default class UrlService{


    
    async urlAddAndShortUrlCreate(urlDto){
        return await axios.post("http://localhost:8010/api/v1/url/addUrl",urlDto);
    }

}
