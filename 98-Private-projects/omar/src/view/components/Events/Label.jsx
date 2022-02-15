const Label = ({ content }) => {
  return (
    <div
      style={{
        width: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {content}
    </div>
  );
};
export default Label;
