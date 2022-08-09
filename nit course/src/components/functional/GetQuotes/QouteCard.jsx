const QuoteCard = (props) => {
  const { content, author } = props;

  return (
    <div
      style={{
        width: 400,
        minHeight: 50,
        border: "2px solid black",
        padding: 10,
      }}
    >
      <p>{content}</p>
      <p style={{ textAlign: "right" }}>By: {author}</p>
    </div>
  );
};

export default QuoteCard;
