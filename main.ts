input.onButtonPressed(Button.A, function () {
    getal += -1
    basic.showNumber(getal)
})
input.onButtonPressed(Button.B, function () {
    getal += 1
    basic.showNumber(getal)
})
let getal = 0
getal = 0
basic.showNumber(getal)
basic.forever(function () {
    if (getal < 1) {
        getal = 1
        basic.showNumber(getal)
    }
})
basic.forever(function () {
    if (8.5 < getal) {
        getal = 8
    }
})
