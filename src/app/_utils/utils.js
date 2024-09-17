export function convertDate(date_str) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let temp_date = date_str.split("-");
  return (
    temp_date[2] + " " + months[Number(temp_date[1]) - 1] + " " + temp_date[0]
  );
}

export function sortDatesDesc(a, b) {
  return Date.parse(b.date + " " + b.time) - Date.parse(a.date + " " + a.time);
}

export function getCurrentDate() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  const formattedDate = yyyy + "-" + mm + "-" + dd;
  console.log(formattedDate);

  return formattedDate;
}

export function checkPassword(password) {
  let lowerCase = false;
  let upperCase = false;
  let number = false;
  let symbol = false;

  if (
    password.length < 8 ||
    password.length > 24 ||
    password.search(/\d/) == -1 ||
    password.search(/[a-zA-Z]/) == -1 ||
    password.search(/[\@\#\_\*]/) == -1
  ) {
    return false;
  }
  return true;
}
