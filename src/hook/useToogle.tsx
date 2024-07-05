import {useState, useCallback} from 'react';

type ToggleHook = [boolean, () => void];

export const useToggle = (initialState = false): ToggleHook => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => setState(pre => !pre), []);

  return [state, toggle];
};
