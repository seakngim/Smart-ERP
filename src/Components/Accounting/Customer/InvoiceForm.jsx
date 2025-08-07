import {
    Box,
    Typography,
    TextField,
    Tabs,
    Tab,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from '@mui/material';
import { useState } from 'react';

const InvoiceForm = () => {
    const [tab, setTab] = useState(0);
    const [formData, setFormData] = useState({ cost: '' });

    const handleChange = (field) => (event) => {
        setFormData({ ...formData, [field]: event.target.value });
    };

    const renderLabel = (text) => (
        <label className="text-sm font-medium flex items-center w-[240px] xl:w-[200px] mb-1">
            {text}
            <sup className="text-[#1082B9] text-[0.7em] ml-1">?</sup>
        </label>
    );

    const renderLabelNQ = (text) => (
        <label className="text-sm font-medium flex items-center mb-1">
            {text}
        </label>
    );

    return (
        <section className="grid grid-cols-1 lg:grid-cols-3  mx-5 my-2.5">
            <div className="col-span-2 flex flex-col gap-y-2.5">
                {/* Top Actions */}
                <div className="flex items-center justify-between">
                    <button className="bg-primary px-3 py-1.5 rounded-md text-white hover:bg-primary/90">Confirm</button>
                    <div className="flex gap-2">
                        <button className="border-primary text-black px-3 py-1.5 rounded-md bg-primary">Draft</button>
                        <button className="bg-gray-200 text-black px-3 py-1.5 rounded-md hover:bg-gray-300">Post</button>
                    </div>
                </div>

                {/* Invoice Summary */}
                <section className='shadow-md border rounded-md'>
                    <div className='grid grid-cols-2 gap-x-8 p-4'>
                        <div className="flex flex-col items-start justify-between col-span-2">
                            {renderLabel('Customer Invoice')}
                            <TextField
                                variant="standard"
                                size="small"
                                value={formData.customerinvoice}
                                onChange={handleChange('Customer Invoice')}
                                margin="dense"
                                fullWidth
                            />
                        </div>
                        <div className="flex items-center justify-between gap-x-4">
                            {renderLabel('Invoice Type')}
                            <TextField
                                variant="standard"
                                size="small"
                                value={formData.invoicetype}
                                onChange={handleChange('invoicetype')}
                                margin="dense"
                                fullWidth
                            />
                        </div>
                        <div className="flex items-center justify-between gap-x-4">
                            {renderLabel('Invoice Date')}
                            <TextField
                                variant="standard"
                                size="small"
                                value={formData.invoicedate}
                                onChange={handleChange('invoicedate')}
                                margin="dense"
                                fullWidth
                            />
                        </div>
                        <div className="flex items-center justify-between gap-x-4">
                            {renderLabel('Customer')}
                            <TextField
                                variant="standard"
                                size="small"
                                value={formData.customer}
                                onChange={handleChange('customer')}
                                margin="dense"
                                fullWidth
                            />
                        </div>
                        <div className="flex items-center justify-between gap-x-4">
                            {renderLabel('due Date')}
                            <TextField
                                variant="standard"
                                size="small"
                                value={formData.duedate}
                                onChange={handleChange('duedate')}
                                margin="dense"
                                fullWidth
                            />
                            {renderLabelNQ('or')}
                            <TextField
                                variant="standard"
                                size="small"
                                value={formData.paymentterm}
                                onChange={handleChange('paymentterm')}
                                margin="dense"
                                fullWidth
                            />
                        </div>
                        <div className="flex items-center justify-between gap-x-4">
                            {renderLabel('Warehouse')}
                            <TextField
                                variant="standard"
                                size="small"
                                value={formData.warehouse}
                                onChange={handleChange('warehouse')}
                                margin="dense"
                                fullWidth
                            />
                        </div>
                        <div className="flex items-center justify-between gap-x-4">
                            {renderLabel('Journal')}
                            <TextField
                                variant="standard"
                                size="small"
                                value={formData.journal}
                                onChange={handleChange('journal')}
                                margin="dense"
                                fullWidth
                            />
                            {renderLabelNQ('in')}
                            <TextField
                                variant="standard"
                                size="small"
                                value={formData.currency}
                                onChange={handleChange('currency')}
                                margin="dense"
                                fullWidth
                            />
                        </div>
                        <div className="flex items-center justify-between gap-x-4">
                            {renderLabel('Delivery Address')}
                            <TextField
                                variant="standard"
                                size="small"
                                value={formData.deliveryaddress}
                                onChange={handleChange('deliveryaddress')}
                                margin="dense"
                                fullWidth
                            />
                        </div>
                    </div>



                    {/* Tabs */}
                    <Tabs className='border-y px-4' value={tab} onChange={(e, val) => setTab(val)}>
                        <Tab label="Invoice Line" sx={{ textTransform: 'none' }} />
                        <Tab label="Journal Items" sx={{ textTransform: 'none' }} />
                        <Tab label="Other Info" sx={{ textTransform: 'none' }} />
                    </Tabs>

                    {/* Line Items Table */}
                    {tab === 0 && (
                        <div sx={{ my: 2, maxHeight: 400 }}>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Product</TableCell>
                                        <TableCell>Account</TableCell>
                                        <TableCell>Qty</TableCell>
                                        <TableCell>Unit</TableCell>
                                        <TableCell>Price</TableCell>
                                        <TableCell>VAT</TableCell>
                                        <TableCell>Grand Total</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <Typography>
                                                Apple (copy)
                                                <br />
                                                <small style={{ color: '#888' }}>best for breakfast</small>
                                            </Typography>
                                        </TableCell>
                                        <TableCell>400000 Product Sales</TableCell>
                                        <TableCell>5</TableCell>
                                        <TableCell>Unit</TableCell>
                                        <TableCell>1.00</TableCell>
                                        <TableCell>15%</TableCell>
                                        <TableCell>5.00</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    )}
                    {/* Line Items Table */}
                    {tab === 1 && (
                        <div>
                            <Table stickyHeader size="small" sx={{ tableLayout: "fixed" }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ width: 120 }}>Account</TableCell>
                                        <TableCell>Label</TableCell>
                                        <TableCell>Debit</TableCell>
                                        <TableCell>Credit</TableCell>
                                        <TableCell>Tax Grids</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    )}
                    {/* Line Items Table */}
                    {tab === 2 && (
                        <div sx={{ my: 2, maxHeight: 400 }} className="p-4">
                            <div className="flex items-center justify-between gap-x-4">
                                {renderLabel('Branch')}
                                <TextField
                                    variant="standard"
                                    size="small"
                                    value={formData.branch}
                                    onChange={handleChange('branch}')}
                                    margin="dense"
                                    fullWidth
                                />
                            </div><div className="flex items-center justify-between gap-x-4">
                                {renderLabel('Customer Reference')}
                                <TextField
                                    variant="standard"
                                    size="small"
                                    value={formData.customerreference}
                                    onChange={handleChange('customerreference')}
                                    margin="dense"
                                    fullWidth
                                />
                            </div>
                        </div>
                    )}

                    {/* Summary Footer */}
                    {/* <Grid className='col-span-2' container justifyContent="flex-end" spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Box textAlign="right">
                                <Typography>Sub Total: 6,009.00</Typography>
                                <Typography>VAT 15%: 0.75</Typography>
                                <Typography variant="h6">Grand Total: 6,009.75</Typography>
                                <Typography>Exchange Rate: 1.00</Typography>
                                <Typography>Total in Currency: 6,009.75</Typography>
                            </Box>
                        </Grid>
                    </Grid> */}
                </section>
            </div>
        </section>
    );
};

export default InvoiceForm;