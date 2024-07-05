const button = document.querySelector("button")
const input = document.querySelector("input")
const video = document.querySelector("video")
const info = document.querySelector(".info")

button.addEventListener("click", () => {
    input.click()
})

input.addEventListener("change", () => {
    const file = document.querySelector("#video").files[0]
    const filename = file.name
    const stringLength = filename.length
    const extension = filename.substring(stringLength - 3)
    let mime = null
    if(extension === "mp4") {
        mime = extension
    }
    if(mime !== null) {
        const media = {
            title: filename.substring(0, stringLength - 4),
            source: "./videos/" + filename,
            type: "video/" + mime
        }
        playVideo(media)
    }
    else {
        showErrorMessage("Only .mp4 files can be selected")
    }
})

function playVideo(media) {
    try {
        video.src = media.source
        video.type = media.type 
        video.load()
        info.innerHTML = ""
        info.style.display = "none"
    }
    catch(error) {
        showErrorMessage("Only .mp4 files can be selected")
    }
}

video.addEventListener("error", (event) => {
    showErrorMessage("An error occurred trying to load the video")
})

function showErrorMessage(message) {
    info.classList.add("error")
    info.innerHTML = message
    info.style.display = "block"
}