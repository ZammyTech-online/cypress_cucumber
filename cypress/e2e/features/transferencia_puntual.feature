Feature: Transferencias Puntuales

  Background:
    Given A web browser is at the tucoban login page
    When A user enters the username "zammy.cristo@iesa.es" and the password "7E.ae6EUUg" and clicks on the login button
    Then the url will contain the account list subdirectory

  Scenario: Navegar a la página de Transferencias Puntuales
    When A user clicks on the transfer menu option
    And A user clicks on "Acceder" to create a new transfer
    Then The new transfer page is displayed
