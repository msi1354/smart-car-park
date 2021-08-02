basic.showIcon(IconNames.Happy)
radio.setGroup(2)
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) > 250) {
        basic.showLeds(`
            . # # # .
            . # # # .
            # # # # #
            # # # # #
            . # . # .
            `)
        radio.sendNumber(1)
    } else {
        basic.showNumber(input.magneticForce(Dimension.Strength))
        radio.sendNumber(0)
        basic.pause(100)
    }
})
