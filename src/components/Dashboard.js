import React from 'react';
import Baners from './MainPage/Baners';
import BestSeller from './MainPage/BestSeller';
import GreenTeaBaner from './MainPage/GreenTeaBaner';
import NewArrivals from './MainPage/NewArrivals';
import FilterImages from './MainPage/FilterImages';



const Home = () => {
    return (
      <div>
        <Baners/>
        <BestSeller/>
        <GreenTeaBaner/>
        <NewArrivals/>
        <FilterImages/>
      </div>
    );
};

export default Home;