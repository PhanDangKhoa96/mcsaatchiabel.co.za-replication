import React from "react";

const SectionHeading = ({title}: {title: string}) => {
    return (
        <h2 className="heading-60-150 container scale-75 py-10 text-center lg:py-20">
           {title}
        </h2>
    );
};

export default SectionHeading;
