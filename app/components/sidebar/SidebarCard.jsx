"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FiChevronDown } from "react-icons/fi";
import CompanyDataButton from "./CompanyDataButton";

const SidebarCard = (props) => {
  const tickers = props.tickers;
  return (
    <div className="w-full bg-white px-3 justify-between items-center flex gap-2 drop-shadow-md border-t rounded-md">
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title={<h2 className="text-2xl font-semibold">{props.title}</h2>}
          indicator={
            <div className="text-slate-900">
              <FiChevronDown />
            </div>
          }
        >
          <div>
            <div className="text-slate-900 font-poppins pb-8">
              {props.description}
            </div>
          </div>
          <div className="flex flex-col gap-5 border-t py-6">
            {Array.isArray(tickers) &&
              tickers.map((ticker, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between px-2"
                >
                  <div className="">{ticker.name}</div>
                  <CompanyDataButton ticker={ticker.ticker} />
                </div>
              ))}
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default SidebarCard;
