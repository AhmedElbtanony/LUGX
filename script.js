function active(params) {
    let p1 = document.getElementById("Description-p")
    let p2 = document.getElementById("Reviews-p")
    let button1 = document.getElementById("Description-button")
    let button2 = document.getElementById("Reviews-button")
    p1.className =""
    p2.className =""
    button1.className = ""
    button2.className = ""
    if (params == 1) {
        button1.className = "active"
        p2.className = "display-none"
    } else {
        button2.className = "active"
        p1.className = "display-none"
    }
}