export const validate = (elem, formData = []) => {
  let error = [true, ""];

  if (elem.validation.email) {
    const valid = /^\S+@\S+\.\S+$/.test(elem.value);
    const message = `${!valid ? "Must be a valid email" : ""}`;
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
    ...formData
  };
  const newElem = {
    ...newFormData[elem.id]
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
    loginData[key] = formData[key].value;
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
