import React, { useState } from 'react';
import { Prompt, useHistory, useLocation } from 'react-router-dom';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';

const Profile = () => {
  const history = useHistory();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [pathname, setPathname] = useState(location.pathname);
  const [value, setValue] = useState('');

  const dirty = value !== '';

  const closeDialog = () => setOpen(false);
  const prompt = (nextLocation) => {
    setOpen(true);

    setPathname(nextLocation.pathname);

    return open;
  };
  const navigate = () => {
    history.push(pathname);
  };
  const handleChange = (event) => setValue(event.target.value);

  return (
    <div>
      <Prompt when={dirty} message={prompt} />
      <h1>
        I am Profile.
      </h1>
      <p>
        <label htmlFor="name">
          Name:
          {' '}
          <input type="text" name="name" value={value} onChange={handleChange} />
        </label>
      </p>
      <Dialog open={open} onClose={closeDialog}>
        <DialogTitle>
          Navigation Prompt
        </DialogTitle>
        <DialogContent>
          Are you sure to leave?
        </DialogContent>
        <DialogActions>
          <Button type="button" onClick={closeDialog}>Cancel</Button>
          <Button type="button" onClick={navigate}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Profile;