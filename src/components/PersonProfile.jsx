import { useState } from "react";
import RatingBar from "./RatingBar";

function PersonProfile({id, name, eyes, rating, dispatch}) {
    return (
        <div>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>eyes: {eyes}</p>
            <p>rating: {rating}</p>
            <RatingBar rate={rating}></RatingBar>
            <button onClick={() => {
                dispatch({
                    type: "edit",
                    id: id
                    });
                }}>
                    Edit </button>
            <button onClick={() => { 
                dispatch({
                    type: "delete",
                    id: id
                    });
                }}> 
                    Delete </button>
            {/* <button onClick={() => setRating((Rating + 1) % 11)}>  */}
            <button onClick={() => { 
                dispatch({
                    type: "rate",
                    id: id,
                    rating: rating
                    });
                }}>    
                    Rate </button>
            <br></br>
        </div>
    )
}

export default PersonProfile;