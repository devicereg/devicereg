*** Settings ***
Library  Selenium2Library

*** Variables ***
${host}  http://127.0.0.1/

*** Keywords ***
Gehe zu Willkommensseite
    [Documentation]  Navigiere zur Willkommensseite
    Go To  http://127.0.0.1/

Pruefe, dass die Willkommensseite angezeigt wird
    [Documentation]  Für aktuelle Webseite wird geprüft, ob es sich um die Willkommensseite handelt
    Page Should Contain  Welcome to Your Vue.js App

*** Test Cases ***
Oeffne Browser
    Open Browser  ${host}

Starte die Anwendung
    Gehe zu Willkommensseite
    Pruefe, dass die Willkommensseite angezeigt wird
    Close Browser
