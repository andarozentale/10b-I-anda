function myfunction1()
{
    const nameObj = document.getElementById("user_name");
    const surnameObj = document.getElementById("user_surname");
    const urlObj = document.getElementById("user_url");

   // console.log(nameObj.value);
    //console.log(surnameObj.value);
   // console.log(urlObj.value);

   // localStorage.setItem("name", nameObj.value);
   // localStorage.setItem("surname", surnameObj.value);
   //localStorage.setItem("url", urlObj.value);

   const user = 
{
    name    : nameObj.value,
    surname : surnameObj.value,
    url     : urlObj.value
}
console.log(user.name);
localStorage.setItem("user1",JSON.stringify(user));

}

function myfunction2()
{
    const user = JSON.parse(localStorage.getItem("user1"));
    console.log(user);
    alert(user.name + user.surname + user.url);
}