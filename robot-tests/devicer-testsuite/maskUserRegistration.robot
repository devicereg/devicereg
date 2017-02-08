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
    Click Element  xpath=//select[@id="register_gender"]/option[contains(text(), "&{Benutzer}[Anrede]")]
	Input Text  id=register_prename  &{Benutzer}[Vorname]
	Input Text  id=register_surname  &{Benutzer}[Nachname]
	Click Element  id=register_language
    Click Element  xpath=//select[@id="register_language"]/option[contains(text(), "&{Benutzer}[Sprache]")]
	Input Text  id=register_phone  &{Benutzer}[Telefon]
	Click Element  id=register_industry_family
    Click Element  xpath=//select[@id="register_industry_family"]/option[contains(text(), "&{Benutzer}[Branchenfamilie]")]
	Input Text  id=register_industry_type  &{Benutzer}[Branchentyp]
	Input Text  id=register_company  &{Benutzer}[Firmenname]
	Input Text  id=register_street  &{Benutzer}[Strasse]
	Input Text  id=register_number  &{Benutzer}[Hausnummer]
	Input Text  id=register_zip  &{Benutzer}[PLZ]
	Input Text  id=register_city  &{Benutzer}[Stadt]
	Execute JavaScript  window.scrollTo(0, document.body.scrollHeight)
    Click Element  id=register_country
    Click Element  xpath=//select[@id="register_country"]/option[contains(text(), "&{Benutzer}[Land]")]
	Input Text  id=register_user  &{Benutzer}[Email]
	Input Text  id=register_user_repeat  &{Benutzer}[Email]
	Input Password  id=register_password  &{Benutzer}[Passwort]
	Input Password  id=register_password_repeat  &{Benutzer}[Passwort]
	Input Text  id=register_question  &{Benutzer}[Geheimfrage]
	Input Text  id=register_answer  &{Benutzer}[Antwort]
	Select Checkbox  id=register_agreement

Sende das Benutzerregistrierungsformular ab
    [Documentation]  Das Benutzerregistrierungsformular wird abgeschickt und der Benutzer wird angelegt
    #Execute JavaScript  window.scrollTo(0, document.body.scrollHeight)
    #Sleep  0.5
	#Click Button  xpath=//form[@id="user-registration-form"]//button[contains(@class, "btn-primary")]
	Submit Form
	Sleep  10