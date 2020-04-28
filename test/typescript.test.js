const CLIEngine = require("eslint").CLIEngine;

const rules = require("../typescript");
const { code } = require("./code");

const cli = new CLIEngine({
  ...rules,
  fix: true,
});

describe("function return typing", () => {
  test("should complain that a function has no return type", () => {
    const ts = code`
    function add(x: number, y: number) {
      return x + y;
    }
    add(1, 2);
    `;

    const report = cli.executeOnText(ts);
    const firstMessage = report.results[0].messages[0];
    expect(report.errorCount).toBe(1);
    expect(firstMessage.ruleId).toBe(
      "@typescript-eslint/explicit-function-return-type",
    );
    expect(firstMessage.message).toBe("Missing return type on function.");
  });

  test("shouldn't have to type functions inside of a map", () => {
    const ts = code`
    const strings: Array<string> = [
      "one",
      "two",
      "three",
    ];

    strings.map(string => console.log(string));
    `;

    const report = cli.executeOnText(ts);
    expect(report.errorCount).toBe(0);
  });
});

describe("import rules", () => {
  test("should order builtin packages before locale ones with a newline", () => {
    const ts = code`
    import toto from "./a";
    import fs from "fs";

    fs.readFileSync();
    function test() {
      toto();
    }
    `;
    const expected = code`
    import fs from "fs";

    import toto from "./a";

    fs.readFileSync();
    function test() {
      toto();
    }
    `;

    const report = cli.executeOnText(ts);
    expect(report.results[0].output).toEqual(expected);
  });

  test("should order alphabetically", () => {
    const ts = code`
    import b from "./b";
    import c from "./c";
    import a from "./a";

    a();
    b();
    c();
    `;
    const expected = code`
    import a from "./a";
    import b from "./b";
    import c from "./c";

    a();
    b();
    c();
    `;

    const report = cli.executeOnText(ts);
    expect(report.results[0].output).toEqual(expected);
  });
});
