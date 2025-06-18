import Post from "./Post";
import "./Posts.css"

export default function Posts() {
    const posts = [
        {
            id: 1,
            postTitle: "Alpha Omega",
            postBody: "What is Alpha Omega?",
            children: (
                <div className="posts-children-div">
                <p>its a hardware and software company specialest at Neuroscience Solutions </p>
                <img src="https://www.alphaomega-eng.com/Images/logo.png" alt="Alpha Omega Logo" />
                </div>
            )
        },
        {
            id: 2,
            postTitle: "Harri",
            postBody: "What is Harri?",
            children: (
                <div className="posts-children-div">
                <p>its a hardware and software company specialest at Neuroscience Solutions </p>
                <img src="https://media-cdn.harri.com/brands/646003/brand_profile/fe728240e68143bab846379f472d3016/240_240.jpeg" alt="Harri Logo" />
                </div>
            )
        },
        {
            id: 3,
            postTitle: "Foothill",
            postBody: "What is Foothill?",
            children: (
                <div className="posts-children-div">
                <p>its a software company </p>
                <img src="https://www.foothillsolutions.com/static/logo-a1f0dd26b5e986c8b9d362aec4fad576.png" alt="Foothill Logo" />
                </div>
            )
        },
        {
            id: 4,
            postTitle: "Progineer Technologies",
            postBody: "What is Progineer Technologies?",
            children: (
                <div className="posts-children-div">
                <p>its a software company</p>
                <img src="https://progineer.ps/wp-content/uploads/2023/12/progineer-logo-no-background-1-1.webp" alt="Progineer Technologies Logo" />
                </div>
            )
        },
    ]

    const postsList = posts.map((post) =>
        (<Post key={post.id} postTitle={post.postTitle} postBody={post.postBody}>
            {post.children}
            </Post>)
    )
    return (
        <>
            <div className={"posts"}>
                {postsList}
            </div>
        </>
    );
}