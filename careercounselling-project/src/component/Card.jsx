import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
  return (
    <div className="mt-5 mb-5">
      <div className="card bg-base-100  border shadow-xl">
        {/* Image Section */}
        <figure className="p-3">
          <img
            src={data.image}
            alt={data.service_name}
            className="rounded-xl h-[250px] w-full "
          />
        </figure>

        {/* Card Content */}
        <div className="card-body space-y-2 ">
          <h2 className="card-title text-xl font-bold text-gray-800">{data.service_name}</h2>
          <p className="text-lg text-gray-600 ">Category: <span className="font-medium">{data.category}</span></p>
          <p className="text-lg text-gray-600 ">Pricing: <span className="font-medium">{data.pricing}</span></p>
          <p className="textlg text-gray-600 ">
            Counselor: <span className="font-medium">{data.counselor.name}</span>
          </p>
          <p className="text-lg text-gray-600">
            Qualification: <span className="font-medium">{data.counselor.qualification}</span>
          </p>

          {/* Action Button */}
          <div className="card-actions">
            <button className="btn bg-green-600 text-white rounded-full border-white"><Link to={`/${data.id}`}>{data.button}</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
