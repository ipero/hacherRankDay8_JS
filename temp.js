// Solution for challenge Day 8: Dictionaries and Maps on HackerRank.com
function processData(input) {
    //this function check if name exists in dictionary phoneBook
    function find(name){
        if(name in phoneBook){
            console.log(name + "=" + phoneBook[name]);
        }else{
           console.log("Not found");
        }
    }
    var data = input.split('\n');
    var n = data.shift();
    var checkNames = data.splice(n);
    var phoneBook={};
    for(var i=0; i<data.length; i++){
        var tempData = data[i].split(" ");
        phoneBook[tempData[0]] = tempData[1];
    }
    checkNames.map(find);
}
