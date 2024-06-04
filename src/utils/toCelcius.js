const toCelcius = (tempInKelvin) => {
  const tempInCelsius = tempInKelvin - 273;

  return tempInCelsius.toFixed(2);
};
export default toCelcius;
