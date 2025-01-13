import { useEffect } from "react";
import { useCompanyData } from "../../context/CompanyDataContext";

const HeroContent = () => {
  const { companyData, updateCompanyData } = useCompanyData();

  useEffect(() => {
    // Dati di esempio (puoi modificarli o farli venire da un'API)
    const initialData = {
      ticker: "MSTR",
      name: "MicroStrategy Incorporated",
      current_price: 331.7,
      market_cap: 81524563968,
      pe_ratio: "-",
      dividend_yield: "-",
      industry: "Software - Application",
      sector: "Technology",
      performance: "342.18%",
      chart_link: "https://finance.yahoo.com/chart/MSTR",
    };

    // Aggiorna i dati del contesto solo una volta
    updateCompanyData(initialData);
  }, []); // Il dependency array garantisce che l'effetto venga eseguito una sola volta

  if (!companyData) {
    return <div>Caricamento...</div>; // Visualizza un messaggio di caricamento finché i dati non sono pronti
  }

  return (
    <div className="relative h-full flex flex-col bg-white">
      <div className="flex flex-col sticky top-0 md:top-10 gap-3 md:gap-8 px-4 rounded-lg shadow-lg md:border-t">
        <div className="text-center text-2xl md:text-4xl font-bold px-1 md:px-4 py-4 md:py-10 font-inter border-b">
          {companyData.name}
        </div>

        <div className="flex flex-col gap-2 md:gap-4">
          <div className="w-full flex">
            <div className="w-full justify-start">
              <p>Prezzo </p>
              <strong className="md:text-lg">
                {companyData.current_price} USD
              </strong>
            </div>
            <div className="w-full justify-start">
              <p>Performance 2024 </p>
              <strong
                className={`md:text-lg ${
                  companyData.performance.startsWith("-")
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {companyData.performance.startsWith("-")
                  ? companyData.performance
                  : `+${companyData.performance}`}
              </strong>
            </div>
          </div>
          <div className="w-full flex">
            <div className="w-full justify-start">
              <p>Comparto </p>
              <strong className="md:text-lg">{companyData.industry}</strong>
            </div>
            <div className="w-full justify-start">
              <p>Market Cap </p>
              <strong className="md:text-lg">
                {companyData.market_cap.toLocaleString()} USD
              </strong>
            </div>
          </div>

          <div className="w-full flex">
            <div className="w-full justify-start">
              <p>Dividendi </p>
              <strong className="md:text-lg">
                {companyData.dividend_yield}
              </strong>
            </div>
            <div className="w-full justify-start">
              <p>P/E Ratio </p>
              <strong className="md:text-lg">{companyData.pe_ratio}</strong>
            </div>
          </div>
        </div>

        <div className="border-t px-2 pt-4 md:pt-8 pb-4 w-full flex">
          <div className="w-1/2 justify-start">
            <p className="">
              Ticker
              <span className="text-xl font-semibold pl-4">
                {companyData.ticker}
              </span>
            </p>
          </div>
          <div className="bg-white text-amber-500 font-semibold rounded-md p-2 cursor-pointer hover:bg-amber-500 hover:text-white border border-amber-500">
            <a
              href={companyData.chart_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Vedi Grafico
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
