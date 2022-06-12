let mySprite: Sprite = null
scene.cameraFollowSprite(mySprite)
mySprite = sprites.create(assets.image`TURKEY`, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
controller.moveSprite(mySprite)
