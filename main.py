def on_received_number(receivedNumber):
    pass
radio.on_received_number(on_received_number)

def on_logo_pressed():
    if CONTAR == 1:
        basic.show_icon(IconNames.YES)
        radio.send_number(11)
        basic.pause(5000)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
    if CONTAR == 1:
        basic.show_icon(IconNames.YES)
        radio.send_number(11)
        basic.pause(5000)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def on_button_pressed_a():
    global CONTAR
    CONTAR += 1
    basic.show_number(CONTAR)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global CONTAR
    CONTAR = CONTAR - 1
    basic.show_number(CONTAR)
input.on_button_pressed(Button.B, on_button_pressed_b)

CONTAR = 0
radio.set_group(1)
CONTAR = 0

def on_forever():
    pass
basic.forever(on_forever)
