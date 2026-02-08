type PaginationButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode; // <--- Ова е местото за children
  };

const PaginationButton = ({children, ...props}:PaginationButtonProps) =>{
   return(
    <button {...props} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
>
{children}
    </button>
   )
}


export default PaginationButton