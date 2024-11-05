import { Nav } from "react-bootstrap"; 

function Lab4() {
    return ( 
        <>
        <Nav className="me-auto">
            <Nav.Link href="/lab4/edit/1">
                Edit
            </Nav.Link>
            <Nav.Link href="/lab4/add">
                Add
            </Nav.Link>
        </Nav>
        </>
     );
}

export default Lab4;