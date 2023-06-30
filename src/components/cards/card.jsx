import React, { useState } from "react";
import'./style.css'
let TEXT=[
    {
        text:"No more waiting endlessly for agencies to send you model proposals."
    },
    {
        text:"Aida is designed to find exceptional talent who not only match your brief but also align with your creative direction."
    },
    {
        text:"Increase  your productivity and confirm jobs faster, no more wasted time on unsuitable model options."
    },
    {
        text:"Easily share your favourite models, gather feedback, and make confident decisions together."
    },
]

const Card = () =>{

    const [hoveredBoxIndex, setHoveredBoxIndex] = useState(1);

    const handleMouseEnter = (index) => {
      setHoveredBoxIndex(index);
    };
  
    const handleMouseLeave = () => {
      setHoveredBoxIndex(1);
    };
return(
    <div className="card-section">
        <div className="custom-container-age">
        <div className="row" style={{background:"#0E0C15"}}>

            {
            TEXT.map((x,index)=>{
                return(
                     <div className="col-12 col-md-6 col-lg-3">
                                <div
          className={`box ${hoveredBoxIndex === index ? 'hovered' : ''}`}
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
               <div className="card-text">
                    {index == 3 && (
                        <div className="pos-image-main-box-gra">
                            <img src={"/images/gradient.png"} alt="one" className="hard-gradient-img"/>
                        </div>
                    )}
                     {index == 0 && (
                        <div className="pos-image-main-box-gra">
                            <img src={"/images/gradient.png"} alt="one" className="hard-gradient-img"/>
                        </div>
                    )}
                        <div className="pos-image-main-box">
                            <img src={"/images/base0"+(3-index)+".svg"} alt="one" />
                        </div>
                        <div className="box-desc-card">
                            <div className="bg-hover">
                                <div className="width-text">
                                {x.text}
                                </div>
                            
                            </div>
                            <div className="pos-desc-items">
                            <div className="d-flex justify-content-between width-img" >
                                <div className="">
                                    <img src={"/images/0"+(index+1)+".png"} alt="" />
                                </div>
                                <div className="d-flex align-items-center">
                                    <p className="explore-more">Explore more</p>
                                    <div className="">
                                        <img src="/images/chevron-right.svg" alt="chevron" />
                                    </div>
                                </div>
                            </div>
                            </div>
                          
                        </div>
                     
                        {hoveredBoxIndex === index && (
                            <>
                                <div className="box-triangle-pos"></div>
                                <div className="pv-skull-hover">
                                    <img
                                        className="box-image"
                                        src={"/images/hover.png"}
                                        alt={`${x.text} Image`}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
                 
                </div>
                )
               
            })
            }
        </div>
        </div>
       
    </div>
)
}

export default Card;
                  /*      <div className="pos-image-trap">
                            <img src={"/images/hover.png"} alt="" />
                        </div>*/