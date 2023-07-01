import React from "react";
import './style.css';
import { useMediaQuery } from 'react-responsive'

const IntroSection = () =>{
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' })

    return(
        <div className="container-box-intro">

            <div className="d-flex justify-content-center">
                <div className="box-text-title">
                    <div style={{position:"relative"}}>
                        {isTabletOrMobile ?
                        <><p className="main-text  mb-4" >Discover exceptional talent with  our A.I powered search engine</p>
                        <p className="sec-text mt-5">Aida curates a personalised selection of incredible models from a simple text description 
or reference image. Empowering you to find the perfect talent for your project</p></>
                        : 
                        <><p className="main-text">Discover exceptional talent with <br/> our A.I powered search engine</p>
                        <p className="sec-text mt-4">Aida curates a personalised selection of incredible models from a simple text description <br/>
or reference image. Empowering you to find the perfect talent for your project</p></>
                        }
                        
                        <div className="pos-under-text">
                            <img src="/images/bar.png" alt="bar" />
                        </div>
                    </div>
                     
                     <div className="d-flex justify-content-center">
                        <div className="mt-4 mb-4 d-flex">
                            <img src="/images/left.svg" alt="right" className="rg-image"/>
                            <button className="trapezoid">REQUEST EARLY ACCESS</button>
                            <img src="/images/right.svg" alt="right" className="left-image"/>
                        </div>
                     </div>
                </div>
               
            </div>  
            <div className="d-flex justify-content-center">
                <div className="box-img-gen mt-2">
                <div className="box-img-video-minimal my-5">
                    <div className="box-card-image">
                        <img src="/images/up-bar.png" alt="generating"  />
                    </div>
                    <video src="/images/main aida.mp4" controls={true} className="minimal-player"></video>
                    <div className="box-under-w-one"></div>
                    <div className="box-under-w-two"></div>
                    <div className="box-under-w-three"></div>
                </div>
                </div>
            </div>  
           
        </div>
    )

}



export default IntroSection;