var objeto = {
    mascotas: ['perros','gatos','canarios','pez','serpiente'],
    esSegura: false,
    llamarAlerta: function(props){
        console.log('Alerta: ' + props);
        alert('Alerta: ' + props);
        Swal.fire(
            'Funcion Llamar Alerta',
            props,
            'success'
        )
    }, 
    esHttps: function(){
        if(this.esSegura == false){
            this.esSegura = true;
        }else{
            this.esSegura = false;
        }
        console.log('esSegura: ' + this.esSegura);
        return this.esSegura;
    },
    eliminarMascota: function(tipoMascota){
        // Eliminar mascota según parametro
        var index = this.mascotas.indexOf(tipoMascota);
        console.log("index: " +  index);
        this.mascotas.splice(index, 1)
        console.log('Arreglo después de eliminar item: ' + this.mascotas);
        return this.mascotas;
    },
    eliminarUltimaMascota: function(){
        //Eliminar última mascota
        this.mascotas.pop();
        console.log('Arreglo después de eliminar (pop) item: ' + this.mascotas);
        return this.mascotas;
    },
    agregarMascota: function(mascota){
        //Agregar nueva mascota
        this.mascotas.push(mascota);
        console.log('Arreglo después de agregar (push) item: ' + this.mascotas);
        return this.mascotas;
    },
    contadorMascotas: function(){
        contador = 0;
        this.mascotas.forEach(function(valor, indice, arregloCompleto){
        //cuantas mascotas contienen el valor del parametro
        if(valor.includes('os')){
            contador += 1;
        }
         
        })
        console.log("En el arreglo hay " + contador + " mascotas que terminan con 'os'");
        return "En el arreglo hay " + contador + " mascotas que terminan con 'os'";
        
    }
}


//probar

function probar1(){
    var resultado = document.getElementById("resultados");
    var props = prompt("Ingrese texto");
    objeto.llamarAlerta(props);
    resultado.innerText = 'Alerta: ' + props;
}

function probar2(){
    var resultado = document.getElementById("resultados");
    resultado.innerText = 'esSegura: ' + objeto.esHttps();
}

function probar3(){
    var resultado = document.getElementById("resultados");
    var props = prompt("Ingrese mascota a eliminar");
    resultado.innerText = 'Arreglo después de eliminar item: ' + objeto.eliminarMascota(props);
}

function probar4(){
    var resultado = document.getElementById("resultados");
    resultado.innerText = 'Arreglo después de eliminar (pop) item: ' + objeto.eliminarUltimaMascota();
}

function probar5(){
    var resultado = document.getElementById("resultados");
    var props = prompt("Ingrese mascota a agregar");
    resultado.innerText = 'Arreglo después de agregar (push) item: ' + objeto.agregarMascota(props);
}

function probar6(){
    var resultado = document.getElementById("resultados");
    resultado.innerText = objeto.contadorMascotas();
}

