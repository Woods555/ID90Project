$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("VerificarHome.feature");
formatter.feature({
  "line": 1,
  "name": "Verificar pagina Home y hacer click en Login",
  "description": "I want to use this template for my feature file",
  "id": "verificar-pagina-home-y-hacer-click-en-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Verificar que el usuario pueda entrar a la pagina",
  "description": "",
  "id": "verificar-pagina-home-y-hacer-click-en-login;verificar-que-el-usuario-pueda-entrar-a-la-pagina",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tagid90-Home"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Abrir el navegador y la pagina \"https://beta.id90travel.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "el usuario espera pagina",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "El Cliente puede ver el boton Get Started",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clickea el boton Log In",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verifica elemento en Log In",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Cierra el navegador",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://beta.id90travel.com",
      "offset": 32
    }
  ],
  "location": "Metodos1.abrir_el_navegador_y_la_pagina(String)"
});
formatter.result({
  "duration": 6725606501,
  "status": "passed"
});
formatter.match({
  "location": "Metodos1.el_usuario_espera_pagina()"
});
formatter.result({
  "duration": 4051300,
  "status": "passed"
});
formatter.match({
  "location": "Metodos1.el_cliente_encuentra_el_boton()"
});
formatter.result({
  "duration": 39022500,
  "status": "passed"
});
formatter.match({
  "location": "Metodos1.Clickea_el_boton_Log_In()"
});
formatter.result({
  "duration": 2409874100,
  "status": "passed"
});
formatter.match({
  "location": "Metodos1.Verifica_elemento_en_Log_In()"
});
formatter.result({
  "duration": 22260200,
  "status": "passed"
});
formatter.match({
  "location": "Metodos1.cierra_el_navegador()"
});
formatter.result({
  "duration": 33891700,
  "status": "passed"
});
formatter.uri("VerificarLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Realizar un login sobre una pagina",
  "description": "I want to use this template for my feature file",
  "id": "realizar-un-login-sobre-una-pagina",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Realiza login con datos validos",
  "description": "",
  "id": "realizar-un-login-sobre-una-pagina;realiza-login-con-datos-validos",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tagid90-Login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Abrir el navegador y la pagina \"https://beta.id90travel.com/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "el usuario espera pagina",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Una vez que se abra escribir el company \"AEROLINEAS ARGENTINAS (AR)\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Escrbir usuario \"qatest\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Escrbir password \"12345\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Dar en click en Log In",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "el usuario espera pagina",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Entra a la pagina logueandose correctamente y verifica",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Cierra el navegador",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://beta.id90travel.com/login",
      "offset": 32
    }
  ],
  "location": "Metodos1.abrir_el_navegador_y_la_pagina(String)"
});
formatter.result({
  "duration": 8099295600,
  "status": "passed"
});
formatter.match({
  "location": "Metodos1.el_usuario_espera_pagina()"
});
formatter.result({
  "duration": 4040000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AEROLINEAS ARGENTINAS (AR)",
      "offset": 41
    }
  ],
  "location": "Metodos1.una_vez_que_se_abra_escribir_el_company(String)"
});
formatter.result({
  "duration": 148321799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qatest",
      "offset": 17
    }
  ],
  "location": "Metodos1.escrbir_usuario(String)"
});
formatter.result({
  "duration": 80045700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 18
    }
  ],
  "location": "Metodos1.escrbir_password(String)"
});
formatter.result({
  "duration": 82350400,
  "status": "passed"
});
formatter.match({
  "location": "Metodos1.dar_en_click_en_Log_In()"
});
formatter.result({
  "duration": 79287500,
  "status": "passed"
});
formatter.match({
  "location": "Metodos1.el_usuario_espera_pagina()"
});
formatter.result({
  "duration": 5166700,
  "status": "passed"
});
formatter.match({
  "location": "Metodos1.entra_a_la_pagina_logueandose_correctamente()"
});
formatter.result({
  "duration": 7675245700,
  "status": "passed"
});
formatter.match({
  "location": "Metodos1.cierra_el_navegador()"
});
formatter.result({
  "duration": 27222600,
  "status": "passed"
});
});