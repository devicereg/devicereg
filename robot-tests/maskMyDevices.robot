*** Settings ***
Library  Selenium2Library

*** Keywords ***
Gehe zur Seite Geraeteuebersicht
    [Documentation]  Geraeteuebersicht wird aufgerufen
    Go To  ${host}my-devices
    Execute Javascript  window.localStorage.clear();

Pruefe, dass die Geraeteuebersicht angezeigt wird
    [Documentation]  Für aktuelle Webseite wird geprüft, ob es sich um die Geraeteuebersicht handelt
    Wait Until Page Contains Element  css=div#homepage

Pruefe, dass die Geraetuebersicht verlassen wurde
    [Documentation]  Für aktuelle Webseite wird geprüft, ob es sich nicht um die Geraeteuebersicht handelt
    Wait Until Page Does Not Contain Element  css=div#homepage

Pruefe, dass das Geraeteregistrierungsformular angezeigt wird
    [Documentation]  Es wird geprüft, ob das Geraeteregistrierungsformular sichtbar ist
    Wait Until Page Contains Element  xpath=//form[@id="device-registration-form"]

Rufe die Funktion Geraete hinzufuegen auf
    [Documentation]  Das Gerateformular wird eingeblendet
    Click Element  xpath=//a[@data-toggle="modal" and @data-target="#device-registration-modal" and @id="add-button"]

Gebe die Daten des neuen Geraetes ein
    [Documentation]  Ein neues Geraet wird angelegt.
    [Arguments]   &{Geraet}
    Sleep  1
	Pruefe, dass das Geraeteregistrierungsformular angezeigt wird
    Click Element  id=technology
    Click Element  xpath=//select[@id="technology"]/option[contains(text(), "&{Geraet}[Technologie]")]
    Click Element  id=category
    Click Element  xpath=//select[@id="category"]/option[contains(text(), "&{Geraet}[Geraetekategorie]")]
	Input Text  id=serialnumber  &{Geraet}[Seriennummer]
	Input Text  id=devicelabel  &{Geraet}[Geraetebezeichnung]
	Click Element  id=procmedium
    Click Element  xpath=//select[@id="procmedium"]/option[contains(text(), "&{Geraet}[Prozessmedium]")]
	Input Text  id=tag  &{Geraet}[Tagnummer]
	Input Text  id=comment  &{Geraet}[Kommentar]

Sende das Geraeteregistrierungsformular ab
    [Documentation]  Das Geraeteregistrierungsformular wird abgeschickt und das Geraet wird angelegt
    #Execute JavaScript  window.scrollTo(0, document.body.scrollHeight)
    #Sleep  0.5
	#Click Button  xpath=//form[@id="user-registration-form"]//button[contains(@class, "btn-primary")]
	Submit Form

Pruefe, dass das Geraet in der Geraeteuebersicht angezeigt wird
    [Documentation]  Es wird geprueft, ob das Geraet in der Geraeteuebersicht angezeigt wird
    [Arguments]  ${Geraetebezeichnung}
    Reload Page
    Wait Until Page Contains Element  xpath=//tr/td[text()="${Geraetebezeichnung}"]