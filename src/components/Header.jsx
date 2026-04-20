import logo from "../images/logo.png";

import home from "../images/home.png";
import home2 from "../images/2.png";
import home3 from "../images/3.png";
import home4 from "../images/4.png";
import home5 from "../images/5.png";

import menu from "../images/menu.png";
import messenger from "../images/messenger.png";
import notification from "../images/notification.png";
import profile from "../images/profile-picture.png";


let Header = () => {
    return (
        <>
            <header>
                <div className="logo">
                    <img src={logo} alt="" />
                    <input type="search" placeholder="Search Facebook"/>
                </div>

                <div className="tabs">
                    <img src={home} alt="" />
                    <img src={home2} alt="" />
                    <img src={home3} alt="" />
                    <img src={home4} alt="" />
                    <img src={home5} alt="" />
                </div>

                <div className="menu">
                    <img src={menu} alt="" />
                    <img src={messenger} alt="" />
                    <img src={notification} alt="" />
                    <img src={profile} alt="" />
                </div>
            </header>
        </>
    )
}

export default Header;