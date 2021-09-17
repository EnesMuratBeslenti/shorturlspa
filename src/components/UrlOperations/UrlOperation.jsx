import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { UrlDto } from '../../models/UrlDto';
import UrlService from '../../services/urlService';

export default function UrlOperation() {

    const history = useHistory();
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");

    const handleLogOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("id")
        localStorage.removeItem("firstName")
        history.push("/")

        
    }


    const urlAddAndShortUrlCreate = async (e) => {
        e.preventDefault();
        let urlService = new UrlService();
        let urlDto = new UrlDto();
        urlDto.userId=localStorage.getItem("id");
        urlDto.url=url;
        urlService.urlAddAndShortUrlCreate(urlDto).then(res => {
            let response = res.data.data;
            setShortUrl(response.shortUrl)
            console.log(response, "response")
        }).catch(err => alert(err.response.data.message));

    }

    return (
        <div>

            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">WebUrlShorted</a>
                    <button className="btn btn-outline-success w-50" type="button" onClick={(e) => handleLogOut(e)}>Çıkış Yap</button>
                </div>
            </nav>

            <div className="bg-primary">
                <div className="pt-5">
                    <h2 className="text-center">Url Kısaltma Web Sitesi</h2>
                </div>
            </div>

            <div>
                <form>
                    <div className="d-flex justify-content-center mt-5">
                        <div class="col-4">
                            <input type="text" class="form-control " id="exampleInputEmail1" placeholder="Kısaltacağınız URL' i giriniz..." onChange={(e) => setUrl(e.target.value)} />
                        </div>
                        <button type="submit" class="btn btn-primary" onClick={(e) => urlAddAndShortUrlCreate(e)}>Kısalt</button>
                    </div>

                </form>
            </div>


            {shortUrl != "" && <p>{shortUrl}</p>}
            
        </div>
    )
}
