function sendDirection () {
    RadioString = ""
    for (let value of Directions) {
        RadioString = "" + RadioString + value + ","
    }
    radio.sendString(RadioString)
    PlayRobot()
}
function PlayRobot () {
    basic.showIcon(IconNames.Ghost)
    for (let value2 of RadioString.split(",")) {
        showDirection(value2)
    }
    basic.showIcon(IconNames.Yes)
}
input.onButtonPressed(Button.A, function () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        showDirection("Left")
        Directions.push("Left")
    } else if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        showDirection("Right")
        Directions.push("Right")
    } else if (huskylens.isAppear(3, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        showDirection("Forward")
        Directions.push("Forward")
    } else if (huskylens.isAppear(4, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showString("GO!")
        basic.showIcon(IconNames.Yes)
        music.ringTone(988)
        music.rest(music.beat(BeatFraction.Double))
        sendDirection()
    } else {
        basic.showNumber(huskylens.readBox_s(Content3.ID))
        basic.pause(500)
        basic.showIcon(IconNames.No)
        basic.pause(500)
        music.ringTone(131)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Directions = []
    basic.showIcon(IconNames.No)
    basic.showString("New")
})
function showDirection (Direction2: string) {
    if (Direction2 == "Left") {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . #
            . . # . #
            `)
    } else if (Direction2 == "Right") {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            # . . # .
            # . # . .
            `)
    } else if (Direction2 == "Forward") {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(200)
    music.ringTone(988)
}
let RadioString = ""
let Directions: string[] = []
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.OBJECTCLASSIFICATION)
Directions = []
radio.setGroup(33)
basic.forever(function () {
	
})
