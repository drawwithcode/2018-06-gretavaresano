var mappa;

function preload() {
  mappa = loadTable("mappa.csv","csv","header")


}
function setup() {
  createCanvas(1200,600)
  noStroke()
}

function draw() {
  background(255,255,255)

  fill(0);
  var myText = "World's airports\nLa grandezza dei cerchi dipende dalla\ndistanza massima che si può percorrere\npartendo dall'aeroporto di riferimento.";
  textFont('Roboto Slab');
  textSize(10);
  text(myText, 140, 444);


  var rows = mappa.getRows()
  for (var i = 0; i < rows.length; i++) {
    var from_long = rows[i].getNum("from_long")
    var from_lat = rows[i].getNum("from_lat")
    var distance = rows[i].getNum("distance")

    var x = map(from_long,-180,180,0,width)
    var y = map(from_lat,-90,90,height,0)
    fill(0,0,255,60);
    var radius = map(distance,1,15406,2,10)
    ellipse(x,y,radius,radius)
  }
}
