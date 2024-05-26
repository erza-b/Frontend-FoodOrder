
import React from 'react';
import EventCard from './EventCard';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Villa Natyra",
      description: "50% off on your first order",
      location: "Prishtinë-Pejton",
      startDate: "StartDate:23.05.2024",
      endDate: "EndDate:26.05.2024",
      image: '/images/Villa.jpg'
    },
    {
      id: 2,
      title: "City Grill Restaurant",
      description: "Free dessert with every meal",
      location: "Prishtinë-Dardani",
      startDate: "StartDate:25.05.2024",
      endDate: "EndDate:28.05.2024",
      image: '/images/City.jpg'
    },
    {
      id: 3,
      title: "Mondo Caffe",
      description: "Live music every Friday night",
      location: "Prishtinë-Aktash",
      startDate: "StartDate:27.05.2024",
      endDate: "EndDate:31.05.2024",
      image: '/images/mondo.jpg'
    }
  ];

  return (
    <div className='mt-5 px-5 flex flex-wrap gap-5'>
      {events.map((event) => <EventCard key={event.id} event={event} />)}
    </div>
  );
}

export default Events;




