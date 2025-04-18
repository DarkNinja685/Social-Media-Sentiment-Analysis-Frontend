export const Card = ({ children, className }) => {
  return (
    <div className={`shadow-lg rounded-lg p-4 ${className}`}>{children}</div>
  );
};

export const CardContent = ({ children, className }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};
