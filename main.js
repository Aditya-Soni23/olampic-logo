canvas = document.getElementById("can");
ctx = canvas.getContext("2d");


ctx.beginPath();
ctx.strokeStyle = "violet";
ctx.lineWidth = 5;

ctx.stroke();





ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(185, 90, 30, 0, 2 * Math.PI);
ctx.stroke();




ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(80, 50, 30, 0, 2 * Math.PI);
ctx.stroke();




ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(150, 50, 30, 0, 2 * Math.PI);
ctx.stroke();





ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.arc(115, 90, 30, 0, 2 * Math.PI);
ctx.stroke();





ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(220, 50, 30, 0, 2 * Math.PI);
ctx.stroke();