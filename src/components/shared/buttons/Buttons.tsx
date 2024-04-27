import { ButtonProps } from "../../../types/Interface";

export const ButtonBg: React.FC<ButtonProps> = ({ children, disabled, onClick, className, ...rest }) => {
  return (
    <>
      <button
        className={`w-full ${disabled ? "" : ""
          } rounded-2xl items-center justify-center inline-flex text-center linear-gradient text-white text-sm font-medium leading-normal ${className}`}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};

// export const ButtonSm = ({ children, disable, handleClick, ...rest }) => {
//   return (
//     <>
//       <button
//         className={`w-full ${
//           disable ? "bg-zinc-500" : "bg-lime-700"
//         } px-6 py-2 rounded-md items-center justify-center inline-flex text-center text-white text-sm font-medium leading-normal`}
//         onClick={handleClick}
//         disabled={disable}
//         {...rest}
//       >
//         {children}
//       </button>
//     </>
//   );
// };

// export const ButtonBgLight = ({ children, disable, handleClick, ...rest }) => {
//   return (
//     <>
//       <button
//         className={`w-full ${
//           disable ? "bg-zinc-500" : "bg-green-100"
//         } px-6 py-3  rounded-md items-center justify-center inline-flex text-center text-lime-700 text-sm font-medium leading-normal`}
//         onClick={handleClick}
//         disabled={disable}
//         {...rest}
//       >
//         {children}
//       </button>
//     </>
//   );
// };

// export const ButtonOutline = ({ children, disable, handleClick, ...rest }) => {
//   return (
//     <>
//       <button
//         className={`w-full ${
//           disable ? "bg-zinc-500" : "bg-transparent"
//         } px-6 py-3 border border-lime-700 rounded-md items-center justify-center inline-flex text-center text-lime-700 text-sm font-medium leading-normal`}
//         onClick={handleClick}
//         disabled={disable}
//         {...rest}
//       >
//         {children}
//       </button>
//     </>
//   );
// };
