radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    CONTAR += 1
    basic.showNumber(CONTAR)
    if (CONTAR == 5) {
        CONTAR = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (CONTAR == 1) {
        radio.sendNumber(11)
        basic.showIcon(IconNames.Yes)
        basic.showString("BLUE")
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (CONTAR == 2) {
        radio.sendNumber(12)
        basic.showIcon(IconNames.Yes)
        basic.showString("RED")
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (CONTAR == 3) {
        radio.sendNumber(13)
        basic.showIcon(IconNames.Surprised)
        basic.showString("BLUE")
        basic.showLeds(`
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (CONTAR == 4) {
        radio.sendNumber(14)
        basic.showIcon(IconNames.Duck)
        basic.showString("BLUE")
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (CONTAR == 5) {
        radio.sendNumber(15)
        basic.showIcon(IconNames.Skull)
        basic.showString("BLUE")
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
let CONTAR = 0
radio.setGroup(1)
CONTAR = 0
basic.forever(function () {
	
})
