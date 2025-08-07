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

export default menuItems;