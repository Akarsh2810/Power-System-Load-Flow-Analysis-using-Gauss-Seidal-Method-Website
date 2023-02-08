import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  layout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  layout2: {
    display: "flex",
    flexDirection: "row",
  },
  spanfield: {
    margin: "15px",
    color: "black",
  },
  paragraphs: {
    margin: "0px",
    color: "black",
  },
  button: {
    background: "linear-gradient(90deg, gray 100%)",
    border: 0,
    borderRadius: 5,
    // boxShadow: "0 3px 5px 2px rgba(255, 255, 255, .9)",
    '&:hover': {
      background: 'linear-gradient(45deg, lightblack 30%, #FE6B8B 90%)'
    },
    color: "black",
    height: "50px",
    margin: "5px",
    padding: "0 30px",
    opacity: "1",
  },
  tableCell: {
    width: 200,
    display: "flex",
    flexDirection: "row",
    borderBottom: "none",
  },
  tableCell1: {
    width: 100,
    display: "flex",
    flexDirection: "row",
    borderBottom: "none",
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    borderBottom: "none",
  },
  textbox: {
    height: "auto",
    width: "auto",
  },
  text: {
    marginRight: "2px",
  },
  tablehead: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "30px",
    borderBottom: "none",
  }
}));

export { useStyles };
