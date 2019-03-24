'use strict';
describe('tournament.person', function() {

  // Load the module that contains the component before each test
  beforeEach(module('tournament.person'));

  describe('controller', function(){
    var $httpBackend, ctrl;
    var personData =  {
      selectedPersonId : 2,
      contacts: {
      "2": {
          "contact_id": "2",
          "contact_type": "Individual",
          "contact_sub_type": "",
          "sort_name": "Steigerwald, Mike",
          "display_name": "Mike Steigerwald",
          "do_not_email": "0",
          "do_not_phone": "0",
          "do_not_mail": "0",
          "do_not_sms": "0",
          "do_not_trade": "0",
          "is_opt_out": "0",
          "legal_identifier": "",
          "external_identifier": "",
          "nick_name": "",
          "legal_name": "",
          "image_URL": "",
          "preferred_communication_method": "",
          "preferred_language": "en_US",
          "preferred_mail_format": "Both",
          "first_name": "Michael",
          "middle_name": "Francis",
          "last_name": "Steigerwald",
          "prefix_id": "3",
          "suffix_id": "",
          "formal_title": "",
          "communication_style_id": "1",
          "job_title": "",
          "gender_id": "2",
          "birth_date": "1961-02-04",
          "is_deceased": "0",
          "deceased_date": "",
          "household_name": "",
          "organization_name": "",
          "sic_code": "",
          "contact_is_deleted": "0",
          "current_employer": "",
          "address_id": "6",
          "street_address": "4041 12th Ave S",
          "supplemental_address_1": "",
          "supplemental_address_2": "",
          "supplemental_address_3": "",
          "city": "Minneapolis",
          "postal_code_suffix": "",
          "postal_code": "55407",
          "geo_code_1": "44.9293051",
          "geo_code_2": "-93.2572395",
          "state_province_id": "1022",
          "country_id": "1228",
          "phone_id": "8",
          "phone_type_id": "1",
          "phone": "6128751888",
          "email_id": "80",
          "email": "steiger@umich.edu",
          "on_hold": "0",
          "im_id": "",
          "provider_id": "",
          "im": "",
          "worldregion_id": "2",
          "world_region": "America South, Central, North and Caribbean",
          "languages": "English (United States)",
          "individual_prefix": "",
          "individual_suffix": "",
          "communication_style": "Formal",
          "gender": "Male",
          "state_province_name": "Minnesota",
          "state_province": "MN",
          "country": "United States",
          "id": "2"
      }}};

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('people/people.json').respond(personData);
      //$routeParams.personId = personData.selectedPersonId;
      ctrl = $componentController('person');
    }));

    it('should fetch personData', function() {
      jasmine.addCustomEqualityTester(angular.equals);
      expect(ctrl.people).toEqual({});
      $httpBackend.flush();
      expect(ctrl.people).toEqual(personData);
    });

  });
});