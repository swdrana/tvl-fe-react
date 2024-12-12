// import "./Dropdown.css";

// export default function Dropdown() {
//   return (
//     <div className="absolute mt-2 w-80 bg-white shadow-lg rounded-lg p-4 grid grid-cols-1 gap-4">
//     {menuItems.map((item, index) => (
//       <button
//         key={index}
//         onClick={() => onItemClick(item.name)}
//         className="flex items-center space-x-4 w-full p-3 rounded-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       >
//         <img
//           src={item.icon}
//           alt={`${item.name} Icon`}
//           className="w-8 h-8"
//         />
//         <div className="text-left">
//           <p className="font-semibold text-sm text-blue-600">
//             {item.name}
//           </p>
//           <p className="text-gray-500 text-xs">{item.description}</p>
//         </div>
//       </button>
//     ))}
//   </div>
//   );
// }
