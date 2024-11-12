import { Card } from "react-bootstrap";
import useItems from "../hooks/useData";
import useDispatch from "../hooks/useDispatch";

function FlexContainer({element}) {
    const items = useItems();
    return ( 
        <>
            <div className="d-flex flex-wrap mb-3">
                {items.map((item, idx) => 
                    <Card style={{width: `18rem`}} className="border mb-3 p-3 ms-3">
                        {element({...item , key: idx })}
                    </Card>)}
            </div>
        </>
     );
}

export default FlexContainer;