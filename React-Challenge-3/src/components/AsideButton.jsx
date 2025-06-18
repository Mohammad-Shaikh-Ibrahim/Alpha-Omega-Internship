import "./AsideButton.css";

export default function AsideButton({ categoryTitle, children }) {
    if (categoryTitle !== null || children !== null || categoryTitle !== "" || children !== "") {
        return (
            <>
                <button>
                    {categoryTitle}
                    {children}
                </button>
            </>
        );
    }

}