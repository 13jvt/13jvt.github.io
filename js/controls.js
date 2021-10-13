document.addEventListener("keydown", function(e) {
  if ((e.ctrlKey || e.metaKey) && e.key == "s") {
    e.preventDefault();
    let code = editor.getValue();
    game.execute(code);
    localStorage.setItem("code", code);
    // save to sessionStorage (tab) or localStorage (permanent)
  }
}, false);