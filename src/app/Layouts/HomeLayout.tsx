import React from 'react';
import  Banner from '../components/Banner/Banner';
import ServicesCards from '../components/ServicesCards/ServicesCards';

const HomeLayout = () => {
    return (
       <div className='container mx-auto'>
        <Banner/>  
        <ServicesCards/>  
        </div>
    );
};

export default HomeLayout;