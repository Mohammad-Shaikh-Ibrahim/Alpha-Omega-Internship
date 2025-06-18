import "./Post.css"
export default function Post({ postTitle = "No Title", postBody = "No Content", children }) {
    return (
        <>
            <div className={"post-div"}>
                <h3>{postTitle}</h3>
                <hr />
                <p>{postBody}</p>
                <div>{children}</div>
            </div>
        </>
    );
}