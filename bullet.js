  function Bullet(x,y) {
  this.x = x;
  this.y = y;
  this.r = 2.5;
  this.toDelete = false;
  
  this.show = function() {
    fill(148,0,211);
    ellipse(this.x, this.y, this.r * 2 , this.r * 2);
  }
  
  this.disapear = function() {
    this.toDelete = true;
  }
  
  if (this.y > -5) {
      t += 1
  }
    
  this.hits = function(alien) {
    var d = dist(this.x, this.y, alien.x, alien.y);
    if (d < this.r + alien.r){
    return true;
    }
    else {
    return false;
    }
  }
  
  this.move = function() {
  this.y = this.y - 5;
  }
}