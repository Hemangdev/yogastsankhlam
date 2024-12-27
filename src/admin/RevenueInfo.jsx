import React from 'react';

const RevenueInfo = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#63948b] text-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-semibold">Courses Revenue</h3>
                <p className="text-lg">$50,000</p>
            </div>
            <div className="bg-[#cbb799] text-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-semibold">Ads Revenue</h3>
                <p className="text-lg">$20,000</p>
            </div>
            <div className="bg-[#8a9d8b] text-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-semibold">Total Courses Sold</h3>
                <p className="text-lg">500</p>
            </div>
            <div className="bg-[#b5a98d] text-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-semibold">Revenue from Courses</h3>
                <p className="text-lg">$30,000</p>
            </div>
        </div>
    );
};

export default RevenueInfo;
