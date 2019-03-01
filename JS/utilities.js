 function polygon(x, y, radius, npoints) {
     let angle = TWO_PI / npoints;
     beginShape();
     for (let a = 0; a < TWO_PI; a += angle) {
         let sx = x + cos(a) * radius;
         let sy = y + sin(a) * radius;
         vertex(sx, sy);
     }
     endShape(CLOSE);
 }

 Number.prototype.between = function (a, b) {
     let minVal = min([a, b]);
     let maxVal = max([a, b]);

     return this > minVal && this < maxVal;
 };