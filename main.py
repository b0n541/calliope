zug = 0
def papier():
    basic.show_leds("""
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        """)
    basic.show_leds("""
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        """)
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        """)

def on_gesture_shake():
    global zug
    basic.clear_screen()
    basic.pause(200)
    zug = randint(1, 3)
    if zug == 1:
        schere()
    elif zug == 2:
        papier()
    else:
        stein()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def stein():
    basic.show_leds("""
        . . . . .
        . # # # .
        # # # # #
        . # # # .
        . . . . .
        """)
    basic.show_leds("""
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        . . # . .
        """)
    basic.show_leds("""
        . . . . .
        . # # # .
        # # # # #
        . # # # .
        . . . . .
        """)
def schere():
    basic.show_leds("""
        # . . . #
        . # . # .
        . . # . .
        # # . # #
        # # . # #
        """)
    basic.show_leds("""
        . . # . .
        . . # . .
        . . # . .
        # # . # #
        # # . # #
        """)
    basic.show_leds("""
        # . . . #
        . # . # .
        . . # . .
        # # . # #
        # # . # #
        """)