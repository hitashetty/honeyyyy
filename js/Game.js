class Game {
  constructor(){
    this.input = createInput("Type a message here");

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }


  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    player.getcarsetend();


    if(allPlayers !== undefined){
      background("coral");
      

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 3860){
      gameState = 2;
      player.rank+=1
      Player.updatecarsetend(player.rank);
      
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");    
    console.log(player.rank);


  }

  display(){
    this.input.position(displayWidth/2 - 700 , displayHeight/2 +200);

  }
}
