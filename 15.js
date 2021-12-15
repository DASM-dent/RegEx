/**Ahora queremos seleccionar sólo payasos y orcos viejos... Puedes usar la parentización
 * (+[0-9]|-[A-Z]) para agrupar fragmentos. Ten mucho cuidado con esto, puesto que
 * no es lo mismo CA|B (CA o B) que C(A|B) (CA o CB).
*/

<input pattern= "H(\+|-)[0-9]{4}[0-9]?[0-9]?[aA]" ></input>