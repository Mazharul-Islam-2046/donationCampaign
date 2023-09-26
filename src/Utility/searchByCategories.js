const searchByCategories = (searchText, donationFeilds) => {
 const searchResult = donationFeilds.filter(donationFeild => donationFeild.category.toUpperCase().includes(searchText.toUpperCase()));
 return searchResult;
}



export {searchByCategories}