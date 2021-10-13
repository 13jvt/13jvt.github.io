var editor = ace.edit("editor");
editor.setTheme("ace/theme/tomorrow_night");
editor.session.setMode("ace/mode/lua");
editor.setShowPrintMargin(false);
editor.setFontSize(16);

var demoCode = `--example game loop
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

end
`;

var code = localStorage.getItem("code");
if (code == null) {
  code = demoCode;
  localStorage.setItem("code", code);
}
else {
  console.log("restored previous session.");
}
editor.setValue(code, -1);

editor.resize();