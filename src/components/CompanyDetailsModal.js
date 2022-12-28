import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Form } from 'react-bootstrap'
import { Close } from "@material-ui/icons";
import "./CompanyDetailsModal.css";
import axios from "axios";
import AdSense from 'react-adsense';
import { baseUrl } from "Constants/config";

const CompanyDetailsModal = ({ setOpen, modelData, id, setDetails }) => {
  const [textInput, setTextInput] = useState(modelData.value);

  async function updateData(e) {
    const response = await axios.put(
      `${baseUrl}/companyupdate/${id}`,
      {
        [modelData.fieldName]: textInput,
      },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    console.log(response);
    setDetails(response.data);
    console.log(textInput);
  }

  return (
    <div

    >
      <div className="companyDetailsModal">
        <button className="closebtn" onClick={() => setOpen(false)}>
          <Close />
        </button>
        <h2 className="companyDetailsModal__title">{modelData.title}</h2>
        <p>Last Updated: {new Date(modelData.timestamp).toDateString()}</p>
      </div>

        {/* <textarea

          onChange={(e) => setTextInput(e.target.value)}
          value={textInput}
          id="outlined-basic"
          label={modelData.title}
          variant="outlined"
          rows={7}
          className="companyDetailsModal__input form-control"
        /> */}


        {/* <TextField fullWidth label="Position" id="fullWidth" /> */}
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            onChange={(e) => setTextInput(e.target.value)}
            value={textInput}
            id="outlined-basic"
            label={modelData.title}
            variant="outlined"
            rows={7}
            className="companyDetailsModal__input"
            as="textarea" />
        </Form.Group>
      <button className="companyDetailsModal__button" onClick={updateData}>
        Save Changes
      </button>
    </div>

  );
};

export default CompanyDetailsModal;