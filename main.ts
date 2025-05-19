enum RadioMessage {
    message1 = 49434
}
namespace SpriteKind {
    export const bpleft = SpriteKind.create()
    export const bpright = SpriteKind.create()
    export const blue_portal = SpriteKind.create()
    export const opright = SpriteKind.create()
    export const opleft = SpriteKind.create()
    export const orange_portal = SpriteKind.create()
    export const orange_portal_hitbox = SpriteKind.create()
    export const robo = SpriteKind.create()
    export const ghost = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.blue_portal, function (sprite, otherSprite) {
    scene.cameraFollowSprite(otherSprite)
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . d . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mySprite.follow(orange_portal, 10000000000)
    mySprite.setFlag(SpriteFlag.GhostThroughTiles, true)
    mySprite.setFlag(SpriteFlag.GhostThroughWalls, true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.orange_portal, function (sprite, otherSprite) {
    scene.cameraFollowSprite(mySprite)
    mySprite.follow(orange_portal, 0)
    mySprite.setFlag(SpriteFlag.GhostThroughTiles, false)
    mySprite.setFlag(SpriteFlag.GhostThroughWalls, false)
    mySprite.setImage(assets.image`Chell`)
    if (current_portal == 1) {
        mySprite.setImage(assets.image`Chell`)
    } else {
        mySprite.setImage(assets.image`Chell0`)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ghost, function (sprite, otherSprite) {
    Robo_path_good = true
    mySprite2.setKind(SpriteKind.robo)
    mySprite2.setFlag(SpriteFlag.Invisible, false)
    mySprite2.setFlag(SpriteFlag.GhostThroughTiles, false)
    mySprite2.setFlag(SpriteFlag.GhostThroughWalls, false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile`)
    tiles.setTileAt(tiles.getTileLocation(54, 8), assets.tile`myTile7`)
    tiles.setTileAt(tiles.getTileLocation(54, 9), assets.tile`myTile7`)
    tiles.setTileAt(tiles.getTileLocation(54, 7), assets.tile`myTile20`)
    tiles.setTileAt(tiles.getTileLocation(54, 10), assets.tile`myTile20`)
    tiles.setWallAt(tiles.getTileLocation(54, 8), true)
    tiles.setWallAt(tiles.getTileLocation(54, 9), true)
    timer.after(2500, function () {
        tiles.setCurrentTilemap(tilemap`elevator`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(14, 7))
        timer.after(2500, function () {
            game.showLongText("Glados: Welcome back old friend!", DialogLayout.Bottom)
            game.showLongText("I have a gift for you!", DialogLayout.Bottom)
            game.showLongText("Don't worry, it's not another cake.", DialogLayout.Bottom)
            game.showLongText("More like....", DialogLayout.Bottom)
            game.showLongText("DEATH", DialogLayout.Bottom)
            scene.cameraShake(15, 5000)
            mySprite2.follow(mySprite, 0)
            timer.after(5000, function () {
                scene.cameraShake(20, 10000)
                if_jumping = true
                tiles.setCurrentTilemap(tilemap`elevator destroy 1`)
                timer.after(1000, function () {
                    tiles.setCurrentTilemap(tilemap`elevator destroy 0`)
                    tiles.placeOnTile(mySprite, tiles.getTileLocation(15, 6))
                    timer.after(600, function () {
                        tiles.setCurrentTilemap(tilemap`elevator destroy 4`)
                        tiles.placeOnTile(mySprite, tiles.getTileLocation(18, 7))
                        timer.after(333, function () {
                            tiles.setCurrentTilemap(tilemap`elevator destroy 6`)
                            tiles.placeOnTile(mySprite, tiles.getTileLocation(20, 7))
                            timer.after(200, function () {
                                mySprite.setImage(img`
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    `)
                                tiles.setCurrentTilemap(tilemap`level6`)
                                tiles.placeOnTile(mySprite, tiles.getTileLocation(20, 7))
                                game.showLongText("Robo: Wake up Chell!", DialogLayout.Bottom)
                                scene.cameraShake(0, 5000)
                                tiles.setCurrentTilemap(tilemap`basement`)
                                if_jumping = false
                                tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 17))
                                tiles.placeOnTile(mySprite2, tiles.getTileLocation(5, 17))
                                mySprite.setImage(assets.image`Chell1`)
                                light.setBrightness(-5)
                                controller.moveSprite(mySprite, 0, 0)
                                timer.after(500, function () {
                                    controller.moveSprite(mySprite, 100, 0)
                                    mySprite.setImage(assets.image`Chell`)
                                    timer.after(250, function () {
                                        mySprite2.follow(mySprite)
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.robo, function (sprite, otherSprite) {
    Robo_path_good = true
})
browserEvents.Z.onEvent(browserEvents.KeyEvent.Pressed, function () {
    A_button()
})
function Select () {
    if (current_portal == 1) {
        current_portal = 2
        mySprite.setImage(assets.image`Chell0`)
    } else if (current_portal == 2) {
        current_portal = 1
        mySprite.setImage(assets.image`Chell`)
    }
}
browserEvents.RightShift.onEvent(browserEvents.KeyEvent.Pressed, function () {
    Select()
})
function Start () {
    let In_cutscene = false
    if (In_cutscene == false) {
    	
    }
}
function memorize_coords () {
    y = mySprite.y
    x = mySprite.x
}
function B_button () {
    if (current_portal == 1) {
        if (facing == 1) {
            blue_portal_left = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 8 8 . . . . . . . 
                . . . . . . 8 8 8 8 . . . . . . 
                . . . . . 8 8 9 9 8 8 . . . . . 
                . . . . . 8 8 9 9 8 8 . . . . . 
                . . . . . . 8 8 8 8 . . . . . . 
                . . . . . . . 8 8 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, -255, 0)
            blue_portal_left.setKind(SpriteKind.bpleft)
            blue_portal_left.setFlag(SpriteFlag.AutoDestroy, false)
            blue_portal_left.setFlag(SpriteFlag.DestroyOnWall, false)
        } else if (facing == 2) {
            blue_portal_right = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 8 8 . . . . . . . 
                . . . . . . 8 8 8 8 . . . . . . 
                . . . . . 8 8 9 9 8 8 . . . . . 
                . . . . . 8 8 9 9 8 8 . . . . . 
                . . . . . . 8 8 8 8 . . . . . . 
                . . . . . . . 8 8 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 255, 0)
            blue_portal_right.setFlag(SpriteFlag.DestroyOnWall, false)
            blue_portal_right.setFlag(SpriteFlag.AutoDestroy, false)
            blue_portal_right.setKind(SpriteKind.bpright)
        }
    } else {
        if (facing == 1) {
            orange_portal_left = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . 4 4 5 5 4 4 . . . . . 
                . . . . . 4 4 5 5 4 4 . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, -255, 0)
            orange_portal_left.setKind(SpriteKind.opleft)
            orange_portal_left.setFlag(SpriteFlag.DestroyOnWall, false)
            orange_portal_left.setFlag(SpriteFlag.AutoDestroy, false)
        } else if (facing == 2) {
            orange_portal_right = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . 4 4 5 5 4 4 . . . . . 
                . . . . . 4 4 5 5 4 4 . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 255, 0)
            orange_portal_right.setFlag(SpriteFlag.AutoDestroy, false)
            orange_portal_right.setFlag(SpriteFlag.DestroyOnWall, false)
            orange_portal_right.setKind(SpriteKind.opright)
        }
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    facing = 1
})
scene.onHitWall(SpriteKind.bpleft, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.blue_portal)
    sprite.setKind(SpriteKind.blue_portal)
    sprite.setVelocity(0, 0)
    sprite.setImage(img`
        .....8..........
        ....89..........
        ...899..........
        ...899..........
        ...899..........
        ...899..........
        ...899..........
        ...899..........
        ...899..........
        ...899..........
        ...899..........
        ...899..........
        ...899..........
        ...899..........
        ...899..........
        ...899..........
        ...899..........
        ...899..........
        ...899..........
        ...899..........
        ...899..........
        ...899..........
        ...899..........
        ...899..........
        ...899..........
        ...899..........
        ...899..........
        ...899..........
        ...899..........
        ...899..........
        ....89..........
        .....8..........
        `)
    sprite.y += -9
})
browserEvents.X.onEvent(browserEvents.KeyEvent.Pressed, function () {
    B_button()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(22, 8), assets.tile`myTile7`)
    tiles.setTileAt(tiles.getTileLocation(22, 9), assets.tile`myTile7`)
    tiles.setTileAt(tiles.getTileLocation(22, 7), assets.tile`myTile19`)
    tiles.setTileAt(tiles.getTileLocation(22, 10), assets.tile`myTile20`)
    tiles.setWallAt(tiles.getTileLocation(22, 8), true)
    tiles.setWallAt(tiles.getTileLocation(22, 9), true)
    timer.after(2500, function () {
        tiles.setCurrentTilemap(tilemap`elevator`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(14, 7))
        timer.after(2500, function () {
            tiles.setCurrentTilemap(tilemap`level 0`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 8))
        })
    })
})
scene.onHitWall(SpriteKind.bpright, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.blue_portal)
    sprite.y += -9
    sprite.setKind(SpriteKind.blue_portal)
    sprite.setVelocity(0, 0)
    sprite.setImage(img`
        ..........8.....
        ..........98....
        ..........998...
        ..........998...
        ..........998...
        ..........998...
        ..........998...
        ..........998...
        ..........998...
        ..........998...
        ..........998...
        ..........998...
        ..........998...
        ..........998...
        ..........998...
        ..........998...
        ..........998...
        ..........998...
        ..........998...
        ..........998...
        ..........998...
        ..........998...
        ..........998...
        ..........998...
        ..........998...
        ..........998...
        ..........998...
        ..........998...
        ..........998...
        ..........998...
        ..........98....
        ..........8.....
        `)
})
function A_button () {
    if_jumping = true
    timer.after(425, function () {
        if_jumping = false
    })
}
browserEvents.LeftShift.onEvent(browserEvents.KeyEvent.Pressed, function () {
    Select()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    facing = 2
})
sprites.onOverlap(SpriteKind.orange_portal, SpriteKind.Player, function (sprite, otherSprite) {
    scene.cameraFollowSprite(mySprite)
    mySprite.follow(orange_portal, 0)
    mySprite.setFlag(SpriteFlag.GhostThroughTiles, false)
    mySprite.setFlag(SpriteFlag.GhostThroughWalls, false)
    mySprite.setImage(assets.image`Chell`)
    if (current_portal == 1) {
        mySprite.setImage(assets.image`Chell`)
    } else {
        mySprite.setImage(assets.image`Chell0`)
    }
})
sprites.onOverlap(SpriteKind.blue_portal, SpriteKind.Player, function (sprite, otherSprite) {
    scene.cameraFollowSprite(sprite)
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . d . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mySprite.follow(orange_portal, 10000000)
    mySprite.setFlag(SpriteFlag.GhostThroughTiles, true)
    mySprite.setFlag(SpriteFlag.GhostThroughWalls, true)
})
scene.onHitWall(SpriteKind.opleft, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.orange_portal)
    sprite.setKind(SpriteKind.orange_portal)
    sprite.setVelocity(0, 0)
    sprite.setImage(img`
        .....4..........
        ....45..........
        ...455..........
        ...455..........
        ...455..........
        ...455..........
        ...455..........
        ...455..........
        ...455..........
        ...455..........
        ...455..........
        ...455..........
        ...455..........
        ...455..........
        ...455..........
        ...455..........
        ...455..........
        ...455..........
        ...455..........
        ...455..........
        ...455..........
        ...455..........
        ...455..........
        ...455..........
        ...455..........
        ...455..........
        ...455..........
        ...455..........
        ...455..........
        ...455..........
        ....45..........
        .....4..........
        `)
    sprite.y += -9
    sprites.destroyAllSpritesOfKind(SpriteKind.orange_portal_hitbox)
    orange_portal = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, orange_portal_left, 0, 0)
    orange_portal.setFlag(SpriteFlag.AutoDestroy, false)
    orange_portal.setFlag(SpriteFlag.GhostThroughWalls, true)
    orange_portal.setKind(SpriteKind.orange_portal_hitbox)
})
browserEvents.Space.onEvent(browserEvents.KeyEvent.Pressed, function () {
    A_button()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.blue_portal)
    sprites.destroyAllSpritesOfKind(SpriteKind.orange_portal)
    sprites.destroyAllSpritesOfKind(SpriteKind.orange_portal_hitbox)
})
browserEvents.Enter.onEvent(browserEvents.KeyEvent.Pressed, function () {
    Start()
})
sprites.onOverlap(SpriteKind.robo, SpriteKind.Player, function (sprite, otherSprite) {
    Robo_path_good = true
})
scene.onHitWall(SpriteKind.opright, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.orange_portal)
    sprites.destroyAllSpritesOfKind(SpriteKind.orange_portal_hitbox)
    sprite.y += -9
    sprite.setKind(SpriteKind.orange_portal)
    sprite.setVelocity(0, 0)
    sprite.setImage(img`
        ..........4.....
        ..........54....
        ..........554...
        ..........554...
        ..........554...
        ..........554...
        ..........554...
        ..........554...
        ..........554...
        ..........554...
        ..........554...
        ..........554...
        ..........554...
        ..........554...
        ..........554...
        ..........554...
        ..........554...
        ..........554...
        ..........554...
        ..........554...
        ..........554...
        ..........554...
        ..........554...
        ..........554...
        ..........554...
        ..........554...
        ..........554...
        ..........554...
        ..........554...
        ..........554...
        ..........54....
        ..........4.....
        `)
    orange_portal = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, orange_portal_right, 0, 0)
    orange_portal.setFlag(SpriteFlag.AutoDestroy, false)
    orange_portal.setFlag(SpriteFlag.GhostThroughWalls, true)
    orange_portal.setKind(SpriteKind.orange_portal_hitbox)
})
browserEvents.V.onEvent(browserEvents.KeyEvent.Pressed, function () {
    Select()
})
function Robo_Stuck_Check () {
    if (Robo_path_good == true) {
        Robo_path_good = false
    } else if (Robo_path_good == false) {
        mySprite2.setKind(SpriteKind.ghost)
        mySprite2.setFlag(SpriteFlag.Invisible, true)
        mySprite2.setFlag(SpriteFlag.GhostThroughTiles, true)
        mySprite2.setFlag(SpriteFlag.GhostThroughWalls, true)
    }
}
sprites.onOverlap(SpriteKind.ghost, SpriteKind.Player, function (sprite, otherSprite) {
    Robo_path_good = true
    mySprite2.setKind(SpriteKind.robo)
    mySprite2.setFlag(SpriteFlag.Invisible, false)
    mySprite2.setFlag(SpriteFlag.GhostThroughTiles, false)
    mySprite2.setFlag(SpriteFlag.GhostThroughWalls, false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile30`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 7))
    controller.moveSprite(mySprite, 0, 0)
    mySprite2.follow(mySprite, 0)
    mySprite2.x += 20
    mySprite2.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
browserEvents.Tab.onEvent(browserEvents.KeyEvent.Pressed, function () {
    Start()
})
let Chells_x = 0
let Robos_x = 0
let orange_portal_right: Sprite = null
let orange_portal_left: Sprite = null
let blue_portal_right: Sprite = null
let blue_portal_left: Sprite = null
let facing = 0
let x = 0
let y = 0
let if_jumping = false
let Robo_path_good = false
let orange_portal: Sprite = null
let current_portal = 0
let mySprite2: Sprite = null
let mySprite: Sprite = null
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 224
    export const ARCADE_SCREEN_HEIGHT = 164
}
mySprite = sprites.create(assets.image`Chell`, SpriteKind.Player)
mySprite2 = sprites.create(assets.image`Robo`, SpriteKind.robo)
mySprite2.follow(mySprite)
controller.moveSprite(mySprite, 100, 0)
current_portal = 1
tiles.setCurrentTilemap(tilemap`level 1`)
scene.setBackgroundImage(img`
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `)
scene.cameraFollowSprite(mySprite)
game.onUpdateInterval(5000, function () {
    Robo_Stuck_Check()
})
forever(function () {
    Robos_x = mySprite2.x
    Chells_x = mySprite.x
    characterAnimations.loopFrames(
    mySprite2,
    assets.animation`robo left0`,
    200,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    mySprite2,
    assets.animation`robo left`,
    200,
    characterAnimations.rule(Predicate.MovingLeft)
    )
})
forever(function () {
    if (if_jumping) {
        mySprite.setVelocity(0, -115)
    } else {
        mySprite.setVelocity(0, 95)
    }
})
