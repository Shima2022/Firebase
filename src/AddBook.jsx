import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function AddBook(props) {
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState({ title: '', author: '', isbn: '', year: '', price: '' });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    props.addBook(book);
    console.log('Book added. Refreshing items...');
    setTimeout(() => {
      fetchItems();
    }, 500);
    handleClose();
  };

  const inputChanged = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Add book
      </Button>
      <Dialog open={open}>
        <DialogTitle>New book</DialogTitle>
        <DialogContent>
          <TextField name="title" variant="outlined" value={book.title} onChange={inputChanged} margin="dense" label="Title" fullWidth
          />
          <TextField
            name="author" variant="outlined" value={book.author} onChange={inputChanged} margin="dense" label="Title" fullWidth
          />
          <TextField
            name="isbn" variant="outlined"  value={book.isbn} onChange={inputChanged} margin="dense" label="ISBN" fullWidth
          />
          <TextField
            name="year" variant="outlined" value={book.year} onChange={inputChanged} margin="dense" label="Year" fullWidth
          />
          <TextField
            name="price" variant="outlined"  value={book.price} onChange={inputChanged} margin="dense" label="Price (€)" fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>Cancel</Button>
          <Button color="primary" onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddBook;