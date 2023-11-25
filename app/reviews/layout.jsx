const ReviewsLayout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ border: "1px solid #ccc" }}>[reviews menubar]</div>
      <div>{children}</div>
    </div>
  );
};
export default ReviewsLayout;
