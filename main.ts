function sehrHoch () {
    basic.showLeds(`
        . . . . .
        # # # # .
        # # # # #
        # . . . #
        # . . . #
        `)
    music.playTone(988, music.beat(BeatFraction.Sixteenth))
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    spiel = 1
    basic.clearScreen()
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
    spiel = 2
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    if (spiel == 1) {
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
    }
})
function tief () {
    basic.showLeds(`
        . . . . .
        # . # # #
        # # # # #
        # . . . #
        # . . . #
        `)
    music.playTone(131, music.beat(BeatFraction.Sixteenth))
}
function hoch () {
    basic.showLeds(`
        . . . . .
        # # # . #
        # # # # #
        # . . . #
        # . . . #
        `)
    music.playTone(523, music.beat(BeatFraction.Sixteenth))
}
function mittel () {
    basic.showLeds(`
        . . . . .
        # # . # #
        # # # # #
        # . . . #
        # . . . #
        `)
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
}
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
let zug2 = 0
let spiel = 0
basic.showString("Knopf A oder B drücken")
basic.forever(function () {
    if (spiel == 2) {
        if (input.pinIsPressed(TouchPin.P0)) {
            tief()
        } else if (input.pinIsPressed(TouchPin.P1)) {
            mittel()
        } else if (input.pinIsPressed(TouchPin.P2)) {
            hoch()
        } else if (input.pinIsPressed(TouchPin.P3)) {
            sehrHoch()
        } else {
            basic.showLeds(`
                . . . . .
                # # # # #
                # # # # #
                # . . . #
                # . . . #
                `)
        }
    }
})
