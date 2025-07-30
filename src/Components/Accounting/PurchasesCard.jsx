import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { getPurchasesData } from '../../services/api';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-black/70 shadow-md border rounded-md px-3 py-2 text-xs text-white">
                <p className="font-semibold">{label}</p>
                <p className=" font-medium flex items-center gap-2"><span className="w-2 h-2 bg-[#F1F9FE]"> </span>Purchases: ${payload[0].value.toLocaleString()}</p>
            </div>
        );
    }
    return null;
};

const PurchasesCard = () => {
    const [purchasesData, setPurchasesData] = useState([]);

    useEffect(() => {
        getPurchasesData().then(setPurchasesData);
    }, []);

    // Custom Tooltip Component

    return (
        <section className="shadow-md rounded-md border-l-4 border-purple-600">
            <section className="grid grid-cols-2 justify-between p-4">
                <div className="flex flex-col items-start gap-2">
                    <p>Purchases</p>
                    <p >Purchases@tt-erp.odoo.com</p>
                    <div className="flex gap-2">
                        <button className="bg-primary px-3 py-1.5 rounded-md text-white hover:bg-primary/90" >Upload</button>
                        <button className="bg-gray-300 px-3 py-1.5 rounded-md text-black hover:bg-gray-200" >New</button>
                    </div>
                </div>
                <div className="mt-8">
                    <p className="flex justify-between"><span className='text-primary'>2 To Validate</span>$0.00</p>
                    <p className="flex justify-between"><span className='text-primary'>1 To Pay</span>$37,500.00</p>
                    <p className="flex justify-between"><span className='text-primary'>1 Late</span>$37,500.00</p>
                    <p className="text-yellow-600">Irregular Sequences</p>
                </div>
            </section>
            <ResponsiveContainer border="1px" width="100%" height={150}>
                <BarChart data={purchasesData}>
                    <XAxis dataKey="date" />
                    <Tooltip content={<CustomTooltip />} />
                    {/* <YAxis /> */}
                    <Bar dataKey="value" fill="#F1F9FE" />
                </BarChart>
            </ResponsiveContainer>
        </section>
    );
};

export default PurchasesCard;
