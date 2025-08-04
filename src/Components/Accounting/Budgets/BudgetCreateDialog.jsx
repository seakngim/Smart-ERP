import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slide,
  TextField,
  MenuItem
} from '@mui/material';
import { LuX } from 'react-icons/lu';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BudgetCreateDialog({ open, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    cost: '',
    startdate: '',
    enddate: '',
    department: '',
    status: '',
    company: '',
    note: ''
  });

  // Reset form when dialog opens
  useEffect(() => {
    if (open) {
      setFormData({
        name: '',
        type: '',
        cost: '',
        startdate: '',
        enddate: '',
        department: '',
        status: '',
        company: '',
        note: ''
      });
    }
  }, [open]);

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSave = () => {
    // Optional: add validation here before saving
    if (onSave) {
      onSave(formData);
    }
    onClose();
  };

  const renderLabel = (text) => (
    <label className="text-sm font-medium flex items-center mb-1">
      {text}
      <sup className="text-[#1082B9] text-[0.7em] ml-1">?</sup>
    </label>
  );

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      TransitionComponent={Transition}
    >
      <DialogTitle className="flex items-center justify-between">
        New Budget <LuX onClick={onClose} className="cursor-pointer" />
      </DialogTitle>

      <DialogContent dividers>
        <div className="flex flex-col gap-4">
          <div>
            {renderLabel('Budget Name')}
            <TextField
              variant="standard"
              size="small"
              fullWidth
              value={formData.name}
              onChange={handleChange('name')}
              margin="dense"
              InputProps={{ className: 'text-4xl' }}
            />
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="flex items-center justify-between gap-4">
              {renderLabel('Budget Type')}
              <TextField
                select
                variant="standard"
                size="small"
                value={formData.type}
                onChange={handleChange('type')}
                margin="dense"
                fullWidth
                sx={{ maxWidth: 260 }}
              >
                <MenuItem value="Profit and loss">Profit and loss</MenuItem>
                <MenuItem value="Capital">Capital</MenuItem>
              </TextField>
            </div>

            <div className="flex items-center justify-between gap-4">
              {renderLabel('Start Date')}
              <TextField
                type="date"
                variant="standard"
                size="small"
                value={formData.startdate}
                onChange={handleChange('startdate')}
                margin="dense"
                InputLabelProps={{ shrink: true }}
                fullWidth
                sx={{ maxWidth: 260 }}
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              {renderLabel('Department')}
              <TextField
                variant="standard"
                size="small"
                value={formData.department}
                onChange={handleChange('department')}
                margin="dense"
                fullWidth
                sx={{ maxWidth: 260 }}
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              {renderLabel('End Date')}
              <TextField
                type="date"
                variant="standard"
                size="small"
                value={formData.enddate}
                onChange={handleChange('enddate')}
                margin="dense"
                InputLabelProps={{ shrink: true }}
                fullWidth
                sx={{ maxWidth: 260 }}
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              {renderLabel('Company / Branch')}
              <TextField
                variant="standard"
                size="small"
                value={formData.company}
                onChange={handleChange('company')}
                margin="dense"
                fullWidth
                sx={{ maxWidth: 260 }}
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              {renderLabel('Cost')}
              <TextField
                variant="standard"
                size="small"
                value={formData.cost}
                onChange={handleChange('cost')}
                margin="dense"
                fullWidth
                sx={{ maxWidth: 260 }}
              />
            </div>

            <div className="col-span-2">
              {renderLabel('Internal Note')}
              <TextField
                multiline
                variant="standard"
                size="small"
                value={formData.note}
                onChange={handleChange('note')}
                margin="dense"
                fullWidth
              />
            </div>
          </div>
        </div>
      </DialogContent>

      <DialogActions>
        <section className="flex gap-2 w-full justify-start px-4">
          <button
            onClick={onClose}
            className="!bg-gray-200 !text-black px-3 py-1.5 rounded-md hover:!bg-gray-300 !normal-case"
          >
            Close
          </button>

          <button onClick={handleSave} className="bg-primary px-3 py-1.5 rounded-md text-white hover:bg-primary/90">
            Create
          </button>
        </section>
      </DialogActions>
    </Dialog>
  );
}
