*** Settings ***
Resource  ucDeviceR.robot
#Test Teardown  Close Browser

*** Test Cases ***
Registriere den Benutzer Max Musterman
    Initialisiere Test
   Registriere neuen Benutzer  &{Mustermax}
   Schliesse Browser

Einloggen des Benutzers Max Mustermann
    Initialisiere Test
    Benutzer einloggen  &{Mustermax}[Email]  &{Mustermax}[Passwort]
    Pruefe, dass die Geraeteuebersicht angezeigt wird
    Schliesse Browser

Registriere das Geraet der Geraet
    Initialisiere Test
    Benutzer einloggen  &{Mustermax}[Email]  &{Mustermax}[Passwort]
    Registriere neues Geraet  &{Geraet}
    Schliesse Browser