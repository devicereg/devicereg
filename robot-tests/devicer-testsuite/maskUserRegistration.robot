*** Settings ***
Resource  resource.robot

*** Keywords ***
Gehe zu Webseite Benutzer registrieren
    [Documentation]  Webseite "Benutzer registrieren" wird aufgerufen
    Go To  ${url}registrieren

Pruefe, dass die Webseite Benutzer registrieren angezeigt wird
    [Documentation]  Für aktuelle Webseite wird geprüft, ob es sich um die Webseite "Benutzer registrieren" handelt
    Wait Until Page Contains Element  xpath=//form[@id="user-registration-form"]

Pruefe, dass die Webseite Benutzer registrieren verlassen wurde
    [Documentation]  Für aktuelle Webseite wird geprüft, ob es sich nicht um die Webseite Kontakte handelt
    Wait Until Page Does Not Contain Element  xpath=//form[@id="user-registration-form"]

Pruefe, dass das Benutzerregistrierungsformular angezeigt wird
    [Documentation]  Es wird geprüft, ob das Benutzerregistrierungsformular sichtbar ist
    Wait Until Page Contains Element  xpath=//form[@id="user-registration-form"]

Rufe die Funktion Benutzer registrieren auf
    [Documentation]  Das Kontaktformular wird eingeblendet
    Click Element  xpath=//a[@data-toggle="modal" and @data-target="#new-contact"]

Gebe die Daten des neuen Benutzers ein
    [Documentation]  Ein neuer Benutzer wird angelegt.
    [Arguments]   &{Benutzer}
	Pruefe, dass das Benutzerregistrierungsformular angezeigt wird
    Click Element  id=register_gender
    Sleep  1
    Click Element  xpath=//select[@id="register_gender"]/option[contains(text(), "&{Benutzer}[Anrede]")]
    Sleep  1
	Input Text  id=register_prename  &{Benutzer}[Vorname]
    Sleep  1
	Input Text  id=register_surname  &{Benutzer}[Nachname]
    Sleep  1
	Click Element  id=register_language
    Sleep  1
    Click Element  xpath=//select[@id="register_language"]/option[contains(text(), "&{Benutzer}[Sprache]")]
    Sleep  1
	Input Text  id=register_phone  &{Benutzer}[Telefon]
    Sleep  1
	Click Element  id=register_industry_family
    Sleep  1
    Click Element  xpath=//select[@id="register_industry_family"]/option[contains(text(), "&{Benutzer}[Branchenfamilie]")]
    Sleep  1
	Input Text  id=register_industry_type  &{Benutzer}[Branchentyp]
    Sleep  1
	Input Text  id=register_company  &{Benutzer}[Firmenname]
    Sleep  1
	Input Text  id=register_street  &{Benutzer}[Strasse]
    Sleep  1
	Input Text  id=register_number  &{Benutzer}[Hausnummer]
    Sleep  1
	Input Text  id=register_zip  &{Benutzer}[PLZ]
    Sleep  1
	Input Text  id=register_city  &{Benutzer}[Stadt]
    Sleep  1
	Execute JavaScript  window.scrollTo(0, document.body.scrollHeight)
    Sleep  0.5
    Click Element  id=register_country
    Sleep  1
    Click Element  xpath=//select[@id="register_country"]/option[contains(text(), "&{Benutzer}[Land]")]
    Sleep  1
	Input Text  id=register_user  &{Benutzer}[Email]
    Sleep  1
	Input Text  id=register_user_repeat  &{Benutzer}[Email]
    Sleep  1
	Input Password  id=register_password  &{Benutzer}[Passwort]
    Sleep  1
	Input Password  id=register_password_repeat  &{Benutzer}[Passwort]
    Sleep  1
	Input Text  id=register_question  &{Benutzer}[Geheimfrage]
    Sleep  1
	Input Text  id=register_answer  &{Benutzer}[Antwort]
    Sleep  1
	Select Checkbox  id=register_agreement
    Sleep  1

Sende das Benutzerregistrierungsformular ab
    [Documentation]  Das Benutzerregistrierungsformular wird abgeschickt und der Benutzer wird angelegt
    #Execute JavaScript  window.scrollTo(0, document.body.scrollHeight)
    #Sleep  0.5
	#Click Button  xpath=//form[@id="user-registration-form"]//button[contains(@class, "btn-primary")]
	Submit Form
	Sleep  15