
function setTablePDF() {
    var nombre = $('#nombre').val();
    var apellido = $('#apellido').val();
    $('#showFullName').html(nombre + " "+ apellido);

    var puesto = $('#puesto').val();
    $('#showFullName').html(puesto);
    
    var salario = $('#salario').val();
    $('.showSalario').html(salario);
}