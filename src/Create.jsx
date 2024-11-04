import React, { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDesciption] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, author, description };
    // Loading
    setIsPending(true);

    fetch(`http://localhost:8000/blogs`, {
      method: "POST",
      headers: {
        "Contents-Type": "apllication/json",
      },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("Add New Blog");
      setIsPending(false);
      history.go(-1);
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title :</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        ></input>
        <label>Blog Author :</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Raden">Raden</option>
          <option value="Bayu">Bayu</option>
          <option value="Yusuf">Yusuf</option>
        </select>
        <label>Blog Description :</label>
        <textarea
          type="text"
          value={description}
          onChange={(e) => setDesciption(e.target.value)}
          required
        ></textarea>
        {!isPending && <button>Add Blog</button>}
        {/* {isPending && <button disabled>Add Blog....</button>} */}
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </form>
    </div>
  );
};

export default Create;
