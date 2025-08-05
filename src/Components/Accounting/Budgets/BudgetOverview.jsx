import React, { Fragment, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Collapse,
  Box,
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowRight } from '@mui/icons-material';

const months = [
  "Jan-2025", "Feb-2025", "Mar-2025", "Apr-2025", "May-2025", "Jun-2025",
  "Jul-2025", "Aug-2025", "Sep-2025", "Oct-2025", "Nov-2025", "Dec-2025",
];

const accountData = [
  {
    category: "Income",
    accounts: [
      { name: "Services Revenue", accountNumber: "", values: Array(12).fill(0) },
      { name: "Sales Revenue", accountNumber: "", values: Array(12).fill(0) },
      { name: "Other Operating Income", accountNumber: "", values: Array(12).fill(0) },
      { name: "Total Income", accountNumber: "", values: Array(12).fill(0) },
    ],
  },
  {
    category: "Less Cost of Sales",
    accounts: [
      { name: "Cost of Service", accountNumber: "", values: Array(12).fill(0) },
      { name: "Cost of Goods Sold", accountNumber: "", values: Array(12).fill(0) },
      { name: "Other Cost", accountNumber: "", values: Array(12).fill(0) },
      { name: "Total Cost of Sale", accountNumber: "", values: Array(12).fill(0) },
    ],
  },
  {
    accounts: [
      { name: "Gross Profit", accountNumber: "", values: Array(12).fill(0) },
    ],
  },
  {
    category: "Less Operating Expenses",
    accounts: [
      { name: "Advertising (400)", accountNumber: "", values: Array(12).fill(0) },
      { name: "Bank Fees (404)", accountNumber: "", values: Array(12).fill(0) },
      { name: "Bank Revaluations (497)", accountNumber: "", values: Array(12).fill(0) },
      { name: "Cleaning (408)", accountNumber: "", values: Array(12).fill(0) },
      { name: "Consulting & Accounting (412)", accountNumber: "", values: Array(12).fill(0) },
      { name: "Depreciation (416)", accountNumber: "", values: Array(12).fill(0) },
      { name: "Entertainment (420)", accountNumber: "", values: Array(12).fill(0) },
      { name: "Freight & Courier (425)", accountNumber: "", values: Array(12).fill(0) },
      { name: "General Expenses (429)", accountNumber: "", values: Array(12).fill(0) },
      { name: "Income Tax Expense (505)", accountNumber: "", values: Array(12).fill(0) },
      { name: "Total Operating Expenses", accountNumber: "", values: Array(12).fill(0) },
    ],
  },
  {
    category: "Other Income/Expenses"
  },
  {
    category: "Other Income",
    accounts: [
      { name: "Interest Income", accountNumber: "", values: Array(12).fill(0) },
      { name: "Realized Exchange Gains", accountNumber: "", values: Array(12).fill(0) },
      { name: "Gain on Disposal of Fixed Assets", accountNumber: "", values: Array(12).fill(0) },
      { name: "Other Non-operating Income", accountNumber: "", values: Array(12).fill(0) },
    ],
  },
  {
    category: "Other Expenses",
    accounts: [
      { name: "Realized Exchange Gains", accountNumber: "", values: Array(12).fill(0) },
      { name: "Gain on Disposal of Fixed Assets", accountNumber: "", values: Array(12).fill(0) },
      { name: "Other Non-operating Income", accountNumber: "", values: Array(12).fill(0) },
    ],
  },
  {
    accounts: [
      { name: "Total Expenses", accountNumber: "", values: Array(12).fill(0) },
    ],
  },
  {
    accounts: [
      { name: "Net Profit", accountNumber: "", values: Array(12).fill(0) },
    ],
  },
];

const formatCurrency = (val) => `$ ${val.toFixed(2)}`;

const CollapsibleCategory = ({ category, children }) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
        <TableCell colSpan={2} sx={{ fontWeight: 600 }}>
          {children ? (
            <IconButton size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
            </IconButton>
          ) : null}
          {category}
        </TableCell>
        {months.map((_, i) => (
          <TableCell key={i} align="right" />
        ))}
        <TableCell align="right" />
      </TableRow>
      {children && (
        <TableRow>
          <TableCell colSpan={15} sx={{ paddingBottom: 0, paddingTop: 0 }}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box>
                {children}
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

const BudgetOverview = () => {
  return (
    <section className='mx-5 my-2.5 p-2.5 border rounded-md flex flex-col items-end'>
      <p className='border p-1 w-8/12 text-center'>January 2025 to December 2025</p>
      <TableContainer>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              <TableCell>Account</TableCell>
              <TableCell>Account Number</TableCell>
              {months.map((month) => (
                <TableCell key={month} align="right">{month}</TableCell>
              ))}
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {accountData?.map((category, index) => {
              if (!category?.accounts || category?.accounts?.length === 0) {
                return (
                  <TableRow key={index} sx={{ backgroundColor: '#f5f5f5' }}>
                    <TableCell colSpan={2} sx={{ fontWeight: 600 }}>{category?.category}</TableCell>
                    {months?.map((_, i) => (
                      <TableCell key={i} align="right" />
                    ))}
                    <TableCell align="right" />
                  </TableRow>
                );
              }

              const accountRows = category?.accounts?.map((account, idx) => {
                const isLastRow = idx === category?.accounts?.length - 1;
                const isSummaryRow = ["Net Profit", "Total Expenses", "Gross Profit"].includes(account.name);

                return (
                  <TableRow key={idx} sx={isSummaryRow ? { backgroundColor: "#f5f5f5" } : {}}>
                    <TableCell sx={isLastRow ? { fontWeight: 600 } : {}}>{account?.name}</TableCell>
                    <TableCell sx={isLastRow ? { fontWeight: 600 } : {}}>{account?.accountNumber}</TableCell>
                    {account?.values?.map((val, i) => (
                      <TableCell key={i} align="right" sx={isLastRow ? { fontWeight: 600 } : {}}>
                        {formatCurrency(val)}
                      </TableCell>
                    ))}
                    <TableCell align="right" sx={isLastRow ? { fontWeight: 600 } : {}}>
                      {formatCurrency(account?.values?.reduce((sum, v) => sum + v, 0))}
                    </TableCell>
                  </TableRow>
                );
              });

              if (category.category === "Less Operating Expenses") {
                return (
                  <CollapsibleCategory key={index} category={category.category}>
                    <Table size="small" sx={{ marginBottom: '30px' }}  >
                      <TableBody>{accountRows}</TableBody>
                    </Table>
                  </CollapsibleCategory>
                );
              }

              return (
                <Fragment key={index}>
                  {category?.category && (
                    <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                      <TableCell colSpan={2} sx={{ fontWeight: 600 }}>{category.category}</TableCell>
                      {months.map((_, i) => (
                        <TableCell key={i} align="right" />
                      ))}
                      <TableCell align="right" />
                    </TableRow>
                  )}
                  {accountRows}
                  <TableRow sx={{ height: '28px' }}>
                    <TableCell colSpan={2} sx={{ fontWeight: 600 }} />
                    {months?.map((_, i) => (
                      <TableCell key={i} align="right" />
                    ))}
                    <TableCell align="right" sx={{ fontWeight: 600 }} />
                  </TableRow>
                </Fragment>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default BudgetOverview;
