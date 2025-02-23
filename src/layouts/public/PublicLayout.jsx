import { FooterLayout } from "./FooterLayout"
import { HeaderLayout } from "./HeaderLayout"


export const PublicLayout = ({children}) => {
  return (
    <div className="bg-white">
      <HeaderLayout />


      <div className="mt-10">
        
        {children}

        
      </div>

      <FooterLayout />

    </div>

  )
}
