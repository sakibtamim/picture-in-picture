const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// promt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaSteam = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaSteam;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log(error);
    }
}

button.addEventListener('click', async () => {
    // disable  the button
    button.disabled = true;
    // picture in picture
    await videoElement.requestPictureInPicture();
    // reset button
    button.disabled = false;
});

// on load
selectMediaStream();