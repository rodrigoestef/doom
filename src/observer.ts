class observer {
  static observe: Array<() => any> = [];
  public static add(f: () => any): any {
    observer.observe.push(f);
  }
  constructor() {
    setInterval(() => {
      for (const f of observer.observe) {
        f();
      }
    }, 1);
  }
}

export default observer;
