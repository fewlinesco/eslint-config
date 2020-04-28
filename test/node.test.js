const CLIEngine = require("eslint").CLIEngine;

const rules = require("../typescript");
const { code } = require("./code.js");

const cli = new CLIEngine({
  ...rules,
  fix: true,
});

describe("styling rules", () => {
  test("should add parentheses for an arrow function with one parameter", () => {
    const js = code`
    const func = param => console.log(params);
    `;
    const expected = code`
    const func = (param) => console.log(params);
    `;

    const report = cli.executeOnText(js);
    expect(report.results[0].output).toEqual(expected);
  });

  test("should always have dangling commas", () => {
    const js = code`
    const array = [
      "one mississipi",
      "two mississipi",
      "three mississipi",
      "four mississipi",
      "five mississipi"
    ];
    `;
    const expected = code`
    const array = [
      "one mississipi",
      "two mississipi",
      "three mississipi",
      "four mississipi",
      "five mississipi",
    ];
    `;

    const report = cli.executeOnText(js);
    expect(report.results[0].output).toEqual(expected);
  });
});

describe("import rules", () => {
  test("should order builtin packages before locale ones", () => {
    const js = code`
    const toto = require("./a");
    const fs = require("fs");

    toto();
    fs.readFileSync();
    `;
    const expected = code`
    const fs = require("fs");

    const toto = require("./a");

    toto();
    fs.readFileSync();
    `;

    const report = cli.executeOnText(js);
    expect(report.results[0].output).toEqual(expected);
  });
});
