import React, { useState, useEffect } from 'react';
import mainService from "../services/mainService.jsx";

const Box = (props) => {
    return (
        <div className="box">
            <a href={props.detail.link} className="image fit">
                <img src={props.detail.image} alt="" />
                </a>
            <div className="inner">
                <h3>{props.detail.title}</h3>
                <p>{props.detail.description}</p>
                <a href={props.detail.watch} className="button style2 fit"
                    data-poptrox="youtube,800x400">Watch</a>
            </div>
        </div>
    )
}



const Main = () => {

    const [details, setDetails] = useState([]);

    useEffect(() => {
        mainService.getAllVideos()
                .then(response => {
                 setDetails(response.data);
                 console.log("Details:", response.data);
                })
    }, [])

    

    return (
        <div id="main">
		     <div className="inner">
			    <div className="thumbnails">
                    {details.map((detail) => {
                        return (
                            <Box detail={detail} key={detail.id}/>
                        )
                    })}
                </div>
            </div> 
            
        </div>
    )
}


export default Main;