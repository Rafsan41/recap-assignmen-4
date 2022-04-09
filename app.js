// 1st problem solve 
function seerToMon(weight){
    const lbs = weight / 40;
    return lbs;
}
const seer = seerToMon(80);//input here to test code
console.log(seer);


//2nd problem solve
function totalSales(shirt, pant, shoe){
    var shirtPrice = 100;
    var pantPrice  = 200;
    var shoePrice = 500;
  const shirtQunatity = shirt * shirtPrice;
  const pantQunatity = pant * pantPrice;
  const shoeQunatity = shoe * shirtPrice;
  const totalProductlSale = shirtQunatity + pantQunatity + shoeQunatity;
  return totalProductlSale;

}
const sale = totalSales(5, 10, 3);//input here to test code
console.log(sale);

// 3rd problem solve 

function deliveryCost(deliveryItem){
  // diffrent kinds of delivery cost
let firstDeliverycost = 100;
let secondDeliverycost = 80;
let thirdDeliverycost = 50;
  if(deliveryItem <= 100){
     const firstDeliveryTotalCost = deliveryItem * firstDeliverycost
    return firstDeliveryTotalCost;
  }
  else if(deliveryItem <= 200){
    //first delivery calculations
   const firstDeliveryTotalCost = 100 * firstDeliverycost;
    const deliveryItems = deliveryItem - 100;
     // second delivery calculations
    const secondDeliveryTotalCost = deliveryItems * secondDeliverycost;
    const totalCost = firstDeliveryTotalCost + secondDeliveryTotalCost
    return totalCost;
  }
  else{
    //first delivery calculations
     const firstDeliveryTotalCost = 100 * firstDeliverycost;
     // second delivery calculations
     const secondDeliveryTotalCost = 200 * secondDeliverycost;
     const deliveryItems = deliveryItem - 200;
     //third delivery calculations
     const thirdDeliveryTotalCost = deliveryItems * thirdDeliverycost;
     const allTotalCost = firstDeliveryTotalCost + secondDeliveryTotalCost + thirdDeliveryTotalCost;
    return allTotalCost;
  }
}
const delivery = deliveryCost(280);//input here to test code
console.log(delivery);


// 4th problem solved 
 const myfriends = [ 'dipu', 'abid', 'rafi', 'asraf', 'tanin', 'pavel', 'yasir',]
function perfectFriend(myfriends){
let friend = '';
 for(const friend of myfriends ){
   if(friend.length < 6){
     let shortFriend = myfriends
     console.log(shortFriend);
     return shortFriend;
   }
   else{
 let bigFriend = myfriends[3]
 return bigFriend;
   }
 }
}
const friends = perfectFriend(myfriends);
 console.log(friends);

