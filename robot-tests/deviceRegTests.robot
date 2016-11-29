*** Settings ***
Library  Selenium2Library

*** Variables ***
${port}  80
${host}  http://127.0.0.1:${port}/
${browser}  chrome

*** Keywords ***
Gehe zu Willkommensseite
    [Arguments]  ${host}
    [Documentation]  Navigiere zur Willkommensseite
    Go To  ${host}

Pruefe, dass die Willkommensseite angezeigt wird
    [Documentation]  Für aktuelle Webseite wird geprüft, ob es sich um die Willkommensseite handelt
    Page Should Contain  Willkommen bei DeviceR!
    #Page Should Contain Element  xpath=//div[@class="hello"]/h1[contains(text(),"Welcome")]

Pruefe, dass die Willkommensseite verlassen wurde
   [Documentation]  Für aktuelle Webseite wird geprüft, ob Willkommensseite nicht mehr angezeigt wird
   Page Should Not Contain  Willkommen bei DeviceR!


*** Test Cases ***
Oeffne Browser
    Open Browser  ${host}  ${browser}

Starte die Anwendung
    Gehe zu Willkommensseite  ${host}
    Pruefe, dass die Willkommensseite angezeigt wird


Schliesse Browser
    Close Browser
