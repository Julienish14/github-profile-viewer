// const LoadingSpinner = () => {
//   return (
//     <div className="flex justify-center items-center py-12">
//       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-300"></div>
//     </div>
//   );
// };

// export default LoadingSpinner;

//Loading spinner Creative One

// const LoadingSpinner = () => {
//   return (
//     <div className="flex justify-center items-center py-12">
//       <div className="relative w-12 h-12">
//         <div className="absolute inset-0 border-2 border-blue-900 rounded-full animate-ping opacity-75"></div>
//         <div
//           className="absolute inset-0 border-2 border-blue-900 rounded-full animate-ping opacity-75"
//           style={{ animationDelay: "0.3s" }}
//         ></div>
//         <div
//           className="absolute inset-0 border-2 border-blue-900 rounded-full animate-ping opacity-75"
//           style={{ animationDelay: "0.6s" }}
//         ></div>
//       </div>
//     </div>
//   );
// };
// export default LoadingSpinner;

//Cooler and cooler one loading spinner With LOADING LETTERS...

// const LoadingSpinner = () => {
  const letters = ["L", "O", "A", "D", "I", "N", "G"];

  return (
    <div className="flex justify-center items-center py-12 space-x-1">
      {letters.map((letter, i) => (
        <span
          key={i}
          className="text-gray-600 font-bold animate-bounce"
          style={{
            animationDelay: `${i * 0.1}s`,
            animationDuration: "1s",
          }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};
export default LoadingSpinner;

// Dot Dot Dots loading spinner...
// const LoadingSpinner = () => {
//   return (
//     <div className="flex justify-center items-center py-12 space-x-2">
//       {[0, 1, 2].map((i) => (
//         <div
//           key={i}
//           className="w-3 h-3 bg-green-400 rounded-full animate-bounce"
//           style={{ animationDelay: `${i * 0.1}s` }}
//         />
//       ))}
//     </div>
//   );
// };

// export default LoadingSpinner;
