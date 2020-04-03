class Player {
    constructor() {

    }

    getCount(){
        var countMemory = database.ref('playerCount');
        countMemory.on('value', function(data){
            playerCount = data.val();
        });
    }

    updateCount(count){
        database.ref('/').update({
            playerCount: count 
        });
    }

    update(name){
        var playerIndex =  "player" + playerCount;
        database.ref(playerIndex).set({   //set: value won't change throughout game
            name: name
        }) 
    }
}