var btnDatos = document.getElementById("btnDatos");
var parrafoDatos = document.getElementById("parrafoDatos");

btnDatos.addEventListener("click", function() {
    var nombre = "Diego Antonio Silva Cuevas";
    var matricula = "100030374";
    var carrera = "Licenciatura en Sistemas Computacionales";
    var semestre = "Quinto Semestre";

    parrafoDatos.textContent = "Alumno: " + nombre + " | Matrícula: " + matricula + " | Carrera: " + carrera + " | Semestre: " + semestre;
});


var btnCalcular = document.getElementById("btnCalcular");
var resultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", function() {
    var nota1 = parseFloat(document.getElementById("p1").value);
    var nota2 = parseFloat(document.getElementById("p2").value);
    var nota3 = parseFloat(document.getElementById("p3").value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        resultado.textContent = "Por favor llena todos los campos con números.";
        resultado.className = "mt-3 fs-5 text-warning fw-bold";
        return;
    }

    var promedio = (nota1 + nota2 + nota3) / 3;
    var promedioFinal = promedio.toFixed(2);

    if (promedio >= 6) {
        resultado.textContent = "Promedio: " + promedioFinal + " - Aprobado";
        resultado.className = "mt-3 fs-5 text-success fw-bold";
    } else {
        resultado.textContent = "Promedio: " + promedioFinal + " - Reprobado";
        resultado.className = "mt-3 fs-5 text-danger fw-bold";
    }
});


var textoItem = document.getElementById("textoItem");
var btnAgregar = document.getElementById("btnAgregar");
var btnLimpiar = document.getElementById("btnLimpiar");
var lista = document.getElementById("lista");

btnAgregar.addEventListener("click", function() {
    var texto = textoItem.value;
    
    if (texto == "") {
        alert("Escribe un texto primero");
        return;
    }

    var nuevoElemento = document.createElement("li");
    nuevoElemento.className = "list-group-item";
    nuevoElemento.textContent = texto;

    lista.appendChild(nuevoElemento);
    textoItem.value = "";
});

btnLimpiar.addEventListener("click", function() {
    lista.innerHTML = "";
});


var cuerpo = document.getElementById("cuerpo");
var raiz = document.documentElement;
var btnVapor = document.getElementById("btnVapor");
var btnLavanda = document.getElementById("btnLavanda");
var btnCielo = document.getElementById("btnCielo");

function aplicarTema(clase) {
    cuerpo.classList.remove("tema-vapor", "tema-lavanda", "tema-cielo");
    raiz.classList.remove("tema-vapor", "tema-lavanda", "tema-cielo");
    cuerpo.classList.add(clase);
    raiz.classList.add(clase);
}

btnVapor.addEventListener("click", function() {
    aplicarTema("tema-vapor");
});

btnLavanda.addEventListener("click", function() {
    aplicarTema("tema-lavanda");
});

btnCielo.addEventListener("click", function() {
    aplicarTema("tema-cielo");
});