//////////////////DEBUG////////////////////
var type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
  type = "canvas"
}
PIXI.utils.sayHello(type);
//////////////////DEBUG////////////////////

//Aliases
var TextureCache = PIXI.TextureCache,
    Texture = PIXI.Texture,
    Application = PIXI.Application,
    Rectangle = PIXI.Rectangle,
    loader =  PIXI.loader,
    Sprite = PIXI.Sprite,
    AnimatedSprite = PIXI.extras.AnimatedSprite;


var SPRITE_W = 40;
var APP_W = 256;

var createApp = function(){
  var app = new Application(APP_W, APP_W, {backgroundColor : 0x1099bb});
  document.getElementById('main').appendChild(app.view);
  return app;
};

//EXAMPLE 1: LOAD SPRITE AND POSITION
var createSprite = function(i){
  //Create the `tileset` sprite from the texture
  var texture = TextureCache["sprites/poke.png"];
  //Create a rectangle object that defines the position and
  //size of the sub-image you want to extract from the texture
  var rectangle = new Rectangle(i * SPRITE_W, i * SPRITE_W, SPRITE_W, SPRITE_W); //x, y, w, h
  //Tell the texture to use that rectangular section
  texture.frame = rectangle;

  //Create the sprite from the texture
  var poke = new Sprite(texture);
  return poke;
};

//EXAMPLE 1: LOAD SPRITE AND POSITION
var setup = function() {
  //This code will run when the loader has finished loading the image
  var poke1 = createSprite(0);
  //Position the rocket sprite on the canvas
  poke1.x = APP_W/2 - SPRITE_W/2;
  poke1.y = APP_W/2 - SPRITE_W/2;

  app.stage.addChild(poke1);
};

//EXAMPLE 2: ANIMTE SPRITE
var createAnimation = function (){
  var images = ['sprites/frame_0016.png', 
  'sprites/frame_0017.png',
  'sprites/frame_0018.png',
  'sprites/frame_0019.png',
  'sprites/frame_0020.png',
  'sprites/frame_0021.png',
  'sprites/frame_0022.png',
  'sprites/frame_0023.png',
  'sprites/frame_0024.png',
  ];
  var textureArray = [];

  for (var i=0; i < images.length; i++) {
       var texture = Texture.fromImage(images[i]);
       textureArray.push(texture);
  };

  var anim = new AnimatedSprite(textureArray);

  /*
   * An AnimatedSprite inherits all the properties of a PIXI sprite
   * so you can change its position, its anchor, mask it, etc
   */
  anim.x = app.renderer.width / 2;
  anim.y = app.renderer.height / 2;
  anim.anchor.set(0.5);
  anim.animationSpeed = 0.2;
  anim.play();

  app.stage.addChild(anim);
}

var app = createApp();

//EXAMPLE 1: 
//loader
//  .add("poke.png")
//  .load(setup);


//EXAMPLE 2:
createAnimation();

