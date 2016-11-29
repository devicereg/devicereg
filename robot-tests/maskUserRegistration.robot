*** Settings ***
Library  Selenium2Library

*** Keywords ***
Gehe zu Webseite Benutzer registrieren
    [Documentation]  Webseite "Benutzer registrieren" wird aufgerufen
    Go To  ${host}/registrieren

Pruefe, dass die Webseite Benutzer registrieren angezeigt wird
    [Documentation]  Für aktuelle Webseite wird geprüft, ob es sich um die Webseite "Benutzer registrieren" handelt
    Page Should Contain Element  css=.registration-header-titles

Pruefe, dass die Webseite Kontakte verlassen wurde
    [Documentation]  Für aktuelle Webseite wird geprüft, ob es sich nicht um die Webseite Kontakte handelt
    Page Should Not Contain Element  css=.registration-header-titles

Pruefe, dass das Benutzerregistrierungsformular angezeigt wird
    [Documentation]  Es wird geprüft, ob das Benutzerregistrierungsformular sichtbar ist
    Wait Until Page Contains Element  xpath=//form[@role="form"]

Rufe die Funktion Benutzer registrieren auf
    [Documentation]  Das Kontaktformular wird eingeblendet
    Click Element  xpath=//a[@data-toggle="modal" and @data-target="#new-contact"]

Gebe die Daten des neuen Benutzers ein
    [Documentation]  Ein neuer Benutzer wird angelegt.
    [Arguments]   ${Titel}  ${Vorname}  ${Nachname}  ${Email}  ${Website}  ${Organisation}  ${Strasse}  ${PLZ}  ${Wohnort}  ${Land}
	Pruefe, dass das Kontaktformular angezeigt wird
	Sleep  1
    Input Text  id=register_gender  ${Anrede}
	Input Text  id=register_prename  ${Vorname}
	Input Text  id=register_surname  ${Nachname}
	Input Text  id=register_language  ${Sprache}
	Input Text  id=register_phone  ${Telefon}
	Input Text  id=register_industry_family  ${Branchenfamilie}
	Input Text  id=register_industry_type  ${Branchentyp}
	Input Text  id=register_company  ${Unternehmen}
	Input Text  id=register_phone  ${Telefon}
	Input Text  id=register_street  ${Strasse}
	Input Text  id=register_number  ${Nummer}
	Input Text  id=register_zip  ${Postleitzahl}
	Input Text  id=register_city  ${Stadt}
	Input Text  id=register_country  ${Land}
	Input Text  id=register_user  ${Email}
	Input Text  id=register_user  ${Email}
	Input Text  id=register_user  ${Email}

	Select Checkbox  id=register_agreement

Sende das Benutzerregistrierungsformular ab
    [Documentation]  Das Benutzerregistrierungsformular wird abgeschickt und der Benutzer wird angelegt
	Submit Form