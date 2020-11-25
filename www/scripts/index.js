class Intro {
  hue = 0;

  constructor() {
    requestAnimationFrame(this.cycle.bind(this));
  }

  get root() {
    return document.documentElement;
  }

  get icon() {
    return document.querySelector('link[rel="icon"]');
  }

  get colour() {
    return `hsl(${this.hue}deg, 59%, 55%)`;
  }

  get logo() {
    return `data:image/svg+xml,%3Csvg width='141' height='128' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient x1='50%25' y1='100%25' x2='50%25' y2='0%25' id='a'%3E%3Cstop stop-color='${this.colour}' offset='0%25' /%3E%3Cstop stop-color='${this.colour}' stop-opacity='0' offset='100%25' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='url(%23a)' d='M46 0h50l45 128H91z' /%3E%3Cpath fill='${this.colour}' d='M43 0h50L50 128H0z' /%3E%3C/g%3E%3C/svg%3E%0A`;
  }

  async cycle() {
    this.hue = this.hue < 360 ? this.hue + 1 : 0;
    this.root.style.setProperty('--current-colour', this.colour);
    this.icon.setAttribute('href', this.logo);

    await this.sleep(50);

    requestAnimationFrame(this.cycle.bind(this));
  }

  sleep(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });
  }
}

window.onload = () => new Intro();
