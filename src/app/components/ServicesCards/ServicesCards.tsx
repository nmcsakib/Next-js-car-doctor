import React from 'react';
import ServiceCard from './ServiceCard';
import { collectionsObj, dbConnect } from '@/lib/mongodb';
interface Service {
  _id: string;
  service_id: string;
  title: string;
  img: string;
  price: string;
  description: string;
  facility: {
    name: string;
    details: string;
  }[];
}

const ServicesCards = async () => {
  const collection = await dbConnect(collectionsObj.services);
const data = (await collection.find().toArray()) as unknown as Service[];

    return (
        <>
            <section className='my-5'>
                <h2 className='text-4xl text-center'>Services</h2>
                <p className='text-sm text-center text-black/50 w-1/2 mx-auto mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid qui ullam a saepe libero non consequuntur blanditiis, iste commodi aperiam.</p>
            </section>
            {/* <p>{JSON.stringify(data)}</p> */}
           <section className='grid grid-cols-3 gap-5 '>
             {
                data.map(card => <ServiceCard key={card._id} card={card}/>)
            }
           </section>
        </>
    );
};

export default ServicesCards;