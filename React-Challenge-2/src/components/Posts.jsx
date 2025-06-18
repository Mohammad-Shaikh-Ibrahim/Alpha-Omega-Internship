import Post from "./Post";
import "./Posts.css"

export default function Posts() {
    return (
        <>
            <div className={"posts"}>
                <Post postTitle={"Alpha Omega"} postBody={"What is Alpha Omega"}>
                    <img src="https://www.alphaomega-eng.com/Images/logo.png" alt="Alpha Omega Logo" />
                </Post>
                <Post postTitle={"CSS"} postBody={"This Post About CSS"}></Post>
                <Post postTitle={"HTML"} postBody={"This Post About HTML"}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, sunt?</p>
                </Post>
                <Post postTitle={"Math"} postBody={"This Post About Math"}>
                    <button>Read More</button>
                </Post>
            </div>
        </>
    );
}