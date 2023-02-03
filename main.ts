input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.House)
    basic.pause(500)
    basic.showString("jedu dopredu!")
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 80)
})
input.onButtonPressed(Button.AB, function () {
    wuKong.stopMotor(wuKong.MotorList.M1)
    basic.showIcon(IconNames.No)
    basic.pause(500)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(500)
    basic.showString("jedu dozadu!")
    wuKong.setMotorSpeed(wuKong.MotorList.M1, -80)
})
basic.showIcon(IconNames.Yes)
basic.pause(500)
