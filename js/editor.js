var editor = (function() {
  // ace config
  ace.require("ace/ext/language_tools");
  let aceEditor = ace.edit("editor");
  aceEditor.session.setMode("ace/mode/lua");
  aceEditor.setTheme("ace/theme/monokai");
  // editor.setTheme("ace/theme/twillight");
  aceEditor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
  });
  aceEditor.setShowPrintMargin(false);
  aceEditor.setFontSize(16);

  // persistent code
  // localStorage.setItem("code", "");
  let code = localStorage.getItem("code");
  if (!code) {
    code = `--example game loop
  local position = { x = 290, y = 280 }
  local origin = { x = 290, y = 230 }
  local time = 0

  function aroma.update(dt)
      time = time + dt
      position.x = origin.x + 50 * math.sin(time);
      position.y = origin.y + 50 * math.cos(time);
  end

  function aroma.draw()
      aroma.graphics.print("Hello World!", position.x, position.y)
  end

  function aroma.keypressed (key_name, key_code)
      print("key pressed: "..key_name)
  end
  `;
    localStorage.setItem("code", code);
  }
  else {
    console.log("restored previous session.");
  }
  aceEditor.setValue(code, -1);
  aceEditor.getSession().getUndoManager().reset();

  return aceEditor;
})();