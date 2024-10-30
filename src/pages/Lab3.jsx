import FlexContainer from "../components/FlexContainer";
import PersonProfile from "../components/PersonProfile";
import { data } from "../data/module-data";

function Lab3() {
    return ( 
        <>
            <FlexContainer element={PersonProfile} data={data}></FlexContainer>
        </>
     );
}

export default Lab3;