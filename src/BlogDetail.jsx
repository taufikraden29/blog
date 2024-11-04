import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetail = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/blogs/` + id);

  //   Deleted
  const handleDeleted = () => {
    fetch(`http://localhost:8000/blogs/` + blog.id, {
      method: "DELETE",
    }).then(() => {
      console.log(Deleted);
    });
  };

  return (
    <div className="blog-details ">
      <h2>Blog Detail - {id}</h2>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          <p>{blog.views}</p>
          <button onClick={handleDeleted}>Deleted</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetail;
