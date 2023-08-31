export class CustomScroll {
  static addCustomScroll(container) {
    let v = 0;
    const wheelMult = 0.003;
    const a = 0.003;
    let lastTime = Date.now();

    const loop = () => {
      if (
        (v < 0 && container.scrollTop === 0) ||
        (v > 0 &&
          container.scrollHeight - Math.abs(container.scrollTop) ===
          container.clientHeight)
      ) {
        v = 0;
        return;
      }

      const now = Date.now();
      const deltaTime = now - lastTime;

      const reverse = (n) => {
        return n > 0 ? n : -n;
      };

      container.scrollBy(0, v * deltaTime);
      const absV = Math.abs(v);

      const brake = absV < 0.1 ? reverse(v) : a * absV * deltaTime;
      v = Math.sign(v) * Math.max(0, absV - brake);

      if (v == 0) {
        return;
      }

      lastTime = now;

      requestAnimationFrame(loop);
    };

    if (!("ontouchstart" in window)) {
      container.addEventListener(
        "wheel",
        (e) => {
          e.preventDefault();
          let start = v === 0;
          v = v + e.deltaY * wheelMult;
          if (start) {
            lastTime = Date.now();
            requestAnimationFrame(loop);
          }
        },
        { passive: false }
      );
    }
  }
  static init() {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("mac os") > -1) {
      console.log("disable");
    } else {
      this.addCustomScroll(document.documentElement);
    }
  }
}
