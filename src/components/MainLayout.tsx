import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer"


const mainBackground = "bg-linear-65 from-purple-500 to-pink-500";

export const MainLayout = () => {
    return (
      <div className={`text-white ${mainBackground}`}>
        <Navbar />
        
        <main className="">
          <Outlet />
        </main>

        <Footer />
      </div>
    )
  }
  
  export default MainLayout;
