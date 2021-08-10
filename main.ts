input.onButtonPressed(Button.A, function () {
    control.reset()
})
let time = 0
basic.showIcon(IconNames.Happy)
radio.setGroup(2)
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) > 250) {
        radio.sendNumber(1)
        time = 30
        while (time > 0 && input.magneticForce(Dimension.Strength) > 250) {
            time += 0 - 1
            basic.showNumber(time)
        }
        while (time == 0) {
            radio.sendNumber(2)
            basic.showLeds(`
                # . # . #
                # . # . #
                # . # . #
                . . . . .
                # . # . #
                `)
        }
    } else {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        radio.sendNumber(0)
        basic.pause(100)
    }
})
