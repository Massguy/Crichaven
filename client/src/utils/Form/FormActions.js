export const validate = (elem, formData = []) => {
  let error = [true, ""];

  if (elem.validation.email) {
    const valid = /^\S+@\S+\.\S+$/.test(elem.value);
    const message = `${!valid ? "Must be a valid email" : ""}`;
    error = !valid ? [valid, message] : error;
  }
  if (elem.validation.confirm) {
    const valid = elem.value.trim() === formData[elem.validation.confirm].value;
    const message = `${!valid ? "Password do not match" : ""}`;
    error = !valid ? [valid, message] : error;
  }
  if (elem.validation.required) {
    const valid = elem.value.trim() !== "";
    const message = `${!valid ? "This field is required" : ""}`;
    error = !valid ? [valid, message] : error;
  }
  return error;
};

export const update = (elem, formData, formName) => {
  const newFormData = {
    ...formData,
  };
  const newElem = {
    ...newFormData[elem.id],
  };

  newElem.value = elem.event.target.value;

  if (elem.blur) {
    let validData = validate(newElem, formData);
    newElem.valid = validData[0];
    newElem.validationMessage = validData[1];
  }

  newElem.touched = elem.blur;
  newFormData[elem.id] = newElem;

  return newFormData;
};

export const generateData = (formData, formName) => {
  let loginData = {};

  for (let key in formData) {
    if (key !== "confirmPassword") {
      loginData[key] = formData[key].value;
    }
  }
  return loginData;
};

export const isFormValid = (formData, formName) => {
  let validForm = true;

  for (let key in formData) {
    validForm = formData[key].valid && validForm;
  }
  return validForm;
};

export const populateOptionFields = (formData, arrayData = [], field) => {
  const newArray = [];
  const newFormData = { ...formData };

  arrayData.forEach((item) => {
    newArray.push({ key: item._id, value: item.name });
  });
  newFormData[field].config.options = newArray;
  return newFormData;
};

export const resetFields = (formData, formName) => {
  const newFormData = { ...formData };

  for (let key in newFormData) {
    if (key === "images") {
      newFormData[key].value = [];
    } else {
      newFormData[key].value = "";
    }
    newFormData[key].valid = false;
    newFormData[key].touched = false;
    newFormData[key].validationMessage = "";
  }
  return newFormData;
};

export const populateFields = (formData, fields) => {
  for (let key in formData) {
    formData[key].value = fields[key];
    formData[key].valid = true;
    formData[key].touched = true;
    formData[key].validationMessage = "";
  }

  return formData;
};
