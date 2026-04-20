import profile from "../images/profile-picture.png";
import small from "../images/small.jpg";


let Post = (props) => {
    return(
        <>
            <div className="main-post">

                <div className="post-user">
                    <div className="post-image">
                        <img src={profile} alt="" />
                    </div>
                    <div className="text">
                        <h5>{props.name}</h5>
                        <p>Suggested for you .8h</p>
                    </div>
                </div>

                <div className="description">
                    <p>Dolor sit amet consectetur adipisicing elit. Illo soluta doloribus velit perspiciatis harum blanditiis pariatur voluptatibus, dolor obcaecati ipsum a asperiores... See More </p>
                </div>

                <div className="bigpostimage">
                    <img src={props.image} alt="" />
                </div>


            </div>
        </>
    )
}

export default Post;