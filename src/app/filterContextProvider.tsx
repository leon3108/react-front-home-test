'use client';

import React, { createContext, useState } from 'react';

interface FilterContextType {
  filter: string[];
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

// Fournisseur du contexte
const FilterContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [filter, setFilter] = useState<string[]>([]);

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterContextProvider };
