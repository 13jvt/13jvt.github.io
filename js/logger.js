(function (logger) {
  console.old = console.log;
  console.log = function () {
    var output = "<span class=\"log-prefix\">>&nbsp;</span>", arg, i;
    
    for (i = 0; i < arguments.length; i++) {
      arg = arguments[i];
      output += "<span class=\"log-" + (typeof arg) + "\">";

      if (
        typeof arg === "object" &&
        typeof JSON === "object" &&
        typeof JSON.stringify === "function"
      ) {
        output += JSON.stringify(arg);   
      } else {
        output += arg;   
      }

      output += "</span>&nbsp;";
    }

    logger.innerHTML += output + "<br>";
    console.old.apply(undefined, arguments);
  };
})(document.getElementById("logger"));

console.log("Hi!", {a:3, b:6}, 42, true);
console.log("Multiple", "arguments", "here");
console.log(null, undefined);
console.log("very very very very very very very very very very very long line that needs to break");
console.old("Eyy, that's the old and boring one.");