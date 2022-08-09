import quotes from "./quotes.json";

const Quotes = (props) => {
  const { number = 1, author = "", length = 0 } = props;

  return (
    <div>
      {/* {quotes
        .filter((value, index) => {
          return index <= number;
        })
        .map((quote) => {
          return (
            <p>
              {quote.content} by: {quote.author}
            </p>
          );
        })} */}
      {/* {quotes
        .filter((quote) => {
          return quote.author
            .toLocaleLowerCase()
            .includes(author.toLocaleLowerCase());
        })
        .map((quote) => {
          return (
            <p>
              {quote.content} by: {quote.author}
            </p>
          );
        })} */}
      {/* {quotes
        .filter((quote) => {
          return quote.length < length;
        })
        .map((quote) => {
          return (
            <p>
              {quote.content} by: {quote.author}
            </p>
          );
        })} */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {quotes.map((quote) => {
          return (
            <div
              style={{
                width: 400,
                height: 200,
                border: "1px solid black",
                margin: 10,
              }}
            >
              <p>{quote.content}</p>
              <p>{quote.author}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Quotes;
