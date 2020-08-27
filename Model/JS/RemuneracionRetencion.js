var rentaImponible;
var salBase;
var afpCalc;
var isssCalc;
var aguinaldo;
var calculoDiciembre;
var totalRemuneracion;
function renta() {
    var salarioPersona = Number(document.getElementById("salario").value);
    salBase = salarioPersona;
    var salario = document.getElementById("salarioMensual");
    var AFP = document.getElementById("AFPCalculado");
    var ISSS = document.getElementById("ISSSCalculado");
    var total = document.getElementById("TotalCalculado");
    var rentaCalculado = document.getElementById("RentaCalculado");
    var afp = parseFloat(salarioPersona) * 0.0725;
    afp = parseFloat(afp.toFixed(2));
    afpCalc = afp;
    var isss;
    var rentaC;
    // calculo del isss
    isss= (salarioPersona >=1000) ? 30 : parseFloat(salarioPersona) * 0.03;    
    isss.toFixed(2);
    isssCalc = isss;
    //total
    var totalCalculado = afp + isss;
    totalCalculado.toFixed(2)
    rentaC = salarioPersona - totalCalculado;
    rentaImponible = rentaC;
    rentaImponible = parseFloat(rentaImponible);
    salario.innerHTML = `$ ${salarioPersona}`;    
    AFP.innerHTML = `$ ${afp}`;    
    ISSS.innerHTML = `$ ${isss}`;    
    total.innerHTML = `$ ${totalCalculado}`;       
    rentaCalculado.innerHTML = `$ ${rentaC}`;  
}

var ISR;

function Remuneracion() {
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

    //Salario empleado

    var salarioBaseline = document.getElementById("salario").value;
    var vacaciones = (((salarioBaseline/30) * 15) * 0.3);
    console.log("vacaciones : " + vacaciones );
    var salarioConVacacion  = parseFloat(salarioBaseline) + parseFloat(vacaciones);
    //vacaciones = rentaImponible + vacaciones;
    var afpC = salarioConVacacion*0.0725;
    console.log("afk S : " + vacaciones );
    var ISSSC = (salarioConVacacion >=1000) ? 30 : parseFloat(salarioConVacacion) * 0.03; ;
    var newR = salarioConVacacion-(parseFloat(afpC)+ISSSC);
    console.log(newR);
    newR = newR.toFixed(2);
    
    var aguinaldoOpcion = (opcion == "1 año a 3 años") ? (salarioBaseline/30)*15 : 
    (opcion == "3 años a 10 años") ? (salarioBaseline/30)*19 : (salarioBaseline/30)*21;

    var dias;
    var realAguinaldo;
    if(aguinaldoOpcion > 600){
        realAguinaldo= aguinaldoOpcion - 600;
    }else{
        realAguinaldo = aguinaldoOpcion;
    }
    //alert(realAguinaldo + " " + aguinaldoOpcion + " "+ newR)
    //se suma todo el desmadre
    var salarioAguinaldoVacacionCalculada = parseFloat(newR) + parseFloat(realAguinaldo);
    var total = ((parseFloat(rentaImponible)*11) + parseFloat(salarioAguinaldoVacacionCalculada));
    // total = total.toFixed(2);
    totalRemuneracion = parseFloat(total);
    var diciembre = document.getElementById("diciembre").innerHTML = `$ ${salarioAguinaldoVacacionCalculada.toFixed(2)}`;
    var total = document.getElementById("total").innerHTML = `$ ${total}`;
    
}

function calculos() {
    var salario = document.getElementById("salarioBase").innerHTML =`$ ${salBase}`;
    var rentaimponible = document.getElementById("RentaImponible").innerHTML =`$ ${rentaImponible}`;
    var AFPTotal = document.getElementById("AFPTotal").innerHTML =`$ ${afpCalc}`;
    var ISSSTotal = document.getElementById("ISSSTotal").innerHTML =`$ ${isssCalc}`;
    if(rentaImponible >= 0.01 && rentaImponible < 472.01){
        ISR = 0.00;
    }else if(rentaImponible >= 472.01 && rentaImponible < 895.25){
        ISR = ((rentaImponible - 472.01)*0.10) + 17.67;
    }else if(rentaImponible >= 895.25 && rentaImponible < 2038.11){
        ISR = ((rentaImponible - 895.25)*0.20) + 60.00;
    }else if(rentaImponible > 2038.11){
        ISR = ((rentaImponible - 2038.11)*0.30) + 288.57;
    }
    ISR = ISR.toFixed(2);
    var SalLiquido = rentaImponible - ISR;
    SalLiquido = SalLiquido.toFixed(2);
    var Impuesto = document.getElementById("Impuesto").innerHTML =`$ ${ISR}`;
     
    $(".Impuesto").html(`$ ${ISR}`);  
    $(".ISSSCalculado").html(`${ISSSTotal}`);   
    $(".AFPCalculado").html(`${AFPTotal}`);  
    var fullCrackNoFake = parseFloat(afpCalc) + parseFloat(isssCalc) + parseFloat(ISR);
    $(".totalFullNoFake").html(fullCrackNoFake.toFixed(2));
    $(".yaMerito").html(parseFloat(salBase)-fullCrackNoFake.toFixed(2));
    $('aguinaldoBoleta').html(realAguinaldo);
    $('vacacionesBoleta').html(vacaciones);
    //Salario liquido
    if(rentaImponible >= 0.01 && rentaImponible < 472.01){
        var nombreVariable= document.getElementById("salarioLiquido").innerHTML = `$ ${rentaImponible}`;
        //$("#salarioLiquido").html("$"+ (parseFloat(rentaImponible)-fullCrackNoFake.toFixed(2)).toFixed(2));
    }else {
        $("#salarioLiquido").html("$"+ (parseFloat(salBase)-fullCrackNoFake.toFixed(2)).toFixed(2));
    }
    $(".ntl").html(NumeroALetras(parseFloat(salBase)-fullCrackNoFake.toFixed(2)));
    // var descuento = document.getElementById("descuento").innerHTML =`$ ${descuento}`;
    // var pago = document.getElementById("pago").innerHTML =`$ ${pago}`;


    //RETENCION
    $('#eneroRT').html(`$ ${ISR}`);
    $('#febreroRT').html(`$ ${ISR}`);
    $('#marzoRT').html(`$ ${ISR}`);
    $('#abrilRT').html(`$ ${ISR}`);
    $('#mayoRT').html(`$ ${ISR}`);
    $('#junioRT').html(`$ ${ISR}`);
    $('#julioRT').html(`$ ${ISR}`);
    $('#agostoRT').html(`$ ${ISR}`);
    $('#setpiembreRT').html(`$ ${ISR}`);
    $('#octubreRT').html(`$ ${ISR}`);
    $('#noviembreRT').html(`$ ${ISR}`);

    var IsrEneroNoviembre = parseFloat(ISR * 11);
    var recalculoDeRemuneracion;
    //alert("TR " + totalRemuneracion);
    if (totalRemuneracion >= 0.001 && 5664 >= totalRemuneracion ){
        recalculoDeRemuneracion = 0.00;
    }else if(totalRemuneracion >= 5664.01 && 10742.86 >= totalRemuneracion){
        recalculoDeRemuneracion = ((parseFloat(totalRemuneracion) - parseFloat(5664)) * 0.1) + parseFloat(212.12);
    }else if(totalRemuneracion >= 10742.87 && 24457.14 >= totalRemuneracion){
        recalculoDeRemuneracion = ((parseFloat(totalRemuneracion) - parseFloat(10742.86))* 0.2) + parseFloat(720);
    }else if(totalRemuneracion >= 24457.15){
        recalculoDeRemuneracion = ((parseFloat(totalRemuneracion) - parseFloat(24457.14))*0.3) + parseFloat(3462.86) ;
    }else{
        recalculoDeRemuneracion = 0.00;
    }
    //alert("recalculo " + recalculoDeRemuneracion);

    diferenciaRetencion = parseFloat(recalculoDeRemuneracion) - parseFloat(IsrEneroNoviembre);
    var totalRetencionRT = parseFloat(diferenciaRetencion) + parseFloat(IsrEneroNoviembre);
    $('#diciembreRT').html(`$ ${diferenciaRetencion.toFixed(2)}`);    
    $('#totalRT').html(`$ ${totalRetencionRT.toFixed(2)}`);
}

