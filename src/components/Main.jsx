import profile from "../images/profile-picture.png";

import video from "../images/video.png"
import gallery from "../images/gallery.png"
import emoji from "../images/emoji.png"

import mainPost from "../images/main-post.jpg";


import Post from "./Post";


let Main = () => {
    return(
        <>
            <main>
                <div className="top">

                    <div className="logo">
                        <img src={profile} alt="" className="mainlogo"/>
                        <input type="search" placeholder="What's on your mind, User?"/>
                    </div>

                    <div className="addphotos">
                        <img src={video} alt="" />
                        <img src={gallery} alt="" />
                        <img src={emoji} alt="" />
                    </div>

                </div>

                <Post name="Metatainment" image={mainPost}/>
                <Post name="Mini Zoo" image="https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=compress%2Cformat&w=1222.3999999999999&h=687.6&q=90&ar=16%3A9&crop=faces&fit=crop"/>

                <Post name="Adventure" image="https://cdn.pixabay.com/photo/2020/04/22/12/06/adventure-5077760_1280.jpg"/>
                <Post name="Inverse" image="https://content.pexels.com/images/canva/ai-generated-ad/off-theme/tropical_shoreline_with_two_curved_palm_trees-full.jpg"/>
                <Post name="News" image="https://i.abcnewsfe.com/a/e274162d-2de0-4937-a82c-32aaa82001de/abc_news_live-abc-ml-250210_1739199021469_hpMain_16x9.jpg" />
                <Post name="Ai" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7AHUyfZavf1RDGMB5Lkm4CV5KiEChXz6Cg&s" />

            </main>
        </>
    )
}

export default Main;