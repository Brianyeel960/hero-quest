const player = {
  currentHealth: 10,
  attackPower: 10,
  gold: 100,
  potions: 10,
}

function healPlayer() {
  // STUB
}

function attackEnemy() {
  // STUB
}

function drawPlayer() {
  document.getElementById('hero-health').innerText = '💖 ' + player.currentHealth
  // TODO finish the rest of the player attributes 
  document.getElementById('hero-gold').innerText = '🪙 '
  document.getElementById('hero-potions').innerText = '🧪 '
  document.getElementById('hero-attack').innerText = '⚔️ '
}

function drawCurrentEnemy() {
  //  STUB
}

function enemyTurn() {
  // STUB
}

function rewardPlayer() {
  // STUB
}

function buyPotion() {
  // STUB
}

function increaseAttack() {
  // STUB
}

drawPlayer()