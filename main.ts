function macheEtwas () {
    serial.writeValue("x", AnalogPin.P0)
    serial.writeValue("x", AnalogPin.P1)
    serial.writeValue("x", AnalogPin.P2)
    serial.writeValue("x", AnalogPin.P3)
    serial.writeValue("x", AnalogPin.P4)
    serial.writeValue("x", AnalogPin.P5)
    serial.writeValue("x", AnalogPin.P6)
    serial.writeValue("x", AnalogPin.P7)
    serial.writeValue("x", AnalogPin.P8)
    serial.writeValue("x", AnalogPin.P9)
    serial.writeValue("x", AnalogPin.P10)
    serial.writeValue("x", AnalogPin.P11)
}
input.onButtonPressed(Button.A, function () {
    macheEtwas()
})
function eine_seite (aNum: number) {
    serial.writeValue("x", ampel_liste[aNum] + 2)
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
}
let ampel_nr = 0
let ampel_liste: number[] = []
ampel_liste = [100, 103, 106, 109, 112]
basic.forever(function () {
    eine_seite(4)
})
