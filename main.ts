let zug = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showString("" + (input.temperature()))
})
function papier () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
}
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showString("" + (input.lightLevel()))
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.pause(1000)
    zug = randint(1, 3)
    if (zug == 1) {
        schere()
    } else if (zug == 2) {
        papier()
    } else {
        stein()
    }
})
function stein () {
    basic.showLeds(`
        . . . . .
        . # # # .
        # # # # #
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        # # # # #
        . # # # .
        . . . . .
        `)
}
function schere () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        # # . # #
        # # . # #
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        # # . # #
        # # . # #
        `)
}
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        music.playTone(131, music.beat(BeatFraction.Sixteenth))
    } else if (input.pinIsPressed(TouchPin.P1)) {
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
    } else if (input.pinIsPressed(TouchPin.P2)) {
        music.playTone(523, music.beat(BeatFraction.Sixteenth))
    } else if (input.pinIsPressed(TouchPin.P3)) {
        music.playTone(988, music.beat(BeatFraction.Sixteenth))
    }
})
