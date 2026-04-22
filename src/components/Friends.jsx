// import profile from "../images/profile-picture.png";
import meta from "../images/meta.png"
import b1 from "../images/b1.jpg";
import b2 from "../images/b2.webp";
import b3 from "../images/b3.jpg";
import b4 from "../images/b4.jpg";
import b5 from "../images/b5.jpg";
import b6 from "../images/b6.jpg";
import b7 from "../images/b7.jpg";
import b8 from "../images/b8.jpg";
import arrow from "../images/arrow.png";
import search from "../images/search.png";
import more from "../images/more.png";
import socialMedia from "../images/social-media.png";




let Friends = () => {
    return(
        <>
            <aside>
                <ul>

                    <li>
                        <div className="user contlist gap">
                            <p>Contacts</p>
                            <div className="contacts">
                                <img src={search} alt="" />
                                <img src={more} alt="" />
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="user gap">
                            <img src={meta} alt="" />
                            <p>Meta AI</p>
                            <img src={socialMedia} alt="" className="verified"/>
                        </div>
                    </li>

                    <li>
                        <div className="user gap">
                            <img src={b1} alt="" />
                            <p>Moiz Shah</p>
                        </div>
                    </li>

                    <li>
                        <div className="user gap">
                            <img src={b2} alt="" />
                            <p>Mohammad Ali Raza</p>
                        </div>
                    </li>

                    <li>
                        <div className="user gap">
                            <img src={b3} alt="" />
                            <p>Hassan Sheikh</p>
                        </div>
                    </li>

                    <li>
                        <div className="user gap">
                            <img src={b4} alt="" />
                            <p>Muhammad Fakhir</p>
                        </div>
                    </li>

                    <li>
                        <div className="user gap">
                            <img src={b5} alt="" />
                            <p>Sameer Khan</p>
                        </div>
                    </li>

                    <li>
                        <div className="user gap">
                            <img src={b6} alt="" />
                            <p>Shoaib Rajput</p>
                        </div>
                    </li>

                    <li>
                        <div className="user gap">
                            <img src={b7} alt="" />
                            <p>Hanif Shah</p>
                        </div>
                    </li>

                    <li>
                        <div className="user gap">
                            <img src={b8} alt="" />
                            <p>Ahmed khan</p>
                        </div>
                    </li>

                    <li>
                        <div className="user gap">
                            <img src={arrow} alt="" className="arrow" />
                            <p>See More</p>
                        </div>
                    </li>


                    

                </ul>
            </aside>
        </>
    )
}

export default Friends;
