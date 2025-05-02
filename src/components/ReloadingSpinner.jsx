// const LoadingSpinner = () => {
//   return (
//     <div className="flex justify-center items-center py-12">
//       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-300"></div>
//     </div>
//   );
// };

// export default LoadingSpinner;
const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-2 border-green-400 rounded-full animate-ping opacity-75"></div>
        <div
          className="absolute inset-0 border-2 border-green-400 rounded-full animate-ping opacity-75"
          style={{ animationDelay: "0.3s" }}
        ></div>
        <div
          className="absolute inset-0 border-2 border-green-400 rounded-full animate-ping opacity-75"
          style={{ animationDelay: "0.6s" }}
        ></div>
      </div>
    </div>
  );
};
export default LoadingSpinner;
