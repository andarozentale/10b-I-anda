function myfunction()
{
    const nameObj = document.getElementById("user_name");
    const surnameObj = document.getElementById("user_surname");
    const urlObj = document.getElementById("user_url");

    console.log(nameObj.value);
    console.log(surnameObj.value);
    console.log(urlObj.value);

    localStorage.setItem("name", nameObj.value);
    localStorage.setItem("surname", surnameObj.value);
    localStorage.setItem("url", urlObj.value);

}