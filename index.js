// // Add your code here

// function submitData(name, email) {
//     return fetch ()    
// };

// const configurationObject = {
//   headers: {
//   method: "POST",
//   "Content-Type": "application/json",
//   Accept: "application/json",
//  },
//   body: JSON.stringify(submitData),
// };
      
// fetch("http://localhost:3000/users", configurationObject)
//   .then(function (response) {
//   return response.json();
//   })
//  .then(function (object) {
//   console.log(object);
//   })
//   .catch(function (error) {
//   alert("Check your Method!");
//   console.log(error.message);
//   });



const submitData = (name, email) => {
  
  const handleMyData = (data) => {
    const h2 = document.createElement ('h2')
    const body = document.querySelector('body')
    h2.textContent = data
    body.appendChild(h2)
  }

  const handleMyErrors = (error) => {
    const p = document.createElement ('p')
    const body = document.querySelector('body')
    p.textContent = error
    body.appendChild(p)
  }

  const userData = {
    name:name,
    email:email
  }

  const objectConfig = {
    method: "POST",
    headers: {"Content-Type": "application/json", "Accept": "application/json"},
     body: JSON.stringify(userData)
  }
  return fetch("http://localhost:3000/users", objectConfig)
    .then(response => response.json())
    .then(receivedData => handleMyData(receivedData.id))
    .catch(e => handleMyErrors(e.message))
}

document.addEventListener("DOMContentLoaded", () => submitData("sam", "sam@mail.com"))

   