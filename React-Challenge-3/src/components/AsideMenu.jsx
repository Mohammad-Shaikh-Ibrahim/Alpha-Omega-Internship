import AsideButton from "./AsideButton";
import "./AsideMenu.css"

export default function AsideMenu() {
    const categories = [
            {
                id: 1,
                categoryTitle: "Alpha Omega",
                children: (
                    <div className="posts-children-div">
                    <img src="https://www.alphaomega-eng.com/Images/logo.png" alt="Alpha Omega Logo" width={100} height={50} />
                    </div>
                )
            },
            {
                id: 2,
                categoryTitle: "Harri",
                children: (
                    <div className="posts-children-div">
                    <img src="https://media-cdn.harri.com/brands/646003/brand_profile/fe728240e68143bab846379f472d3016/240_240.jpeg" alt="Harri Logo" width={100} height={50} />
                    </div>
                )
            },
            {
                id: 3,
                categoryTitle: "Foothill Technology",
                children: (
                    <div className="posts-children-div">
                    <img src="https://www.foothillsolutions.com/static/logo-a1f0dd26b5e986c8b9d362aec4fad576.png" alt="Foothill Technology Logo" width={200} height={50} />
                    </div>
                )
            },
            {
                id: 4,
                categoryTitle: "Progineer Technologies",
                children: (
                    <div className="posts-children-div">
                    <img src="https://progineer.ps/wp-content/uploads/2023/12/progineer-logo-no-background-1-1.webp" alt="Progineer Technologies Logo" width={200} height={50}/>
                    </div>
                )
            },
        ]
    
        const categoriesList = categories.map((category) =>
            (<AsideButton key={category.id} categoryTitle={category.categoryTitle}>
                {category.children}
                </AsideButton>)
        )
    return (
        <>
            <div className={"buttons-menu"}>
                {categoriesList}
            </div>
        </>
    );
}