import AsideButton from "./AsideButton";
import "./AsideMenu.css"

export default function AsideMenu() {
    return (
        <>
            <div className={"buttons-menu"}>
                <AsideButton>
                    <span>Click me</span>
                </AsideButton>
                <AsideButton>
                    <img
                        src="https://www.alphaomega-eng.com/Pictures/20210530151643688_big.jpg"
                        alt="Icon"
                        width={200}
                        height={100}
                    />
                </AsideButton>
                <AsideButton>
                    <span>Follow Us</span>
                    <img
                        src="https://www.alphaomega-eng.com/Pictures/20210608152103750_small.png"
                        alt="Icon"
                        width={50}
                        height={50}
                    />
                </AsideButton>
            </div>
        </>
    );
}