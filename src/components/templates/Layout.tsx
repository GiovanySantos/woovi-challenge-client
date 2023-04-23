import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

interface IProps {
  children: JSX.Element;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div
      className={`${montserrat.className} items-center justify-center w-screen h-screen bg-background_primary selection:bg-transparent`}>
      <div className='flex items-center justify-center py-5'>
        <div className='text-4xl font-extrabold cursor-pointer text-green '>
          Woovi
        </div>
      </div>
      <div className='flex items-center justify-center w-screen'>
        {children}
      </div>
    </div>
  );
};
export default Layout;

