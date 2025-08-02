import * as React from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Checkbox
} from '@mui/material';

import BudgetDetailDialog from './BudgetDetailDialog'; // import the popup component

function createData(name, type, cost, startdate, enddate, department, status, company, note) {
  return { name, type, cost, startdate, enddate, department, status, company, note };
}

const rows = [
  createData('Budget-FY2025', 'Profit and loss', '$ 120,000', '01/Jan/2025', '31/Dec/2025', 'IT', 'Open', 'King Mart', ''),
  createData('Budget-FY2026', 'Profit and loss', '$ 120,000', '01/Jan/2025', '31/Dec/2025', 'Finance', 'Open', 'King Mart', ''),
];

export default function CustomizedTables() {
  const [selected, setSelected] = React.useState([]);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);

  const handleSelect = (name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = [...selected, name];
    } else {
      newSelected = selected.filter((item) => item !== name);
    }

    setSelected(newSelected);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setDialogOpen(true);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table className="min-w-full">
          <TableHead>
            <TableRow className="bg-gray-100">
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  indeterminate={
                    selected.length > 0 && selected.length < rows.length
                  }
                  checked={rows.length > 0 && selected.length === rows.length}
                  onChange={(e) => {
                    if (e.target.checked) {
                      const allNames = rows.map((row) => row.name);
                      setSelected(allNames);
                    } else {
                      setSelected([]);
                    }
                  }}
                />
              </TableCell>
              <TableCell className="text-gray-700 font-semibold">Budget Name</TableCell>
              <TableCell className="text-gray-700 font-semibold text-right">Budget Type</TableCell>
              <TableCell className="text-gray-700 font-semibold text-right">Cost</TableCell>
              <TableCell className="text-gray-700 font-semibold text-right">Start Date</TableCell>
              <TableCell className="text-gray-700 font-semibold text-right">End Date</TableCell>
              <TableCell className="text-gray-700 font-semibold text-right">Department</TableCell>
              <TableCell className="text-gray-700 font-semibold text-right">Status</TableCell>
              <TableCell className="text-gray-700 font-semibold text-right">Company / Branch</TableCell>
              <TableCell className="text-gray-700 font-semibold text-right">Internal Note</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, idx) => {
              const isItemSelected = isSelected(row.name);
              return (
                <TableRow
                  key={row.name}
                  hover
                  onClick={() => handleRowClick(row)}
                  className={idx % 2 === 0 ? 'bg-gray-50 cursor-pointer' : 'bg-white cursor-pointer'}
                >
                  <TableCell padding="checkbox" onClick={(e) => e.stopPropagation()}>
                    <Checkbox
                      color="primary"
                      checked={isItemSelected}
                      onChange={() => handleSelect(row.name)}
                    />
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell className="text-right">{row.type}</TableCell>
                  <TableCell className="text-right">{row.cost}</TableCell>
                  <TableCell className="text-right">{row.startdate}</TableCell>
                  <TableCell className="text-right">{row.enddate}</TableCell>
                  <TableCell className="text-right">{row.department}</TableCell>
                  <TableCell className="text-right">{row.status}</TableCell>
                  <TableCell className="text-right">{row.company}</TableCell>
                  <TableCell className="text-right">{row.note}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Call your popup form component */}
      <BudgetDetailDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        data={selectedRow}
      />
    </>
  );
}
