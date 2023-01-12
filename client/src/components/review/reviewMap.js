import React from "react";
import Review from "./review";

function ReviewMap({ unit }) {



    return (
        <>
            {unit.reviews?.map((rev) => (
                <Review key={rev.id} rev={rev} />
            ))}
        </>
    )
}
export default ReviewMap;