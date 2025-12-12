let mob={brand:"iphone",ram:"8gb",price:"20000",colour:"Black",model:"12pro"};
console.log(mob)
mob.warrenty="1year";
console.log(mob)
 mob.warrenty="2year";
console.log(mob)

console.log(mob.colour)
console.log(mob["ram"])

delete mob.warrenty;
console.log(mob)