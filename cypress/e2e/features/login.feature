Feature: Login page

  Feature Login page will work depending on the user credentials.

  Background:
    Given A web browser is at the tucoban login page

  Scenario: Success Login
    When A user enters the username "zammy.cristo@iesa.es", the password "7E.ae6EUUg", and clicks on the login button
    Then the url will contains the account list subdirectory

  Scenario: Blocked Login
    When A user enters the username "locked_out_user", the password "tucoban", and clicks on the login button
    Then The error message "Usuario o contraseña incorrectos" is displayed

  Scenario: Incorrect Username Login
    When A user provides incorrect credentials, and clicks on the login button
      | username                  | password    |
      | zammy.cristo@iesa1.es      | 7E.ae6EUUg  |
    Then The error message "Usuario o contraseña incorrectos" is displayed

  Scenario: Incorrect Password Login
    When A user provides incorrect credentials, and clicks on the login button
      | username                  | password    |
      | zammy.cristo@iesa.es       | 7E.ae6EUUg3 |
    Then The error message "Usuario o contraseña incorrectos" is displayed
