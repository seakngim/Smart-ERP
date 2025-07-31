import React, { useEffect, useState } from 'react';
import { getTaxSettings } from '../../services/api';

const TaxReturnCard = () => {
    const [taxOptions, setTaxOptions] = useState([]);
    const [selectedId, setSelectedId] = useState('');

    useEffect(() => {
        // Fetch tax settings on component mount
        const fetchData = async () => {
            const response = await getTaxSettings();
            setTaxOptions(response.options);
            setSelectedId(response.selected);
        };

        fetchData();
    }, []);

    return (
        <section className="shadow-md rounded-md border text-sm p-4">
            <p className="mb-2 font-medium text-primary">Point of Sale</p>
            <button className="bg-primary px-3 py-1.5 rounded-md text-white hover:bg-primary/90">Tax Returns</button>
            <section className="space-y-2 mt-3">
                {taxOptions.map((step) => (
                    <div key={step.id} className="flex items-center space-x-2 cursor-pointer" onClick={() => setSelectedId(step.id)}>
                        <div className={`w-3 h-3 rounded-full border-2 ${selectedId === step.id ? "bg-primary border-primary" : "bg-white border-gray-300"}`}></div>
                        <span className={`text-sm ${selectedId === step.id ? "text-primary font-medium" : "text-gray-600"}`}> {step.label} </span>
                    </div>
                ))}
            </section>
        </section>
    );
};

export default TaxReturnCard;
