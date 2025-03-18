import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";


const MainTemplate = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container flex justify-around mx-auto flex-grow p-4">
        <div className="mb-4">
          <button 
            className="btn btn-sm mr-2"
            onClick={() => navigate(-1)}
          >
            Prev
          </button>
          <button 
            className="btn btn-sm"
            onClick={() => navigate(+1)}
          >
            Next
          </button>
        </div>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainTemplate