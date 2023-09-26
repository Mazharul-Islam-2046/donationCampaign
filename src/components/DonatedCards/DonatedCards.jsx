import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const DonatedCards = ({ donation }) => {
  const {
    id,
    title,
    picture,
    category,
    card_bg_color,
    category_bg_color,
    text_button_bg_color,
    price
  } = donation;
  return (
    <div>
      <div className="rounded-lg flex" style={{ backgroundColor: card_bg_color }}>
        <img src={picture} alt="" />
        <div>
          <div className="p-8">
            <p
              className="text-sm font-semibold inline py-1 px-2 rounded-sm "
              style={{
                backgroundColor: category_bg_color,
                color: text_button_bg_color,
              }}
            >
              {category}
            </p>
            <p
              className="text-xl font-semibold mt-2"
            >
              {title}
            </p>

            <p className="mb-8" style={{color: text_button_bg_color}}>{price}</p>

            <Link className="py-2 px-4 rounded-md" style={{ backgroundColor: category_bg_color }} to={`/donation/${id}`}>View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatedCards;
DonatedCards.propTypes = {
  donation: PropTypes.object,
};
