*** Settings ***
Library  Selenium2Library
Library  Collections
Resource  maskHome.robot
Resource  maskUserRegistration.robot

*** Keywords ***
Registriere neuen Benutzer
    [Documentation]  Ein neuer Benutzer wird angelegt.
    [Arguments]  &{Benutzer}
    Gehe zu Startseite
    Rufe die Funktion Benutzer registrieren auf
    Gebe die Daten des neuen Kontaktes ein  &{Benutzer}
    Sende das Add Contact Formular ab
    Gehe zu Webseite Kontakte
    Suche nach Kontakt  &{Benutzer}[Nachname]

#Benutzer bei DeviceR einloggen
#    [Documentation]  Einloggen bei DeviceR als Benuzter mit Passwort
#    [Arguments]  ${Benutzername}  ${Passwort}
#    Go To  ${host}/influx/login
#    Wait Until Page Contains Element  xpath=//form[@action="login-check"]  timeout=60
#    Input Text  xpath=//form[@action="login-check"]//input[@name="name"]  ${Benutzername}
#    Input Text  xpath=//form[@action="login-check"]//input[@name="pass"]  ${Passwort}
#    Submit Form
#    Pruefe, dass die Benutzerprofilseite angezeigt wird  ${Benutzername}