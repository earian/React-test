import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogsDetail = () => {
    let { id } = useParams();
    let { data: blog , isPending , error } = useFetch('http://localhost:8000/blogs/' + id)

    return (
      <div className="blog-detail-container">
        { isPending && <div className="blog-detail-pending-div">Loading ...</div> }
        { error && <div className="blog-detail-error-cont">{ error }</div> }
        { blog && (
            <article>
                <h2>{ blog.title }</h2>
                <p className="blog-detail-author-p">Written by { blog.author }</p>
                <p>{ blog.content }</p>
            </article>
        )}
      </div>
    )
}

export default BlogsDetail;