document.addEventListener("keydown", function(e) {
  if ((e.ctrlKey || e.metaKey) && e.key == "s") {
    e.preventDefault();

    let code = editor.getValue();
    game.execute(code);
    localStorage.setItem("code", code);
    
    logger.clear();
    logger.newLine();
  }
});

document.getElementById("run_button").onclick = function() {
  let code = editor.getValue();
  localStorage.setItem("code", code);
  game.execute(code);
};

document.getElementById("stop_button").onclick = function() {
  let code = editor.getValue();
  localStorage.setItem("code", code);
  game.execute("");
};

// document.getElementById("fullscreen_button").onclick = function() {
//   localStorage.setItem("code", code);
// };