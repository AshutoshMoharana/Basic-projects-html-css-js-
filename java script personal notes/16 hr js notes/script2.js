const calculateTemp = () => {
  const numberTemp = document.getElementById("temp").value;

  const tempSelected = document.getElementById("temp_diff");
  const valueTemp = temp_diff.options[tempSelected.selectedIndex];

  const celToFah = (cel) => {
    let fahrenheit = Math.round((cel * 9 / 5) + 32);
    return fahrenheit;
  };

  const fehToCel = (fehr) => {
    let celcious = Math.round((fehr - 32) + 5/9 );
    return celcious;
  };

  let result;

  if (valueTemp === "cel") {
    result = celToFah(numberTemp);
    document.getElementById(
      "resultcontainer"
    ).innerHTML = `${result}degree fahrenheit`;

  } else {
    result = fehToCel(numberTemp);
    document.getElementById(
      "resultcontainer"
    ).innerHTML = `${result} degree celsius`;
  }
};
