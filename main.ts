input.onButtonPressed(Button.A, function () {
    random = randint(0, 1)
    if (random == 0) {
        basic.showString("Truth")
    } else if (random == 1) {
        basic.showString("Dare")
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    turn = randint(1, 4)
    if (turn == 4) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (turn == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (turn == 2) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (turn == 3) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else {
    	
    }
})
let turn = 0
let random = 0
basic.showString("Truth or Dare?")
