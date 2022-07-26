import React from "react";

export default function Skill({ image, title, hoverClassName }) {
    return (
        <div className="group flex flex-col items-center sm:mx-4 mx-auto my-4 w-24 overflow-hidden">
            {
                React.cloneElement(image, {
                    className: `inline-block w-12 w-56 h-20 transition-colors duration-200 ${hoverClassName}`,
                })
            }
            <p className={`text-center mt-2 mb-0 ${hoverClassName}`}>{title}</p>
        </div>
    )
}
