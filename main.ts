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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    score()
    overlap()
})
function overlap () {
    game.over(false)
}
let Hero: Sprite = null
let projectile: Sprite = null
hero()
game.onUpdateInterval(200, function () {
    projectial()
})
