var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2D");
color = "black";
width_of_line = 1;

canvas.addeventlistener("mousedown",my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

    mouseEvent = "mousedown";
}


canvas.addeventlistener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}


canvas.addeventlistener("mouseup", my_mouseup);

function my_mouseup (e)
{
    mouseEvent = "mouseUP"
}


canvas.addeventlistener("mousemouse", my_mousemove);

function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetleft;
    current_position_of_mouse_y = e.clientY - canvas.offsetleft;

    if (mouseEvent == "mousedown")
    {
        ctx.beginpath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        
        console.log("last position of x and y coordinates = ");
        console.log("x = ", + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveto(last_position_of_x, last_position_of_y);

        console.log("current position of x and y coordinates = ");
        console.log("x = ", + current_position_of_x + "y = " + current_position_of_y);
        ctx.moveto(current_position_of_x, current_position_of_y);

        last_position_of_x,current_position_of_x;
        last_position_of_y,current_position_of_y;
    }
}

function clearArea()
{
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
}