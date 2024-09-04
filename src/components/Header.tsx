import mainLogo from '../assets/logo.png';

export const Header: React.FC = () => {
  return (
    <header className="px-8 py-4 bg-white shadow-md">
      <div className="container flex items-center justify-between mx-auto">
        <img
          src={mainLogo} 
          alt="Logo"
          className="h-10" 
        />
      </div>
    </header>
  );
};
