import { FooterLayout } from "./components/FooterLayout";
import { HeaderLayout } from "./components/HeaderLayout";


export const MainLayout = ({ children }) => {

  return (

    <>
      
      <HeaderLayout />

      <main>{children}</main>

      <FooterLayout />

    </>

  );
};
