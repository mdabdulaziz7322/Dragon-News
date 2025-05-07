
import { FaStar, FaEye, FaBookmark, FaShareAlt } from "react-icons/fa";
import { format } from "date-fns";
import { useState } from "react";
import { setToDB } from "../utility/db";

const NewsCard = ({ news }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  

  const handleFullDetails = () => {
    setIsExpanded(!isExpanded);
  };
  const handleBookMarked = (id) => {
   setToDB(id);
  }



  const {
    title,
    rating,
    total_view,
    author,
    image_url,
    details,
  } = news;


  return (
    <div>
      
      <div className="card  border border-base-200 rounded-xl overflow-hidden">
      
      {/* Author Header */}
      <div className="flex items-center justify-between px-4 pt-4">
        {/* Author Info */}
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 h-10 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">
              {format(new Date(author.published_date), "yyyy-MM-dd")}
            </p>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3 text-gray-500 text-lg">
         
          <button onClick={() => handleBookMarked(news.id)} className="hover:text-primary transition-colors">
            <FaBookmark />
          </button>
          
          <button className="hover:text-primary transition-colors">
            <FaShareAlt />
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-4">
        <h2 className="font-bold text-lg leading-snug">
          {title}
        </h2>
      </div>

      {/* Image */}
      <figure className="px-4 pt-3 ">
        <img src={image_url} alt="news" className="rounded-xl w-full object-cover max-h-90 " />
      </figure>

      {/* Details */}
      <div className="px-4 pt-3 text-sm text-gray-700">
        {isExpanded ? details : `${details.slice(0, 200)}...`}
        <span onClick={handleFullDetails} className="text-orange-500 font-medium cursor-pointer"> {isExpanded ? "Show Less" : "Read More"} </span>
      </div>
      <hr className="mt-5 mx-5 border border-base-300" />

      {/* Footer */}
      <div className="px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-1 text-orange-400">
          {Array.from({ length: rating.number }, (_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-1 text-base font-medium text-gray-800">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
          
    </div>
    
  );
};

export default NewsCard;
