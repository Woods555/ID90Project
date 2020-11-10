Feature: Verificar pagina Home y hacer click en Login
  I want to use this template for my feature file
   
  @tagid90-Home
  Scenario: Verificar que el usuario pueda entrar a la pagina
    Given Abrir el navegador y la pagina "https://beta.id90travel.com"
    And el usuario espera pagina
    Then El Cliente puede ver el boton Get Started
    And Clickea el boton Log In
    Then Verifica elemento en Log In
    And Cierra el navegador