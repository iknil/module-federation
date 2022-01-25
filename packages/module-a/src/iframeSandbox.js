class iframeWindow {
  /**
   * 构造函数
   * @param {*} context 需要共享的对象
   * @param {*} frameWindow iframe的window
   */
  constructor() {
    const context = { document:window.document, history: window.history };
    const iframe  = document.createElement('iframe',{ src:'about:blank' });
    document.body.appendChild(iframe);
    const sandboxGlobal = iframe.contentWindow;

    return new Proxy(sandboxGlobal, {
      get(target, name) {
        if (name in context) { // 优先使用共享对象
          return context[name];
        }
        return target[name];
      },
      set(target, name, value) {
        if (name in context) { // 修改共享对象的值
          return context[name] = value;
        }
        target[name] = value;
      }
    })
  }
}