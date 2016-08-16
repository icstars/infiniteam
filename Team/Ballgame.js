var GameScore = 0;

var Level = 0 ;

var keys = [];

var keyPressed = function() { 
  keys[keyCode] = true;
};
 
var keyReleased = function() { 
  keys[keyCode] = false; 
 
    // 37L 38U 39R 40D
    
};    



var Player = function(x,y,size,speed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    this.update = function(){
        if (keys[UP]){
            this.y = this.y - this.speed;
            if (this.y <10) {
                this.y = 10;
            }
        }
        if (keys[DOWN]){
            this.y = this.y + this.speed;
            if (this.y >390) {
                this.y = 390;
            }
        }
        if (keys[LEFT]){
            this.x = this.x - this.speed;
            if (this.x <10) {
                this.x =10;
            }
        }
        if (keys[RIGHT]){
            this.x = this.x + this.speed;
            if (this.x >390) {
                this.x =390;
            }
          //var playericon = getImage("avatars/spunky-sam");
           //image(playericon,this.x,this.y,this.size,this.size);
           //this.timer +=3;
        }
        
        fill(255, 0, 0);
        noStroke();
        ellipse(this.x,this.y,this.size,this.size);
    
    };

};
var Dot = function(x,y,speed,size){
    this.x = x;
    this.y = y;
    this.xVel = random(-speed,speed);
    this.yVel = random(-speed,speed);
    
    this.speed  = speed;
    this.size = size;
    this.update = function(redDot) {
        if (this.x < redDot.x) {
            // the green dot is to the left of the reDot
            this.xVel = this.xVel - 0.05 * Level;   
        }
        if (this.x > redDot.x) {
            this. xVel = this.xVel + 0.05 * Level;
        }
        if (this.y < redDot.y) {
            this.yVel = this.yVel - 0.05 * Level;
        }
        if (this.y > redDot.y) {
            this.yVel = this.yVel + 0.05 * Level;
        }
        //money here
        this.x = this.x + this.xVel;
        if (this.x <10 || this.x >390) {
            this.xVel = -this.xVel;
        }
        
        this.y = this.y + this.yVel;
        if (this.y <10 || this.y>390) {
            this.yVel = -this.yVel;
        }
        if (this.x < -8 || this.x >408 || this.y < -8 || this.y > 408) {
            // no 'out of bounds'
            this.x = 10;
            this.y = 10;
            this.xVel = 3;
            this.yVel = 3;
        }
        
        //draw the dots
        fill(68, 255, 0);
        ellipse(this.x,this.y,this.size,this.size);
        
    };
    
    
};



var player = new Player(115,104,35,15);
//var player2 = new Player(200,206,21,3);
var dots = [];


var checkForCollisions = function(player,dots) {
    for (var i=0; i<dots.length; i++) {
        var distance = dist(player.x,player.y,dots[i].x,dots[i].y);
        if (distance <= (player.size/2 + dots[i].size / 2)) {
            //how to add or remove items... plus add points to score
            dots.splice(i,1);
            GameScore = GameScore + 1;
        }
    }
};

var draw = function() {
    background(245, 242, 242);
    player.update();
    //player2.update();
   for (var i=0; i<dots.length;i++) {
       dots[i].update(player);
    }
    checkForCollisions(player,dots); 
    text("Score:  " + GameScore + "    Level:" + Level,20,20);
    if (dots.length === 0) {
           //clear Level. create new dots. increase level.
       for (var i=0;i<10;i++){
    dots[i] = new Dot(random(10,390), random(10,390),random(0,2),20);
    }  
    Level = Level +1; 
    
    }
    
   
   //if (keyIsPressed && keys[UP]) { //this checks if up arrow is pressed
    //    yv = yv - speed;
    //    speed = speed +0.35;
  //  }
    //if (keyIsPressed && keys[DOWN]) {
  //      yv = yv + speed;
 //       speed = speed +0.35;
   // }
    //if (keyIsPressed && keys[LEFT]) {
      //  xv = xv - speed;
//        speed = speed +0.35;
  //  }
    //if (keyIsPressed && keys[RIGHT]) {
      //  xv = xv + speed;
        //speed = speed +0.25;
   
};
