import React, { createContext, useState, useContext } from "react";

// 1. Crea il context
const CompanyDataContext = createContext();

// 2. Crea il provider che conterrà lo stato e fornirà i dati agli altri componenti
export const CompanyDataProvider = ({ children }) => {
  const [companyData, setCompanyData] = useState(null); // Inizializza a null

  // 3. Funzione per aggiornare i dati dell'azienda
  const updateCompanyData = (newData) => {
    setCompanyData(newData);
  };

  return (
    <CompanyDataContext.Provider value={{ companyData, updateCompanyData }}>
      {children}
    </CompanyDataContext.Provider>
  );
};

// 4. Crea un hook personalizzato per utilizzare facilmente i dati
export const useCompanyData = () => {
  const context = useContext(CompanyDataContext);
  if (!context) {
    throw new Error("useCompanyData must be used within a CompanyDataProvider");
  }
  return context;
};
