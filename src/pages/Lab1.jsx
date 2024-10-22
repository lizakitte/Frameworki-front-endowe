import PersonProfile from "../components/PersonProfile";
import { data } from "../data/module-data";

function Lab1() {
    return ( 
        <>
        <h1>Laboratorium 1</h1>
          {data.map((person) => (
          <PersonProfile {...person}></PersonProfile>
        ))}
        </>
     );
}

export default Lab1;