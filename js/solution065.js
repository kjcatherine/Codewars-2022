//Regex validate PIN code- ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. If the function is passed a valid PIN string, return true, else return false. "1234"   -->  true

// function validatePIN(pin) {
//   const result =
//     (pin === "number" && pin.length === 4) || pin.length === 6 ? true : false;
//   console.log(result);
// }

function validatePIN(str) {
  if (str.length !== 4 && str.length !== 6) {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] < "0" || str[i] > "9") {
      return false;
    }
  }
  return true;
}
validatePIN("1234");

const returned = validatePIN("2345");
