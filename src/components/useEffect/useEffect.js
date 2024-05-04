import { useState } from "react";

const UseEffect = () => {
    const [resourceType, setResourceType] = useState("posts");

    const changeResourseType = (resourceType) => {
        setResourceType(resourceType);
    }

    return(
        <div>
            <h1>{resourceType}</h1>
            <div style={{display: "flex", alignItems: "center"}}>
                <button onClick={() => changeResourseType("Posts")}>Posts</button>
                <button onClick={() => changeResourseType("Comments")}>Comments</button>
                <button onClick={() => changeResourseType("All")}>All</button>
            </div>
        </div>
    )
}

export default UseEffect;