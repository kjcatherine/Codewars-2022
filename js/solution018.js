//18. Abbreviate a two word name
function abbrevName(name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(0, 0));
  }
  return namesUpper.join(".");
}
abbrevName("catherine john");
