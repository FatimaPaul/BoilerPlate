import { useState } from "react";
import FButton from "../components/FButton";
import FDonor from "../components/FDonor";
import FAcceptor from "../components/FAcceptor";


export default function BloodBank() {
    // const [toggle, setToggle] = useState(false);
    const [donorOpen, setDonorOpen] = useState(false);
    const [acceptorOpen, setAcceptorOpen] = useState(true);

    function handleToggle() {
        if (acceptorOpen) {
            
        }
    }

    return <div className="bb-body">
        {/* Navbar */}
        <div className="bb-nav bg-light p-3 shadow">
            <div>
                <h6> (🩸) Blood Bank Application </h6>
            </div>
            <div>
                <span className="me-2"><FButton variant="contained" color="error" onclick={() => {
                    setDonorOpen(true);
                    setAcceptorOpen(false);
                }}>Donor</FButton></span>
                
                <span><FButton variant="contained" color="error" onclick={() => {
                    setAcceptorOpen(true);
                    setDonorOpen(false);}}>Acceptor</FButton></span>
            </div>
        </div>
        {/* Navbar */}
        <div className="bb-screen">
            {acceptorOpen ? <FAcceptor/> : <FDonor/>}
        </div>
    </div>;
}