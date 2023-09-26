import { useLoaderData } from "react-router-dom";
import DonationCard from "../../components/DonationCard/DonationCard";
import { searchByCategories } from "../../Utility/searchByCategories";
import { useState } from "react";

const Home = () => {
    const donationFields = useLoaderData();
    const [displayData, setDisplayData] = useState(donationFields)

    const handleSearch = e => {
        e.preventDefault();
        const searchText = e.target.searchBox.value;
        const searchReasultsArray = searchByCategories(searchText, donationFields);
        setDisplayData(searchReasultsArray);
    }

    return (
        <div className="flex flex-col gap-4 md:gap-28">
            {/* Banner Section */}
            <div className="flex flex-col gap-6 md:gap-10 justify-center items-center h-[60vh] relative overflow-hidden">
                <h1 className="text-2xl text-center md:text-3xl lg:text-5xl font-bold">I Grow By Helping People In Need</h1>
                <div>
                    <form onSubmit={handleSearch}>
                    <input name="searchBox" placeholder="Search Here" type="text" className="w-64 px-4
                    border py-2 border-r-0 rounded-l-md text-xs"/>
                    <input type="submit" value="Search" className="cursor-pointer border py-1 px-4 bg-red-500 text-white rounded-r-md" />
                    </form>
                </div>
                <img src="https://i.ibb.co/qpPGqZC/fc1f79e18cdc1a12320b9b10ec3e253d.jpg" alt="" className="absolute z-[-10] opacity-5 " />
            </div>

            {/* Donation List */}
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 lg:grid-cols-4 md:gap-3">
                {
                    displayData.map((donation, idx) => <DonationCard key = {idx} donation = {donation}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default Home;