import FlexContainer from "../components/FlexContainer";
import PersonProfile from "../components/PersonProfile";
import { data } from "../data/module-data";
import { redirect } from "react-router-dom"

function Lab3() {
    return ( 
        <>
            <button class="btn btn-success" onClick={() => redirect("/lab4/add")}> Add new person </button>
            <br></br>
            <br></br>
            <FlexContainer element={PersonProfile} data={data}></FlexContainer>
        </>
     );
}

export default Lab3;