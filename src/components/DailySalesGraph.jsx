import React from 'react';

const DailySalesGraph = () => {
  // Placeholder data for the week (Sunday to Saturday)
  const salesData = [5, 12, 8, 15, 10, 18, 22];
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Find the maximum sales value for scaling the bars
  const maxSales = Math.max(...salesData);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-agri-green mb-4">Daily Sales (Last 7 Days)</h2>
      <div className="flex justify-between items-end h-32">
        {salesData.map((sales, index) => (
          <div key={index} className="bar-container">
            <div
              className="bar"
              style={{
                height: `${(sales / maxSales) * 100}%`,
                backgroundColor: '#16a34a', // agri-green color
              }}
            ></div>
            <span className="day-label">{days[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailySalesGraph;
