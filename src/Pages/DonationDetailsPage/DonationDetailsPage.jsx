import { useLoaderData, useParams } from "react-router-dom";

const DonationDetailsPage = () => {
    const donations = useLoaderData();
    const {id} = useParams();
    const donation = donations.find(donation => donation.id === id);
    const {banner_img, price, title, description} = donation;
    return (
        <div>
            <div>
                <img src={banner_img} alt="" />
            </div>
        </div>
    );
};

export default DonationDetailsPage;