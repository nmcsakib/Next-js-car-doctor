import Image from 'next/image';
import React from 'react';

type CardProp = {
    card: {
        _id: string;
        service_id: string;
        title: string;
        img: string;
        price: string;
        description: string;
        facility: {
            name: string;
            details: string;
        }[]
    }
}
const ServiceCard = ({ card }: CardProp) => {
    return (
        <div className='flex justify-center items-center'>

        <div className="card bg-base-100 w-96 shadow-sm p-3 border rounded-lg">
            <figure>
                <Image
                    className='rounded-xl'
                    height={500}
                    width={300}
                    src={card?.img}
                    alt={card?.title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {card?.title}
                </h2>
                <div className="card-actions justify-end">
                    <p className="text-orange-500 text-lg font-bold">Price: {card?.price}</p>

                </div>
            </div>
        </div>
        </div>
    );
};

export default ServiceCard;