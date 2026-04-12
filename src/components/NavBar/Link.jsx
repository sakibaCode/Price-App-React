import React from "react";

const Links = ({ route }) => {
    return (
        <li className='px-6 lg:mr-12 mb-3 hover:bg-amber-400'>
            <a href={route.path}>{route.name}</a>
        </li>
    )
}

export default Links