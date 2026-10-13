# Práctica: Variables, tipos y conversiones (Tema 3)

¡Hola! En esta práctica de Desarrollo Web en Entorno Cliente (DWEC) he trabajado con los conceptos básicos de JavaScript: la declaración de variables, los tipos de datos, las conversiones explícitas y la coerción[cite: 2, 3, 4].

## Ejercicios realizados

1. **Variables y typeof:** He declarado seis variables diferentes (número, texto, booleano, nulo, indefinido y un entero grande con `bigint`) utilizando `const` y `let` donde correspondía. Al pasarlo por la consola, he comprobado los tipos de cada una, destacando el curioso caso de `null` que devuelve "object" por un error histórico del lenguaje[cite: 3].
2. **Conversiones explícitas:** He probado cómo convertir valores entre tipos usando `Number()`, `String()` y `Boolean()`, previendo qué iba a salir antes de ejecutar el código para comprobar los resultados (como el comportamiento de `Number("12abc")` que da `NaN`)[cite: 3].
3. **Coerción y comparaciones:** He analizado cómo mezcla tipos JavaScript en operaciones aritméticas o de cadenas, y he aprendido por qué es mucho más seguro comparar siempre utilizando el operador estricto (`===`) en lugar del débil (`==`)[cite: 3].
4. **Ficha personal y plantillas de cadena:** He creado una ficha con mis datos usando plantillas de cadena con comillas invertidas (backticks) y `${}`, comparándolo con la concatenación tradicional con `+`. También he probado a cambiar el valor de una constante en la consola para ver el error `TypeError` que lanza JavaScript[cite: 4].

## Capturas de pantalla
*(Aquí tienes las capturas guardadas en la carpeta `capturas/`)*[cite: 4]
- **`capturas/principal.png`**: Vista general de la página web con mi nombre visible en la barra de navegación.
- **`capturas/ejercicio1.png`**: Consola del navegador mostrando los tipos y valores del Ejercicio 1.
- **`capturas/ejercicio2.png`**: Consola con las conversiones explícitas del Ejercicio 2.
- **`capturas/ejercicio3.png`**: Resultados de las expresiones mixtas y comparaciones del Ejercicio 3.
- **`capturas/ejercicio4.png`**: Mensaje de la plantilla de cadena y el error de la `const` en el Ejercicio 4.

## Reflexión personal
Hacer esta práctica me ha venido muy bien para entender cómo piensa JavaScript por debajo y por qué a veces hace cosas extrañas al sumar un número con un texto. Las conversiones que más intuitivas me han resultado han sido las de `String()` porque simplemente envuelven el dato, mientras que lo que más me ha sorprendido al principio es ver cómo `Number("")` se convierte en un `0` o cómo `Number("12abc")` devuelve `NaN` en lugar de dar un fallo de código. También me ha quedado claro que usar `===` te ahorra muchos dolores de cabeza con los tipos de datos.

## Fuentes consultadas
- Apuntes oficiales y presentación del Tema 3 de la asignatura (Profesor Diego Rodero).
- Documentación oficial de JavaScript en **MDN Web Docs** (Mozilla Developer Network)[cite: 7].

