import React, { useState, useEffect } from "react";
import axios from "axios";
import "./companyDetails.css";
import PropTypes from "prop-types";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Typography, Box, TextField, Modal, Slide } from "@material-ui/core";
import CompanyDetailsModal from "components/CompanyDetailsModal";
import CompanyDetailBox from "components/CompanyDetailBox";
import { useHistory } from "react-router-dom";
// import AdSense from 'react-adsense';
// import { baseUrl } from "Constants/config";
import { withStyles } from "@material-ui/core/styles";

function getModalStyle() {
  return {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
}

const styles = (theme) => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

function CompanyDetails(props) {
  const [loading, setloading] = useState(false);
  const [details, setDetails] = useState({});
  // const [editmodal,seteditmodal] = React.useState(false)
  const [open, setOpen] = useState(false);
  const [modelData, setModelData] = useState({});
  const [textInput, setTextInput] = useState("");

  const history = useHistory();

  const fields = [
    { name: "Value Proposition", fieldName: "valueproposition" },
    { name: "Revenue", fieldName: "revenue" },
    { name: "Expenses", fieldName: "expenses" },
    { name: "Key Partners", fieldName: "keypartners" },
    { name: "Key Resources", fieldName: "keyresources" },
    { name: "Customer Segments", fieldName: "customersegments" },
    { name: "Customer Relations", fieldName: "customerrelations" },
    { name: "Channels", fieldName: "channels" },
    { name: "Key Activities", fieldName: "keyactivities" },
  ];

  // useEffect(() => {
  //   const installGoogleAds = () => {
  //     const elem = document.createElement("script");
  //     elem.src =
  //       "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  //     elem.async = true;
  //     elem.defer = true;
  //     document.body.insertBefore(elem, document.body.firstChild);
  //   };
  //   installGoogleAds();
  //   // (adsbygoogle = window.adsbygoogle || []).push({});
  //   (window.adsbygoogle = window.adsbygoogle || []).push({})
  // }, [])

  useEffect(() => {
    getDetails();
    document.querySelectorAll(".editable > * ").forEach((div, i) => {
      let maxheight = 350;
      let minheight = 250;
      div.style.height = Math.round(
        Math.random() * (maxheight - minheight) + minheight
      );
      var color = Math.round(Math.random() * 16777215).toString(16);
      color = "0".repeat(6 - color.length) + color;
      div.style.backgroundColor = "#" + color;
    });
  }, []);

  const getDetails = async () => {
    const companies = await axios.get(`/company/${props.match.params.id}`);
    console.log(companies);
    setDetails(companies.data);
  };

  console.log(details);

  return (
    <div className="companydetails">
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={() => setOpen(false)}
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        {/* <Slide direction="up" in={open} mountOnEnter> */}
        <div
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          className={props.classes.paper}
        >
          <CompanyDetailsModal
            modelData={modelData}
            setOpen={setOpen}
            id={props.match.params.id}
            setDetails={setDetails}
          />
        </div>
        {/* </Slide> */}
      </Modal>
      {/* <Modal
        show={open}
        onHide={() => setOpen(false)}
      // aria-labelledby="simple-modal-title"
      // aria-describedby="simple-modal-description"
      >
        <CompanyDetailsModal
          modelData={modelData}
          setOpen={setOpen}
          id={props.match.params.id}
          setDetails={setDetails}
        />
      </Modal> */}
      <div id="backbutton" onClick={() => history.goBack()}>
        <KeyboardBackspaceIcon />
      </div>
      <div className="details-header">
        {/* <div style={{ height: 250, width: 400, backgroundColor: 'red' }}> */}
        {/* <AdSense.Google
          client='ca-pub-4945858705623309'
          slot='3958743579'
          style={{ width: 300 , height: 100 }}
          responsive='true'
          layout='in-article'
          format='auto'
        /> */}

        {/* <div>
          <ins className="adsbygoogle"
            style={{ display: "inline-block", width: "728px", height: "90px" }}
            data-ad-client="ca-pub-114234437311277"
            // data-ad-format='auto'
            data-ad-slot="42837282224"></ins>
        </div> */}

        {/* </div> */}
        <h1>{details.name}</h1>

        {/* <AdSense.Google
          client='ca-pub-4945858705623309'
          slot='3958743579'
          layout='in-article'

          style={{ width: 300, height: 100 }}
          responsive='true'
          format='auto'
        /> */}
      </div>
      <div className="editable">
        {fields?.map((field, index) => (
          <CompanyDetailBox
            key={index}
            title={field.name}
            value={details[field.fieldName] ? details[field.fieldName] : ""}
            fieldName={field.fieldName}
            updatedAt={details.updatedAt}
            setModelData={setModelData}
            setOpen={setOpen}
          />
        ))}
      </div>
    </div>
  );
}

CompanyDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

const SimpleModalWrapped = withStyles(styles)(CompanyDetails);
export default SimpleModalWrapped;
