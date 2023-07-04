import React from "react";
import './style.css';

const Header = () =>{

    return(
        <div className="header-box">
            <div className="d-flex justify-content-start align-items-center"style={{height:"100%"}}>
                <div className="margin-left-header">

                    <div className="img-box">
                        <img src="/images/AIDA.svg" alt="logo" width={135} height={38} />
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Header;