console.log("this is tut35.js AJAX ");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  console.log("you have clicked the fetchBtn");

  //instantiate an xhr object
  const xhr = new XMLHttpRequest();

  //open the object using get:(only send url and we want what is inside data)
//   xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);


//using post:send url with data and we want data according to the data that we have send.

  xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
  
  xhr.getResponseHeader('content-type', 'application/json');
  

  // what to do when data progress
  xhr.onprogress = function () {
    console.log("on progess");
  };

  //what to do when response is ready
  xhr.onload = function () {
    console.log(this.responseText);
  };

  //send the request
  params = `{"name":"tes414t","salary":"123","age":"23"}`;
  xhr.send(params);
  console.log('we are done!');
}
