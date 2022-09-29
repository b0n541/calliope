let zug2 = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showString("" + input.temperature())
})
function papier2 () {
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
    basic.showString("" + input.lightLevel())
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.pause(1000)
    zug2 = randint(1, 3)
    if (zug2 == 1) {
        stein2()
    } else if (zug2 == 2) {
        schere2()
    } else {
        papier2()
    }
})
function stein2 () {
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
function schere2 () {
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
