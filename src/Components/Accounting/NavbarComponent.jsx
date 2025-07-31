import React, { useState } from "react";
import {
    LuChevronDown,
    LuChevronLeft,
    LuChevronRight,
    LuClock,
    LuCog,
    LuFilter,
    LuMenu,
    LuMessagesSquare,
    LuSearch,
    LuSettings
} from 'react-icons/lu';
import accountingImg from "../../assets/accounting.png";
import { Link } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Divider,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const menuItems = {
    Customer: ["Invoices", "Credit Notes", "Payment", "Product", "Customer"],
    Vendors: ["Bills", "Refunds", "Payments", "Employee Expenses", "Products", "Vendors"],
    Accounting: ["Journal Entries", "Journal Items", "Analytic Items", "Assets", "Loans", "Reconcile", "Lock Dates"],
    Banking: ["Banking Overview", "Fund Transfer", "Bank Deposit", "Bank Reconciliation", "Audit Trail & Log", "Reports"],
    Reporting: {
        "Statement Reports": ["Customer Statem", "Balance Sheet", "Profit & Loss", "Cash Flow", "Tax Return"],
        "Audit Reports": ["General Ledger", "Trial Balance", "Journal Audit"],
        "APartner Reports": ["Partner ledger", "Aged Receivable", "Aged Payable"],
        "Management": ["Invoice Analysis", "Analytic Report", "Deferred Revenue", "Deferred Expense", "Disallowed Expenses", "Depreciation Schedule"]
    },
    Configuration: {
        "Settings": [],
        "Accounting": ["Chart of Accounts", "VAT", "Journals", "Currencies", "Fiscal Positions", "Multi-Ledger", "Cash Roundings", "Fiscal Categories", "Asset Models"],
        "Invoicing": ["Payment Terms", "Follow-up Levels", "Product Categories"],
        "Online Payments": ["Payment Providers", "Payment Methods"]
    },
    Reports: {
        "Business Overview": [
            "Statement of Comprehensive Income", "Statement of Financial Position", "Statement of Cash Flows",
            "Statement of Changes in Equity", "Executive Summary", "Cash Summary",
            "Account Receivable Aging Summary", "Account Payable Aging Summary"
        ],
        "Sales and Customers": [
            "Sales by Product Summary", "Sales by Product Detail", "Sales by Customer Summary", "Sales by Customer Detail",
            "Sales by Salesperson", "Sales by Salesperson Summary", "Sales by Branch", "Sales Invoice Detail", "Sales Invoice Summary"
        ],
        "Accounts Receivables": [
            "AR Aging Summary", "AR Aging Detail", "Customer Balance Summary", "Customer Balance Detail",
            "Invoice List", "Payments Received", "Payments Received Summary"
        ],
        "Purchase and Vendors": [
            "Purchase by Product Summary", "Purchase by Product Detail", "Purchase by Vendor Summary", "Purchase by Vendor Detail",
            "Purchase Invoice", "Open PO Summary", "Open PO Detail", "Expense Summary", "Expense Details"
        ],
        "Accounts Payable": [
            "AP Aging Summary", "AP Aging Detail", "Vendor Balance Summary", "Vendor Balance Detail", "Unpaid Bills", "Bill Payments Report"
        ],
        "Accountants": [
            "Account Transactions", "General Journal", "General Ledger", "Adjusting Journal Entries",
            "Adjusted Trial Balance", "Trial Balance"
        ],
        "Inventories": [
            "Quantity on Hand", "Inventory Valuation Summary", "Inventory Valuation Detail", "Stock Status Report",
            "FIFO Cost Tracking Report", "Inventory Aging", "Stock Summary Report", "ABC Classification"
        ]
    }
};
const departments = [
    "Accountant",
    "Sale",
    "Finance",
    "Customer Service",
    "All Department",
];

const NavbarComponentAC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const { company } = useAuth();
    const [openDropdown, setOpenDropdown] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage] = React.useState(10);
    const totalCount = 10;

    const handlePrev = () => {
        if (page > 0) setPage(page - 1);
    };

    const handleNext = () => {
        if ((page + 1) * rowsPerPage < totalCount) {
            setPage(page + 1);
        }
    };

    const from = page * rowsPerPage + 1;
    const to = Math.min((page + 1) * rowsPerPage, totalCount);

    const filtered = departments.filter((d) =>
        d.toLowerCase().includes(search.toLowerCase())
    );

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const handleToggle = (item) => {
        setOpenDropdown(openDropdown === item ? null : item);
    };

    const DrawerContent = (
        <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/dashboard-accounting">
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/budgets">
                        <ListItemText primary="Budgets" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            {Object.entries(menuItems).map(([menu, subItems]) => (
                <Accordion key={menu} disableGutters>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="body2">{menu}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List dense>
                            {Array.isArray(subItems) ? (
                                subItems.map((sub, i) => (
                                    <ListItem key={i} disablePadding>
                                        <ListItemButton
                                            component="a"
                                            href={`/${menu.toLowerCase()}/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                                        >
                                            <ListItemText primary={sub} />
                                        </ListItemButton>
                                    </ListItem>
                                ))
                            ) : (
                                Object.entries(subItems).map(([group, items]) => (
                                    <Box key={group} sx={{ mb: 1 }}>
                                        {group === "Settings" ? (
                                            <ListItem disablePadding>
                                                <ListItemButton
                                                    component={Link}
                                                    to={`/${menu.toLowerCase()}/setting`}
                                                >
                                                    <ListItemText primary="Settings" />
                                                </ListItemButton>
                                            </ListItem>
                                        ) : (
                                            <>
                                                <Typography variant="subtitle2" sx={{ pl: 1, color: 'gray' }}>{group}</Typography>
                                                {items.map((item, itemIdx) => (
                                                    <ListItem key={itemIdx} disablePadding>
                                                        <ListItemButton
                                                            component="a"
                                                            href={`/${menu.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                                                        >
                                                            <ListItemText primary={item} />
                                                        </ListItemButton>
                                                    </ListItem>
                                                ))}
                                            </>
                                        )}
                                    </Box>
                                ))
                            )}
                        </List>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <section className="flex items-center pl-5 justify-between p-2 border-b border-gray-200">
                <div className="flex items-center gap-4">
                    <button onClick={toggleDrawer(true)} className="lg:hidden text-xl">
                        <LuMenu />
                    </button>

                    <Link to="/home" className="flex gap-2 items-center group cursor-pointer">
                        <img src={accountingImg} alt="Logo" className="w-5 h-5 group-hover:hidden" />
                        <LuChevronLeft className="w-4 h-4 hidden group-hover:block" />
                        <span className="text-sm font-semibold hover:text-gray-600">Accounting</span>
                    </Link>

                    <nav className="hidden lg:flex text-sm py-2">
                        <Link to="/dashboard-accounting" className="hover:bg-gray-200 px-3 py-1 rounded-md">Dashboard</Link>
                        <Link to="/budgets" className="hover:bg-gray-200 px-3 py-1 rounded-md">Budgets</Link>
                        {Object.entries(menuItems).map(([menu, subItems]) => (
                            <div key={menu} className="relative">
                                <button onClick={() => handleToggle(menu)} className="hover:bg-gray-200 px-3 py-1 rounded-md">
                                    {menu}
                                </button>
                                {openDropdown === menu && (
                                    <div className="absolute left-0 mt-1 top-full w-72 bg-white border shadow-lg rounded z-50 max-h-[630px] overflow-y-auto">
                                        <ul className="p-1">
                                            {Array.isArray(subItems) ? (
                                                subItems.map((sub, i) => (
                                                    <li key={i}>
                                                        <Link
                                                            to={`/${menu.toLowerCase()}/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                                                            className="block px-4 py-1 hover:bg-gray-100 text-sm text-gray-700"
                                                        >
                                                            {sub}
                                                        </Link>
                                                    </li>
                                                ))
                                            ) : (
                                                Object.entries(subItems).map(([group, items]) => (
                                                    <li key={group}>
                                                        {group === "Settings" ? (
                                                            <Link
                                                                to={`/${menu.toLowerCase()}/setting`}
                                                                className="block px-2 py-1 hover:bg-gray-100 font-semibold"
                                                            >
                                                                Settings
                                                            </Link>
                                                        ) : (
                                                            <>
                                                                <div className="px-2 py-1 font-semibold">{group}</div>
                                                                {items.map((item, i) => (
                                                                    <Link
                                                                        key={i}
                                                                        to={`/${menu.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                                                                        className="block px-4 py-1 hover:bg-gray-100 text-sm text-gray-700"
                                                                    >
                                                                        {item}
                                                                    </Link>
                                                                ))}
                                                            </>
                                                        )}
                                                    </li>
                                                ))
                                            )}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>

                <section className="flex gap-2 items-center">
                    <LuMessagesSquare />
                    <LuClock />
                    <p>{company || "My Company"}</p>
                    <LuCog />
                    <img
                        src="https://i.pravatar.cc/40"
                        alt="Avatar"
                        className="w-8 h-8 rounded-lg p-0.5 border-2 border-primary"
                    />
                </section>
            </section>

            <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
                {DrawerContent}
            </Drawer>

            <section className="bg-white border-b border-gray-200 px-6 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <button className="bg-primary px-3 py-1.5 text-sm rounded-md text-white hover:bg-primary/90">New</button>
                        <span className="text-gray-900">Dashboard</span>
                        <button>
                            <LuSettings className="w-4 h-4" />
                        </button>
                    </div>
                    {/* Search Input Toggle */}
                    <div
                        className="hidden md:flex w-80 lg:w-96 items-center justify-end border border-gray-300 rounded-md px-3 h-8 cursor-pointer bg-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <LuSearch className="text-gray-400 text-sm mr-2" />
                        <input
                            type="text"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="flex-grow outline-none text-sm"
                        />

                        <Divider orientation="vertical" variant="middle" flexItem />
                        <LuChevronDown className="text-gray-400 text-xs ml-2 h-4 w-4 " />
                    </div>

                    {/* Dropdown List */}
                    {isOpen && (
                        <section className="absolute -mx-3 w-full top-24 lg:top-28">
                            <div className="w-80 lg:w-96 mt-1 xl:mt-0 bg-white border items-center justify-center m-auto border-gray-200 rounded-md shadow-lg z-10">
                                {/* Header */}
                                <div className="px-4 py-2 text-gray-600 font-semibold text-sm border-b border-gray-200 flex items-center gap-2">
                                    <LuFilter className="text-gray-400 text-sm" />
                                    Filter
                                </div>

                                {/* Filtered Items */}
                                {filtered.length > 0 ? (
                                    filtered.map((dept, i) => (
                                        <div
                                            key={i}
                                            className="px-4 py-2 hover:bg-gray-100 text-sm text-gray-700 cursor-pointer"
                                            onClick={() => {
                                                setSearch(dept);
                                                setIsOpen(false);
                                            }}
                                        >
                                            {dept}
                                        </div>
                                    ))
                                ) : (
                                    <div className="px-4 py-2 text-sm text-gray-400">No results</div>
                                )}
                            </div>
                        </section>
                    )}
                    <div className="flex items-center justify-between p-2 text-sm text-gray-700">
                        <div>{from} - {to} / {totalCount}</div>
                        <div className="flex gap-0.5 ml-2">
                            <button
                                onClick={handlePrev}
                                className="bg-gray-100 p-1 rounded-sm disabled:opacity-50"
                                disabled={page === 0}
                            >
                                <LuChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="bg-gray-100 p-1 rounded-sm disabled:opacity-50"
                                disabled={(page + 1) * rowsPerPage >= totalCount}
                            >
                                <LuChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default NavbarComponentAC;
