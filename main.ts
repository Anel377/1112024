input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        turtle.setPosition(0, 0)
        turtle.setPosition(1, 0)
        turtle.setPosition(2, 0)
        turtle.setPosition(3, 0)
        turtle.setPosition(4, 0)
        turtle.setPosition(3, 1)
        turtle.setPosition(2, 2)
        turtle.setPosition(1, 3)
        turtle.setPosition(0, 4)
        turtle.setPosition(1, 4)
        turtle.setPosition(2, 4)
        turtle.setPosition(3, 4)
        turtle.setPosition(4, 4)
        basic.showLeds(`
            # # # # #
            . . . # .
            . . # . .
            . # . . .
            # # # # #
            `)
    }
})
