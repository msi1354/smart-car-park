let time = 0
basic.showIcon(IconNames.Happy)
radio.setGroup(2)
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) > 250) {
        radio.sendNumber(1)
        time = 60
        while (time > 0 && input.magneticForce(Dimension.Strength) > 250) {
            time += 0 - 1
            basic.showNumber(time)
            basic.pause(1000)
        }
    } else {
        basic.showNumber(input.magneticForce(Dimension.Strength))
        radio.sendNumber(0)
        basic.pause(100)
    }
})
