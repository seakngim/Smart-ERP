import React from "react";
import NavbarComponentCustomer from "./NavbarComponentCustomer";
import InvocesTable from "./InvoicesTable";

const Customer = () => {
    return (
        <main>
            <NavbarComponentCustomer />
            <InvocesTable />
        </main>
    );
};

export default Customer;