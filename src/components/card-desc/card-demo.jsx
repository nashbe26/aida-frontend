import React from "react";
import './style.css'
let IMG_ARRAY=['1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png','10.png','11.png','12.png','13.png','14.png','15.png','16.png']

const UserCard = () =>{


    return(
        <div className="card-are-we">
            <div className="custom-container">
                <div className="text-intro-user">
                    <p>With an extensive database of diverse models, Aida transforms your casting brief into a collection of exciting model proposals by harnessing the power of AI</p>
                </div>
                <div className="personnat-card">
                    <div className="row">
                        {IMG_ARRAY.map(x=>{
                            return(
                                <div className="col-6 col-md-6 col-xl-3">
                                    <div className="card-img-persp py-3">
                                        <img src={"/images/"+x} alt="users" />
                                    </div>    
                                </div> 
                            )
                        })}
                    </div>

                </div>
            </div>

        </div>
    )

}

export default UserCard;