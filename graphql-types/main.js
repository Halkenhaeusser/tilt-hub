const schema = {
  "$schema": "http://json-schema.org/draft-07/schema",
  "$id": "https://github.com/Transparency-Information-Language/schema",
  "type": "object",
  "title": "Root schema of a Transparency Information Language",
  "description": "This schema defines the Transparency Information Language",
  "examples": [
    {
      "meta": {
        "_id": "f1424f86-ca0f-4f0c-9438-43cc00509931",
        "name": "Green Company",
        "created": "2020-04-03T15:53:05.929588",
        "modified": "2020-04-03T15: 53: 05.929588",
        "version": 2,
        "language": "de",
        "status": "active",
        "url": "https://green-bikes.de/privacy",
        "_hash": "d732a793562a3e5dc57645a8"
      },
      "controller": {
        "name": "Green Company AG",
        "division": "Product line e-mobility",
        "address": "Wolfsburger Ring 2, 38440 Berlin",
        "country": "DE",
        "representative": {
          "name": "Jane Super",
          "email": "contact@greencompany.de",
          "phone": "0049 151 1234 5678"
        }
      },
      "dataProtectionOfficer": {
        "name": "Jane Super",
        "address": "Wolfsburger Ring 2, 38440 Berlin",
        "country": "DE",
        "email": "contact@greencompany.de",
        "phone": "0049 151 1234 5678"
      },
      "dataDisclosed": [
        {
          "_id": "f1424f86-ca0f-4f0c-9438-43cc00509931",
          "category": "E-mail address",
          "purposes": [
            {
              "purpose": "Marketing",
              "description": "Newsletter will be sent out once a month."
            }
          ],
          "legalBases": [
            {
              "reference": "GDPR-99-1-a",
              "description": "The data are processed on the basis of Art. 99 GDPR which states..."
            },
            {
              "reference": "BDSG-42-5",
              "description": "BDSG-42-5 refers to the processing of personal data within..."
            }
          ],
          "legitimateInterests": [
            {
              "exists": true,
              "reasoning": "There is an legitimate interest based on ... and is not overwritten because ..."
            }
          ],
          "recipients": [
            {
              "name": "Yellow Company AG",
              "division": "Product line e-mobility",
              "address": "Triana 123, 9999 Seville",
              "country": "ES",
              "representative": {
                "name": "Jane Super",
                "email": "contact@yellowcompany.de",
                "phone": "0049 151 1234 9876"
              },
              "category": "Marketing content provider"
            },
            {
              "category": "Responsible Statistical Institutes"
            }
          ],
          "storage": [
            {
              "temporal": [
                {
                  "description": "Creating backups.",
                  "ttl": "2005-08-09T18:31:42P3Y6M4DT12H30M17S"
                },
                {
                  "description": "Finishing ordering process.",
                  "ttl": "2020-08-09T18:31:42P3Y6M4DT12H30M17S"
                }
              ],
              "purposeConditional": [
                "Data is stored until the end of the ordering process."
              ],
              "legalBasisConditional": [
                "SGB-100-42"
              ],
              "aggregationFunction": "max"
            }
          ],
          "nonDisclosure": {
            "legalRequirement": false,
            "contractualRegulation": false,
            "obligationToProvide": false,
            "consequences": "If the data is not disclosed, the shipment cannot be delivered."
          }
        }
      ],
      "thirdCountryTransfers": [
        {
          "country": "ES",
          "adequacyDecision": {
            "available": true,
            "description": "An adequacy decision was made on the 23rd April 2020 by..."
          },
          "appropriateGuarantees": {
            "available": true,
            "description": "Here the appropriate guarantee was formulated by..."
          },
          "presenceOfEnforceableRightsAndEffectiveRemedies": {
            "available": true,
            "description": "These rights are given because of..."
          },
          "standardDataProtectionClause": {
            "available": true,
            "description": "The standard data protection clause which applies here can be found here: ..."
          }
        }
      ],
      "accessAndDataPortability": {
        "available": true,
        "description": "Data access is possible through...",
        "url": "https://green-bikes.de/access",
        "email": "access@greencompany.de",
        "identificationEvidences": [
          "ID card copy",
          "Email verification"
        ],
        "administrativeFee": {
          "amount": 0,
          "currency": "EUR"
        },
        "dataFormat": "json"
      },
      "sources": [
        {
          "_id": "f1423cc00509931",
          "dataCategory": "Creditworthiness",
          "sources": [
            {
              "description": "This information could be retrieved from...",
              "url": "https://blueCompany.org",
              "publiclyAvailable": false
            }
          ]
        }
      ],
      "rightToInformation": {
        "available": true,
        "description": "For the right to information please use this contact form and...",
        "url": "https://greencompany.org/rightToInformation",
        "email": "contact@greencompany.de",
        "identificationEvidences": [
          "ID card copy",
          "Email verification"
        ]
      },
      "rightToRectificationOrDeletion": {
        "available": true,
        "description": "For the right to rectification please use this contact form and...",
        "url": "https://greencompany.org/rights",
        "email": "contact@greencompany.de",
        "identificationEvidences": [
          "ID card copy",
          "Email verification"
        ]
      },
      "rightToDataPortability": {
        "available": false,
        "description": "Data portability is only possible when...",
        "url": "https://greencompany.org/rights",
        "email": "contact@greencompany.de",
        "identificationEvidences": [
          "ID card copy"
        ]
      },
      "rightToWithdrawConsent": {
        "available": true,
        "description": "For the right to withdraw consent please use this contact form and...",
        "url": "https://greencompany.org/rights",
        "email": "contact@greencompany.de",
        "identificationEvidences": [
          "Email verification"
        ]
      },
      "rightToComplain": {
        "available": true,
        "description": "For the right to complain please use this contact form and...",
        "url": "https://greencompany.org/rights",
        "email": "contact@greencompany.de",
        "identificationEvidences": [
          "ID card copy",
          "Email verification"
        ],
        "supervisoryAuthority": {
          "name": "Commissioner for Data Protection",
          "address": "Friedrichstrasse 219, 10969 Berlin",
          "country": "DE",
          "email": "mailbox@privacy-berlin.de",
          "phone": "0049 444 222 111"
        }
      },
      "automatedDecisionMaking": {
        "inUse": true,
        "logicInvolved": "The personal data are processed as follows...",
        "scopeAndIntendedEffects": "From processing follows..."
      },
      "changesOfPurpose": [
        {
          "description": "Due to techncial requirements...",
          "affectedDataCategories": [
            "Email adress",
            "Credit score"
          ],
          "plannedDateOfChange": "2020-08-20",
          "urlOfNewVersion": "https://greencomp.de/privacypolicy/2"
        }
      ]
    }
  ],
  "required": [
    "meta",
    "controller",
    "dataProtectionOfficer",
    "dataDisclosed",
    "thirdCountryTransfers",
    "accessAndDataPortability",
    "sources",
    "rightToInformation",
    "rightToRectificationOrDeletion",
    "rightToDataPortability",
    "rightToWithdrawConsent",
    "rightToComplain",
    "automatedDecisionMaking",
    "changesOfPurpose"
  ],
  "additionalProperties": true,
  "properties": {
    "meta": {
      "$id": "#/properties/meta",
      "type": "object",
      "title": "Meta",
      "description": "Meta information for the identification and verification of the document.",
      "examples": [
        {
          "_id": "f1424f86-ca0f-4f0c-9438-43cc00509931",
          "name": "Green Company",
          "created": "2020-04-03T15:53:05.929588",
          "modified": "2020-04-03T15: 53: 05.929588",
          "version": 2,
          "language": "de",
          "status": "active",
          "url": "https://green-bikes.de/privacy",
          "_hash": "d732a793562a3e5dc57645a8"
        }
      ],
      "required": [
        "_id",
        "name",
        "created",
        "modified",
        "version",
        "language",
        "status",
        "url",
        "_hash"
      ],
      "additionalProperties": true,
      "properties": {
        "_id": {
          "$id": "#/properties/meta/properties/_id",
          "type": "string",
          "title": "_id",
          "description": "The ID follows the database-specific implementation and does not have to be set in advance; but should offer as much entropy as possible for globally unique identifiers.",
          "examples": [
            "f1424f86-ca0f-4f0c-9438-43cc00509931"
          ]
        },
        "name": {
          "$id": "#/properties/meta/properties/name",
          "type": "string",
          "title": "Name",
          "description": "Name of the data controller.",
          "examples": [
            "Green Company"
          ]
        },
        "created": {
          "$id": "#/properties/meta/properties/created",
          "type": "string",
          "title": "Created",
          "description": "Creation date of the document as an ISO-8601 time code.",
          "pattern": "^([\\+-]?\\d{4}(?!\\d{2}\\b))((-?)((0[1-9]|1[0-2])(\\3([12]\\d|0[1-9]|3[01]))?|W([0-4]\\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\\d|[12]\\d{2}|3([0-5]\\d|6[1-6])))([T\\s]((([01]\\d|2[0-3])((:?)[0-5]\\d)?|24\\:?00)([\\.,]\\d+(?!:))?)?(\\17[0-5]\\d([\\.,]\\d+)?)?([zZ]|([\\+-])([01]\\d|2[0-3]):?([0-5]\\d)?)?)?)?$",
          "examples": [
            "2020-04-03T15:53:05.929588"
          ]
        },
        "modified": {
          "$id": "#/properties/meta/properties/modified",
          "type": "string",
          "title": "Modified",
          "description": "Last modified date of the document as an ISO-8601 time code.",
          "pattern": "^([\\+-]?\\d{4}(?!\\d{2}\\b))((-?)((0[1-9]|1[0-2])(\\3([12]\\d|0[1-9]|3[01]))?|W([0-4]\\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\\d|[12]\\d{2}|3([0-5]\\d|6[1-6])))([T\\s]((([01]\\d|2[0-3])((:?)[0-5]\\d)?|24\\:?00)([\\.,]\\d+(?!:))?)?(\\17[0-5]\\d([\\.,]\\d+)?)?([zZ]|([\\+-])([01]\\d|2[0-3]):?([0-5]\\d)?)?)?)?$",
          "examples": [
            "2020-04-03T15: 53: 05.929588"
          ]
        },
        "version": {
          "$id": "#/properties/meta/properties/version",
          "type": "integer",
          "title": "Version",
          "description": "This number serves to version documents of a controller.",
          "default": 1,
          "minimum": 1,
          "examples": [
            2
          ]
        },
        "language": {
          "$id": "#/properties/meta/properties/language",
          "type": "string",
          "title": "Language",
          "description": "All language abbreviation codes follow the established ISO 639-1 standard as identifiers for names of languages.",
          "pattern": "^(aa|ab|ae|af|ak|am|an|ar|as|av|ay|az|az|ba|be|bg|bh|bi|bm|bn|bo|br|bs|ca|ce|ch|co|cr|cs|cu|cv|cy|da|de|dv|dz|ee|el|en|eo|es|et|eu|fa|ff|fi|fj|fo|fr|fy|ga|gd|gl|gn|gu|gv|ha|he|hi|ho|hr|ht|hu|hy|hz|ia|id|ie|ig|ii|ik|io|is|it|iu|ja|jv|ka|kg|ki|kj|kk|kl|km|kn|ko|kr|ks|ku|kv|kw|ky|la|lb|lg|li|ln|lo|lt|lu|lv|mg|mh|mi|mk|ml|mn|mr|ms|mt|my|na|nb|nd|ne|ng|nl|nn|no|nr|nv|ny|oc|oj|om|or|os|pa|pi|pl|ps|pt|qu|rm|rn|ro|ru|rw|sa|sc|sd|se|sg|si|sk|sl|sm|sn|so|sq|sr|ss|st|su|sv|sw|ta|te|tg|th|ti|tk|tl|tn|to|tr|ts|tt|tw|ty|ug|uk|ur|uz|ve|vi|vo|wa|wo|xh|yi|yo|za|zh|zu)$",
          "default": "en",
          "examples": [
            "de"
          ]
        },
        "status": {
          "$id": "#/properties/meta/properties/status",
          "type": "string",
          "title": "Status",
          "description": "The status of an instance can be active or inactive depending on the policy's legal force.",
          "default": "active",
          "pattern": "^(active|inactive)$",
          "examples": [
            "active",
            "inactive"
          ]
        },
        "url": {
          "$id": "#/properties/meta/properties/url",
          "type": "string",
          "title": "Url",
          "description": "URL to this schema.",
          "format": "uri-reference",
          "examples": [
            "https://green-bikes.de/privacy"
          ]
        },
        "_hash": {
          "$id": "#/properties/meta/properties/_hash",
          "type": "string",
          "title": "_hash",
          "description": "The hash is based on one SHA256 calculation of the document.",
          "minLength": 64,
          "maxLength": 64,
          "examples": [
            "be81d309088dde861ab5fc4d62d4bbfe0aeef3e3baf2f5362c1086f451f0a1e7"
          ]
        }
      }
    },
    "controller": {
      "$id": "#/properties/controller",
      "type": "object",
      "title": "Controller",
      "description": "The responsible controller is defined in here.",
      "examples": [
        {
          "name": "Green Company AG",
          "division": "Product line e-mobility",
          "address": "Wolfsburger Ring 2, 38440 Berlin",
          "country": "DE",
          "representative": {
            "name": "Jane Super",
            "email": "contact@greencompany.de",
            "phone": "0049 151 1234 5678"
          }
        }
      ],
      "required": [
        "name",
        "address",
        "country",
        "representative"
      ],
      "additionalProperties": true,
      "properties": {
        "name": {
          "$id": "#/properties/controller/properties/name",
          "type": "string",
          "title": "Name",
          "description": "Name of the controller.",
          "examples": [
            "Green Company AG"
          ]
        },
        "division": {
          "$id": "#/properties/controller/properties/division",
          "type": "string",
          "title": "Division",
          "description": "Serves to differentiate between different areas of a company; particularly relevant for large companies.",
          "examples": [
            "Product line e-mobility"
          ]
        },
        "address": {
          "$id": "#/properties/controller/properties/address",
          "type": "string",
          "title": "Address",
          "description": "Address of the controller.",
          "examples": [
            "Wolfsburger Ring 2, 38440 Berlin"
          ]
        },
        "country": {
          "$id": "#/properties/controller/properties/country",
          "type": "string",
          "title": "Country",
          "description": "All country codes follow the established ones ISO 3166 country abbreviation standard.",
          "default": "DE",
          "minLength": 2,
          "maxLength": 2,
          "pattern": "^[A-Z][A-Z]$",
          "examples": [
            "DE"
          ]
        },
        "representative": {
          "$id": "#/properties/controller/properties/representative",
          "type": "object",
          "title": "Representative",
          "description": "The representative is a responsible real person that represents the controller.",
          "examples": [
            {
              "name": "Jane Super",
              "email": "contact@greencompany.de",
              "phone": "0049 151 1234 5678"
            }
          ],
          "required": [
            "name",
            "email"
          ],
          "additionalProperties": true,
          "properties": {
            "name": {
              "$id": "#/properties/controller/properties/representative/properties/name",
              "type": "string",
              "title": "Name",
              "description": "Name of the controller's representative.",
              "examples": [
                "Jane Super"
              ]
            },
            "email": {
              "$id": "#/properties/controller/properties/representative/properties/email",
              "type": "string",
              "title": "Email",
              "description": "Email address of the controller's representative.",
              "format": "email",
              "examples": [
                "contact@greencompany.de"
              ]
            },
            "phone": {
              "$id": "#/properties/controller/properties/representative/properties/phone",
              "type": "string",
              "title": "Phone",
              "description": "Phone number of the controller's representative.",
              "pattern": "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$",
              "examples": [
                "+49 151 1234 5678"
              ]
            }
          }
        }
      }
    },
    "dataProtectionOfficer": {
      "$id": "#/properties/dataProtectionOfficer",
      "type": "object",
      "title": "DataProtectionOfficer",
      "description": "The Data Protection Officer (DPO) of the controller.",
      "examples": [
        {
          "name": "Jane Super",
          "address": "Wolfsburger Ring 2, 38440 Berlin",
          "country": "DE",
          "email": "contact@greencompany.de",
          "phone": "0049 151 1234 5678"
        }
      ],
      "required": [
        "name",
        "address",
        "country",
        "email"
      ],
      "additionalProperties": true,
      "properties": {
        "name": {
          "$id": "#/properties/dataProtectionOfficer/properties/name",
          "type": "string",
          "title": "Name",
          "description": "The full name of the Data Protection Officer.",
          "examples": [
            "Jane Super"
          ]
        },
        "address": {
          "$id": "#/properties/dataProtectionOfficer/properties/address",
          "type": "string",
          "title": "Address",
          "description": "Address of the DPO.",
          "examples": [
            "Wolfsburger Ring 2, 38440 Berlin"
          ]
        },
        "country": {
          "$id": "#/properties/dataProtectionOfficer/properties/country",
          "type": "string",
          "title": "Country",
          "description": "The country in which the Data Protection officer is located at.",
          "minLength": 2,
          "maxLength": 2,
          "pattern": "^[A-Z][A-Z]$",
          "examples": [
            "DE"
          ]
        },
        "email": {
          "$id": "#/properties/dataProtectionOfficer/properties/email",
          "type": "string",
          "title": "Email",
          "description": "The contact email address of the Data Protection Officer.",
          "format": "email",
          "examples": [
            "contact@greencompany.de"
          ]
        },
        "phone": {
          "$id": "#/properties/dataProtectionOfficer/properties/phone",
          "type": "string",
          "title": "Phone",
          "description": "The phone number of the Data Protection Officer (may include country prefix).",
          "pattern": "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$",
          "examples": [
            "0049 151 1234 5678"
          ]
        }
      }
    },
    "dataDisclosed": {
      "$id": "#/properties/dataDisclosed",
      "type": "array",
      "title": "DataDisclosed",
      "description": "A detailed explanation about which data is disclosed in the processing tasks.",
      "examples": [
        [
          {
            "_id": "f1424f86-ca0f-4f0c-9438-43cc00509931",
            "category": "E-mail address",
            "purposes": [
              {
                "purpose": "Marketing",
                "description": "Newsletter will be sent out once a month."
              }
            ],
            "legalBases": [
              {
                "reference": "GDPR-99-1-a",
                "description": "The data are processed on the basis of Art. 99 GDPR which states..."
              },
              {
                "reference": "BDSG-42-5",
                "description": "BDSG-42-5 refers to the processing of personal data within..."
              }
            ],
            "legitimateInterests": [
              {
                "exists": true,
                "reasoning": "There is an legitimate interest based on ... and is not overwritten because ..."
              }
            ],
            "recipients": [
              {
                "name": "Yellow Company AG",
                "division": "Product line e-mobility",
                "address": "Triana 123, 9999 Seville",
                "country": "ES",
                "representative": {
                  "name": "Jane Super",
                  "email": "contact@yellowcompany.de",
                  "phone": "0049 151 1234 9876"
                },
                "category": "Marketing content provider"
              },
              {
                "category": "Responsible Statistical Institutes"
              }
            ],
            "storage": [
              {
                "temporal": [
                  {
                    "description": "Creating backups.",
                    "ttl": "2005-08-09T18:31:42P3Y6M4DT12H30M17S"
                  },
                  {
                    "description": "Finishing ordering process.",
                    "ttl": "2020-07-12T18:31:42P3Y6M4DT12H30M17S"
                  }
                ],
                "purposeConditional": [
                  "Data is stored until the end of the ordering process."
                ],
                "legalBasisConditional": [
                  "SGB-100-42"
                ],
                "aggregationFunction": "max"
              }
            ],
            "nonDisclosure": {
              "legalRequirement": false,
              "contractualRegulation": false,
              "obligationToProvide": false,
              "consequences": "If the data is not disclosed, the shipment cannot be delivered."
            }
          }
        ]
      ],
      "additionalItems": true,
      "items": {
        "anyOf": [
          {
            "$id": "#/properties/dataDisclosed/items/anyOf/0",
            "type": "object",
            "title": "AnyOf schema",
            "description": "The description of data disclosed.",
            "examples": [
              {
                "_id": "f1424f86-ca0f-4f0c-9438-43cc00509931",
                "category": "E-mail address",
                "purposes": [
                  {
                    "purpose": "Marketing",
                    "description": "Newsletter will be sent out once a month."
                  }
                ],
                "legalBases": [
                  {
                    "reference": "GDPR-99-1-a",
                    "description": "The data are processed on the basis of Art. 99 GDPR which states..."
                  },
                  {
                    "reference": "BDSG-42-5",
                    "description": "BDSG-42-5 refers to the processing of personal data within..."
                  }
                ],
                "legitimateInterests": [
                  {
                    "exists": true,
                    "reasoning": "There is an legitimate interest based on ... and is not overwritten because ..."
                  }
                ],
                "recipients": [
                  {
                    "name": "Yellow Company AG",
                    "division": "Product line e-mobility",
                    "address": "Triana 123, 9999 Seville",
                    "country": "ES",
                    "representative": {
                      "name": "Jane Super",
                      "email": "contact@yellowcompany.de",
                      "phone": "0049 151 1234 9876"
                    },
                    "category": "Marketing content provider"
                  },
                  {
                    "category": "Responsible Statistical Institutes"
                  }
                ],
                "storage": [
                  {
                    "temporal": [
                      {
                        "description": "Creating backups.",
                        "ttl": "2005-08-09T18:31:42P3Y6M4DT12H30M17S"
                      },
                      {
                        "description": "Finishing ordering process.",
                        "ttl": "2020-08-09T18:31:42P3Y6M4DT12H30M17S"
                      }
                    ],
                    "purposeConditional": [
                      "Data is stored until the end of the ordering process."
                    ],
                    "legalBasisConditional": [
                      "SGB-100-42"
                    ],
                    "aggregationFunction": "max"
                  }
                ],
                "nonDisclosure": {
                  "legalRequirement": false,
                  "contractualRegulation": false,
                  "obligationToProvide": false,
                  "consequences": "If the data is not disclosed, the shipment cannot be delivered."
                }
              }
            ],
            "required": [
              "_id",
              "category",
              "purposes",
              "legalBases",
              "legitimateInterests",
              "recipients",
              "storage",
              "nonDisclosure"
            ],
            "additionalProperties": true,
            "properties": {
              "_id": {
                "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/_id",
                "type": "string",
                "title": "_id",
                "description": "The id of a data item that is disclosed. The id is necessary to distinguish several processing tasks of the same data item (locally unique ID that can be based on the database implementation).",
                "examples": [
                  "f1424f86-ca0f-4f0c-9438-43cc00509931"
                ]
              },
              "category": {
                "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/category",
                "type": "string",
                "title": "Category",
                "description": "The data (category) the data disclosed is referred to.",
                "examples": [
                  "E-mail address"
                ]
              },
              "purposes": {
                "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/purposes",
                "type": "array",
                "title": "Purposes",
                "description": "The purpose for which a data item is processed for.",
                "examples": [
                  [
                    {
                      "purpose": "Marketing",
                      "description": "Newsletter will be sent out once a month."
                    }
                  ]
                ],
                "additionalItems": true,
                "items": {
                  "anyOf": [
                    {
                      "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/purposes/items/anyOf/0",
                      "type": "object",
                      "title": "AnyOf schema for the purposes.",
                      "examples": [
                        {
                          "purpose": "Marketing",
                          "description": "Newsletter will be sent out once a month."
                        }
                      ],
                      "required": [
                        "purpose",
                        "description"
                      ],
                      "additionalProperties": true,
                      "properties": {
                        "purpose": {
                          "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/purposes/items/anyOf/0/properties/purpose",
                          "type": "string",
                          "title": "Purpose",
                          "description": "In this schema the purpose is specified (i.e. a headline or purpose category).",
                          "examples": [
                            "Marketing"
                          ]
                        },
                        "description": {
                          "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/purposes/items/anyOf/0/properties/description",
                          "type": "string",
                          "title": "Description",
                          "description": "This schema refers to an exact description of the purpose the data is processed for.",
                          "examples": [
                            "Newsletter will be sent out once a month."
                          ]
                        }
                      }
                    }
                  ],
                  "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/purposes/items"
                }
              },
              "legalBases": {
                "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/legalBases",
                "type": "array",
                "title": "LegalBases",
                "description": "An explanation about the legal bases for the processing of personal data disclosed.",
                "examples": [
                  [
                    {
                      "reference": "GDPR-99-1-a",
                      "description": "The data are processed on the basis of Art. 99 GDPR which states..."
                    },
                    {
                      "reference": "BDSG-42-5",
                      "description": "BDSG-42-5 refers to the processing of personal data within..."
                    }
                  ]
                ],
                "additionalItems": true,
                "items": {
                  "anyOf": [
                    {
                      "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/legalBases/items/anyOf/0",
                      "type": "object",
                      "title": "AnyOf schema for the legal bases of the data disclosed.",
                      "examples": [
                        {
                          "reference": "GDPR-99-1-a",
                          "description": "The data are processed on the basis of Art. 99 GDPR which states..."
                        }
                      ],
                      "required": [
                        "reference"
                      ],
                      "additionalProperties": true,
                      "properties": {
                        "reference": {
                          "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/legalBases/items/anyOf/0/properties/reference",
                          "type": "string",
                          "title": "Reference",
                          "description": "This field refers to the reference in legal regulations (laws, orders, declaration etc.). The format is set to uppercase letters for the legal text followed by hyphened numbers and lowercase letters for the exact location.",
                          "pattern": "^[A-Z]*([-]?[0-9]*|[a-z]*)*$",
                          "examples": [
                            "GDPR-99-1-a"
                          ]
                        },
                        "description": {
                          "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/legalBases/items/anyOf/0/properties/description",
                          "type": "string",
                          "title": "Description",
                          "description": "An explanation about the legal basis used.",
                          "examples": [
                            "The data are processed on the basis of Art. 99 GDPR which states..."
                          ]
                        }
                      }
                    }
                  ],
                  "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/legalBases/items"
                }
              },
              "legitimateInterests": {
                "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/legitimateInterests",
                "type": "array",
                "title": "LegitimateInterests",
                "description": "An explanation about the legitimate interests for the processing of data disclosed.",
                "examples": [
                  [
                    {
                      "exists": true,
                      "reasoning": "There is an legitimate interest based on ... and is not overwritten because ..."
                    }
                  ]
                ],
                "additionalItems": true,
                "items": {
                  "anyOf": [
                    {
                      "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/legitimateInterests/items/anyOf/0",
                      "type": "object",
                      "title": "AnyOf schema for legitimate interests.",
                      "examples": [
                        {
                          "exists": true,
                          "reasoning": "There is an legitimate interest based on ... and is not overwritten because ..."
                        }
                      ],
                      "additionalProperties": true,
                      "properties": {
                        "exists": {
                          "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/legitimateInterests/items/anyOf/0/properties/exists",
                          "type": "boolean",
                          "title": "Exists",
                          "description": "The legitimate interest only has to be stated if the processing is carried out in accordance with Art. 13 (1d). This field refers to the existence of such an interest.",
                          "default": false,
                          "examples": [
                            true,
                            false
                          ]
                        },
                        "reasoning": {
                          "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/legitimateInterests/items/anyOf/0/properties/reasoning",
                          "type": "string",
                          "title": "Reasoning",
                          "description": "If the legitimate interest has to be stated because the processing is carried out in accordance with Art. 13 (1d), it is described in here.",
                          "examples": [
                            "There is an legitimate interest based on ... and is not overwritten because ..."
                          ]
                        }
                      },
                      "if": {
                        "properties": {
                          "exists": {
                            "const": true
                          }
                        },
                        "required": [
                          "exists"
                        ]
                      },
                      "then": {
                        "required": [
                          "reasoning"
                        ]
                      }
                    }
                  ],
                  "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/legitimateInterests/items"
                }
              },
              "recipients": {
                "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/recipients",
                "type": "array",
                "title": "Recipients",
                "description": "An explanation about the recipients of the data disclosed.",
                "examples": [
                  [
                    {
                      "name": "Yellow Company AG",
                      "division": "Product line e-mobility",
                      "address": "Triana 123, 9999 Seville",
                      "country": "ES",
                      "representative": {
                        "name": "Jane Super",
                        "email": "contact@yellowcompany.de",
                        "phone": "0049 151 1234 9876"
                      },
                      "category": "Marketing content provider"
                    },
                    {
                      "category": "Responsible Statistical Institutes"
                    }
                  ]
                ],
                "additionalItems": true,
                "items": {
                  "anyOf": [
                    {
                      "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/recipients/items/anyOf/0",
                      "type": "object",
                      "title": "AnyOf schema if recipients",
                      "examples": [
                        {
                          "name": "Yellow Company AG",
                          "division": "Product line e-mobility",
                          "address": "Triana 123, 9999 Seville",
                          "country": "ES",
                          "representative": {
                            "name": "Jane Super",
                            "email": "contact@yellowcompany.de",
                            "phone": "0049 151 1234 9876"
                          },
                          "category": "Marketing content provider"
                        }
                      ],
                      "required": [
                        "category"
                      ],
                      "additionalProperties": true,
                      "properties": {
                        "name": {
                          "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/recipients/items/anyOf/0/properties/name",
                          "type": "string",
                          "title": "Name",
                          "description": "The name of the third party (recipient).",
                          "examples": [
                            "Yellow Company AG"
                          ]
                        },
                        "division": {
                          "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/recipients/items/anyOf/0/properties/division",
                          "type": "string",
                          "title": "Division",
                          "description": "The division of the third party (recipient) for structuring controllers into smaller entities.",
                          "examples": [
                            "Product line e-mobility"
                          ]
                        },
                        "address": {
                          "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/recipients/items/anyOf/0/properties/address",
                          "type": "string",
                          "title": "Address",
                          "description": "The address of the third party (recipient).",
                          "examples": [
                            "Triana 123, 9999 Seville"
                          ]
                        },
                        "country": {
                          "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/recipients/items/anyOf/0/properties/country",
                          "type": "string",
                          "title": "Country",
                          "description": "The country in which the recipient is located at. Attention: This explictly specifies third country transfers!",
                          "minLength": 2,
                          "maxLength": 2,
                          "pattern": "^[A-Z][A-Z]$",
                          "examples": [
                            "ES"
                          ]
                        },
                        "representative": {
                          "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/recipients/items/anyOf/0/properties/representative",
                          "type": "object",
                          "title": "Representative",
                          "description": "The representative of the third party (recipient).",
                          "examples": [
                            {
                              "name": "Jane Super",
                              "email": "contact@yellowcompany.de",
                              "phone": "0049 151 1234 9876"
                            }
                          ],
                          "required": [],
                          "additionalProperties": true,
                          "properties": {
                            "name": {
                              "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/recipients/items/anyOf/0/properties/representative/properties/name",
                              "type": "string",
                              "title": "Name",
                              "description": "The name of the representative of the third party (recipient).",
                              "examples": [
                                "Jane Super"
                              ]
                            },
                            "email": {
                              "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/recipients/items/anyOf/0/properties/representative/properties/email",
                              "type": "string",
                              "title": "Email",
                              "description": "The email address of the representative of the third party (recipient).",
                              "format": "email",
                              "examples": [
                                "contact@yellowcompany.de"
                              ]
                            },
                            "phone": {
                              "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/recipients/items/anyOf/0/properties/representative/properties/phone",
                              "type": "string",
                              "title": "Phone",
                              "description": "The phone number of the representative of the third party (recipient).",
                              "pattern": "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$",
                              "examples": [
                                "0049 151 1234 9876"
                              ]
                            }
                          }
                        },
                        "category": {
                          "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/recipients/items/anyOf/0/properties/category",
                          "type": "string",
                          "title": "Category",
                          "description": "The category of the the recipient.",
                          "examples": [
                            "Marketing content provider"
                          ]
                        }
                      }
                    },
                    {
                      "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/recipients/items/anyOf/1",
                      "type": "object",
                      "title": "Second anyOf",
                      "examples": [
                        {
                          "category": "Responsible Statistical Institutes"
                        }
                      ],
                      "required": [
                        "category"
                      ],
                      "additionalProperties": true,
                      "properties": {
                        "category": {
                          "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/recipients/items/anyOf/1/properties/category",
                          "type": "string",
                          "title": "Category",
                          "description": "This category has to be given, even if the controller is not mentioned explicitly.",
                          "examples": [
                            "Responsible Statistical Institutes"
                          ]
                        }
                      }
                    }
                  ],
                  "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/recipients/items"
                }
              },
              "storage": {
                "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/storage",
                "type": "array",
                "title": "Storage",
                "description": "In this section, the duration of storage or storage criteria are given.",
                "examples": [
                  [
                    {
                      "temporal": [
                        {
                          "description": "Creating backups.",
                          "ttl": "2005-08-09T18:31:42P3Y6M4DT12H30M17S"
                        },
                        {
                          "description": "Finishing ordering process.",
                          "ttl": "2020-08-09T18:31:42P3Y6M4DT12H30M17S"
                        }
                      ],
                      "purposeConditional": [
                        "Data is stored until the end of the ordering process."
                      ],
                      "legalBasisConditional": [
                        "SGB-100-42"
                      ],
                      "aggregationFunction": "max"
                    }
                  ]
                ],
                "additionalItems": true,
                "items": {
                  "anyOf": [
                    {
                      "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/storage/items/anyOf/0",
                      "type": "object",
                      "title": "First anyOf",
                      "examples": [
                        {
                          "temporal": [
                            {
                              "description": "Creating backups.",
                              "ttl": "2005-08-09T18:31:42P3Y6M4DT12H30M17S"
                            },
                            {
                              "description": "Finishing ordering process.",
                              "ttl": "2020-08-09T18:31:42P3Y6M4DT12H30M17S"
                            }
                          ],
                          "purposeConditional": [
                            "Data is stored until the end of the ordering process."
                          ],
                          "legalBasisConditional": [
                            "SGB-100-42"
                          ],
                          "aggregationFunction": "max"
                        }
                      ],
                      "required": [
                        "aggregationFunction"
                      ],
                      "additionalProperties": true,
                      "properties": {
                        "temporal": {
                          "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/storage/items/anyOf/0/properties/temporal",
                          "type": "array",
                          "title": "Temporal",
                          "description": "This schema serves to specify a temporal description of how long the data is stored and for what exactly.",
                          "examples": [
                            [
                              {
                                "description": "Creating backups.",
                                "ttl": "2005-08-09T18:31:42P3Y6M4DT12H30M17S"
                              },
                              {
                                "description": "Finishing ordering process.",
                                "ttl": "2020-08-09T18:31:42P3Y6M4DT12H30M17S"
                              }
                            ]
                          ],
                          "additionalItems": true,
                          "items": {
                            "anyOf": [
                              {
                                "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/storage/items/anyOf/0/properties/temporal/items/anyOf/0",
                                "type": "object",
                                "title": "First anyOf",
                                "examples": [
                                  {
                                    "description": "Creating backups.",
                                    "ttl": "2005-08-09T18:31:42P3Y6M4DT12H30M17S"
                                  }
                                ],
                                "required": [
                                  "description",
                                  "ttl"
                                ],
                                "additionalProperties": true,
                                "properties": {
                                  "description": {
                                    "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/storage/items/anyOf/0/properties/temporal/items/anyOf/0/properties/description",
                                    "type": "string",
                                    "title": "Description",
                                    "description": "The description why the data has to be stored..",
                                    "examples": [
                                      "Creating backups."
                                    ]
                                  },
                                  "ttl": {
                                    "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/storage/items/anyOf/0/properties/temporal/items/anyOf/0/properties/ttl",
                                    "type": "string",
                                    "title": "Ttl",
                                    "description": "The TTL (Time-to-Live) specifies the lifetime of this data (category). It follows the ISO 8601 for time spans.",
                                    "pattern": "^(\\d{4}(-\\d{2}(-\\d{2})?(?!:))?(T\\d{2}(:\\d{2}(:\\d{2})?(\\.\\d+)?)?)?(Z|([+,-]\\d{2}(:\\d{2})?))?)?P(([0-9]+([.,][0-9]*)?Y)?([0-9]+([.,][0-9]*)?M)?([0-9]+([.,][0-9]*)?D)?T?([0-9]+([.,][0-9]*)?H)?([0-9]+([.,][0-9]*)?M)?([0-9]+([.,][0-9]*)?S)?)|\\d{4}-?(0[1-9]|11|12)-?(?:[0-2]\\d|30|31)T((?:[0-1][0-9]|[2][0-3]):?(?:[0-5][0-9]):?(?:[0-5][0-9]|60)|2400|24:00)$",
                                    "examples": [
                                      "2005-08-09T18:31:42P3Y6M4DT12H30M17S"
                                    ]
                                  }
                                }
                              }
                            ],
                            "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/storage/items/anyOf/0/properties/temporal/items"
                          }
                        },
                        "purposeConditional": {
                          "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/storage/items/anyOf/0/properties/purposeConditional",
                          "type": "array",
                          "title": "PurposeConditional",
                          "description": "Specifies the purpose that requires data storage.",
                          "examples": [
                            [
                              "Data is stored until the end of the ordering process."
                            ]
                          ],
                          "additionalItems": true,
                          "items": {
                            "anyOf": [
                              {
                                "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/storage/items/anyOf/0/properties/purposeConditional/items/anyOf/0",
                                "type": "string",
                                "title": "AnyOf schema",
                                "examples": [
                                  "Data is stored until the end of the ordering process."
                                ]
                              }
                            ],
                            "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/storage/items/anyOf/0/properties/purposeConditional/items"
                          }
                        },
                        "legalBasisConditional": {
                          "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/storage/items/anyOf/0/properties/legalBasisConditional",
                          "type": "array",
                          "title": "LegalBasisConditional",
                          "description": "If the storage is required by law, the respective one has to specified in here.",
                          "examples": [
                            [
                              "SGB-100-42"
                            ]
                          ],
                          "additionalItems": true,
                          "items": {
                            "anyOf": [
                              {
                                "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/storage/items/anyOf/0/properties/legalBasisConditional/items/anyOf/0",
                                "type": "string",
                                "title": "First anyOf",
                                "pattern": "^[A-Z]*([-]?[0-9]*|[a-z]*)*$",
                                "examples": [
                                  "SGB-100-42"
                                ]
                              }
                            ],
                            "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/storage/items/anyOf/0/properties/legalBasisConditional/items"
                          }
                        },
                        "aggregationFunction": {
                          "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/storage/items/anyOf/0/properties/aggregationFunction",
                          "type": "string",
                          "title": "AggregationFunction",
                          "description": "The aggregation function describes the calculation basis when specifying several time intervals. For example, if there is storage for 2 weeks for technical reasons (e.g. backup), but there is a legally longer retention period, the maximum aggregation function (max) would be selected (standard case). Aggregation functions available: min, max, sum, avg",
                          "default": "max",
                          "enum": [
                            "min",
                            "max",
                            "sum",
                            "avg"
                          ],
                          "examples": [
                            "max"
                          ]
                        }
                      }
                    }
                  ],
                  "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/storage/items"
                }
              },
              "nonDisclosure": {
                "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/nonDisclosure",
                "type": "object",
                "title": "NonDisclosure",
                "description": "This schema refers to the necessity and consequences of non-disclosure of personal data. According to Art. 13 (2e), this refers to the information whether the provision of the personal data is required by law or contract or is required for the conclusion of a contract, whether the data subject is obliged to provide the personal data and the possible consequences of not providing it.",
                "examples": [
                  {
                    "legalRequirement": false,
                    "contractualRegulation": false,
                    "obligationToProvide": false,
                    "consequences": "If the data is not disclosed, the shipment cannot be delivered."
                  }
                ],
                "required": [
                  "legalRequirement",
                  "contractualRegulation",
                  "obligationToProvide",
                  "consequences"
                ],
                "additionalProperties": true,
                "properties": {
                  "legalRequirement": {
                    "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/nonDisclosure/properties/legalRequirement",
                    "type": "boolean",
                    "title": "LegalRequirement",
                    "description": "Is there a legal requirement to collect these data?",
                    "default": false,
                    "examples": [
                      false,
                      true
                    ]
                  },
                  "contractualRegulation": {
                    "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/nonDisclosure/properties/contractualRegulation",
                    "type": "boolean",
                    "title": "ContractualRegulation",
                    "description": "Is there a contractual regulation to collect these data?",
                    "default": false,
                    "examples": [
                      false,
                      true
                    ]
                  },
                  "obligationToProvide": {
                    "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/nonDisclosure/properties/obligationToProvide",
                    "type": "boolean",
                    "title": "ObligationToProvide",
                    "description": "Is there an obligation for the data subject to provide these data?",
                    "default": false,
                    "examples": [
                      false,
                      true
                    ]
                  },
                  "consequences": {
                    "$id": "#/properties/dataDisclosed/items/anyOf/0/properties/nonDisclosure/properties/consequences",
                    "type": "string",
                    "title": "Consequences",
                    "description": "Description of the consequences in the case of non-disclosure.",
                    "examples": [
                      "If the data is not disclosed, the shipment cannot be delivered."
                    ]
                  }
                }
              }
            }
          }
        ],
        "$id": "#/properties/dataDisclosed/items"
      }
    },
    "thirdCountryTransfers": {
      "$id": "#/properties/thirdCountryTransfers",
      "type": "array",
      "title": "ThirdCountryTransfers",
      "description": "This schema refers to the adequacy decisions of any third country transfers.",
      "examples": [
        [
          {
            "country": "ES",
            "adequacyDecision": {
              "available": true,
              "description": "An adequacy decision was made on the 23rd April 2020 by..."
            },
            "appropriateGuarantees": {
              "available": true,
              "description": "Here the appropriate guarantee was formulated by..."
            },
            "presenceOfEnforceableRightsAndEffectiveRemedies": {
              "available": true,
              "description": "These rights are given because of..."
            },
            "standardDataProtectionClause": {
              "available": true,
              "description": "The standard data protection clause which applies here can be found here: ..."
            }
          }
        ]
      ],
      "additionalItems": true,
      "items": {
        "anyOf": [
          {
            "$id": "#/properties/thirdCountryTransfers/items/anyOf/0",
            "type": "object",
            "title": "AnyOf schema",
            "examples": [
              {
                "country": "ES",
                "adequacyDecision": {
                  "available": true,
                  "description": "An adequacy decision was made on the 23rd April 2020 by..."
                },
                "appropriateGuarantees": {
                  "available": true,
                  "description": "Here the appropriate guarantee was formulated by..."
                },
                "presenceOfEnforceableRightsAndEffectiveRemedies": {
                  "available": true,
                  "description": "These rights are given because of..."
                },
                "standardDataProtectionClause": {
                  "available": true,
                  "description": "The standard data protection clause which applies here can be found here: ..."
                }
              }
            ],
            "required": [],
            "additionalProperties": true,
            "properties": {
              "country": {
                "$id": "#/properties/thirdCountryTransfers/items/anyOf/0/properties/country",
                "type": "string",
                "title": "Country",
                "description": "The country code of the third country.",
                "minLength": 2,
                "maxLength": 2,
                "pattern": "^[A-Z][A-Z]$",
                "examples": [
                  "ES"
                ]
              },
              "adequacyDecision": {
                "$id": "#/properties/thirdCountryTransfers/items/anyOf/0/properties/adequacyDecision",
                "type": "object",
                "title": "AdequacyDecision",
                "examples": [
                  {
                    "available": true,
                    "description": "An adequacy decision was made on the 23rd April 2020 by..."
                  }
                ],
                "if": {
                  "properties": {
                    "available": {
                      "const": true
                    }
                  },
                  "required": [
                    "available"
                  ]
                },
                "then": {
                  "required": [
                    "description"
                  ]
                },
                "additionalProperties": true,
                "properties": {
                  "available": {
                    "$id": "#/properties/thirdCountryTransfers/items/anyOf/0/properties/adequacyDecision/properties/available",
                    "type": "boolean",
                    "title": "Available",
                    "description": "Adequacy decision by the European commission exists?",
                    "default": false,
                    "examples": [
                      true,
                      false
                    ]
                  },
                  "description": {
                    "$id": "#/properties/thirdCountryTransfers/items/anyOf/0/properties/adequacyDecision/properties/description",
                    "type": "string",
                    "title": "Description",
                    "description": "Description of the adequacy decision by the European commission.",
                    "examples": [
                      "An adequacy decision was made on the 23rd April 2020 by..."
                    ]
                  }
                }
              },
              "appropriateGuarantees": {
                "$id": "#/properties/thirdCountryTransfers/items/anyOf/0/properties/appropriateGuarantees",
                "type": "object",
                "title": "AppropriateGuarantees",
                "description": "Suitable guarantees according to Art. 45",
                "examples": [
                  {
                    "available": true,
                    "description": "Here the appropriate guarantee was formulated by..."
                  }
                ],
                "if": {
                  "properties": {
                    "available": {
                      "const": true
                    }
                  },
                  "required": [
                    "available"
                  ]
                },
                "then": {
                  "required": [
                    "description"
                  ]
                },
                "additionalProperties": true,
                "properties": {
                  "available": {
                    "$id": "#/properties/thirdCountryTransfers/items/anyOf/0/properties/appropriateGuarantees/properties/available",
                    "type": "boolean",
                    "title": "Available",
                    "description": "Do suitable guarantees according to Art. 45 exist?",
                    "default": false,
                    "examples": [
                      true,
                      false
                    ]
                  },
                  "description": {
                    "$id": "#/properties/thirdCountryTransfers/items/anyOf/0/properties/appropriateGuarantees/properties/description",
                    "type": "string",
                    "title": "Description",
                    "description": "Description of suitable guarantees according to Art. 45",
                    "examples": [
                      "Here the appropriate guarantee was formulated by..."
                    ]
                  }
                }
              },
              "presenceOfEnforceableRightsAndEffectiveRemedies": {
                "$id": "#/properties/thirdCountryTransfers/items/anyOf/0/properties/presenceOfEnforceableRightsAndEffectiveRemedies",
                "type": "object",
                "title": "PresenceOfEnforceableRightsAndEffectiveRemedies",
                "description": "Presence of enforceable rights and effective remedies",
                "examples": [
                  {
                    "available": true,
                    "description": "These rights are given because of..."
                  }
                ],
                "if": {
                  "properties": {
                    "available": {
                      "const": true
                    }
                  },
                  "required": [
                    "available"
                  ]
                },
                "then": {
                  "required": [
                    "description"
                  ]
                },
                "additionalProperties": true,
                "properties": {
                  "available": {
                    "$id": "#/properties/thirdCountryTransfers/items/anyOf/0/properties/presenceOfEnforceableRightsAndEffectiveRemedies/properties/available",
                    "type": "boolean",
                    "title": "Available",
                    "description": "Presence of enforceable rights and effective remedies?",
                    "default": false,
                    "examples": [
                      true,
                      false
                    ]
                  },
                  "description": {
                    "$id": "#/properties/thirdCountryTransfers/items/anyOf/0/properties/presenceOfEnforceableRightsAndEffectiveRemedies/properties/description",
                    "type": "string",
                    "title": "Description",
                    "description": "Description of enforceable rights and effective remedies.",
                    "examples": [
                      "These rights are given because of..."
                    ]
                  }
                }
              },
              "standardDataProtectionClause": {
                "$id": "#/properties/thirdCountryTransfers/items/anyOf/0/properties/standardDataProtectionClause",
                "type": "object",
                "title": "StandardDataProtectionClause",
                "description": "Schema on Standard Data Protection clauses.",
                "examples": [
                  {
                    "available": true,
                    "description": "The standard data protection clause which applies here can be found here: ..."
                  }
                ],
                "if": {
                  "properties": {
                    "available": {
                      "const": true
                    }
                  },
                  "required": [
                    "available"
                  ]
                },
                "then": {
                  "required": [
                    "description"
                  ]
                },
                "additionalProperties": true,
                "properties": {
                  "available": {
                    "$id": "#/properties/thirdCountryTransfers/items/anyOf/0/properties/standardDataProtectionClause/properties/available",
                    "type": "boolean",
                    "title": "Available",
                    "description": "Does a standard data protection clause exist?",
                    "default": false,
                    "examples": [
                      true,
                      false
                    ]
                  },
                  "description": {
                    "$id": "#/properties/thirdCountryTransfers/items/anyOf/0/properties/standardDataProtectionClause/properties/description",
                    "type": "string",
                    "title": "Description",
                    "description": "An explanation about the standard data protection clause (may include link).",
                    "examples": [
                      "The standard data protection clause which applies here can be found here: ..."
                    ]
                  }
                }
              }
            }
          }
        ],
        "$id": "#/properties/thirdCountryTransfers/items"
      }
    },
    "accessAndDataPortability": {
      "$id": "#/properties/accessAndDataPortability",
      "type": "object",
      "title": "AccessAndDataPortability",
      "description": "Defining the right to access and data portability.",
      "examples": [
        {
          "available": true,
          "description": "Data access is possible through...",
          "url": "https://green-bikes.de/access",
          "email": "access@greencompany.de",
          "identificationEvidences": [
            "ID card copy",
            "Email verification"
          ],
          "administrativeFee": {
            "amount": 0,
            "currency": "EUR"
          },
          "dataFormat": "json"
        }
      ],
      "required": [
        "available"
      ],
      "additionalProperties": true,
      "properties": {
        "available": {
          "$id": "#/properties/accessAndDataPortability/properties/available",
          "type": "boolean",
          "title": "Available",
          "description": "The information is subject to the requirements of Art. 20 (right to data portability) GDPR.",
          "default": true,
          "examples": [
            true
          ]
        },
        "description": {
          "$id": "#/properties/accessAndDataPortability/properties/description",
          "type": "string",
          "title": "Description",
          "description": "Description of the requirements according to Art. 20 GDPR.",
          "examples": [
            "Data access is possible through...",
            "In the event that the requirements of Art. 20 Para. 1 GDPR are met, you have the right to store your data in a structured, common .."
          ]
        },
        "url": {
          "$id": "#/properties/accessAndDataPortability/properties/url",
          "type": "string",
          "title": "Url",
          "description": "URL to relevant resources such as access portals.",
          "format": "uri-reference",
          "examples": [
            "https://green-bikes.de/access"
          ]
        },
        "email": {
          "$id": "#/properties/accessAndDataPortability/properties/email",
          "type": "string",
          "title": "Email",
          "description": "Contact email address",
          "format": "email",
          "examples": [
            "access@greencompany.de"
          ]
        },
        "identificationEvidences": {
          "$id": "#/properties/accessAndDataPortability/properties/identificationEvidences",
          "type": "array",
          "title": "IdentificationEvidences",
          "description": "ID evidences",
          "examples": [
            [
              "ID card copy",
              "Email verification"
            ]
          ],
          "additionalItems": true,
          "items": {
            "anyOf": [
              {
                "$id": "#/properties/accessAndDataPortability/properties/identificationEvidences/items/anyOf/0",
                "type": "string",
                "title": "First anyOf",
                "examples": [
                  "ID card copy",
                  "Email verification"
                ]
              }
            ],
            "$id": "#/properties/accessAndDataPortability/properties/identificationEvidences/items"
          }
        },
        "administrativeFee": {
          "$id": "#/properties/accessAndDataPortability/properties/administrativeFee",
          "type": "object",
          "title": "AdministrativeFee",
          "description": "The fee that refers to several copies.",
          "examples": [
            {
              "amount": 0,
              "currency": "EUR"
            }
          ],
          "required": [
            "amount",
            "currency"
          ],
          "additionalProperties": true,
          "properties": {
            "amount": {
              "$id": "#/properties/accessAndDataPortability/properties/administrativeFee/properties/amount",
              "type": "number",
              "title": "Amount",
              "description": "The amount of money to be paid for a copy.",
              "default": 0,
              "examples": [
                0
              ]
            },
            "currency": {
              "$id": "#/properties/accessAndDataPortability/properties/administrativeFee/properties/currency",
              "type": "string",
              "title": "Currency",
              "description": "The currency in which the amount of money for one copy has to be provided acc. to ISO 4217.",
              "default": "EUR",
              "minLength": 3,
              "maxLength": 3,
              "examples": [
                "EUR"
              ]
            }
          }
        },
        "dataFormats": {
          "$id": "#/properties/accessAndDataPortability/properties/dataFormats",
          "type": "array",
          "title": "DataFormat",
          "description": "An explanation about the data format(s) the data is provided in.",
          "default": [
            "json"
          ],
          "examples": [
            "json",
            "xml"
          ],
          "items": {
            "anyOf": [
              {
                "$id": "#/properties/accessAndDataPortability/properties/dataFormats/items/anyOf/0",
                "type": "string",
                "title": "First anyOf",
                "examples": [
                  "json",
                  "xml"
                ]
              }
            ],
            "$id": "#/properties/accessAndDataPortability/properties/dataFormats/items"
          }
        }
      }
    },
    "sources": {
      "$id": "#/properties/sources",
      "type": "array",
      "title": "Sources",
      "description": "This duty to provide information is limited to the collection of personal data that does not take place from the data subject (Art. 14).",
      "examples": [
        [
          {
            "_id": "f1423cc00509931",
            "dataCategory": "Creditworthiness",
            "sources": [
              {
                "description": "This information could be retrieved from...",
                "url": "https://blueCompany.org",
                "publiclyAvailable": false
              }
            ]
          }
        ]
      ],
      "additionalItems": true,
      "items": {
        "anyOf": [
          {
            "$id": "#/properties/sources/items/anyOf/0",
            "type": "object",
            "title": "First anyOf",
            "examples": [
              {
                "_id": "f1423cc00509931",
                "dataCategory": "Creditworthiness",
                "sources": [
                  {
                    "description": "This information could be retrieved from...",
                    "url": "https://blueCompany.org",
                    "publiclyAvailable": false
                  }
                ]
              }
            ],
            "required": [
              "_id",
              "dataCategory",
              "sources"
            ],
            "additionalProperties": true,
            "properties": {
              "_id": {
                "$id": "#/properties/sources/items/anyOf/0/properties/_id",
                "type": "string",
                "title": "_id",
                "description": "This refers to an locally unique ID in an arbitrary but deterministic format.",
                "examples": [
                  "f1423cc00509931"
                ]
              },
              "dataCategory": {
                "$id": "#/properties/sources/items/anyOf/0/properties/dataCategory",
                "type": "string",
                "title": "DataCategory",
                "description": "The category the data refer to.",
                "examples": [
                  "Creditworthiness"
                ]
              },
              "sources": {
                "$id": "#/properties/sources/items/anyOf/0/properties/sources",
                "type": "array",
                "title": "Sources",
                "description": "Specify the source(s) where the data come from.",
                "examples": [
                  [
                    {
                      "description": "This information could be retrieved from...",
                      "url": "https://blueCompany.org",
                      "publiclyAvailable": false
                    }
                  ]
                ],
                "additionalItems": true,
                "items": {
                  "anyOf": [
                    {
                      "$id": "#/properties/sources/items/anyOf/0/properties/sources/items/anyOf/0",
                      "type": "object",
                      "title": "First anyOf",
                      "examples": [
                        {
                          "description": "This information could be retrieved from...",
                          "url": "https://blueCompany.org",
                          "publiclyAvailable": false
                        }
                      ],
                      "required": [
                        "description",
                        "url",
                        "publiclyAvailable"
                      ],
                      "additionalProperties": true,
                      "properties": {
                        "description": {
                          "$id": "#/properties/sources/items/anyOf/0/properties/sources/items/anyOf/0/properties/description",
                          "type": "string",
                          "title": "Description",
                          "description": "Description of the source the data is taken from.",
                          "examples": [
                            "This information could be retrieved from..."
                          ]
                        },
                        "url": {
                          "$id": "#/properties/sources/items/anyOf/0/properties/sources/items/anyOf/0/properties/url",
                          "type": "string",
                          "title": "Url",
                          "description": "URL (reference) where the data is taken from.",
                          "format": "uri-reference",
                          "examples": [
                            "https://blueCompany.org"
                          ]
                        },
                        "publiclyAvailable": {
                          "$id": "#/properties/sources/items/anyOf/0/properties/sources/items/anyOf/0/properties/publiclyAvailable",
                          "type": "boolean",
                          "title": "PubliclyAvailable",
                          "description": "Are these data publicly available?",
                          "default": false,
                          "examples": [
                            false,
                            true
                          ]
                        }
                      }
                    }
                  ],
                  "$id": "#/properties/sources/items/anyOf/0/properties/sources/items"
                }
              }
            }
          }
        ],
        "$id": "#/properties/sources/items"
      }
    },
    "rightToInformation": {
      "$id": "#/properties/rightToInformation",
      "type": "object",
      "title": "RightToInformation",
      "description": "Refers to the right of information.",
      "examples": [
        {
          "available": true,
          "description": "For the right to information please use this contact form and...",
          "url": "https://greencompany.org/rightToInformation",
          "email": "contact@greencompany.de",
          "identificationEvidences": [
            "ID card copy",
            "Email verification"
          ]
        }
      ],
      "if": {
        "properties": {
          "available": {
            "const": true
          }
        },
        "required": [
          "available"
        ]
      },
      "then": {
        "required": [
          "description"
        ]
      },
      "additionalProperties": true,
      "properties": {
        "available": {
          "$id": "#/properties/rightToInformation/properties/available",
          "type": "boolean",
          "title": "Available",
          "description": "Possibility available?",
          "default": true,
          "examples": [
            true
          ]
        },
        "description": {
          "$id": "#/properties/rightToInformation/properties/description",
          "type": "string",
          "title": "Description",
          "description": "Description of the right.",
          "examples": [
            "For the right to information please use this contact form and..."
          ]
        },
        "url": {
          "$id": "#/properties/rightToInformation/properties/url",
          "type": "string",
          "title": "Url",
          "description": "URL to an online portal.",
          "format": "uri-reference",
          "examples": [
            "https://greencompany.org/rightToInformation"
          ]
        },
        "email": {
          "$id": "#/properties/rightToInformation/properties/email",
          "type": "string",
          "title": "Email",
          "format": "email",
          "examples": [
            "contact@greencompany.de"
          ]
        },
        "identificationEvidences": {
          "$id": "#/properties/rightToInformation/properties/identificationEvidences",
          "type": "array",
          "title": "IdentificationEvidences",
          "examples": [
            [
              "ID card copy",
              "Email verification"
            ]
          ],
          "additionalItems": true,
          "items": {
            "anyOf": [
              {
                "$id": "#/properties/rightToInformation/properties/identificationEvidences/items/anyOf/0",
                "type": "string",
                "title": "First anyOf",
                "examples": [
                  "ID card copy",
                  "Email verification"
                ]
              }
            ],
            "$id": "#/properties/rightToInformation/properties/identificationEvidences/items"
          }
        }
      }
    },
    "rightToRectificationOrDeletion": {
      "$id": "#/properties/rightToRectificationOrDeletion",
      "type": "object",
      "title": "RightToRectificationOrDeletion",
      "description": "This schema refers to the right to rectification or deletion (Art. 16 GDPR).",
      "examples": [
        {
          "available": true,
          "description": "For the right to rectification please use this contact form and...",
          "url": "https://greencompany.org/rights",
          "email": "contact@greencompany.de",
          "identificationEvidences": [
            "ID card copy",
            "Email verification"
          ]
        }
      ],
      "if": {
        "properties": {
          "available": {
            "const": true
          }
        },
        "required": [
          "available"
        ]
      },
      "then": {
        "required": [
          "description"
        ]
      },
      "additionalProperties": true,
      "properties": {
        "available": {
          "$id": "#/properties/rightToRectificationOrDeletion/properties/available",
          "type": "boolean",
          "title": "Available",
          "description": "Possibility available?",
          "default": true,
          "examples": [
            true,
            false
          ]
        },
        "description": {
          "$id": "#/properties/rightToRectificationOrDeletion/properties/description",
          "type": "string",
          "title": "Description",
          "examples": [
            "For the right to rectification please use this contact form and..."
          ]
        },
        "url": {
          "$id": "#/properties/rightToRectificationOrDeletion/properties/url",
          "type": "string",
          "title": "Url",
          "format": "uri-reference",
          "examples": [
            "https://greencompany.org/rights"
          ]
        },
        "email": {
          "$id": "#/properties/rightToRectificationOrDeletion/properties/email",
          "type": "string",
          "title": "Email",
          "format": "email",
          "examples": [
            "contact@greencompany.de"
          ]
        },
        "identificationEvidences": {
          "$id": "#/properties/rightToRectificationOrDeletion/properties/identificationEvidences",
          "type": "array",
          "title": "IdentificationEvidences",
          "examples": [
            [
              "ID card copy",
              "Email verification"
            ]
          ],
          "additionalItems": true,
          "items": {
            "anyOf": [
              {
                "$id": "#/properties/rightToRectificationOrDeletion/properties/identificationEvidences/items/anyOf/0",
                "type": "string",
                "title": "First anyOf",
                "examples": [
                  "ID card copy",
                  "Email verification"
                ]
              }
            ],
            "$id": "#/properties/rightToRectificationOrDeletion/properties/identificationEvidences/items"
          }
        }
      }
    },
    "rightToDataPortability": {
      "$id": "#/properties/rightToDataPortability",
      "type": "object",
      "title": "RightToDataPortability",
      "description": "The right to data portability as stated in Art. 20 GDPR.",
      "examples": [
        {
          "available": true,
          "description": "Data portability is only possible when...",
          "url": "https://greencompany.org/rights",
          "email": "contact@greencompany.de",
          "identificationEvidences": [
            "ID card copy"
          ]
        }
      ],
      "if": {
        "properties": {
          "available": {
            "const": true
          }
        },
        "required": [
          "available"
        ]
      },
      "then": {
        "required": [
          "description"
        ]
      },
      "additionalProperties": true,
      "properties": {
        "available": {
          "$id": "#/properties/rightToDataPortability/properties/available",
          "type": "boolean",
          "title": "Available",
          "default": true,
          "examples": [
            false,
            true
          ]
        },
        "description": {
          "$id": "#/properties/rightToDataPortability/properties/description",
          "type": "string",
          "title": "Description",
          "examples": [
            "Data portability is only possible when..."
          ]
        },
        "url": {
          "$id": "#/properties/rightToDataPortability/properties/url",
          "type": "string",
          "title": "Url",
          "format": "uri-reference",
          "examples": [
            "https://greencompany.org/rights"
          ]
        },
        "email": {
          "$id": "#/properties/rightToDataPortability/properties/email",
          "type": "string",
          "title": "Email",
          "format": "email",
          "examples": [
            "contact@greencompany.de"
          ]
        },
        "identificationEvidences": {
          "$id": "#/properties/rightToDataPortability/properties/identificationEvidences",
          "type": "array",
          "title": "IdentificationEvidences",
          "examples": [
            [
              "ID card copy"
            ]
          ],
          "additionalItems": true,
          "items": {
            "anyOf": [
              {
                "$id": "#/properties/rightToDataPortability/properties/identificationEvidences/items/anyOf/0",
                "type": "string",
                "title": "First anyOf",
                "examples": [
                  "ID card copy"
                ]
              }
            ],
            "$id": "#/properties/rightToDataPortability/properties/identificationEvidences/items"
          }
        }
      }
    },
    "rightToWithdrawConsent": {
      "$id": "#/properties/rightToWithdrawConsent",
      "type": "object",
      "title": "RightToWithdrawConsent",
      "description": "This schema refers to the right to withdraw consent.",
      "examples": [
        {
          "available": true,
          "description": "For the right to withdraw consent please use this contact form and...",
          "url": "https://greencompany.org/rights",
          "email": "contact@greencompany.de",
          "identificationEvidences": [
            "Email verification"
          ]
        }
      ],
      "if": {
        "properties": {
          "available": {
            "const": true
          }
        },
        "required": [
          "available"
        ]
      },
      "then": {
        "required": [
          "description"
        ]
      },
      "additionalProperties": true,
      "properties": {
        "available": {
          "$id": "#/properties/rightToWithdrawConsent/properties/available",
          "type": "boolean",
          "title": "Available",
          "default": true,
          "examples": [
            true,
            false
          ]
        },
        "description": {
          "$id": "#/properties/rightToWithdrawConsent/properties/description",
          "type": "string",
          "title": "Description",
          "examples": [
            "For the right to withdraw consent please use this contact form and..."
          ]
        },
        "url": {
          "$id": "#/properties/rightToWithdrawConsent/properties/url",
          "type": "string",
          "title": "Url",
          "format": "uri-reference",
          "examples": [
            "https://greencompany.org/rights"
          ]
        },
        "email": {
          "$id": "#/properties/rightToWithdrawConsent/properties/email",
          "type": "string",
          "title": "Email",
          "format": "email",
          "examples": [
            "contact@greencompany.de"
          ]
        },
        "identificationEvidences": {
          "$id": "#/properties/rightToWithdrawConsent/properties/identificationEvidences",
          "type": "array",
          "title": "IdentificationEvidences",
          "examples": [
            [
              "Email verification"
            ]
          ],
          "additionalItems": true,
          "items": {
            "anyOf": [
              {
                "$id": "#/properties/rightToWithdrawConsent/properties/identificationEvidences/items/anyOf/0",
                "type": "string",
                "title": "First anyOf",
                "examples": [
                  "Email verification"
                ]
              }
            ],
            "$id": "#/properties/rightToWithdrawConsent/properties/identificationEvidences/items"
          }
        }
      }
    },
    "rightToComplain": {
      "$id": "#/properties/rightToComplain",
      "type": "object",
      "title": "RightToComplain",
      "description": "This schema refers to the right to complain.",
      "examples": [
        {
          "available": true,
          "description": "For the right to complain please use this contact form and...",
          "url": "https://greencompany.org/rights",
          "email": "contact@greencompany.de",
          "identificationEvidences": [
            "ID card copy",
            "Email verification"
          ],
          "supervisoryAuthority": {
            "name": "Commissioner for Data Protection",
            "address": "Friedrichstrasse 219, 10969 Berlin",
            "country": "DE",
            "email": "mailbox@privacy-berlin.de",
            "phone": "0049 444 222 111"
          }
        }
      ],
      "if": {
        "properties": {
          "available": {
            "const": true
          }
        },
        "required": [
          "available"
        ]
      },
      "then": {
        "required": [
          "description",
          "supervisoryAuthority"
        ]
      },
      "additionalProperties": true,
      "properties": {
        "available": {
          "$id": "#/properties/rightToComplain/properties/available",
          "type": "boolean",
          "title": "Available",
          "description": "Is this right available?",
          "default": true,
          "examples": [
            true,
            false
          ]
        },
        "description": {
          "$id": "#/properties/rightToComplain/properties/description",
          "type": "string",
          "title": "Description",
          "examples": [
            "For the right to complain please use this contact form and..."
          ]
        },
        "url": {
          "$id": "#/properties/rightToComplain/properties/url",
          "type": "string",
          "title": "Url",
          "format": "uri-reference",
          "examples": [
            "https://greencompany.org/rights"
          ]
        },
        "email": {
          "$id": "#/properties/rightToComplain/properties/email",
          "type": "string",
          "title": "Email",
          "format": "email",
          "examples": [
            "contact@greencompany.de"
          ]
        },
        "identificationEvidences": {
          "$id": "#/properties/rightToComplain/properties/identificationEvidences",
          "type": "array",
          "title": "IdentificationEvidences",
          "examples": [
            [
              "ID card copy",
              "Email verification"
            ]
          ],
          "additionalItems": true,
          "items": {
            "anyOf": [
              {
                "$id": "#/properties/rightToComplain/properties/identificationEvidences/items/anyOf/0",
                "type": "string",
                "title": "First anyOf",
                "examples": [
                  "ID card copy",
                  "Email verification"
                ]
              }
            ],
            "$id": "#/properties/rightToComplain/properties/identificationEvidences/items"
          }
        },
        "supervisoryAuthority": {
          "$id": "#/properties/rightToComplain/properties/supervisoryAuthority",
          "type": "object",
          "title": "SupervisoryAuthority",
          "description": "Defines the supervisory authority that has to be contacted in order to complain about the data controller's practices.",
          "examples": [
            {
              "name": "Commissioner for Data Protection",
              "address": "Friedrichstrasse 219, 10969 Berlin",
              "country": "DE",
              "email": "mailbox@privacy-berlin.de",
              "phone": "0049 444 222 111"
            }
          ],
          "required": [
            "name"
          ],
          "additionalProperties": true,
          "properties": {
            "name": {
              "$id": "#/properties/rightToComplain/properties/supervisoryAuthority/properties/name",
              "type": "string",
              "title": "Name",
              "description": "Name of the supervisory authority.",
              "examples": [
                "Commissioner for Data Protection"
              ]
            },
            "address": {
              "$id": "#/properties/rightToComplain/properties/supervisoryAuthority/properties/address",
              "type": "string",
              "title": "Address",
              "description": "Adress of the supervisory authority.",
              "examples": [
                "Friedrichstrasse 219, 10969 Berlin"
              ]
            },
            "country": {
              "$id": "#/properties/rightToComplain/properties/supervisoryAuthority/properties/country",
              "type": "string",
              "title": "Country",
              "description": "Country of the supervisory authority.",
              "minLength": 2,
              "maxLength": 2,
              "examples": [
                "DE"
              ]
            },
            "email": {
              "$id": "#/properties/rightToComplain/properties/supervisoryAuthority/properties/email",
              "type": "string",
              "title": "Email",
              "description": "Email adress of the supervisory authority.",
              "format": "email",
              "examples": [
                "mailbox@privacy-berlin.de"
              ]
            },
            "phone": {
              "$id": "#/properties/rightToComplain/properties/supervisoryAuthority/properties/phone",
              "type": "string",
              "title": "Phone",
              "description": "Phone number of the supervisory authority.",
              "pattern": "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$",
              "examples": [
                "0049 444 222 111"
              ]
            }
          }
        }
      }
    },
    "automatedDecisionMaking": {
      "$id": "#/properties/automatedDecisionMaking",
      "type": "object",
      "title": "AutomatedDecisionMaking",
      "description": "Automated decision making and potentially involved logic. Does include profiling.",
      "examples": [
        {
          "inUse": true,
          "logicInvolved": "The personal data are processed as follows...",
          "scopeAndIntendedEffects": "From processing follows..."
        }
      ],
      "if": {
        "properties": {
          "inUse": {
            "const": true
          }
        },
        "required": [
          "inUse"
        ]
      },
      "then": {
        "required": [
          "logicInvolved",
          "scopeAndIntendedEffects"
        ]
      },
      "additionalProperties": true,
      "properties": {
        "inUse": {
          "$id": "#/properties/automatedDecisionMaking/properties/inUse",
          "type": "boolean",
          "title": "InUse",
          "description": "Is automated decision making in use?",
          "default": true,
          "examples": [
            true,
            false
          ]
        },
        "logicInvolved": {
          "$id": "#/properties/automatedDecisionMaking/properties/logicInvolved",
          "type": "string",
          "title": "LogicInvolved",
          "description": "An explanation about the logic involved to automated decision making.",
          "examples": [
            "The personal data are processed as follows..."
          ]
        },
        "scopeAndIntendedEffects": {
          "$id": "#/properties/automatedDecisionMaking/properties/scopeAndIntendedEffects",
          "type": "string",
          "title": "ScopeAndIntendedEffects",
          "description": "Scope and intended effects of such processing for the data subject.",
          "examples": [
            "From processing follows..."
          ]
        }
      }
    },
    "changesOfPurpose": {
      "$id": "#/properties/changesOfPurpose",
      "type": "array",
      "title": "ChangesOfPurpose",
      "description": "Notification of change of purpose.",
      "examples": [
        [
          {
            "description": "Due to technical requirements...",
            "affectedDataCategories": [
              "Email adress",
              "Credit score"
            ],
            "plannedDateOfChange": "2020-08-20",
            "urlOfNewVersion": "https://greencomp.de/privacypolicy/2"
          }
        ]
      ],
      "additionalItems": true,
      "items": {
        "anyOf": [
          {
            "$id": "#/properties/changesOfPurpose/items/anyOf/0",
            "type": "object",
            "title": "First anyOf",
            "examples": [
              {
                "description": "Due to technical requirements...",
                "affectedDataCategories": [
                  "Email adress",
                  "Credit score"
                ],
                "plannedDateOfChange": "2020-08-20",
                "urlOfNewVersion": "https://greencomp.de/privacypolicy/2"
              }
            ],
            "required": [],
            "additionalProperties": true,
            "properties": {
              "description": {
                "$id": "#/properties/changesOfPurpose/items/anyOf/0/properties/description",
                "type": "string",
                "title": "Description",
                "description": "Description of the change of purpose.",
                "examples": [
                  "Due to technical requirements..."
                ]
              },
              "affectedDataCategories": {
                "$id": "#/properties/changesOfPurpose/items/anyOf/0/properties/affectedDataCategories",
                "type": "array",
                "title": "AffectedDataCategories",
                "description": "Data categories that are affected from the change of purpose.",
                "examples": [
                  [
                    "Email adress",
                    "Credit score"
                  ]
                ],
                "additionalItems": true,
                "items": {
                  "anyOf": [
                    {
                      "$id": "#/properties/changesOfPurpose/items/anyOf/0/properties/affectedDataCategories/items/anyOf/0",
                      "type": "string",
                      "title": "First anyOf",
                      "examples": [
                        "Email adress",
                        "Credit score"
                      ]
                    }
                  ],
                  "$id": "#/properties/changesOfPurpose/items/anyOf/0/properties/affectedDataCategories/items"
                }
              },
              "plannedDateOfChange": {
                "$id": "#/properties/changesOfPurpose/items/anyOf/0/properties/plannedDateOfChange",
                "type": "string",
                "title": "PlannedDateOfChange",
                "description": "Specify the planned date to the changes as ISO 8601 string.",
                "pattern": "^([\\+-]?\\d{4}(?!\\d{2}\\b))((-?)((0[1-9]|1[0-2])(\\3([12]\\d|0[1-9]|3[01]))?|W([0-4]\\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\\d|[12]\\d{2}|3([0-5]\\d|6[1-6])))([T\\s]((([01]\\d|2[0-3])((:?)[0-5]\\d)?|24\\:?00)([\\.,]\\d+(?!:))?)?(\\17[0-5]\\d([\\.,]\\d+)?)?([zZ]|([\\+-])([01]\\d|2[0-3]):?([0-5]\\d)?)?)?)?$",
                "examples": [
                  "2020-08-20"
                ]
              },
              "urlOfNewVersion": {
                "$id": "#/properties/changesOfPurpose/items/anyOf/0/properties/urlOfNewVersion",
                "type": "string",
                "title": "UrlOfNewVersion",
                "description": "URL points to a document of the same as this one. That creates a chain of information requirements for seamless recognition of transparency information even over a longer period of time.",
                "examples": [
                  "https://greencomp.de/tilt/2"
                ]
              }
            }
          }
        ],
        "$id": "#/properties/changesOfPurpose/items"
      }
    }
  }
};
 
const { buildTypes } = require("json-schema-to-graphql-types");
const mapping = buildTypes(schema);
 
console.log({
  mapping
});