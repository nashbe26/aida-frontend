import React from "react";
import './style.css';

const Header = () =>{

    return(
        <div className="header-box">
            <div className="d-flex justify-content-center align-items-end"style={{height:"100%"}}>
                <div className="img-box">
                    <img src="/images/AIDA.svg" alt="logo" />
                </div>
            </div>
        </div>
    )
    
}

export default Header;