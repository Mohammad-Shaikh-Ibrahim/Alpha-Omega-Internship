import Posts from "./Posts";
import AsideMenu from "./AsideMenu";
import "./MainBody.css"

export default function MainBody() {
    return (
        <>
            <div className={"main-body"}>
                <Posts />
                <AsideMenu />
            </div>
        </>
    );
}