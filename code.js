var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var player = createSprite(40, 370, 20, 20);
player.shapeColor = "blue";
var laser1 = createSprite(100, 325, 200, 15);
laser1.shapeColor = "red";
var laser2 = createSprite(300, 75, 200, 15);
laser2.shapeColor = "red";
var laser3 = createSprite(200, 200, 250, 15);
laser3.shapeColor = "red";
var diamond = createSprite(370, 35, 25, 25);
diamond.rotation = 40;
diamond.shapeColor = "cyan";
var edges = createEdgeSprites();
var mortes = 0;
var gamestate = "serve";
function draw() {
  background("white");
  player.velocityX = 0;
  player.velocityY = 0;
  player.bounceOff("edges");
  
  if (keyDown("enter") && gamestate=="serve") {
    laser1.velocityY = -3;
    laser2.velocityY = 3;
    laser3.rotationSpeed = 3;
    gamestate = "play";
  }
  if (gamestate=="play") {
    
  }
  laser1.bounceOff(bottomEdge);
  laser1.bounceOff(topEdge);
  laser2.bounceOff(bottomEdge);
  laser2.bounceOff(topEdge);
  if (player.isTouching(diamond)) {
    player.x = 40;
    player.y = 370;
    mortes = 0;
  }
  
  if (keyDown("up")) {
    player.velocityY = -4;
  }
  if (keyDown("down")) {
    player.velocityY = 4;
  }
  if (keyDown("left")) {
    player.velocityX = -4;
  }
  if (keyDown("right")) {
    player.velocityX = 4;
  }
  
  if (player.isTouching(laser1) || (player.isTouching(laser2) || player.isTouching(laser3))) {
    player.x = 40;
    player.y = 370;
    playSound("assets/category_hits/vibrant_game_hit_poof_dissolve_2_up.mp3", false);
    mortes = mortes+1;
  }
  fill("red");
  textSize(30);
  text(mortes, 200, 40);
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
