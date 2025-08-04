import React, { Fragment } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

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
    category: "Other Income/Expenses"
  },
  {
    category: "Other Income",
    accounts: [
      { name: "Inerest Income", accountNumber: "", values: Array(12).fill(0) },
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

const BudgetOverview = () => {
  return (
    <section className='mx-5 my-2.5 p-2.5 border rounded-md flex flex-col items-end'>
      <p className='border p-1 w-8/12 text-center'>
        January 2025 to December 2025
      </p>
      <TableContainer>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              <TableCell>Account</TableCell>
              <TableCell>Account Number</TableCell>
              {months.map((month) => (
                <TableCell key={month} align="right">
                  {month}
                </TableCell>
              ))}
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {accountData?.map((category, index) => {
              // Skip rendering if no accounts
              if (!category || category?.length === 0) {
                return null;
              }

              return (
                <Fragment key={index}>
                  <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                    <TableCell colSpan={2} sx={{ fontWeight: 600 }}>
                      {category?.category}
                    </TableCell>
                    {months?.map((_, i) => (
                      <TableCell key={i} align="right" />
                    ))}
                    <TableCell align="right" sx={{ fontWeight: 600 }} />
                  </TableRow>

                  {category?.accounts?.map((account, idx) => {
                    const isLastRow = idx === category?.accounts?.length - 1;
                    return (
                      <TableRow key={idx}>
                        <TableCell sx={isLastRow ? { fontWeight: 600 } : {}}>
                          {account?.name}
                        </TableCell>
                        <TableCell sx={isLastRow ? { fontWeight: 600 } : {}}>
                          {account?.accountNumber}
                        </TableCell>
                        {account?.values.map((val, i) => (
                          <TableCell
                            key={i}
                            align="right"
                            sx={isLastRow ? { fontWeight: 600 } : {}}
                          >
                            {formatCurrency(val)}
                          </TableCell>
                        ))}
                        <TableCell align="right" sx={isLastRow ? { fontWeight: 600 } : {}}>
                          {formatCurrency(account.values.reduce((sum, v) => sum + v, 0))}
                        </TableCell>
                      </TableRow>
                    );
                  })}

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
