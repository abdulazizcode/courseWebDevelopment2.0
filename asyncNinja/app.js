const getData = () =>{
    let arr = [];
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((result) => arr.push(result));

    arr.map((el) =>{
        console.log(el);
    })
}

getData();