// modified from: https://stackoverflow.com/a/45387558
(function (logger) {
  console.oldLog = console.log;
  console.log = function () {
    var output = "<span class=\"log-", arg, i;
    
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

    logger.innerHTML += output + "<br>";
    console.oldLog.apply(undefined, arguments);

    logger.innerHTML += "<span class=\"log-prefix\">>&nbsp;</span>";
  };

  console.oldError = console.error;
  console.error = function () {
    var output = "", arg, i;
    
    for (i = 0; i < arguments.length; i++) {
      arg = arguments[i];
      output += "<span class=\"log-error\">" + arg + "</span>&nbsp;";
    }

    logger.innerHTML += output + "<br>";
    console.oldError.apply(undefined, arguments);

    logger.innerHTML += "<span class=\"log-prefix\">>&nbsp;</span>";
  };

  logger.innerHTML += "<span class=\"log-prefix\">>&nbsp;</span>";
})(document.getElementById("logger"));