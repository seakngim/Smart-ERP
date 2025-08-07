import React, { useState } from 'react';
import { LuClock9 } from "react-icons/lu";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Chip,
} from '@mui/material';

function createData(
  number,
  customer,
  invoiceDate,
  accountingDate,
  dueDate,
  sourceDoc,
  reference,
  salesperson,
  salesTeam,
  activities,
  company,
  taxExcluded,
  tax,
  total,
  amountDue,
  invoiceCurrency,
  checked,
  status,
  sent
) {
  return {
    number,
    customer,
    invoiceDate,
    accountingDate,
    dueDate,
    sourceDoc,
    reference,
    salesperson,
    salesTeam,
    activities,
    company,
    taxExcluded,
    tax,
    total,
    amountDue,
    invoiceCurrency,
    checked,
    status,
    sent,
  };
}

const initialRows = [
  createData('INV/2025/00016', 'King Mart Plc.', '08/06/2025', '08/06/2025', 'Yesterday', 'S00013', '', 'Somono Chek', 'Sales', '🕒', 'tt-erp', '$ 1,007,514.00', '$ 25.10', '$ 1,108,265.40', '$ 276.10', 'KHR', true, 'Not Paid', 'Not Sent'),
  createData('INV/2025/00017', 'Angkor Co., Ltd', '08/06/2025', '08/06/2025', '3 days ago', 'S00014', '', 'Kim Samnang', 'Corporate Sales', '🕒', 'tt-erp', '$ 3,400.00', '$ 0.00', '$ 3,400.00', '$ 0.00', 'USD', false, 'In Payment', 'Sent'),
  createData('INV/2025/00018', 'Eden Group', '08/06/2025', '08/06/2025', '7 days ago', 'S00015', '', 'Chan Dara', 'Enterprise', '🕒', 'tt-erp', '$ 500.00', '$ 50.00', '$ 550.00', '$ 550.00', 'USD', true, 'Paid', 'Sent'),
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Paid':
      return { color: 'success', backgroundColor: '#e8f5e9' };
    case 'In Payment':
      return { color: 'warning', backgroundColor: '#fffde7' };
    case 'Not Paid':
      return { color: 'error', backgroundColor: '#ffebee' };
    case 'Draft':
      return { color: 'info', backgroundColor: '#e3f2fd' }; // light blue
    default:
      return { color: 'default', backgroundColor: '#f5f5f5' };
  }
};

const getSentColor = (sent) => {
  switch (sent) {
    case 'Sent': return 'success';
    case 'Not Sent': return 'error';
    default: return 'default';
  }
};

const InvoicesTable = () => {
  const [rows, setRows] = useState(initialRows);

  const allChecked = rows.every((row) => row.checked);
  const someChecked = rows.some((row) => row.checked);

  const handleSelectAll = (event) => {
    const checked = event.target.checked;
    setRows((prev) => prev.map((row) => ({ ...row, checked })));
  };

  const handleCheckboxChange = (index) => {
    setRows((prev) =>
      prev.map((row, i) =>
        i === index ? { ...row, checked: !row.checked } : row
      )
    );
  };

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 600, overflowX: 'auto' }}>
      <Table stickyHeader size="small" sx={{ tableLayout: "fixed" }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: 56 }}>
              <Checkbox
                indeterminate={someChecked && !allChecked}
                checked={allChecked}
                onChange={handleSelectAll}
              />
            </TableCell>
            <TableCell sx={{ width: 120 }}>Number</TableCell>
            <TableCell sx={{ width: 180 }}>Customer</TableCell>
            <TableCell sx={{ width: 120 }}>Invoice Date</TableCell>
            <TableCell sx={{ width: 140 }}>Accounting Date</TableCell>
            <TableCell sx={{ width: 120 }}>Due Date</TableCell>
            <TableCell sx={{ width: 180 }}>Source Document</TableCell>
            <TableCell sx={{ width: 140 }}>Reference</TableCell>
            <TableCell sx={{ width: 160 }}>Salesperson</TableCell>
            <TableCell sx={{ width: 160 }}>Sales Team</TableCell>
            <TableCell sx={{ width: 100 }}>Activities</TableCell>
            <TableCell sx={{ width: 120 }}>Company</TableCell>
            <TableCell align="right" sx={{ width: 140 }}>Tax Excluded</TableCell>
            <TableCell align="right" sx={{ width: 100 }}>Tax</TableCell>
            <TableCell align="right" sx={{ width: 140 }}>Total</TableCell>
            <TableCell align="right" sx={{ width: 120 }}>Amount Due</TableCell>
            <TableCell sx={{ width: 180 }}>Invoice Currency</TableCell>
            <TableCell sx={{ width: 120 }}>Status</TableCell>
            <TableCell sx={{ width: 100 }}>Sent</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow key={idx} hover>
              <TableCell>
                <Checkbox
                  checked={row.checked}
                  onChange={() => handleCheckboxChange(idx)}
                />
              </TableCell>
              <TableCell>{row.number}</TableCell>
              <TableCell>{row.customer}</TableCell>
              <TableCell>{row.invoiceDate}</TableCell>
              <TableCell>{row.accountingDate}</TableCell>
              <TableCell sx={{ color: 'red' }}>{row.dueDate}</TableCell>
              <TableCell>{row.sourceDoc}</TableCell>
              <TableCell>{row.reference}</TableCell>
              <TableCell>{row.salesperson}</TableCell>
              <TableCell>{row.salesTeam}</TableCell>
              <TableCell>
                <LuClock9 />
              </TableCell>
              <TableCell>{row.company}</TableCell>
              <TableCell align="right">{row.taxExcluded}</TableCell>
              <TableCell align="right">{row.tax}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
              <TableCell align="right">{row.amountDue}</TableCell>
              <TableCell>{row.invoiceCurrency}</TableCell>
              <TableCell>
                <Chip
                label={row.status}
                color={getStatusColor(row.status).color}
                size="small"
                variant="outlined"
                sx={{ backgroundColor: getStatusColor(row.status).backgroundColor }}
              />
              </TableCell>
              <TableCell>
                <Chip
                  label={row.sent}
                  color={getSentColor(row.sent)}
                  size="small"
                  variant="outlined"
                /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InvoicesTable;
