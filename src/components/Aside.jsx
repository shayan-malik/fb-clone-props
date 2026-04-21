import profile from "../images/profile-picture.png";
import meta from "../images/meta.png"
import friends from "../images/friends.png"
import saved from "../images/save-instagram.png";
import reels from "../images/reel.png"
import memories from "../images/memories.png";
import groups from "../images/groups.png";
import marketplace from "../images/store.png";
import events from "../images/events.png";
import feeds from "../images/feeds.png";
import page from "../images/facebook-page.png";
import arrow from "../images/arrow.png";



let Aside = () => {
    return(
        <>
            <aside>
                <ul>

                    <li>
                        <div className="user">
                            <img src={profile} alt="" />
                            <p>Username</p>
                        </div>
                    </li>

                    <li>
                        <div className="user">
                            <img src={meta} alt="" />
                            <p>Meta AI</p>
                        </div>
                    </li>

                    <li>
                        <div className="user">
                            <img src={friends} alt="" />
                            <p>Friends</p>
                        </div>
                    </li>

                    <li>
                        <div className="user">
                            <img src={saved} alt="" />
                            <p>Saved</p>
                        </div>
                    </li>

                    <li>
                        <div className="user">
                            <img src={reels} alt="" />
                            <p>Reels</p>
                        </div>
                    </li>

                    <li>
                        <div className="user">
                            <img src={memories} alt="" />
                            <p>Memories</p>
                        </div>
                    </li>

                    <li>
                        <div className="user">
                            <img src={groups} alt="" />
                            <p>Groups</p>
                        </div>
                    </li>

                    <li>
                        <div className="user">
                            <img src={marketplace} alt="" />
                            <p>Marketplace</p>
                        </div>
                    </li>

                    <li>
                        <div className="user">
                            <img src={feeds} alt="" />
                            <p>Feeds</p>
                        </div>
                    </li>

                    <li>
                        <div className="user">
                            <img src={events} alt="" />
                            <p>Events</p>
                        </div>
                    </li>

                    <li>
                        <div className="user">
                            <img src={page} alt="" />
                            <p>Pages</p>
                        </div>
                    </li>

                    <li>
                        <div className="user">
                            <img src={arrow} alt="" className="arrow" />
                            <p>See More</p>
                        </div>
                    </li>

                    


                    

                </ul>
            </aside>
        </>
    )
}

export default Aside;