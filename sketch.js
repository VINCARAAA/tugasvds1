let j;
function setup (){
    createCanvas (400,400)
    background (224,255,255)
    y =105;
    j =0;
}
function draw(){
    fill (0,0,0)
    line(200,1,200,398)
    line(50,200,50,345)
    line(150,200,150,345)
    ellipse (100,345,100,50)

    fill(165,42,42)
    ellipse (100,200,20,20)

    fill (0,0,0)
    line(250,200,250,345)
    line(350,200,350,345)
    ellipse (300,345,100,50)


    var x = 300 + 10*Math.sin(PI/20*j);
    j +=1
    fill(165,42,42)
    ellipse (300,x,20,20)

}
    