document.addEventListener("keyup", dibujarTeclado)
var d            = document.getElementById('canvas');
var papel        = d.getContext("2d");
var ancho_lienzo = d.width;
var x_inicio     = 100;
var y_inicio     = 100;
var x_final      = 100;
var y_final      = 100;
var teclas =
{ UP    : 38,
  DOWN  : 40,
  LEFT  : 37,
  RIGHT : 39
};
dibujar_linea("#FF0000",  x_inicio - 1, y_inicio - 1, x_final + 1, y_final + 1, papel);

function dibujarTeclado(evento)
{
    var color_UP    = "#FA8072";
    var color_DOWN  = "#FF0000";
    var color_LEFT  = "#008000";
    var color_RIGHT = "#AAF";
    var movimiento  = 10;
    switch (evento.keyCode) {
      case teclas.UP:
        console.log("Tecla Arriba");
        y_final = y_inicio - movimiento;
        dibujar_linea(color_UP,  x_inicio, y_inicio, x_final, y_final, papel);
        y_inicio = y_final;
        break;
      case teclas.DOWN:
        y_final = y_inicio + movimiento;
        dibujar_linea(color_DOWN,  x_inicio, y_inicio, x_final, y_final, papel );
        y_inicio = y_final;
        break;
      case teclas.LEFT:
        x_final = x_inicio - movimiento;
        dibujar_linea(color_LEFT,  x_inicio, y_inicio, x_final, y_final, papel );
        x_inicio = x_final;
        break;
      case teclas.RIGHT:
        x_final = x_inicio + movimiento;
        dibujar_linea(color_RIGHT,  x_inicio, y_inicio, x_final, y_final, papel );
        x_inicio = x_final;
        break;
      default:
    }
}

function dibujar_linea( color, xinicial, yinicial, xfinal, yfinal, lienzo)
{

  lienzo.beginPath();
  lienzo.strokeStyle = color ;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
