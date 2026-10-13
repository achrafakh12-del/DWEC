// ==========================================
// TAREA 3: Variables, tipos y conversiones
// Alumno: Achraf
// ==========================================

// EJERCICIO 1: Variables y typeof
function ejercicio1() {
    console.clear();
    console.log("--- Ejercicio 1: Variables y typeof ---");

    // 1. Declaración de al menos seis variables de distintos tipos
    const edad = 20;                      // number
    const nombreUsuario = "Achraf";       // string
    const esEstudiante = true;            // boolean
    const datoNulo = null;                // null
    let variableIndefinida;               // undefined
    const numeroGrande = 10n;             // bigint

    // 2. Damos valor más tarde a una variable let
    let ciudad;
    ciudad = "Granada";

    // 3. Mostrar en la consola el valor y el typeof de cada una
    console.log("edad:", edad, "| Typeof:", typeof edad);
    console.log("nombreUsuario:", nombreUsuario, "| Typeof:", typeof nombreUsuario);
    console.log("esEstudiante:", esEstudiante, "| Typeof:", typeof esEstudiante);
    console.log("datoNulo:", datoNulo, "| Typeof:", typeof datoNulo);
    console.log("variableIndefinida:", variableIndefinida, "| Typeof:", typeof variableIndefinida);
    console.log("numeroGrande:", numeroGrande, "| Typeof:", typeof numeroGrande);
    console.log("ciudad:", ciudad, "| Typeof:", typeof ciudad);
}


// EJERCICIO 2: Conversiones explícitas
function ejercicio2() {
    console.clear();
    console.log("--- Ejercicio 2: Conversiones explícitas ---");

    // 1. Al menos ocho conversiones con Number(), String() y Boolean() con predicción en comentarios
    
    // Espero: "123" (string)
    const conv1 = String(123);
    console.log("String(123) -> Valor:", conv1, "| Typeof:", typeof conv1);

    // Espero: 123 (number)
    const conv2 = Number("123");
    console.log("Number(\"123\") -> Valor:", conv2, "| Typeof:", typeof conv2);

    // Espero: NaN (number)
    const conv3 = Number("12abc");
    console.log("Number(\"12abc\") -> Valor:", conv3, "| Typeof:", typeof conv3);

    // Espero: 0 (number)
    const conv4 = Number("");
    console.log("Number(\"\") -> Valor:", conv4, "| Typeof:", typeof conv4);

    // Espero: 1 (number)
    const conv5 = Number(true);
    console.log("Number(true) -> Valor:", conv5, "| Typeof:", typeof conv5);

    // Espero: false (boolean)
    const conv6 = Boolean(0);
    console.log("Boolean(0) -> Valor:", conv6, "| Typeof:", typeof conv6);

    // Espero: true (boolean)
    const conv7 = Boolean("texto");
    console.log("Boolean(\"texto\") -> Valor:", conv7, "| Typeof:", typeof conv7);

    // Espero: false (boolean)
    const conv8 = Boolean("");
    console.log("Boolean(\"\") -> Valor:", conv8, "| Typeof:", typeof conv8);
}


// EJERCICIO 3: Coerción y comparaciones
function ejercicio3() {
    console.clear();
    console.log("--- Ejercicio 3: Coerción y comparaciones ---");

    // 1. Expresiones mixtas en la consola
    console.log('"5" - 2 =', "5" - 2);
    console.log('"5" + 2 =', "5" + 2);
    console.log('"10" * "2" =', "10" * "2");
    console.log('true + 1 =', true + 1);
    console.log('null + 5 =', null + 5);
    console.log('undefined + 1 =', undefined + 1);

    // 2. Comparaciones con == y ===
    console.log("5 == '5' ->", 5 == '5');
    console.log("5 === '5' ->", 5 === '5');
    console.log("0 == false ->", 0 == false);
    console.log("0 === false ->", 0 === false);
    console.log("null == undefined ->", null == undefined);
    console.log("null === undefined ->", null === undefined);
}


// EJERCICIO 4: Tu ficha con plantillas de cadena
function ejercicio4() {
    console.clear();
    console.log("--- Ejercicio 4: Ficha y plantillas de cadena ---");

    // 1. Declarar datos personales con const y una let que cambia
    const nombre = "Achraf";
    const ciclo = "DWEC";
    const curso = "2º DAW";
    const aficion = "programar";
    let horasEstudio = 6;

    // Modificamos la variable let con +=
    horasEstudio += 4; // 10 horas en total

    // 2. Plantilla de cadena con backticks y ${}
    const mensajeTemplate = `Hola, me llamo ${nombre}, estudio ${ciclo} en ${curso}, me gusta ${aficion} y esta semana he estudiado ${horasEstudio} horas.`;
    
    console.log("Mensaje con template string:", mensajeTemplate);
    alert(mensajeTemplate);

    // 3. Mismo mensaje concatenando con +
    const mensajeConcatenado = "Hola, me llamo " + nombre + ", estudio " + ciclo + " en " + curso + ", me gusta " + aficion + " y esta semana he estudiado " + horasEstudio + " horas.";
    
    console.log("Mensaje concatenado (+):", mensajeConcatenado);

    // Comprobación estricta con === (debe dar true)
    console.log("¿Son estrictamente iguales (===)?", mensajeTemplate === mensajeConcatenado);
}