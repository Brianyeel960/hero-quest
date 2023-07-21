const player = {
  currentHealth: 10,
  attackPower: 10,
  gold: 100,
  potions: 10,
}

function healPlayer() {
  if (player.potions > 0) {
player.Potions--
player.currentHealth+= 10
enemyturn()
drawplayer()
drawCurrentEnemy()
 } else {
messageUser ("you dont have any potions")
 }
}
function attackEnemy() {
  enemyTurn()
  drawCurrentEnemy.health -= player.attackPower
if (drawCurrentEnemy.health <=0) {
  rewardPlayer()
  pickRandomEnemyFromCurrentStage()
}
drawPlayer()
drawCurrentEnemy()
}
function drawPlayer() {
  document.getElementById('hero-health').innerText = '💖 ' + player.currentHealth
  document.getElementById('hero-gold').innerText = '🪙 ' + player.gold
  document.getElementById('hero-potions').innerText = '🧪 ' +player.potions
  document.getElementById('hero-attack').innerText = '⚔️ ' + player.attackPower
}

function drawCurrentEnemy() {
  document.getElementById('enemy-type').innerText = currentEnemy.type
document.getElementById('enemy-health'). innerText = '💖' +currentEnemy.health
}

function enemyTurn() {
  const enemyDamage = Math.floor(Math.random()* currentEnemy.maxAttackPower)
  player.currentHealth -=enemyDamage
  messageUser ("💔 took " + enemyDamage + "damage")
  if (player.currentHealth <= 0) {
    messageuser ("you have died")
    showGameOver()
  }
}

function rewardPlayer() {
  player.gold += currentEnemy.gold
  if (player.gold >= 1000) {
    messageUser("congratulations you are rich enough to stop adveturing")
    showVictory()
  }

}

function buyPotion() {
  if (player.gold >= 5) {
player.potions++
player.gold-= 5
messageUser ("potions." + player.potions)
drawPlayer()
  } else {
    messageUser("not Enough Gold")
  }
}
function increaseAttack() {
  if (player.gold >=10) {
player.Potions+=5
player.gold -= 10
messageUser ("attack up")
drawplayer()
 
} else {
  messageUser ("Not Enough Gold")
}
