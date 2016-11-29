*** Settings ***
Library  Selenium2Library

*** Keywords ***
Gehe zu Startseite
    [Documentation]  Startseite wird aufgerufen
    Go To  ${host}

Pruefe, dass die Startseite angezeigt wird
    [Documentation]  Für aktuelle Webseite wird geprüft, ob es sich um die Startseite handelt
    Page Should Contain Element  css=div#homepage.container

Pruefe, dass die Startseite verlassen wurde
    [Documentation]  Für aktuelle Webseite wird geprüft, ob es sich nicht um die Startseite handelt
    Page Should Not Contain Element  css=div#homepage.container

Rufe die Funktion Benutzer registrieren auf
    [Documentation]  Das Kontaktformular wird eingeblendet
    Click Link  xpath=//div[@id="homepage"]//a[@href="/#/registrieren"]