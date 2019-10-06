import React, { useCallback, useState } from 'react';
import { Prompt, useHistory, useLocation } from 'react-router-dom';

const NavigationPrompt = ({ children, when }) => {
  const location = useLocation();
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const [pathname, setPathname] = useState(location.pathname);

  const closeDialog = () => setOpen(false);
  const prompt = useCallback((nextLocation) => {
    setOpen(true);

    setPathname(nextLocation.pathname);

    return open;
  }, [open]);
  const navigate = useCallback(() => {
    setOpen(false);

    history.push(pathname);
  }, [history, pathname]);

  return (
    <>
      <Prompt when={when} message={prompt} />
      {children({ navigate, open, closeDialog })}
    </>
  );
};

export default NavigationPrompt;
