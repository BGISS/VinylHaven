
import "./Toast.css";
import { Toast as Toasty, ToastContainer } from "react-bootstrap";

function Toast({ main, sub, show, setShow }) {
    return (
        <>
            <ToastContainer position="top-end" className="p-3">
                <Toasty id=" toast-cont" onClose={() => setShow(false)} show={show} delay={5000} autohide>
                    <Toasty.Header>
                        <strong className="me-auto">{main}</strong>
                    </Toasty.Header>
                    <Toasty.Body>{sub}</Toasty.Body>
                </Toasty>
            </ToastContainer>
        </>
    );
}

export default Toast;
