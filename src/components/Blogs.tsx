import BlogsInfo from "./BlogsInfo";
import Button from "./Button";

function Blogs() {
  return (
    <div className="bg-disabled" id="blog">
      <div className="px-20 py-14">
        <h1 className="text-4xl text-left font-bold">Our Blogs</h1>
        <div className="grid grid-cols-3 pt-5 justify-items-stretch">
          <BlogsInfo blog="blog1" />
          <BlogsInfo blog="blog2" />
          <BlogsInfo blog="blog3" />
        </div>
        <div className="flex justify-center mt-20">
          <Button text="View all posts" />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
