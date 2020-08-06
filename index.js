const API = 'https://my.api.mockaroo.com/tienda_2_0.json?key=61341140'
const item = document.getElementById('show-api')
const api2 = 'tienda_2.0.json'
/* 
    function traerDatos(){
        const xhttp = new XMLHttpRequest()
        xhttp.open('GET', 'tienda.json', true)
        xhttp.send()
        xhttp.onreadystatechange = function (){
            if(this.readyState == 4 && this.status == 200){
                console.log(this.responseText)
            }
        }
    }
    traerDatos() */

const traer = async () =>{
    try {
        for(let i=0; i<20; i++){
            const response = await fetch(api2)
            const nombre = await response.json()
                item.innerHTML += `
                <article>
                <h2>${nombre[i].name}</h2>
                <img src="${nombre[i].image}" alt=""/>
              
                <p>Status: ${nombre[i].price}</p>
                </article>
                `
        }
        
    } catch (error) {
        
    }
}
traer()


/* 

const obtenerNombrePersonaje = async() =>{
    try {
        
        for(let i=1; i<=10; i++){
            const nombreRespuesta = await fetch (`${API}[${i}]`)
            const nombre = await nombreRespuesta.json()
            item.innerHTML += `
            <article>
            <h2>${nombre.name}</h2>
            <img src="${nombre.image}" alt=""/>
            <h3>Location: ${nombre.location.name}</h3>
            <h3>Origin: ${nombre.origin.name}</h3>
            <h3>Status: ${nombre.status}</h3>
            </article>
            `
            console.log(nombre.name)
        }
        
        
        
    } catch (error) {
        
    }
}
obtenerNombrePersonaje() */
