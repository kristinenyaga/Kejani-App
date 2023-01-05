import React from "react";
import Review from "./review";

function ReviewMap({review}){

    

    return(
        <>
       {review.map((rev) => (
            <Review key={rev.id} rev={rev} />
        ))}
        </>
    )
}
export default ReviewMap;