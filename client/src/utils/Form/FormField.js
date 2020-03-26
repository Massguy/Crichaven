import React from "react";

const FormField = ({ formData, change, id }) => {
  const showError = () => {
    let errorMessage = null;

    if (formData.validation && !formData.valid) {
      errorMessage = (
        <div className="error_label">{formData.validationMessage}</div>
      );
    }
    return errorMessage;
  };
  return (
    <div>
      {
        <div className="formBlock">
          <input
            {...formData.config}
            value={formData.value}
            onBlur={event => change({ event, id, blur: true })}
            onChange={event => change({ event, id })}
          />
          {showError()}
        </div>
      }
    </div>
  );
};

export default FormField;
