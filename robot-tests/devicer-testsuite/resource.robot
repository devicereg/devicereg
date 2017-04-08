*** Settings ***
Library  Selenium2Library
Library  Collections

*** Variables ***
${port}     80
${host}     http://localhost
${url}      ${host}:${port}/#/
${browser}  chrome

${user}  mustermax@htw-berlin.de
&{Mustermax}    Anrede=Herr  Vorname=Max  Nachname=Mustermann  Email=${user}  Sprache=Deutsch  Telefon=012 34 56 789  Branchenfamilie=Andere  Branchentyp=BT  Firmenname=Muster AG  Strasse=Musterstraße  Hausnummer=19  PLZ=12345  Stadt=Berlin  Land=Deutschland  Passwort=password  Geheimfrage=Geheim?  Antwort=Geheim!
&{Geraet}       Technologie=Schwebekörper  Geraetekategorie=Durchfluss  Seriennummer=M48348246  Geraetebezeichnung=Der Geraet 0.1  Prozessmedium=Wasser  Tagnummer=12  Kommentar=Der Gerät muss noch viel lernen.