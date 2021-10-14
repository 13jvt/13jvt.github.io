// modified from: https://stackoverflow.com/a/45387558
var logger = (function () {
  let logElement = document.getElementById("logger");
  let logPrefix = "<span class=\"log-prefix\">>&nbsp;</span>";

  console.oldLog = console.log;
  console.log = function () {
    let output = "<span class=\"log-", arg, i;
    
    for (i = 0; i < arguments.length; i++) {
      arg = arguments[i];
      output += (typeof arg) + "\">";

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

    logElement.innerHTML += output + "<br>";
    console.oldLog.apply(undefined, arguments);

    logElement.innerHTML += logPrefix;
    logElement.scrollIntoView(false);
  };

  console.oldError = console.error;
  console.error = function () {
    let errorOutput = "", arg, i;
    
    for (i = 0; i < arguments.length; i++) {
      arg = arguments[i];
      errorOutput += "<span class=\"log-error\">" + arg + "</span>&nbsp;";
    }

    logElement.innerHTML += errorOutput + "<br>";
    console.oldError.apply(undefined, arguments);

    logElement.innerHTML += logPrefix;
    logElement.scrollIntoView(false);
  };

  return {
    newLine: function() {
      logElement.innerHTML += logPrefix;
    },
    clear: function() {
      logElement.innerHTML = "";
    }
  };
})();

logger.newLine();