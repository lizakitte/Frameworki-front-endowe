import { Card } from "react-bootstrap";
import {useReducer} from 'react';
import AppReducer from '../data/AppReducer'

function FlexContainer({element, data}) {
    const [items, dispatch] = useReducer(AppReducer, data);
    return ( 
        <>
            <div class="d-flex flex-wrap mb-3">
                {items.map(item => 
                    <Card style={{width: `18rem`}} ClassName="border mb-3 p-3 ms-3">
                        {element({ dispatch, ...item })}
                    </Card>)}
            </div>
        </>
     );
}

export default FlexContainer;