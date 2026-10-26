// Floating Hearts Background Generator
function createHearts() {
  const container = document.getElementById('heartsContainer');
  const heartEmojis = ['💖', '🌸', '✨', '💕', '🌷'];
  
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerText = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    heart.style.animationDelay = (Math.random() * 5) + 's';
    container.appendChild(heart);
  }
}
createHearts();

// Navigation between screens
function goToScreen(screenId) {
  const screens = document.querySelectorAll('.screen');
  screens.forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

// Screen 1: Passcode Check
function checkPasscode() {
  const input = document.getElementById('passcodeInput').value.trim().toLowerCase();
  const errorMsg = document.getElementById('passcodeError');
  
  // Accepts 'buchi' or 'thingari'
  if (input === 'buchi' || input === 'thingari' || input === 'thingari buchi') {
    errorMsg.innerText = '';
    goToScreen('screen-welcome');
  } else {
    errorMsg.innerText = 'Incorrect code! Hint: try "buchi" 😉';
  }
}

// Screen 3: Balloon Wishes
const balloonWishes = {
  1: "🎈 Wish #1: May your year be filled with endless laughters and zero annoyance from Bondam! (Okay, maybe just a little 😉)",
  2: "🎈 Wish #2: May all your biggest dreams and goals come true this year! Work hard, Buchi!",
  3: "🎈 Wish #3: Always stay as cheerful, drama-filled, and sweet as you are!",
  4: "🎈 Wish #4: Unlimited shopping, tasty food, and happiness forever! Happy Birthday! 🎉"
};

let poppedCount = 0;

function popBalloon(number) {
  const balloonEl = document.querySelector(`.balloon-${number}`);
  if (balloonEl.classList.contains('popped')) return;

  balloonEl.classList.add('popped');
  
  const wishBox = document.getElementById('balloonWishBox');
  const wishText = document.getElementById('balloonWishText');
  wishText.innerText = balloonWishes[number];
  wishBox.classList.remove('hidden');

  poppedCount++;
  if (poppedCount === 4) {
    document.getElementById('balloonsNextBtn').classList.remove('hidden');
  }
}

function closeWish() {
  document.getElementById('balloonWishBox').classList.add('hidden');
}

// Screen 4: Candle Blow out
function blowCandle() {
  const flame = document.getElementById('flame');
  const status = document.getElementById('candleStatus');
  const nextBtn = document.getElementById('candleNextBtn');

  flame.classList.add('out');
  status.innerText = '✨ Wish sent to the stars! Happy Birthday! ✨';
  nextBtn.classList.remove('hidden');
}

// Restart
function restartSurprise() {
  poppedCount = 0;
  document.querySelectorAll('.balloon').forEach(b => b.classList.remove('popped'));
  document.getElementById('balloonWishBox').classList.add('hidden');
  document.getElementById('balloonsNextBtn').classList.add('hidden');
  document.getElementById('flame').classList.remove('out');
  document.getElementById('candleStatus').innerText = 'Tap the flame! 🔥';
  document.getElementById('candleNextBtn').classList.add('hidden');
  document.getElementById('passcodeInput').value = '';
  
  goToScreen('screen-welcome');
}
