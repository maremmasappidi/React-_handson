// App.js
import React from 'react';
import Card from './components/Card';
import { ImGoogle2 } from "react-icons/im";
import { FaArrowCircleLeft, FaArrowCircleDown } from "react-icons/fa";
import { useState } from 'react';





const App = () => {
 
  const cardsData = [
    { title: 'GREEN', description: ' THEMATIC',icon: '', number: 5.67 ,color:'green'},
    { title: 'GREEN', description: 'THEMATIC',icon: '', number: 5.67,color:'green'  },
    { title: 'GREEN', description: 'THEMATIC' ,icon: '', number: 5.67,color:'green' },
    { title: 'GREEN', description: 'THEMATIC',icon: '', number: 5.67,color:'green'  },
    { title: 'REALISTIC', description: 'THEMATIC',icon: '', number: 5.67  },
    { title: 'REALISTIC', description: 'THEMATIC',icon: '', number: 5.67  },
    { title: 'REALISTIC', description: 'THEMATIC',icon: '', number: 5.67  },
    { title: 'REALISTIC ', description: 'THEMATIC',icon: '', number: 5.67  },
    { title: 'RIGHT-HORIZONS', description: 'THEMATIC',icon: '', number: 5.67  },
    { title: 'RIGHT-HORIZONS', description: 'THEMATIC' ,icon: '', number: 5.67 },
    { title: 'RIGHT-HORIZONS ', description: 'THEMATIC',icon: '', number: 5.67  },
    { title: 'RIGHT-HORIZONS', description: 'THEMATIC',icon: '', number: 5.67  },
    { title: 'CRESCIL', description: 'THEMATIC',icon: '', number: 5.67  },
    { title: 'CRESCIL', description: 'THEMATIC',icon: '', number: 5.67  },
    { title: 'CRESCIL', description: 'THEMATIC',icon: '', number: 5.67  },
    { title: 'CRESCIL', description: 'THEMATIC',icon: '', number: 5.67  },
  ];

  const [title, setTitle] = useState('');
  const filteredCards = cardsData.filter(card => title === '' || card.title === title);


  return (
    <div className="container">
      <div className="row">
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
          <br></br>
          <br></br> 
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
            <select
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="form-select form-select-sm"
            >
              <option value="">All Titles</option>
              <option value="GREEN">GREEN</option>
              <option value="REALISTIC">REALISTIC</option>
              <option value="RIGHT-HORIZONS">RIGHT-HORIZONS</option>
              <option value="CRESCIL">CRESCIL</option>
            </select>

          </h6>
        </div>
       
      </div>
       <div className="row">
        {filteredCards.map((card, index) => (
          <div className="col-md-3" key={index}>
            <Card title={card.title} description={card.description} color={card.color} icon={<ImGoogle2 className="me-2" style={{ fontSize: "1.3em" }} />} number={card.number} />
          </div>
        ))}
      </div>
      
      <div className="row">
        {cardsData.slice(4, 8).map((card, index) => (
          <div className="col-md-3" key={index}>
            <Card title={card.title} description={card.description} icon={<ImGoogle2  className="me-2" style={{ fontSize: "1.3em" }}/>} number={card.number} />
          </div>
        ))}
      </div>
      <div className="row">
        {cardsData.slice(8, 12).map((card, index) => (
          <div className="col-md-3" key={index}>
           <Card title={card.title} description={card.description} icon={<ImGoogle2  className="me-2" style={{ fontSize: "1.3em" }}/>} number={card.number} />
          </div>
        ))}
      </div>
      <div className="row">
        {cardsData.slice(12, 16).map((card, index) => (
          <div className="col-md-3" key={index}>
           <Card title={card.title} description={card.description} icon={<ImGoogle2  className="me-2" style={{ fontSize: "1.3em" }}/>} number={card.number} />
          </div>
        ))}
      </div>
      <div className="row">
        {cardsData.slice(16, 20).map((card, index) => (
          <div className="col-md-3" key={index}>
           <Card title={card.title} description={card.description} icon={<ImGoogle2 className="me-2" style={{ fontSize: "1.3em" }} />} number={card.number} />
          </div>
        ))}
      </div>
      <div className="row">
        {cardsData.slice(4, 8).map((card, index) => (
          <div className="col-md-3" key={index}>
           <Card title={card.title} description={card.description} icon={<ImGoogle2 className="me-2" style={{ fontSize: "1.3em" }} />} number={card.number} />
          </div>
        ))}
      </div>
      <div className="row">
        {cardsData.slice(0, 4).map((card, index) => (
          <div className="col-md-3" key={index}>
          <Card title={card.title} description={card.description} icon={<ImGoogle2  className="me-2" style={{ fontSize: "1.3em" }}/>} number={card.number} />
          </div>
        ))}
        
      </div>
      <div className="row">
        {cardsData.slice(12, 16).map((card, index) => (
          <div className="col-md-3" key={index}>
           <Card title={card.title} description={card.description} icon={<ImGoogle2  className="me-2" style={{ fontSize: "1.3em" }}/>} number={card.number} />
          </div>
        ))}
      </div>
      <div className="row">
        {
        filteredCards.map((card, index) => (
          <div className="col-md-3" key={index}>
            <Card title={card.title} description={card.description} color={card.color} icon={<ImGoogle2 className="me-2" style={{ fontSize: "1.3em" }} />} number={card.number} />
          </div>
        ))}
      </div>

  
  
      <div className="row mt-3">
        <div className="col-md-12 d-flex justify-content-end">
          <button type="button" className="btn btn-outline-dark">
            select optimized Portfolio
          </button>
          <button type="button" className="btn btn-primary btn-lg mx-3">
            Save Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
