function macheEtwas () {
    serial.writeValue("x0", AnalogPin.P0)
    serial.writeValue("x1", AnalogPin.P1)
    serial.writeValue("x2", AnalogPin.P2)
    serial.writeValue("x3", AnalogPin.P3)
    serial.writeValue("x4", AnalogPin.P4)
    serial.writeValue("x5", AnalogPin.P5)
    serial.writeValue("x6", AnalogPin.P6)
    serial.writeValue("x7", AnalogPin.P7)
    serial.writeValue("x8", AnalogPin.P8)
    serial.writeValue("x9", AnalogPin.P9)
    serial.writeValue("x10", AnalogPin.P10)
    serial.writeValue("x11", AnalogPin.P11)
    serial.writeValue("x12", AnalogPin.P12)
    serial.writeValue("x13", AnalogPin.P13)
    serial.writeValue("x14", AnalogPin.P14)
}
input.onButtonPressed(Button.A, function () {
    macheEtwas()
})
input.onButtonPressed(Button.B, function () {
    ampel_nr = 4
})
function eine_seite (aNum: number) {
    pins.analogWritePin(ampel_liste[aNum]+2, 0)
pins.analogWritePin(ampel_liste[aNum]+0, 512)
basic.pause(2000)
    pins.analogWritePin(ampel_liste[aNum], 0)
pins.analogWritePin(ampel_liste[aNum]+1, 512)
basic.pause(2000)
    pins.analogWritePin(ampel_liste[aNum]+1, 0)
pins.analogWritePin(ampel_liste[aNum]+2, 512)
basic.pause(2000)
    pins.analogWritePin(ampel_liste[aNum]+0, 512)
pins.analogWritePin(ampel_liste[aNum]+1, 512)
pins.analogWritePin(ampel_liste[aNum]+2, 512)
basic.pause(5000)
    pins.analogWritePin(ampel_liste[aNum]+0, 0)
pins.analogWritePin(ampel_liste[aNum]+1, 0)
pins.analogWritePin(ampel_liste[aNum]+2, 0)
basic.pause(1000)
}
let ampel_nr = 0
let ampel_liste: number[] = []
ampel_nr = 0
ampel_liste = [100, 103, 106, 109, 112]
basic.forever(function () {
    eine_seite(ampel_nr)
})
