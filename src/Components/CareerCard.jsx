import React from 'react';
import { Map, Calendar } from 'react-feather';

const CareerCard = React.memo(({ logo, title, role, location, duration, theme }) => {
    return (
    <div
      className={`w-full max-w-lg mx-auto p-6 rounded-xl shadow-md transition-all duration-300 ${
        theme === 'Day'
          ? 'bg-white hover:bg-gray-100 text-slate-900 border border-gray-300'
          : 'bg-gray-900 hover:bg-gray-800 text-white border border-gray-700'
      }`}
    >
      <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
        <img src={logo} alt={`${title}-logo`} className="w-24 h-24 object-contain sm:w-20 sm:h-20" loading='lazy'/>
        <div className="text-center sm:text-left">
          <h5 className="text-xl font-bold mb-1">{title}</h5>
          <p className="text-sm text-gray-500 dark:text-gray-300">{role}</p>
        </div>
      </div>

      <hr className="my-4 border-gray-300 dark:border-gray-600" />

      <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <Map size={18} />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar size={18} />
          <span>{duration}</span>
        </div>
      </div>
    </div>
  );
});

export default CareerCard;
