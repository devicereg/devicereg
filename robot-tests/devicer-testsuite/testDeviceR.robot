*** Settings ***
Resource  ucDeviceR.robot

*** Keywords ***
Initialisiere Test
    Open Browser  ${url}  ${browser}
    Maximize Browser Window
    #Set Selenium Speed  0.334

Schliesse Browser
    Close Browser

*** Test Cases ***
Registriere den Benutzer Max Musterman
    Initialisiere Test
    Registriere neuen Benutzer  &{Mustermax}
    Schliesse Browser

Einloggen des Benutzers Max Mustermann
    Initialisiere Test
    Benutzer einloggen  &{Mustermax}[Email]  &{Mustermax}[Passwort]
    Pruefe, dass die Geraeteuebersicht angezeigt wird

Registriere das Geraet der Geraet
    Registriere neues Geraet  &{Geraet}
    Schliesse Browser