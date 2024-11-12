import RatingBar from "./RatingBar";
import { redirect} from "react-router-dom";
import useDispatch from "../hooks/useDispatch";

function PersonProfile({id, name, eyes, rating}) {
    const dispatch = useDispatch();
    return (
        <div>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>eyes: {eyes}</p>
            <p>rating: {rating}</p>
            <RatingBar rate={rating}></RatingBar>
            <button class="btn btn-success" onClick={() => redirect("/lab4/edit/"+id)}>
                    Edit </button>
            <button class="btn btn-success" onClick={() => { 
                dispatch({
                    type: "delete",
                    id: id
                    });
                }}> 
                    Delete </button>
            <button class="btn btn-success" onClick={() => { 
                dispatch({
                    type: "rate",
                    id: id,
                    rating: rating
                    });
                }}>    
                    Rate </button>
            <br></br>
            <br></br>
        </div>
    )
}

export default PersonProfile;