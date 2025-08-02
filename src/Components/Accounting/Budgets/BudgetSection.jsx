import React, { useState } from 'react';
import BudgetEditDialog from './BudgetEditDialog';

export default function BudgetSection() {
    const [open, setOpen] = useState(false);

    const budgetData = {
        name: 'Marketing Budget',
        type: 'Profit and loss',
        cost: '15000',
        startdate: '2025-01-01',
        enddate: '2025-12-31',
        department: 'Marketing',
        status: 'Active',
        company: 'Main Branch',
        note: 'Used for Q1 and Q2 campaigns'
    };

    const handleSave = (updatedData) => {
        console.log('✅ Saved Budget:', updatedData);
        // You can update your state or call API here
    };

    return (
        <div className="p-6">
            <button
                onClick={() => setOpen(true)}
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
            >
                Edit Budget
            </button>

            <BudgetEditDialog
                open={open}
                onClose={() => setOpen(false)}
                data={budgetData}
                onSave={handleSave}
            />
        </div>
    );
}
