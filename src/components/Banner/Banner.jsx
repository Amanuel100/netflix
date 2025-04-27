import React, { useEffect, useState} from 'react'
import bannerStyle from "./banner.module.css"
import axios from "../../utils/axios";
import requests from '../../utils/requests';

const Banner = () => {
    const [movie, setMovie] = useState({});  

    useEffect(() => {  
        (async () => {  
            try {  
                const request = await axios.get(requests.fetchNetflixOriginals);  
                console.log(request);  
                setMovie(request.data.results[  
                    Math.floor(Math.random() * request.data.results.length)  
                ]);  
            } catch (error) {  
                console.log("error", error);  
            }  
        })();  
    }, []);  

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <div
            className={bannerStyle.banner} 
            style={{  
                backgroundSize: "cover",  
                backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,  
                backgroundPosition: "center",  
                backgroundRepeat: "no-repeat"  
            }}
        >  
            <div className={bannerStyle.banner_contents}>  
                <h1 className={bannerStyle.banner_title}>  
                    {movie?.title || movie?.name || movie?.original_name}  
                </h1>  
                <div className={bannerStyle.banner_buttons}>  
                    <button id={bannerStyle.play} className={bannerStyle.banner_button}>Play</button>  
                    <button className={bannerStyle.banner_button}>My List</button>  
                </div>  
                <h1 className={bannerStyle.banner_description}>{truncate(movie?.overview, 150)}</h1>  
            </div>  
            <div className={bannerStyle.banner_fadeBottom} />  
        </div>  
    );
}

export default Banner