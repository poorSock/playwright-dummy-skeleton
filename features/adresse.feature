Feature: KTX Adressen-Seite testen

@dummyTag
Scenario: Adress changes
    Given user "Thorsten" is logged in
    When he successfully changes his address
    Then hes back at the profil page