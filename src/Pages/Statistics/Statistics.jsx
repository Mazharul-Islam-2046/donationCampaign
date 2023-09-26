import { useEffect, useState } from "react";
import { Pie, PieChart, Tooltip, Cell, Legend} from "recharts";
import { getStoredDonationInfo } from "../../Utility/StoredDonationsInfo";
import { useLoaderData } from "react-router-dom";



const Statistics = () => {
    const [dataOfDonation, setDataOfDonation] = useState([]);
    const donationFeilds = useLoaderData();

useEffect(()=>{
    const donatedFeilds = getStoredDonationInfo();
    const donatedFeildsLength = donatedFeilds.length;
    const donationFeildsLength = donationFeilds.length;
    const donationLeft = donationFeildsLength - donatedFeildsLength;
    const postiveDonationLeft = Math.abs(donationLeft)

    const donationAmount = [
        {name:"Donated", value: donatedFeilds.length},
        {name:"DonationLeft", value: postiveDonationLeft}
    ]
    setDataOfDonation(donationAmount)
},[donationFeilds])

const COLORS = ['#00C49F', '#FF444A'];

    return (
        <div className="w-full flex justify-center items-center">
            <PieChart width={500} height={500} className="hidden md:hidden lg:flex mt-24">
        <Pie
        dataKey="value"
        isAnimationActive={false}
        data={dataOfDonation}
        cx="50%"
        cy="50%"
        outerRadius={200}
        fill="#8884d8"
        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(2)}%`}>
            {dataOfDonation.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
        <Tooltip></Tooltip>
        <Legend></Legend>
            </PieChart>


            <PieChart width={400} height={400} className="hidden md:flex lg:hidden mt-24">
        <Pie
        dataKey="value"
        isAnimationActive={false}
        data={dataOfDonation}
        cx="50%"
        cy="50%"
        outerRadius={160}
        fill="#8884d8"
        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(2)}%`}>
            {dataOfDonation.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
        <Tooltip></Tooltip>
        <Legend></Legend>
            </PieChart>



            <PieChart width={400} height={400} className="md:hidden mt-8">
        <Pie
        dataKey="value"
        isAnimationActive={false}
        data={dataOfDonation}
        cx="50%"
        cy="50%"
        outerRadius={120}
        fill="#8884d8"
        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(2)}%`}>
            {dataOfDonation.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
        <Tooltip></Tooltip>
        <Legend></Legend>
            </PieChart>
        </div>
    );
};

export default Statistics;





