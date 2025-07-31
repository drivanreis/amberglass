interface LogoProps {
  variant?: 'light' | 'dark';
}

const Logo = ({ variant = 'dark' }: LogoProps) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-gray-900';
  const accentColor = 'text-amber-500';
  
  return (
    <div className="flex items-center">
      <div className="relative mr-1">
        <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-md shadow-lg transform rotate-12 absolute"></div>
        <div className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-md border-2 border-amber-400 shadow-inner relative flex items-center justify-center">
          <span className="font-bold text-lg text-amber-500">A</span>
        </div>
      </div>
      <div className="ml-2">
        <h1 className={`text-xl font-bold ${textColor}`}>
          <span className={accentColor}>AmberGlass</span>
        </h1>
        <p className={`text-xs -mt-1 ${variant === 'light' ? 'text-gray-300' : 'text-gray-500'}`}>Soluções em Vidro</p>
      </div>
    </div>
  );
};

export default Logo;