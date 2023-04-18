import { createContext, useContext, useState } from 'react';

interface State {
  repos: Repo[];
}

interface Repo {
  name: string;
  html_url: string;
  description: string;
}

interface Context {
  state: State;
  setState: (state: State) => void;
}

export const AppContext = createContext<Context>({
  state: { repos: [] },
  setState: () => {},
});

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<State>({ repos: [] });

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};
