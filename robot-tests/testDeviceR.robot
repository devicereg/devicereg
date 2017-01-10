*** Settings ***
Resource  ucDeviceR.robot

*** Variables ***
${port}     80
${url}      localhost
${host}     ${url}:${port}/#/
${browser}  firefox

${user}  mustermax@htw-berlin.de
&{Mustermax}    Anrede=Herr  Vorname=Max  Nachname=Mustermann  Email=${user}  Sprache=Deutsch  Telefon=012 34 56 789  Branchenfamilie=Strom  Branchentyp=BT  Firmenname=Muster AG  Strasse=Musterstraße  Hausnummer=19  PLZ=12345  Stadt=Berlin  Land=Deutschland  Passwort=password  Geheimfrage=Geheim?  Antwort=Geheim!
&{Geraet}       Technologie=Rotamass  Geraetekategorie=katt  Seriennummer=M48348246  Geraetebezeichnung=Der Gerät  Prozessmedium=Wasser  Tagnummer=12  Kommentar=Micha stinkt

*** Keywords ***
Navigiere zu Datenschutzseite
    [Documentation]  Navigiere zur Datenschutzseite
    Click Link  xpath=//footer//a[text()="Datenschutz"]
    Pruefe, dass die Startseite verlassen wurde

Pruefe, dass die Datenschutzseite angezeigt wird
    [Documentation]  Für aktuelle Webseite wird geprüft, ob es sich um die Datenschutzseite handelt
    Page Should Contain Element  xpath=//h1[contains(text(), "Datenschutzerklärung")]

Pruefe, dass die Geraeteuebersicht angezeigt wird
    [Documentation]  Für aktuelle Webseite wird geprüft, ob es sich um die Geräteübersicht handelt
    Wait Until Page Contains Element  css=div#my-devices-component

Schliesse Browser
    Close Browser

Initialisiere Test
    Open Browser  ${host}  ${browser}
    Maximize Browser Window

*** Test Cases ***
#Registriere den Benutzer Max Musterman
#    Initialisiere Test
#   Registriere neuen Benutzer  &{Mustermax}
#   Schliesse Browser

#Einloggen des Benutzers Max Mustermann
  #  Initialisiere Test
   # Benutzer einloggen  &{Mustermax}[Email]  &{Mustermax}[Passwort]
    #Pruefe, dass die Geraeteuebersicht angezeigt wird
    #Schliesse Browser

Registriere das Geraet der Geraet
    Initialisiere Test
    Benutzer einloggen  &{Mustermax}[Email]  &{Mustermax}[Passwort]
    Registriere neues Geraet  &{Geraet}
    Schliesse Browser