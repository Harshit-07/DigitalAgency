import RealAnalytics from "./RealAnalytics";

interface BlogInfoProps {
  blog: string;
}

function BlogsInfo({ blog }: BlogInfoProps) {
  return (
    <div className="relative col-span-1 ml-2">
      <img
        src={`/images/${blog}.png`}
        alt={blog}
        className="w-full max-h-100 object-cover"
      />
      <RealAnalytics />
    </div>
  );
}

export default BlogsInfo;
