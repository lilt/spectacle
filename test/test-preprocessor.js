var chai = require("chai");
var should = chai.should();

var preprocessor = require("../app/lib/preprocessor");

var minimal = require("./minimal").minimal;
var simple = require("./simple").simple;

describe("preprocessor", function () {

  var spec = null;
  var processed = null;

  beforeEach(function () {
    spec = Object.assign({}, minimal);
    processed = preprocessor({
      specFile: __dirname + "/spec.json"
    }, spec);
  });

  describe("with minimal spec", function () {

    it("should retain initial values", function () {
      Object.assign({}, processed, minimal).should.deep.equal(processed);
    });

    it("should add 'tags'", function () {
      processed.should.have.property("tags");
      processed.tags.should.deep.equal([]);
    });

    it("should add 'showTagSummary'", function () {
      processed.should.have.property("showTagSummary", false);
    });
  });

  describe("with simple spec", function () {
    beforeEach(function () {
      spec = Object.assign({}, simple);
      processed = preprocessor({
        specFile: __dirname + "/spec.json"
      }, spec);
    });

    it("should allow multiple operations per http method", function () {
      processed.should.deep.equal({
        "swagger": "2.0",
        "info": {
          "title": "Simple spec",
          "version": "0.0.0"
        },
        "paths": {
          "/documents": {
            "put": [
              {
                "tags": [
                  "Documents"
                ],
                "path": "/documents",
                "method": "put",
                "parameters": [],
                "_show_requst_body_section": false
              },
              {
                "tags": [
                  "Documents"
                ],
                "path": "/documents",
                "method": "put",
                "parameters": [],
                "_show_requst_body_section": false
              }
            ]
          }
        },
        "x-spec-path": "/Users/jelstner/projects/github/spectacle/test/spec.json",
        "tags": [
          {
            "name": "Documents",
            "operations": [
              {
                "tags": [
                  "Documents"
                ],
                "path": "/documents",
                "method": "put",
                "parameters": [],
                "_show_requst_body_section": false
              },
              {
                "tags": [
                  "Documents"
                ],
                "path": "/documents",
                "method": "put",
                "parameters": [],
                "_show_requst_body_section": false
              }
            ]
          }
        ],
        "showTagSummary": false
      });
    });
  });
});
