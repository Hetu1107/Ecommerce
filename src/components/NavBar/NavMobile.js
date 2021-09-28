import React from 'react';
import "../../style/NavBar/Nav_mobile.css";
function NavMobile() {
    return (
        <div className="mobile_nav_main">
            <div className="mobile_nav_upbody">
                <div className="mobile_nav_lef">
                    <img src="https://i.pinimg.com/474x/a8/ed/11/a8ed1152dd8bd3322871984017916b70.jpg"></img>
                </div>
                <div className="mobile_nav_right">
                    <div className="mobile_nav_right_element">
                        <i className="fas fa-shopping-bag"></i>
                    </div>
                    <div className="mobile_nav_right_element">
                        <i className="fas fa-sign-in-alt"></i>
                    </div>
                    <div className="mobile_nav_right_element">
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </div>
            <div className="mobile_nav_downbody">
                <div className="mobile_nav_downbody_search">
                    <div className="mobile_nav_downbody_search_btn">
                        <i className="fas fa-search"></i>
                    </div>
                    <div className="mobile_nav_downbody_search_box">
                        <input type="text" placeholder="search ..."/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavMobile;