import { Button, Container, Form, FormControl } from "react-bootstrap";
import { useState, useContext } from "react";
import AppContext from "../data/AppContext";
import { useParams, useNavigate } from "react-router-dom";

const ratingField = "rating";
const eyesField = "eyes";
const nameField = "name";

function Edit() {
  const { id } = useParams();
  const context = useContext(AppContext);
  const dispatch = context.dispatch;
  const [errors, setErrors] = useState([]); // stan kominikatów błędów
  const [isSending, setSending] = useState(false); // stan sygnalizujący wysyłanie

  const navigate = useNavigate();

  const onSubmitFunction = async (e) => {
    e.preventDefault(); //blokada wysyłania żądania
    console.log("Submiting...");
    const data = new FormData(e.target);

    //stan blokujący przycisk submit na czas wysyłania danych
    setSending(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); //symulacja wysyłania
    //odblokowanie przycisku submit
    setSending(false);
    for (let key of data.keys()) {
      //reset formularza
      e.target[key].value = "";
    }
    
    dispatch({
        type: "edit",
        id: Number(id),
        person: {
            id: Number(id),
            name: data.get("name"),
            eyes: data.get("eyes"),
            rating: Number(data.get("rating")),
        }
    })

    navigate("/lab3");
  };

  return (
    <>
      <h1>Edit</h1>

      <div className="text-danger">
        {errors.map((e, i) => (
          <p key={i}>{e}</p>
        ))}
      </div>

      <Form className="text" onSubmit={onSubmitFunction}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor={nameField}>Name</Form.Label>
          <FormControl
            required
            id={nameField}
            type={nameField}
            name={nameField}
            className="text-lg"
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor={eyesField}>Eyes</Form.Label>
          <FormControl
            required
            id={eyesField}
            type={eyesField}
            minLength={2}
            name={eyesField}
            placeholder="Enter eyes color"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor={ratingField}>Rating</Form.Label>
          <FormControl
            required
            id={ratingField}
            type={ratingField}
            name={ratingField}
            minLength={1}
            placeholder="enter rating"
          />
        </Form.Group>

        <div className="d-grid">
          <Button
            disabled={isSending}
            type="submit"
            variant="outline-dark"
            size="lg">
            Register
          </Button>
        </div>
        <br></br>
      </Form>
    </>
  );
}

export default Edit;
