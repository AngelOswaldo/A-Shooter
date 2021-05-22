/* Global Vars */
var enemies = 3;

function checkEnemies()
{
  if(enemies == 0)
  {
    setTimeout(onWin, 1000);
  }
}
function onWin()
{
  document.location = "win.html";
}

/*  Click mouse to shoot  */
AFRAME.registerComponent('click-to-shoot', {
    init: function () {
        document.body.addEventListener('mousedown', () => {
            this.el.emit('shoot');
            document.getElementById('plyShoot').components.sound.playSound();
            console.log("enemies: "+ enemies);
        });
    }
});

/*Change color when hit */
AFRAME.registerComponent('hit-handler', {
    init: function () {
        var el = this.el;
        el.addEventListener('hit', () => {
            console.log("hit");
            document.getElementById('plyHit').components.sound.playSound();
        });

        el.addEventListener('die', () => {
            --enemies;
            el.object3D.visible = false;
            console.log("die");
            document.getElementById('plyDie').components.sound.playSound();
            checkEnemies();
        });
    }
});