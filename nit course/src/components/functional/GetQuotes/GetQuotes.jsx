import { useEffect, useState } from "react";
import { quoteApi } from "../../../api/api";
import QuoteCard from "./QouteCard";

const GetQuotes = () => {
  const [quotes, setQuotes] = useState([]);

  const fetchQuotes = async () => {
    try {
      const result = await quoteApi.get(`/quotes`);
      const data = result.data;
      setQuotes(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div>
      {quotes.map((quote, index) => {
        return (
          <QuoteCard
            author={quote.author}
            content={quote.content}
            key={index}
          />
        );
      })}
    </div>
  );
};
export default GetQuotes;
