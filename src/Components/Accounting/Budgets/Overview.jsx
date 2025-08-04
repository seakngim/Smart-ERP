import React from "react";
import EnhancedTable from "./EnhancedTable";
import NavbarComponentOverview from "./NavbarComponent";
import BudgetOverview from "./BudgetOverview";

const Overview = () => {
    return (
        <main>
            <NavbarComponentOverview />
            <BudgetOverview />
        </main>
    );
};

export default Overview;