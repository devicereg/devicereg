*** Settings ***
Library  Selenium2Library

*** Keywords ***
Gehe zu Startseite
    [Documentation]  Startseite wird aufgerufen
    Go To  ${host}

Pruefe, dass die Startseite angezeigt wird
    [Documentation]  Für aktuelle Webseite wird geprüft, ob es sich um die Startseite handelt
    Page Should Contain Element  css=div#homepage.container-fluid

Pruefe, dass die Startseite verlassen wurde
    [Documentation]  Für aktuelle Webseite wird geprüft, ob es sich nicht um die Startseite handelt
    Page Should Not Contain Element  css=div#homepage.container-fluid

Rufe die Funktion Benutzer registrieren auf
    [Documentation]  Das Kontaktformular wird eingeblendet
    Click Link  xpath=//div[@id="homepage"]//a[@href="/#/registrieren"]

Pruefe, dass das Loginformular angezeigt wird
    [Documentation]  Es wird geprüft, ob das Loginformular sichtbar ist
    Page Should Contain Element  xpath=//form//input[@type="email"]  timeout=10

Gebe die Logindaten des Benutzers ein
    [Documentation]  Ein bestehender Benutzer wird eingeloggt.
    [Arguments]   ${Email}  ${Password}
    Input Text  xpath=//form//input[@id="login_email"]  ${Email}
    Input Text  xpath=//form//input[@id="login_password"]  ${Password}

Sende das Loginformular ab
    [Documentation]  Das Loginformular wird abgeschickt und der Benutzer wird eingeloggt
    Submit Form