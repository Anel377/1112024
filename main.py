def on_button_pressed_a():
    for index in range(3):
        turtle.set_position(0, 0)
        turtle.set_position(1, 0)
        turtle.set_position(2, 0)
        turtle.set_position(3, 0)
        turtle.set_position(4, 0)
        turtle.set_position(3, 1)
        turtle.set_position(2, 2)
        turtle.set_position(1, 3)
        turtle.set_position(0, 4)
        turtle.set_position(1, 4)
        turtle.set_position(2, 4)
        turtle.set_position(3, 4)
        turtle.set_position(4, 4)
        basic.show_leds("""
            # # # # #
            . . . # .
            . . # . .
            . # . . .
            # # # # #
            """)
input.on_button_pressed(Button.A, on_button_pressed_a)
