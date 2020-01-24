function Calcular() {
    var totKM = parseFloat(document.getElementById("inputKM").value)
    var totH = document.getElementById("inputH").value*60
    var totM = document.getElementById("inputM").value*1
    var totS = document.getElementById("inputS").value/60
    var PaceM = ((totH + totM + totS))/(totKM)
    var PaceMInt = Math.floor(PaceM)
    var PaceMRes = Math.floor((PaceM - PaceMInt) * 60)

    if (PaceMInt < 10) {
        PaceMInt = "0" + PaceMInt
    }
    if (PaceMRes < 10) {
        PaceMRes = "0" + PaceMRes
    }

    document.getElementById("totPcM").innerHTML = PaceMInt + ":" + PaceMRes + " min/km"
}
