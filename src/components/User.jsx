import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function User() {
    const params = useParams();
    const [users] = useFetch("https://jsonplaceholder.typicode.com/users");
    const user = users ? users.find(user => user.id === Number(params.id)) : null;
    console.log(user)

    if (!user) {
        return <div>Loading or user not found...</div>;
    }

    return ( 
        <>
            <h3>
                {user.name}
            </h3>
            <div>
                {user.address.city}, {user.address.street}, {user.address.suite}, {user.address.zipcode}
            </div>
            <div>
                {user.company.name}
            </div>
            <div>
                {user.email}, {user.phone}
            </div>
            <div>
                {user.username}
            </div>
            <div>
                {user.website}
            </div>
            <br></br>
        </>
     );
}

export default User;