(function () {
var code = (function () {
  'use strict';

  var PluginManager = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var DOMUtils = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

  var getMinWidth = function (editor) {
    return editor.getParam('code_dialog_width', 600);
  };
  var getMinHeight = function (editor) {
    return editor.getParam('code_dialog_height', Math.min(DOMUtils.DOM.getViewPort().h - 200, 500));
  };
  var $_b4s7fh9ajepbv9hv = {
    getMinWidth: getMinWidth,
    getMinHeight: getMinHeight
  };

  var setContent = function (editor, html) {
    editor.focus();
    editor.undoManager.transact(function () {
      editor.setContent(html);
    });
    editor.selection.setCursorLocation();
    editor.nodeChanged();
  };
  var getContent = function (editor) {
    return editor.getContent({ source_view: true });
  };
  var $_810ha79cjepbv9hy = {
    setContent: setContent,
    getContent: getContent
  };

  var open = function (editor) {
    var minWidth = $_b4s7fh9ajepbv9hv.getMinWidth(editor);
    var minHeight = $_b4s7fh9ajepbv9hv.getMinHeight(editor);
    var win = editor.windowManager.open({
      title: 'Source code',
      body: {
        type: 'textbox',
        name: 'code',
        multiline: true,
        minWidth: minWidth,
        minHeight: minHeight,
        spellcheck: false,
        style: 'direction: ltr; text-align: left'
      },
      onSubmit: function (e) {
        $_810ha79cjepbv9hy.setContent(editor, e.data.code);
      }
    });
    win.find('#code').value($_810ha79cjepbv9hy.getContent(editor));
  };
  var $_8q26wk99jepbv9hu = { open: open };

  var register = function (editor) {
    editor.addCommand('mceCodeEditor', function () {
      $_8q26wk99jepbv9hu.open(editor);
    });
  };
  var $_5yl5a498jepbv9hs = { register: register };

  var register$1 = function (editor) {
    editor.addButton('code', {
      icon: 'code',
      tooltip: 'Source code',
      onclick: function () {
        $_8q26wk99jepbv9hu.open(editor);
      }
    });
    editor.addMenuItem('code', {
      icon: 'code',
      text: 'Source code',
      onclick: function () {
        $_8q26wk99jepbv9hu.open(editor);
      }
    });
  };
  var $_7jtkqe9djepbv9hz = { register: register$1 };

  PluginManager.add('code', function (editor) {
    $_5yl5a498jepbv9hs.register(editor);
    $_7jtkqe9djepbv9hz.register(editor);
    return {};
  });
  function Plugin () {
  }

  return Plugin;

}());
})();
