import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Commponents/Header"
import SalesCard from "./Commponents/SalesCard"


function app() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
          <SalesCard />
          </div>
        </section>
      </main>


    </>
  )
}

export default app
