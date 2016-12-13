*** Settings ***
Library  Selenium2Library
Library  Collections
Resource  maskHome.robot
Resource  maskUserRegistration.robot

*** Keywords ***
Registriere neuen Benutzer
    [Documentation]  Ein neuer Benutzer wird angelegt.
    [Arguments]  &{Benutzer}
    Gehe zu Webseite Benutzer registrieren
    Pruefe, dass die Webseite Benutzer registrieren angezeigt wird
    Pruefe, dass das Benutzerregistrierungsformular angezeigt wird
    Gebe die Daten des neuen Benutzers ein  &{Benutzer}
    Sende das Benutzerregistrierungsformular ab
    Pruefe, dass die Webseite Benutzer registrieren verlassen wurde

Benutzer einloggen
    [Documentation]  Einloggen bei DeviceR als Benuzter mit Passwort
    [Arguments]  ${Benutzername}  ${Passwort}
    Gehe zu Startseite
    Pruefe, dass das Loginformular angezeigt wird
    Gebe die Logindaten des Benutzers ein  ${Benutzername}  ${Passwort}
    Sende das Loginformular ab
    #Pruefe, dass die Startseite verlassen wurde