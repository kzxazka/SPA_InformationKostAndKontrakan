
import React from 'react';

const iconProps = {
  className: "w-8 h-8",
  strokeWidth: "2",
};

export const WifiIcon: React.FC = () => (
  <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.28 9.006c.726-.726 1.7-1.126 2.72-1.126s1.994.4 2.72 1.126M12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.72 12.75c.726.726 1.126 1.7 1.126 2.72s-.4 1.994-1.126 2.72M8.28 12.75A4.488 4.488 0 007.5 15.47" />
  </svg>
);

export const AirVentIcon: React.FC = () => (
    <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.271l3.056-3.056a2.25 2.25 0 013.182 0l2.164 2.164a2.25 2.25 0 003.182 0l3.056-3.056m-11.332 0c.996-.996 2.618-.996 3.614 0l2.164 2.164a1.5 1.5 0 002.121 0l3.056-3.056m-5.485 5.485c.996.996 2.618.996 3.614 0l2.164-2.164a1.5 1.5 0 000-2.121l-3.056-3.056m-5.485 5.485l-3.056 3.056a2.25 2.25 0 000 3.182l2.164-2.164a2.25 2.25 0 010-3.182z"/>
    </svg>
);

export const ShowerHeadIcon: React.FC = () => (
  <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.442 12.184A10.5 10.5 0 0013.5 22.5c5.368 0 9.824-4.135 10.42-9.456M3.442 12.184c-2.488-.135-4.442-2.223-4.442-4.684 0-2.61 2.134-4.744 4.744-4.744 2.46 0 4.548 1.956 4.684 4.442M3.442 12.184L15.316 3.442" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM9 15.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
  </svg>
);

export const CookingPotIcon: React.FC = () => (
  <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c-3.78 0-6.84-2.03-8.08-4.95A9.72 9.72 0 013 12c0-1.63.45-3.15.92-4.8.47-1.65 1.6-3.12 3.08-3.12h6c1.48 0 2.61 1.47 3.08 3.12.47 1.65.92 3.17.92 4.8 0 1.76-.32 3.52-.92 4.8-1.24 2.92-4.3 4.95-8.08 4.95z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 9h-3M6 9H3" />
  </svg>
);

export const MapPinIcon: React.FC = () => (
    <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export const PhoneIcon: React.FC = () => (
    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);
