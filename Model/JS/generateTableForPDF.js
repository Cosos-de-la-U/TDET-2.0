
function setTablePDF() {
    var nombre = $('#nombre').val();
    var apellido = $('#apellido').val();
    $('.showFullName').html(nombre + " "+ apellido);
    var niti = $('#nit').val();
    $(".showNit").html(niti);
    var puesto = $('#puesto').val();
    $('#showCargo').html(puesto);
    
    var salario = $('#salario').val();
    $('.showSalario').html(salario);
}