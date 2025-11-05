
import React from 'react';

interface FacilityCardProps {
  icon: React.ReactNode;
  name: string;
}

const FacilityCard: React.FC<FacilityCardProps> = ({ icon, name }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="flex items-center justify-center h-16 w-16 mx-auto mb-4 bg-primary/10 text-primary rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-dark">{name}</h3>
    </div>
  );
};

export default FacilityCard;
