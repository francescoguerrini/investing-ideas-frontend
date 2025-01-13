import axios from "axios";

const URL = "https://investing-ideas-backend.onrender.com/";

// Funzione fetcher per ottenere i dati dell'azienda
export const fetchCompanyData = async (ticker, updateCompanyData) => {
  try {
    const response = await axios.get(`${URL}/company/${ticker}`);
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
