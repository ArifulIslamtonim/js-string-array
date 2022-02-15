function megaFriend(friends){

    // array ki na chack krar jonn
    if(Array.isArray(friends) == false) {
        return "please proveide an array";
    }
    let mega = friends[0];
    for(const friend of friends){
        mega = friend;
    }
    return mega;
}
const friends = ['lion', 'liokutuboddinn', 'kutuboddin',];
const myBigBuddy = megaFriend(friends);
console.log(myBigBuddy);

if (friends.indexOf('fox') != -1) {
    console.log('lion exist');
} else{
    console.log('fox does not exists');
}

if (friends.includes('lion')) {
    console.log("lion is exists ");
}


const first = [1, 3, 5];
const second = [4, 6, 8, 9];
const combined = first.concat(second) ;
console.log(combined);