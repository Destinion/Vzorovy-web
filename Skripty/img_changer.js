var object = document.getElementById("image");
var currentPos = 0;
var objects = ["../obrazky/bean1.png", "../obrazky/bean2.png", "../obrazky/header_bg_post.jpg"]

function spustitfoto() 
    {
        if (++currentPos >= objects.length)
            currentPos = 0;

            object.src = objects[currentPos];
    }

setInterval(spustitfoto, 3000);
       