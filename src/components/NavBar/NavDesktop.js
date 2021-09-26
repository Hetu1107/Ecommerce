import React from 'react';
import "../../style/NavBar/Nav_desktop.css";

const childbar = {
    first : [
        {one: "fas fa-user-plus"       ,two: "Sign Up"},
        {one: "far fa-user"            ,two: "My Profile"},
        {one: "fas fa-shopping-bag"    ,two: "My Orders"},
        {one: "far fa-money-bill-alt"  ,two: "My Points"}
    ],
    second :[
        {one:"far fa-question-circle"    ,two :"Help"},
        {one:"fas fa-suitcase-rolling"   ,two:"Upcoming Sells"},
        {one:"far fa-envelope"           ,two:"Email Notification"}
    ]
}
function NavDesktop() {
    return (
        <div className="navbar_main">
            <div className="navbar_logo">
                <img src="https://i.pinimg.com/474x/a8/ed/11/a8ed1152dd8bd3322871984017916b70.jpg"></img>
            </div>
            <div className="navbar_items">
                <div className="navbar_items_child">
                    <div className="navbar_items_child_box">
                        <div className="navbar_items_child_item">
                            <a href="#"><i className="fas fa-sign-in-alt"></i>Login</a>
                            <div className="login_childs">
                                    <div className="up_side_triangle"></div>
                                    <div className="login_child">
                                        {
                                            childbar.first.map((res,index) => {
                                                return(
                                                    <a href="#" key={index}><i className={res.one}></i> {res.two}</a>
                                                )
                                            })

                                        }
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar_items_child_box">
                        <div className="navbar_items_child_item">
                            <a href="#">More</a>
                            <div className="login_childs">

                                <div className="up_side_triangle"></div>
                                <div className="login_child">
                                    {
                                        childbar.second.map((res,index) => {
                                            return(
                                                <a href="#" key={index}><i className={res.one}></i> {res.two}</a>
                                            )
                                        })

                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar_items_child_box" id="navbar_items_child_box_search">
                        <div className="navbar_items_child_item" id="navbar_items_child_item_search">
                            <input type="text" id="navbar_items_child_item_input" placeholder="search here...."/>
                            <a href="#"><i className="fas fa-search"></i></a>
                        </div>
                    </div>
                    <div className="navbar_items_child_box" id="navbar_items_child_box_cart">
                        <div className="navbar_items_child_item" id="navbar_items_child_item_cart">
                            <a href="#"><i className="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavDesktop;