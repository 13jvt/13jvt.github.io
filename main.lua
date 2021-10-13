
local pos = { x = 10, y = 10 }

function aroma.update()
  pos.x = pos.x + 10;
  pos.y = pos.y + 10;
end

function aroma.draw()
  aroma.graphics.print("Hello World!", pos.x, pos.y)
end

function aroma.keypressed(key_name, key_code)
  print("Key pressed:", key_name, key_code)
end