import React, { useState, useEffect } from "react";
import DataService from "../service/LivraisonService";
import { Link } from "react-router-dom";

const LivraisonList = () => {
  const [livraisons, setLivraisons] = useState([]);
  const [currentlivraison, setCurrentlivraison] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    retrievelivraisons();
  }, []);

  const retrievelivraisons = () => {
    DataService.getAll()
      .then((response) => {
        setLivraisons(response.data.orders);
        console.log("aloooooooooooooooooooooo", response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const setActiveTutorial = (livraison, index) => {
    setCurrentlivraison(livraison);
    setCurrentIndex(index);
  };

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Delivery List</h4>

        <ul className="list-group">
          {livraisons &&
            livraisons.map((livraison, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveTutorial(livraison, index)}
                key={index}
              >
                {livraison.reference}
              </li>
            ))}
        </ul>
      </div>
      <div className="col-md-6">
        {currentlivraison ? (
          <div>
            <h4>Livraison</h4>
            <div>
              <label>
                <strong>Restaurant:</strong>
              </label>{" "}
              {currentlivraison.restaurant.name}
            </div>
            <div>
              <label>
                <strong>ITEMS:</strong>
              </label>{" "}
              {currentlivraison.orderItems.map((livraison, index) => (
                <li key={index}>
                  {livraison.name}:<br></br>
                  {livraison.price} DT{" "}
                </li>
              ))}
            </div>
            <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {currentlivraison.orderType}
            </div>

            <Link
              to={"/tutorials/" + currentlivraison.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LivraisonList;
