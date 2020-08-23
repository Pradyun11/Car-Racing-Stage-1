var canvas,database,gameState,playerCount,form,player,game;

function setup(){
    canvas = createCanvas(400,400);

    database = firebase.database();

    gameState = 0;
    game = new Game();
    game.getState();
    game.start();
}