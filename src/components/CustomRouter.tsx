import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { queryDescription } from "../constants/descriptions";

function CustomRouter() {
  const [post, setPost] = useState(1);

  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData", post],
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${post}`).then((res) =>
        res.json()
      ),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error has occurred: {error.message}</div>;
  }

  const handleAddClick = () => {
    if (post < 1) {
      setPost(1);
    } else {
      setPost(post + 1);
    }
  };

  const handleSubtractClick = () => {
    if (post > 1) {
      setPost(post - 1);
    }
  };

  return (
    <div className="bg-disabled ">
      <Link to="/">
        <button className=" bg-primary hover:bg-primary_hover text-white rounded-lg px-6 py-2.5 mt-1 ml-3 text-sm ">
          back to home
        </button>
      </Link>
      <div className="ml-3 pt-5">
        <h1 className="text-2xl text-start font-bold">Random API Response:-</h1>
        <h1 className="text-lg font-semibold">id: {data.id}</h1>
        <h1 className="text-lg font-semibold">title: {data.title}.</h1>
        <h1 className="text-lg font-semibold">body: {data.body}.</h1>
      </div>
      <button
        className=" bg-primary hover:bg-primary_hover text-white rounded-lg px-6 py-2.5 mt-14 ml-3 mr-3 text-sm "
        onClick={handleSubtractClick}
      >
        decrease id count
      </button>
      <button
        className=" bg-primary hover:bg-primary_hover text-white rounded-lg px-6 py-2.5 mt-14 text-sm "
        onClick={handleAddClick}
      >
        increase id count
      </button>
      <p className="text-sm mt-3 ml-3 w-80">{queryDescription}</p>
    </div>
  );
}

export default CustomRouter;
