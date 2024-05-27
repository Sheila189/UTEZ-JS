//metodo fetch;
console.log('Inicio',baseUrl);

//resolve reject
//fetch(`${baseUrl}/api/usuarios`)//fetch es una funcion que recibe un parametro que es la url de la api
fetch(`${baseUrl}/posts`).then((response) => {
    response.json().then((data) => {
    }).catch((error) => {
        console.error(error);
    })
}).catch((error) => {
    console.error(error);
});

console.log('Inicio de Fetch de fotos');
fetch(`${baseUrl}/photos`).then((response) => {
    response.json(data).then((data) =>{
        console.log(data);
    }).catch((error) => {
        console.error(error);
    })
}).catch((error) => {
    console.error(error);
});

//creacion de post 
(async()=>{
    const data = {
        title: 'Mi primer post',
        body: 'Sheila Camila Sanchez Flores',
        userId: 1
    }
    const response = await fetch(`${baseUrl}/posts`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Mi primer post',
            body: 'Sheila Camila Sanchez Flores',
            userId: 1
        })
    });
})()