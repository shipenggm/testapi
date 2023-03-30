Feature: test

Background:
  * url "https://testapi-4slbtqvzcq-uc.a.run.app"

Scenario: test
  Given path '/questions'
  And header Accept = 'application/json'
  When method get
  * assert responseStatus == 200