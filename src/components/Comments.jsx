import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function Comments() {
    const params = useParams()
    const [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
    const [allComments] = useFetch("https://jsonplaceholder.typicode.com/comments");
    const post = posts ? posts.find(post => post.id === Number(params.id)) : null;
    const comments = allComments ? allComments.filter(comment => comment.postId === Number(params.id)) : null;

    if (!post) {
        return <div>Loading or post not found...</div>;
    }

    if (!comments) {
        return <div>Loading or comments not found...</div>;
    }

    return ( 
        <>
            <h3>
                {post.title}
            </h3>
            <div>
                {comments.map((c) => {
                    return (
                        <div>
                            <div>
                                {c.name}
                            </div>
                            <div>
                                {c.email}
                            </div>
                            <div>
                                {c.body}
                            </div>
                            <br></br>
                        </div>
                    )
                })}
            </div>
        </>
     );
}

export default Comments;