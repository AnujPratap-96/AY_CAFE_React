import { useSelector } from "react-redux"; // Import useSelector

export default function Loader() {
  const theme = useSelector((store) => store.sidebar.theme); // Access theme from Redux

  return (
    <div className="flex items-center justify-center">
      <div className="loader"></div>
      <style jsx>{`
        .loader {
          border: 4px solid rgba(255, 165, 0, 0.3); /* Light orange */
          border-top: 4px solid ${theme.textColor}; /* Use theme's text color for the spinner */
          border-radius: 50%;
          width: 24px;
          height: 24px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
