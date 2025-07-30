export const getSalesData = async () => {
    return [
        { date: "Due", value: 800 },
        { date: "4-10 May", value: 1000 },
        { date: "This Week", value: 800 },
        { date: "18-24 May", value: 20000 },
        { date: "25-31 May", value: 2000 },
        { date: "Not Due", value: 800 },
    ];
};

export const getPurchasesData = async () => {
    return [
        { date: "Due", value: 800 },
        { date: "4-10 May", value: 800 },
        { date: "This Week", value: 20000 },
        { date: "18-24 May", value: 800 },
        { date: "25-31 May", value: 800 },
        { date: "Not Due", value: 800 },
    ];
};

export const getBankData = async () => {
    return [
        { name: "Chase" },
        { name: "Bank of America" },
        { name: "American Express" },
        { name: "Wells Fargo" },
        { name: "Mercury" },
        { name: "Capital One" },
        { name: "PayPal" },
    ];
};

export const getTaxSettings = async () => {
    return {
        selected: "set-periods",
        options: [
            { id: "set-company", label: "Set Company Data" },
            { id: "set-periods", label: "Set Periods" },
            { id: "review-card", label: "Review Card of Account" },
        ],
    };
};

export const getMiscOps = async () => {
    return [
        { id: 1, title: "Upload Expense Report", date: "2024-05-02" },
        { id: 2, title: "Submit Tax Return", date: "2024-05-06" },
    ];
};
