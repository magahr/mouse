document.addEventListener("mouseup", soltarClicMouse);
document.addEventListener("mousedown", hacerClicMouse);
document.addEventListener("mousemove", moverMouse);
var d              = document.getElementById('canvas');
var papel          = d.getContext("2d");
var ancho_lienzo   = d.width;
var clicPresionado = 0;
var numeroColor    = 1;
var color_UP       = ['#FA8072', '#FF0000', '#008000', '#AAF'];
var x_inicio       = 0;
var y_inicio       = 0;
var x_final        = 0;
var y_final        = 0;
dibujar_linea("#FA8072",  0,  0, 0, 300, papel);  //Raya derecha del cuadro
dibujar_linea("#FF0000",  0,  0, 300, 0, papel);
dibujar_linea("#008000",  300,  0, 300, 300, papel);
dibujar_linea("#AAF",  300,  300, 0, 300, papel);
function hacerClicMouse(evento)
{
    x_inicio       = evento.layerX;
    y_inicio       = evento.layerY;
    clicPresionado = 1;
}
function soltarClicMouse(evento)
{
    clicPresionado = 0;
}
function moverMouse(evento)
{
   if (clicPresionado == 1)
   {
     numeroColor    = numeroColor + 1;
     if (numeroColor == 5)
     {
       numeroColor = 1;
     }
     x_final        = evento.layerX; //final de la coordenada cuando muevo el mouse
     y_final        = evento.layerY; //final de la coordenada cuando muevo el mouse
     dibujar_linea(color_UP[numeroColor],  x_inicio, y_inicio, x_final, y_final, papel);
     x_inicio       = evento.layerX; //la primera vez el inicio sera cuando se hacer clic, despues sera el final cuando se suelta el mouse
     y_inicio       = evento.layerY; //la primera vez el inicio sera cuando se hacer clic, despues sera el final cuando se suelta el mouse
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
