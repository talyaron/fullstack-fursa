const EventWrapper = ({ children }) => {
  return (
    <div
      style={{
        width: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        backgroundColor: "blueviolet",
        borderRadius: "5px",
        margin: "5px",
      }}
    >
      {children}
    </div>
  );
};
export default EventWrapper;
