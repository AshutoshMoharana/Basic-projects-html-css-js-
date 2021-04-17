console.log('this is tutorial 18 topic : more on java script');

let btn = document.getElementById('btn');
btn.addEventListener('click', funct1);
btn.addEventListener('dblclick', fun);

  function funct1(e) {
           console.log('thanks', e);
           e.preventDefault();     

           function fun  (e) {
            console.log('thanks', e);
            e.preventDefault()};     
 

//here e.preventdefault is used for prevent from default submite;
 };