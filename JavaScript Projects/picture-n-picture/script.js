const videoElement = document.getElementById('video')
const buttonElement = document.getElementById('button')

async function selectMediaStream() {
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
        videoElement.srcObject = mediaStream
        videoElement.onloadedmetadata = () => {
            videoElement.play()
        }
        } catch (error) {
            console.log('whoops , error here:', error)
        }
    

}

buttonElement.addEventListener('click', async () => {
    //  Disable Button
    videoElement.disablled = true
    // Start Picture in Picture
    await videoElement.requestPictureInPicture()
    // Reset Button
    videoElement.disabled = false
})

selectMediaStream() 
