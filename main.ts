namespace SpriteKind {
    export const Thing = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cool) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . f f f f f f . . . . . . . 
            . . f e e e 5 5 5 f . . . . . . 
            . . . f e 5 5 5 5 5 f f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f f 5 5 5 5 5 5 f . . 
            . . . . . . . f 5 5 5 5 5 f . . 
            . . . . . . . . f 5 5 5 5 5 f . 
            . . . . . . . . . f 5 5 5 5 f . 
            . . . . . . . . . . f 5 5 5 5 f 
            . . . . . . . . . . . f 5 5 5 f 
            . . . . . . . . . . . f 5 5 5 f 
            . . . . . . . . . . . . f 5 5 f 
            . . . . . . . . . . . . . f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, naut, 100, 0)
        animation.runImageAnimation(
        projectile,
        [img`
            . . . f f f f f f . . . . . . . 
            . . f e e e 5 5 5 f . . . . . . 
            . . . f e 5 5 5 5 5 f f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f f 5 5 5 5 5 5 f . . 
            . . . . . . . f 5 5 5 5 5 f . . 
            . . . . . . . . f 5 5 5 5 5 f . 
            . . . . . . . . . f 5 5 5 5 f . 
            . . . . . . . . . . f 5 5 5 5 f 
            . . . . . . . . . . . f 5 5 5 f 
            . . . . . . . . . . . f 5 5 5 f 
            . . . . . . . . . . . . f 5 5 f 
            . . . . . . . . . . . . . f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . f f f f . . . . 
            . . . . . . f f 5 5 5 5 f . . . 
            . . . . f f 5 5 5 5 5 5 f . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . f 5 5 5 5 5 5 f f . . . . . 
            . . f 5 5 5 5 5 f . . . . . . . 
            . f 5 5 5 5 5 f . . . . . . . . 
            f 5 5 5 5 5 f . . . . . . . . . 
            f 5 5 5 5 f . . . . . . . . . . 
            f 5 5 5 f . . . . . . . . . . . 
            f e 5 5 f . . . . . . . . . . . 
            f e e f . . . . . . . . . . . . 
            f e f . . . . . . . . . . . . . 
            . f . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f . . . . . . . . . . . . . 
            f 5 5 f . . . . . . . . . . . . 
            f 5 5 5 f . . . . . . . . . . . 
            f 5 5 5 f . . . . . . . . . . . 
            f 5 5 5 5 f . . . . . . . . . . 
            . f 5 5 5 5 f . . . . . . . . . 
            . f 5 5 5 5 5 f . . . . . . . . 
            . . f 5 5 5 5 5 f . . . . . . . 
            . . f 5 5 5 5 5 5 f f . . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f f 5 5 5 5 5 e f . . . 
            . . . . . . f 5 5 5 e e e f . . 
            . . . . . . . f f f f f f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . f . 
            . . . . . . . . . . . . . f e f 
            . . . . . . . . . . . . f e e f 
            . . . . . . . . . . . f 5 5 e f 
            . . . . . . . . . . . f 5 5 5 f 
            . . . . . . . . . . f 5 5 5 5 f 
            . . . . . . . . . f 5 5 5 5 5 f 
            . . . . . . . . f 5 5 5 5 5 f . 
            . . . . . . . f 5 5 5 5 5 f . . 
            . . . . . f f 5 5 5 5 5 5 f . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . f 5 5 5 5 5 5 f f . . . . 
            . . . f 5 5 5 5 f f . . . . . . 
            . . . . f f f f . . . . . . . . 
            `],
        100,
        true
        )
    }
})
function toRadians (num: number) {
    return num * Math.PI / 180
}
function updatePlayerSprite () {
    if (direction_x < 0) {
        naut.setImage(naut_rev_img)
    } else {
        naut.setImage(naut_img)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cool) {
        checkStartGrappling()
        timer.after(500, function () {
            hasStarted = true
        })
    }
})
info.onLifeZero(function () {
    if (cool) {
        game.splash("You tried, that's what counts!")
        game.over(false, effects.confetti)
    }
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    if (cool) {
        if (sprite == hook) {
            anchored = true
            anchor_time = game.runtime()
            anchor_dist_x = hook.x - naut.x
            anchor_dist_y = hook.y - naut.y
            anchor_ratio = _dist_y / _dist_x
            anchor_dir_x = direction_x
            hook.startEffect(effects.ashes, 50)
            hook.setVelocity(0, 0)
            naut.ax = 0
            naut.ay = 0
            naut.vx = 0
            naut.vy = 0
        }
    }
})
function updateGrappling () {
    if (grappling) {
        reelUp()
        swing()
        layoutDots()
    }
}
function reelUp () {
    if (anchored) {
        _dist_y = naut.y - hook.y
        _step_y = Math.min(_dist_y, reel_step)
        naut.y = naut.y - _step_y
    }
}
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (cool) {
        checkStopGrappling()
    }
})
function swing () {
    if (anchored) {
        naut.follow(hook)
    }
}
function checkStopGrappling () {
    if (grappling) {
        grappling = false
        anchored = false
        naut.ay = g
        hook.destroy()
        for (let value of dots) {
            value.destroy()
        }
        attach.destroy()
    }
}
function checkStartGrappling () {
    if (!(grappling)) {
        grappling = true
        hook = sprites.createProjectileFromSprite(hook_img, naut, hook_vx * direction_x, hook_vy)
        hook.setFlag(SpriteFlag.DestroyOnWall, false)
        hook.setFlag(SpriteFlag.AutoDestroy, false)
        dots = []
        for (let index = 0; index < 10; index++) {
            dots.unshift(sprites.create(dot_img, SpriteKind.Thing))
        }
        attach = sprites.create(img`
            . 
            `, SpriteKind.Player)
        attach.setPosition(naut.x, naut.y)
        layoutDots()
    }
}
function layoutDots () {
    _dist_x = hook.x - naut.x
    _dist_y = hook.y - naut.y
    _step_x = _dist_x / (dots.length + 1)
    _step_y = _dist_y / (dots.length + 1)
    _dot_x = _step_x
    _dot_y = _step_y
    for (let value2 of dots) {
        value2.setPosition(naut.x + _dot_x, naut.y + _dot_y)
        _dot_x += _step_x
        _dot_y += _step_y
    }
}
function sign (num: number) {
    if (num < 0) {
        return -1
    }
    return 1
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    hasStarted = false
    tiles.placeOnRandomTile(naut, assets.tile`tile18`)
})
let _dot_y = 0
let _dot_x = 0
let _step_x = 0
let attach: Sprite = null
let dots: Sprite[] = []
let _step_y = 0
let grappling = false
let anchor_dir_x = 0
let _dist_x = 0
let _dist_y = 0
let anchor_ratio = 0
let anchor_dist_y = 0
let anchor_dist_x = 0
let anchor_time = 0
let anchored = false
let hook: Sprite = null
let hasStarted = false
let projectile: Sprite = null
let mySprite: Sprite = null
let naut: Sprite = null
let naut_rev_img: Image = null
let naut_img: Image = null
let hook_img: Image = null
let dot_img: Image = null
let g = 0
let reel_step = 0
let hook_vy = 0
let hook_vx = 0
let direction_x = 0
let cool = false
cool = true
let level = 0
direction_x = 1
hook_vx = 400
hook_vy = -1000
reel_step = 1.5
g = 400
let swing_speed = 400
dot_img = img`
    7 7 
    7 7 
    `
hook_img = img`
    . . . f f f f f f . . . . . . . 
    . . f e e e 5 5 5 f . . . . . . 
    . . . f e 5 5 5 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 5 5 f . . . 
    . . . . . f f 5 5 5 5 5 5 f . . 
    . . . . . . . f 5 5 5 5 5 f . . 
    . . . . . . . . f 5 5 5 5 5 f . 
    . . . . . . . . . f 5 5 5 5 f . 
    . . . . . . . . . . f 5 5 5 5 f 
    . . . . . . . . . . . f 5 5 5 f 
    . . . . . . . . . . . f 5 5 5 f 
    . . . . . . . . . . . . f 5 5 f 
    . . . . . . . . . . . . . f f . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `
naut_img = img`
    . . . . . . . f f f f f . . . . 
    . . . . f f f e e e e e f . . . 
    . . . f d d e e e e d d d f . . 
    . . . c d b e e e d d d d d c . 
    . . . c d b e e d d d d d d c . 
    . f f . c f e e d f d d f d d c 
    f e f . . f e e d f d d f d d c 
    f e f . . f e e d d d d e e d c 
    f e f . . f f e e d c d d d f . 
    f e f . f e e e e e d f f f . . 
    . f f f e e e e e e e f . . . . 
    . . f f b e e e e e f f . . . . 
    . . f f d d c e e f f e f . . . 
    . . . . f f f c d d b d d f . . 
    . . . . . f f d d d c d d f . . 
    . . . . . . f f f f f f f . . . 
    `
naut_rev_img = naut_img.clone()
naut_rev_img.flipX()
tiles.setTilemap(tilemap`level_0`)
scene.setBackgroundImage(img`
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6668866666666686666666666666666666666666666886666666668666666666666666666666666666688666666666866666666666666666666666666668866666666686666666666666666666666666
    6888666666666886666666666666666666666686688866666666688666666666666666666666668668886666666668866666666666666666666666866888666666666886666666666666666666666686
    6686688666886688666688666666666666666688668668866688668866668866666666666666668866866886668866886666886666666666666666886686688666886688666688666666666666666688
    8888886686688688668688666666666666668868888888668668868866868866666666666666886888888866866886886686886666666666666688688888886686688688668688666666666666668868
    8888866688688888688886666666666666888866888886668868888868888666666666666688886688888666886888886888866666666666668888668888866688688888688886666666666666888866
    8888868888888868888866686666668886668886888886888888886888886668666666888666888688888688888888688888666866666688866688868888868888888868888866686666668886668886
    8888888888888668866888886688866688666888888888888888866886688888668886668866688888888888888886688668888866888666886668888888888888888668866888886688866688666888
    8888888888888688886688866866886688888888888888888888868888668886686688668888888888888888888886888866888668668866888888888888888888888688886688866866886688888888
    88c888888888888888888886886668868888888888c888888888888888888886886668868888888888c888888888888888888886886668868888888888c8888888888888888888868866688688888888
    88c8888888888888888888888c6668888888888888c8888888888888888888888c6668888888888888c8888888888888888888888c6668888888888888c8888888888888888888888c86688888888888
    88c8888888888888888888888cc668888888888888c8888888888888888888888cc668888888888888c8888888888888888888888cc668888888888888c8888888888888888888888cc8688888888888
    88c8888888fcc88888888ff88ccc88888888888888c8888888fcc88888888ff88ccc88888888888888c8888888fcc88888888ff88ccc88888888888888c8888888fcc88888888ff88ccc888888888888
    88c888888ffbcc888888bbf888cc88888888888888c888888fffcc888888fff888cc88888888888888c888888fffcc888888fff888cc88888888888888c888888fffcc888888fff888cc888888888888
    8cc888f88ff88ccc8f888bff88cc8888888888888cc888f88ff88ccc8f888bff88cc8888888888888cc888f88ff88ccc8f888bff88cc8888888888888cc888f88ff88ccc8f888bff88cc888888888888
    8cc888bf88f8bfcccff88bff88ccc888888888888cc888bf88f8bfcccff88bff88ccc888888888888cc888bf88f8bfcccff88bff88ccc888888888888cc888bf88f8bfcccff88bff88ccc88888888888
    8cc88bbffffbff8ccffbbbf8888cc888888888888cc88bbffffbff8ccffbbbf8888cc888888888888cc88bbffffbff8ccffbbbf8888cc888888888888cc88bbffffbff8ccffbbbf8888cc88888888888
    ccc888bffffbff8ccffbbff88fbccc88f8888888ccc888bffffbff8ccffbbff88fbccc88f8888888ccc888bffffbff8ccffbbff88fbccc88f8888888ccc888bffffbff8ccffbbff88fbccc88f8888888
    cccbb8bffffbfffcccfbbfffff8ccc88fff88888cccbb8bffffbfffcccfbbfffff8ccc88fff88888cccbb8bffffbfffcccfbbfffff8ccc88fff88888cccbb8bffffbfffcccfbbfffff8ccc88fff88888
    ccc8bbbffffbffffccfbbffffb8cccf8ff888888ccc8bbbffffbffffccfbbffffb8cccf8ff888888ccc8bbbffffbffffccfbbffffb8cccf8ff888888ccc8bbbffffbffffccfbbffffb8cccf8ff888888
    ccc8bbbfffbfffffcccbbffffbfcccffff88ff88ccc8bbbfffbfffffcccbbffffbfcccffff88ff88ccc8bbbfffbfffffcccbbffffbfcccffff88ff88ccc8bbbfffbfffffcccbbffffbfcccffff88ff88
    cccbbbbfffbffffffccbbffffbfccccffffbfff8cccbbbbfffbffffffccbbffffbfccccffffbfff8cccbbbbfffbffffffccbbffffbfccccffffbfff8cccbbbbfffbffffffccbbffffbfccccffffbfff8
    ccfbbbbffbbfffffffccffffbbfccccffffbffffccfbbbbffbbfffffffccffffbbfccccffffbffffccfbbbbffbbfffffffccffffbbfccccffffbffffccfbbbbffbbfffffffccffffbbfccccffffbffff
    ccffbbbbbfffffffffcccfffbfffcccffffbffffccffbbbbbfffffffffcccfffbfffcccffffbffffccffbbbbbfffffffffcccfffbfffcccffffbffffccffbbbbbfffffffffcccfffbfffcccffffbffff
    ccffbbbbffffffffffbccccbbfffcccffffbfffcccffbbbbffffffffffbccccbbfffcccffffbfffcccffbbbbffffffffffbccccbbfffcccffffbfffcccffbbbbffffffffffbccccbbfffcccffffbfffc
    ccffbbbfffffffffffbbccccffffccccfffbfffcccffbbbfffffffffffbbccccffffccccfffbfffcccffbbbfffffffffffbbccccffffccccfffbfffcccffbbbfffffffffffbbccccffffccccfffbfffc
    ccffbbbfffffffffffbbccccccffccccfffbfffcccffbbbfffffffffffbbccccccffccccfffbfffcccffbbbfffffffffffbbccccccffccccfffbfffcccffbbbfffffffffffbbccccccffccccfffbfffc
    cffffbbffffffffffbbbbccccccccccccfffbffccffffbbffffffffffbbbbccccccccccccfffbffccffffbbffffffffffbbbbccccccccccccfffbffccffffbbffffffffffbbbbccccccccccccfffbffc
    cffffbbbfffffffffbbfffffcccccccccfffbffccffffbbbfffffffffbbfffffcccccccccfffbffccffffbbbfffffffffbbfffffcccccccccfffbffccffffbbbfffffffffbbfffffcccccccccfffbffc
    cffffbbbbffffffffbbffffffccccccccfffbfcccffffbbbbffffffffbbffffffccccccccfffbfcccffffbbbbffffffffbbffffffccccccccfffbfcccffffbbbbffffffffbbffffffccccccccfffbfcc
    cffffbbbbbffffffbbbfffffffcccccccfffbccccffffbbbbbffffffbbbfffffffcccccccfffbccccffffbbbbbffffffbbbfffffffcccccccfffbccccffffbbbbbffffffbbbfffffffcccccccfffbccc
    bbfffffbbbbbffffbbbfffffffffcccccfffccccbbfffffbbbbbffffbbbfffffffffcccccfffccccbbfffffbbbbbffffbbbfffffffffcccccfffccccbbfffffbbbbbffffbbbfffffffffcccccfffcccc
    fbfffffbbbbbbbfbbbffffffffffcccccffccccffbfffffbbbbbbbfbbbffffffffffcccccffccccffbfffffbbbbbbbfbbbffffffffffcccccffccccffbfffffbbbbbbbfbbbffffffffffcccccffccccf
    fbffffffbbbbbbbbbbffffffffffcccccffcccfffbffffffbbbbbbbbbbffffffffffcccccffcccfffbffffffbbbbbbbbbbffffffffffcccccffcccfffbffffffbbbbbbbbbbffffffffffcccccffcccff
    fbffffffbbbbbbbbbfffffffffffcccccffccffffbffffffbbbbbbbbbfffffffffffcccccffccffffbffffffbbbbbbbbbfffffffffffcccccffccffffbffffffbbbbbbbbbfffffffffffcccccffccfff
    fbbfffffbbbbbbbfffffffffffffcccccffccbfffbbfffffbbbbbbbfffffffffffffcccccffccbfffbbfffffbbbbbbbfffffffffffffcccccffccbfffbbfffffbbbbbbbfffffffffffffcccccffccbff
    ffbbffffbbbbbbffffffffffffffcccccffccbffffbbffffbbbbbbffffffffffffffcccccffccbffffbbffffbbbbbbffffffffffffffcccccffccbffffbbffffbbbbbbffffffffffffffcccccffccbff
    ffbbbfffbbbbbbffffffffffffffcccccfcccbbfffbbbfffbbbbbbffffffffffffffcccccfcccbbfffbbbfffbbbbbbffffffffffffffcccccfcccbbfffbbbfffbbbbbbffffffffffffffcccccfcccbbf
    ffffbbbbbbbbbbfffffffffffffccccccfcccfbfffffbbbbbbbbbbfffffffffffffccccccfcccfbfffffbbbbbbbbbbfffffffffffffccccccfcccfbfffffbbbbbbbbbbfffffffffffffccccccfcccfbf
    ffffbbbbbbbbbbfffffffffffffcccccccccffbfffffbbbbbbbbbbfffffffffffffcccccccccffbfffffbbbbbbbbbbfffffffffffffcccccccccffbfffffbbbbbbbbbbfffffffffffffcccccccccffbf
    ffffffbbbbbbbbfffffffffffffcccccccccffbbffffffbbbbbbbbfffffffffffffcccccccccffbbffffffbbbbbbbbfffffffffffffcccccccccffbbffffffbbbbbbbbfffffffffffffcccccccccffbb
    bfffffffbbbbbbffffffffffffcccccccccffffbbfffffffbbbbbbffffffffffffcccccccccffffbbfffffffbbbbbbffffffffffffcccccccccffffbbfffffffbbbbbbffffffffffffcccccccccffffb
    bbfffffffbbbbbffffffffffffcccccccccfffffbbfffffffbbbbbffffffffffffcccccccccfffffbbfffffffbbbbbffffffffffffcccccccccfffffbbfffffffbbbbbffffffffffffcccccccccfffff
    bbfffffffbbbbbffffffffffffccccccccffffffbbfffffffbbbbbffffffffffffccccccccffffffbbfffffffbbbbbffffffffffffccccccccffffffbbfffffffbbbbbffffffffffffccccccccffffff
    fbfffffffbbbbbfffffffffffcccccccccfffffffbfffffffbbbbbfffffffffffcccccccccfffffffbfffffffbbbbbfffffffffffcccccccccfffffffbfffffffbbbbbfffffffffffcccccccccffffff
    fbfffffffbbbbbfffffffffffcccccccccfffffffbfffffffbbbbbfffffffffffcccccccccfffffffbfffffffbbbbbfffffffffffcccccccccfffffffbfffffffbbbbbfffffffffffcccccccccffffff
    fbfffffffbbbbbfffffffffffcccccccccfffffffbfffffffbbbbbfffffffffffcccccccccfffffffbfffffffbbbbbfffffffffffcccccccccfffffffbfffffffbbbbbfffffffffffcccccccccffffff
    fbfffffffbbbbbfffffffffffcccccccccfffffffbfffffffbbbbbfffffffffffcccccccccfffffffbfffffffbbbbbfffffffffffcccccccccfffffffbfffffffbbbbbfffffffffffcccccccccffffff
    fbbffffffbbbbbfffffffffffccccccccffffffffbbffffffbbbbbfffffffffffccccccccffffffffbbffffffbbbbbfffffffffffccccccccffffffffbbffffffbbbbbfffffffffffccccccccfffffff
    fbbffffffbbbbbfffffffffffccccccccffffffffbbffffffbbbbbfffffffffffccccccccffffffffbbffffffbbbbbfffffffffffccccccccffffffffbbffffffbbbbbfffffffffffccccccccfffffff
    bbbffffffbbbbbfffffffffffccccccccfffffffbbbffffffbbbbbfffffffffffccccccccfffffffbbbffffffbbbbbfffffffffffccccccccfffffffbbbffffffbbbbbfffffffffffccccccccfffffff
    bbfffffffbbbbbfffffffffffccccccccfffffffbbfffffffbbbbbfffffffffffccccccccfffffffbbfffffffbbbbbfffffffffffccccccccfffffffbbfffffffbbbbbfffffffffffccccccccfffffff
    bbfffffffbbbbbbffffffffffccccccccfffffffbbfffffffbbbbbbffffffffffccccccccfffffffbbfffffffbbbbbbffffffffffccccccccfffffffbbfffffffbbbbbbffffffffffccccccccfffffff
    bbfffffffbbbbbbffffffffffccccccccfffffffbbfffffffbbbbbbffffffffffccccccccfffffffbbfffffffbbbbbbffffffffffccccccccfffffffbbfffffffbbbbbbffffffffffccccccccfffffff
    bbfffffffbbbbbbffffffffffcccccccffffffffbbfffffffbbbbbbffffffffffcccccccffffffffbbfffffffbbbbbbffffffffffcccccccffffffffbbfffffffbbbbbbffffffffffcccccccffffffff
    bffffffffbbbbbbffffffffffcccccccfffffffbbffffffffbbbbbbffffffffffcccccccfffffffbbffffffffbbbbbbffffffffffcccccccfffffffbbffffffffbbbbbbffffffffffcccccccfffffffb
    bffffffffbbbbbbffffffffffcccccccffffffbbbffffffffbbbbbbffffffffffcccccccffffffbbbffffffffbbbbbbffffffffffcccccccffffffbbbffffffffbbbbbbffffffffffcccccccffffffbb
    bffffffffbbbbbbffffffffffcccccccffffffbbbffffffffbbbbbbffffffffffcccccccffffffbbbffffffffbbbbbbffffffffffcccccccffffffbbbffffffffbbbbbbffffffffffcccccccffffffbb
    fffffffffbbbbbbbfffffffffcccccccfffffbbbfffffffffbbbbbbbfffffffffcccccccfffffbbbfffffffffbbbbbbbfffffffffcccccccfffffbbbfffffffffbbbbbbbfffffffffcccccccfffffbbb
    fffffffffbbbbbbbfffffffffcccccccfffffbbbfffffffffbbbbbbbfffffffffcccccccfffffbbbfffffffffbbbbbbbfffffffffcccccccfffffbbbfffffffffbbbbbbbfffffffffcccccccfffffbbb
    fffffffffbbbbbbbfffffffffcccccccfffffbbbfffffffffbbbbbbbfffffffffcccccccfffffbbbfffffffffbbbbbbbfffffffffcccccccfffffbbbfffffffffbbbbbbbfffffffffcccccccfffffbbb
    fffffffffbbbbbbbbffffffffcccccccffffbbbbfffffffffbbbbbbbbffffffffcccccccffffbbbbfffffffffbbbbbbbbffffffffcccccccffffbbbbfffffffffbbbbbbbbffffffffcccccccffffbbbb
    fffffffffbbbbbbbbffffffffcccccccffffbbbbfffffffffbbbbbbbbffffffffcccccccffffbbbbfffffffffbbbbbbbbffffffffcccccccffffbbbbfffffffffbbbbbbbbffffffffcccccccffffbbbb
    fffffffffbbbbbbbbffffffffcccccccffffbbbffffffffffbbbbbbbbffffffffcccccccffffbbbffffffffffbbbbbbbbffffffffcccccccffffbbbffffffffffbbbbbbbbffffffffcccccccffffbbbf
    ffffffffffbbbbbbbbffffffccccccccffffbbbfffffffffffbbbbbbbbffffffccccccccffffbbbfffffffffffbbbbbbbbffffffccccccccffffbbbfffffffffffbbbbbbbbffffffccccccccffffbbbf
    bfffffffffbbbbbbbbffffffccccccccbbbbbbbbbfffffffffbbbbbbbbffffffccccccccbbbbbbbbbfffffffffbbbbbbbbffffffccccccccbbbbbbbbbfffffffffbbbbbbbbffffffccccccccbbbbbbbb
    bbbbbfffffbbbbbbbbffffffcccccccccbbbbbbbbbbbbfffffbbbbbbbbffffffcccccccccbbbbbbbbbbbbfffffbbbbbbbbffffffcccccccccbbbbbbbbbbbbfffffbbbbbbbbffffffcccccccccbbbbbbb
    bbbbbbbbffbbbbbbbbbfffbbcccccccccbbbbbbbbbbbbbbbffbbbbbbbbbfffbbcccccccccbbbbbbbbbbbbbbbffbbbbbbbbbfffbbcccccccccbbbbbbbbbbbbbbbffbbbbbbbbbfffbbcccccccccbbbbbbb
    bbbbbbbbbbbbbbbbbbbfbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbcccccccccbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbb
    bbbbbbbbbbbbbbbbbbb6666666666ccccccbbbbbbbbbbbbbbbbbbbbbbbb6666666666ccccccbbbbbbbbbbbbbbbbbbbbbbbb6666666666ccccccbbbbbbbbbbbbbbbbbbbbbbbb6666666666ccccccbbbbb
    bbbbbbbbbbbbbb66666666666666666666cbbbbbbbbbbbbbbbbbbb66666666666666666666cbbbbbbbbbbbbbbbbbbb66666666666666666666cbbbbbbbbbbbbbbbbbbb66666666666666666666cbbbbb
    bbbbbbbbbbb6666666666666666666666666bbbbbbbbbbbbbbb6666666666666666666666666bbbbbbbbbbbbbbb6666666666666666666666666bbbbbbbbbbbbbbb6666666666666666666666666bbbb
    bbbbbbbb666666666666666666666666666666bbbbbbbbbb666666666666666666666666666666bbbbbbbbbb666666666666666666666666666666bbbbbbbbbb666666666666666666666666666666bb
    bbbbb66666666666666666666666666666666666bbbbb66666666666666666666666666666666666bbbbb66666666666666666666666666666666666bbbbb66666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    `)
naut = sprites.create(naut_img, SpriteKind.Player)
naut.z = 5
naut.ay = g
tiles.placeOnRandomTile(naut, assets.tile`tile18`)
scene.cameraFollowSprite(naut)
info.setLife(3)
for (let value of tiles.getTilesByType(assets.tile`tile28`)) {
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 1 1 1 1 f f . . . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . . f 1 1 1 1 1 1 1 d f . . . 
        . . f d 1 1 1 1 1 1 1 d d f . . 
        . . f d 1 1 1 1 1 1 d d d f . . 
        . . f d 1 1 1 d d d d d d f . . 
        . . f d 1 d f b d d d d b f . . 
        . . f b d d f c d b b b c f . . 
        . . . f 1 1 1 1 1 b b c f . . . 
        . . . f 1 b 1 f f f f f . . . . 
        . . . f b f c 1 1 1 b f . . . . 
        . . . . f f 1 b 1 b f f . . . . 
        . . . . . f b f b f f f . f . . 
        . . . . . . f f f f f f f f . . 
        . . . . . . . . f f f f f . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(mySprite, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
    mySprite.vy = -100
}
forever(function () {
    if (cool) {
        updatePlayerSprite()
        updateGrappling()
    }
})
forever(function () {
    if (cool) {
        if (controller.left.isPressed()) {
            direction_x = -1
        }
        if (controller.right.isPressed()) {
            direction_x = 1
        }
    }
})
game.onUpdate(function () {
    if (cool) {
        if (naut.x + level * (tiles.tilemapColumns() * tiles.tileWidth()) > info.score()) {
            info.setScore(naut.x)
        }
        if (naut.bottom >= tiles.tilemapRows() * tiles.tileWidth()) {
            info.changeLifeBy(-1)
            hasStarted = false
            tiles.placeOnRandomTile(naut, assets.tile`tile18`)
        }
    }
})
game.onUpdate(function () {
    if (cool) {
        if (grappling) {
            naut.setImage(img`
                . . . . . . . f f f f f . . . . 
                . . . . . . f e e e e e f . . . 
                . . . . . f e e e d d d d f . . 
                . . . . f f e e d d f d d f . . 
                . . . f d d e e d d f d d d c . 
                . . . c d b e e d d d d e e d c 
                . . . c d b e e d d c d d d d c 
                . . . f c f e e d d d f f f f c 
                . . . . f e e e e f f f d b f . 
                . . . . f e e f f f e f d d f . 
                . f f . f f f e e e e f f f . . 
                . f e . f f e e e e f e e f . . 
                . f e f f f f f f f e e e f f . 
                . f e f f f b b f e e f d b f . 
                . f f f f b d d e e f f d d f . 
                . . f f f f f f f f f f f f f . 
                `)
        } else if (naut.isHittingTile(CollisionDirection.Bottom)) {
            naut.setImage(img`
                . . . . . . . f f f f f . . . . 
                . . . . . . f e e e e e f . . . 
                . . . . . f e e e d d d d f . . 
                . . . . f f e e d f d d f d c . 
                . . . f d d e e d f d d f d c . 
                . . . c d b e e d d d d e e d c 
                f f . c d b e e d d c d d d d c 
                f e f . c f e e d d d c c c c c 
                f e f . . f f e e d d d d d f . 
                f e f . f e e e e f f f f f . . 
                f e f f e e e e e e e f . . . . 
                . f f e e e e f e f f e f . . . 
                . . f e e e e f e f f e f . . . 
                . . . f e f f b d f b d f . . . 
                . . . f d b b d d c d d f . . . 
                . . . f f f f f f f f f . . . . 
                `)
        } else {
            naut.setImage(img`
                . . . . . . . f f f f f . . . . 
                . . . . f f f e e e e e f . . . 
                . . . f d d e e e e d d d f . . 
                . . . c d b e e e d d d d d c . 
                . . . c d b e e d d d d d d c . 
                . f f . c f e e d f d d f d d c 
                f e f . . f e e d f d d f d d c 
                f e f . . f e e d d d d e e d c 
                f e f . . f f e e d c d d d f . 
                f e f . f e e e e e d f f f . . 
                . f f f e e e e e e e f . . . . 
                . . f f b e e e e e f f . . . . 
                . . f f d d c e e f f e f . . . 
                . . . . f f f c d d b d d f . . 
                . . . . . f f d d d c d d f . . 
                . . . . . . f f f f f f f . . . 
                `)
        }
    }
})
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (value.isHittingTile(CollisionDirection.Top)) {
            value.vy = 100
        }
        if (value.isHittingTile(CollisionDirection.Bottom)) {
            value.vy = -100
        }
    }
})
