/**La cosa se comienza a complicar. Los orcos verdes más viejos tienen un DNI más
 * pequeño, ya que al principio tenían menos cifras. Con {2,4} podemos indicar que el
 * carácter anterior debe tener una longitud de 2 a 4 carácteres. También se pueden usar
 * {2,} para indicar 2 o más.
 */

<input pattern="[JH]{1}-[0-9]{2,5}[CaA]"></input>