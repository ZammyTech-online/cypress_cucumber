Feature: Login Page
  The login page validates user credentials and grants or denies access accordingly.

  # El Background se ejecuta antes de cada escenario para garantizar que siempre estamos en la página de login
  Background:
    Given A web browser is at the saucelabs login page

  # Escenario de login exitoso con un usuario válido
  Scenario: Successful Login
    When A user enters the username "standard_user", the password "secret_sauce", and clicks on the login button
    Then The URL should contain "/inventory.html"

  # Escenario de login con un usuario bloqueado
  Scenario: Blocked User Login
    When A user enters the username "locked_out_user", the password "secret_sauce", and clicks on the login button
    Then The error message "Epic sadface: Sorry, this user has been locked out." is displayed

  # Escenario de login con un nombre de usuario incorrecto
  Scenario: Incorrect Username Login
    When A user provides incorrect credentials:
      | username  | password       |
      | fake_user | secret_sauce   |
    Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed

  # Escenario de login con una contraseña incorrecta
  Scenario: Incorrect Password Login
    When A user provides incorrect credentials:
      | username       | password      |
      | standard_user  | wrong_pass    |
    Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed
