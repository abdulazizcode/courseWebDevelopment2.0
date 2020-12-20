const Http = new XMLHttpRequest();
const url='https://my-burger-apis.herokuapp.com/burgers';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}