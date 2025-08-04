import React from "react";
import EnhancedTable from "./EnhancedTable";
import NavbarComponentBudget from "./NavbarComponent";

const Budgets = () => {
    return (
        <main>
            <NavbarComponentBudget />
            <EnhancedTable />
        </main>
    );
};

export default Budgets;