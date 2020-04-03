class Game {
    constructor(){

    }

    getState(){
        var stateMemory = database.ref('gameState');
        stateMemory.on('value', function(data){
            gameState =  data.val() //now current state = 0;
        })

    }

    updateState(state){
        database.ref('/').update({ // '/' = everything below root file
            gameState: state
        })
    }

    startState(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            
            form = new Form();
            form.display();
        }
    }
}
