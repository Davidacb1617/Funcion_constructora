'use strict'

let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in user) {
    // claves
    alert( key );  // name, age, isAdmin
    // valores de las claves
    alert( user[key]+user.age+user.isAdmin ); // John, 30, true
  }