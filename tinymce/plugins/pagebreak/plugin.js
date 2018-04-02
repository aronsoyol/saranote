(function () {
var pagebreak = (function () {
  'use strict';

  var PluginManager = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var Env = tinymce.util.Tools.resolve('tinymce.Env');

  var getSeparatorHtml = function (editor) {
    return editor.getParam('pagebreak_separator', '<!-- pagebreak -->');
  };
  var shouldSplitBlock = function (editor) {
    return editor.getParam('pagebreak_split_block', false);
  };
  var $_1af4n7h0jepbvaoz = {
    getSeparatorHtml: getSeparatorHtml,
    shouldSplitBlock: shouldSplitBlock
  };

  var getPageBreakClass = function () {
    return 'mce-pagebreak';
  };
  var getPlaceholderHtml = function () {
    return '<img src="' + Env.transparentSrc + '" class="' + getPageBreakClass() + '" data-mce-resize="false" data-mce-placeholder />';
  };
  var setup = function (editor) {
    var separatorHtml = $_1af4n7h0jepbvaoz.getSeparatorHtml(editor);
    var pageBreakSeparatorRegExp = new RegExp(separatorHtml.replace(/[\?\.\*\[\]\(\)\{\}\+\^\$\:]/g, function (a) {
      return '\\' + a;
    }), 'gi');
    editor.on('BeforeSetContent', function (e) {
      e.content = e.content.replace(pageBreakSeparatorRegExp, getPlaceholderHtml());
    });
    editor.on('PreInit', function () {
      editor.serializer.addNodeFilter('img', function (nodes) {
        var i = nodes.length, node, className;
        while (i--) {
          node = nodes[i];
          className = node.attr('class');
          if (className && className.indexOf('mce-pagebreak') !== -1) {
            var parentNode = node.parent;
            if (editor.schema.getBlockElements()[parentNode.name] && $_1af4n7h0jepbvaoz.shouldSplitBlock(editor)) {
              parentNode.type = 3;
              parentNode.value = separatorHtml;
              parentNode.raw = true;
              node.remove();
              continue;
            }
            node.type = 3;
            node.value = separatorHtml;
            node.raw = true;
          }
        }
      });
    });
  };
  var $_donjz6gyjepbvaov = {
    setup: setup,
    getPlaceholderHtml: getPlaceholderHtml,
    getPageBreakClass: getPageBreakClass
  };

  var register = function (editor) {
    editor.addCommand('mcePageBreak', function () {
      if (editor.settings.pagebreak_split_block) {
        editor.insertContent('<p>' + $_donjz6gyjepbvaov.getPlaceholderHtml() + '</p>');
      } else {
        editor.insertContent($_donjz6gyjepbvaov.getPlaceholderHtml());
      }
    });
  };
  var $_7hoqzjgxjepbvaou = { register: register };

  var setup$1 = function (editor) {
    editor.on('ResolveName', function (e) {
      if (e.target.nodeName === 'IMG' && editor.dom.hasClass(e.target, $_donjz6gyjepbvaov.getPageBreakClass())) {
        e.name = 'pagebreak';
      }
    });
  };
  var $_8jn7uoh1jepbvap1 = { setup: setup$1 };

  var register$1 = function (editor) {
    editor.addButton('pagebreak', {
      title: 'Page break',
      cmd: 'mcePageBreak'
    });
    editor.addMenuItem('pagebreak', {
      text: 'Page break',
      icon: 'pagebreak',
      cmd: 'mcePageBreak',
      context: 'insert'
    });
  };
  var $_2pbsf1h2jepbvap2 = { register: register$1 };

  PluginManager.add('pagebreak', function (editor) {
    $_7hoqzjgxjepbvaou.register(editor);
    $_2pbsf1h2jepbvap2.register(editor);
    $_donjz6gyjepbvaov.setup(editor);
    $_8jn7uoh1jepbvap1.setup(editor);
  });
  function Plugin () {
  }

  return Plugin;

}());
})();
