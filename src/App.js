import React from "react";
import { useState } from "react";
import Card from "./components/Card";
import { ImGoogle2 } from "react-icons/im";
import { FaArrowCircleLeft, FaArrowCircleDown } from "react-icons/fa";
import { filters, data } from "./data";
const App = () => {
 
  
  const [range, setRange] = useState(0);

  //data
  const [displayCardsData, setdisplayCardsData] = useState(data);

  const handleFilterChange = (newFilter) => {
    // setFilter(newFilter);
    setdisplayCardsData(
      newFilter == filters[0]
        ? data
        : data.filter((card) => card.title == newFilter)
    );
  };
  //range-bar
  const handleRangeChange = (e) => {
    const range = parseInt(e.target.value, 10);
    setRange(range);
    setdisplayCardsData(data.filter((card) => card.number > range));
  };
  return (
    <div className="container ">
      <div className="row ">
        <div className="col">
          <h4
            className="body"
            style={{
              fontWeight: "bold",
              marginTop: "25px",
              marginBottom: "25px",
            }}
          >
            <FaArrowCircleLeft className="me-2" style={{ fontSize: "0.6em" }} />
            Customize Your Portfolio
          </h4>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-3 mb-3">
          <input
            type="range"
            className="form-range custom-range"
            id="slider"
            min="0"
            max="6"
            value={range}
            onChange={handleRangeChange}
            step={0.1}
          ></input>
          <center>{range}</center>
        </div>
        <div className="col-md-3 mb-3">
          <input
            type="range"
            className="form-range custom-range"
            id="slider"
            min="0"
            max="100"
            step="3"
          ></input>
        </div>
        <div className="col-md-3 mb-3">
          <input
            type="range"
            className="form-range custom-range"
            id="slider"
            min="0"
            max="100"
            step="3"
          ></input>
        </div>

        <div className="col">
          <h6
            className="body"
            style={{
              fontWeight: "bold",
              marginTop: "25px",
              marginBottom: "25px",
              textAlign: "end",
            }}
          >
            Filter by{" "}
            <FaArrowCircleDown className="me-2" style={{ fontSize: "0.9em" }} />
            <select onChange={(e) => handleFilterChange(e.target.value)}>
              {filters.map((f) => (
                <option value={f}>{f}</option>
              ))}
            </select>
          </h6>
        </div>
      </div>
      <div className="row">
        {displayCardsData.map((card) => (
          <div className="col-sm-6 col-md-4 col-lg-3 " key={card.id}>
            <Card
              color={card.color}
              fontWeight="bold"
              title={card.title}
              description={card.description}
              number={card.number}
              icon={<ImGoogle2 className="" style={{ fontSize: "1.3em" }} />}
            />
          </div>
        ))}
      </div>
      <div className="row mt-3">
        <div className="col-md-12 d-flex justify-content-end">
          <button type="button" className="btn btn-outline-dark btn-lg">
            Select Optimized Portfolio
          </button>
          <button type="button" className="btn btn-primary btn-lg mx-3 btn-lg">
            Save Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;
