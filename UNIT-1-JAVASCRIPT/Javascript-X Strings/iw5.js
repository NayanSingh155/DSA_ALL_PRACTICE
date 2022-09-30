// Problem 5: Given the days of the week in short format "Sun", "Mon" ... print in long format "Sunday", "Monday", ...;

var day="mon";
switch(day)
  {
      case"mon":console.log("MONDAY");
      case"tue":console.log("TUESDAY");
      case"wed":console.log("WEDNESDAY");
      case"thu":console.log("THURSDAY");
      case"fri":console.log("FRIDAY");
      case"sat":console.log("SATURDAY");
      case"sun":console.log("SUNDAY");
      break;
    default:console.log("INVALID");
    
  }