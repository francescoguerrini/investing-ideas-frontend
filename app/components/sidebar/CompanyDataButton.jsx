import { useState } from "react";
import { Button, CircularProgress } from "@nextui-org/react";
import { fetchCompanyData } from "../../utils/fetcher"; // Assicurati che il percorso sia corretto
import { useCompanyData } from "../../context/CompanyDataContext"; // Importa il contesto

const CompanyDataButton = ({ ticker }) => {
  const [loading, setLoading] = useState(false); // Stato per gestire il caricamento
  const { updateCompanyData } = useCompanyData(); // Ottieni il metodo per aggiornare i dati dal contesto

  const handleClick = async () => {
    setLoading(true); // Imposta lo stato a "loading" per indicare che la richiesta è in corso
    try {
      const data = await fetchCompanyData(ticker, updateCompanyData); // Passiamo il ticker e l'aggiornamento del contesto
      console.log("Dati ricevuti per il ticker:", ticker);
      console.log(data); // Stampa i dati nella console
    } catch (error) {
      console.error("Errore nel recupero dei dati:", error); // Gestione degli errori
    } finally {
      setLoading(false); // Ripristina lo stato di loading
    }
  };

  return (
    <Button
      color="success"
      size="sm"
      className="w-16 h-8 text-white font-bold"
      onPress={handleClick}
      disabled={loading}
    >
      {loading ? (
        <CircularProgress aria-label="Loading..." size="sm" />
      ) : (
        "Dettagli"
      )}
    </Button>
  );
};

export default CompanyDataButton;
