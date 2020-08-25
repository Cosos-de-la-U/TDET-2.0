//Variables
var salarioMensual;
var AFP;
var ISS;
var totalRetencion;

//Tramos
var calcularTramo = [0, 472, 895.24, 2938.10, Number.MAX_SAFE_INTEGER];
var obtenerExceso = [0, 472, 895.25, 2038.11, Number.MAX_SAFE_INTEGER];
var obtenerCuotaFija = [0, 17.67, 60, 288.57, Number.MAX_SAFE_INTEGER];
var porcentajeRetencion = [1 , 0.1 , 0.2 , 0.3]

//Renteciones
function Retenciontes() {
    var aguinaldo;
    var totalRetencion = salarioMensual(salarioMensual - ((salarioMensual * 0.0725) + (salarioMensual * 0.03)));
    var i;
    //se saca que tramo es la wea
    for (i = 0; i < calcularTramo.length-1; i++) {
        if ( salarioMensual > calcularTramo[i] && salarioMensual < calcularTramo[i+1]){
            var tramo = obtenerExceso[i];
            var porcentaje = porcentajeRetencion[i];
            var cuota = obtenerCuotaFija[i];
        }
    }
    //sacamos retencion
    var retencionExceso = totalRetencion - tramo;
    var retencionPorcentaje = retencionExceso * porcentaje;
    totalRetencion = retencionPorcentaje + cuota;
    totalRetencion = parseFloat(totalRetencion);
    totalRetencion = totalRetencion.ToFixed(2);
    var eneroRT = document.getElementById("eneroRT").innerHTML = `$ ${totalRetencion}`;
    var febreroRT = document.getElementById("febreroRT").innerHTML = `$ ${totalRetencion}`;
    var marzoRT = document.getElementById("marzoRT").innerHTML = `$ ${totalRetencion}`;
    var abrilRT = document.getElementById("abrilRT").innerHTML = `$ ${totalRetencion}`;
    var mayoRT = document.getElementById("mayoRT").innerHTML = `$ ${totalRetencion}`;
    var junioRT = document.getElementById("junioRT").innerHTML = `$ ${totalRetencion}`;
    var julioRT = document.getElementById("julioRT").innerHTML = `$ ${totalRetencion}`;
    var agostoRT = document.getElementById("agostoRT").innerHTML = `$ ${totalRetencion}`;
    var septiembreRT = document.getElementById("setpiembreRT").innerHTML = `$ ${totalRetencion}`;
    var octubreRT = document.getElementById("octubreRT").innerHTML = `$ ${totalRetencion}`;
    var noviembreRT = document.getElementById("noviembreRT").innerHTML = `$ ${totalRetencion}`;
    var añoRT = document.getElementById("añoRT");
}


function Retencion() {
    var aguinaldo;
    var enero = document.getElementById("enero").innerHTML = `$ ${rentaImponible}`;
    var febrero = document.getElementById("febrero").innerHTML = `$ ${rentaImponible}`;
    var marzo = document.getElementById("marzo").innerHTML = `$ ${rentaImponible}`;
    var abril = document.getElementById("abril").innerHTML = `$ ${rentaImponible}`;
    var mayo = document.getElementById("mayo").innerHTML = `$ ${rentaImponible}`;
    var junio = document.getElementById("junio").innerHTML = `$ ${rentaImponible}`;
    var julio = document.getElementById("julio").innerHTML = `$ ${rentaImponible}`;
    var agosto = document.getElementById("agosto").innerHTML = `$ ${rentaImponible}`;
    var septiembre = document.getElementById("setpiembre").innerHTML = `$ ${rentaImponible}`;
    var octubre = document.getElementById("octubre").innerHTML = `$ ${rentaImponible}`;
    var noviembre = document.getElementById("noviembre").innerHTML = `$ ${rentaImponible}`;
    var years = document.getElementById("years");
    // var options = document.getElementsByClassName("option_value");
    var opcion = years.options[years.selectedIndex].innerText;
    // alert(opcion);
    var vacaciones = (rentaImponible)/2;
    vacaciones = rentaImponible + vacaciones;
    var afpC = vacaciones*0.0725;
    var ISSSC = (vacaciones >=1000) ? 30 : parseFloat(rentaImponible) * 0.03; ;
    var newR = vacaciones-(parseFloat(afpC)+ISSSC);
    console.log(newR);
    newR = newR.toFixed(2);
    aguinaldo = (opcion == "1 año a 3 años") ? (newR/30)*15 : (opcion == "3 años a 10 años") ? (newR/30)*19 : (newR/30)*21;
    var dias;
    if(aguinaldo > 600){
        aguinaldo-=600;
        console.log(aguinaldo);
        agunialdo = parseFloat(aguinaldo) + (newR);
        aguinaldo = aguinaldo.toFixed(2);
    }else{
        agunialdo = parseFloat(aguinaldo) + (newR);
        aguinaldo = aguinaldo.toFixed(2);
    }
    var total = ((parseFloat(rentaImponible)*11) + parseFloat(newR));
    // total = total.toFixed(2);
    var diciembre = document.getElementById("diciembre").innerHTML = `$ ${newR}`;
    var total = document.getElementById("total").innerHTML = `$ ${total}`;
}