import safeParse from "safe-json-parse/callback";

safeParse('{ "x": 42 }', (err, result) => {
  if (err) console.error(err);
  else console.log(result);
});
