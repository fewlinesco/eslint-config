/**
 * removes automatically the spaces before the lines depending on the first line
 * makes for a simpler way of writing blocks of codes
 */
function code(strings) {
  let lines = strings[0].split("\n");

  if (lines[0] === "") {
    lines = lines.slice(1);
  }
  const [, spaces] = lines[0].match(/(^\s*)(.*)/);
  return lines
    .map((string) => {
      return string.replace(spaces, "");
    })
    .join("\n");
}

module.exports = { code };
