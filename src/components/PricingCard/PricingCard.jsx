import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

const PricingCard = ({pricing}) => {

    console.log(pricing)

    return (
        <div className='border bg-green-800 rounded-xl p-4'>

            <h1 className="text-3xl font-semibold">{pricing.name}</h1>
            <p>{pricing.location}</p>
            <p className='font-semibold'>Price Per Visit: {pricing.pricePerVisit}</p>

            <ul className="mt-4  bg-green-900 rounded-lg flex-1">
                {pricing.facilities.map((facility, index) => (
                    <li key={index} className="flex items-center mb-2">
                        <FontAwesomeIcon icon={faCircleCheck} className="mr-2 text-white" />
                        <span>{facility}</span>
                    </li>
                ))}
            </ul>

            <button className="btn w-full">Subscribe</button>

        </div>
    );
};

export default PricingCard;