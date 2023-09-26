import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationInfo } from "../../Utility/StoredDonationsInfo";

const Donation = () => {
    const donationFeilds = useLoaderData();

    const [donatedList, setDonatedList] = useState([])
    const [displayDonatedList, setDisplayDonatedList] = useState([])

    useEffect(() => {
        const storedDonationIds = getStoredDonationInfo()
         if (donationFeilds.length > 0) {
            
            const storedDonatedList = donationFeilds.filter(donatedfeild => storedDonationIds.includes(donatedfeild.id))


            setDonatedList(storedDonatedList);
            setDisplayDonatedList(storedDonatedList)
        }
    },[donationFeilds])



    return (
        <div>
            <h1>Donation</h1>
        </div>
    );
};

export default Donation;