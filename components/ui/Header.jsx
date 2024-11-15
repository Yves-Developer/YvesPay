/** @format */

const Header = ({ title, keytext }) => {
  return (
    <div className="w-full flex justify-center py-5">
      <h1 className="text-4xl md:text-5xl text-center font-bold leading-tight tracking-wide">
        {title}
        <span className="text-primary">{keytext}</span>
      </h1>
    </div>
  );
};

export default Header;
