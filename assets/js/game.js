var playerName = window.prompt("what is your roborts names?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Roborto", "Amy Android", "robo Trumble"];
var enemyHealth = "50";
var enemyAttack = "12";
//for (var i = 0; i < enemyNames.length; i++) {
  //console.log(enemyNames[i]);
 // console.log(i);
  //console.log(enemyNames[i] + ' is at ' + i + ' index');


var fight = function(enemyName) {
    // Alert players that the round is starting.
    window.alert("Welcome to Robot Gladiators!")
    var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")
   // if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
      //confirm if player wants to skip fight.
      var confirmSkip = confirm("are you sure you want to quit?")
      if (confirmSkip) {
        window.alert(playerName + " has chosen to skip the fight!");
        playerMoney = playerMoney - 2;
      }
      else {
          fight();
      }
    
  } else {
    window.alert("You need to choose a valid option. Try again!");
  }

};
for (var i= 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}
//fight();
