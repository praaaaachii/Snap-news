import Image from "next/image";

const NewsCard = ({ article }) => {
    return (
      <div className="flex flex-col overflow-hidden rounded-lg shadow-lg mb-10 w-64 h-64 pb-2">
        <Image
          src={article.urlToImage || "./fallback.png"}
          alt={article.title}
          width={550}
          height={500}
          className="h-32 object-cover"
          unoptimized={true}
        />
        <h3 className="text-sm font-semibold mt-4 mx-4 mb-3 text-gray-900">{article.title}</h3>
        <p className="text-gray-500 mx-4 mb-4 text-xs">{article.description}</p>
      </div>
    );
  };
 
export default NewsCard;