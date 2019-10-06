import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';

import { NavigationPrompt } from '../components';

const initialValue = '';

const Profile = () => {
  const [value, setValue] = useState(initialValue);

  const dirty = value !== initialValue;

  const handleChange = (event) => setValue(event.target.value);

  return (
    <div>
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
      <NavigationPrompt when={dirty}>
        {({ open, closeDialog, navigate }) => (
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
        )}
      </NavigationPrompt>
    </div>
  );
};

export default Profile;