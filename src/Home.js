import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
const {data:blogs, isLoading, error} = useFetch('http://localhost:8080/blogs')

     return ( 
        <div className="content">
            {error && <div>{error}</div>}
            { isLoading && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
         </div>
     );
}
 
export default Home;