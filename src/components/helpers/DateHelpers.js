const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const dateFormat = (date) => {
  const dateJS = date.toDate();
  return dateJS.toLocaleDateString(undefined, options);
};
