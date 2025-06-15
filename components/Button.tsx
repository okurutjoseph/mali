interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ children, onClick, className = '', type = 'button' }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold px-6 py-2 rounded-full transition shadow-lg hover:shadow-xl ${className}`}
    >
      {children}
    </button>
  );
};

export default Button; 