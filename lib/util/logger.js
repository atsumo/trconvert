var logger = {
  debugLevel: "warn",
  log: function(message, level) {
    level = level || 'debug';
    // debugLevelはapacheのLogLevelに従い以下の8レベル設定とします。

    // emerg  サーバが稼動できないほどの重大なエラー
    // alert  critよりも重大なエラー
    // crit  重大なエラー
    // error  エラー
    // warn  警告
    // notice  通知メッセージ
    // info  サーバ情報
    // debug  デバック用の情報
    
    var levels = ['debug', 'info', 'notice', 'warn', 'error', 'crit', 'alert', 'emerg']
    
    if (levels.indexOf(level) >= levels.indexOf(logger.debugLevel)) {
      if (typeof message !== "string") {
        message = JSON.stringify(message);
      }
      console.log(level + ": " + message);
    }
  }
}

module.exports = logger;
