*** Settings ***
Resource  maskHome.robot
Resource  maskUserRegistration.robot
Resource  maskMyDevices.robot

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
    Pruefe, dass die Startseite angezeigt wird
    Pruefe, dass das Loginformular angezeigt wird
    Gebe die Logindaten des Benutzers ein  ${Benutzername}  ${Passwort}
    Sende das Loginformular ab
    Pruefe, dass die Startseite verlassen wurde

Registriere neues Geraet
    [Documentation]  Ein neues Geraet wird registriert
    [Arguments]  &{Geraet}
    Gehe zur Seite Geraeteuebersicht
    Pruefe, dass die Geraeteuebersicht angezeigt wird
    Rufe die Funktion Geraete hinzufuegen auf
    Gebe die Daten des neuen Geraetes ein  &{Geraet}
    Sende das Geraeteregistrierungsformular ab
    Pruefe, dass das Geraet in der Geraeteuebersicht angezeigt wird  &{Geraet}[Geraetebezeichnung]