let joseph = 0;
const josephButton = document.getElementById("joseph");
const josephButton2 = document.getElementById("joseph2");
const josephCounter = document.getElementById("joseph-counter");
const josephConfirm = document.getElementById("josephConfirm");
let hasUpgraded = false;
click(1, josephButton);

function click(increment, buttonName) {
  buttonName.addEventListener('click', () => {
    joseph += increment;
    josephCounter.textContent = `Joseph count: ${joseph}`;
    
    if (joseph >= 20 && !hasUpgraded) {
      josephConfirm.textContent = "Unlock more joseph?";
      hasUpgraded = true;
    }
  });
}

josephConfirm.addEventListener('click', () => {
  josephConfirm.textContent = "";
  josephButton2.textContent = "MORE JOSEPH!";
});


click(20, josephButton2);
