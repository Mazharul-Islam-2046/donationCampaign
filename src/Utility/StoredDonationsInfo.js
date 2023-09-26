const getStoredDonationInfo = () => {
  const storedDonationInfo = localStorage.getItem("donation-Info");
  if (storedDonationInfo) {
    return JSON.parse(storedDonationInfo);
  }
  return [];
};

const saveDonationInfo = (id) => {
  const storedDonationInfo = getStoredDonationInfo();
  const exists = storedDonationInfo.find((donationId) => donationId === id);
  if (!exists) {
    storedDonationInfo.push(id);
    localStorage.setItem(
      "donation-Info",
      JSON.stringify(storedDonationInfo)
    );
  }
};

export { getStoredDonationInfo, saveDonationInfo };
