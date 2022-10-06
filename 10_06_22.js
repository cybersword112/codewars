Array.prototype.square = function() {return this.map((n)=> n*n)}
Array.prototype.cube = function() {return this.map((n)=> n*n*n)}
Array.prototype.sum = function() {return this.reduce((acc,curr)=> acc+curr,0)}
Array.prototype.average = function() {let len = this.length; let tot = this.reduce((acc,curr)=>acc+curr,0); return tot/len;}
Array.prototype.even = function() {return this.filter((item,index)=> item % 2 === 0)}
Array.prototype.odd = function() {return this.filter((item,index)=> item % 2 !== 0)}