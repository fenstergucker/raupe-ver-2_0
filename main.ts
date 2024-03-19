controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`unlock`)
    music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.InBackground)
    go = 1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`lock`)
    music.play(music.melodyPlayable(music.jumpDown), music.PlaybackMode.InBackground)
    go = 0
})
let go = 0
let mySprite: Sprite = null
music.setVolume(150)
mySprite = sprites.create(assets.image`lock`, SpriteKind.Player)
let closeWorm = 80
let openWorm = 0
pins.D5.servoWrite(closeWorm)
let textSprite = textsprite.create("<left> go <right> stop", 0, 1)
textSprite.setPosition(78, 8)
forever(function () {
    if (go > 0) {
        for (let index = 0; index < 2; index++) {
            pause(800)
            pins.D5.servoWrite(openWorm)
            pause(800)
            pins.D5.servoWrite(closeWorm)
        }
    }
})
