import { Modal } from "react-bootstrap";
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
        <Modal.Header className={styled.title}>
          <Modal.Title>Detalles de {country.name?.common}</Modal.Title>
          <i style={{cursor : "pointer" , color : "white" , fontSize : "30px"}}  onClick={handleClose} className="bi bi-x-lg"></i>
        </Modal.Header>
        <Modal.Body className={styled.backgroundModal}>
          <div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={country.flags?.png} alt={country.name?.common} />
            </div>
            <div className="mt-5 ">
              <p><strong>Nombre oficial:</strong> {country.name?.official}</p>
              <p><strong>Capital:</strong> {country.capital}</p>
              <p><strong>Moneda:</strong> {country.currencies?.name}</p>
              <p><strong>Continente:</strong> {country.continents}</p>
              <p><strong>Poblacion:</strong> {Number(country.population)}</p>
              <p>
               <strong>Independiente:</strong>{" "}
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
