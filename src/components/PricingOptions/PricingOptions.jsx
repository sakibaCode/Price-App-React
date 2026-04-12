import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import PriceChart from '../PriceChart';

const PricingOptions = ({PricingPromise}) => {

    const PricingData = use(PricingPromise)

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4 p-4">Get Our Membership</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
                {
                    PricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing} />)
                }
            </div>

            <PriceChart data={PricingData} />
            
        </div>
    );
};

export default PricingOptions;