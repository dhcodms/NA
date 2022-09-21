let 나침반 = 0
basic.forever(function () {
    나침반 = input.compassHeading()
    if (나침반 < 45) {
        basic.showString("N")
    } else if (나침반 < 135) {
        basic.showString("S")
    } else if (나침반 < 225) {
        basic.showString("W")
    } else if (나침반 < 315) {
        basic.showString("E")
    } else {
    	
    }
})
