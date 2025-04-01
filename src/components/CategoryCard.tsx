
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  image: string;
  color: string;
  link: string;
}

const CategoryCard = ({ title, image, color, link }: CategoryCardProps) => {
  return (
    <Link to={link} className="block group">
      <div className={`rounded-xl overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl bg-${color}/10 border border-${color}/20`}>
        <div className="p-6 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <h3 className={`font-bold text-${color}`}>{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
