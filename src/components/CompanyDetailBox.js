import React from "react";
import { Create, Save } from "@material-ui/icons";

const CompanyDetailBox = ({
  title,
  value,
  updatedAt,
  setModelData,
  setOpen,
  fieldName,
}) => {
  return (
    <div className="box">
      <h4 style={{ color: "white", fontWeight: 500 }}>
        {title}
        <div className="editBtns">
          <button
            onClick={() => {
              setModelData({
                title: title,
                value: value,
                fieldName,
                timestamp: updatedAt,
              });
              setOpen(true);
            }}
          >
            <Create />
          </button>
        </div>
      </h4>
      <div id="valueproposition" style={{ color: "white" }}>
        {value}
        <p> {new Date(updatedAt).toDateString()} </p>
      </div>
    </div>
  );
};

export default CompanyDetailBox;
