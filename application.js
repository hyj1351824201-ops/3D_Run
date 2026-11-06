// 自定义启动文件：覆盖引擎默认的 application.js（构建时会原样拷到 build/web-desktop/）。
// 唯一改动：overrideSettings.screen.exactFitScreen = true。
//
// 原因：web-desktop 构建出的 src/settings.json 里 exactFitScreen 是 false，
// 引擎 3.8.8 只认这个配置，根本不读 index.html 里的 cc_exact_fit_screen 属性。
// 为 false 时引擎按「固定大小子窗口」模式工作，浏览器窗口改变后不会重建画布，
// 画布只是被 CSS 拉伸 → 画面压扁、发虚。改成 true 后引擎监听 resize，
// 按 窗口尺寸 × devicePixelRatio 重建画布，任何窗口大小都清晰。
System.register([], function (_export, _context) {
  "use strict";

  var cc, Application;
  return {
    setters: [],
    execute: function () {
      _export("Application", Application = /*#__PURE__*/function () {
        function Application() {
          this.settingsPath = 'src/settings.json';
          this.showFPS = false;
        }
        Application.prototype.init = function (engine) {
          cc = engine;
          cc.game.onPostBaseInitDelegate.add(this.onPostInitBase.bind(this));
          cc.game.onPostSubsystemInitDelegate.add(this.onPostSystemInit.bind(this));
        };
        Application.prototype.onPostInitBase = function () {};
        Application.prototype.onPostSystemInit = function () {};
        Application.prototype.start = function () {
          return cc.game.init({
            debugMode: cc.DebugMode.ERROR,
            settingsPath: this.settingsPath,
            overrideSettings: {
              screen: {
                exactFitScreen: true
              },
              profiling: {
                showFPS: this.showFPS
              }
            }
          }).then(function () {
            return cc.game.run();
          });
        };
        return Application;
      }());
    }
  };
});
