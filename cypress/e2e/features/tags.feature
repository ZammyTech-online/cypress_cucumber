Feature: Login page with Tags

  Feature Login page will work depending on the user credentials with Tags.

  Background:
    Given A web browser is at the tucoban login page - tag demo

  @mobile
  Scenario: Success Login
    When A user enters the username "zammy.cristo@iesa.es", the password "7E.ae6EUUg", and clicks on the login button - tag demo
    Then the url will contains the account list subdirectory - tag demo

  @desktop
  Scenario: Blocked Login
    When A user enters the username "locked_out_user", the password "secret_tucoban", and clicks on the login button - tag demo
    Then The error message "Usuario o contraseña incorrectos" is displayed - tag demo
