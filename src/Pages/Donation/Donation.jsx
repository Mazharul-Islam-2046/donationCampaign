import { useLoaderData } from "react-router-dom";
import { getStoredDonationInfo } from "../../Utility/StoredDonationsInfo";
import { useEffect, useState } from "react";
import DonatedCards from "../../components/DonatedCards/DonatedCards";

const Donation = () => {
    const donationFeilds = useLoaderData();
    const [donatedFeildsList, setDonationFeildsList] = useState([])


    useEffect(()=>{
    const donatedIds = getStoredDonationInfo();
    const donatedFeilds = donationFeilds.filter(donationFeild => donatedIds.includes(donationFeild.id));
    setDonationFeildsList(donatedFeilds);
    },[donationFeilds])


    return (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 mt-32">
            {
                donatedFeildsList.map((donation, idx) => <DonatedCards key={idx} donation={donation}></DonatedCards>
                
            )}
        </div>
    );
};

export default Donation;