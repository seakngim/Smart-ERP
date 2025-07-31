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
