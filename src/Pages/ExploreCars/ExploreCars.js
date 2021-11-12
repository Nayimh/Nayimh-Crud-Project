import React from 'react';
import Footter from '../Footer/Footter';
import PurchasePage from '../Purchase/Purchasepage/PurchasePage';
import Navigation from '../shared/Navigaton/Navigation';

const ExploreCars = () => {
    return (
        <div>
            <Navigation></Navigation>
            <PurchasePage></PurchasePage>
            <Footter></Footter>
        </div>
    );
};

export default ExploreCars;