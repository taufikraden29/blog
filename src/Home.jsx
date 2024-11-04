import React from "react";
import BlogList from "./blogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  const handleDeleted = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="Home">
      {error && <h2>{error}</h2>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="My Blog" />}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "Raden")}
        title="Raden Blog"
      /> */}
    </div>
  );
};

export default Home;
