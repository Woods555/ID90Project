
1- Se refiere a que veas si el sitio o los flujos que quieres automatizar(identificar que casos de prueba vas a querer automatizar), puede ser automatizables, por ejemplo, !la viabilidad de si puede ser automatizado!, depende de si no tiene automatizaicon humana, haces un caso de prueab
ponele que recibis un cheque y tomes ese cheque, lo tenes que pasar por un dispositivo y el dispositivo lo pasa al sistema, ese caso puede ser semi automatizado, hay que fijarse si la herramienta lo permite
ver si la herramienta soporta la tecnologia para automatizar, ahi practicas la primera fase y ves la viabilidad de si el sistema puede ser automatizado
tambien hay que tener en cuenta el beneficio por tiempo usado, tener en cuenta el riesgo de negocio, tener en cuenta los que son happy paths, prioridad para el negocio y de alto riesgo, el critero mas importante es que te lo pidan si o si.
si la peticion viene del lider, hay que automatizarlo, vas a seleccionar fijandose en ese criterio por ejemplo en el caso de regression.
2- Test Plan, verificar que los casos de prueba esten hechos(estos no quiere decir que podemos seleccionar todos, tienen que ser lo que sirvan para Automatizacion,prioridad para el negocio, alto riesgo, happy path)
sino estan o faltan, viene la parte de test design, donde creamos los casos de prueba.
3- Environment Setup: preparar el environment para Automatizar segun sea el caso, devices,permisos,herramientas,etc.
3.5- GIT:En este paso tiene que usar el git, antes de crear el script, tu creas una rama nueva con el nombre del caso de prueba que vas a automatizar.
4- Test Script dev: Es el caso que uno va a Automatizar, lo vas a programar, lo que tienes que hacer tmb, implica hacer el script pero tienes que hacer tambien la depuracion y optimizacion del mismo, error-y solucion y depurar hasta que quede.
5- Test Script Execution: Ya esta todo bien y lo ejecutas
6- Generate Test Result: Aca ves el resultado de la prueba en un reporte y analisas el porque fallo, puede ser porque algo estuvo, se cayo el ambiente, por diversos errores.
6.5- GIT: Aqui ya podes subir los cambios al git en la rama principal.

Escenario de prueba:
1.Verificar que la pagina se haya cargado correctamente
Paginas necesarias: Home
2.Verificar que un cliente pueda hacer login
Paginas necesarias: Login
(Si tengo tiempo)
3.Verificar que el cliente pueda seleccionar un hotel
Paginas necesarias: Login, Buscar Hotel
4.Verificar que el cliente pueda seleccionar un auto
Paginas necesarias: Login, Buscar Hotel

Boton GET STARTED://*[@class='btn btn-primary text-uppercase gtm-get-started-btn']
Boton Login://*[@class='btn btn-link text-uppercase mt-3 font-weight-bold text-white d-lg-none']

Boton Log In://button[@type='submit']
Campo Company:id="airline"
Campo User:id="airline-email-3"

Herramientas utilizadas:
-Eclipse
-Java 1.8
-Selenium
-Cucumber(Gherking)
-Junit
