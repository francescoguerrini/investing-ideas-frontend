import axios from "axios";

// Funzione fetcher per ottenere i dati dell'azienda
export const fetchCompanyData = async (ticker, updateCompanyData) => {
  try {
    const response = await axios.get(`http://localhost:8000/company/${ticker}`);
    console.log("TICKER:", ticker);
    if (response.data) {
      updateCompanyData(response.data);
      return response.data;
    }
  } catch (error) {
    console.error("Errore nella richiesta:", error);
    throw new Error("Errore nel recupero dei dati");
  }
};
