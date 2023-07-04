import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import './style.css'
const CardFinal = () =>{
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1320px)' })
    const videoRef = useRef(null);

    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.volume = 1; // Set the initial volume to 1 (unmuted)
        videoRef.current.play(); // Start playing the video
      }
    }, []);
    return(
        <div className="container-box-footer">
            <div className="pos-footer-img">
                <img src="/images/footer.png" alt="footer" className="omg-footer"/>
            </div>
            <div className="d-flex justify-content-center">
                <div className="box-text-title" style={{position:"relative"}}>
                    {
                        !isTabletOrMobile ? <>
                        <p className="main-text">Need some inspiration? Generate<br/> moodboards in an instant</p>
                    <p className="sec-text mt-5">We know how difficult starting the creative process can be. Use our<br/> moodboard generator and turn your vision into reality</p>
                        </> : <>
                        <p className="main-text">Need some inspiration? Generate moodboards in an instant</p>
                    <p className="sec-text mt-5">We know how difficult starting the creative process can be. Use our moodboard generator and turn your vision into reality</p>
                        </>
                    }
                    
                    <div className="pos-under-text-footer">
                            <img src="/images/bar.png" alt="bar" />
                        </div>
                </div>
               
            </div>  
            <div className="d-flex justify-content-center">
                <div className="box-img-video my-5">
                    <video src="/images/moodar.mp4" autoPlay loop controls muted ref={videoRef} className="video-player"></video>
                </div>
            </div>  
            <div className="d-flex justify-content-center my-5">
                 <div className="card-users">
                        <div className="mt-5 mb-4 d-flex">
                            <img src="/images/left.svg" alt="right" className="rg-image"/>
                            <a href="https://airtable.com/shrgoWKx1SF9irIZy" target={'_blank'} className="trapezoid">REQUEST EARLY ACCESS</a>
                            <img src="/images/right.svg" alt="right" className="left-image"/>
                        </div>
                        <div className="d-flex justify-content-around px-4" style={{width:"100%"}}>
                            <div className="">
                                <img src="/images/twitter.svg" alt="twitter" />
                            </div>
                            <div className="">
                                <img src="/images/envelope.svg" alt="cardd"  />
                            </div>
                        </div>
                     </div>
            </div>
        </div>
    )

}

export default CardFinal;