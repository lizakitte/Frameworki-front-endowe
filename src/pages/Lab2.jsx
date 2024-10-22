import PersonProfile from "../components/PersonProfile";
import NotFound from "./NotFound";
import { useParams } from "react-router-dom";
import { data } from "../data/module-data";

function Lab2() {
    const { id } = useParams();
    if (id === undefined) {
        return (
        <>
            <NotFound></NotFound>
            <h2>Brak identyfikatora</h2>
        </>
        );
    }

    const person = data.find((person) => person.id === parseInt(id));
    if (person === undefined) {
        return (
        <>
            <NotFound></NotFound>
            <h2>Osoba o takim identyfikatorze nie istnieje</h2>
        </>
        );
    }
    return (
        <>
            <h2>Profil Osoby</h2>
            <PersonProfile {...person}></PersonProfile>
        </>
     );
}

export default Lab2;