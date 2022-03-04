/** The minimal OpenAPI spec with all required fields. */
exports.simple = simple = {
  swagger: "2.0",
  info: {
    title: "Simple spec",
    version: "0.0.0",
  },
  paths: {
    "/documents": {
      "put": [{
        tags: ["Documents"]
      }, {
        tags: ["Documents"]
      }]
    }
  },
};
