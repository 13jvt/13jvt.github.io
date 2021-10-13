var game = new Aroma("game_container", 640, 480, {
  loaded: function() {
    game.execute(editor.getValue());
  }
});