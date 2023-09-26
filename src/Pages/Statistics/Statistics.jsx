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
        {type:"Donated", value: donatedFeilds.length},
        {type:"DonationLeft", value: postiveDonationLeft}
    ]
    setDataOfDonation(donationAmount)
},[donationFeilds])

const COLORS = ['#FF444A', '#00C49F'];
    return (
        <div className="w-full flex justify-center items-center">
            <PieChart width={500} height={500}>
        <Pie
        dataKey="value"
        isAnimationActive={false}
        data={dataOfDonation}
        cx="50%"
        cy="50%"
        outerRadius={200}
        fill="#8884d8"
        label>
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