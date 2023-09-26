import PropTypes from 'prop-types';
const DonationCard = ({donation}) => {
    const {title, banner_img, category, card_bg_color, category_bg_color, text_button_bg_color} = donation;
    
    return (
        <div className='rounded-lg' style={{backgroundColor: card_bg_color}}>
            <img src={banner_img} alt="" />
            <div>
                <div className='p-4'>
                    <p className='text-sm font-semibold inline py-1 px-2 rounded-sm ' style={{ backgroundColor: category_bg_color, color: text_button_bg_color }}>{category}</p>
                    <p className='text-xl font-semibold mt-2' style={{color: text_button_bg_color}}>{title}</p>
                </div>
            </div>
        </div>
        
    );
};

export default DonationCard;
DonationCard.propTypes = {
    donation: PropTypes.object
}