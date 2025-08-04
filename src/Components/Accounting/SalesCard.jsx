import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { getSalesData } from '../../services/api';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-black/70 shadow-md border rounded-md px-3 py-2 text-xs text-white">
                <p className="font-semibold">{label}</p>

                <p className=" font-medium flex items-center gap-2"><span className="w-2 h-2 bg-[#F1F9FE]"> </span>Sales: ${payload[0].value.toLocaleString()}</p>
            </div>
        );
    }
    return null;
};
const SalesCard = () => {
    const [salesData, setSalesData] = useState([]);

    useEffect(() => {
        getSalesData().then(setSalesData);
    }, []);

    // Custom Tooltip Component

    return (
        <section className="shadow-md rounded-md border-l-4 flex flex-col text-sm justify-between border border-l-purple-600">
            <section className="grid grid-cols-2 justify-between p-4">
                <div>
                    <p className="mb-2 font-medium text-primary">Sales</p>
                    <button
                        className="bg-primary px-3 py-1.5 rounded-md text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        aria-label="Create new sale"
                    >
                        New
                    </button>
                </div>
                <div className="mt-8 space-y-1">
                    <p className="flex justify-between items-center">
                        <span className="text-primary">4 To Validate</span>
                        <strong>$24,003.45</strong>
                    </p>
                    <p className="flex justify-between items-center">
                        <span className="text-primary">20 Unpaid</span>
                        <strong>$323,725.82</strong>
                    </p>
                    <p className="flex justify-between items-center">
                        <span className="text-primary">18 Late</span>
                        <strong>$6,066.07</strong>
                    </p>
                </div>
            </section>

            <ResponsiveContainer width="100%" height={150}>
                <BarChart data={salesData}>
                    <XAxis dataKey="date" />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="value" fill="#F1F9FE" />
                </BarChart>
            </ResponsiveContainer>
        </section>
    );
};

export default SalesCard;
