import { useState } from "react";
import RatingBar from "./RatingBar";
import AppContext from "../data/AppContext";
import { useContext } from "react";

function PersonProfile({id, name, eyes, rating}) {
    const context = useContext(AppContext);
    const dispatch = context.dispatch;
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