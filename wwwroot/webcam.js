function startcamera(src)
{
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {

        let camera = document.getElementById(src);
        camera.srcObject = stream;
        camera.onloadedmetadata = () => { camera.play(); }
    });
}

function getFrame(src, dest, dotnetHelper)
{
    let camera = document.getElementById(src);
    let canvas = document.getElementById(dest);
    canvas.getContext("2d").drawImage(camera, 0, 0, 720, 480);

    let dataUrl = canvas.toDataURL("image/png", 1.0);
    dotnetHelper.invokeMethodAsync("ProcessImage", dataUrl);
}

function getImageUrlFromFile(src)
{
    return window.URL.createObjectURL(src.files[0]);
}

function alertUser(message)
{
    alert(message);
}