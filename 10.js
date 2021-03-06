/**El formato de DNI de los orcos verdes es Letra-Guión-6Números-Letra, vamos a intentar
 * concretar más. En lugar de usar [0-9]+ (1 o más repeticiones de un dígito del 0 al 9),
 * podemos utilizar [0-9]{2} (2 repeticiones de un dígito del 0 al 9). Con esto podemos
 * especificar el número de veces que se repite un carácter.
 */

<input pattern="[JH]{1}-[0-9]{6}[AC]"></input>