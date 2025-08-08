/*
  JavaScript for Aryan's personal site.

  This script handles dynamic navigation behaviour and the
  rain effect.  The navigation bars appear when the user
  moves the cursor near the top or left edge of the screen
  and hide after the cursor leaves those zones.  The rain
  effect is provided by the RainyDay.js library: once the
  underlying image loads, an engine is instantiated and
  configured to generate raindrops of varying sizes.
*/

document.addEventListener('DOMContentLoaded', function () {
  var topNav = document.querySelector('.top-nav');
  var sideNav = document.querySelector('.side-nav');

  // Hide or show navigation bars based on mouse position
  var hideTimeoutTop;
  var hideTimeoutSide;

  document.addEventListener('mousemove', function (e) {
    // Show top nav when near top (within 60px)
    if (e.clientY <= 60) {
      topNav.classList.add('visible');
      if (hideTimeoutTop) {
        clearTimeout(hideTimeoutTop);
      }
    } else {
      if (!hideTimeoutTop) {
        hideTimeoutTop = setTimeout(function () {
          topNav.classList.remove('visible');
          hideTimeoutTop = null;
        }, 800);
      }
    }

    // Show side nav when near left edge (within 60px)
    if (e.clientX <= 60) {
      sideNav.classList.add('visible');
      if (hideTimeoutSide) {
        clearTimeout(hideTimeoutSide);
      }
    } else {
      if (!hideTimeoutSide) {
        hideTimeoutSide = setTimeout(function () {
          sideNav.classList.remove('visible');
          hideTimeoutSide = null;
        }, 800);
      }
    }
  });

  // Initialise rain effect when RainyDay library is available
  if (typeof RainyDay !== 'undefined') {
    var container = document.getElementById('rain-container');
    var imgSrc = container ? (container.dataset.bg || container.getAttribute('data-bg')) : null;
    if (imgSrc) {
      var img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = imgSrc;
      img.onload = function () {
        var engine = new RainyDay({
          image: this,
          parentElement: container,
          blur: 10
        });
        // Set a fast trail effect for more natural drop streaks
        engine.trail = engine.TRAIL_FAST;
        // Start raining: arrays specify [width, height, radius] of droplets and quantity
        engine.rain([
          [1, 1, 300],
          [2, 2, 200],
          [3, 3, 100]
        ], 50);
      };
    }
  }
});