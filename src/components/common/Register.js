import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { ScaleLoader } from 'react-spinners';
import TCCRegister from '../consumer/TCCRegister';
import TCSRegister from '../service-provider/TCSRegister';
import NavPill from './NavPill';


export default function Register() {
  // storing flag in state to switch between consumer and service provider login on click
  const [isConsumer, setIsConsumer] = useState(true);

  let [showAlert, setShowAlert] = useState(false)

  let [showLoader, setShowLoader] = useState(false);

  let handlePill = (e) => {
    if (e.target.name === "consumer") setIsConsumer(true);
    else setIsConsumer(false);
  }

  return (
    <>
      {showLoader
        ?
        <div className="bg-dark w-100 h-100 z-3 position-absolute justify-content-center " >
          <ScaleLoader color="#36d7b7" loading={showLoader} className=" position-absolute translate-middle top-50 start-50" />
        </div>
        :
        <div className='logindiv'>
          {showAlert ? <Alert variant="danger" className="text-center" onClose={() => setShowAlert(false)} dismissible >
            <strong>Uh oh! Something went wrong!</strong>
          </Alert> : <></>}
          <div className='logindiv bg-secondary'  >

            <NavPill handlePill={handlePill}></NavPill>
            {
              isConsumer ? <TCCRegister handleFailure={setShowAlert} setShowLoader={setShowLoader} /> : <TCSRegister handleFailure={setShowAlert} setShowLoader={setShowLoader} />
            }
          </div>
        </div>
      }
    </>
  );
}
