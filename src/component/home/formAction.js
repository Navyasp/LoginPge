export const update = (element, formdata, formName) => {
  const newFormdata = {
    ...formdata
  };
  const newElement = {
    ...newFormdata[element.id]
  };
  newElement.value = element.event.target.value;

  newElement.touched = element.blur;
  newFormdata[element.id] = newElement;
  return newFormdata;
};
