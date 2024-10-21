export function filterData(searchText , restaurants){

    const filterData =restaurants.filter((restaurant) => restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()))  || 
                       restaurants.filter((restaurant) => restaurant?.info?.areaName.toLowerCase().includes(searchText.toLowerCase())) || 
                       restaurants.filter((restaurant) => restaurant?.info?.cuisines.join(",").toLowerCase().includes(searchText.toLowerCase())) ;
       return filterData;
  };


