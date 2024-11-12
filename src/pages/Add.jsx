import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AppContext from "../data/AppContext";

export default function Add() {
    const { register, handleSubmit } = useForm();

    const { dispatch } = useContext(AppContext);
    
    const [isSending, setIsSending] = useState(false);
    
    const navigate = useNavigate();
    
    async function onSubmit(data) {
        setIsSending(false);
        await new Promise((res) => {
            
            setTimeout(() => {
                res();
            }, 1000);
        });
        setIsSending(true);

        const id = Math.round(Math.random() * 9999);
        dispatch({
            id,
            type: "add",
            person: {
                id,
                name: data.name,
                rating: +data.rating,
                eyes: data.eyes,
            },
        });

        navigate("/lab3");
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Add</h1>
                <label class="col-sm-2" htmlFor="name">Name</label>
                <input class="col-sm-4 form-control" style={{margin: "auto"}} {...register("name")}/>
                <br/>
                <label class="col-sm-2" htmlFor="rating">Rating</label>
                <input class="col-sm-4 form-control" style={{margin: "auto"}} {...register("rating")}/>
                <br/>
                <label class="col-sm-2" htmlFor="eyes">Eyes</label>
                <input class="col-sm-4 form-control" style={{margin: "auto"}} {...register("eyes")}/>
                <br/>
                <input disabled={isSending} type="submit" class="btn btn-success"/>
                <br></br>
                <br></br>
            </form>
        </>
    );
}