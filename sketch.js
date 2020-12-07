const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var drops=[]
var thunder1,thunder2,thunder3,thunder4;
var thunder;
var maxDrops=100
var umbrella;

function preload(){
    thunder1=loadImage("images/thunderbolt/1.png");
    thunder2=loadImage("images/thunderbolt/2.png");
    thunder3=loadImage("images/thunderbolt/3.png");
    thunder4=loadImage("images/thunderbolt/4.png");
}

function setup(){
   createCanvas(800,800)
    engine=Engine.create()
    world=engine.world;
    thunder=createSprite(400,20,20,100)
    thunder.visible=false
    if(frameCount%150===0){
        for(var i=0;i<maxDrops;i++){
            drops.push(new Drop(random(0,800),random(0,400)))
        }
    }
    umbrella=new Umbrella(400,400)
    umbrella.scale=0.2;
    Engine.run(engine)
}

function draw(){
    background("black")
    // var randomNum=Math.round(random)
    Engine.update(engine)
    //console.log(frameCount)
    if(frameCount%24===0){
    thunder.visible=true
    }
    else if(frameCount%12!==0){
        thunder.visible=false
    }

    
    for(var j=0;j<drops.length;j=j+50){
        drops[j].display();
        
    }
    for(var k=0;k<drops.length;k++){
    drops[k].update();
    }
    
    umbrella.display();
    if(thunder!==null){
        
    var rand=Math.round(random(1,4))

    switch(rand){
        case 1: thunder.addImage("thunder",thunder1)
        break;
        case 2: thunder.addImage("thunder",thunder2)
        break;
        case 3: thunder.addImage("thunder",thunder3)
        break;
        case 4: thunder.addImage("thunder",thunder4)
        break;
        default: break;
    }
    }

    drawSprites();

}


