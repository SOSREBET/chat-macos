const writeMessage = document.getElementById("write-message")
const sendMessage = document.getElementById("send-message")


function hanleSendMessage () {
    let len = writeMessage.value.length

    if (len > 0) {
        sendMessage.style.display = "block"
    } else {
        sendMessage.style.display = "none"
    }
}
