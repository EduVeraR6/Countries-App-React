import { Button, Modal } from "react-bootstrap";
import styled from "../modals/CountryInfo.module.css";
import { Country } from "../../interfaces/countries.interface";
interface Props {
  show: boolean;
  handleClose: () => void;
  country: Country;
}

export default function CountryInfo({ show, handleClose, country }: Props) {
  return (
    <>
      <Modal
        className={styled.contenedorModal}
        show={show}
        onHide={handleClose}
      >
        <Modal.Header className={styled.backgroundModal} closeButton>
          <Modal.Title>{country.name?.common}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styled.backgroundModal}>
          <div>
            <img src={country.flags?.png} alt={country.name?.common} />
            <div className="mt-5">
              <p>Nombre oficial : {country.name?.official}</p>
              <p>Capital: {country.capital}</p>
              <p>Moneda : {country.currencies?.name}</p>
              <p>
                Independiente:{" "}
                {country.independent
                  ? "Es un estado independiente"
                  : "No es un estado independiente"}
              </p>
            </div>
         
          </div>
        </Modal.Body>
       
      </Modal>
    </>
  );
}
