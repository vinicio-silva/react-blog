import useFetch from "./useFetch";
import { useHistory, useParams } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory();

    const clickDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }
    return ( 
        <div className="blog-details">
            { error && <div className="alert">{ error }</div> }
            { isLoading && <div className="alert">Loading ... </div>}
            { blog && 
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by: { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={clickDelete}>Delete Blog</button>
                </article>
            }
        </div>
     );
}
 
export default BlogDetails;