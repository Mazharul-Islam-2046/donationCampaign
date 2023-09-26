import { useLoaderData } from "react-router-dom";
import { getStoredDonationInfo } from "../../Utility/StoredDonationsInfo";
import DonationCard from "../../components/Header/DonationCard/DonationCard";
import { useEffect, useState } from "react";

const Donation = () => {
    const donationFeilds = useLoaderData();
    const [donatedFeildsList, setDonationFeildsList] = useState([])


    useEffect(()=>{
    const donatedIds = getStoredDonationInfo();
    const donatedFeilds = donationFeilds.filter(donationFeild => donatedIds.includes(donationFeild.id));
    setDonationFeildsList(donatedFeilds);
    },[donationFeilds])


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-32">
            {
                donatedFeildsList.map((donation, idx) => <DonationCard key={idx} donation = {donation}></DonationCard>)
            }
        </div>
    );
};

export default Donation;