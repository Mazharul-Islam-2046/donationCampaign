import { useLoaderData, useParams } from "react-router-dom";
import { saveDonationInfo } from "../../Utility/StoredDonationsInfo";
import toast, { Toaster } from 'react-hot-toast';

const DonationDetailsPage = () => {
  const donations = useLoaderData();
  const { id } = useParams();
  const donation = donations.find((donation) => donation.id === id);
  const { banner_img, price, title, description,text_button_bg_color } = donation;

  const handleDonate = () => {
    saveDonationInfo(id);
    toast("You have successfully Donated")
  };
  return (
    <div>
      <Toaster></Toaster>
      <div className="w-full mt-20">
        <div className="relative">
          <img className="w-full" src={banner_img} alt="" />
          <div className="absolute bg-black bg-opacity-30 bottom-0 left-0 w-full p-5">
            <button style={{backgroundColor: text_button_bg_color}} className="text-white py-1 md:py-2 px-2 md:px-4 rounded-md" onClick={handleDonate}>Donate {price}</button>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold">{title}</h2>
          <p className="mt-4 md:mt-6 text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DonationDetailsPage;
