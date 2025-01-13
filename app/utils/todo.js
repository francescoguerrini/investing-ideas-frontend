// -creare interfaccia grafica con dati mock
// -----dividere categorie investimento e news
// -aggiungere api yahoo finance

const ITEMS = [
  {
    name: "materie_prime",
    title: "Materie Prime",
    tickers: [
      { ticker: "XME", name: "SPDR S&P Metals and Mining ETF" },
      { ticker: "FCX", name: "Freeport-McMoRan Inc." },
      { ticker: "VALE", name: "Vale S.A." },
      { ticker: "BHP", name: "BHP Group" },
      { ticker: "RIO", name: "Rio Tinto Group" },
      { ticker: "NEM", name: "Newmont Corporation" },
      { ticker: "SCCO", name: "Southern Copper Corporation" },
      { ticker: "MT", name: "ArcelorMittal" },
      { ticker: "STLD", name: "Steel Dynamics, Inc." },
      { ticker: "CLF", name: "Cleveland-Cliffs Inc." },
    ],
    description:
      "Base della produzione globale, le materie prime offrono protezione dall’inflazione e diversificazione. Comprendono minerali e risorse naturali, influenzati da trend macroeconomici.",
  },
  {
    name: "energia",
    title: "Energia",
    tickers: [
      { ticker: "XOM", name: "Exxon Mobil Corporation" },
      { ticker: "CVX", name: "Chevron Corporation" },
      { ticker: "BP", name: "BP plc" },
      { ticker: "TOT", name: "TotalEnergies" },
      { ticker: "SLB", name: "Schlumberger Limited" },
      { ticker: "EOG", name: "EOG Resources, Inc." },
      { ticker: "COP", name: "ConocoPhillips" },
      { ticker: "PXD", name: "Pioneer Natural Resources" },
      { ticker: "MRO", name: "Marathon Oil Corporation" },
      { ticker: "OXY", name: "Occidental Petroleum" },
      { ticker: "SU", name: "Suncor Energy" },
    ],
    description:
      "L’energia bilancia fonti tradizionali e rinnovabili, trainata dalla crescente domanda globale. Include aziende leader nella transizione energetica e nell’innovazione sostenibile.",
  },
  {
    name: "tecnologia",
    title: "Tecnologia",
    tickers: [
      { ticker: "AAPL", name: "Apple Inc." },
      { ticker: "MSFT", name: "Microsoft Corporation" },
      { ticker: "GOOGL", name: "Alphabet Inc." },
      { ticker: "NVDA", name: "NVIDIA Corporation" },
      { ticker: "AMD", name: "Advanced Micro Devices, Inc." },
      { ticker: "INTC", name: "Intel Corporation" },
      { ticker: "CRM", name: "Salesforce, Inc." },
      { ticker: "TSLA", name: "Tesla, Inc." },
      { ticker: "INTU", name: "Intuit Inc." },
      { ticker: "MU", name: "Micron Technology, Inc." },
      { ticker: "ORCL", name: "Oracle Corporation" },
    ],
    description:
      "Motore dell’innovazione globale, il settore tecnologico comprende software, hardware e digitalizzazione. Aziende di punta guidano il futuro con soluzioni scalabili e rivoluzionarie.",
  },
  {
    name: "comunicazioni",
    title: "Comunicazioni",
    tickers: [
      { ticker: "VZ", name: "Verizon Communications Inc." },
      { ticker: "T", name: "AT&T Inc." },
      { ticker: "TMUS", name: "T-Mobile US, Inc." },
      { ticker: "CHTR", name: "Charter Communications, Inc." },
      { ticker: "DISH", name: "DISH Network Corporation" },
      { ticker: "LUMN", name: "Lumen Technologies, Inc." },
      { ticker: "NTTYY", name: "NTT Corporation" },
      { ticker: "VOD", name: "Vodafone Group Plc" },
      { ticker: "STT", name: "State Street Corporation" },
      { ticker: "AMT", name: "American Tower Corporation" },
    ],
    description:
      "Cruciali per la società digitale, le telecomunicazioni connettono il mondo garantiscono una base stabile e in crescita per le economie moderne.",
  },
  {
    name: "ai",
    title: "A.I.",
    tickers: [
      { ticker: "GOOGL", name: "Alphabet Inc." },
      { ticker: "MSFT", name: "Microsoft Corporation" },
      { ticker: "IBM", name: "International Business Machines Corporation" },
      { ticker: "AI", name: "C3.ai, Inc." },
      { ticker: "TSLA", name: "Tesla, Inc." },
      { ticker: "BIDU", name: "Baidu, Inc." },
      { ticker: "PLTR", name: "Palantir Technologies Inc." },
      { ticker: "NUAN", name: "Nuance Communications, Inc." },
      { ticker: "SHOP", name: "Shopify Inc." },
      { ticker: "CRWD", name: "CrowdStrike Holdings, Inc." },
      { ticker: "NTDOY", name: "Nintendo Co., Ltd." },
    ],
    description:
      "L’AI è il cuore della trasformazione tecnologica, e sta rivoluzionando industrie come la sanità e la finanza. Le aziende di questo settore creano soluzioni che aumentano produttività e automazione.",
  },
  {
    name: "salute",
    title: "Salute",
    tickers: [
      { ticker: "PFE", name: "Pfizer Inc." },
      { ticker: "JNJ", name: "Johnson & Johnson" },
      { ticker: "MRK", name: "Merck & Co., Inc." },
      { ticker: "ABBV", name: "AbbVie Inc." },
      { ticker: "UNH", name: "UnitedHealth Group Incorporated" },
      { ticker: "BMY", name: "Bristol-Myers Squibb Company" },
      { ticker: "LLY", name: "Eli Lilly and Company" },
      { ticker: "GSK", name: "GlaxoSmithKline plc" },
      { ticker: "AMGN", name: "Amgen Inc." },
      { ticker: "NVAX", name: "Novavax, Inc." },
    ],
    description:
      "Driver chiave dell'innovazione, il settore sanitario beneficia dell'invecchiamento della popolazione e dell'aumento della spesa sanitaria. Aziende farmaceutiche e biotecnologiche offrono resilienza e opportunità di crescita.",
  },
  {
    name: "real_estate",
    title: "Real Estate",
    tickers: [
      { ticker: "PLD", name: "Prologis, Inc." },
      { ticker: "PSA", name: "Public Storage" },
      { ticker: "AMT", name: "American Tower Corporation" },
      { ticker: "SPG", name: "Simon Property Group, Inc." },
      { ticker: "AVB", name: "AvalonBay Communities, Inc." },
      { ticker: "EQIX", name: "Equinix, Inc." },
      { ticker: "DLR", name: "Digital Realty Trust, Inc." },
      { ticker: "CCI", name: "Crown Castle International Corp." },
      { ticker: "IRM", name: "Iron Mountain Inc." },
      { ticker: "O", name: "Realty Income Corporation" },
      { ticker: "ARE", name: "Alexandria Real Estate Equities, Inc." },
    ],
    description:
      "Gli investimenti immobiliari combinano stabilità e crescita, supportati dall'urbanizzazione e dai cambiamenti demografici. Include proprietà residenziali e commerciali, fornendo protezione dall'inflazione e rendimenti stabili.",
  },
  {
    name: "finanza",
    title: "Finanza",
    tickers: [
      { ticker: "JPM", name: "JPMorgan Chase & Co." },
      { ticker: "BAC", name: "Bank of America Corporation" },
      { ticker: "GS", name: "Goldman Sachs Group, Inc." },
      { ticker: "C", name: "Citigroup Inc." },
      { ticker: "WFC", name: "Wells Fargo & Company" },
      { ticker: "MS", name: "Morgan Stanley" },
      { ticker: "AXP", name: "American Express Company" },
      { ticker: "V", name: "Visa Inc." },
      { ticker: "MA", name: "Mastercard Incorporated" },
      { ticker: "PYPL", name: "PayPal Holdings, Inc." },
      { ticker: "SCHW", name: "The Charles Schwab Corporation" },
    ],
    description:
      "Punto cardine dell'economia globale, il settore finanziario comprende banche, assicurazioni e gestori patrimoniali, garantendo stabilità e crescita grazie alla sua centralità nell'allocazione del capitale.",
  },
  {
    name: "consumi_discrezionali",
    title: "Consumi Discrezionali",
    tickers: [
      { ticker: "NKE", name: "Nike, Inc." },
      { ticker: "HD", name: "The Home Depot, Inc." },
      { ticker: "MCD", name: "McDonald's Corporation" },
      { ticker: "SBUX", name: "Starbucks Corporation" },
      { ticker: "LVMUY", name: "LVMH Moët Hennessy Louis Vuitton" },
      { ticker: "TGT", name: "Target Corporation" },
      { ticker: "LOW", name: "Lowe's Companies, Inc." },
      { ticker: "ETSY", name: "Etsy, Inc." },
      { ticker: "DIS", name: "The Walt Disney Company" },
      { ticker: "ROST", name: "Ross Stores, Inc." },
      { ticker: "AMZN", name: "Amazon.com, Inc." },
    ],
    description:
      "Il settore riflette i cambiamenti nei gusti dei consumatori e la crescita economica, includendo marchi leader nel lusso, retail ed e-commerce. Un investimento in questo ambito punta sull'innovazione e sul potere d'acquisto crescente.",
  },
  {
    name: "blockchain",
    title: "Blockchain",
    tickers: [
      { ticker: "BTC", name: "Bitcoin" },
      { ticker: "ETH", name: "Ethereum" },
      { ticker: "MSTR", name: "MicroStrategy Incorporated" },
      { ticker: "COIN", name: "Coinbase Global, Inc." },
      { ticker: "MARA", name: "Marathon Digital Holdings, Inc." },
      { ticker: "RIOT", name: "Riot Platforms, Inc." },
      { ticker: "BTG", name: "Bitgold" },
      { ticker: "HIVE", name: "HIVE Blockchain Technologies Ltd." },
      { ticker: "BITF", name: "Bitfarms Ltd." },
      { ticker: "GENK", name: "Genkcoin" },
    ],
    description:
      "La tecnologia blockchain sta rivoluzionando transazioni e gestione dei dati con sicurezza e trasparenza. Questa categoria include criptovalute e infrastrutture digitali, offrendo opportunità in un settore destinato a trasformare l'economia globale.",
  },
];

export default ITEMS;
