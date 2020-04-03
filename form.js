class Form {
    constructor(){

    }

    display(){
        var title = createElement('h1');
        title.html("Car Racing");
        title.position(200, 20);

        var input = createInput("NAME");
        input.position(130,160);
        var greeting = createElement('h3');

        var button = createButton("playButton");
        button.position(250, 200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount += 1
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Welcome" + name + "!");
            greeting.position(250, 180);
            

        });

        

    }
}