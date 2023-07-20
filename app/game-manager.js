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
  const en
}

function rewardPlayer() {
  // STUB
}

function buyPotion() {
  if (player.gold >= S) (
player.potions++
player.gold-= S
messageUser ("potions." + player.potions)
drawPlayer()
  } else {
    messageUser("not Enough Gold")
  }
}
function increaseAttack() {
  if (player.gold >= S) {
player.Potions++
player.gold -= 5
messageUser("potions. " + player.potions)
drawplayer()
 } else {
  }

drawPlayer()