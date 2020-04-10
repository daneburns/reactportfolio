import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import bujo from "./assets/gifs/bulletjournal.gif";
import grocerEase from "./assets/gifs/grocerEase.gif";
import weatherDash from "./assets/gifs/weatherDash.gif";
import reactEmployee from "./assets/gifs/reactEmployee.gif"
import sobered from "./assets/gifs/sobered.png"
import fitness from "./assets/gifs/fitness.gif"

function ModalExample(props) {
  let imgPath;
  switch (props.imgsource) {
    case "bujo":
      imgPath = bujo;

      break;
    case "grocerEase":
      imgPath = grocerEase;
      break;
    case "weatherDash":
      imgPath = weatherDash;
      break;
    case "reactEmployee":
      imgPath = reactEmployee;
      break;
      case "sobered":
        imgPath = sobered;
        break;
        case "fitness":
          imgPath = fitness;
          break;

    default:
      break;
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow} className='p-5'>
        {props.title}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="img-fluid" src={imgPath}></img>
          <hr></hr>
          {props.description}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalExample;
