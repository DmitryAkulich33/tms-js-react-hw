import React from "react";

interface IPageHeading {
    title: string;
}

const PageHeading: React.FC<IPageHeading> = ({title}) => {
    return (
        <div className="mainheading">
            <h1 className="sitetitle">Mediumish</h1>
            <p className="lead">
                {title}
            </p>
        </div>
    )
}

export default PageHeading;