import { Card } from "react-bootstrap";
import {useReducer, useContext} from 'react';
import AppReducer from '../data/AppReducer'
import AppContext from "../data/AppContext";

function FlexContainer({element, data}) {
    const context = useContext(AppContext);
    const items = context.items;
    return ( 
        <>
            <div className="d-flex flex-wrap mb-3">
                {items.map(item => 
                    <Card style={{width: `18rem`}} className="border mb-3 p-3 ms-3">
                        {element({...item })}
                    </Card>)}
            </div>
        </>
     );
}

export default FlexContainer;