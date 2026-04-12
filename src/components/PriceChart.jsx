import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PriceChart = ({ data }) => {
    // Process data for chart: extract name and pricePerVisit
    const chartData = data.map(item => ({
        name: item.name,
        price: parseInt(item.pricePerVisit.replace('/-', '').trim()) // Assuming format like "250/-"
    }));

    return (
        <div className="w-full h-96 p-4">
            <h3 className="text-xl font-bold mb-4">Price Per Visit Comparison</h3>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="price" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PriceChart;