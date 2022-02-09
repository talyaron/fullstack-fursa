const Button = ({ title, onClickHandler }) => {
  return (
    <div
      style={{
        width: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
        borderRadius: "4px",
        cursor: "pointer",
        userSelect: "none",
      }}
      onClick={onClickHandler}
    >
      {title}
    </div>
  );
};
export default Button;
