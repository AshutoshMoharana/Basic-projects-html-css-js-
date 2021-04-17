console.log("wellcome to tutorial 20 step 18 Local and session storage in javascript")


localStorage.setItem('Name','Rana');
localStorage.setItem('Name2', 'hello');

// for get items in localstorage:
let name = localStorage.getItem('Name');
console.log(name)
// for clearing localstorage we use 
// localStorage.clear();    

//storing "Array to localstorage";
//here we are storing the value without string so values are by default stores string value ;and imArray is also undefined 
let impArray = ['allu','vindi','onion'];
// localStorage.setItem('sabji', impArray);

//to prevent this we can use JSON.stringify and json.parse (impArray);
localStorage.setItem('sabji', JSON.stringify(impArray))

name = JSON.parse(localStorage.getItem('sabji'));
console.log(name); 

// similarly for sessions 
sessionStorage.setItem('sessionName', 'sHarry');
sessionStorage.setItem('sessionName2', 'sRohan');
sessionStorage.setItem('sessionSabzi', JSON.stringify(impArray));



//MAIN DIFFERENCE BETWEEN LOCALSTORAGE AND SESSION STORAGE IS: in local storage data store in browser until we remove and the session storage data ends when session is end ; 