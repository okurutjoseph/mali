interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const PrimaryButton = ({ children, onClick, className = '', type = 'button' }: PrimaryButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative overflow-hidden font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl ${className} group`}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-400 transition-transform duration-300 ease-out transform translate-x-0 group-hover:-translate-x-full"></span>
      <span className="absolute inset-0 bg-gradient-to-r from-[#aa2b4c] to-[#251146] transition-transform duration-300 ease-out transform translate-x-full group-hover:translate-x-0"></span>
      <span className="relative text-white z-10">{children}</span>
    </button>
  );
};

export default PrimaryButton; 