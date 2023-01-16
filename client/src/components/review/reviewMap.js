import React from "react";
import Review from "./review";
import ReviewForm from "./reviewform";

function ReviewMap({unit}){

    

    return(
        <>
       {unit.reviews?.map((rev) => (
            <Review key={rev.id} rev={rev} />
        ))}

        {/* {unit.reviews?.map((rev) => (
            <ReviewForm key={rev.id} rev={rev} />
        ))} */}
        </>
    )
}
export default ReviewMap;