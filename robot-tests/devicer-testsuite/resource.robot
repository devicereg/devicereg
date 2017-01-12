*** Settings ***
Library  Selenium2Library

*** Variables ***
${port}     80
${url}      http://localhost
${host}     ${url}:${port}/#/
${browser}  firefox

${user}  mustermax@htw-berlin.de
&{Mustermax}    Anrede=Herr  Vorname=Max  Nachname=Mustermann  Email=${user}  Sprache=Deutsch  Telefon=012 34 56 789  Branchenfamilie=Strom  Branchentyp=BT  Firmenname=Muster AG  Strasse=Musterstraße  Hausnummer=19  PLZ=12345  Stadt=Berlin  Land=Deutschland  Passwort=password  Geheimfrage=Geheim?  Antwort=Geheim!
&{Geraet}       Technologie=Rotamass  Geraetekategorie=katt  Seriennummer=M48348246  Geraetebezeichnung=Der Gerät  Prozessmedium=Wasser  Tagnummer=12  Kommentar=Micha stinkt

*** Keywords ***
Initialisiere Test
    Open Browser  ${host}  ${browser}
    Maximize Browser Window

Schliesse Browser
    Close Browser