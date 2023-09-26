import { useLoaderData } from "react-router-dom";
import { getStoredDonationInfo } from "../../Utility/StoredDonationsInfo";
import { useEffect, useState } from "react";
import DonatedCards from "../../components/DonatedCards/DonatedCards";

const Donation = () => {
  const donationFeilds = useLoaderData();
  const [donatedFeildsList, setDonationFeildsList] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    const donatedIds = getStoredDonationInfo();
    const donatedFeilds = donationFeilds.filter((donationFeild) =>
      donatedIds.includes(donationFeild.id)
    );
    setDonationFeildsList(donatedFeilds);
  }, [donationFeilds]);

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 mt-12 md:mt-16 lg:mt-24">
        {donatedFeildsList.slice(0, dataLength).map((donation, idx) => (
          <DonatedCards key={idx} donation={donation}></DonatedCards>
        ))}
      </div>
      <div className="text-center">
      <button
        onClick={() => setDataLength(donatedFeildsList.length)}
        className={`${dataLength === donatedFeildsList.length || donatedFeildsList.length < 4 ? "hidden" : ""} mt-12 bg-green-700 py-2 px-6 rounded-md text-white`}
      >
        See All
      </button>
      </div>
    </div>
  );
};

export default Donation;
