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
                <input {...register("name")}/>
                <label htmlFor="name">Name</label>
                <br/>
                <input {...register("rating")}/>
                <label htmlFor="rating">Rating</label>
                <br/>
                <input {...register("eyes")}/>
                <label htmlFor="eyes">Eyes</label>
                <br/>
                <input disabled={isSending} type="submit"/>
            </form>
        </>
    );
}