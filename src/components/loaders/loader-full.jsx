// File: components\loaders\loader-full.jsx
import "./loader-full.css";
const BigLoader = () => {
  return (
    
    <div className="min-h-screen flex flex-col gap-2 justify-center items-center">
      <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>
      <h2 >Loading...</h2>
    </div>

  );
};

export default BigLoader;
