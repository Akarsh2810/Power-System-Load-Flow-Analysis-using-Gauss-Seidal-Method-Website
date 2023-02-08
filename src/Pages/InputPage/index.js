import React, { useState } from "react";
import { useStyles } from "./styles";
import { Button, TableHead, TextField } from "@material-ui/core";
import Image from "../../Image/PSA.jpg";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { useEffect } from "react";
import axios from "axios";

const InputPage = () => {
  const classes = useStyles();

  const [result, setResult] = useState([]);

  let resultList = [];

  result.forEach((res, index) => {
    resultList.push(<li key={index}>{res}</li>);
  });

  const [YBusrows, setYBusrows] = useState("");
  const [YBusRowsNumber, setYBusRowsNumber] = useState(false);
  const [YBuscolumns, setYBuscolumns] = useState("");
  const [YBusColumnsNumber, setYBusColumnsNumber] = useState(false);

  const [YBusReal, setYBusReal] = useState("");
  const [YBusImag, setYBusImag] = useState("");

  const [Busrows, setBusrows] = useState("");
  const [BusRowsNumber, setBusRowsNumber] = useState(false);
  const [Buscolumns, setBuscolumns] = useState("");
  const [BusColumnsNumber, setBusColumnsNumber] = useState(false);

  const [Busdata, setBusdata] = useState();

  useEffect(() => {
    let arrayReal = [];
    let arrayImag = [];
    for (let i = 0; i < YBusrows; i++) {
      arrayReal[i] = [];
      for (let j = 0; j < YBuscolumns; j++) {
        arrayReal[i][j] = "";
      }
    }
    for (let i = 0; i < YBusrows; i++) {
      arrayImag[i] = [];
      for (let j = 0; j < YBuscolumns; j++) {
        arrayImag[i][j] = "";
      }
    }
    setYBusReal(arrayReal);
    setYBusImag(arrayImag);
  }, [YBusrows, YBuscolumns]);

  useEffect(() => {
    let array = [];
    for (let i = 0; i < Busrows; i++) {
      array[i] = [];
      for (let j = 0; j < Buscolumns; j++) {
        array[i][j] = 0;
      }
    }
    setBusdata(array);
  }, [Busrows, Buscolumns]);

  const handleYBusrows = (e) => {
    setYBusrows(e.target.value);
  };

  const handleYBuscolumns = (e) => {
    setYBuscolumns(e.target.value);
  };

  const handleBusrows = (e) => {
    setBusrows(e.target.value);
  };

  const handleBuscolumns = (e) => {
    setBuscolumns(e.target.value);
  };

  const handleCalc = () => {
    const url = `http://localhost:8080/post/calc`;
    const config = {
      headers: {},
    };
    const data = {
      YBusDataReal: YBusReal,
      YBusDataImag: YBusImag,
      BusData: Busdata,
    };
    axios
      .post(url, data, config)
      .then((data) => {
        setResult(data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div
      style={{
        margin: "0",
        padding: "0",
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        backgroundBlendMode: "lighten",
        backgroundAttachment: "fixed",
        overflowY: "scroll",
      }}
    >
      <h1 className={classes.paragraphs}>
        Virtual Lab guidelines for Load Flow Analysis using Gauss Seidal Method:
      </h1>
      <br />
      <h3 className={classes.paragraphs}>
        Step 1 :- Enter the number of rows in YBus Admittance Matrix and press
        "Enter ↵" key
      </h3>
      <h3 className={classes.paragraphs}>
        Step 2 :- Enter the number of columns in YBus Admittance Matrix and
        press "Enter ↵" key
      </h3>
      <h3 className={classes.paragraphs}>
        Step 3 :- Enter the real part and imaginary part of YBus Admittance
        Matrix at each row and column
      </h3>
      <h3 className={classes.paragraphs}>
        Step 4 :- Enter the number of rows in busdata matrix and press "Enter ↵"
        key
      </h3>
      <h3 className={classes.paragraphs}>
        Step 5 :- Enter the number of column in busdata matrix and press "Enter
        ↵" key
      </h3>
      <h3 className={classes.paragraphs}>
        Step 6 :- Enter the value for busdata matrix at each row and column
      </h3>
      <h3 className={classes.paragraphs}>
        Step 7 :- Click "Calculate" button to get Load Flow Analysis
      </h3>
      <h6 className={classes.paragraphs}>
        _____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________:
      </h6>
      <div className={classes.layout}>
        <div className={classes.layout2}>
          {!YBusRowsNumber && (
            <span className={classes.spanfield}>
              Enter the number of rows in YBus Admittance Matrix :
            </span>
          )}
          {!YBusRowsNumber && (
            <TextField className={classes.text}
              label="Row Number"
              variant="standard"
              value={YBusrows}
              onChange={handleYBusrows}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  setYBusRowsNumber(YBusrows);
                }
              }}
            />
          )}
        </div>
        {YBusRowsNumber && (
          <span className={classes.spanfield}>
            Number of rows in YBus Admittance Matrix : {YBusRowsNumber}
          </span>
        )}
        <div className={classes.layout2}>
          {!YBusColumnsNumber && YBusRowsNumber && (
            <span className={classes.spanfield}>
              Enter the number of columns in YBus Admittance Matrix :
            </span>
          )}
          {!YBusColumnsNumber && YBusRowsNumber && (
            <TextField className={classes.text}
              label="Column Number"
              variant="standard"
              value={YBuscolumns}
              onChange={handleYBuscolumns}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  setYBusColumnsNumber(YBuscolumns);
                }
              }}
            />
          )}
        </div>
        {YBusColumnsNumber && (
          <span className={classes.spanfield}>
            Number of columns in YBus Admittance Matrix : {YBusColumnsNumber}
          </span>
        )}
        {YBusRowsNumber && YBusColumnsNumber && <h4>YBus Admittance Matrix</h4>}
        <div className={classes.layout2}>
          {YBusRowsNumber && YBusColumnsNumber && (
            <Table>
              <TableBody>
                {YBusReal.map((row, rowIndex) => (
                  <TableRow className={classes.tableRow} key={rowIndex}>
                    {row.map((col, colIndex) => {
                      return (
                        <TableCell key={colIndex} className={classes.tableCell}>
                          <TextField
                            className={classes.text}
                            label="real"
                            variant="outlined"
                            onChange={(event) => {
                              YBusReal[rowIndex][colIndex] = event.target.value;
                            }}
                          />
                          <TextField
                            label="imag"
                            variant="outlined"
                            onChange={(event) => {
                              YBusImag[rowIndex][colIndex] = event.target.value;
                            }}
                          />
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
        {YBusRowsNumber && YBusColumnsNumber && (
          <h6 className={classes.paragraphs}>
            _____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________:
          </h6>
        )}
        <div className={classes.layout2}>
          {YBusrows && YBuscolumns && !BusRowsNumber && (
            <span className={classes.spanfield}>
              Enter the number of rows in Busdata :
            </span>
          )}
          {YBusrows && YBuscolumns && !BusRowsNumber && (
            <TextField
              label="Row Number"
              variant="standard"
              value={Busrows}
              onChange={handleBusrows}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  setBusRowsNumber(Busrows);
                }
              }}
            />
          )}
        </div>
        {BusRowsNumber && (
          <span className={classes.spanfield}>
            Number of rows in Busdata : {BusRowsNumber}
          </span>
        )}
        <div className={classes.layout2}>
          {!BusColumnsNumber && BusRowsNumber && (
            <span className={classes.spanfield}>
              Enter the number of columns in YBusdata :
            </span>
          )}
          {!BusColumnsNumber && BusRowsNumber && (
            <TextField
              label="Column Number"
              variant="standard"
              value={Buscolumns}
              onChange={handleBuscolumns}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  setBusColumnsNumber(Buscolumns);
                }
              }}
            />
          )}
        </div>
        {BusColumnsNumber && (
          <span className={classes.spanfield}>
            Number of columns in Busdata : {BusColumnsNumber}
          </span>
        )}
        {BusRowsNumber && BusColumnsNumber && <h4>Busdata Matrix</h4>}
        <div className={classes.layout2}>
          {Busrows && Buscolumns && (
            <Table>
              <TableHead>
                <TableRow className={classes.tablehead}>
                  <TableCell style={{ paddingRight: "85px" }}>Bus</TableCell>
                  <TableCell style={{ paddingRight: "75px" }}>Type</TableCell>
                  <TableCell style={{ paddingRight: "75px" }}>
                    Voltage
                  </TableCell>
                  <TableCell style={{ paddingRight: "75px" }}>Angle</TableCell>
                  <TableCell style={{ paddingRight: "65px" }}>G(MW)</TableCell>
                  <TableCell style={{ paddingRight: "60px" }}>
                    G(MVAR)
                  </TableCell>
                  <TableCell style={{ paddingRight: "65px" }}>L(MW)</TableCell>
                  <TableCell style={{ paddingRight: "75px" }}>
                    L(MVAR)
                  </TableCell>
                  <TableCell style={{ paddingRight: "75px" }}>Qmin</TableCell>
                  <TableCell style={{ paddingRight: "75px" }}>Qmax</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Busdata.map((row, rowIndex) => (
                  <TableRow className={classes.tableRow} key={rowIndex}>
                    {row.map((col, colIndex) => {
                      return (
                        <TableCell
                          key={colIndex}
                          className={classes.tableCell1}
                        >
                          <TextField
                            label="busdata"
                            variant="outlined"
                            onChange={(event) => {
                              Busdata[rowIndex][colIndex] = event.target.value;
                            }}
                          />
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
        <div className={classes.button}>
          {BusRowsNumber && BusColumnsNumber && (
            <Button onClick={handleCalc}>
              <h4>Calculate</h4>
            </Button>
          )}
        </div>
        <div className={classes.textbox}>
          <ul>{resultList}</ul>
        </div>
      </div>
    </div>
  );
};

export default InputPage;
