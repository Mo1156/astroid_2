function hero () {
    Hero = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 8 8 8 8 8 8 8 8 . . . . 
. . . 8 8 . . . . . . 8 8 . . . 
. . . 8 . . 2 . . 2 . . 8 . . . 
. . . 8 . . . . . . . . 8 . . . 
. . . 8 . 7 7 . . 7 7 . 8 . . . 
. . . 8 8 . . 8 8 . . 8 8 . . . 
. . . . 8 . . . . . . 8 . . . . 
. . . . 8 8 8 8 8 8 8 8 . . . . 
. . . . . . . . 7 . . . . . . . 
. . . . . . 7 7 7 7 7 . . . . . 
. . . . . . 7 . 7 . 7 . . . . . 
. . . . . e . 7 7 7 . . . . . . 
`, SpriteKind.Player)
    Hero.setPosition(76, 106)
    controller.moveSprite(Hero, 100, 0)
}
function score () {
    info.changeScoreBy(1)
}
function overlap () {
    game.over(false)
}
function projectial () {
    projectile = sprites.createProjectileFromSide(img`
. . . . . 7 7 7 7 7 7 . . . . . 
. . . 7 7 7 5 5 5 5 7 7 7 . . . 
. . 7 7 7 5 5 5 5 5 5 7 7 7 . . 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . . 7 . . . . . . 7 . . . . 
. . . . 7 . 2 . . 2 . 7 . . . . 
. . . . 7 . . . . . . 7 . . . . 
. . . 7 7 . . . . . . 7 7 . . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . 7 7 2 2 2 2 2 7 . . . . 
. . 7 . . . 7 7 7 7 7 . . . 7 . 
. . 7 7 . 7 . . 7 . . 7 . 7 7 . 
. . . 7 7 7 7 7 7 7 7 7 7 7 . . 
. . . . . . . . 7 . . . . . . . 
. . . . . . . 7 7 7 . . . . . . 
. . . . . . 7 . . . 7 . . . . . 
`, 0, 0)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    score()
})
let projectile: Sprite = null
let Hero: Sprite = null
hero()
overlap()
game.onUpdateInterval(200, function () {
    projectial()
})
