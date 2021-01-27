import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id)
    return ( 
        <div className="blog-details">
            { error && <div className="alert">{ error }</div> }
            { isLoading && <div className="alert">Loading ... </div>}
            { blog && 
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by: { blog.author }</p>
                    <div>{ blog.body }</div>
                </article>
            }
        </div>
     );
}
 
export default BlogDetails;