export class Typewriter {
  private readonly el: HTMLElement | null;
  private timer: ReturnType<typeof setTimeout> | null = null;

  constructor(selector: string) {
    this.el = document.querySelector(selector);
  }

  start(text: string, minMs = 30, maxMs = 100): void {
    this.stop();
    if (!this.el) return;

    this.el.textContent = '';
    let i = 0;

    const tick = () => {
      if (i < text.length) {
        this.el!.textContent += text[i++];
        this.timer = setTimeout(tick, Math.random() * (maxMs - minMs) + minMs);
      }
    };
    tick();
  }

  stop(): void {
    if (this.timer !== null) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
}
