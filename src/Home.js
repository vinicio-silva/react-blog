import BlogList from "./BlogLists";
import useFetch from "./useFetch";

const Home = () => {
 const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs')
    return ( 
        <div className="Home">
            { error && <div className="alert">{ error }</div> }
            { isLoading && <div className="alert">Loading ... </div>}
            {blogs && <BlogList blogs={blogs} title="List of Blogs:"/>}
        </div>
     );
}
 
export default Home;