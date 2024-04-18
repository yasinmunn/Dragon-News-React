import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {

    const { title, image_url, details, _id } = news;

    return (
        <div className="card bg-base-100 shadow-xl mb-6  border-b-4">
        
            <figure><img className="" src={image_url} alt="News-thumbnails" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

              {
                details.length > 200 ? <p> {details.slice(0,140)}</p>
                :
                <p>{details}</p>
              }
              <p> <Link className="text-green-500" to={`/news/${_id}`}>Read More</Link></p>
            </div>
        </div>
    );
};

export default NewsCard;