(function () {
var mobile = (function () {
  'use strict';

  var noop = function () {
  };
  var noarg = function (f) {
    return function () {
      return f();
    };
  };
  var compose = function (fa, fb) {
    return function () {
      return fa(fb.apply(null, arguments));
    };
  };
  var constant = function (value) {
    return function () {
      return value;
    };
  };
  var identity = function (x) {
    return x;
  };
  var tripleEquals = function (a, b) {
    return a === b;
  };
  var curry = function (f) {
    var args = new Array(arguments.length - 1);
    for (var i = 1; i < arguments.length; i++)
      args[i - 1] = arguments[i];
    return function () {
      var newArgs = new Array(arguments.length);
      for (var j = 0; j < newArgs.length; j++)
        newArgs[j] = arguments[j];
      var all = args.concat(newArgs);
      return f.apply(null, all);
    };
  };
  var not = function (f) {
    return function () {
      return !f.apply(null, arguments);
    };
  };
  var die = function (msg) {
    return function () {
      throw new Error(msg);
    };
  };
  var apply = function (f) {
    return f();
  };
  var call = function (f) {
    f();
  };
  var never = constant(false);
  var always = constant(true);
  var $_167yw6wjjepbveag = {
    noop: noop,
    noarg: noarg,
    compose: compose,
    constant: constant,
    identity: identity,
    tripleEquals: tripleEquals,
    curry: curry,
    not: not,
    die: die,
    apply: apply,
    call: call,
    never: never,
    always: always
  };

  var $_e2bl11wijepbvead = {
    contextmenu: $_167yw6wjjepbveag.constant('contextmenu'),
    touchstart: $_167yw6wjjepbveag.constant('touchstart'),
    touchmove: $_167yw6wjjepbveag.constant('touchmove'),
    touchend: $_167yw6wjjepbveag.constant('touchend'),
    gesturestart: $_167yw6wjjepbveag.constant('gesturestart'),
    mousedown: $_167yw6wjjepbveag.constant('mousedown'),
    mousemove: $_167yw6wjjepbveag.constant('mousemove'),
    mouseout: $_167yw6wjjepbveag.constant('mouseout'),
    mouseup: $_167yw6wjjepbveag.constant('mouseup'),
    mouseover: $_167yw6wjjepbveag.constant('mouseover'),
    focusin: $_167yw6wjjepbveag.constant('focusin'),
    keydown: $_167yw6wjjepbveag.constant('keydown'),
    input: $_167yw6wjjepbveag.constant('input'),
    change: $_167yw6wjjepbveag.constant('change'),
    focus: $_167yw6wjjepbveag.constant('focus'),
    click: $_167yw6wjjepbveag.constant('click'),
    transitionend: $_167yw6wjjepbveag.constant('transitionend'),
    selectstart: $_167yw6wjjepbveag.constant('selectstart')
  };

  var cached = function (f) {
    var called = false;
    var r;
    return function () {
      if (!called) {
        called = true;
        r = f.apply(null, arguments);
      }
      return r;
    };
  };
  var $_b2ra0wwljepbveal = { cached: cached };

  var firstMatch = function (regexes, s) {
    for (var i = 0; i < regexes.length; i++) {
      var x = regexes[i];
      if (x.test(s))
        return x;
    }
    return undefined;
  };
  var find = function (regexes, agent) {
    var r = firstMatch(regexes, agent);
    if (!r)
      return {
        major: 0,
        minor: 0
      };
    var group = function (i) {
      return Number(agent.replace(r, '$' + i));
    };
    return nu(group(1), group(2));
  };
  var detect = function (versionRegexes, agent) {
    var cleanedAgent = String(agent).toLowerCase();
    if (versionRegexes.length === 0)
      return unknown();
    return find(versionRegexes, cleanedAgent);
  };
  var unknown = function () {
    return nu(0, 0);
  };
  var nu = function (major, minor) {
    return {
      major: major,
      minor: minor
    };
  };
  var $_9jzvv9wojepbveav = {
    nu: nu,
    detect: detect,
    unknown: unknown
  };

  var edge = 'Edge';
  var chrome = 'Chrome';
  var ie = 'IE';
  var opera = 'Opera';
  var firefox = 'Firefox';
  var safari = 'Safari';
  var isBrowser = function (name, current) {
    return function () {
      return current === name;
    };
  };
  var unknown$1 = function () {
    return nu$1({
      current: undefined,
      version: $_9jzvv9wojepbveav.unknown()
    });
  };
  var nu$1 = function (info) {
    var current = info.current;
    var version = info.version;
    return {
      current: current,
      version: version,
      isEdge: isBrowser(edge, current),
      isChrome: isBrowser(chrome, current),
      isIE: isBrowser(ie, current),
      isOpera: isBrowser(opera, current),
      isFirefox: isBrowser(firefox, current),
      isSafari: isBrowser(safari, current)
    };
  };
  var $_3uygdcwnjepbveao = {
    unknown: unknown$1,
    nu: nu$1,
    edge: $_167yw6wjjepbveag.constant(edge),
    chrome: $_167yw6wjjepbveag.constant(chrome),
    ie: $_167yw6wjjepbveag.constant(ie),
    opera: $_167yw6wjjepbveag.constant(opera),
    firefox: $_167yw6wjjepbveag.constant(firefox),
    safari: $_167yw6wjjepbveag.constant(safari)
  };

  var windows = 'Windows';
  var ios = 'iOS';
  var android = 'Android';
  var linux = 'Linux';
  var osx = 'OSX';
  var solaris = 'Solaris';
  var freebsd = 'FreeBSD';
  var isOS = function (name, current) {
    return function () {
      return current === name;
    };
  };
  var unknown$2 = function () {
    return nu$2({
      current: undefined,
      version: $_9jzvv9wojepbveav.unknown()
    });
  };
  var nu$2 = function (info) {
    var current = info.current;
    var version = info.version;
    return {
      current: current,
      version: version,
      isWindows: isOS(windows, current),
      isiOS: isOS(ios, current),
      isAndroid: isOS(android, current),
      isOSX: isOS(osx, current),
      isLinux: isOS(linux, current),
      isSolaris: isOS(solaris, current),
      isFreeBSD: isOS(freebsd, current)
    };
  };
  var $_40siyiwpjepbveaw = {
    unknown: unknown$2,
    nu: nu$2,
    windows: $_167yw6wjjepbveag.constant(windows),
    ios: $_167yw6wjjepbveag.constant(ios),
    android: $_167yw6wjjepbveag.constant(android),
    linux: $_167yw6wjjepbveag.constant(linux),
    osx: $_167yw6wjjepbveag.constant(osx),
    solaris: $_167yw6wjjepbveag.constant(solaris),
    freebsd: $_167yw6wjjepbveag.constant(freebsd)
  };

  function DeviceType (os, browser, userAgent) {
    var isiPad = os.isiOS() && /ipad/i.test(userAgent) === true;
    var isiPhone = os.isiOS() && !isiPad;
    var isAndroid3 = os.isAndroid() && os.version.major === 3;
    var isAndroid4 = os.isAndroid() && os.version.major === 4;
    var isTablet = isiPad || isAndroid3 || isAndroid4 && /mobile/i.test(userAgent) === true;
    var isTouch = os.isiOS() || os.isAndroid();
    var isPhone = isTouch && !isTablet;
    var iOSwebview = browser.isSafari() && os.isiOS() && /safari/i.test(userAgent) === false;
    return {
      isiPad: $_167yw6wjjepbveag.constant(isiPad),
      isiPhone: $_167yw6wjjepbveag.constant(isiPhone),
      isTablet: $_167yw6wjjepbveag.constant(isTablet),
      isPhone: $_167yw6wjjepbveag.constant(isPhone),
      isTouch: $_167yw6wjjepbveag.constant(isTouch),
      isAndroid: os.isAndroid,
      isiOS: os.isiOS,
      isWebView: $_167yw6wjjepbveag.constant(iOSwebview)
    };
  }

  var never$1 = $_167yw6wjjepbveag.never;
  var always$1 = $_167yw6wjjepbveag.always;
  var none = function () {
    return NONE;
  };
  var NONE = function () {
    var eq = function (o) {
      return o.isNone();
    };
    var call = function (thunk) {
      return thunk();
    };
    var id = function (n) {
      return n;
    };
    var noop = function () {
    };
    var me = {
      fold: function (n, s) {
        return n();
      },
      is: never$1,
      isSome: never$1,
      isNone: always$1,
      getOr: id,
      getOrThunk: call,
      getOrDie: function (msg) {
        throw new Error(msg || 'error: getOrDie called on none.');
      },
      or: id,
      orThunk: call,
      map: none,
      ap: none,
      each: noop,
      bind: none,
      flatten: none,
      exists: never$1,
      forall: always$1,
      filter: none,
      equals: eq,
      equals_: eq,
      toArray: function () {
        return [];
      },
      toString: $_167yw6wjjepbveag.constant('none()')
    };
    if (Object.freeze)
      Object.freeze(me);
    return me;
  }();
  var some = function (a) {
    var constant_a = function () {
      return a;
    };
    var self = function () {
      return me;
    };
    var map = function (f) {
      return some(f(a));
    };
    var bind = function (f) {
      return f(a);
    };
    var me = {
      fold: function (n, s) {
        return s(a);
      },
      is: function (v) {
        return a === v;
      },
      isSome: always$1,
      isNone: never$1,
      getOr: constant_a,
      getOrThunk: constant_a,
      getOrDie: constant_a,
      or: self,
      orThunk: self,
      map: map,
      ap: function (optfab) {
        return optfab.fold(none, function (fab) {
          return some(fab(a));
        });
      },
      each: function (f) {
        f(a);
      },
      bind: bind,
      flatten: constant_a,
      exists: bind,
      forall: bind,
      filter: function (f) {
        return f(a) ? me : NONE;
      },
      equals: function (o) {
        return o.is(a);
      },
      equals_: function (o, elementEq) {
        return o.fold(never$1, function (b) {
          return elementEq(a, b);
        });
      },
      toArray: function () {
        return [a];
      },
      toString: function () {
        return 'some(' + a + ')';
      }
    };
    return me;
  };
  var from = function (value) {
    return value === null || value === undefined ? NONE : some(value);
  };
  var Option = {
    some: some,
    none: none,
    from: from
  };

  var rawIndexOf = function () {
    var pIndexOf = Array.prototype.indexOf;
    var fastIndex = function (xs, x) {
      return pIndexOf.call(xs, x);
    };
    var slowIndex = function (xs, x) {
      return slowIndexOf(xs, x);
    };
    return pIndexOf === undefined ? slowIndex : fastIndex;
  }();
  var indexOf = function (xs, x) {
    var r = rawIndexOf(xs, x);
    return r === -1 ? Option.none() : Option.some(r);
  };
  var contains = function (xs, x) {
    return rawIndexOf(xs, x) > -1;
  };
  var exists = function (xs, pred) {
    return findIndex(xs, pred).isSome();
  };
  var range = function (num, f) {
    var r = [];
    for (var i = 0; i < num; i++) {
      r.push(f(i));
    }
    return r;
  };
  var chunk = function (array, size) {
    var r = [];
    for (var i = 0; i < array.length; i += size) {
      var s = array.slice(i, i + size);
      r.push(s);
    }
    return r;
  };
  var map = function (xs, f) {
    var len = xs.length;
    var r = new Array(len);
    for (var i = 0; i < len; i++) {
      var x = xs[i];
      r[i] = f(x, i, xs);
    }
    return r;
  };
  var each = function (xs, f) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      f(x, i, xs);
    }
  };
  var eachr = function (xs, f) {
    for (var i = xs.length - 1; i >= 0; i--) {
      var x = xs[i];
      f(x, i, xs);
    }
  };
  var partition = function (xs, pred) {
    var pass = [];
    var fail = [];
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      var arr = pred(x, i, xs) ? pass : fail;
      arr.push(x);
    }
    return {
      pass: pass,
      fail: fail
    };
  };
  var filter = function (xs, pred) {
    var r = [];
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        r.push(x);
      }
    }
    return r;
  };
  var groupBy = function (xs, f) {
    if (xs.length === 0) {
      return [];
    } else {
      var wasType = f(xs[0]);
      var r = [];
      var group = [];
      for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        var type = f(x);
        if (type !== wasType) {
          r.push(group);
          group = [];
        }
        wasType = type;
        group.push(x);
      }
      if (group.length !== 0) {
        r.push(group);
      }
      return r;
    }
  };
  var foldr = function (xs, f, acc) {
    eachr(xs, function (x) {
      acc = f(acc, x);
    });
    return acc;
  };
  var foldl = function (xs, f, acc) {
    each(xs, function (x) {
      acc = f(acc, x);
    });
    return acc;
  };
  var find$1 = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        return Option.some(x);
      }
    }
    return Option.none();
  };
  var findIndex = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        return Option.some(i);
      }
    }
    return Option.none();
  };
  var slowIndexOf = function (xs, x) {
    for (var i = 0, len = xs.length; i < len; ++i) {
      if (xs[i] === x) {
        return i;
      }
    }
    return -1;
  };
  var push = Array.prototype.push;
  var flatten = function (xs) {
    var r = [];
    for (var i = 0, len = xs.length; i < len; ++i) {
      if (!Array.prototype.isPrototypeOf(xs[i]))
        throw new Error('Arr.flatten item ' + i + ' was not an array, input: ' + xs);
      push.apply(r, xs[i]);
    }
    return r;
  };
  var bind = function (xs, f) {
    var output = map(xs, f);
    return flatten(output);
  };
  var forall = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; ++i) {
      var x = xs[i];
      if (pred(x, i, xs) !== true) {
        return false;
      }
    }
    return true;
  };
  var equal = function (a1, a2) {
    return a1.length === a2.length && forall(a1, function (x, i) {
      return x === a2[i];
    });
  };
  var slice = Array.prototype.slice;
  var reverse = function (xs) {
    var r = slice.call(xs, 0);
    r.reverse();
    return r;
  };
  var difference = function (a1, a2) {
    return filter(a1, function (x) {
      return !contains(a2, x);
    });
  };
  var mapToObject = function (xs, f) {
    var r = {};
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      r[String(x)] = f(x, i);
    }
    return r;
  };
  var pure = function (x) {
    return [x];
  };
  var sort = function (xs, comparator) {
    var copy = slice.call(xs, 0);
    copy.sort(comparator);
    return copy;
  };
  var head = function (xs) {
    return xs.length === 0 ? Option.none() : Option.some(xs[0]);
  };
  var last = function (xs) {
    return xs.length === 0 ? Option.none() : Option.some(xs[xs.length - 1]);
  };
  var $_227y8rwsjepbveb6 = {
    map: map,
    each: each,
    eachr: eachr,
    partition: partition,
    filter: filter,
    groupBy: groupBy,
    indexOf: indexOf,
    foldr: foldr,
    foldl: foldl,
    find: find$1,
    findIndex: findIndex,
    flatten: flatten,
    bind: bind,
    forall: forall,
    exists: exists,
    contains: contains,
    equal: equal,
    reverse: reverse,
    chunk: chunk,
    difference: difference,
    mapToObject: mapToObject,
    pure: pure,
    sort: sort,
    range: range,
    head: head,
    last: last
  };

  var detect$1 = function (candidates, userAgent) {
    var agent = String(userAgent).toLowerCase();
    return $_227y8rwsjepbveb6.find(candidates, function (candidate) {
      return candidate.search(agent);
    });
  };
  var detectBrowser = function (browsers, userAgent) {
    return detect$1(browsers, userAgent).map(function (browser) {
      var version = $_9jzvv9wojepbveav.detect(browser.versionRegexes, userAgent);
      return {
        current: browser.name,
        version: version
      };
    });
  };
  var detectOs = function (oses, userAgent) {
    return detect$1(oses, userAgent).map(function (os) {
      var version = $_9jzvv9wojepbveav.detect(os.versionRegexes, userAgent);
      return {
        current: os.name,
        version: version
      };
    });
  };
  var $_cehk7hwrjepbveb2 = {
    detectBrowser: detectBrowser,
    detectOs: detectOs
  };

  var addToStart = function (str, prefix) {
    return prefix + str;
  };
  var addToEnd = function (str, suffix) {
    return str + suffix;
  };
  var removeFromStart = function (str, numChars) {
    return str.substring(numChars);
  };
  var removeFromEnd = function (str, numChars) {
    return str.substring(0, str.length - numChars);
  };
  var $_dlmoukwwjepbvebo = {
    addToStart: addToStart,
    addToEnd: addToEnd,
    removeFromStart: removeFromStart,
    removeFromEnd: removeFromEnd
  };

  var first = function (str, count) {
    return str.substr(0, count);
  };
  var last$1 = function (str, count) {
    return str.substr(str.length - count, str.length);
  };
  var head$1 = function (str) {
    return str === '' ? Option.none() : Option.some(str.substr(0, 1));
  };
  var tail = function (str) {
    return str === '' ? Option.none() : Option.some(str.substring(1));
  };
  var $_53c8bdwxjepbvebp = {
    first: first,
    last: last$1,
    head: head$1,
    tail: tail
  };

  var checkRange = function (str, substr, start) {
    if (substr === '')
      return true;
    if (str.length < substr.length)
      return false;
    var x = str.substr(start, start + substr.length);
    return x === substr;
  };
  var supplant = function (str, obj) {
    var isStringOrNumber = function (a) {
      var t = typeof a;
      return t === 'string' || t === 'number';
    };
    return str.replace(/\${([^{}]*)}/g, function (a, b) {
      var value = obj[b];
      return isStringOrNumber(value) ? value : a;
    });
  };
  var removeLeading = function (str, prefix) {
    return startsWith(str, prefix) ? $_dlmoukwwjepbvebo.removeFromStart(str, prefix.length) : str;
  };
  var removeTrailing = function (str, prefix) {
    return endsWith(str, prefix) ? $_dlmoukwwjepbvebo.removeFromEnd(str, prefix.length) : str;
  };
  var ensureLeading = function (str, prefix) {
    return startsWith(str, prefix) ? str : $_dlmoukwwjepbvebo.addToStart(str, prefix);
  };
  var ensureTrailing = function (str, prefix) {
    return endsWith(str, prefix) ? str : $_dlmoukwwjepbvebo.addToEnd(str, prefix);
  };
  var contains$1 = function (str, substr) {
    return str.indexOf(substr) !== -1;
  };
  var capitalize = function (str) {
    return $_53c8bdwxjepbvebp.head(str).bind(function (head) {
      return $_53c8bdwxjepbvebp.tail(str).map(function (tail) {
        return head.toUpperCase() + tail;
      });
    }).getOr(str);
  };
  var startsWith = function (str, prefix) {
    return checkRange(str, prefix, 0);
  };
  var endsWith = function (str, suffix) {
    return checkRange(str, suffix, str.length - suffix.length);
  };
  var trim = function (str) {
    return str.replace(/^\s+|\s+$/g, '');
  };
  var lTrim = function (str) {
    return str.replace(/^\s+/g, '');
  };
  var rTrim = function (str) {
    return str.replace(/\s+$/g, '');
  };
  var $_awdhkiwvjepbvebm = {
    supplant: supplant,
    startsWith: startsWith,
    removeLeading: removeLeading,
    removeTrailing: removeTrailing,
    ensureLeading: ensureLeading,
    ensureTrailing: ensureTrailing,
    endsWith: endsWith,
    contains: contains$1,
    trim: trim,
    lTrim: lTrim,
    rTrim: rTrim,
    capitalize: capitalize
  };

  var normalVersionRegex = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/;
  var checkContains = function (target) {
    return function (uastring) {
      return $_awdhkiwvjepbvebm.contains(uastring, target);
    };
  };
  var browsers = [
    {
      name: 'Edge',
      versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
      search: function (uastring) {
        var monstrosity = $_awdhkiwvjepbvebm.contains(uastring, 'edge/') && $_awdhkiwvjepbvebm.contains(uastring, 'chrome') && $_awdhkiwvjepbvebm.contains(uastring, 'safari') && $_awdhkiwvjepbvebm.contains(uastring, 'applewebkit');
        return monstrosity;
      }
    },
    {
      name: 'Chrome',
      versionRegexes: [
        /.*?chrome\/([0-9]+)\.([0-9]+).*/,
        normalVersionRegex
      ],
      search: function (uastring) {
        return $_awdhkiwvjepbvebm.contains(uastring, 'chrome') && !$_awdhkiwvjepbvebm.contains(uastring, 'chromeframe');
      }
    },
    {
      name: 'IE',
      versionRegexes: [
        /.*?msie\ ?([0-9]+)\.([0-9]+).*/,
        /.*?rv:([0-9]+)\.([0-9]+).*/
      ],
      search: function (uastring) {
        return $_awdhkiwvjepbvebm.contains(uastring, 'msie') || $_awdhkiwvjepbvebm.contains(uastring, 'trident');
      }
    },
    {
      name: 'Opera',
      versionRegexes: [
        normalVersionRegex,
        /.*?opera\/([0-9]+)\.([0-9]+).*/
      ],
      search: checkContains('opera')
    },
    {
      name: 'Firefox',
      versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
      search: checkContains('firefox')
    },
    {
      name: 'Safari',
      versionRegexes: [
        normalVersionRegex,
        /.*?cpu os ([0-9]+)_([0-9]+).*/
      ],
      search: function (uastring) {
        return ($_awdhkiwvjepbvebm.contains(uastring, 'safari') || $_awdhkiwvjepbvebm.contains(uastring, 'mobile/')) && $_awdhkiwvjepbvebm.contains(uastring, 'applewebkit');
      }
    }
  ];
  var oses = [
    {
      name: 'Windows',
      search: checkContains('win'),
      versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
    },
    {
      name: 'iOS',
      search: function (uastring) {
        return $_awdhkiwvjepbvebm.contains(uastring, 'iphone') || $_awdhkiwvjepbvebm.contains(uastring, 'ipad');
      },
      versionRegexes: [
        /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
        /.*cpu os ([0-9]+)_([0-9]+).*/,
        /.*cpu iphone os ([0-9]+)_([0-9]+).*/
      ]
    },
    {
      name: 'Android',
      search: checkContains('android'),
      versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
    },
    {
      name: 'OSX',
      search: checkContains('os x'),
      versionRegexes: [/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]
    },
    {
      name: 'Linux',
      search: checkContains('linux'),
      versionRegexes: []
    },
    {
      name: 'Solaris',
      search: checkContains('sunos'),
      versionRegexes: []
    },
    {
      name: 'FreeBSD',
      search: checkContains('freebsd'),
      versionRegexes: []
    }
  ];
  var $_4ycpgtwujepbvebh = {
    browsers: $_167yw6wjjepbveag.constant(browsers),
    oses: $_167yw6wjjepbveag.constant(oses)
  };

  var detect$2 = function (userAgent) {
    var browsers = $_4ycpgtwujepbvebh.browsers();
    var oses = $_4ycpgtwujepbvebh.oses();
    var browser = $_cehk7hwrjepbveb2.detectBrowser(browsers, userAgent).fold($_3uygdcwnjepbveao.unknown, $_3uygdcwnjepbveao.nu);
    var os = $_cehk7hwrjepbveb2.detectOs(oses, userAgent).fold($_40siyiwpjepbveaw.unknown, $_40siyiwpjepbveaw.nu);
    var deviceType = DeviceType(os, browser, userAgent);
    return {
      browser: browser,
      os: os,
      deviceType: deviceType
    };
  };
  var $_djrk4owmjepbvean = { detect: detect$2 };

  var detect$3 = $_b2ra0wwljepbveal.cached(function () {
    var userAgent = navigator.userAgent;
    return $_djrk4owmjepbvean.detect(userAgent);
  });
  var $_fs3v1iwkjepbveaj = { detect: detect$3 };

  var alloy = { tap: $_167yw6wjjepbveag.constant('alloy.tap') };
  var $_alx3dcwhjepbvea8 = {
    focus: $_167yw6wjjepbveag.constant('alloy.focus'),
    postBlur: $_167yw6wjjepbveag.constant('alloy.blur.post'),
    receive: $_167yw6wjjepbveag.constant('alloy.receive'),
    execute: $_167yw6wjjepbveag.constant('alloy.execute'),
    focusItem: $_167yw6wjjepbveag.constant('alloy.focus.item'),
    tap: alloy.tap,
    tapOrClick: $_fs3v1iwkjepbveaj.detect().deviceType.isTouch() ? alloy.tap : $_e2bl11wijepbvead.click,
    longpress: $_167yw6wjjepbveag.constant('alloy.longpress'),
    sandboxClose: $_167yw6wjjepbveag.constant('alloy.sandbox.close'),
    systemInit: $_167yw6wjjepbveag.constant('alloy.system.init'),
    windowScroll: $_167yw6wjjepbveag.constant('alloy.system.scroll'),
    attachedToDom: $_167yw6wjjepbveag.constant('alloy.system.attached'),
    detachedFromDom: $_167yw6wjjepbveag.constant('alloy.system.detached'),
    changeTab: $_167yw6wjjepbveag.constant('alloy.change.tab'),
    dismissTab: $_167yw6wjjepbveag.constant('alloy.dismiss.tab')
  };

  var typeOf = function (x) {
    if (x === null)
      return 'null';
    var t = typeof x;
    if (t === 'object' && Array.prototype.isPrototypeOf(x))
      return 'array';
    if (t === 'object' && String.prototype.isPrototypeOf(x))
      return 'string';
    return t;
  };
  var isType = function (type) {
    return function (value) {
      return typeOf(value) === type;
    };
  };
  var $_bu3dt3wzjepbvebs = {
    isString: isType('string'),
    isObject: isType('object'),
    isArray: isType('array'),
    isNull: isType('null'),
    isBoolean: isType('boolean'),
    isUndefined: isType('undefined'),
    isFunction: isType('function'),
    isNumber: isType('number')
  };

  var shallow = function (old, nu) {
    return nu;
  };
  var deep = function (old, nu) {
    var bothObjects = $_bu3dt3wzjepbvebs.isObject(old) && $_bu3dt3wzjepbvebs.isObject(nu);
    return bothObjects ? deepMerge(old, nu) : nu;
  };
  var baseMerge = function (merger) {
    return function () {
      var objects = new Array(arguments.length);
      for (var i = 0; i < objects.length; i++)
        objects[i] = arguments[i];
      if (objects.length === 0)
        throw new Error('Can\'t merge zero objects');
      var ret = {};
      for (var j = 0; j < objects.length; j++) {
        var curObject = objects[j];
        for (var key in curObject)
          if (curObject.hasOwnProperty(key)) {
            ret[key] = merger(ret[key], curObject[key]);
          }
      }
      return ret;
    };
  };
  var deepMerge = baseMerge(deep);
  var merge = baseMerge(shallow);
  var $_aaookwyjepbvebq = {
    deepMerge: deepMerge,
    merge: merge
  };

  var keys = function () {
    var fastKeys = Object.keys;
    var slowKeys = function (o) {
      var r = [];
      for (var i in o) {
        if (o.hasOwnProperty(i)) {
          r.push(i);
        }
      }
      return r;
    };
    return fastKeys === undefined ? slowKeys : fastKeys;
  }();
  var each$1 = function (obj, f) {
    var props = keys(obj);
    for (var k = 0, len = props.length; k < len; k++) {
      var i = props[k];
      var x = obj[i];
      f(x, i, obj);
    }
  };
  var objectMap = function (obj, f) {
    return tupleMap(obj, function (x, i, obj) {
      return {
        k: i,
        v: f(x, i, obj)
      };
    });
  };
  var tupleMap = function (obj, f) {
    var r = {};
    each$1(obj, function (x, i) {
      var tuple = f(x, i, obj);
      r[tuple.k] = tuple.v;
    });
    return r;
  };
  var bifilter = function (obj, pred) {
    var t = {};
    var f = {};
    each$1(obj, function (x, i) {
      var branch = pred(x, i) ? t : f;
      branch[i] = x;
    });
    return {
      t: t,
      f: f
    };
  };
  var mapToArray = function (obj, f) {
    var r = [];
    each$1(obj, function (value, name) {
      r.push(f(value, name));
    });
    return r;
  };
  var find$2 = function (obj, pred) {
    var props = keys(obj);
    for (var k = 0, len = props.length; k < len; k++) {
      var i = props[k];
      var x = obj[i];
      if (pred(x, i, obj)) {
        return Option.some(x);
      }
    }
    return Option.none();
  };
  var values = function (obj) {
    return mapToArray(obj, function (v) {
      return v;
    });
  };
  var size = function (obj) {
    return values(obj).length;
  };
  var $_1l8sbcx0jepbvebt = {
    bifilter: bifilter,
    each: each$1,
    map: objectMap,
    mapToArray: mapToArray,
    tupleMap: tupleMap,
    find: find$2,
    keys: keys,
    values: values,
    size: size
  };

  var emit = function (component, event) {
    dispatchWith(component, component.element(), event, {});
  };
  var emitWith = function (component, event, properties) {
    dispatchWith(component, component.element(), event, properties);
  };
  var emitExecute = function (component) {
    emit(component, $_alx3dcwhjepbvea8.execute());
  };
  var dispatch = function (component, target, event) {
    dispatchWith(component, target, event, {});
  };
  var dispatchWith = function (component, target, event, properties) {
    var data = $_aaookwyjepbvebq.deepMerge({ target: target }, properties);
    component.getSystem().triggerEvent(event, target, $_1l8sbcx0jepbvebt.map(data, $_167yw6wjjepbveag.constant));
  };
  var dispatchEvent = function (component, target, event, simulatedEvent) {
    component.getSystem().triggerEvent(event, target, simulatedEvent.event());
  };
  var dispatchFocus = function (component, target) {
    component.getSystem().triggerFocus(target, component.element());
  };
  var $_e4saacwgjepbvea0 = {
    emit: emit,
    emitWith: emitWith,
    emitExecute: emitExecute,
    dispatch: dispatch,
    dispatchWith: dispatchWith,
    dispatchEvent: dispatchEvent,
    dispatchFocus: dispatchFocus
  };

  function Immutable () {
    var fields = arguments;
    return function () {
      var values = new Array(arguments.length);
      for (var i = 0; i < values.length; i++)
        values[i] = arguments[i];
      if (fields.length !== values.length)
        throw new Error('Wrong number of arguments to struct. Expected "[' + fields.length + ']", got ' + values.length + ' arguments');
      var struct = {};
      $_227y8rwsjepbveb6.each(fields, function (name, i) {
        struct[name] = $_167yw6wjjepbveag.constant(values[i]);
      });
      return struct;
    };
  }

  var sort$1 = function (arr) {
    return arr.slice(0).sort();
  };
  var reqMessage = function (required, keys) {
    throw new Error('All required keys (' + sort$1(required).join(', ') + ') were not specified. Specified keys were: ' + sort$1(keys).join(', ') + '.');
  };
  var unsuppMessage = function (unsupported) {
    throw new Error('Unsupported keys for object: ' + sort$1(unsupported).join(', '));
  };
  var validateStrArr = function (label, array) {
    if (!$_bu3dt3wzjepbvebs.isArray(array))
      throw new Error('The ' + label + ' fields must be an array. Was: ' + array + '.');
    $_227y8rwsjepbveb6.each(array, function (a) {
      if (!$_bu3dt3wzjepbvebs.isString(a))
        throw new Error('The value ' + a + ' in the ' + label + ' fields was not a string.');
    });
  };
  var invalidTypeMessage = function (incorrect, type) {
    throw new Error('All values need to be of type: ' + type + '. Keys (' + sort$1(incorrect).join(', ') + ') were not.');
  };
  var checkDupes = function (everything) {
    var sorted = sort$1(everything);
    var dupe = $_227y8rwsjepbveb6.find(sorted, function (s, i) {
      return i < sorted.length - 1 && s === sorted[i + 1];
    });
    dupe.each(function (d) {
      throw new Error('The field: ' + d + ' occurs more than once in the combined fields: [' + sorted.join(', ') + '].');
    });
  };
  var $_7i7i4qx7jepbvecy = {
    sort: sort$1,
    reqMessage: reqMessage,
    unsuppMessage: unsuppMessage,
    validateStrArr: validateStrArr,
    invalidTypeMessage: invalidTypeMessage,
    checkDupes: checkDupes
  };

  function MixedBag (required, optional) {
    var everything = required.concat(optional);
    if (everything.length === 0)
      throw new Error('You must specify at least one required or optional field.');
    $_7i7i4qx7jepbvecy.validateStrArr('required', required);
    $_7i7i4qx7jepbvecy.validateStrArr('optional', optional);
    $_7i7i4qx7jepbvecy.checkDupes(everything);
    return function (obj) {
      var keys = $_1l8sbcx0jepbvebt.keys(obj);
      var allReqd = $_227y8rwsjepbveb6.forall(required, function (req) {
        return $_227y8rwsjepbveb6.contains(keys, req);
      });
      if (!allReqd)
        $_7i7i4qx7jepbvecy.reqMessage(required, keys);
      var unsupported = $_227y8rwsjepbveb6.filter(keys, function (key) {
        return !$_227y8rwsjepbveb6.contains(everything, key);
      });
      if (unsupported.length > 0)
        $_7i7i4qx7jepbvecy.unsuppMessage(unsupported);
      var r = {};
      $_227y8rwsjepbveb6.each(required, function (req) {
        r[req] = $_167yw6wjjepbveag.constant(obj[req]);
      });
      $_227y8rwsjepbveb6.each(optional, function (opt) {
        r[opt] = $_167yw6wjjepbveag.constant(Object.prototype.hasOwnProperty.call(obj, opt) ? Option.some(obj[opt]) : Option.none());
      });
      return r;
    };
  }

  var $_2pqntjx4jepbvecr = {
    immutable: Immutable,
    immutableBag: MixedBag
  };

  var toArray = function (target, f) {
    var r = [];
    var recurse = function (e) {
      r.push(e);
      return f(e);
    };
    var cur = f(target);
    do {
      cur = cur.bind(recurse);
    } while (cur.isSome());
    return r;
  };
  var $_5rkz1wx8jepbved8 = { toArray: toArray };

  var global = typeof window !== 'undefined' ? window : Function('return this;')();

  var path = function (parts, scope) {
    var o = scope !== undefined && scope !== null ? scope : global;
    for (var i = 0; i < parts.length && o !== undefined && o !== null; ++i)
      o = o[parts[i]];
    return o;
  };
  var resolve = function (p, scope) {
    var parts = p.split('.');
    return path(parts, scope);
  };
  var step = function (o, part) {
    if (o[part] === undefined || o[part] === null)
      o[part] = {};
    return o[part];
  };
  var forge = function (parts, target) {
    var o = target !== undefined ? target : global;
    for (var i = 0; i < parts.length; ++i)
      o = step(o, parts[i]);
    return o;
  };
  var namespace = function (name, target) {
    var parts = name.split('.');
    return forge(parts, target);
  };
  var $_7k0dybxcjepbvedr = {
    path: path,
    resolve: resolve,
    forge: forge,
    namespace: namespace
  };

  var unsafe = function (name, scope) {
    return $_7k0dybxcjepbvedr.resolve(name, scope);
  };
  var getOrDie = function (name, scope) {
    var actual = unsafe(name, scope);
    if (actual === undefined || actual === null)
      throw name + ' not available on this browser';
    return actual;
  };
  var $_s0o1jxbjepbvedn = { getOrDie: getOrDie };

  var node = function () {
    var f = $_s0o1jxbjepbvedn.getOrDie('Node');
    return f;
  };
  var compareDocumentPosition = function (a, b, match) {
    return (a.compareDocumentPosition(b) & match) !== 0;
  };
  var documentPositionPreceding = function (a, b) {
    return compareDocumentPosition(a, b, node().DOCUMENT_POSITION_PRECEDING);
  };
  var documentPositionContainedBy = function (a, b) {
    return compareDocumentPosition(a, b, node().DOCUMENT_POSITION_CONTAINED_BY);
  };
  var $_ccgyjcxajepbvedl = {
    documentPositionPreceding: documentPositionPreceding,
    documentPositionContainedBy: documentPositionContainedBy
  };

  var fromHtml = function (html, scope) {
    var doc = scope || document;
    var div = doc.createElement('div');
    div.innerHTML = html;
    if (!div.hasChildNodes() || div.childNodes.length > 1) {
      console.error('HTML does not have a single root node', html);
      throw 'HTML must have a single root node';
    }
    return fromDom(div.childNodes[0]);
  };
  var fromTag = function (tag, scope) {
    var doc = scope || document;
    var node = doc.createElement(tag);
    return fromDom(node);
  };
  var fromText = function (text, scope) {
    var doc = scope || document;
    var node = doc.createTextNode(text);
    return fromDom(node);
  };
  var fromDom = function (node) {
    if (node === null || node === undefined)
      throw new Error('Node cannot be null or undefined');
    return { dom: $_167yw6wjjepbveag.constant(node) };
  };
  var fromPoint = function (doc, x, y) {
    return Option.from(doc.dom().elementFromPoint(x, y)).map(fromDom);
  };
  var $_4pcs1kxfjepbvee2 = {
    fromHtml: fromHtml,
    fromTag: fromTag,
    fromText: fromText,
    fromDom: fromDom,
    fromPoint: fromPoint
  };

  var $_4nyonexgjepbvee7 = {
    ATTRIBUTE: 2,
    CDATA_SECTION: 4,
    COMMENT: 8,
    DOCUMENT: 9,
    DOCUMENT_TYPE: 10,
    DOCUMENT_FRAGMENT: 11,
    ELEMENT: 1,
    TEXT: 3,
    PROCESSING_INSTRUCTION: 7,
    ENTITY_REFERENCE: 5,
    ENTITY: 6,
    NOTATION: 12
  };

  var ELEMENT = $_4nyonexgjepbvee7.ELEMENT;
  var DOCUMENT = $_4nyonexgjepbvee7.DOCUMENT;
  var is = function (element, selector) {
    var elem = element.dom();
    if (elem.nodeType !== ELEMENT)
      return false;
    else if (elem.matches !== undefined)
      return elem.matches(selector);
    else if (elem.msMatchesSelector !== undefined)
      return elem.msMatchesSelector(selector);
    else if (elem.webkitMatchesSelector !== undefined)
      return elem.webkitMatchesSelector(selector);
    else if (elem.mozMatchesSelector !== undefined)
      return elem.mozMatchesSelector(selector);
    else
      throw new Error('Browser lacks native selectors');
  };
  var bypassSelector = function (dom) {
    return dom.nodeType !== ELEMENT && dom.nodeType !== DOCUMENT || dom.childElementCount === 0;
  };
  var all = function (selector, scope) {
    var base = scope === undefined ? document : scope.dom();
    return bypassSelector(base) ? [] : $_227y8rwsjepbveb6.map(base.querySelectorAll(selector), $_4pcs1kxfjepbvee2.fromDom);
  };
  var one = function (selector, scope) {
    var base = scope === undefined ? document : scope.dom();
    return bypassSelector(base) ? Option.none() : Option.from(base.querySelector(selector)).map($_4pcs1kxfjepbvee2.fromDom);
  };
  var $_d1zhj7xejepbvedv = {
    all: all,
    is: is,
    one: one
  };

  var eq = function (e1, e2) {
    return e1.dom() === e2.dom();
  };
  var isEqualNode = function (e1, e2) {
    return e1.dom().isEqualNode(e2.dom());
  };
  var member = function (element, elements) {
    return $_227y8rwsjepbveb6.exists(elements, $_167yw6wjjepbveag.curry(eq, element));
  };
  var regularContains = function (e1, e2) {
    var d1 = e1.dom(), d2 = e2.dom();
    return d1 === d2 ? false : d1.contains(d2);
  };
  var ieContains = function (e1, e2) {
    return $_ccgyjcxajepbvedl.documentPositionContainedBy(e1.dom(), e2.dom());
  };
  var browser = $_fs3v1iwkjepbveaj.detect().browser;
  var contains$2 = browser.isIE() ? ieContains : regularContains;
  var $_6fsl8xx9jepbveda = {
    eq: eq,
    isEqualNode: isEqualNode,
    member: member,
    contains: contains$2,
    is: $_d1zhj7xejepbvedv.is
  };

  var owner = function (element) {
    return $_4pcs1kxfjepbvee2.fromDom(element.dom().ownerDocument);
  };
  var documentElement = function (element) {
    var doc = owner(element);
    return $_4pcs1kxfjepbvee2.fromDom(doc.dom().documentElement);
  };
  var defaultView = function (element) {
    var el = element.dom();
    var defaultView = el.ownerDocument.defaultView;
    return $_4pcs1kxfjepbvee2.fromDom(defaultView);
  };
  var parent = function (element) {
    var dom = element.dom();
    return Option.from(dom.parentNode).map($_4pcs1kxfjepbvee2.fromDom);
  };
  var findIndex$1 = function (element) {
    return parent(element).bind(function (p) {
      var kin = children(p);
      return $_227y8rwsjepbveb6.findIndex(kin, function (elem) {
        return $_6fsl8xx9jepbveda.eq(element, elem);
      });
    });
  };
  var parents = function (element, isRoot) {
    var stop = $_bu3dt3wzjepbvebs.isFunction(isRoot) ? isRoot : $_167yw6wjjepbveag.constant(false);
    var dom = element.dom();
    var ret = [];
    while (dom.parentNode !== null && dom.parentNode !== undefined) {
      var rawParent = dom.parentNode;
      var parent = $_4pcs1kxfjepbvee2.fromDom(rawParent);
      ret.push(parent);
      if (stop(parent) === true)
        break;
      else
        dom = rawParent;
    }
    return ret;
  };
  var siblings = function (element) {
    var filterSelf = function (elements) {
      return $_227y8rwsjepbveb6.filter(elements, function (x) {
        return !$_6fsl8xx9jepbveda.eq(element, x);
      });
    };
    return parent(element).map(children).map(filterSelf).getOr([]);
  };
  var offsetParent = function (element) {
    var dom = element.dom();
    return Option.from(dom.offsetParent).map($_4pcs1kxfjepbvee2.fromDom);
  };
  var prevSibling = function (element) {
    var dom = element.dom();
    return Option.from(dom.previousSibling).map($_4pcs1kxfjepbvee2.fromDom);
  };
  var nextSibling = function (element) {
    var dom = element.dom();
    return Option.from(dom.nextSibling).map($_4pcs1kxfjepbvee2.fromDom);
  };
  var prevSiblings = function (element) {
    return $_227y8rwsjepbveb6.reverse($_5rkz1wx8jepbved8.toArray(element, prevSibling));
  };
  var nextSiblings = function (element) {
    return $_5rkz1wx8jepbved8.toArray(element, nextSibling);
  };
  var children = function (element) {
    var dom = element.dom();
    return $_227y8rwsjepbveb6.map(dom.childNodes, $_4pcs1kxfjepbvee2.fromDom);
  };
  var child = function (element, index) {
    var children = element.dom().childNodes;
    return Option.from(children[index]).map($_4pcs1kxfjepbvee2.fromDom);
  };
  var firstChild = function (element) {
    return child(element, 0);
  };
  var lastChild = function (element) {
    return child(element, element.dom().childNodes.length - 1);
  };
  var childNodesCount = function (element) {
    return element.dom().childNodes.length;
  };
  var hasChildNodes = function (element) {
    return element.dom().hasChildNodes();
  };
  var spot = $_2pqntjx4jepbvecr.immutable('element', 'offset');
  var leaf = function (element, offset) {
    var cs = children(element);
    return cs.length > 0 && offset < cs.length ? spot(cs[offset], 0) : spot(element, offset);
  };
  var $_ginpy6x3jepbvece = {
    owner: owner,
    defaultView: defaultView,
    documentElement: documentElement,
    parent: parent,
    findIndex: findIndex$1,
    parents: parents,
    siblings: siblings,
    prevSibling: prevSibling,
    offsetParent: offsetParent,
    prevSiblings: prevSiblings,
    nextSibling: nextSibling,
    nextSiblings: nextSiblings,
    children: children,
    child: child,
    firstChild: firstChild,
    lastChild: lastChild,
    childNodesCount: childNodesCount,
    hasChildNodes: hasChildNodes,
    leaf: leaf
  };

  var before = function (marker, element) {
    var parent = $_ginpy6x3jepbvece.parent(marker);
    parent.each(function (v) {
      v.dom().insertBefore(element.dom(), marker.dom());
    });
  };
  var after = function (marker, element) {
    var sibling = $_ginpy6x3jepbvece.nextSibling(marker);
    sibling.fold(function () {
      var parent = $_ginpy6x3jepbvece.parent(marker);
      parent.each(function (v) {
        append(v, element);
      });
    }, function (v) {
      before(v, element);
    });
  };
  var prepend = function (parent, element) {
    var firstChild = $_ginpy6x3jepbvece.firstChild(parent);
    firstChild.fold(function () {
      append(parent, element);
    }, function (v) {
      parent.dom().insertBefore(element.dom(), v.dom());
    });
  };
  var append = function (parent, element) {
    parent.dom().appendChild(element.dom());
  };
  var appendAt = function (parent, element, index) {
    $_ginpy6x3jepbvece.child(parent, index).fold(function () {
      append(parent, element);
    }, function (v) {
      before(v, element);
    });
  };
  var wrap = function (element, wrapper) {
    before(element, wrapper);
    append(wrapper, element);
  };
  var $_fm1c56x2jepbvecb = {
    before: before,
    after: after,
    prepend: prepend,
    append: append,
    appendAt: appendAt,
    wrap: wrap
  };

  var before$1 = function (marker, elements) {
    $_227y8rwsjepbveb6.each(elements, function (x) {
      $_fm1c56x2jepbvecb.before(marker, x);
    });
  };
  var after$1 = function (marker, elements) {
    $_227y8rwsjepbveb6.each(elements, function (x, i) {
      var e = i === 0 ? marker : elements[i - 1];
      $_fm1c56x2jepbvecb.after(e, x);
    });
  };
  var prepend$1 = function (parent, elements) {
    $_227y8rwsjepbveb6.each(elements.slice().reverse(), function (x) {
      $_fm1c56x2jepbvecb.prepend(parent, x);
    });
  };
  var append$1 = function (parent, elements) {
    $_227y8rwsjepbveb6.each(elements, function (x) {
      $_fm1c56x2jepbvecb.append(parent, x);
    });
  };
  var $_78z69ixijepbveeb = {
    before: before$1,
    after: after$1,
    prepend: prepend$1,
    append: append$1
  };

  var empty = function (element) {
    element.dom().textContent = '';
    $_227y8rwsjepbveb6.each($_ginpy6x3jepbvece.children(element), function (rogue) {
      remove(rogue);
    });
  };
  var remove = function (element) {
    var dom = element.dom();
    if (dom.parentNode !== null)
      dom.parentNode.removeChild(dom);
  };
  var unwrap = function (wrapper) {
    var children = $_ginpy6x3jepbvece.children(wrapper);
    if (children.length > 0)
      $_78z69ixijepbveeb.before(wrapper, children);
    remove(wrapper);
  };
  var $_b9oivrxhjepbvee8 = {
    empty: empty,
    remove: remove,
    unwrap: unwrap
  };

  var name = function (element) {
    var r = element.dom().nodeName;
    return r.toLowerCase();
  };
  var type = function (element) {
    return element.dom().nodeType;
  };
  var value = function (element) {
    return element.dom().nodeValue;
  };
  var isType$1 = function (t) {
    return function (element) {
      return type(element) === t;
    };
  };
  var isComment = function (element) {
    return type(element) === $_4nyonexgjepbvee7.COMMENT || name(element) === '#comment';
  };
  var isElement = isType$1($_4nyonexgjepbvee7.ELEMENT);
  var isText = isType$1($_4nyonexgjepbvee7.TEXT);
  var isDocument = isType$1($_4nyonexgjepbvee7.DOCUMENT);
  var $_4aeewhxkjepbveek = {
    name: name,
    type: type,
    value: value,
    isElement: isElement,
    isText: isText,
    isDocument: isDocument,
    isComment: isComment
  };

  var inBody = function (element) {
    var dom = $_4aeewhxkjepbveek.isText(element) ? element.dom().parentNode : element.dom();
    return dom !== undefined && dom !== null && dom.ownerDocument.body.contains(dom);
  };
  var body = $_b2ra0wwljepbveal.cached(function () {
    return getBody($_4pcs1kxfjepbvee2.fromDom(document));
  });
  var getBody = function (doc) {
    var body = doc.dom().body;
    if (body === null || body === undefined)
      throw 'Body is not available yet';
    return $_4pcs1kxfjepbvee2.fromDom(body);
  };
  var $_eqayqzxjjepbveeh = {
    body: body,
    getBody: getBody,
    inBody: inBody
  };

  var fireDetaching = function (component) {
    $_e4saacwgjepbvea0.emit(component, $_alx3dcwhjepbvea8.detachedFromDom());
    var children = component.components();
    $_227y8rwsjepbveb6.each(children, fireDetaching);
  };
  var fireAttaching = function (component) {
    var children = component.components();
    $_227y8rwsjepbveb6.each(children, fireAttaching);
    $_e4saacwgjepbvea0.emit(component, $_alx3dcwhjepbvea8.attachedToDom());
  };
  var attach = function (parent, child) {
    attachWith(parent, child, $_fm1c56x2jepbvecb.append);
  };
  var attachWith = function (parent, child, insertion) {
    parent.getSystem().addToWorld(child);
    insertion(parent.element(), child.element());
    if ($_eqayqzxjjepbveeh.inBody(parent.element()))
      fireAttaching(child);
    parent.syncComponents();
  };
  var doDetach = function (component) {
    fireDetaching(component);
    $_b9oivrxhjepbvee8.remove(component.element());
    component.getSystem().removeFromWorld(component);
  };
  var detach = function (component) {
    var parent = $_ginpy6x3jepbvece.parent(component.element()).bind(function (p) {
      return component.getSystem().getByDom(p).fold(Option.none, Option.some);
    });
    doDetach(component);
    parent.each(function (p) {
      p.syncComponents();
    });
  };
  var detachChildren = function (component) {
    var subs = component.components();
    $_227y8rwsjepbveb6.each(subs, doDetach);
    $_b9oivrxhjepbvee8.empty(component.element());
    component.syncComponents();
  };
  var attachSystem = function (element, guiSystem) {
    $_fm1c56x2jepbvecb.append(element, guiSystem.element());
    var children = $_ginpy6x3jepbvece.children(guiSystem.element());
    $_227y8rwsjepbveb6.each(children, function (child) {
      guiSystem.getByDom(child).each(fireAttaching);
    });
  };
  var detachSystem = function (guiSystem) {
    var children = $_ginpy6x3jepbvece.children(guiSystem.element());
    $_227y8rwsjepbveb6.each(children, function (child) {
      guiSystem.getByDom(child).each(fireDetaching);
    });
    $_b9oivrxhjepbvee8.remove(guiSystem.element());
  };
  var $_1sujbrx1jepbvebx = {
    attach: attach,
    attachWith: attachWith,
    detach: detach,
    detachChildren: detachChildren,
    attachSystem: attachSystem,
    detachSystem: detachSystem
  };

  var fromHtml$1 = function (html, scope) {
    var doc = scope || document;
    var div = doc.createElement('div');
    div.innerHTML = html;
    return $_ginpy6x3jepbvece.children($_4pcs1kxfjepbvee2.fromDom(div));
  };
  var fromTags = function (tags, scope) {
    return $_227y8rwsjepbveb6.map(tags, function (x) {
      return $_4pcs1kxfjepbvee2.fromTag(x, scope);
    });
  };
  var fromText$1 = function (texts, scope) {
    return $_227y8rwsjepbveb6.map(texts, function (x) {
      return $_4pcs1kxfjepbvee2.fromText(x, scope);
    });
  };
  var fromDom$1 = function (nodes) {
    return $_227y8rwsjepbveb6.map(nodes, $_4pcs1kxfjepbvee2.fromDom);
  };
  var $_607tmsxpjepbvefa = {
    fromHtml: fromHtml$1,
    fromTags: fromTags,
    fromText: fromText$1,
    fromDom: fromDom$1
  };

  var get = function (element) {
    return element.dom().innerHTML;
  };
  var set = function (element, content) {
    var owner = $_ginpy6x3jepbvece.owner(element);
    var docDom = owner.dom();
    var fragment = $_4pcs1kxfjepbvee2.fromDom(docDom.createDocumentFragment());
    var contentElements = $_607tmsxpjepbvefa.fromHtml(content, docDom);
    $_78z69ixijepbveeb.append(fragment, contentElements);
    $_b9oivrxhjepbvee8.empty(element);
    $_fm1c56x2jepbvecb.append(element, fragment);
  };
  var getOuter = function (element) {
    var container = $_4pcs1kxfjepbvee2.fromTag('div');
    var clone = $_4pcs1kxfjepbvee2.fromDom(element.dom().cloneNode(true));
    $_fm1c56x2jepbvecb.append(container, clone);
    return get(container);
  };
  var $_g0wlavxojepbvef7 = {
    get: get,
    set: set,
    getOuter: getOuter
  };

  var rawSet = function (dom, key, value) {
    if ($_bu3dt3wzjepbvebs.isString(value) || $_bu3dt3wzjepbvebs.isBoolean(value) || $_bu3dt3wzjepbvebs.isNumber(value)) {
      dom.setAttribute(key, value + '');
    } else {
      console.error('Invalid call to Attr.set. Key ', key, ':: Value ', value, ':: Element ', dom);
      throw new Error('Attribute value was not simple');
    }
  };
  var set$1 = function (element, key, value) {
    rawSet(element.dom(), key, value);
  };
  var setAll = function (element, attrs) {
    var dom = element.dom();
    $_1l8sbcx0jepbvebt.each(attrs, function (v, k) {
      rawSet(dom, k, v);
    });
  };
  var get$1 = function (element, key) {
    var v = element.dom().getAttribute(key);
    return v === null ? undefined : v;
  };
  var has = function (element, key) {
    var dom = element.dom();
    return dom && dom.hasAttribute ? dom.hasAttribute(key) : false;
  };
  var remove$1 = function (element, key) {
    element.dom().removeAttribute(key);
  };
  var hasNone = function (element) {
    var attrs = element.dom().attributes;
    return attrs === undefined || attrs === null || attrs.length === 0;
  };
  var clone = function (element) {
    return $_227y8rwsjepbveb6.foldl(element.dom().attributes, function (acc, attr) {
      acc[attr.name] = attr.value;
      return acc;
    }, {});
  };
  var transferOne = function (source, destination, attr) {
    if (has(source, attr) && !has(destination, attr))
      set$1(destination, attr, get$1(source, attr));
  };
  var transfer = function (source, destination, attrs) {
    if (!$_4aeewhxkjepbveek.isElement(source) || !$_4aeewhxkjepbveek.isElement(destination))
      return;
    $_227y8rwsjepbveb6.each(attrs, function (attr) {
      transferOne(source, destination, attr);
    });
  };
  var $_1sxky7xrjepbvefh = {
    clone: clone,
    set: set$1,
    setAll: setAll,
    get: get$1,
    has: has,
    remove: remove$1,
    hasNone: hasNone,
    transfer: transfer
  };

  var clone$1 = function (original, deep) {
    return $_4pcs1kxfjepbvee2.fromDom(original.dom().cloneNode(deep));
  };
  var shallow$1 = function (original) {
    return clone$1(original, false);
  };
  var deep$1 = function (original) {
    return clone$1(original, true);
  };
  var shallowAs = function (original, tag) {
    var nu = $_4pcs1kxfjepbvee2.fromTag(tag);
    var attributes = $_1sxky7xrjepbvefh.clone(original);
    $_1sxky7xrjepbvefh.setAll(nu, attributes);
    return nu;
  };
  var copy = function (original, tag) {
    var nu = shallowAs(original, tag);
    var cloneChildren = $_ginpy6x3jepbvece.children(deep$1(original));
    $_78z69ixijepbveeb.append(nu, cloneChildren);
    return nu;
  };
  var mutate = function (original, tag) {
    var nu = shallowAs(original, tag);
    $_fm1c56x2jepbvecb.before(original, nu);
    var children = $_ginpy6x3jepbvece.children(original);
    $_78z69ixijepbveeb.append(nu, children);
    $_b9oivrxhjepbvee8.remove(original);
    return nu;
  };
  var $_48bbrixqjepbveff = {
    shallow: shallow$1,
    shallowAs: shallowAs,
    deep: deep$1,
    copy: copy,
    mutate: mutate
  };

  var getHtml = function (element) {
    var clone = $_48bbrixqjepbveff.shallow(element);
    return $_g0wlavxojepbvef7.getOuter(clone);
  };
  var $_9lb648xnjepbvef3 = { getHtml: getHtml };

  var element = function (elem) {
    return $_9lb648xnjepbvef3.getHtml(elem);
  };
  var $_bx258xmjepbvef1 = { element: element };

  var value$1 = function (o) {
    var is = function (v) {
      return o === v;
    };
    var or = function (opt) {
      return value$1(o);
    };
    var orThunk = function (f) {
      return value$1(o);
    };
    var map = function (f) {
      return value$1(f(o));
    };
    var each = function (f) {
      f(o);
    };
    var bind = function (f) {
      return f(o);
    };
    var fold = function (_, onValue) {
      return onValue(o);
    };
    var exists = function (f) {
      return f(o);
    };
    var forall = function (f) {
      return f(o);
    };
    var toOption = function () {
      return Option.some(o);
    };
    return {
      is: is,
      isValue: $_167yw6wjjepbveag.always,
      isError: $_167yw6wjjepbveag.never,
      getOr: $_167yw6wjjepbveag.constant(o),
      getOrThunk: $_167yw6wjjepbveag.constant(o),
      getOrDie: $_167yw6wjjepbveag.constant(o),
      or: or,
      orThunk: orThunk,
      fold: fold,
      map: map,
      each: each,
      bind: bind,
      exists: exists,
      forall: forall,
      toOption: toOption
    };
  };
  var error = function (message) {
    var getOrThunk = function (f) {
      return f();
    };
    var getOrDie = function () {
      return $_167yw6wjjepbveag.die(message)();
    };
    var or = function (opt) {
      return opt;
    };
    var orThunk = function (f) {
      return f();
    };
    var map = function (f) {
      return error(message);
    };
    var bind = function (f) {
      return error(message);
    };
    var fold = function (onError, _) {
      return onError(message);
    };
    return {
      is: $_167yw6wjjepbveag.never,
      isValue: $_167yw6wjjepbveag.never,
      isError: $_167yw6wjjepbveag.always,
      getOr: $_167yw6wjjepbveag.identity,
      getOrThunk: getOrThunk,
      getOrDie: getOrDie,
      or: or,
      orThunk: orThunk,
      fold: fold,
      map: map,
      each: $_167yw6wjjepbveag.noop,
      bind: bind,
      exists: $_167yw6wjjepbveag.never,
      forall: $_167yw6wjjepbveag.always,
      toOption: Option.none
    };
  };
  var Result = {
    value: value$1,
    error: error
  };

  var generate = function (cases) {
    if (!$_bu3dt3wzjepbvebs.isArray(cases)) {
      throw new Error('cases must be an array');
    }
    if (cases.length === 0) {
      throw new Error('there must be at least one case');
    }
    var constructors = [];
    var adt = {};
    $_227y8rwsjepbveb6.each(cases, function (acase, count) {
      var keys = $_1l8sbcx0jepbvebt.keys(acase);
      if (keys.length !== 1) {
        throw new Error('one and only one name per case');
      }
      var key = keys[0];
      var value = acase[key];
      if (adt[key] !== undefined) {
        throw new Error('duplicate key detected:' + key);
      } else if (key === 'cata') {
        throw new Error('cannot have a case named cata (sorry)');
      } else if (!$_bu3dt3wzjepbvebs.isArray(value)) {
        throw new Error('case arguments must be an array');
      }
      constructors.push(key);
      adt[key] = function () {
        var argLength = arguments.length;
        if (argLength !== value.length) {
          throw new Error('Wrong number of arguments to case ' + key + '. Expected ' + value.length + ' (' + value + '), got ' + argLength);
        }
        var args = new Array(argLength);
        for (var i = 0; i < args.length; i++)
          args[i] = arguments[i];
        var match = function (branches) {
          var branchKeys = $_1l8sbcx0jepbvebt.keys(branches);
          if (constructors.length !== branchKeys.length) {
            throw new Error('Wrong number of arguments to match. Expected: ' + constructors.join(',') + '\nActual: ' + branchKeys.join(','));
          }
          var allReqd = $_227y8rwsjepbveb6.forall(constructors, function (reqKey) {
            return $_227y8rwsjepbveb6.contains(branchKeys, reqKey);
          });
          if (!allReqd)
            throw new Error('Not all branches were specified when using match. Specified: ' + branchKeys.join(', ') + '\nRequired: ' + constructors.join(', '));
          return branches[key].apply(null, args);
        };
        return {
          fold: function () {
            if (arguments.length !== cases.length) {
              throw new Error('Wrong number of arguments to fold. Expected ' + cases.length + ', got ' + arguments.length);
            }
            var target = arguments[count];
            return target.apply(null, args);
          },
          match: match,
          log: function (label) {
            console.log(label, {
              constructors: constructors,
              constructor: key,
              params: args
            });
          }
        };
      };
    });
    return adt;
  };
  var $_9vwywgxwjepbvegj = { generate: generate };

  var comparison = $_9vwywgxwjepbvegj.generate([
    {
      bothErrors: [
        'error1',
        'error2'
      ]
    },
    {
      firstError: [
        'error1',
        'value2'
      ]
    },
    {
      secondError: [
        'value1',
        'error2'
      ]
    },
    {
      bothValues: [
        'value1',
        'value2'
      ]
    }
  ]);
  var partition$1 = function (results) {
    var errors = [];
    var values = [];
    $_227y8rwsjepbveb6.each(results, function (result) {
      result.fold(function (err) {
        errors.push(err);
      }, function (value) {
        values.push(value);
      });
    });
    return {
      errors: errors,
      values: values
    };
  };
  var compare = function (result1, result2) {
    return result1.fold(function (err1) {
      return result2.fold(function (err2) {
        return comparison.bothErrors(err1, err2);
      }, function (val2) {
        return comparison.firstError(err1, val2);
      });
    }, function (val1) {
      return result2.fold(function (err2) {
        return comparison.secondError(val1, err2);
      }, function (val2) {
        return comparison.bothValues(val1, val2);
      });
    });
  };
  var $_80jw24xvjepbvegh = {
    partition: partition$1,
    compare: compare
  };

  var mergeValues = function (values, base) {
    return Result.value($_aaookwyjepbvebq.deepMerge.apply(undefined, [base].concat(values)));
  };
  var mergeErrors = function (errors) {
    return $_167yw6wjjepbveag.compose(Result.error, $_227y8rwsjepbveb6.flatten)(errors);
  };
  var consolidateObj = function (objects, base) {
    var partitions = $_80jw24xvjepbvegh.partition(objects);
    return partitions.errors.length > 0 ? mergeErrors(partitions.errors) : mergeValues(partitions.values, base);
  };
  var consolidateArr = function (objects) {
    var partitions = $_80jw24xvjepbvegh.partition(objects);
    return partitions.errors.length > 0 ? mergeErrors(partitions.errors) : Result.value(partitions.values);
  };
  var $_9qg1cjxtjepbvefv = {
    consolidateObj: consolidateObj,
    consolidateArr: consolidateArr
  };

  var narrow = function (obj, fields) {
    var r = {};
    $_227y8rwsjepbveb6.each(fields, function (field) {
      if (obj[field] !== undefined && obj.hasOwnProperty(field))
        r[field] = obj[field];
    });
    return r;
  };
  var indexOnKey = function (array, key) {
    var obj = {};
    $_227y8rwsjepbveb6.each(array, function (a) {
      var keyValue = a[key];
      obj[keyValue] = a;
    });
    return obj;
  };
  var exclude = function (obj, fields) {
    var r = {};
    $_1l8sbcx0jepbvebt.each(obj, function (v, k) {
      if (!$_227y8rwsjepbveb6.contains(fields, k)) {
        r[k] = v;
      }
    });
    return r;
  };
  var $_3uiaukxxjepbvegn = {
    narrow: narrow,
    exclude: exclude,
    indexOnKey: indexOnKey
  };

  var readOpt = function (key) {
    return function (obj) {
      return obj.hasOwnProperty(key) ? Option.from(obj[key]) : Option.none();
    };
  };
  var readOr = function (key, fallback) {
    return function (obj) {
      return readOpt(key)(obj).getOr(fallback);
    };
  };
  var readOptFrom = function (obj, key) {
    return readOpt(key)(obj);
  };
  var hasKey = function (obj, key) {
    return obj.hasOwnProperty(key) && obj[key] !== undefined && obj[key] !== null;
  };
  var $_aahdy9xyjepbvegu = {
    readOpt: readOpt,
    readOr: readOr,
    readOptFrom: readOptFrom,
    hasKey: hasKey
  };

  var wrap$1 = function (key, value) {
    var r = {};
    r[key] = value;
    return r;
  };
  var wrapAll = function (keyvalues) {
    var r = {};
    $_227y8rwsjepbveb6.each(keyvalues, function (kv) {
      r[kv.key] = kv.value;
    });
    return r;
  };
  var $_ejkxl2xzjepbvegx = {
    wrap: wrap$1,
    wrapAll: wrapAll
  };

  var narrow$1 = function (obj, fields) {
    return $_3uiaukxxjepbvegn.narrow(obj, fields);
  };
  var exclude$1 = function (obj, fields) {
    return $_3uiaukxxjepbvegn.exclude(obj, fields);
  };
  var readOpt$1 = function (key) {
    return $_aahdy9xyjepbvegu.readOpt(key);
  };
  var readOr$1 = function (key, fallback) {
    return $_aahdy9xyjepbvegu.readOr(key, fallback);
  };
  var readOptFrom$1 = function (obj, key) {
    return $_aahdy9xyjepbvegu.readOptFrom(obj, key);
  };
  var wrap$2 = function (key, value) {
    return $_ejkxl2xzjepbvegx.wrap(key, value);
  };
  var wrapAll$1 = function (keyvalues) {
    return $_ejkxl2xzjepbvegx.wrapAll(keyvalues);
  };
  var indexOnKey$1 = function (array, key) {
    return $_3uiaukxxjepbvegn.indexOnKey(array, key);
  };
  var consolidate = function (objs, base) {
    return $_9qg1cjxtjepbvefv.consolidateObj(objs, base);
  };
  var hasKey$1 = function (obj, key) {
    return $_aahdy9xyjepbvegu.hasKey(obj, key);
  };
  var $_f53w39xsjepbvefs = {
    narrow: narrow$1,
    exclude: exclude$1,
    readOpt: readOpt$1,
    readOr: readOr$1,
    readOptFrom: readOptFrom$1,
    wrap: wrap$2,
    wrapAll: wrapAll$1,
    indexOnKey: indexOnKey$1,
    hasKey: hasKey$1,
    consolidate: consolidate
  };

  var cat = function (arr) {
    var r = [];
    var push = function (x) {
      r.push(x);
    };
    for (var i = 0; i < arr.length; i++) {
      arr[i].each(push);
    }
    return r;
  };
  var findMap = function (arr, f) {
    for (var i = 0; i < arr.length; i++) {
      var r = f(arr[i], i);
      if (r.isSome()) {
        return r;
      }
    }
    return Option.none();
  };
  var liftN = function (arr, f) {
    var r = [];
    for (var i = 0; i < arr.length; i++) {
      var x = arr[i];
      if (x.isSome()) {
        r.push(x.getOrDie());
      } else {
        return Option.none();
      }
    }
    return Option.some(f.apply(null, r));
  };
  var $_4ymgfmy0jepbveh0 = {
    cat: cat,
    findMap: findMap,
    liftN: liftN
  };

  var unknown$3 = 'unknown';
  var debugging = true;
  var CHROME_INSPECTOR_GLOBAL = '__CHROME_INSPECTOR_CONNECTION_TO_ALLOY__';
  var eventsMonitored = [];
  var path$1 = [
    'alloy/data/Fields',
    'alloy/debugging/Debugging'
  ];
  var getTrace = function () {
    if (debugging === false)
      return unknown$3;
    var err = new Error();
    if (err.stack !== undefined) {
      var lines = err.stack.split('\n');
      return $_227y8rwsjepbveb6.find(lines, function (line) {
        return line.indexOf('alloy') > 0 && !$_227y8rwsjepbveb6.exists(path$1, function (p) {
          return line.indexOf(p) > -1;
        });
      }).getOr(unknown$3);
    } else {
      return unknown$3;
    }
  };
  var logHandler = function (label, handlerName, trace) {
  };
  var ignoreEvent = {
    logEventCut: $_167yw6wjjepbveag.noop,
    logEventStopped: $_167yw6wjjepbveag.noop,
    logNoParent: $_167yw6wjjepbveag.noop,
    logEventNoHandlers: $_167yw6wjjepbveag.noop,
    logEventResponse: $_167yw6wjjepbveag.noop,
    write: $_167yw6wjjepbveag.noop
  };
  var monitorEvent = function (eventName, initialTarget, f) {
    var logger = debugging && (eventsMonitored === '*' || $_227y8rwsjepbveb6.contains(eventsMonitored, eventName)) ? function () {
      var sequence = [];
      return {
        logEventCut: function (name, target, purpose) {
          sequence.push({
            outcome: 'cut',
            target: target,
            purpose: purpose
          });
        },
        logEventStopped: function (name, target, purpose) {
          sequence.push({
            outcome: 'stopped',
            target: target,
            purpose: purpose
          });
        },
        logNoParent: function (name, target, purpose) {
          sequence.push({
            outcome: 'no-parent',
            target: target,
            purpose: purpose
          });
        },
        logEventNoHandlers: function (name, target) {
          sequence.push({
            outcome: 'no-handlers-left',
            target: target
          });
        },
        logEventResponse: function (name, target, purpose) {
          sequence.push({
            outcome: 'response',
            purpose: purpose,
            target: target
          });
        },
        write: function () {
          if ($_227y8rwsjepbveb6.contains([
              'mousemove',
              'mouseover',
              'mouseout',
              $_alx3dcwhjepbvea8.systemInit()
            ], eventName))
            return;
          console.log(eventName, {
            event: eventName,
            target: initialTarget.dom(),
            sequence: $_227y8rwsjepbveb6.map(sequence, function (s) {
              if (!$_227y8rwsjepbveb6.contains([
                  'cut',
                  'stopped',
                  'response'
                ], s.outcome))
                return s.outcome;
              else
                return '{' + s.purpose + '} ' + s.outcome + ' at (' + $_bx258xmjepbvef1.element(s.target) + ')';
            })
          });
        }
      };
    }() : ignoreEvent;
    var output = f(logger);
    logger.write();
    return output;
  };
  var inspectorInfo = function (comp) {
    var go = function (c) {
      var cSpec = c.spec();
      return {
        '(original.spec)': cSpec,
        '(dom.ref)': c.element().dom(),
        '(element)': $_bx258xmjepbvef1.element(c.element()),
        '(initComponents)': $_227y8rwsjepbveb6.map(cSpec.components !== undefined ? cSpec.components : [], go),
        '(components)': $_227y8rwsjepbveb6.map(c.components(), go),
        '(bound.events)': $_1l8sbcx0jepbvebt.mapToArray(c.events(), function (v, k) {
          return [k];
        }).join(', '),
        '(behaviours)': cSpec.behaviours !== undefined ? $_1l8sbcx0jepbvebt.map(cSpec.behaviours, function (v, k) {
          return v === undefined ? '--revoked--' : {
            config: v.configAsRaw(),
            'original-config': v.initialConfig,
            state: c.readState(k)
          };
        }) : 'none'
      };
    };
    return go(comp);
  };
  var getOrInitConnection = function () {
    if (window[CHROME_INSPECTOR_GLOBAL] !== undefined)
      return window[CHROME_INSPECTOR_GLOBAL];
    else {
      window[CHROME_INSPECTOR_GLOBAL] = {
        systems: {},
        lookup: function (uid) {
          var systems = window[CHROME_INSPECTOR_GLOBAL].systems;
          var connections = $_1l8sbcx0jepbvebt.keys(systems);
          return $_4ymgfmy0jepbveh0.findMap(connections, function (conn) {
            var connGui = systems[conn];
            return connGui.getByUid(uid).toOption().map(function (comp) {
              return $_f53w39xsjepbvefs.wrap($_bx258xmjepbvef1.element(comp.element()), inspectorInfo(comp));
            });
          });
        }
      };
      return window[CHROME_INSPECTOR_GLOBAL];
    }
  };
  var registerInspector = function (name, gui) {
    var connection = getOrInitConnection();
    connection.systems[name] = gui;
  };
  var $_fa6js4xljepbveen = {
    logHandler: logHandler,
    noLogger: $_167yw6wjjepbveag.constant(ignoreEvent),
    getTrace: getTrace,
    monitorEvent: monitorEvent,
    isDebugging: $_167yw6wjjepbveag.constant(debugging),
    registerInspector: registerInspector
  };

  var isSource = function (component, simulatedEvent) {
    return $_6fsl8xx9jepbveda.eq(component.element(), simulatedEvent.event().target());
  };
  var $_8xqfm2y5jepbvei2 = { isSource: isSource };

  var adt = $_9vwywgxwjepbvegj.generate([
    { strict: [] },
    { defaultedThunk: ['fallbackThunk'] },
    { asOption: [] },
    { asDefaultedOptionThunk: ['fallbackThunk'] },
    { mergeWithThunk: ['baseThunk'] }
  ]);
  var defaulted = function (fallback) {
    return adt.defaultedThunk($_167yw6wjjepbveag.constant(fallback));
  };
  var asDefaultedOption = function (fallback) {
    return adt.asDefaultedOptionThunk($_167yw6wjjepbveag.constant(fallback));
  };
  var mergeWith = function (base) {
    return adt.mergeWithThunk($_167yw6wjjepbveag.constant(base));
  };
  var $_1zybmsy8jepbveix = {
    strict: adt.strict,
    asOption: adt.asOption,
    defaulted: defaulted,
    defaultedThunk: adt.defaultedThunk,
    asDefaultedOption: asDefaultedOption,
    asDefaultedOptionThunk: adt.asDefaultedOptionThunk,
    mergeWith: mergeWith,
    mergeWithThunk: adt.mergeWithThunk
  };

  var typeAdt = $_9vwywgxwjepbvegj.generate([
    {
      setOf: [
        'validator',
        'valueType'
      ]
    },
    { arrOf: ['valueType'] },
    { objOf: ['fields'] },
    { itemOf: ['validator'] },
    {
      choiceOf: [
        'key',
        'branches'
      ]
    },
    { thunk: ['description'] },
    {
      func: [
        'args',
        'outputSchema'
      ]
    }
  ]);
  var fieldAdt = $_9vwywgxwjepbvegj.generate([
    {
      field: [
        'name',
        'presence',
        'type'
      ]
    },
    { state: ['name'] }
  ]);
  var $_bhlk2hyajepbvejr = {
    typeAdt: typeAdt,
    fieldAdt: fieldAdt
  };

  var json = function () {
    return $_s0o1jxbjepbvedn.getOrDie('JSON');
  };
  var parse = function (obj) {
    return json().parse(obj);
  };
  var stringify = function (obj, replacer, space) {
    return json().stringify(obj, replacer, space);
  };
  var $_3c4zqfydjepbvek9 = {
    parse: parse,
    stringify: stringify
  };

  var formatObj = function (input) {
    return $_bu3dt3wzjepbvebs.isObject(input) && $_1l8sbcx0jepbvebt.keys(input).length > 100 ? ' removed due to size' : $_3c4zqfydjepbvek9.stringify(input, null, 2);
  };
  var formatErrors = function (errors) {
    var es = errors.length > 10 ? errors.slice(0, 10).concat([{
        path: [],
        getErrorInfo: function () {
          return '... (only showing first ten failures)';
        }
      }]) : errors;
    return $_227y8rwsjepbveb6.map(es, function (e) {
      return 'Failed path: (' + e.path.join(' > ') + ')\n' + e.getErrorInfo();
    });
  };
  var $_173xdnycjepbvek0 = {
    formatObj: formatObj,
    formatErrors: formatErrors
  };

  var nu$3 = function (path, getErrorInfo) {
    return Result.error([{
        path: path,
        getErrorInfo: getErrorInfo
      }]);
  };
  var missingStrict = function (path, key, obj) {
    return nu$3(path, function () {
      return 'Could not find valid *strict* value for "' + key + '" in ' + $_173xdnycjepbvek0.formatObj(obj);
    });
  };
  var missingKey = function (path, key) {
    return nu$3(path, function () {
      return 'Choice schema did not contain choice key: "' + key + '"';
    });
  };
  var missingBranch = function (path, branches, branch) {
    return nu$3(path, function () {
      return 'The chosen schema: "' + branch + '" did not exist in branches: ' + $_173xdnycjepbvek0.formatObj(branches);
    });
  };
  var unsupportedFields = function (path, unsupported) {
    return nu$3(path, function () {
      return 'There are unsupported fields: [' + unsupported.join(', ') + '] specified';
    });
  };
  var custom = function (path, err) {
    return nu$3(path, function () {
      return err;
    });
  };
  var toString = function (error) {
    return 'Failed path: (' + error.path.join(' > ') + ')\n' + error.getErrorInfo();
  };
  var $_3m01lgybjepbvejv = {
    missingStrict: missingStrict,
    missingKey: missingKey,
    missingBranch: missingBranch,
    unsupportedFields: unsupportedFields,
    custom: custom,
    toString: toString
  };

  var adt$1 = $_9vwywgxwjepbvegj.generate([
    {
      field: [
        'key',
        'okey',
        'presence',
        'prop'
      ]
    },
    {
      state: [
        'okey',
        'instantiator'
      ]
    }
  ]);
  var output = function (okey, value) {
    return adt$1.state(okey, $_167yw6wjjepbveag.constant(value));
  };
  var snapshot = function (okey) {
    return adt$1.state(okey, $_167yw6wjjepbveag.identity);
  };
  var strictAccess = function (path, obj, key) {
    return $_aahdy9xyjepbvegu.readOptFrom(obj, key).fold(function () {
      return $_3m01lgybjepbvejv.missingStrict(path, key, obj);
    }, Result.value);
  };
  var fallbackAccess = function (obj, key, fallbackThunk) {
    var v = $_aahdy9xyjepbvegu.readOptFrom(obj, key).fold(function () {
      return fallbackThunk(obj);
    }, $_167yw6wjjepbveag.identity);
    return Result.value(v);
  };
  var optionAccess = function (obj, key) {
    return Result.value($_aahdy9xyjepbvegu.readOptFrom(obj, key));
  };
  var optionDefaultedAccess = function (obj, key, fallback) {
    var opt = $_aahdy9xyjepbvegu.readOptFrom(obj, key).map(function (val) {
      return val === true ? fallback(obj) : val;
    });
    return Result.value(opt);
  };
  var cExtractOne = function (path, obj, field, strength) {
    return field.fold(function (key, okey, presence, prop) {
      var bundle = function (av) {
        return prop.extract(path.concat([key]), strength, av).map(function (res) {
          return $_ejkxl2xzjepbvegx.wrap(okey, strength(res));
        });
      };
      var bundleAsOption = function (optValue) {
        return optValue.fold(function () {
          var outcome = $_ejkxl2xzjepbvegx.wrap(okey, strength(Option.none()));
          return Result.value(outcome);
        }, function (ov) {
          return prop.extract(path.concat([key]), strength, ov).map(function (res) {
            return $_ejkxl2xzjepbvegx.wrap(okey, strength(Option.some(res)));
          });
        });
      };
      return function () {
        return presence.fold(function () {
          return strictAccess(path, obj, key).bind(bundle);
        }, function (fallbackThunk) {
          return fallbackAccess(obj, key, fallbackThunk).bind(bundle);
        }, function () {
          return optionAccess(obj, key).bind(bundleAsOption);
        }, function (fallbackThunk) {
          return optionDefaultedAccess(obj, key, fallbackThunk).bind(bundleAsOption);
        }, function (baseThunk) {
          var base = baseThunk(obj);
          return fallbackAccess(obj, key, $_167yw6wjjepbveag.constant({})).map(function (v) {
            return $_aaookwyjepbvebq.deepMerge(base, v);
          }).bind(bundle);
        });
      }();
    }, function (okey, instantiator) {
      var state = instantiator(obj);
      return Result.value($_ejkxl2xzjepbvegx.wrap(okey, strength(state)));
    });
  };
  var cExtract = function (path, obj, fields, strength) {
    var results = $_227y8rwsjepbveb6.map(fields, function (field) {
      return cExtractOne(path, obj, field, strength);
    });
    return $_9qg1cjxtjepbvefv.consolidateObj(results, {});
  };
  var value$2 = function (validator) {
    var extract = function (path, strength, val) {
      return validator(val, strength).fold(function (err) {
        return $_3m01lgybjepbvejv.custom(path, err);
      }, Result.value);
    };
    var toString = function () {
      return 'val';
    };
    var toDsl = function () {
      return $_bhlk2hyajepbvejr.typeAdt.itemOf(validator);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var getSetKeys = function (obj) {
    var keys = $_1l8sbcx0jepbvebt.keys(obj);
    return $_227y8rwsjepbveb6.filter(keys, function (k) {
      return $_f53w39xsjepbvefs.hasKey(obj, k);
    });
  };
  var objOnly = function (fields) {
    var delegate = obj(fields);
    var fieldNames = $_227y8rwsjepbveb6.foldr(fields, function (acc, f) {
      return f.fold(function (key) {
        return $_aaookwyjepbvebq.deepMerge(acc, $_f53w39xsjepbvefs.wrap(key, true));
      }, $_167yw6wjjepbveag.constant(acc));
    }, {});
    var extract = function (path, strength, o) {
      var keys = $_bu3dt3wzjepbvebs.isBoolean(o) ? [] : getSetKeys(o);
      var extra = $_227y8rwsjepbveb6.filter(keys, function (k) {
        return !$_f53w39xsjepbvefs.hasKey(fieldNames, k);
      });
      return extra.length === 0 ? delegate.extract(path, strength, o) : $_3m01lgybjepbvejv.unsupportedFields(path, extra);
    };
    return {
      extract: extract,
      toString: delegate.toString,
      toDsl: delegate.toDsl
    };
  };
  var obj = function (fields) {
    var extract = function (path, strength, o) {
      return cExtract(path, o, fields, strength);
    };
    var toString = function () {
      var fieldStrings = $_227y8rwsjepbveb6.map(fields, function (field) {
        return field.fold(function (key, okey, presence, prop) {
          return key + ' -> ' + prop.toString();
        }, function (okey, instantiator) {
          return 'state(' + okey + ')';
        });
      });
      return 'obj{\n' + fieldStrings.join('\n') + '}';
    };
    var toDsl = function () {
      return $_bhlk2hyajepbvejr.typeAdt.objOf($_227y8rwsjepbveb6.map(fields, function (f) {
        return f.fold(function (key, okey, presence, prop) {
          return $_bhlk2hyajepbvejr.fieldAdt.field(key, presence, prop);
        }, function (okey, instantiator) {
          return $_bhlk2hyajepbvejr.fieldAdt.state(okey);
        });
      }));
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var arr = function (prop) {
    var extract = function (path, strength, array) {
      var results = $_227y8rwsjepbveb6.map(array, function (a, i) {
        return prop.extract(path.concat(['[' + i + ']']), strength, a);
      });
      return $_9qg1cjxtjepbvefv.consolidateArr(results);
    };
    var toString = function () {
      return 'array(' + prop.toString() + ')';
    };
    var toDsl = function () {
      return $_bhlk2hyajepbvejr.typeAdt.arrOf(prop);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var setOf = function (validator, prop) {
    var validateKeys = function (path, keys) {
      return arr(value$2(validator)).extract(path, $_167yw6wjjepbveag.identity, keys);
    };
    var extract = function (path, strength, o) {
      var keys = $_1l8sbcx0jepbvebt.keys(o);
      return validateKeys(path, keys).bind(function (validKeys) {
        var schema = $_227y8rwsjepbveb6.map(validKeys, function (vk) {
          return adt$1.field(vk, vk, $_1zybmsy8jepbveix.strict(), prop);
        });
        return obj(schema).extract(path, strength, o);
      });
    };
    var toString = function () {
      return 'setOf(' + prop.toString() + ')';
    };
    var toDsl = function () {
      return $_bhlk2hyajepbvejr.typeAdt.setOf(validator, prop);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var func = function (args, schema, retriever) {
    var delegate = value$2(function (f, strength) {
      return $_bu3dt3wzjepbvebs.isFunction(f) ? Result.value(function () {
        var gArgs = Array.prototype.slice.call(arguments, 0);
        var allowedArgs = gArgs.slice(0, args.length);
        var o = f.apply(null, allowedArgs);
        return retriever(o, strength);
      }) : Result.error('Not a function');
    });
    return {
      extract: delegate.extract,
      toString: function () {
        return 'function';
      },
      toDsl: function () {
        return $_bhlk2hyajepbvejr.typeAdt.func(args, schema);
      }
    };
  };
  var thunk = function (desc, processor) {
    var getP = $_b2ra0wwljepbveal.cached(function () {
      return processor();
    });
    var extract = function (path, strength, val) {
      return getP().extract(path, strength, val);
    };
    var toString = function () {
      return getP().toString();
    };
    var toDsl = function () {
      return $_bhlk2hyajepbvejr.typeAdt.thunk(desc);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var anyValue = value$2(Result.value);
  var arrOfObj = $_167yw6wjjepbveag.compose(arr, obj);
  var $_1xywvgy9jepbvej4 = {
    anyValue: $_167yw6wjjepbveag.constant(anyValue),
    value: value$2,
    obj: obj,
    objOnly: objOnly,
    arr: arr,
    setOf: setOf,
    arrOfObj: arrOfObj,
    state: adt$1.state,
    field: adt$1.field,
    output: output,
    snapshot: snapshot,
    thunk: thunk,
    func: func
  };

  var strict = function (key) {
    return $_1xywvgy9jepbvej4.field(key, key, $_1zybmsy8jepbveix.strict(), $_1xywvgy9jepbvej4.anyValue());
  };
  var strictOf = function (key, schema) {
    return $_1xywvgy9jepbvej4.field(key, key, $_1zybmsy8jepbveix.strict(), schema);
  };
  var strictFunction = function (key) {
    return $_1xywvgy9jepbvej4.field(key, key, $_1zybmsy8jepbveix.strict(), $_1xywvgy9jepbvej4.value(function (f) {
      return $_bu3dt3wzjepbvebs.isFunction(f) ? Result.value(f) : Result.error('Not a function');
    }));
  };
  var forbid = function (key, message) {
    return $_1xywvgy9jepbvej4.field(key, key, $_1zybmsy8jepbveix.asOption(), $_1xywvgy9jepbvej4.value(function (v) {
      return Result.error('The field: ' + key + ' is forbidden. ' + message);
    }));
  };
  var strictArrayOf = function (key, prop) {
    return strictOf(key, prop);
  };
  var strictObjOf = function (key, objSchema) {
    return $_1xywvgy9jepbvej4.field(key, key, $_1zybmsy8jepbveix.strict(), $_1xywvgy9jepbvej4.obj(objSchema));
  };
  var strictArrayOfObj = function (key, objFields) {
    return $_1xywvgy9jepbvej4.field(key, key, $_1zybmsy8jepbveix.strict(), $_1xywvgy9jepbvej4.arrOfObj(objFields));
  };
  var option = function (key) {
    return $_1xywvgy9jepbvej4.field(key, key, $_1zybmsy8jepbveix.asOption(), $_1xywvgy9jepbvej4.anyValue());
  };
  var optionOf = function (key, schema) {
    return $_1xywvgy9jepbvej4.field(key, key, $_1zybmsy8jepbveix.asOption(), schema);
  };
  var optionObjOf = function (key, objSchema) {
    return $_1xywvgy9jepbvej4.field(key, key, $_1zybmsy8jepbveix.asOption(), $_1xywvgy9jepbvej4.obj(objSchema));
  };
  var optionObjOfOnly = function (key, objSchema) {
    return $_1xywvgy9jepbvej4.field(key, key, $_1zybmsy8jepbveix.asOption(), $_1xywvgy9jepbvej4.objOnly(objSchema));
  };
  var defaulted$1 = function (key, fallback) {
    return $_1xywvgy9jepbvej4.field(key, key, $_1zybmsy8jepbveix.defaulted(fallback), $_1xywvgy9jepbvej4.anyValue());
  };
  var defaultedOf = function (key, fallback, schema) {
    return $_1xywvgy9jepbvej4.field(key, key, $_1zybmsy8jepbveix.defaulted(fallback), schema);
  };
  var defaultedObjOf = function (key, fallback, objSchema) {
    return $_1xywvgy9jepbvej4.field(key, key, $_1zybmsy8jepbveix.defaulted(fallback), $_1xywvgy9jepbvej4.obj(objSchema));
  };
  var field = function (key, okey, presence, prop) {
    return $_1xywvgy9jepbvej4.field(key, okey, presence, prop);
  };
  var state = function (okey, instantiator) {
    return $_1xywvgy9jepbvej4.state(okey, instantiator);
  };
  var $_8rfcbxy7jepbvein = {
    strict: strict,
    strictOf: strictOf,
    strictObjOf: strictObjOf,
    strictArrayOf: strictArrayOf,
    strictArrayOfObj: strictArrayOfObj,
    strictFunction: strictFunction,
    forbid: forbid,
    option: option,
    optionOf: optionOf,
    optionObjOf: optionObjOf,
    optionObjOfOnly: optionObjOfOnly,
    defaulted: defaulted$1,
    defaultedOf: defaultedOf,
    defaultedObjOf: defaultedObjOf,
    field: field,
    state: state
  };

  var chooseFrom = function (path, strength, input, branches, ch) {
    var fields = $_f53w39xsjepbvefs.readOptFrom(branches, ch);
    return fields.fold(function () {
      return $_3m01lgybjepbvejv.missingBranch(path, branches, ch);
    }, function (fs) {
      return $_1xywvgy9jepbvej4.obj(fs).extract(path.concat(['branch: ' + ch]), strength, input);
    });
  };
  var choose = function (key, branches) {
    var extract = function (path, strength, input) {
      var choice = $_f53w39xsjepbvefs.readOptFrom(input, key);
      return choice.fold(function () {
        return $_3m01lgybjepbvejv.missingKey(path, key);
      }, function (chosen) {
        return chooseFrom(path, strength, input, branches, chosen);
      });
    };
    var toString = function () {
      return 'chooseOn(' + key + '). Possible values: ' + $_1l8sbcx0jepbvebt.keys(branches);
    };
    var toDsl = function () {
      return $_bhlk2hyajepbvejr.typeAdt.choiceOf(key, branches);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var $_95rrwuyfjepbveki = { choose: choose };

  var anyValue$1 = $_1xywvgy9jepbvej4.value(Result.value);
  var arrOfObj$1 = function (objFields) {
    return $_1xywvgy9jepbvej4.arrOfObj(objFields);
  };
  var arrOfVal = function () {
    return $_1xywvgy9jepbvej4.arr(anyValue$1);
  };
  var arrOf = $_1xywvgy9jepbvej4.arr;
  var objOf = $_1xywvgy9jepbvej4.obj;
  var objOfOnly = $_1xywvgy9jepbvej4.objOnly;
  var setOf$1 = $_1xywvgy9jepbvej4.setOf;
  var valueOf = function (validator) {
    return $_1xywvgy9jepbvej4.value(function (v) {
      return validator(v);
    });
  };
  var extract = function (label, prop, strength, obj) {
    return prop.extract([label], strength, obj).fold(function (errs) {
      return Result.error({
        input: obj,
        errors: errs
      });
    }, Result.value);
  };
  var asStruct = function (label, prop, obj) {
    return extract(label, prop, $_167yw6wjjepbveag.constant, obj);
  };
  var asRaw = function (label, prop, obj) {
    return extract(label, prop, $_167yw6wjjepbveag.identity, obj);
  };
  var getOrDie$1 = function (extraction) {
    return extraction.fold(function (errInfo) {
      throw new Error(formatError(errInfo));
    }, $_167yw6wjjepbveag.identity);
  };
  var asRawOrDie = function (label, prop, obj) {
    return getOrDie$1(asRaw(label, prop, obj));
  };
  var asStructOrDie = function (label, prop, obj) {
    return getOrDie$1(asStruct(label, prop, obj));
  };
  var formatError = function (errInfo) {
    return 'Errors: \n' + $_173xdnycjepbvek0.formatErrors(errInfo.errors) + '\n\nInput object: ' + $_173xdnycjepbvek0.formatObj(errInfo.input);
  };
  var choose$1 = function (key, branches) {
    return $_95rrwuyfjepbveki.choose(key, branches);
  };
  var thunkOf = function (desc, schema) {
    return $_1xywvgy9jepbvej4.thunk(desc, schema);
  };
  var funcOrDie = function (args, schema) {
    var retriever = function (output, strength) {
      return getOrDie$1(extract('()', schema, strength, output));
    };
    return $_1xywvgy9jepbvej4.func(args, schema, retriever);
  };
  var $_7je55jyejepbvekc = {
    anyValue: $_167yw6wjjepbveag.constant(anyValue$1),
    arrOfObj: arrOfObj$1,
    arrOf: arrOf,
    arrOfVal: arrOfVal,
    valueOf: valueOf,
    setOf: setOf$1,
    objOf: objOf,
    objOfOnly: objOfOnly,
    asStruct: asStruct,
    asRaw: asRaw,
    asStructOrDie: asStructOrDie,
    asRawOrDie: asRawOrDie,
    getOrDie: getOrDie$1,
    formatError: formatError,
    choose: choose$1,
    thunkOf: thunkOf,
    funcOrDie: funcOrDie
  };

  var nu$4 = function (parts) {
    if (!$_f53w39xsjepbvefs.hasKey(parts, 'can') && !$_f53w39xsjepbvefs.hasKey(parts, 'abort') && !$_f53w39xsjepbvefs.hasKey(parts, 'run'))
      throw new Error('EventHandler defined by: ' + $_3c4zqfydjepbvek9.stringify(parts, null, 2) + ' does not have can, abort, or run!');
    return $_7je55jyejepbvekc.asRawOrDie('Extracting event.handler', $_7je55jyejepbvekc.objOfOnly([
      $_8rfcbxy7jepbvein.defaulted('can', $_167yw6wjjepbveag.constant(true)),
      $_8rfcbxy7jepbvein.defaulted('abort', $_167yw6wjjepbveag.constant(false)),
      $_8rfcbxy7jepbvein.defaulted('run', $_167yw6wjjepbveag.noop)
    ]), parts);
  };
  var all$1 = function (handlers, f) {
    return function () {
      var args = Array.prototype.slice.call(arguments, 0);
      return $_227y8rwsjepbveb6.foldl(handlers, function (acc, handler) {
        return acc && f(handler).apply(undefined, args);
      }, true);
    };
  };
  var any = function (handlers, f) {
    return function () {
      var args = Array.prototype.slice.call(arguments, 0);
      return $_227y8rwsjepbveb6.foldl(handlers, function (acc, handler) {
        return acc || f(handler).apply(undefined, args);
      }, false);
    };
  };
  var read = function (handler) {
    return $_bu3dt3wzjepbvebs.isFunction(handler) ? {
      can: $_167yw6wjjepbveag.constant(true),
      abort: $_167yw6wjjepbveag.constant(false),
      run: handler
    } : handler;
  };
  var fuse = function (handlers) {
    var can = all$1(handlers, function (handler) {
      return handler.can;
    });
    var abort = any(handlers, function (handler) {
      return handler.abort;
    });
    var run = function () {
      var args = Array.prototype.slice.call(arguments, 0);
      $_227y8rwsjepbveb6.each(handlers, function (handler) {
        handler.run.apply(undefined, args);
      });
    };
    return nu$4({
      can: can,
      abort: abort,
      run: run
    });
  };
  var $_1jox9ry6jepbvei7 = {
    read: read,
    fuse: fuse,
    nu: nu$4
  };

  var derive = $_f53w39xsjepbvefs.wrapAll;
  var abort = function (name, predicate) {
    return {
      key: name,
      value: $_1jox9ry6jepbvei7.nu({ abort: predicate })
    };
  };
  var can = function (name, predicate) {
    return {
      key: name,
      value: $_1jox9ry6jepbvei7.nu({ can: predicate })
    };
  };
  var preventDefault = function (name) {
    return {
      key: name,
      value: $_1jox9ry6jepbvei7.nu({
        run: function (component, simulatedEvent) {
          simulatedEvent.event().prevent();
        }
      })
    };
  };
  var run = function (name, handler) {
    return {
      key: name,
      value: $_1jox9ry6jepbvei7.nu({ run: handler })
    };
  };
  var runActionExtra = function (name, action, extra) {
    return {
      key: name,
      value: $_1jox9ry6jepbvei7.nu({
        run: function (component) {
          action.apply(undefined, [component].concat(extra));
        }
      })
    };
  };
  var runOnName = function (name) {
    return function (handler) {
      return run(name, handler);
    };
  };
  var runOnSourceName = function (name) {
    return function (handler) {
      return {
        key: name,
        value: $_1jox9ry6jepbvei7.nu({
          run: function (component, simulatedEvent) {
            if ($_8xqfm2y5jepbvei2.isSource(component, simulatedEvent))
              handler(component, simulatedEvent);
          }
        })
      };
    };
  };
  var redirectToUid = function (name, uid) {
    return run(name, function (component, simulatedEvent) {
      component.getSystem().getByUid(uid).each(function (redirectee) {
        $_e4saacwgjepbvea0.dispatchEvent(redirectee, redirectee.element(), name, simulatedEvent);
      });
    });
  };
  var redirectToPart = function (name, detail, partName) {
    var uid = detail.partUids()[partName];
    return redirectToUid(name, uid);
  };
  var runWithTarget = function (name, f) {
    return run(name, function (component, simulatedEvent) {
      component.getSystem().getByDom(simulatedEvent.event().target()).each(function (target) {
        f(component, target, simulatedEvent);
      });
    });
  };
  var cutter = function (name) {
    return run(name, function (component, simulatedEvent) {
      simulatedEvent.cut();
    });
  };
  var stopper = function (name) {
    return run(name, function (component, simulatedEvent) {
      simulatedEvent.stop();
    });
  };
  var $_81tpe0y4jepbvehy = {
    derive: derive,
    run: run,
    preventDefault: preventDefault,
    runActionExtra: runActionExtra,
    runOnAttached: runOnSourceName($_alx3dcwhjepbvea8.attachedToDom()),
    runOnDetached: runOnSourceName($_alx3dcwhjepbvea8.detachedFromDom()),
    runOnInit: runOnSourceName($_alx3dcwhjepbvea8.systemInit()),
    runOnExecute: runOnName($_alx3dcwhjepbvea8.execute()),
    redirectToUid: redirectToUid,
    redirectToPart: redirectToPart,
    runWithTarget: runWithTarget,
    abort: abort,
    can: can,
    cutter: cutter,
    stopper: stopper
  };

  var markAsBehaviourApi = function (f, apiName, apiFunction) {
    return f;
  };
  var markAsExtraApi = function (f, extraName) {
    return f;
  };
  var markAsSketchApi = function (f, apiFunction) {
    return f;
  };
  var getAnnotation = Option.none;
  var $_dzlpbjygjepbvekn = {
    markAsBehaviourApi: markAsBehaviourApi,
    markAsExtraApi: markAsExtraApi,
    markAsSketchApi: markAsSketchApi,
    getAnnotation: getAnnotation
  };

  var nu$5 = $_2pqntjx4jepbvecr.immutableBag(['tag'], [
    'classes',
    'attributes',
    'styles',
    'value',
    'innerHtml',
    'domChildren',
    'defChildren'
  ]);
  var defToStr = function (defn) {
    var raw = defToRaw(defn);
    return $_3c4zqfydjepbvek9.stringify(raw, null, 2);
  };
  var defToRaw = function (defn) {
    return {
      tag: defn.tag(),
      classes: defn.classes().getOr([]),
      attributes: defn.attributes().getOr({}),
      styles: defn.styles().getOr({}),
      value: defn.value().getOr('<none>'),
      innerHtml: defn.innerHtml().getOr('<none>'),
      defChildren: defn.defChildren().getOr('<none>'),
      domChildren: defn.domChildren().fold(function () {
        return '<none>';
      }, function (children) {
        return children.length === 0 ? '0 children, but still specified' : String(children.length);
      })
    };
  };
  var $_5k63xnyijepbvel4 = {
    nu: nu$5,
    defToStr: defToStr,
    defToRaw: defToRaw
  };

  var fields = [
    'classes',
    'attributes',
    'styles',
    'value',
    'innerHtml',
    'defChildren',
    'domChildren'
  ];
  var nu$6 = $_2pqntjx4jepbvecr.immutableBag([], fields);
  var derive$1 = function (settings) {
    var r = {};
    var keys = $_1l8sbcx0jepbvebt.keys(settings);
    $_227y8rwsjepbveb6.each(keys, function (key) {
      settings[key].each(function (v) {
        r[key] = v;
      });
    });
    return nu$6(r);
  };
  var modToStr = function (mod) {
    var raw = modToRaw(mod);
    return $_3c4zqfydjepbvek9.stringify(raw, null, 2);
  };
  var modToRaw = function (mod) {
    return {
      classes: mod.classes().getOr('<none>'),
      attributes: mod.attributes().getOr('<none>'),
      styles: mod.styles().getOr('<none>'),
      value: mod.value().getOr('<none>'),
      innerHtml: mod.innerHtml().getOr('<none>'),
      defChildren: mod.defChildren().getOr('<none>'),
      domChildren: mod.domChildren().fold(function () {
        return '<none>';
      }, function (children) {
        return children.length === 0 ? '0 children, but still specified' : String(children.length);
      })
    };
  };
  var clashingOptArrays = function (key, oArr1, oArr2) {
    return oArr1.fold(function () {
      return oArr2.fold(function () {
        return {};
      }, function (arr2) {
        return $_f53w39xsjepbvefs.wrap(key, arr2);
      });
    }, function (arr1) {
      return oArr2.fold(function () {
        return $_f53w39xsjepbvefs.wrap(key, arr1);
      }, function (arr2) {
        return $_f53w39xsjepbvefs.wrap(key, arr2);
      });
    });
  };
  var merge$1 = function (defnA, mod) {
    var raw = $_aaookwyjepbvebq.deepMerge({
      tag: defnA.tag(),
      classes: mod.classes().getOr([]).concat(defnA.classes().getOr([])),
      attributes: $_aaookwyjepbvebq.merge(defnA.attributes().getOr({}), mod.attributes().getOr({})),
      styles: $_aaookwyjepbvebq.merge(defnA.styles().getOr({}), mod.styles().getOr({}))
    }, mod.innerHtml().or(defnA.innerHtml()).map(function (innerHtml) {
      return $_f53w39xsjepbvefs.wrap('innerHtml', innerHtml);
    }).getOr({}), clashingOptArrays('domChildren', mod.domChildren(), defnA.domChildren()), clashingOptArrays('defChildren', mod.defChildren(), defnA.defChildren()), mod.value().or(defnA.value()).map(function (value) {
      return $_f53w39xsjepbvefs.wrap('value', value);
    }).getOr({}));
    return $_5k63xnyijepbvel4.nu(raw);
  };
  var $_1rbjqxyhjepbveks = {
    nu: nu$6,
    derive: derive$1,
    merge: merge$1,
    modToStr: modToStr,
    modToRaw: modToRaw
  };

  var executeEvent = function (bConfig, bState, executor) {
    return $_81tpe0y4jepbvehy.runOnExecute(function (component) {
      executor(component, bConfig, bState);
    });
  };
  var loadEvent = function (bConfig, bState, f) {
    return $_81tpe0y4jepbvehy.runOnInit(function (component, simulatedEvent) {
      f(component, bConfig, bState);
    });
  };
  var create = function (schema, name, active, apis, extra, state) {
    var configSchema = $_7je55jyejepbvekc.objOfOnly(schema);
    var schemaSchema = $_8rfcbxy7jepbvein.optionObjOf(name, [$_8rfcbxy7jepbvein.optionObjOfOnly('config', schema)]);
    return doCreate(configSchema, schemaSchema, name, active, apis, extra, state);
  };
  var createModes = function (modes, name, active, apis, extra, state) {
    var configSchema = modes;
    var schemaSchema = $_8rfcbxy7jepbvein.optionObjOf(name, [$_8rfcbxy7jepbvein.optionOf('config', modes)]);
    return doCreate(configSchema, schemaSchema, name, active, apis, extra, state);
  };
  var wrapApi = function (bName, apiFunction, apiName) {
    var f = function (component) {
      var args = arguments;
      return component.config({ name: $_167yw6wjjepbveag.constant(bName) }).fold(function () {
        throw new Error('We could not find any behaviour configuration for: ' + bName + '. Using API: ' + apiName);
      }, function (info) {
        var rest = Array.prototype.slice.call(args, 1);
        return apiFunction.apply(undefined, [
          component,
          info.config,
          info.state
        ].concat(rest));
      });
    };
    return $_dzlpbjygjepbvekn.markAsBehaviourApi(f, apiName, apiFunction);
  };
  var revokeBehaviour = function (name) {
    return {
      key: name,
      value: undefined
    };
  };
  var doCreate = function (configSchema, schemaSchema, name, active, apis, extra, state) {
    var getConfig = function (info) {
      return $_f53w39xsjepbvefs.hasKey(info, name) ? info[name]() : Option.none();
    };
    var wrappedApis = $_1l8sbcx0jepbvebt.map(apis, function (apiF, apiName) {
      return wrapApi(name, apiF, apiName);
    });
    var wrappedExtra = $_1l8sbcx0jepbvebt.map(extra, function (extraF, extraName) {
      return $_dzlpbjygjepbvekn.markAsExtraApi(extraF, extraName);
    });
    var me = $_aaookwyjepbvebq.deepMerge(wrappedExtra, wrappedApis, {
      revoke: $_167yw6wjjepbveag.curry(revokeBehaviour, name),
      config: function (spec) {
        var prepared = $_7je55jyejepbvekc.asStructOrDie(name + '-config', configSchema, spec);
        return {
          key: name,
          value: {
            config: prepared,
            me: me,
            configAsRaw: $_b2ra0wwljepbveal.cached(function () {
              return $_7je55jyejepbvekc.asRawOrDie(name + '-config', configSchema, spec);
            }),
            initialConfig: spec,
            state: state
          }
        };
      },
      schema: function () {
        return schemaSchema;
      },
      exhibit: function (info, base) {
        return getConfig(info).bind(function (behaviourInfo) {
          return $_f53w39xsjepbvefs.readOptFrom(active, 'exhibit').map(function (exhibitor) {
            return exhibitor(base, behaviourInfo.config, behaviourInfo.state);
          });
        }).getOr($_1rbjqxyhjepbveks.nu({}));
      },
      name: function () {
        return name;
      },
      handlers: function (info) {
        return getConfig(info).bind(function (behaviourInfo) {
          return $_f53w39xsjepbvefs.readOptFrom(active, 'events').map(function (events) {
            return events(behaviourInfo.config, behaviourInfo.state);
          });
        }).getOr({});
      }
    });
    return me;
  };
  var $_s3kjuy3jepbvehf = {
    executeEvent: executeEvent,
    loadEvent: loadEvent,
    create: create,
    createModes: createModes
  };

  var base = function (handleUnsupported, required) {
    return baseWith(handleUnsupported, required, {
      validate: $_bu3dt3wzjepbvebs.isFunction,
      label: 'function'
    });
  };
  var baseWith = function (handleUnsupported, required, pred) {
    if (required.length === 0)
      throw new Error('You must specify at least one required field.');
    $_7i7i4qx7jepbvecy.validateStrArr('required', required);
    $_7i7i4qx7jepbvecy.checkDupes(required);
    return function (obj) {
      var keys = $_1l8sbcx0jepbvebt.keys(obj);
      var allReqd = $_227y8rwsjepbveb6.forall(required, function (req) {
        return $_227y8rwsjepbveb6.contains(keys, req);
      });
      if (!allReqd)
        $_7i7i4qx7jepbvecy.reqMessage(required, keys);
      handleUnsupported(required, keys);
      var invalidKeys = $_227y8rwsjepbveb6.filter(required, function (key) {
        return !pred.validate(obj[key], key);
      });
      if (invalidKeys.length > 0)
        $_7i7i4qx7jepbvecy.invalidTypeMessage(invalidKeys, pred.label);
      return obj;
    };
  };
  var handleExact = function (required, keys) {
    var unsupported = $_227y8rwsjepbveb6.filter(keys, function (key) {
      return !$_227y8rwsjepbveb6.contains(required, key);
    });
    if (unsupported.length > 0)
      $_7i7i4qx7jepbvecy.unsuppMessage(unsupported);
  };
  var allowExtra = $_167yw6wjjepbveag.noop;
  var $_dn2l7pyljepbveli = {
    exactly: $_167yw6wjjepbveag.curry(base, handleExact),
    ensure: $_167yw6wjjepbveag.curry(base, allowExtra),
    ensureWith: $_167yw6wjjepbveag.curry(baseWith, allowExtra)
  };

  var BehaviourState = $_dn2l7pyljepbveli.ensure(['readState']);

  var init = function () {
    return BehaviourState({
      readState: function () {
        return 'No State required';
      }
    });
  };
  var $_ahkml8yjjepbvele = { init: init };

  var derive$2 = function (capabilities) {
    return $_f53w39xsjepbvefs.wrapAll(capabilities);
  };
  var simpleSchema = $_7je55jyejepbvekc.objOfOnly([
    $_8rfcbxy7jepbvein.strict('fields'),
    $_8rfcbxy7jepbvein.strict('name'),
    $_8rfcbxy7jepbvein.defaulted('active', {}),
    $_8rfcbxy7jepbvein.defaulted('apis', {}),
    $_8rfcbxy7jepbvein.defaulted('extra', {}),
    $_8rfcbxy7jepbvein.defaulted('state', $_ahkml8yjjepbvele)
  ]);
  var create$1 = function (data) {
    var value = $_7je55jyejepbvekc.asRawOrDie('Creating behaviour: ' + data.name, simpleSchema, data);
    return $_s3kjuy3jepbvehf.create(value.fields, value.name, value.active, value.apis, value.extra, value.state);
  };
  var modeSchema = $_7je55jyejepbvekc.objOfOnly([
    $_8rfcbxy7jepbvein.strict('branchKey'),
    $_8rfcbxy7jepbvein.strict('branches'),
    $_8rfcbxy7jepbvein.strict('name'),
    $_8rfcbxy7jepbvein.defaulted('active', {}),
    $_8rfcbxy7jepbvein.defaulted('apis', {}),
    $_8rfcbxy7jepbvein.defaulted('extra', {}),
    $_8rfcbxy7jepbvein.defaulted('state', $_ahkml8yjjepbvele)
  ]);
  var createModes$1 = function (data) {
    var value = $_7je55jyejepbvekc.asRawOrDie('Creating behaviour: ' + data.name, modeSchema, data);
    return $_s3kjuy3jepbvehf.createModes($_7je55jyejepbvekc.choose(value.branchKey, value.branches), value.name, value.active, value.apis, value.extra, value.state);
  };
  var $_9otgsgy2jepbveh4 = {
    derive: derive$2,
    revoke: $_167yw6wjjepbveag.constant(undefined),
    noActive: $_167yw6wjjepbveag.constant({}),
    noApis: $_167yw6wjjepbveag.constant({}),
    noExtra: $_167yw6wjjepbveag.constant({}),
    noState: $_167yw6wjjepbveag.constant($_ahkml8yjjepbvele),
    create: create$1,
    createModes: createModes$1
  };

  function Toggler (turnOff, turnOn, initial) {
    var active = initial || false;
    var on = function () {
      turnOn();
      active = true;
    };
    var off = function () {
      turnOff();
      active = false;
    };
    var toggle = function () {
      var f = active ? off : on;
      f();
    };
    var isOn = function () {
      return active;
    };
    return {
      on: on,
      off: off,
      toggle: toggle,
      isOn: isOn
    };
  }

  var read$1 = function (element, attr) {
    var value = $_1sxky7xrjepbvefh.get(element, attr);
    return value === undefined || value === '' ? [] : value.split(' ');
  };
  var add = function (element, attr, id) {
    var old = read$1(element, attr);
    var nu = old.concat([id]);
    $_1sxky7xrjepbvefh.set(element, attr, nu.join(' '));
  };
  var remove$2 = function (element, attr, id) {
    var nu = $_227y8rwsjepbveb6.filter(read$1(element, attr), function (v) {
      return v !== id;
    });
    if (nu.length > 0)
      $_1sxky7xrjepbvefh.set(element, attr, nu.join(' '));
    else
      $_1sxky7xrjepbvefh.remove(element, attr);
  };
  var $_489aicyqjepbvely = {
    read: read$1,
    add: add,
    remove: remove$2
  };

  var supports = function (element) {
    return element.dom().classList !== undefined;
  };
  var get$2 = function (element) {
    return $_489aicyqjepbvely.read(element, 'class');
  };
  var add$1 = function (element, clazz) {
    return $_489aicyqjepbvely.add(element, 'class', clazz);
  };
  var remove$3 = function (element, clazz) {
    return $_489aicyqjepbvely.remove(element, 'class', clazz);
  };
  var toggle = function (element, clazz) {
    if ($_227y8rwsjepbveb6.contains(get$2(element), clazz)) {
      remove$3(element, clazz);
    } else {
      add$1(element, clazz);
    }
  };
  var $_dhclc0ypjepbvelv = {
    get: get$2,
    add: add$1,
    remove: remove$3,
    toggle: toggle,
    supports: supports
  };

  var add$2 = function (element, clazz) {
    if ($_dhclc0ypjepbvelv.supports(element))
      element.dom().classList.add(clazz);
    else
      $_dhclc0ypjepbvelv.add(element, clazz);
  };
  var cleanClass = function (element) {
    var classList = $_dhclc0ypjepbvelv.supports(element) ? element.dom().classList : $_dhclc0ypjepbvelv.get(element);
    if (classList.length === 0) {
      $_1sxky7xrjepbvefh.remove(element, 'class');
    }
  };
  var remove$4 = function (element, clazz) {
    if ($_dhclc0ypjepbvelv.supports(element)) {
      var classList = element.dom().classList;
      classList.remove(clazz);
    } else
      $_dhclc0ypjepbvelv.remove(element, clazz);
    cleanClass(element);
  };
  var toggle$1 = function (element, clazz) {
    return $_dhclc0ypjepbvelv.supports(element) ? element.dom().classList.toggle(clazz) : $_dhclc0ypjepbvelv.toggle(element, clazz);
  };
  var toggler = function (element, clazz) {
    var hasClasslist = $_dhclc0ypjepbvelv.supports(element);
    var classList = element.dom().classList;
    var off = function () {
      if (hasClasslist)
        classList.remove(clazz);
      else
        $_dhclc0ypjepbvelv.remove(element, clazz);
    };
    var on = function () {
      if (hasClasslist)
        classList.add(clazz);
      else
        $_dhclc0ypjepbvelv.add(element, clazz);
    };
    return Toggler(off, on, has$1(element, clazz));
  };
  var has$1 = function (element, clazz) {
    return $_dhclc0ypjepbvelv.supports(element) && element.dom().classList.contains(clazz);
  };
  var $_cs8xnaynjepbvelr = {
    add: add$2,
    remove: remove$4,
    toggle: toggle$1,
    toggler: toggler,
    has: has$1
  };

  var swap = function (element, addCls, removeCls) {
    $_cs8xnaynjepbvelr.remove(element, removeCls);
    $_cs8xnaynjepbvelr.add(element, addCls);
  };
  var toAlpha = function (component, swapConfig, swapState) {
    swap(component.element(), swapConfig.alpha(), swapConfig.omega());
  };
  var toOmega = function (component, swapConfig, swapState) {
    swap(component.element(), swapConfig.omega(), swapConfig.alpha());
  };
  var clear = function (component, swapConfig, swapState) {
    $_cs8xnaynjepbvelr.remove(component.element(), swapConfig.alpha());
    $_cs8xnaynjepbvelr.remove(component.element(), swapConfig.omega());
  };
  var isAlpha = function (component, swapConfig, swapState) {
    return $_cs8xnaynjepbvelr.has(component.element(), swapConfig.alpha());
  };
  var isOmega = function (component, swapConfig, swapState) {
    return $_cs8xnaynjepbvelr.has(component.element(), swapConfig.omega());
  };
  var $_170ovlymjepbveln = {
    toAlpha: toAlpha,
    toOmega: toOmega,
    isAlpha: isAlpha,
    isOmega: isOmega,
    clear: clear
  };

  var SwapSchema = [
    $_8rfcbxy7jepbvein.strict('alpha'),
    $_8rfcbxy7jepbvein.strict('omega')
  ];

  var Swapping = $_9otgsgy2jepbveh4.create({
    fields: SwapSchema,
    name: 'swapping',
    apis: $_170ovlymjepbveln
  });

  var Cell = function (initial) {
    var value = initial;
    var get = function () {
      return value;
    };
    var set = function (v) {
      value = v;
    };
    var clone = function () {
      return Cell(get());
    };
    return {
      get: get,
      set: set,
      clone: clone
    };
  };

  function ClosestOrAncestor (is, ancestor, scope, a, isRoot) {
    return is(scope, a) ? Option.some(scope) : $_bu3dt3wzjepbvebs.isFunction(isRoot) && isRoot(scope) ? Option.none() : ancestor(scope, a, isRoot);
  }

  var first$1 = function (predicate) {
    return descendant($_eqayqzxjjepbveeh.body(), predicate);
  };
  var ancestor = function (scope, predicate, isRoot) {
    var element = scope.dom();
    var stop = $_bu3dt3wzjepbvebs.isFunction(isRoot) ? isRoot : $_167yw6wjjepbveag.constant(false);
    while (element.parentNode) {
      element = element.parentNode;
      var el = $_4pcs1kxfjepbvee2.fromDom(element);
      if (predicate(el))
        return Option.some(el);
      else if (stop(el))
        break;
    }
    return Option.none();
  };
  var closest = function (scope, predicate, isRoot) {
    var is = function (scope) {
      return predicate(scope);
    };
    return ClosestOrAncestor(is, ancestor, scope, predicate, isRoot);
  };
  var sibling = function (scope, predicate) {
    var element = scope.dom();
    if (!element.parentNode)
      return Option.none();
    return child$1($_4pcs1kxfjepbvee2.fromDom(element.parentNode), function (x) {
      return !$_6fsl8xx9jepbveda.eq(scope, x) && predicate(x);
    });
  };
  var child$1 = function (scope, predicate) {
    var result = $_227y8rwsjepbveb6.find(scope.dom().childNodes, $_167yw6wjjepbveag.compose(predicate, $_4pcs1kxfjepbvee2.fromDom));
    return result.map($_4pcs1kxfjepbvee2.fromDom);
  };
  var descendant = function (scope, predicate) {
    var descend = function (element) {
      for (var i = 0; i < element.childNodes.length; i++) {
        if (predicate($_4pcs1kxfjepbvee2.fromDom(element.childNodes[i])))
          return Option.some($_4pcs1kxfjepbvee2.fromDom(element.childNodes[i]));
        var res = descend(element.childNodes[i]);
        if (res.isSome())
          return res;
      }
      return Option.none();
    };
    return descend(scope.dom());
  };
  var $_g7dmbqyvjepbvemd = {
    first: first$1,
    ancestor: ancestor,
    closest: closest,
    sibling: sibling,
    child: child$1,
    descendant: descendant
  };

  var any$1 = function (predicate) {
    return $_g7dmbqyvjepbvemd.first(predicate).isSome();
  };
  var ancestor$1 = function (scope, predicate, isRoot) {
    return $_g7dmbqyvjepbvemd.ancestor(scope, predicate, isRoot).isSome();
  };
  var closest$1 = function (scope, predicate, isRoot) {
    return $_g7dmbqyvjepbvemd.closest(scope, predicate, isRoot).isSome();
  };
  var sibling$1 = function (scope, predicate) {
    return $_g7dmbqyvjepbvemd.sibling(scope, predicate).isSome();
  };
  var child$2 = function (scope, predicate) {
    return $_g7dmbqyvjepbvemd.child(scope, predicate).isSome();
  };
  var descendant$1 = function (scope, predicate) {
    return $_g7dmbqyvjepbvemd.descendant(scope, predicate).isSome();
  };
  var $_2xuvs2yujepbvemb = {
    any: any$1,
    ancestor: ancestor$1,
    closest: closest$1,
    sibling: sibling$1,
    child: child$2,
    descendant: descendant$1
  };

  var focus = function (element) {
    element.dom().focus();
  };
  var blur = function (element) {
    element.dom().blur();
  };
  var hasFocus = function (element) {
    var doc = $_ginpy6x3jepbvece.owner(element).dom();
    return element.dom() === doc.activeElement;
  };
  var active = function (_doc) {
    var doc = _doc !== undefined ? _doc.dom() : document;
    return Option.from(doc.activeElement).map($_4pcs1kxfjepbvee2.fromDom);
  };
  var focusInside = function (element) {
    var doc = $_ginpy6x3jepbvece.owner(element);
    var inside = active(doc).filter(function (a) {
      return $_2xuvs2yujepbvemb.closest(a, $_167yw6wjjepbveag.curry($_6fsl8xx9jepbveda.eq, element));
    });
    inside.fold(function () {
      focus(element);
    }, $_167yw6wjjepbveag.noop);
  };
  var search = function (element) {
    return active($_ginpy6x3jepbvece.owner(element)).filter(function (e) {
      return element.dom().contains(e.dom());
    });
  };
  var $_5khawkytjepbvem5 = {
    hasFocus: hasFocus,
    focus: focus,
    blur: blur,
    active: active,
    search: search,
    focusInside: focusInside
  };

  var DOMUtils = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

  var ThemeManager = tinymce.util.Tools.resolve('tinymce.ThemeManager');

  var openLink = function (target) {
    var link = document.createElement('a');
    link.target = '_blank';
    link.href = target.href;
    link.rel = 'noreferrer noopener';
    var nuEvt = document.createEvent('MouseEvents');
    nuEvt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    document.body.appendChild(link);
    link.dispatchEvent(nuEvt);
    document.body.removeChild(link);
  };
  var $_b2l4wtyzjepbvemt = { openLink: openLink };

  var isSkinDisabled = function (editor) {
    return editor.settings.skin === false;
  };
  var $_66hxhbz0jepbvemu = { isSkinDisabled: isSkinDisabled };

  var formatChanged = 'formatChanged';
  var orientationChanged = 'orientationChanged';
  var dropupDismissed = 'dropupDismissed';
  var $_cr5a5qz1jepbvemv = {
    formatChanged: $_167yw6wjjepbveag.constant(formatChanged),
    orientationChanged: $_167yw6wjjepbveag.constant(orientationChanged),
    dropupDismissed: $_167yw6wjjepbveag.constant(dropupDismissed)
  };

  var chooseChannels = function (channels, message) {
    return message.universal() ? channels : $_227y8rwsjepbveb6.filter(channels, function (ch) {
      return $_227y8rwsjepbveb6.contains(message.channels(), ch);
    });
  };
  var events = function (receiveConfig) {
    return $_81tpe0y4jepbvehy.derive([$_81tpe0y4jepbvehy.run($_alx3dcwhjepbvea8.receive(), function (component, message) {
        var channelMap = receiveConfig.channels();
        var channels = $_1l8sbcx0jepbvebt.keys(channelMap);
        var targetChannels = chooseChannels(channels, message);
        $_227y8rwsjepbveb6.each(targetChannels, function (ch) {
          var channelInfo = channelMap[ch]();
          var channelSchema = channelInfo.schema();
          var data = $_7je55jyejepbvekc.asStructOrDie('channel[' + ch + '] data\nReceiver: ' + $_bx258xmjepbvef1.element(component.element()), channelSchema, message.data());
          channelInfo.onReceive()(component, data);
        });
      })]);
  };
  var $_4hm1l6z4jepbvenc = { events: events };

  var menuFields = [
    $_8rfcbxy7jepbvein.strict('menu'),
    $_8rfcbxy7jepbvein.strict('selectedMenu')
  ];
  var itemFields = [
    $_8rfcbxy7jepbvein.strict('item'),
    $_8rfcbxy7jepbvein.strict('selectedItem')
  ];
  var schema = $_7je55jyejepbvekc.objOfOnly(itemFields.concat(menuFields));
  var itemSchema = $_7je55jyejepbvekc.objOfOnly(itemFields);
  var $_g1ackyz7jepbveob = {
    menuFields: $_167yw6wjjepbveag.constant(menuFields),
    itemFields: $_167yw6wjjepbveag.constant(itemFields),
    schema: $_167yw6wjjepbveag.constant(schema),
    itemSchema: $_167yw6wjjepbveag.constant(itemSchema)
  };

  var initSize = $_8rfcbxy7jepbvein.strictObjOf('initSize', [
    $_8rfcbxy7jepbvein.strict('numColumns'),
    $_8rfcbxy7jepbvein.strict('numRows')
  ]);
  var itemMarkers = function () {
    return $_8rfcbxy7jepbvein.strictOf('markers', $_g1ackyz7jepbveob.itemSchema());
  };
  var menuMarkers = function () {
    return $_8rfcbxy7jepbvein.strictOf('markers', $_g1ackyz7jepbveob.schema());
  };
  var tieredMenuMarkers = function () {
    return $_8rfcbxy7jepbvein.strictObjOf('markers', [$_8rfcbxy7jepbvein.strict('backgroundMenu')].concat($_g1ackyz7jepbveob.menuFields()).concat($_g1ackyz7jepbveob.itemFields()));
  };
  var markers = function (required) {
    return $_8rfcbxy7jepbvein.strictObjOf('markers', $_227y8rwsjepbveb6.map(required, $_8rfcbxy7jepbvein.strict));
  };
  var onPresenceHandler = function (label, fieldName, presence) {
    var trace = $_fa6js4xljepbveen.getTrace();
    return $_8rfcbxy7jepbvein.field(fieldName, fieldName, presence, $_7je55jyejepbvekc.valueOf(function (f) {
      return Result.value(function () {
        $_fa6js4xljepbveen.logHandler(label, fieldName, trace);
        return f.apply(undefined, arguments);
      });
    }));
  };
  var onHandler = function (fieldName) {
    return onPresenceHandler('onHandler', fieldName, $_1zybmsy8jepbveix.defaulted($_167yw6wjjepbveag.noop));
  };
  var onKeyboardHandler = function (fieldName) {
    return onPresenceHandler('onKeyboardHandler', fieldName, $_1zybmsy8jepbveix.defaulted(Option.none));
  };
  var onStrictHandler = function (fieldName) {
    return onPresenceHandler('onHandler', fieldName, $_1zybmsy8jepbveix.strict());
  };
  var onStrictKeyboardHandler = function (fieldName) {
    return onPresenceHandler('onKeyboardHandler', fieldName, $_1zybmsy8jepbveix.strict());
  };
  var output$1 = function (name, value) {
    return $_8rfcbxy7jepbvein.state(name, $_167yw6wjjepbveag.constant(value));
  };
  var snapshot$1 = function (name) {
    return $_8rfcbxy7jepbvein.state(name, $_167yw6wjjepbveag.identity);
  };
  var $_ca0qsez6jepbvens = {
    initSize: $_167yw6wjjepbveag.constant(initSize),
    itemMarkers: itemMarkers,
    menuMarkers: menuMarkers,
    tieredMenuMarkers: tieredMenuMarkers,
    markers: markers,
    onHandler: onHandler,
    onKeyboardHandler: onKeyboardHandler,
    onStrictHandler: onStrictHandler,
    onStrictKeyboardHandler: onStrictKeyboardHandler,
    output: output$1,
    snapshot: snapshot$1
  };

  var ReceivingSchema = [$_8rfcbxy7jepbvein.strictOf('channels', $_7je55jyejepbvekc.setOf(Result.value, $_7je55jyejepbvekc.objOfOnly([
      $_ca0qsez6jepbvens.onStrictHandler('onReceive'),
      $_8rfcbxy7jepbvein.defaulted('schema', $_7je55jyejepbvekc.anyValue())
    ])))];

  var Receiving = $_9otgsgy2jepbveh4.create({
    fields: ReceivingSchema,
    name: 'receiving',
    active: $_4hm1l6z4jepbvenc
  });

  var updateAriaState = function (component, toggleConfig) {
    var pressed = isOn(component, toggleConfig);
    var ariaInfo = toggleConfig.aria();
    ariaInfo.update()(component, ariaInfo, pressed);
  };
  var toggle$2 = function (component, toggleConfig, toggleState) {
    $_cs8xnaynjepbvelr.toggle(component.element(), toggleConfig.toggleClass());
    updateAriaState(component, toggleConfig);
  };
  var on = function (component, toggleConfig, toggleState) {
    $_cs8xnaynjepbvelr.add(component.element(), toggleConfig.toggleClass());
    updateAriaState(component, toggleConfig);
  };
  var off = function (component, toggleConfig, toggleState) {
    $_cs8xnaynjepbvelr.remove(component.element(), toggleConfig.toggleClass());
    updateAriaState(component, toggleConfig);
  };
  var isOn = function (component, toggleConfig) {
    return $_cs8xnaynjepbvelr.has(component.element(), toggleConfig.toggleClass());
  };
  var onLoad = function (component, toggleConfig, toggleState) {
    var api = toggleConfig.selected() ? on : off;
    api(component, toggleConfig, toggleState);
  };
  var $_4rh89rzajepbveor = {
    onLoad: onLoad,
    toggle: toggle$2,
    isOn: isOn,
    on: on,
    off: off
  };

  var exhibit = function (base, toggleConfig, toggleState) {
    return $_1rbjqxyhjepbveks.nu({});
  };
  var events$1 = function (toggleConfig, toggleState) {
    var execute = $_s3kjuy3jepbvehf.executeEvent(toggleConfig, toggleState, $_4rh89rzajepbveor.toggle);
    var load = $_s3kjuy3jepbvehf.loadEvent(toggleConfig, toggleState, $_4rh89rzajepbveor.onLoad);
    return $_81tpe0y4jepbvehy.derive($_227y8rwsjepbveb6.flatten([
      toggleConfig.toggleOnExecute() ? [execute] : [],
      [load]
    ]));
  };
  var $_38917z9jepbveom = {
    exhibit: exhibit,
    events: events$1
  };

  var updatePressed = function (component, ariaInfo, status) {
    $_1sxky7xrjepbvefh.set(component.element(), 'aria-pressed', status);
    if (ariaInfo.syncWithExpanded())
      updateExpanded(component, ariaInfo, status);
  };
  var updateSelected = function (component, ariaInfo, status) {
    $_1sxky7xrjepbvefh.set(component.element(), 'aria-selected', status);
  };
  var updateChecked = function (component, ariaInfo, status) {
    $_1sxky7xrjepbvefh.set(component.element(), 'aria-checked', status);
  };
  var updateExpanded = function (component, ariaInfo, status) {
    $_1sxky7xrjepbvefh.set(component.element(), 'aria-expanded', status);
  };
  var tagAttributes = {
    button: ['aria-pressed'],
    'input:checkbox': ['aria-checked']
  };
  var roleAttributes = {
    'button': ['aria-pressed'],
    'listbox': [
      'aria-pressed',
      'aria-expanded'
    ],
    'menuitemcheckbox': ['aria-checked']
  };
  var detectFromTag = function (component) {
    var elem = component.element();
    var rawTag = $_4aeewhxkjepbveek.name(elem);
    var suffix = rawTag === 'input' && $_1sxky7xrjepbvefh.has(elem, 'type') ? ':' + $_1sxky7xrjepbvefh.get(elem, 'type') : '';
    return $_f53w39xsjepbvefs.readOptFrom(tagAttributes, rawTag + suffix);
  };
  var detectFromRole = function (component) {
    var elem = component.element();
    if (!$_1sxky7xrjepbvefh.has(elem, 'role'))
      return Option.none();
    else {
      var role = $_1sxky7xrjepbvefh.get(elem, 'role');
      return $_f53w39xsjepbvefs.readOptFrom(roleAttributes, role);
    }
  };
  var updateAuto = function (component, ariaInfo, status) {
    var attributes = detectFromRole(component).orThunk(function () {
      return detectFromTag(component);
    }).getOr([]);
    $_227y8rwsjepbveb6.each(attributes, function (attr) {
      $_1sxky7xrjepbvefh.set(component.element(), attr, status);
    });
  };
  var $_51p574zcjepbvep2 = {
    updatePressed: updatePressed,
    updateSelected: updateSelected,
    updateChecked: updateChecked,
    updateExpanded: updateExpanded,
    updateAuto: updateAuto
  };

  var ToggleSchema = [
    $_8rfcbxy7jepbvein.defaulted('selected', false),
    $_8rfcbxy7jepbvein.strict('toggleClass'),
    $_8rfcbxy7jepbvein.defaulted('toggleOnExecute', true),
    $_8rfcbxy7jepbvein.defaultedOf('aria', { mode: 'none' }, $_7je55jyejepbvekc.choose('mode', {
      'pressed': [
        $_8rfcbxy7jepbvein.defaulted('syncWithExpanded', false),
        $_ca0qsez6jepbvens.output('update', $_51p574zcjepbvep2.updatePressed)
      ],
      'checked': [$_ca0qsez6jepbvens.output('update', $_51p574zcjepbvep2.updateChecked)],
      'expanded': [$_ca0qsez6jepbvens.output('update', $_51p574zcjepbvep2.updateExpanded)],
      'selected': [$_ca0qsez6jepbvens.output('update', $_51p574zcjepbvep2.updateSelected)],
      'none': [$_ca0qsez6jepbvens.output('update', $_167yw6wjjepbveag.noop)]
    }))
  ];

  var Toggling = $_9otgsgy2jepbveh4.create({
    fields: ToggleSchema,
    name: 'toggling',
    active: $_38917z9jepbveom,
    apis: $_4rh89rzajepbveor
  });

  var format = function (command, update) {
    return Receiving.config({
      channels: $_f53w39xsjepbvefs.wrap($_cr5a5qz1jepbvemv.formatChanged(), {
        onReceive: function (button, data) {
          if (data.command === command) {
            update(button, data.state);
          }
        }
      })
    });
  };
  var orientation = function (onReceive) {
    return Receiving.config({ channels: $_f53w39xsjepbvefs.wrap($_cr5a5qz1jepbvemv.orientationChanged(), { onReceive: onReceive }) });
  };
  var receive = function (channel, onReceive) {
    return {
      key: channel,
      value: { onReceive: onReceive }
    };
  };
  var $_bqtojizdjepbvepe = {
    format: format,
    orientation: orientation,
    receive: receive
  };

  var prefix = 'tinymce-mobile';
  var resolve$1 = function (p) {
    return prefix + '-' + p;
  };
  var $_3fme06zejepbvepj = {
    resolve: resolve$1,
    prefix: $_167yw6wjjepbveag.constant(prefix)
  };

  var focus$1 = function (component, focusConfig) {
    if (!focusConfig.ignore()) {
      $_5khawkytjepbvem5.focus(component.element());
      focusConfig.onFocus()(component);
    }
  };
  var blur$1 = function (component, focusConfig) {
    if (!focusConfig.ignore()) {
      $_5khawkytjepbvem5.blur(component.element());
    }
  };
  var isFocused = function (component) {
    return $_5khawkytjepbvem5.hasFocus(component.element());
  };
  var $_bpnc43zjjepbveq5 = {
    focus: focus$1,
    blur: blur$1,
    isFocused: isFocused
  };

  var exhibit$1 = function (base, focusConfig) {
    if (focusConfig.ignore())
      return $_1rbjqxyhjepbveks.nu({});
    else
      return $_1rbjqxyhjepbveks.nu({ attributes: { 'tabindex': '-1' } });
  };
  var events$2 = function (focusConfig) {
    return $_81tpe0y4jepbvehy.derive([$_81tpe0y4jepbvehy.run($_alx3dcwhjepbvea8.focus(), function (component, simulatedEvent) {
        $_bpnc43zjjepbveq5.focus(component, focusConfig);
        simulatedEvent.stop();
      })]);
  };
  var $_dhqvfpzijepbveq4 = {
    exhibit: exhibit$1,
    events: events$2
  };

  var FocusSchema = [
    $_ca0qsez6jepbvens.onHandler('onFocus'),
    $_8rfcbxy7jepbvein.defaulted('ignore', false)
  ];

  var Focusing = $_9otgsgy2jepbveh4.create({
    fields: FocusSchema,
    name: 'focusing',
    active: $_dhqvfpzijepbveq4,
    apis: $_bpnc43zjjepbveq5
  });

  var $_fngredzpjepbver5 = {
    BACKSPACE: $_167yw6wjjepbveag.constant([8]),
    TAB: $_167yw6wjjepbveag.constant([9]),
    ENTER: $_167yw6wjjepbveag.constant([13]),
    SHIFT: $_167yw6wjjepbveag.constant([16]),
    CTRL: $_167yw6wjjepbveag.constant([17]),
    ALT: $_167yw6wjjepbveag.constant([18]),
    CAPSLOCK: $_167yw6wjjepbveag.constant([20]),
    ESCAPE: $_167yw6wjjepbveag.constant([27]),
    SPACE: $_167yw6wjjepbveag.constant([32]),
    PAGEUP: $_167yw6wjjepbveag.constant([33]),
    PAGEDOWN: $_167yw6wjjepbveag.constant([34]),
    END: $_167yw6wjjepbveag.constant([35]),
    HOME: $_167yw6wjjepbveag.constant([36]),
    LEFT: $_167yw6wjjepbveag.constant([37]),
    UP: $_167yw6wjjepbveag.constant([38]),
    RIGHT: $_167yw6wjjepbveag.constant([39]),
    DOWN: $_167yw6wjjepbveag.constant([40]),
    INSERT: $_167yw6wjjepbveag.constant([45]),
    DEL: $_167yw6wjjepbveag.constant([46]),
    META: $_167yw6wjjepbveag.constant([
      91,
      93,
      224
    ]),
    F10: $_167yw6wjjepbveag.constant([121])
  };

  var cycleBy = function (value, delta, min, max) {
    var r = value + delta;
    if (r > max)
      return min;
    else
      return r < min ? max : r;
  };
  var cap = function (value, min, max) {
    if (value <= min)
      return min;
    else
      return value >= max ? max : value;
  };
  var $_dybpw1zujepbves5 = {
    cycleBy: cycleBy,
    cap: cap
  };

  var all$2 = function (predicate) {
    return descendants($_eqayqzxjjepbveeh.body(), predicate);
  };
  var ancestors = function (scope, predicate, isRoot) {
    return $_227y8rwsjepbveb6.filter($_ginpy6x3jepbvece.parents(scope, isRoot), predicate);
  };
  var siblings$1 = function (scope, predicate) {
    return $_227y8rwsjepbveb6.filter($_ginpy6x3jepbvece.siblings(scope), predicate);
  };
  var children$1 = function (scope, predicate) {
    return $_227y8rwsjepbveb6.filter($_ginpy6x3jepbvece.children(scope), predicate);
  };
  var descendants = function (scope, predicate) {
    var result = [];
    $_227y8rwsjepbveb6.each($_ginpy6x3jepbvece.children(scope), function (x) {
      if (predicate(x)) {
        result = result.concat([x]);
      }
      result = result.concat(descendants(x, predicate));
    });
    return result;
  };
  var $_oa33vzwjepbves8 = {
    all: all$2,
    ancestors: ancestors,
    siblings: siblings$1,
    children: children$1,
    descendants: descendants
  };

  var all$3 = function (selector) {
    return $_d1zhj7xejepbvedv.all(selector);
  };
  var ancestors$1 = function (scope, selector, isRoot) {
    return $_oa33vzwjepbves8.ancestors(scope, function (e) {
      return $_d1zhj7xejepbvedv.is(e, selector);
    }, isRoot);
  };
  var siblings$2 = function (scope, selector) {
    return $_oa33vzwjepbves8.siblings(scope, function (e) {
      return $_d1zhj7xejepbvedv.is(e, selector);
    });
  };
  var children$2 = function (scope, selector) {
    return $_oa33vzwjepbves8.children(scope, function (e) {
      return $_d1zhj7xejepbvedv.is(e, selector);
    });
  };
  var descendants$1 = function (scope, selector) {
    return $_d1zhj7xejepbvedv.all(selector, scope);
  };
  var $_7az4v0zvjepbves7 = {
    all: all$3,
    ancestors: ancestors$1,
    siblings: siblings$2,
    children: children$2,
    descendants: descendants$1
  };

  var first$2 = function (selector) {
    return $_d1zhj7xejepbvedv.one(selector);
  };
  var ancestor$2 = function (scope, selector, isRoot) {
    return $_g7dmbqyvjepbvemd.ancestor(scope, function (e) {
      return $_d1zhj7xejepbvedv.is(e, selector);
    }, isRoot);
  };
  var sibling$2 = function (scope, selector) {
    return $_g7dmbqyvjepbvemd.sibling(scope, function (e) {
      return $_d1zhj7xejepbvedv.is(e, selector);
    });
  };
  var child$3 = function (scope, selector) {
    return $_g7dmbqyvjepbvemd.child(scope, function (e) {
      return $_d1zhj7xejepbvedv.is(e, selector);
    });
  };
  var descendant$2 = function (scope, selector) {
    return $_d1zhj7xejepbvedv.one(selector, scope);
  };
  var closest$2 = function (scope, selector, isRoot) {
    return ClosestOrAncestor($_d1zhj7xejepbvedv.is, ancestor$2, scope, selector, isRoot);
  };
  var $_94ndqzxjepbvesc = {
    first: first$2,
    ancestor: ancestor$2,
    sibling: sibling$2,
    child: child$3,
    descendant: descendant$2,
    closest: closest$2
  };

  var dehighlightAll = function (component, hConfig, hState) {
    var highlighted = $_7az4v0zvjepbves7.descendants(component.element(), '.' + hConfig.highlightClass());
    $_227y8rwsjepbveb6.each(highlighted, function (h) {
      $_cs8xnaynjepbvelr.remove(h, hConfig.highlightClass());
      component.getSystem().getByDom(h).each(function (target) {
        hConfig.onDehighlight()(component, target);
      });
    });
  };
  var dehighlight = function (component, hConfig, hState, target) {
    var wasHighlighted = isHighlighted(component, hConfig, hState, target);
    $_cs8xnaynjepbvelr.remove(target.element(), hConfig.highlightClass());
    if (wasHighlighted)
      hConfig.onDehighlight()(component, target);
  };
  var highlight = function (component, hConfig, hState, target) {
    var wasHighlighted = isHighlighted(component, hConfig, hState, target);
    dehighlightAll(component, hConfig, hState);
    $_cs8xnaynjepbvelr.add(target.element(), hConfig.highlightClass());
    if (!wasHighlighted)
      hConfig.onHighlight()(component, target);
  };
  var highlightFirst = function (component, hConfig, hState) {
    getFirst(component, hConfig, hState).each(function (firstComp) {
      highlight(component, hConfig, hState, firstComp);
    });
  };
  var highlightLast = function (component, hConfig, hState) {
    getLast(component, hConfig, hState).each(function (lastComp) {
      highlight(component, hConfig, hState, lastComp);
    });
  };
  var highlightAt = function (component, hConfig, hState, index) {
    getByIndex(component, hConfig, hState, index).fold(function (err) {
      throw new Error(err);
    }, function (firstComp) {
      highlight(component, hConfig, hState, firstComp);
    });
  };
  var highlightBy = function (component, hConfig, hState, predicate) {
    var items = $_7az4v0zvjepbves7.descendants(component.element(), '.' + hConfig.itemClass());
    var itemComps = $_4ymgfmy0jepbveh0.cat($_227y8rwsjepbveb6.map(items, function (i) {
      return component.getSystem().getByDom(i).toOption();
    }));
    var targetComp = $_227y8rwsjepbveb6.find(itemComps, predicate);
    targetComp.each(function (c) {
      highlight(component, hConfig, hState, c);
    });
  };
  var isHighlighted = function (component, hConfig, hState, queryTarget) {
    return $_cs8xnaynjepbvelr.has(queryTarget.element(), hConfig.highlightClass());
  };
  var getHighlighted = function (component, hConfig, hState) {
    return $_94ndqzxjepbvesc.descendant(component.element(), '.' + hConfig.highlightClass()).bind(component.getSystem().getByDom);
  };
  var getByIndex = function (component, hConfig, hState, index) {
    var items = $_7az4v0zvjepbves7.descendants(component.element(), '.' + hConfig.itemClass());
    return Option.from(items[index]).fold(function () {
      return Result.error('No element found with index ' + index);
    }, component.getSystem().getByDom);
  };
  var getFirst = function (component, hConfig, hState) {
    return $_94ndqzxjepbvesc.descendant(component.element(), '.' + hConfig.itemClass()).bind(component.getSystem().getByDom);
  };
  var getLast = function (component, hConfig, hState) {
    var items = $_7az4v0zvjepbves7.descendants(component.element(), '.' + hConfig.itemClass());
    var last = items.length > 0 ? Option.some(items[items.length - 1]) : Option.none();
    return last.bind(component.getSystem().getByDom);
  };
  var getDelta = function (component, hConfig, hState, delta) {
    var items = $_7az4v0zvjepbves7.descendants(component.element(), '.' + hConfig.itemClass());
    var current = $_227y8rwsjepbveb6.findIndex(items, function (item) {
      return $_cs8xnaynjepbvelr.has(item, hConfig.highlightClass());
    });
    return current.bind(function (selected) {
      var dest = $_dybpw1zujepbves5.cycleBy(selected, delta, 0, items.length - 1);
      return component.getSystem().getByDom(items[dest]);
    });
  };
  var getPrevious = function (component, hConfig, hState) {
    return getDelta(component, hConfig, hState, -1);
  };
  var getNext = function (component, hConfig, hState) {
    return getDelta(component, hConfig, hState, +1);
  };
  var $_gj2sbuztjepbvero = {
    dehighlightAll: dehighlightAll,
    dehighlight: dehighlight,
    highlight: highlight,
    highlightFirst: highlightFirst,
    highlightLast: highlightLast,
    highlightAt: highlightAt,
    highlightBy: highlightBy,
    isHighlighted: isHighlighted,
    getHighlighted: getHighlighted,
    getFirst: getFirst,
    getLast: getLast,
    getPrevious: getPrevious,
    getNext: getNext
  };

  var HighlightSchema = [
    $_8rfcbxy7jepbvein.strict('highlightClass'),
    $_8rfcbxy7jepbvein.strict('itemClass'),
    $_ca0qsez6jepbvens.onHandler('onHighlight'),
    $_ca0qsez6jepbvens.onHandler('onDehighlight')
  ];

  var Highlighting = $_9otgsgy2jepbveh4.create({
    fields: HighlightSchema,
    name: 'highlighting',
    apis: $_gj2sbuztjepbvero
  });

  var dom = function () {
    var get = function (component) {
      return $_5khawkytjepbvem5.search(component.element());
    };
    var set = function (component, focusee) {
      component.getSystem().triggerFocus(focusee, component.element());
    };
    return {
      get: get,
      set: set
    };
  };
  var highlights = function () {
    var get = function (component) {
      return Highlighting.getHighlighted(component).map(function (item) {
        return item.element();
      });
    };
    var set = function (component, element) {
      component.getSystem().getByDom(element).fold($_167yw6wjjepbveag.noop, function (item) {
        Highlighting.highlight(component, item);
      });
    };
    return {
      get: get,
      set: set
    };
  };
  var $_usnnrzrjepbverh = {
    dom: dom,
    highlights: highlights
  };

  var inSet = function (keys) {
    return function (event) {
      return $_227y8rwsjepbveb6.contains(keys, event.raw().which);
    };
  };
  var and = function (preds) {
    return function (event) {
      return $_227y8rwsjepbveb6.forall(preds, function (pred) {
        return pred(event);
      });
    };
  };
  var is$1 = function (key) {
    return function (event) {
      return event.raw().which === key;
    };
  };
  var isShift = function (event) {
    return event.raw().shiftKey === true;
  };
  var isControl = function (event) {
    return event.raw().ctrlKey === true;
  };
  var $_5173k3100jepbveso = {
    inSet: inSet,
    and: and,
    is: is$1,
    isShift: isShift,
    isNotShift: $_167yw6wjjepbveag.not(isShift),
    isControl: isControl,
    isNotControl: $_167yw6wjjepbveag.not(isControl)
  };

  var basic = function (key, action) {
    return {
      matches: $_5173k3100jepbveso.is(key),
      classification: action
    };
  };
  var rule = function (matches, action) {
    return {
      matches: matches,
      classification: action
    };
  };
  var choose$2 = function (transitions, event) {
    var transition = $_227y8rwsjepbveb6.find(transitions, function (t) {
      return t.matches(event);
    });
    return transition.map(function (t) {
      return t.classification;
    });
  };
  var $_g2z282zzjepbvesk = {
    basic: basic,
    rule: rule,
    choose: choose$2
  };

  var typical = function (infoSchema, stateInit, getRules, getEvents, getApis, optFocusIn) {
    var schema = function () {
      return infoSchema.concat([
        $_8rfcbxy7jepbvein.defaulted('focusManager', $_usnnrzrjepbverh.dom()),
        $_ca0qsez6jepbvens.output('handler', me),
        $_ca0qsez6jepbvens.output('state', stateInit)
      ]);
    };
    var processKey = function (component, simulatedEvent, keyingConfig, keyingState) {
      var rules = getRules(component, simulatedEvent, keyingConfig, keyingState);
      return $_g2z282zzjepbvesk.choose(rules, simulatedEvent.event()).bind(function (rule) {
        return rule(component, simulatedEvent, keyingConfig, keyingState);
      });
    };
    var toEvents = function (keyingConfig, keyingState) {
      var otherEvents = getEvents(keyingConfig, keyingState);
      var keyEvents = $_81tpe0y4jepbvehy.derive(optFocusIn.map(function (focusIn) {
        return $_81tpe0y4jepbvehy.run($_alx3dcwhjepbvea8.focus(), function (component, simulatedEvent) {
          focusIn(component, keyingConfig, keyingState, simulatedEvent);
          simulatedEvent.stop();
        });
      }).toArray().concat([$_81tpe0y4jepbvehy.run($_e2bl11wijepbvead.keydown(), function (component, simulatedEvent) {
          processKey(component, simulatedEvent, keyingConfig, keyingState).each(function (_) {
            simulatedEvent.stop();
          });
        })]));
      return $_aaookwyjepbvebq.deepMerge(otherEvents, keyEvents);
    };
    var me = {
      schema: schema,
      processKey: processKey,
      toEvents: toEvents,
      toApis: getApis
    };
    return me;
  };
  var $_bwquxszqjepbvera = { typical: typical };

  var cyclePrev = function (values, index, predicate) {
    var before = $_227y8rwsjepbveb6.reverse(values.slice(0, index));
    var after = $_227y8rwsjepbveb6.reverse(values.slice(index + 1));
    return $_227y8rwsjepbveb6.find(before.concat(after), predicate);
  };
  var tryPrev = function (values, index, predicate) {
    var before = $_227y8rwsjepbveb6.reverse(values.slice(0, index));
    return $_227y8rwsjepbveb6.find(before, predicate);
  };
  var cycleNext = function (values, index, predicate) {
    var before = values.slice(0, index);
    var after = values.slice(index + 1);
    return $_227y8rwsjepbveb6.find(after.concat(before), predicate);
  };
  var tryNext = function (values, index, predicate) {
    var after = values.slice(index + 1);
    return $_227y8rwsjepbveb6.find(after, predicate);
  };
  var $_4c7e79101jepbvest = {
    cyclePrev: cyclePrev,
    cycleNext: cycleNext,
    tryPrev: tryPrev,
    tryNext: tryNext
  };

  var isSupported = function (dom) {
    return dom.style !== undefined;
  };
  var $_1o1p30104jepbvetc = { isSupported: isSupported };

  var internalSet = function (dom, property, value) {
    if (!$_bu3dt3wzjepbvebs.isString(value)) {
      console.error('Invalid call to CSS.set. Property ', property, ':: Value ', value, ':: Element ', dom);
      throw new Error('CSS value must be a string: ' + value);
    }
    if ($_1o1p30104jepbvetc.isSupported(dom))
      dom.style.setProperty(property, value);
  };
  var internalRemove = function (dom, property) {
    if ($_1o1p30104jepbvetc.isSupported(dom))
      dom.style.removeProperty(property);
  };
  var set$2 = function (element, property, value) {
    var dom = element.dom();
    internalSet(dom, property, value);
  };
  var setAll$1 = function (element, css) {
    var dom = element.dom();
    $_1l8sbcx0jepbvebt.each(css, function (v, k) {
      internalSet(dom, k, v);
    });
  };
  var setOptions = function (element, css) {
    var dom = element.dom();
    $_1l8sbcx0jepbvebt.each(css, function (v, k) {
      v.fold(function () {
        internalRemove(dom, k);
      }, function (value) {
        internalSet(dom, k, value);
      });
    });
  };
  var get$3 = function (element, property) {
    var dom = element.dom();
    var styles = window.getComputedStyle(dom);
    var r = styles.getPropertyValue(property);
    var v = r === '' && !$_eqayqzxjjepbveeh.inBody(element) ? getUnsafeProperty(dom, property) : r;
    return v === null ? undefined : v;
  };
  var getUnsafeProperty = function (dom, property) {
    return $_1o1p30104jepbvetc.isSupported(dom) ? dom.style.getPropertyValue(property) : '';
  };
  var getRaw = function (element, property) {
    var dom = element.dom();
    var raw = getUnsafeProperty(dom, property);
    return Option.from(raw).filter(function (r) {
      return r.length > 0;
    });
  };
  var getAllRaw = function (element) {
    var css = {};
    var dom = element.dom();
    if ($_1o1p30104jepbvetc.isSupported(dom)) {
      for (var i = 0; i < dom.style.length; i++) {
        var ruleName = dom.style.item(i);
        css[ruleName] = dom.style[ruleName];
      }
    }
    return css;
  };
  var isValidValue = function (tag, property, value) {
    var element = $_4pcs1kxfjepbvee2.fromTag(tag);
    set$2(element, property, value);
    var style = getRaw(element, property);
    return style.isSome();
  };
  var remove$5 = function (element, property) {
    var dom = element.dom();
    internalRemove(dom, property);
    if ($_1sxky7xrjepbvefh.has(element, 'style') && $_awdhkiwvjepbvebm.trim($_1sxky7xrjepbvefh.get(element, 'style')) === '') {
      $_1sxky7xrjepbvefh.remove(element, 'style');
    }
  };
  var preserve = function (element, f) {
    var oldStyles = $_1sxky7xrjepbvefh.get(element, 'style');
    var result = f(element);
    var restore = oldStyles === undefined ? $_1sxky7xrjepbvefh.remove : $_1sxky7xrjepbvefh.set;
    restore(element, 'style', oldStyles);
    return result;
  };
  var copy$1 = function (source, target) {
    var sourceDom = source.dom();
    var targetDom = target.dom();
    if ($_1o1p30104jepbvetc.isSupported(sourceDom) && $_1o1p30104jepbvetc.isSupported(targetDom)) {
      targetDom.style.cssText = sourceDom.style.cssText;
    }
  };
  var reflow = function (e) {
    return e.dom().offsetWidth;
  };
  var transferOne$1 = function (source, destination, style) {
    getRaw(source, style).each(function (value) {
      if (getRaw(destination, style).isNone())
        set$2(destination, style, value);
    });
  };
  var transfer$1 = function (source, destination, styles) {
    if (!$_4aeewhxkjepbveek.isElement(source) || !$_4aeewhxkjepbveek.isElement(destination))
      return;
    $_227y8rwsjepbveb6.each(styles, function (style) {
      transferOne$1(source, destination, style);
    });
  };
  var $_ct8mbo103jepbvesz = {
    copy: copy$1,
    set: set$2,
    preserve: preserve,
    setAll: setAll$1,
    setOptions: setOptions,
    remove: remove$5,
    get: get$3,
    getRaw: getRaw,
    getAllRaw: getAllRaw,
    isValidValue: isValidValue,
    reflow: reflow,
    transfer: transfer$1
  };

  function Dimension (name, getOffset) {
    var set = function (element, h) {
      if (!$_bu3dt3wzjepbvebs.isNumber(h) && !h.match(/^[0-9]+$/))
        throw name + '.set accepts only positive integer values. Value was ' + h;
      var dom = element.dom();
      if ($_1o1p30104jepbvetc.isSupported(dom))
        dom.style[name] = h + 'px';
    };
    var get = function (element) {
      var r = getOffset(element);
      if (r <= 0 || r === null) {
        var css = $_ct8mbo103jepbvesz.get(element, name);
        return parseFloat(css) || 0;
      }
      return r;
    };
    var getOuter = get;
    var aggregate = function (element, properties) {
      return $_227y8rwsjepbveb6.foldl(properties, function (acc, property) {
        var val = $_ct8mbo103jepbvesz.get(element, property);
        var value = val === undefined ? 0 : parseInt(val, 10);
        return isNaN(value) ? acc : acc + value;
      }, 0);
    };
    var max = function (element, value, properties) {
      var cumulativeInclusions = aggregate(element, properties);
      var absoluteMax = value > cumulativeInclusions ? value - cumulativeInclusions : 0;
      return absoluteMax;
    };
    return {
      set: set,
      get: get,
      getOuter: getOuter,
      aggregate: aggregate,
      max: max
    };
  }

  var api = Dimension('height', function (element) {
    return $_eqayqzxjjepbveeh.inBody(element) ? element.dom().getBoundingClientRect().height : element.dom().offsetHeight;
  });
  var set$3 = function (element, h) {
    api.set(element, h);
  };
  var get$4 = function (element) {
    return api.get(element);
  };
  var getOuter$1 = function (element) {
    return api.getOuter(element);
  };
  var setMax = function (element, value) {
    var inclusions = [
      'margin-top',
      'border-top-width',
      'padding-top',
      'padding-bottom',
      'border-bottom-width',
      'margin-bottom'
    ];
    var absMax = api.max(element, value, inclusions);
    $_ct8mbo103jepbvesz.set(element, 'max-height', absMax + 'px');
  };
  var $_2t28t5102jepbvesx = {
    set: set$3,
    get: get$4,
    getOuter: getOuter$1,
    setMax: setMax
  };

  var create$2 = function (cyclicField) {
    var schema = [
      $_8rfcbxy7jepbvein.option('onEscape'),
      $_8rfcbxy7jepbvein.option('onEnter'),
      $_8rfcbxy7jepbvein.defaulted('selector', '[data-alloy-tabstop="true"]'),
      $_8rfcbxy7jepbvein.defaulted('firstTabstop', 0),
      $_8rfcbxy7jepbvein.defaulted('useTabstopAt', $_167yw6wjjepbveag.constant(true)),
      $_8rfcbxy7jepbvein.option('visibilitySelector')
    ].concat([cyclicField]);
    var isVisible = function (tabbingConfig, element) {
      var target = tabbingConfig.visibilitySelector().bind(function (sel) {
        return $_94ndqzxjepbvesc.closest(element, sel);
      }).getOr(element);
      return $_2t28t5102jepbvesx.get(target) > 0;
    };
    var findInitial = function (component, tabbingConfig) {
      var tabstops = $_7az4v0zvjepbves7.descendants(component.element(), tabbingConfig.selector());
      var visibles = $_227y8rwsjepbveb6.filter(tabstops, function (elem) {
        return isVisible(tabbingConfig, elem);
      });
      return Option.from(visibles[tabbingConfig.firstTabstop()]);
    };
    var findCurrent = function (component, tabbingConfig) {
      return tabbingConfig.focusManager().get(component).bind(function (elem) {
        return $_94ndqzxjepbvesc.closest(elem, tabbingConfig.selector());
      });
    };
    var isTabstop = function (tabbingConfig, element) {
      return isVisible(tabbingConfig, element) && tabbingConfig.useTabstopAt()(element);
    };
    var focusIn = function (component, tabbingConfig, tabbingState) {
      findInitial(component, tabbingConfig).each(function (target) {
        tabbingConfig.focusManager().set(component, target);
      });
    };
    var goFromTabstop = function (component, tabstops, stopIndex, tabbingConfig, cycle) {
      return cycle(tabstops, stopIndex, function (elem) {
        return isTabstop(tabbingConfig, elem);
      }).fold(function () {
        return tabbingConfig.cyclic() ? Option.some(true) : Option.none();
      }, function (target) {
        tabbingConfig.focusManager().set(component, target);
        return Option.some(true);
      });
    };
    var go = function (component, simulatedEvent, tabbingConfig, cycle) {
      var tabstops = $_7az4v0zvjepbves7.descendants(component.element(), tabbingConfig.selector());
      return findCurrent(component, tabbingConfig).bind(function (tabstop) {
        var optStopIndex = $_227y8rwsjepbveb6.findIndex(tabstops, $_167yw6wjjepbveag.curry($_6fsl8xx9jepbveda.eq, tabstop));
        return optStopIndex.bind(function (stopIndex) {
          return goFromTabstop(component, tabstops, stopIndex, tabbingConfig, cycle);
        });
      });
    };
    var goBackwards = function (component, simulatedEvent, tabbingConfig, tabbingState) {
      var navigate = tabbingConfig.cyclic() ? $_4c7e79101jepbvest.cyclePrev : $_4c7e79101jepbvest.tryPrev;
      return go(component, simulatedEvent, tabbingConfig, navigate);
    };
    var goForwards = function (component, simulatedEvent, tabbingConfig, tabbingState) {
      var navigate = tabbingConfig.cyclic() ? $_4c7e79101jepbvest.cycleNext : $_4c7e79101jepbvest.tryNext;
      return go(component, simulatedEvent, tabbingConfig, navigate);
    };
    var execute = function (component, simulatedEvent, tabbingConfig, tabbingState) {
      return tabbingConfig.onEnter().bind(function (f) {
        return f(component, simulatedEvent);
      });
    };
    var exit = function (component, simulatedEvent, tabbingConfig, tabbingState) {
      return tabbingConfig.onEscape().bind(function (f) {
        return f(component, simulatedEvent);
      });
    };
    var getRules = $_167yw6wjjepbveag.constant([
      $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.and([
        $_5173k3100jepbveso.isShift,
        $_5173k3100jepbveso.inSet($_fngredzpjepbver5.TAB())
      ]), goBackwards),
      $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.inSet($_fngredzpjepbver5.TAB()), goForwards),
      $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.inSet($_fngredzpjepbver5.ESCAPE()), exit),
      $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.and([
        $_5173k3100jepbveso.isNotShift,
        $_5173k3100jepbveso.inSet($_fngredzpjepbver5.ENTER())
      ]), execute)
    ]);
    var getEvents = $_167yw6wjjepbveag.constant({});
    var getApis = $_167yw6wjjepbveag.constant({});
    return $_bwquxszqjepbvera.typical(schema, $_ahkml8yjjepbvele.init, getRules, getEvents, getApis, Option.some(focusIn));
  };
  var $_2f3pnzojepbveqm = { create: create$2 };

  var AcyclicType = $_2f3pnzojepbveqm.create($_8rfcbxy7jepbvein.state('cyclic', $_167yw6wjjepbveag.constant(false)));

  var CyclicType = $_2f3pnzojepbveqm.create($_8rfcbxy7jepbvein.state('cyclic', $_167yw6wjjepbveag.constant(true)));

  var inside = function (target) {
    return $_4aeewhxkjepbveek.name(target) === 'input' && $_1sxky7xrjepbvefh.get(target, 'type') !== 'radio' || $_4aeewhxkjepbveek.name(target) === 'textarea';
  };
  var $_74vhyo108jepbveu0 = { inside: inside };

  var doDefaultExecute = function (component, simulatedEvent, focused) {
    $_e4saacwgjepbvea0.dispatch(component, focused, $_alx3dcwhjepbvea8.execute());
    return Option.some(true);
  };
  var defaultExecute = function (component, simulatedEvent, focused) {
    return $_74vhyo108jepbveu0.inside(focused) && $_5173k3100jepbveso.inSet($_fngredzpjepbver5.SPACE())(simulatedEvent.event()) ? Option.none() : doDefaultExecute(component, simulatedEvent, focused);
  };
  var $_4klu33109jepbveu5 = { defaultExecute: defaultExecute };

  var schema$1 = [
    $_8rfcbxy7jepbvein.defaulted('execute', $_4klu33109jepbveu5.defaultExecute),
    $_8rfcbxy7jepbvein.defaulted('useSpace', false),
    $_8rfcbxy7jepbvein.defaulted('useEnter', true),
    $_8rfcbxy7jepbvein.defaulted('useControlEnter', false),
    $_8rfcbxy7jepbvein.defaulted('useDown', false)
  ];
  var execute = function (component, simulatedEvent, executeConfig, executeState) {
    return executeConfig.execute()(component, simulatedEvent, component.element());
  };
  var getRules = function (component, simulatedEvent, executeConfig, executeState) {
    var spaceExec = executeConfig.useSpace() && !$_74vhyo108jepbveu0.inside(component.element()) ? $_fngredzpjepbver5.SPACE() : [];
    var enterExec = executeConfig.useEnter() ? $_fngredzpjepbver5.ENTER() : [];
    var downExec = executeConfig.useDown() ? $_fngredzpjepbver5.DOWN() : [];
    var execKeys = spaceExec.concat(enterExec).concat(downExec);
    return [$_g2z282zzjepbvesk.rule($_5173k3100jepbveso.inSet(execKeys), execute)].concat(executeConfig.useControlEnter() ? [$_g2z282zzjepbvesk.rule($_5173k3100jepbveso.and([
        $_5173k3100jepbveso.isControl,
        $_5173k3100jepbveso.inSet($_fngredzpjepbver5.ENTER())
      ]), execute)] : []);
  };
  var getEvents = $_167yw6wjjepbveag.constant({});
  var getApis = $_167yw6wjjepbveag.constant({});
  var ExecutionType = $_bwquxszqjepbvera.typical(schema$1, $_ahkml8yjjepbvele.init, getRules, getEvents, getApis, Option.none());

  var flatgrid = function (spec) {
    var dimensions = Cell(Option.none());
    var setGridSize = function (numRows, numColumns) {
      dimensions.set(Option.some({
        numRows: $_167yw6wjjepbveag.constant(numRows),
        numColumns: $_167yw6wjjepbveag.constant(numColumns)
      }));
    };
    var getNumRows = function () {
      return dimensions.get().map(function (d) {
        return d.numRows();
      });
    };
    var getNumColumns = function () {
      return dimensions.get().map(function (d) {
        return d.numColumns();
      });
    };
    return BehaviourState({
      readState: $_167yw6wjjepbveag.constant({}),
      setGridSize: setGridSize,
      getNumRows: getNumRows,
      getNumColumns: getNumColumns
    });
  };
  var init$1 = function (spec) {
    return spec.state()(spec);
  };
  var $_7lueo610bjepbveun = {
    flatgrid: flatgrid,
    init: init$1
  };

  var onDirection = function (isLtr, isRtl) {
    return function (element) {
      return getDirection(element) === 'rtl' ? isRtl : isLtr;
    };
  };
  var getDirection = function (element) {
    return $_ct8mbo103jepbvesz.get(element, 'direction') === 'rtl' ? 'rtl' : 'ltr';
  };
  var $_dpcdye10djepbvev0 = {
    onDirection: onDirection,
    getDirection: getDirection
  };

  var useH = function (movement) {
    return function (component, simulatedEvent, config, state) {
      var move = movement(component.element());
      return use(move, component, simulatedEvent, config, state);
    };
  };
  var west = function (moveLeft, moveRight) {
    var movement = $_dpcdye10djepbvev0.onDirection(moveLeft, moveRight);
    return useH(movement);
  };
  var east = function (moveLeft, moveRight) {
    var movement = $_dpcdye10djepbvev0.onDirection(moveRight, moveLeft);
    return useH(movement);
  };
  var useV = function (move) {
    return function (component, simulatedEvent, config, state) {
      return use(move, component, simulatedEvent, config, state);
    };
  };
  var use = function (move, component, simulatedEvent, config, state) {
    var outcome = config.focusManager().get(component).bind(function (focused) {
      return move(component.element(), focused, config, state);
    });
    return outcome.map(function (newFocus) {
      config.focusManager().set(component, newFocus);
      return true;
    });
  };
  var $_6ibp0z10cjepbveuw = {
    east: east,
    west: west,
    north: useV,
    south: useV,
    move: useV
  };

  var indexInfo = $_2pqntjx4jepbvecr.immutableBag([
    'index',
    'candidates'
  ], []);
  var locate = function (candidates, predicate) {
    return $_227y8rwsjepbveb6.findIndex(candidates, predicate).map(function (index) {
      return indexInfo({
        index: index,
        candidates: candidates
      });
    });
  };
  var $_1cib7810fjepbvevf = { locate: locate };

  var visibilityToggler = function (element, property, hiddenValue, visibleValue) {
    var initial = $_ct8mbo103jepbvesz.get(element, property);
    if (initial === undefined)
      initial = '';
    var value = initial === hiddenValue ? visibleValue : hiddenValue;
    var off = $_167yw6wjjepbveag.curry($_ct8mbo103jepbvesz.set, element, property, initial);
    var on = $_167yw6wjjepbveag.curry($_ct8mbo103jepbvesz.set, element, property, value);
    return Toggler(off, on, false);
  };
  var toggler$1 = function (element) {
    return visibilityToggler(element, 'visibility', 'hidden', 'visible');
  };
  var displayToggler = function (element, value) {
    return visibilityToggler(element, 'display', 'none', value);
  };
  var isHidden = function (dom) {
    return dom.offsetWidth <= 0 && dom.offsetHeight <= 0;
  };
  var isVisible = function (element) {
    var dom = element.dom();
    return !isHidden(dom);
  };
  var $_1jt2qa10gjepbvevm = {
    toggler: toggler$1,
    displayToggler: displayToggler,
    isVisible: isVisible
  };

  var locateVisible = function (container, current, selector) {
    var filter = $_1jt2qa10gjepbvevm.isVisible;
    return locateIn(container, current, selector, filter);
  };
  var locateIn = function (container, current, selector, filter) {
    var predicate = $_167yw6wjjepbveag.curry($_6fsl8xx9jepbveda.eq, current);
    var candidates = $_7az4v0zvjepbves7.descendants(container, selector);
    var visible = $_227y8rwsjepbveb6.filter(candidates, $_1jt2qa10gjepbvevm.isVisible);
    return $_1cib7810fjepbvevf.locate(visible, predicate);
  };
  var findIndex$2 = function (elements, target) {
    return $_227y8rwsjepbveb6.findIndex(elements, function (elem) {
      return $_6fsl8xx9jepbveda.eq(target, elem);
    });
  };
  var $_1nhxok10ejepbvev3 = {
    locateVisible: locateVisible,
    locateIn: locateIn,
    findIndex: findIndex$2
  };

  var withGrid = function (values, index, numCols, f) {
    var oldRow = Math.floor(index / numCols);
    var oldColumn = index % numCols;
    return f(oldRow, oldColumn).bind(function (address) {
      var newIndex = address.row() * numCols + address.column();
      return newIndex >= 0 && newIndex < values.length ? Option.some(values[newIndex]) : Option.none();
    });
  };
  var cycleHorizontal = function (values, index, numRows, numCols, delta) {
    return withGrid(values, index, numCols, function (oldRow, oldColumn) {
      var onLastRow = oldRow === numRows - 1;
      var colsInRow = onLastRow ? values.length - oldRow * numCols : numCols;
      var newColumn = $_dybpw1zujepbves5.cycleBy(oldColumn, delta, 0, colsInRow - 1);
      return Option.some({
        row: $_167yw6wjjepbveag.constant(oldRow),
        column: $_167yw6wjjepbveag.constant(newColumn)
      });
    });
  };
  var cycleVertical = function (values, index, numRows, numCols, delta) {
    return withGrid(values, index, numCols, function (oldRow, oldColumn) {
      var newRow = $_dybpw1zujepbves5.cycleBy(oldRow, delta, 0, numRows - 1);
      var onLastRow = newRow === numRows - 1;
      var colsInRow = onLastRow ? values.length - newRow * numCols : numCols;
      var newCol = $_dybpw1zujepbves5.cap(oldColumn, 0, colsInRow - 1);
      return Option.some({
        row: $_167yw6wjjepbveag.constant(newRow),
        column: $_167yw6wjjepbveag.constant(newCol)
      });
    });
  };
  var cycleRight = function (values, index, numRows, numCols) {
    return cycleHorizontal(values, index, numRows, numCols, +1);
  };
  var cycleLeft = function (values, index, numRows, numCols) {
    return cycleHorizontal(values, index, numRows, numCols, -1);
  };
  var cycleUp = function (values, index, numRows, numCols) {
    return cycleVertical(values, index, numRows, numCols, -1);
  };
  var cycleDown = function (values, index, numRows, numCols) {
    return cycleVertical(values, index, numRows, numCols, +1);
  };
  var $_cz6pm810hjepbvevr = {
    cycleDown: cycleDown,
    cycleUp: cycleUp,
    cycleLeft: cycleLeft,
    cycleRight: cycleRight
  };

  var schema$2 = [
    $_8rfcbxy7jepbvein.strict('selector'),
    $_8rfcbxy7jepbvein.defaulted('execute', $_4klu33109jepbveu5.defaultExecute),
    $_ca0qsez6jepbvens.onKeyboardHandler('onEscape'),
    $_8rfcbxy7jepbvein.defaulted('captureTab', false),
    $_ca0qsez6jepbvens.initSize()
  ];
  var focusIn = function (component, gridConfig, gridState) {
    $_94ndqzxjepbvesc.descendant(component.element(), gridConfig.selector()).each(function (first) {
      gridConfig.focusManager().set(component, first);
    });
  };
  var findCurrent = function (component, gridConfig) {
    return gridConfig.focusManager().get(component).bind(function (elem) {
      return $_94ndqzxjepbvesc.closest(elem, gridConfig.selector());
    });
  };
  var execute$1 = function (component, simulatedEvent, gridConfig, gridState) {
    return findCurrent(component, gridConfig).bind(function (focused) {
      return gridConfig.execute()(component, simulatedEvent, focused);
    });
  };
  var doMove = function (cycle) {
    return function (element, focused, gridConfig, gridState) {
      return $_1nhxok10ejepbvev3.locateVisible(element, focused, gridConfig.selector()).bind(function (identified) {
        return cycle(identified.candidates(), identified.index(), gridState.getNumRows().getOr(gridConfig.initSize().numRows()), gridState.getNumColumns().getOr(gridConfig.initSize().numColumns()));
      });
    };
  };
  var handleTab = function (component, simulatedEvent, gridConfig, gridState) {
    return gridConfig.captureTab() ? Option.some(true) : Option.none();
  };
  var doEscape = function (component, simulatedEvent, gridConfig, gridState) {
    return gridConfig.onEscape()(component, simulatedEvent);
  };
  var moveLeft = doMove($_cz6pm810hjepbvevr.cycleLeft);
  var moveRight = doMove($_cz6pm810hjepbvevr.cycleRight);
  var moveNorth = doMove($_cz6pm810hjepbvevr.cycleUp);
  var moveSouth = doMove($_cz6pm810hjepbvevr.cycleDown);
  var getRules$1 = $_167yw6wjjepbveag.constant([
    $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.inSet($_fngredzpjepbver5.LEFT()), $_6ibp0z10cjepbveuw.west(moveLeft, moveRight)),
    $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.inSet($_fngredzpjepbver5.RIGHT()), $_6ibp0z10cjepbveuw.east(moveLeft, moveRight)),
    $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.inSet($_fngredzpjepbver5.UP()), $_6ibp0z10cjepbveuw.north(moveNorth)),
    $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.inSet($_fngredzpjepbver5.DOWN()), $_6ibp0z10cjepbveuw.south(moveSouth)),
    $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.and([
      $_5173k3100jepbveso.isShift,
      $_5173k3100jepbveso.inSet($_fngredzpjepbver5.TAB())
    ]), handleTab),
    $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.and([
      $_5173k3100jepbveso.isNotShift,
      $_5173k3100jepbveso.inSet($_fngredzpjepbver5.TAB())
    ]), handleTab),
    $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.inSet($_fngredzpjepbver5.ESCAPE()), doEscape),
    $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.inSet($_fngredzpjepbver5.SPACE().concat($_fngredzpjepbver5.ENTER())), execute$1)
  ]);
  var getEvents$1 = $_167yw6wjjepbveag.constant({});
  var getApis$1 = {};
  var FlatgridType = $_bwquxszqjepbvera.typical(schema$2, $_7lueo610bjepbveun.flatgrid, getRules$1, getEvents$1, getApis$1, Option.some(focusIn));

  var horizontal = function (container, selector, current, delta) {
    return $_1nhxok10ejepbvev3.locateVisible(container, current, selector, $_167yw6wjjepbveag.constant(true)).bind(function (identified) {
      var index = identified.index();
      var candidates = identified.candidates();
      var newIndex = $_dybpw1zujepbves5.cycleBy(index, delta, 0, candidates.length - 1);
      return Option.from(candidates[newIndex]);
    });
  };
  var $_147lf10jjepbvew9 = { horizontal: horizontal };

  var schema$3 = [
    $_8rfcbxy7jepbvein.strict('selector'),
    $_8rfcbxy7jepbvein.defaulted('getInitial', Option.none),
    $_8rfcbxy7jepbvein.defaulted('execute', $_4klu33109jepbveu5.defaultExecute),
    $_8rfcbxy7jepbvein.defaulted('executeOnMove', false)
  ];
  var findCurrent$1 = function (component, flowConfig) {
    return flowConfig.focusManager().get(component).bind(function (elem) {
      return $_94ndqzxjepbvesc.closest(elem, flowConfig.selector());
    });
  };
  var execute$2 = function (component, simulatedEvent, flowConfig) {
    return findCurrent$1(component, flowConfig).bind(function (focused) {
      return flowConfig.execute()(component, simulatedEvent, focused);
    });
  };
  var focusIn$1 = function (component, flowConfig) {
    flowConfig.getInitial()(component).or($_94ndqzxjepbvesc.descendant(component.element(), flowConfig.selector())).each(function (first) {
      flowConfig.focusManager().set(component, first);
    });
  };
  var moveLeft$1 = function (element, focused, info) {
    return $_147lf10jjepbvew9.horizontal(element, info.selector(), focused, -1);
  };
  var moveRight$1 = function (element, focused, info) {
    return $_147lf10jjepbvew9.horizontal(element, info.selector(), focused, +1);
  };
  var doMove$1 = function (movement) {
    return function (component, simulatedEvent, flowConfig) {
      return movement(component, simulatedEvent, flowConfig).bind(function () {
        return flowConfig.executeOnMove() ? execute$2(component, simulatedEvent, flowConfig) : Option.some(true);
      });
    };
  };
  var getRules$2 = function (_) {
    return [
      $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.inSet($_fngredzpjepbver5.LEFT().concat($_fngredzpjepbver5.UP())), doMove$1($_6ibp0z10cjepbveuw.west(moveLeft$1, moveRight$1))),
      $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.inSet($_fngredzpjepbver5.RIGHT().concat($_fngredzpjepbver5.DOWN())), doMove$1($_6ibp0z10cjepbveuw.east(moveLeft$1, moveRight$1))),
      $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.inSet($_fngredzpjepbver5.ENTER()), execute$2),
      $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.inSet($_fngredzpjepbver5.SPACE()), execute$2)
    ];
  };
  var getEvents$2 = $_167yw6wjjepbveag.constant({});
  var getApis$2 = $_167yw6wjjepbveag.constant({});
  var FlowType = $_bwquxszqjepbvera.typical(schema$3, $_ahkml8yjjepbvele.init, getRules$2, getEvents$2, getApis$2, Option.some(focusIn$1));

  var outcome = $_2pqntjx4jepbvecr.immutableBag([
    'rowIndex',
    'columnIndex',
    'cell'
  ], []);
  var toCell = function (matrix, rowIndex, columnIndex) {
    return Option.from(matrix[rowIndex]).bind(function (row) {
      return Option.from(row[columnIndex]).map(function (cell) {
        return outcome({
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          cell: cell
        });
      });
    });
  };
  var cycleHorizontal$1 = function (matrix, rowIndex, startCol, deltaCol) {
    var row = matrix[rowIndex];
    var colsInRow = row.length;
    var newColIndex = $_dybpw1zujepbves5.cycleBy(startCol, deltaCol, 0, colsInRow - 1);
    return toCell(matrix, rowIndex, newColIndex);
  };
  var cycleVertical$1 = function (matrix, colIndex, startRow, deltaRow) {
    var nextRowIndex = $_dybpw1zujepbves5.cycleBy(startRow, deltaRow, 0, matrix.length - 1);
    var colsInNextRow = matrix[nextRowIndex].length;
    var nextColIndex = $_dybpw1zujepbves5.cap(colIndex, 0, colsInNextRow - 1);
    return toCell(matrix, nextRowIndex, nextColIndex);
  };
  var moveHorizontal = function (matrix, rowIndex, startCol, deltaCol) {
    var row = matrix[rowIndex];
    var colsInRow = row.length;
    var newColIndex = $_dybpw1zujepbves5.cap(startCol + deltaCol, 0, colsInRow - 1);
    return toCell(matrix, rowIndex, newColIndex);
  };
  var moveVertical = function (matrix, colIndex, startRow, deltaRow) {
    var nextRowIndex = $_dybpw1zujepbves5.cap(startRow + deltaRow, 0, matrix.length - 1);
    var colsInNextRow = matrix[nextRowIndex].length;
    var nextColIndex = $_dybpw1zujepbves5.cap(colIndex, 0, colsInNextRow - 1);
    return toCell(matrix, nextRowIndex, nextColIndex);
  };
  var cycleRight$1 = function (matrix, startRow, startCol) {
    return cycleHorizontal$1(matrix, startRow, startCol, +1);
  };
  var cycleLeft$1 = function (matrix, startRow, startCol) {
    return cycleHorizontal$1(matrix, startRow, startCol, -1);
  };
  var cycleUp$1 = function (matrix, startRow, startCol) {
    return cycleVertical$1(matrix, startCol, startRow, -1);
  };
  var cycleDown$1 = function (matrix, startRow, startCol) {
    return cycleVertical$1(matrix, startCol, startRow, +1);
  };
  var moveLeft$2 = function (matrix, startRow, startCol) {
    return moveHorizontal(matrix, startRow, startCol, -1);
  };
  var moveRight$2 = function (matrix, startRow, startCol) {
    return moveHorizontal(matrix, startRow, startCol, +1);
  };
  var moveUp = function (matrix, startRow, startCol) {
    return moveVertical(matrix, startCol, startRow, -1);
  };
  var moveDown = function (matrix, startRow, startCol) {
    return moveVertical(matrix, startCol, startRow, +1);
  };
  var $_ex78px10ljepbvewz = {
    cycleRight: cycleRight$1,
    cycleLeft: cycleLeft$1,
    cycleUp: cycleUp$1,
    cycleDown: cycleDown$1,
    moveLeft: moveLeft$2,
    moveRight: moveRight$2,
    moveUp: moveUp,
    moveDown: moveDown
  };

  var schema$4 = [
    $_8rfcbxy7jepbvein.strictObjOf('selectors', [
      $_8rfcbxy7jepbvein.strict('row'),
      $_8rfcbxy7jepbvein.strict('cell')
    ]),
    $_8rfcbxy7jepbvein.defaulted('cycles', true),
    $_8rfcbxy7jepbvein.defaulted('previousSelector', Option.none),
    $_8rfcbxy7jepbvein.defaulted('execute', $_4klu33109jepbveu5.defaultExecute)
  ];
  var focusIn$2 = function (component, matrixConfig) {
    var focused = matrixConfig.previousSelector()(component).orThunk(function () {
      var selectors = matrixConfig.selectors();
      return $_94ndqzxjepbvesc.descendant(component.element(), selectors.cell());
    });
    focused.each(function (cell) {
      matrixConfig.focusManager().set(component, cell);
    });
  };
  var execute$3 = function (component, simulatedEvent, matrixConfig) {
    return $_5khawkytjepbvem5.search(component.element()).bind(function (focused) {
      return matrixConfig.execute()(component, simulatedEvent, focused);
    });
  };
  var toMatrix = function (rows, matrixConfig) {
    return $_227y8rwsjepbveb6.map(rows, function (row) {
      return $_7az4v0zvjepbves7.descendants(row, matrixConfig.selectors().cell());
    });
  };
  var doMove$2 = function (ifCycle, ifMove) {
    return function (element, focused, matrixConfig) {
      var move = matrixConfig.cycles() ? ifCycle : ifMove;
      return $_94ndqzxjepbvesc.closest(focused, matrixConfig.selectors().row()).bind(function (inRow) {
        var cellsInRow = $_7az4v0zvjepbves7.descendants(inRow, matrixConfig.selectors().cell());
        return $_1nhxok10ejepbvev3.findIndex(cellsInRow, focused).bind(function (colIndex) {
          var allRows = $_7az4v0zvjepbves7.descendants(element, matrixConfig.selectors().row());
          return $_1nhxok10ejepbvev3.findIndex(allRows, inRow).bind(function (rowIndex) {
            var matrix = toMatrix(allRows, matrixConfig);
            return move(matrix, rowIndex, colIndex).map(function (next) {
              return next.cell();
            });
          });
        });
      });
    };
  };
  var moveLeft$3 = doMove$2($_ex78px10ljepbvewz.cycleLeft, $_ex78px10ljepbvewz.moveLeft);
  var moveRight$3 = doMove$2($_ex78px10ljepbvewz.cycleRight, $_ex78px10ljepbvewz.moveRight);
  var moveNorth$1 = doMove$2($_ex78px10ljepbvewz.cycleUp, $_ex78px10ljepbvewz.moveUp);
  var moveSouth$1 = doMove$2($_ex78px10ljepbvewz.cycleDown, $_ex78px10ljepbvewz.moveDown);
  var getRules$3 = $_167yw6wjjepbveag.constant([
    $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.inSet($_fngredzpjepbver5.LEFT()), $_6ibp0z10cjepbveuw.west(moveLeft$3, moveRight$3)),
    $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.inSet($_fngredzpjepbver5.RIGHT()), $_6ibp0z10cjepbveuw.east(moveLeft$3, moveRight$3)),
    $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.inSet($_fngredzpjepbver5.UP()), $_6ibp0z10cjepbveuw.north(moveNorth$1)),
    $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.inSet($_fngredzpjepbver5.DOWN()), $_6ibp0z10cjepbveuw.south(moveSouth$1)),
    $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.inSet($_fngredzpjepbver5.SPACE().concat($_fngredzpjepbver5.ENTER())), execute$3)
  ]);
  var getEvents$3 = $_167yw6wjjepbveag.constant({});
  var getApis$3 = $_167yw6wjjepbveag.constant({});
  var MatrixType = $_bwquxszqjepbvera.typical(schema$4, $_ahkml8yjjepbvele.init, getRules$3, getEvents$3, getApis$3, Option.some(focusIn$2));

  var schema$5 = [
    $_8rfcbxy7jepbvein.strict('selector'),
    $_8rfcbxy7jepbvein.defaulted('execute', $_4klu33109jepbveu5.defaultExecute),
    $_8rfcbxy7jepbvein.defaulted('moveOnTab', false)
  ];
  var execute$4 = function (component, simulatedEvent, menuConfig) {
    return menuConfig.focusManager().get(component).bind(function (focused) {
      return menuConfig.execute()(component, simulatedEvent, focused);
    });
  };
  var focusIn$3 = function (component, menuConfig, simulatedEvent) {
    $_94ndqzxjepbvesc.descendant(component.element(), menuConfig.selector()).each(function (first) {
      menuConfig.focusManager().set(component, first);
    });
  };
  var moveUp$1 = function (element, focused, info) {
    return $_147lf10jjepbvew9.horizontal(element, info.selector(), focused, -1);
  };
  var moveDown$1 = function (element, focused, info) {
    return $_147lf10jjepbvew9.horizontal(element, info.selector(), focused, +1);
  };
  var fireShiftTab = function (component, simulatedEvent, menuConfig) {
    return menuConfig.moveOnTab() ? $_6ibp0z10cjepbveuw.move(moveUp$1)(component, simulatedEvent, menuConfig) : Option.none();
  };
  var fireTab = function (component, simulatedEvent, menuConfig) {
    return menuConfig.moveOnTab() ? $_6ibp0z10cjepbveuw.move(moveDown$1)(component, simulatedEvent, menuConfig) : Option.none();
  };
  var getRules$4 = $_167yw6wjjepbveag.constant([
    $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.inSet($_fngredzpjepbver5.UP()), $_6ibp0z10cjepbveuw.move(moveUp$1)),
    $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.inSet($_fngredzpjepbver5.DOWN()), $_6ibp0z10cjepbveuw.move(moveDown$1)),
    $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.and([
      $_5173k3100jepbveso.isShift,
      $_5173k3100jepbveso.inSet($_fngredzpjepbver5.TAB())
    ]), fireShiftTab),
    $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.and([
      $_5173k3100jepbveso.isNotShift,
      $_5173k3100jepbveso.inSet($_fngredzpjepbver5.TAB())
    ]), fireTab),
    $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.inSet($_fngredzpjepbver5.ENTER()), execute$4),
    $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.inSet($_fngredzpjepbver5.SPACE()), execute$4)
  ]);
  var getEvents$4 = $_167yw6wjjepbveag.constant({});
  var getApis$4 = $_167yw6wjjepbveag.constant({});
  var MenuType = $_bwquxszqjepbvera.typical(schema$5, $_ahkml8yjjepbvele.init, getRules$4, getEvents$4, getApis$4, Option.some(focusIn$3));

  var schema$6 = [
    $_ca0qsez6jepbvens.onKeyboardHandler('onSpace'),
    $_ca0qsez6jepbvens.onKeyboardHandler('onEnter'),
    $_ca0qsez6jepbvens.onKeyboardHandler('onShiftEnter'),
    $_ca0qsez6jepbvens.onKeyboardHandler('onLeft'),
    $_ca0qsez6jepbvens.onKeyboardHandler('onRight'),
    $_ca0qsez6jepbvens.onKeyboardHandler('onTab'),
    $_ca0qsez6jepbvens.onKeyboardHandler('onShiftTab'),
    $_ca0qsez6jepbvens.onKeyboardHandler('onUp'),
    $_ca0qsez6jepbvens.onKeyboardHandler('onDown'),
    $_ca0qsez6jepbvens.onKeyboardHandler('onEscape'),
    $_8rfcbxy7jepbvein.option('focusIn')
  ];
  var getRules$5 = function (component, simulatedEvent, executeInfo) {
    return [
      $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.inSet($_fngredzpjepbver5.SPACE()), executeInfo.onSpace()),
      $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.and([
        $_5173k3100jepbveso.isNotShift,
        $_5173k3100jepbveso.inSet($_fngredzpjepbver5.ENTER())
      ]), executeInfo.onEnter()),
      $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.and([
        $_5173k3100jepbveso.isShift,
        $_5173k3100jepbveso.inSet($_fngredzpjepbver5.ENTER())
      ]), executeInfo.onShiftEnter()),
      $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.and([
        $_5173k3100jepbveso.isShift,
        $_5173k3100jepbveso.inSet($_fngredzpjepbver5.TAB())
      ]), executeInfo.onShiftTab()),
      $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.and([
        $_5173k3100jepbveso.isNotShift,
        $_5173k3100jepbveso.inSet($_fngredzpjepbver5.TAB())
      ]), executeInfo.onTab()),
      $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.inSet($_fngredzpjepbver5.UP()), executeInfo.onUp()),
      $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.inSet($_fngredzpjepbver5.DOWN()), executeInfo.onDown()),
      $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.inSet($_fngredzpjepbver5.LEFT()), executeInfo.onLeft()),
      $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.inSet($_fngredzpjepbver5.RIGHT()), executeInfo.onRight()),
      $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.inSet($_fngredzpjepbver5.SPACE()), executeInfo.onSpace()),
      $_g2z282zzjepbvesk.rule($_5173k3100jepbveso.inSet($_fngredzpjepbver5.ESCAPE()), executeInfo.onEscape())
    ];
  };
  var focusIn$4 = function (component, executeInfo) {
    return executeInfo.focusIn().bind(function (f) {
      return f(component, executeInfo);
    });
  };
  var getEvents$5 = $_167yw6wjjepbveag.constant({});
  var getApis$5 = $_167yw6wjjepbveag.constant({});
  var SpecialType = $_bwquxszqjepbvera.typical(schema$6, $_ahkml8yjjepbvele.init, getRules$5, getEvents$5, getApis$5, Option.some(focusIn$4));

  var $_gbjsxkzmjepbveqg = {
    acyclic: AcyclicType.schema(),
    cyclic: CyclicType.schema(),
    flow: FlowType.schema(),
    flatgrid: FlatgridType.schema(),
    matrix: MatrixType.schema(),
    execution: ExecutionType.schema(),
    menu: MenuType.schema(),
    special: SpecialType.schema()
  };

  var Keying = $_9otgsgy2jepbveh4.createModes({
    branchKey: 'mode',
    branches: $_gbjsxkzmjepbveqg,
    name: 'keying',
    active: {
      events: function (keyingConfig, keyingState) {
        var handler = keyingConfig.handler();
        return handler.toEvents(keyingConfig, keyingState);
      }
    },
    apis: {
      focusIn: function (component) {
        component.getSystem().triggerFocus(component.element(), component.element());
      },
      setGridSize: function (component, keyConfig, keyState, numRows, numColumns) {
        if (!$_f53w39xsjepbvefs.hasKey(keyState, 'setGridSize')) {
          console.error('Layout does not support setGridSize');
        } else {
          keyState.setGridSize(numRows, numColumns);
        }
      }
    },
    state: $_7lueo610bjepbveun
  });

  var field$1 = function (name, forbidden) {
    return $_8rfcbxy7jepbvein.defaultedObjOf(name, {}, $_227y8rwsjepbveb6.map(forbidden, function (f) {
      return $_8rfcbxy7jepbvein.forbid(f.name(), 'Cannot configure ' + f.name() + ' for ' + name);
    }).concat([$_8rfcbxy7jepbvein.state('dump', $_167yw6wjjepbveag.identity)]));
  };
  var get$5 = function (data) {
    return data.dump();
  };
  var $_4fa1o810ojepbvexo = {
    field: field$1,
    get: get$5
  };

  var unique = 0;
  var generate$1 = function (prefix) {
    var date = new Date();
    var time = date.getTime();
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
  };
  var $_7oey8810rjepbveyh = { generate: generate$1 };

  var premadeTag = $_7oey8810rjepbveyh.generate('alloy-premade');
  var apiConfig = $_7oey8810rjepbveyh.generate('api');
  var premade = function (comp) {
    return $_f53w39xsjepbvefs.wrap(premadeTag, comp);
  };
  var getPremade = function (spec) {
    return $_f53w39xsjepbvefs.readOptFrom(spec, premadeTag);
  };
  var makeApi = function (f) {
    return $_dzlpbjygjepbvekn.markAsSketchApi(function (component) {
      var args = Array.prototype.slice.call(arguments, 0);
      var spi = component.config(apiConfig);
      return f.apply(undefined, [spi].concat(args));
    }, f);
  };
  var $_dc94u710qjepbvey9 = {
    apiConfig: $_167yw6wjjepbveag.constant(apiConfig),
    makeApi: makeApi,
    premade: premade,
    getPremade: getPremade
  };

  var adt$2 = $_9vwywgxwjepbvegj.generate([
    { required: ['data'] },
    { external: ['data'] },
    { optional: ['data'] },
    { group: ['data'] }
  ]);
  var fFactory = $_8rfcbxy7jepbvein.defaulted('factory', { sketch: $_167yw6wjjepbveag.identity });
  var fSchema = $_8rfcbxy7jepbvein.defaulted('schema', []);
  var fName = $_8rfcbxy7jepbvein.strict('name');
  var fPname = $_8rfcbxy7jepbvein.field('pname', 'pname', $_1zybmsy8jepbveix.defaultedThunk(function (typeSpec) {
    return '<alloy.' + $_7oey8810rjepbveyh.generate(typeSpec.name) + '>';
  }), $_7je55jyejepbvekc.anyValue());
  var fDefaults = $_8rfcbxy7jepbvein.defaulted('defaults', $_167yw6wjjepbveag.constant({}));
  var fOverrides = $_8rfcbxy7jepbvein.defaulted('overrides', $_167yw6wjjepbveag.constant({}));
  var requiredSpec = $_7je55jyejepbvekc.objOf([
    fFactory,
    fSchema,
    fName,
    fPname,
    fDefaults,
    fOverrides
  ]);
  var externalSpec = $_7je55jyejepbvekc.objOf([
    fFactory,
    fSchema,
    fName,
    fDefaults,
    fOverrides
  ]);
  var optionalSpec = $_7je55jyejepbvekc.objOf([
    fFactory,
    fSchema,
    fName,
    fPname,
    fDefaults,
    fOverrides
  ]);
  var groupSpec = $_7je55jyejepbvekc.objOf([
    fFactory,
    fSchema,
    fName,
    $_8rfcbxy7jepbvein.strict('unit'),
    fPname,
    fDefaults,
    fOverrides
  ]);
  var asNamedPart = function (part) {
    return part.fold(Option.some, Option.none, Option.some, Option.some);
  };
  var name$1 = function (part) {
    var get = function (data) {
      return data.name();
    };
    return part.fold(get, get, get, get);
  };
  var asCommon = function (part) {
    return part.fold($_167yw6wjjepbveag.identity, $_167yw6wjjepbveag.identity, $_167yw6wjjepbveag.identity, $_167yw6wjjepbveag.identity);
  };
  var convert = function (adtConstructor, partSpec) {
    return function (spec) {
      var data = $_7je55jyejepbvekc.asStructOrDie('Converting part type', partSpec, spec);
      return adtConstructor(data);
    };
  };
  var $_3jjkp510vjepbvezm = {
    required: convert(adt$2.required, requiredSpec),
    external: convert(adt$2.external, externalSpec),
    optional: convert(adt$2.optional, optionalSpec),
    group: convert(adt$2.group, groupSpec),
    asNamedPart: asNamedPart,
    name: name$1,
    asCommon: asCommon,
    original: $_167yw6wjjepbveag.constant('entirety')
  };

  var placeholder = 'placeholder';
  var adt$3 = $_9vwywgxwjepbvegj.generate([
    {
      single: [
        'required',
        'valueThunk'
      ]
    },
    {
      multiple: [
        'required',
        'valueThunks'
      ]
    }
  ]);
  var isSubstitute = function (uiType) {
    return $_227y8rwsjepbveb6.contains([placeholder], uiType);
  };
  var subPlaceholder = function (owner, detail, compSpec, placeholders) {
    if (owner.exists(function (o) {
        return o !== compSpec.owner;
      }))
      return adt$3.single(true, $_167yw6wjjepbveag.constant(compSpec));
    return $_f53w39xsjepbvefs.readOptFrom(placeholders, compSpec.name).fold(function () {
      throw new Error('Unknown placeholder component: ' + compSpec.name + '\nKnown: [' + $_1l8sbcx0jepbvebt.keys(placeholders) + ']\nNamespace: ' + owner.getOr('none') + '\nSpec: ' + $_3c4zqfydjepbvek9.stringify(compSpec, null, 2));
    }, function (newSpec) {
      return newSpec.replace();
    });
  };
  var scan = function (owner, detail, compSpec, placeholders) {
    if (compSpec.uiType === placeholder)
      return subPlaceholder(owner, detail, compSpec, placeholders);
    else
      return adt$3.single(false, $_167yw6wjjepbveag.constant(compSpec));
  };
  var substitute = function (owner, detail, compSpec, placeholders) {
    var base = scan(owner, detail, compSpec, placeholders);
    return base.fold(function (req, valueThunk) {
      var value = valueThunk(detail, compSpec.config, compSpec.validated);
      var childSpecs = $_f53w39xsjepbvefs.readOptFrom(value, 'components').getOr([]);
      var substituted = $_227y8rwsjepbveb6.bind(childSpecs, function (c) {
        return substitute(owner, detail, c, placeholders);
      });
      return [$_aaookwyjepbvebq.deepMerge(value, { components: substituted })];
    }, function (req, valuesThunk) {
      var values = valuesThunk(detail, compSpec.config, compSpec.validated);
      return values;
    });
  };
  var substituteAll = function (owner, detail, components, placeholders) {
    return $_227y8rwsjepbveb6.bind(components, function (c) {
      return substitute(owner, detail, c, placeholders);
    });
  };
  var oneReplace = function (label, replacements) {
    var called = false;
    var used = function () {
      return called;
    };
    var replace = function () {
      if (called === true)
        throw new Error('Trying to use the same placeholder more than once: ' + label);
      called = true;
      return replacements;
    };
    var required = function () {
      return replacements.fold(function (req, _) {
        return req;
      }, function (req, _) {
        return req;
      });
    };
    return {
      name: $_167yw6wjjepbveag.constant(label),
      required: required,
      used: used,
      replace: replace
    };
  };
  var substitutePlaces = function (owner, detail, components, placeholders) {
    var ps = $_1l8sbcx0jepbvebt.map(placeholders, function (ph, name) {
      return oneReplace(name, ph);
    });
    var outcome = substituteAll(owner, detail, components, ps);
    $_1l8sbcx0jepbvebt.each(ps, function (p) {
      if (p.used() === false && p.required()) {
        throw new Error('Placeholder: ' + p.name() + ' was not found in components list\nNamespace: ' + owner.getOr('none') + '\nComponents: ' + $_3c4zqfydjepbvek9.stringify(detail.components(), null, 2));
      }
    });
    return outcome;
  };
  var singleReplace = function (detail, p) {
    var replacement = p;
    return replacement.fold(function (req, valueThunk) {
      return [valueThunk(detail)];
    }, function (req, valuesThunk) {
      return valuesThunk(detail);
    });
  };
  var $_8winya10wjepbvf03 = {
    single: adt$3.single,
    multiple: adt$3.multiple,
    isSubstitute: isSubstitute,
    placeholder: $_167yw6wjjepbveag.constant(placeholder),
    substituteAll: substituteAll,
    substitutePlaces: substitutePlaces,
    singleReplace: singleReplace
  };

  var combine = function (detail, data, partSpec, partValidated) {
    var spec = partSpec;
    return $_aaookwyjepbvebq.deepMerge(data.defaults()(detail, partSpec, partValidated), partSpec, { uid: detail.partUids()[data.name()] }, data.overrides()(detail, partSpec, partValidated), { 'debug.sketcher': $_f53w39xsjepbvefs.wrap('part-' + data.name(), spec) });
  };
  var subs = function (owner, detail, parts) {
    var internals = {};
    var externals = {};
    $_227y8rwsjepbveb6.each(parts, function (part) {
      part.fold(function (data) {
        internals[data.pname()] = $_8winya10wjepbvf03.single(true, function (detail, partSpec, partValidated) {
          return data.factory().sketch(combine(detail, data, partSpec, partValidated));
        });
      }, function (data) {
        var partSpec = detail.parts()[data.name()]();
        externals[data.name()] = $_167yw6wjjepbveag.constant(combine(detail, data, partSpec[$_3jjkp510vjepbvezm.original()]()));
      }, function (data) {
        internals[data.pname()] = $_8winya10wjepbvf03.single(false, function (detail, partSpec, partValidated) {
          return data.factory().sketch(combine(detail, data, partSpec, partValidated));
        });
      }, function (data) {
        internals[data.pname()] = $_8winya10wjepbvf03.multiple(true, function (detail, _partSpec, _partValidated) {
          var units = detail[data.name()]();
          return $_227y8rwsjepbveb6.map(units, function (u) {
            return data.factory().sketch($_aaookwyjepbvebq.deepMerge(data.defaults()(detail, u), u, data.overrides()(detail, u)));
          });
        });
      });
    });
    return {
      internals: $_167yw6wjjepbveag.constant(internals),
      externals: $_167yw6wjjepbveag.constant(externals)
    };
  };
  var $_cph8cp10ujepbvezc = { subs: subs };

  var generate$2 = function (owner, parts) {
    var r = {};
    $_227y8rwsjepbveb6.each(parts, function (part) {
      $_3jjkp510vjepbvezm.asNamedPart(part).each(function (np) {
        var g = doGenerateOne(owner, np.pname());
        r[np.name()] = function (config) {
          var validated = $_7je55jyejepbvekc.asRawOrDie('Part: ' + np.name() + ' in ' + owner, $_7je55jyejepbvekc.objOf(np.schema()), config);
          return $_aaookwyjepbvebq.deepMerge(g, {
            config: config,
            validated: validated
          });
        };
      });
    });
    return r;
  };
  var doGenerateOne = function (owner, pname) {
    return {
      uiType: $_8winya10wjepbvf03.placeholder(),
      owner: owner,
      name: pname
    };
  };
  var generateOne = function (owner, pname, config) {
    return {
      uiType: $_8winya10wjepbvf03.placeholder(),
      owner: owner,
      name: pname,
      config: config,
      validated: {}
    };
  };
  var schemas = function (parts) {
    return $_227y8rwsjepbveb6.bind(parts, function (part) {
      return part.fold(Option.none, Option.some, Option.none, Option.none).map(function (data) {
        return $_8rfcbxy7jepbvein.strictObjOf(data.name(), data.schema().concat([$_ca0qsez6jepbvens.snapshot($_3jjkp510vjepbvezm.original())]));
      }).toArray();
    });
  };
  var names = function (parts) {
    return $_227y8rwsjepbveb6.map(parts, $_3jjkp510vjepbvezm.name);
  };
  var substitutes = function (owner, detail, parts) {
    return $_cph8cp10ujepbvezc.subs(owner, detail, parts);
  };
  var components = function (owner, detail, internals) {
    return $_8winya10wjepbvf03.substitutePlaces(Option.some(owner), detail, detail.components(), internals);
  };
  var getPart = function (component, detail, partKey) {
    var uid = detail.partUids()[partKey];
    return component.getSystem().getByUid(uid).toOption();
  };
  var getPartOrDie = function (component, detail, partKey) {
    return getPart(component, detail, partKey).getOrDie('Could not find part: ' + partKey);
  };
  var getParts = function (component, detail, partKeys) {
    var r = {};
    var uids = detail.partUids();
    var system = component.getSystem();
    $_227y8rwsjepbveb6.each(partKeys, function (pk) {
      r[pk] = system.getByUid(uids[pk]);
    });
    return $_1l8sbcx0jepbvebt.map(r, $_167yw6wjjepbveag.constant);
  };
  var getAllParts = function (component, detail) {
    var system = component.getSystem();
    return $_1l8sbcx0jepbvebt.map(detail.partUids(), function (pUid, k) {
      return $_167yw6wjjepbveag.constant(system.getByUid(pUid));
    });
  };
  var getPartsOrDie = function (component, detail, partKeys) {
    var r = {};
    var uids = detail.partUids();
    var system = component.getSystem();
    $_227y8rwsjepbveb6.each(partKeys, function (pk) {
      r[pk] = system.getByUid(uids[pk]).getOrDie();
    });
    return $_1l8sbcx0jepbvebt.map(r, $_167yw6wjjepbveag.constant);
  };
  var defaultUids = function (baseUid, partTypes) {
    var partNames = names(partTypes);
    return $_f53w39xsjepbvefs.wrapAll($_227y8rwsjepbveb6.map(partNames, function (pn) {
      return {
        key: pn,
        value: baseUid + '-' + pn
      };
    }));
  };
  var defaultUidsSchema = function (partTypes) {
    return $_8rfcbxy7jepbvein.field('partUids', 'partUids', $_1zybmsy8jepbveix.mergeWithThunk(function (spec) {
      return defaultUids(spec.uid, partTypes);
    }), $_7je55jyejepbvekc.anyValue());
  };
  var $_1n5d3m10tjepbveyq = {
    generate: generate$2,
    generateOne: generateOne,
    schemas: schemas,
    names: names,
    substitutes: substitutes,
    components: components,
    defaultUids: defaultUids,
    defaultUidsSchema: defaultUidsSchema,
    getAllParts: getAllParts,
    getPart: getPart,
    getPartOrDie: getPartOrDie,
    getParts: getParts,
    getPartsOrDie: getPartsOrDie
  };

  var prefix$1 = 'alloy-id-';
  var idAttr = 'data-alloy-id';
  var $_5hkrl010yjepbvf0x = {
    prefix: $_167yw6wjjepbveag.constant(prefix$1),
    idAttr: $_167yw6wjjepbveag.constant(idAttr)
  };

  var prefix$2 = $_5hkrl010yjepbvf0x.prefix();
  var idAttr$1 = $_5hkrl010yjepbvf0x.idAttr();
  var write = function (label, elem) {
    var id = $_7oey8810rjepbveyh.generate(prefix$2 + label);
    $_1sxky7xrjepbvefh.set(elem, idAttr$1, id);
    return id;
  };
  var writeOnly = function (elem, uid) {
    $_1sxky7xrjepbvefh.set(elem, idAttr$1, uid);
  };
  var read$2 = function (elem) {
    var id = $_4aeewhxkjepbveek.isElement(elem) ? $_1sxky7xrjepbvefh.get(elem, idAttr$1) : null;
    return Option.from(id);
  };
  var find$3 = function (container, id) {
    return $_94ndqzxjepbvesc.descendant(container, id);
  };
  var generate$3 = function (prefix) {
    return $_7oey8810rjepbveyh.generate(prefix);
  };
  var revoke = function (elem) {
    $_1sxky7xrjepbvefh.remove(elem, idAttr$1);
  };
  var $_6keeyb10xjepbvf0l = {
    revoke: revoke,
    write: write,
    writeOnly: writeOnly,
    read: read$2,
    find: find$3,
    generate: generate$3,
    attribute: $_167yw6wjjepbveag.constant(idAttr$1)
  };

  var getPartsSchema = function (partNames, _optPartNames, _owner) {
    var owner = _owner !== undefined ? _owner : 'Unknown owner';
    var fallbackThunk = function () {
      return [$_ca0qsez6jepbvens.output('partUids', {})];
    };
    var optPartNames = _optPartNames !== undefined ? _optPartNames : fallbackThunk();
    if (partNames.length === 0 && optPartNames.length === 0)
      return fallbackThunk();
    var partsSchema = $_8rfcbxy7jepbvein.strictObjOf('parts', $_227y8rwsjepbveb6.flatten([
      $_227y8rwsjepbveb6.map(partNames, $_8rfcbxy7jepbvein.strict),
      $_227y8rwsjepbveb6.map(optPartNames, function (optPart) {
        return $_8rfcbxy7jepbvein.defaulted(optPart, $_8winya10wjepbvf03.single(false, function () {
          throw new Error('The optional part: ' + optPart + ' was not specified in the config, but it was used in components');
        }));
      })
    ]));
    var partUidsSchema = $_8rfcbxy7jepbvein.state('partUids', function (spec) {
      if (!$_f53w39xsjepbvefs.hasKey(spec, 'parts')) {
        throw new Error('Part uid definition for owner: ' + owner + ' requires "parts"\nExpected parts: ' + partNames.join(', ') + '\nSpec: ' + $_3c4zqfydjepbvek9.stringify(spec, null, 2));
      }
      var uids = $_1l8sbcx0jepbvebt.map(spec.parts, function (v, k) {
        return $_f53w39xsjepbvefs.readOptFrom(v, 'uid').getOrThunk(function () {
          return spec.uid + '-' + k;
        });
      });
      return uids;
    });
    return [
      partsSchema,
      partUidsSchema
    ];
  };
  var base$1 = function (label, partSchemas, partUidsSchemas, spec) {
    var ps = partSchemas.length > 0 ? [$_8rfcbxy7jepbvein.strictObjOf('parts', partSchemas)] : [];
    return ps.concat([
      $_8rfcbxy7jepbvein.strict('uid'),
      $_8rfcbxy7jepbvein.defaulted('dom', {}),
      $_8rfcbxy7jepbvein.defaulted('components', []),
      $_ca0qsez6jepbvens.snapshot('originalSpec'),
      $_8rfcbxy7jepbvein.defaulted('debug.sketcher', {})
    ]).concat(partUidsSchemas);
  };
  var asRawOrDie$1 = function (label, schema, spec, partSchemas, partUidsSchemas) {
    var baseS = base$1(label, partSchemas, spec, partUidsSchemas);
    return $_7je55jyejepbvekc.asRawOrDie(label + ' [SpecSchema]', $_7je55jyejepbvekc.objOfOnly(baseS.concat(schema)), spec);
  };
  var asStructOrDie$1 = function (label, schema, spec, partSchemas, partUidsSchemas) {
    var baseS = base$1(label, partSchemas, partUidsSchemas, spec);
    return $_7je55jyejepbvekc.asStructOrDie(label + ' [SpecSchema]', $_7je55jyejepbvekc.objOfOnly(baseS.concat(schema)), spec);
  };
  var extend = function (builder, original, nu) {
    var newSpec = $_aaookwyjepbvebq.deepMerge(original, nu);
    return builder(newSpec);
  };
  var addBehaviours = function (original, behaviours) {
    return $_aaookwyjepbvebq.deepMerge(original, behaviours);
  };
  var $_2or4a110zjepbvf11 = {
    asRawOrDie: asRawOrDie$1,
    asStructOrDie: asStructOrDie$1,
    addBehaviours: addBehaviours,
    getPartsSchema: getPartsSchema,
    extend: extend
  };

  var single = function (owner, schema, factory, spec) {
    var specWithUid = supplyUid(spec);
    var detail = $_2or4a110zjepbvf11.asStructOrDie(owner, schema, specWithUid, [], []);
    return $_aaookwyjepbvebq.deepMerge(factory(detail, specWithUid), { 'debug.sketcher': $_f53w39xsjepbvefs.wrap(owner, spec) });
  };
  var composite = function (owner, schema, partTypes, factory, spec) {
    var specWithUid = supplyUid(spec);
    var partSchemas = $_1n5d3m10tjepbveyq.schemas(partTypes);
    var partUidsSchema = $_1n5d3m10tjepbveyq.defaultUidsSchema(partTypes);
    var detail = $_2or4a110zjepbvf11.asStructOrDie(owner, schema, specWithUid, partSchemas, [partUidsSchema]);
    var subs = $_1n5d3m10tjepbveyq.substitutes(owner, detail, partTypes);
    var components = $_1n5d3m10tjepbveyq.components(owner, detail, subs.internals());
    return $_aaookwyjepbvebq.deepMerge(factory(detail, components, specWithUid, subs.externals()), { 'debug.sketcher': $_f53w39xsjepbvefs.wrap(owner, spec) });
  };
  var supplyUid = function (spec) {
    return $_aaookwyjepbvebq.deepMerge({ uid: $_6keeyb10xjepbvf0l.generate('uid') }, spec);
  };
  var $_6m3pgw10sjepbveyj = {
    supplyUid: supplyUid,
    single: single,
    composite: composite
  };

  var singleSchema = $_7je55jyejepbvekc.objOfOnly([
    $_8rfcbxy7jepbvein.strict('name'),
    $_8rfcbxy7jepbvein.strict('factory'),
    $_8rfcbxy7jepbvein.strict('configFields'),
    $_8rfcbxy7jepbvein.defaulted('apis', {}),
    $_8rfcbxy7jepbvein.defaulted('extraApis', {})
  ]);
  var compositeSchema = $_7je55jyejepbvekc.objOfOnly([
    $_8rfcbxy7jepbvein.strict('name'),
    $_8rfcbxy7jepbvein.strict('factory'),
    $_8rfcbxy7jepbvein.strict('configFields'),
    $_8rfcbxy7jepbvein.strict('partFields'),
    $_8rfcbxy7jepbvein.defaulted('apis', {}),
    $_8rfcbxy7jepbvein.defaulted('extraApis', {})
  ]);
  var single$1 = function (rawConfig) {
    var config = $_7je55jyejepbvekc.asRawOrDie('Sketcher for ' + rawConfig.name, singleSchema, rawConfig);
    var sketch = function (spec) {
      return $_6m3pgw10sjepbveyj.single(config.name, config.configFields, config.factory, spec);
    };
    var apis = $_1l8sbcx0jepbvebt.map(config.apis, $_dc94u710qjepbvey9.makeApi);
    var extraApis = $_1l8sbcx0jepbvebt.map(config.extraApis, function (f, k) {
      return $_dzlpbjygjepbvekn.markAsExtraApi(f, k);
    });
    return $_aaookwyjepbvebq.deepMerge({
      name: $_167yw6wjjepbveag.constant(config.name),
      partFields: $_167yw6wjjepbveag.constant([]),
      configFields: $_167yw6wjjepbveag.constant(config.configFields),
      sketch: sketch
    }, apis, extraApis);
  };
  var composite$1 = function (rawConfig) {
    var config = $_7je55jyejepbvekc.asRawOrDie('Sketcher for ' + rawConfig.name, compositeSchema, rawConfig);
    var sketch = function (spec) {
      return $_6m3pgw10sjepbveyj.composite(config.name, config.configFields, config.partFields, config.factory, spec);
    };
    var parts = $_1n5d3m10tjepbveyq.generate(config.name, config.partFields);
    var apis = $_1l8sbcx0jepbvebt.map(config.apis, $_dc94u710qjepbvey9.makeApi);
    var extraApis = $_1l8sbcx0jepbvebt.map(config.extraApis, function (f, k) {
      return $_dzlpbjygjepbvekn.markAsExtraApi(f, k);
    });
    return $_aaookwyjepbvebq.deepMerge({
      name: $_167yw6wjjepbveag.constant(config.name),
      partFields: $_167yw6wjjepbveag.constant(config.partFields),
      configFields: $_167yw6wjjepbveag.constant(config.configFields),
      sketch: sketch,
      parts: $_167yw6wjjepbveag.constant(parts)
    }, apis, extraApis);
  };
  var $_bv7bve10pjepbvexx = {
    single: single$1,
    composite: composite$1
  };

  var events$3 = function (optAction) {
    var executeHandler = function (action) {
      return $_81tpe0y4jepbvehy.run($_alx3dcwhjepbvea8.execute(), function (component, simulatedEvent) {
        action(component);
        simulatedEvent.stop();
      });
    };
    var onClick = function (component, simulatedEvent) {
      simulatedEvent.stop();
      $_e4saacwgjepbvea0.emitExecute(component);
    };
    var onMousedown = function (component, simulatedEvent) {
      simulatedEvent.cut();
    };
    var pointerEvents = $_fs3v1iwkjepbveaj.detect().deviceType.isTouch() ? [$_81tpe0y4jepbvehy.run($_alx3dcwhjepbvea8.tap(), onClick)] : [
      $_81tpe0y4jepbvehy.run($_e2bl11wijepbvead.click(), onClick),
      $_81tpe0y4jepbvehy.run($_e2bl11wijepbvead.mousedown(), onMousedown)
    ];
    return $_81tpe0y4jepbvehy.derive($_227y8rwsjepbveb6.flatten([
      optAction.map(executeHandler).toArray(),
      pointerEvents
    ]));
  };
  var $_9zsbar110jepbvf1h = { events: events$3 };

  var factory = function (detail, spec) {
    var events = $_9zsbar110jepbvf1h.events(detail.action());
    var optType = $_f53w39xsjepbvefs.readOptFrom(detail.dom(), 'attributes').bind($_f53w39xsjepbvefs.readOpt('type'));
    var optTag = $_f53w39xsjepbvefs.readOptFrom(detail.dom(), 'tag');
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      components: detail.components(),
      events: events,
      behaviours: $_aaookwyjepbvebq.deepMerge($_9otgsgy2jepbveh4.derive([
        Focusing.config({}),
        Keying.config({
          mode: 'execution',
          useSpace: true,
          useEnter: true
        })
      ]), $_4fa1o810ojepbvexo.get(detail.buttonBehaviours())),
      domModification: {
        attributes: $_aaookwyjepbvebq.deepMerge(optType.fold(function () {
          return optTag.is('button') ? { type: 'button' } : {};
        }, function (t) {
          return {};
        }), { role: detail.role().getOr('button') })
      },
      eventOrder: detail.eventOrder()
    };
  };
  var Button = $_bv7bve10pjepbvexx.single({
    name: 'Button',
    factory: factory,
    configFields: [
      $_8rfcbxy7jepbvein.defaulted('uid', undefined),
      $_8rfcbxy7jepbvein.strict('dom'),
      $_8rfcbxy7jepbvein.defaulted('components', []),
      $_4fa1o810ojepbvexo.field('buttonBehaviours', [
        Focusing,
        Keying
      ]),
      $_8rfcbxy7jepbvein.option('action'),
      $_8rfcbxy7jepbvein.option('role'),
      $_8rfcbxy7jepbvein.defaulted('eventOrder', {})
    ]
  });

  var exhibit$2 = function (base, unselectConfig) {
    return $_1rbjqxyhjepbveks.nu({
      styles: {
        '-webkit-user-select': 'none',
        'user-select': 'none',
        '-ms-user-select': 'none',
        '-moz-user-select': '-moz-none'
      },
      attributes: { 'unselectable': 'on' }
    });
  };
  var events$4 = function (unselectConfig) {
    return $_81tpe0y4jepbvehy.derive([$_81tpe0y4jepbvehy.abort($_e2bl11wijepbvead.selectstart(), $_167yw6wjjepbveag.constant(true))]);
  };
  var $_d9umg8112jepbvf1s = {
    events: events$4,
    exhibit: exhibit$2
  };

  var Unselecting = $_9otgsgy2jepbveh4.create({
    fields: [],
    name: 'unselecting',
    active: $_d9umg8112jepbvf1s
  });

  var getAttrs = function (elem) {
    var attributes = elem.dom().attributes !== undefined ? elem.dom().attributes : [];
    return $_227y8rwsjepbveb6.foldl(attributes, function (b, attr) {
      if (attr.name === 'class')
        return b;
      else
        return $_aaookwyjepbvebq.deepMerge(b, $_f53w39xsjepbvefs.wrap(attr.name, attr.value));
    }, {});
  };
  var getClasses = function (elem) {
    return Array.prototype.slice.call(elem.dom().classList, 0);
  };
  var fromHtml$2 = function (html) {
    var elem = $_4pcs1kxfjepbvee2.fromHtml(html);
    var children = $_ginpy6x3jepbvece.children(elem);
    var attrs = getAttrs(elem);
    var classes = getClasses(elem);
    var contents = children.length === 0 ? {} : { innerHtml: $_g0wlavxojepbvef7.get(elem) };
    return $_aaookwyjepbvebq.deepMerge({
      tag: $_4aeewhxkjepbveek.name(elem),
      classes: classes,
      attributes: attrs
    }, contents);
  };
  var sketch = function (sketcher, html, config) {
    return sketcher.sketch($_aaookwyjepbvebq.deepMerge({ dom: fromHtml$2(html) }, config));
  };
  var $_f1ii2w114jepbvf20 = {
    fromHtml: fromHtml$2,
    sketch: sketch
  };

  var dom$1 = function (rawHtml) {
    var html = $_awdhkiwvjepbvebm.supplant(rawHtml, { prefix: $_3fme06zejepbvepj.prefix() });
    return $_f1ii2w114jepbvf20.fromHtml(html);
  };
  var spec = function (rawHtml) {
    var sDom = dom$1(rawHtml);
    return { dom: sDom };
  };
  var $_8035n1113jepbvf1w = {
    dom: dom$1,
    spec: spec
  };

  var forToolbarCommand = function (editor, command) {
    return forToolbar(command, function () {
      editor.execCommand(command);
    }, {});
  };
  var getToggleBehaviours = function (command) {
    return $_9otgsgy2jepbveh4.derive([
      Toggling.config({
        toggleClass: $_3fme06zejepbvepj.resolve('toolbar-button-selected'),
        toggleOnExecute: false,
        aria: { mode: 'pressed' }
      }),
      $_bqtojizdjepbvepe.format(command, function (button, status) {
        var toggle = status ? Toggling.on : Toggling.off;
        toggle(button);
      })
    ]);
  };
  var forToolbarStateCommand = function (editor, command) {
    var extraBehaviours = getToggleBehaviours(command);
    return forToolbar(command, function () {
      editor.execCommand(command);
    }, extraBehaviours);
  };
  var forToolbarStateAction = function (editor, clazz, command, action) {
    var extraBehaviours = getToggleBehaviours(command);
    return forToolbar(clazz, action, extraBehaviours);
  };
  var forToolbar = function (clazz, action, extraBehaviours) {
    return Button.sketch({
      dom: $_8035n1113jepbvf1w.dom('<span class="${prefix}-toolbar-button ${prefix}-icon-' + clazz + ' ${prefix}-icon"></span>'),
      action: action,
      buttonBehaviours: $_aaookwyjepbvebq.deepMerge($_9otgsgy2jepbveh4.derive([Unselecting.config({})]), extraBehaviours)
    });
  };
  var $_81yxrozfjepbvepm = {
    forToolbar: forToolbar,
    forToolbarCommand: forToolbarCommand,
    forToolbarStateAction: forToolbarStateAction,
    forToolbarStateCommand: forToolbarStateCommand
  };

  var reduceBy = function (value, min, max, step) {
    if (value < min)
      return value;
    else if (value > max)
      return max;
    else if (value === min)
      return min - 1;
    else
      return Math.max(min, value - step);
  };
  var increaseBy = function (value, min, max, step) {
    if (value > max)
      return value;
    else if (value < min)
      return min;
    else if (value === max)
      return max + 1;
    else
      return Math.min(max, value + step);
  };
  var capValue = function (value, min, max) {
    return Math.max(min, Math.min(max, value));
  };
  var snapValueOfX = function (bounds, value, min, max, step, snapStart) {
    return snapStart.fold(function () {
      var initValue = value - min;
      var extraValue = Math.round(initValue / step) * step;
      return capValue(min + extraValue, min - 1, max + 1);
    }, function (start) {
      var remainder = (value - start) % step;
      var adjustment = Math.round(remainder / step);
      var rawSteps = Math.floor((value - start) / step);
      var maxSteps = Math.floor((max - start) / step);
      var numSteps = Math.min(maxSteps, rawSteps + adjustment);
      var r = start + numSteps * step;
      return Math.max(start, r);
    });
  };
  var findValueOfX = function (bounds, min, max, xValue, step, snapToGrid, snapStart) {
    var range = max - min;
    if (xValue < bounds.left)
      return min - 1;
    else if (xValue > bounds.right)
      return max + 1;
    else {
      var xOffset = Math.min(bounds.right, Math.max(xValue, bounds.left)) - bounds.left;
      var newValue = capValue(xOffset / bounds.width * range + min, min - 1, max + 1);
      var roundedValue = Math.round(newValue);
      return snapToGrid && newValue >= min && newValue <= max ? snapValueOfX(bounds, newValue, min, max, step, snapStart) : roundedValue;
    }
  };
  var $_addqar119jepbvf3d = {
    reduceBy: reduceBy,
    increaseBy: increaseBy,
    findValueOfX: findValueOfX
  };

  var changeEvent = 'slider.change.value';
  var isTouch = $_fs3v1iwkjepbveaj.detect().deviceType.isTouch();
  var getEventSource = function (simulatedEvent) {
    var evt = simulatedEvent.event().raw();
    if (isTouch && evt.touches !== undefined && evt.touches.length === 1)
      return Option.some(evt.touches[0]);
    else if (isTouch && evt.touches !== undefined)
      return Option.none();
    else if (!isTouch && evt.clientX !== undefined)
      return Option.some(evt);
    else
      return Option.none();
  };
  var getEventX = function (simulatedEvent) {
    var spot = getEventSource(simulatedEvent);
    return spot.map(function (s) {
      return s.clientX;
    });
  };
  var fireChange = function (component, value) {
    $_e4saacwgjepbvea0.emitWith(component, changeEvent, { value: value });
  };
  var moveRightFromLedge = function (ledge, detail) {
    fireChange(ledge, detail.min());
  };
  var moveLeftFromRedge = function (redge, detail) {
    fireChange(redge, detail.max());
  };
  var setToRedge = function (redge, detail) {
    fireChange(redge, detail.max() + 1);
  };
  var setToLedge = function (ledge, detail) {
    fireChange(ledge, detail.min() - 1);
  };
  var setToX = function (spectrum, spectrumBounds, detail, xValue) {
    var value = $_addqar119jepbvf3d.findValueOfX(spectrumBounds, detail.min(), detail.max(), xValue, detail.stepSize(), detail.snapToGrid(), detail.snapStart());
    fireChange(spectrum, value);
  };
  var setXFromEvent = function (spectrum, detail, spectrumBounds, simulatedEvent) {
    return getEventX(simulatedEvent).map(function (xValue) {
      setToX(spectrum, spectrumBounds, detail, xValue);
      return xValue;
    });
  };
  var moveLeft$4 = function (spectrum, detail) {
    var newValue = $_addqar119jepbvf3d.reduceBy(detail.value().get(), detail.min(), detail.max(), detail.stepSize());
    fireChange(spectrum, newValue);
  };
  var moveRight$4 = function (spectrum, detail) {
    var newValue = $_addqar119jepbvf3d.increaseBy(detail.value().get(), detail.min(), detail.max(), detail.stepSize());
    fireChange(spectrum, newValue);
  };
  var $_9cupic118jepbvf33 = {
    setXFromEvent: setXFromEvent,
    setToLedge: setToLedge,
    setToRedge: setToRedge,
    moveLeftFromRedge: moveLeftFromRedge,
    moveRightFromLedge: moveRightFromLedge,
    moveLeft: moveLeft$4,
    moveRight: moveRight$4,
    changeEvent: $_167yw6wjjepbveag.constant(changeEvent)
  };

  var platform = $_fs3v1iwkjepbveaj.detect();
  var isTouch$1 = platform.deviceType.isTouch();
  var edgePart = function (name, action) {
    return $_3jjkp510vjepbvezm.optional({
      name: '' + name + '-edge',
      overrides: function (detail) {
        var touchEvents = $_81tpe0y4jepbvehy.derive([$_81tpe0y4jepbvehy.runActionExtra($_e2bl11wijepbvead.touchstart(), action, [detail])]);
        var mouseEvents = $_81tpe0y4jepbvehy.derive([
          $_81tpe0y4jepbvehy.runActionExtra($_e2bl11wijepbvead.mousedown(), action, [detail]),
          $_81tpe0y4jepbvehy.runActionExtra($_e2bl11wijepbvead.mousemove(), function (l, det) {
            if (det.mouseIsDown().get())
              action(l, det);
          }, [detail])
        ]);
        return { events: isTouch$1 ? touchEvents : mouseEvents };
      }
    });
  };
  var ledgePart = edgePart('left', $_9cupic118jepbvf33.setToLedge);
  var redgePart = edgePart('right', $_9cupic118jepbvf33.setToRedge);
  var thumbPart = $_3jjkp510vjepbvezm.required({
    name: 'thumb',
    defaults: $_167yw6wjjepbveag.constant({ dom: { styles: { position: 'absolute' } } }),
    overrides: function (detail) {
      return {
        events: $_81tpe0y4jepbvehy.derive([
          $_81tpe0y4jepbvehy.redirectToPart($_e2bl11wijepbvead.touchstart(), detail, 'spectrum'),
          $_81tpe0y4jepbvehy.redirectToPart($_e2bl11wijepbvead.touchmove(), detail, 'spectrum'),
          $_81tpe0y4jepbvehy.redirectToPart($_e2bl11wijepbvead.touchend(), detail, 'spectrum')
        ])
      };
    }
  });
  var spectrumPart = $_3jjkp510vjepbvezm.required({
    schema: [$_8rfcbxy7jepbvein.state('mouseIsDown', function () {
        return Cell(false);
      })],
    name: 'spectrum',
    overrides: function (detail) {
      var moveToX = function (spectrum, simulatedEvent) {
        var spectrumBounds = spectrum.element().dom().getBoundingClientRect();
        $_9cupic118jepbvf33.setXFromEvent(spectrum, detail, spectrumBounds, simulatedEvent);
      };
      var touchEvents = $_81tpe0y4jepbvehy.derive([
        $_81tpe0y4jepbvehy.run($_e2bl11wijepbvead.touchstart(), moveToX),
        $_81tpe0y4jepbvehy.run($_e2bl11wijepbvead.touchmove(), moveToX)
      ]);
      var mouseEvents = $_81tpe0y4jepbvehy.derive([
        $_81tpe0y4jepbvehy.run($_e2bl11wijepbvead.mousedown(), moveToX),
        $_81tpe0y4jepbvehy.run($_e2bl11wijepbvead.mousemove(), function (spectrum, se) {
          if (detail.mouseIsDown().get())
            moveToX(spectrum, se);
        })
      ]);
      return {
        behaviours: $_9otgsgy2jepbveh4.derive(isTouch$1 ? [] : [
          Keying.config({
            mode: 'special',
            onLeft: function (spectrum) {
              $_9cupic118jepbvf33.moveLeft(spectrum, detail);
              return Option.some(true);
            },
            onRight: function (spectrum) {
              $_9cupic118jepbvf33.moveRight(spectrum, detail);
              return Option.some(true);
            }
          }),
          Focusing.config({})
        ]),
        events: isTouch$1 ? touchEvents : mouseEvents
      };
    }
  });
  var SliderParts = [
    ledgePart,
    redgePart,
    thumbPart,
    spectrumPart
  ];

  var onLoad$1 = function (component, repConfig, repState) {
    repConfig.store().manager().onLoad(component, repConfig, repState);
  };
  var onUnload = function (component, repConfig, repState) {
    repConfig.store().manager().onUnload(component, repConfig, repState);
  };
  var setValue = function (component, repConfig, repState, data) {
    repConfig.store().manager().setValue(component, repConfig, repState, data);
  };
  var getValue = function (component, repConfig, repState) {
    return repConfig.store().manager().getValue(component, repConfig, repState);
  };
  var $_9b928u11djepbvf3t = {
    onLoad: onLoad$1,
    onUnload: onUnload,
    setValue: setValue,
    getValue: getValue
  };

  var events$5 = function (repConfig, repState) {
    var es = repConfig.resetOnDom() ? [
      $_81tpe0y4jepbvehy.runOnAttached(function (comp, se) {
        $_9b928u11djepbvf3t.onLoad(comp, repConfig, repState);
      }),
      $_81tpe0y4jepbvehy.runOnDetached(function (comp, se) {
        $_9b928u11djepbvf3t.onUnload(comp, repConfig, repState);
      })
    ] : [$_s3kjuy3jepbvehf.loadEvent(repConfig, repState, $_9b928u11djepbvf3t.onLoad)];
    return $_81tpe0y4jepbvehy.derive(es);
  };
  var $_dtk8ok11cjepbvf3s = { events: events$5 };

  var memory = function () {
    var data = Cell(null);
    var readState = function () {
      return {
        mode: 'memory',
        value: data.get()
      };
    };
    var isNotSet = function () {
      return data.get() === null;
    };
    var clear = function () {
      data.set(null);
    };
    return BehaviourState({
      set: data.set,
      get: data.get,
      isNotSet: isNotSet,
      clear: clear,
      readState: readState
    });
  };
  var manual = function () {
    var readState = function () {
    };
    return BehaviourState({ readState: readState });
  };
  var dataset = function () {
    var data = Cell({});
    var readState = function () {
      return {
        mode: 'dataset',
        dataset: data.get()
      };
    };
    return BehaviourState({
      readState: readState,
      set: data.set,
      get: data.get
    });
  };
  var init$2 = function (spec) {
    return spec.store().manager().state(spec);
  };
  var $_49v1sf11gjepbvf46 = {
    memory: memory,
    dataset: dataset,
    manual: manual,
    init: init$2
  };

  var setValue$1 = function (component, repConfig, repState, data) {
    var dataKey = repConfig.store().getDataKey();
    repState.set({});
    repConfig.store().setData()(component, data);
    repConfig.onSetValue()(component, data);
  };
  var getValue$1 = function (component, repConfig, repState) {
    var key = repConfig.store().getDataKey()(component);
    var dataset = repState.get();
    return $_f53w39xsjepbvefs.readOptFrom(dataset, key).fold(function () {
      return repConfig.store().getFallbackEntry()(key);
    }, function (data) {
      return data;
    });
  };
  var onLoad$2 = function (component, repConfig, repState) {
    repConfig.store().initialValue().each(function (data) {
      setValue$1(component, repConfig, repState, data);
    });
  };
  var onUnload$1 = function (component, repConfig, repState) {
    repState.set({});
  };
  var DatasetStore = [
    $_8rfcbxy7jepbvein.option('initialValue'),
    $_8rfcbxy7jepbvein.strict('getFallbackEntry'),
    $_8rfcbxy7jepbvein.strict('getDataKey'),
    $_8rfcbxy7jepbvein.strict('setData'),
    $_ca0qsez6jepbvens.output('manager', {
      setValue: setValue$1,
      getValue: getValue$1,
      onLoad: onLoad$2,
      onUnload: onUnload$1,
      state: $_49v1sf11gjepbvf46.dataset
    })
  ];

  var getValue$2 = function (component, repConfig, repState) {
    return repConfig.store().getValue()(component);
  };
  var setValue$2 = function (component, repConfig, repState, data) {
    repConfig.store().setValue()(component, data);
    repConfig.onSetValue()(component, data);
  };
  var onLoad$3 = function (component, repConfig, repState) {
    repConfig.store().initialValue().each(function (data) {
      repConfig.store().setValue()(component, data);
    });
  };
  var ManualStore = [
    $_8rfcbxy7jepbvein.strict('getValue'),
    $_8rfcbxy7jepbvein.defaulted('setValue', $_167yw6wjjepbveag.noop),
    $_8rfcbxy7jepbvein.option('initialValue'),
    $_ca0qsez6jepbvens.output('manager', {
      setValue: setValue$2,
      getValue: getValue$2,
      onLoad: onLoad$3,
      onUnload: $_167yw6wjjepbveag.noop,
      state: $_ahkml8yjjepbvele.init
    })
  ];

  var setValue$3 = function (component, repConfig, repState, data) {
    repState.set(data);
    repConfig.onSetValue()(component, data);
  };
  var getValue$3 = function (component, repConfig, repState) {
    return repState.get();
  };
  var onLoad$4 = function (component, repConfig, repState) {
    repConfig.store().initialValue().each(function (initVal) {
      if (repState.isNotSet())
        repState.set(initVal);
    });
  };
  var onUnload$2 = function (component, repConfig, repState) {
    repState.clear();
  };
  var MemoryStore = [
    $_8rfcbxy7jepbvein.option('initialValue'),
    $_ca0qsez6jepbvens.output('manager', {
      setValue: setValue$3,
      getValue: getValue$3,
      onLoad: onLoad$4,
      onUnload: onUnload$2,
      state: $_49v1sf11gjepbvf46.memory
    })
  ];

  var RepresentSchema = [
    $_8rfcbxy7jepbvein.defaultedOf('store', { mode: 'memory' }, $_7je55jyejepbvekc.choose('mode', {
      memory: MemoryStore,
      manual: ManualStore,
      dataset: DatasetStore
    })),
    $_ca0qsez6jepbvens.onHandler('onSetValue'),
    $_8rfcbxy7jepbvein.defaulted('resetOnDom', false)
  ];

  var me = $_9otgsgy2jepbveh4.create({
    fields: RepresentSchema,
    name: 'representing',
    active: $_dtk8ok11cjepbvf3s,
    apis: $_9b928u11djepbvf3t,
    extra: {
      setValueFrom: function (component, source) {
        var value = me.getValue(source);
        me.setValue(component, value);
      }
    },
    state: $_49v1sf11gjepbvf46
  });

  var isTouch$2 = $_fs3v1iwkjepbveaj.detect().deviceType.isTouch();
  var SliderSchema = [
    $_8rfcbxy7jepbvein.strict('min'),
    $_8rfcbxy7jepbvein.strict('max'),
    $_8rfcbxy7jepbvein.defaulted('stepSize', 1),
    $_8rfcbxy7jepbvein.defaulted('onChange', $_167yw6wjjepbveag.noop),
    $_8rfcbxy7jepbvein.defaulted('onInit', $_167yw6wjjepbveag.noop),
    $_8rfcbxy7jepbvein.defaulted('onDragStart', $_167yw6wjjepbveag.noop),
    $_8rfcbxy7jepbvein.defaulted('onDragEnd', $_167yw6wjjepbveag.noop),
    $_8rfcbxy7jepbvein.defaulted('snapToGrid', false),
    $_8rfcbxy7jepbvein.option('snapStart'),
    $_8rfcbxy7jepbvein.strict('getInitialValue'),
    $_4fa1o810ojepbvexo.field('sliderBehaviours', [
      Keying,
      me
    ]),
    $_8rfcbxy7jepbvein.state('value', function (spec) {
      return Cell(spec.min);
    })
  ].concat(!isTouch$2 ? [$_8rfcbxy7jepbvein.state('mouseIsDown', function () {
      return Cell(false);
    })] : []);

  var api$1 = Dimension('width', function (element) {
    return element.dom().offsetWidth;
  });
  var set$4 = function (element, h) {
    api$1.set(element, h);
  };
  var get$6 = function (element) {
    return api$1.get(element);
  };
  var getOuter$2 = function (element) {
    return api$1.getOuter(element);
  };
  var setMax$1 = function (element, value) {
    var inclusions = [
      'margin-left',
      'border-left-width',
      'padding-left',
      'padding-right',
      'border-right-width',
      'margin-right'
    ];
    var absMax = api$1.max(element, value, inclusions);
    $_ct8mbo103jepbvesz.set(element, 'max-width', absMax + 'px');
  };
  var $_j3x6211kjepbvf58 = {
    set: set$4,
    get: get$6,
    getOuter: getOuter$2,
    setMax: setMax$1
  };

  var isTouch$3 = $_fs3v1iwkjepbveaj.detect().deviceType.isTouch();
  var sketch$1 = function (detail, components, spec, externals) {
    var range = detail.max() - detail.min();
    var getXCentre = function (component) {
      var rect = component.element().dom().getBoundingClientRect();
      return (rect.left + rect.right) / 2;
    };
    var getThumb = function (component) {
      return $_1n5d3m10tjepbveyq.getPartOrDie(component, detail, 'thumb');
    };
    var getXOffset = function (slider, spectrumBounds, detail) {
      var v = detail.value().get();
      if (v < detail.min()) {
        return $_1n5d3m10tjepbveyq.getPart(slider, detail, 'left-edge').fold(function () {
          return 0;
        }, function (ledge) {
          return getXCentre(ledge) - spectrumBounds.left;
        });
      } else if (v > detail.max()) {
        return $_1n5d3m10tjepbveyq.getPart(slider, detail, 'right-edge').fold(function () {
          return spectrumBounds.width;
        }, function (redge) {
          return getXCentre(redge) - spectrumBounds.left;
        });
      } else {
        return (detail.value().get() - detail.min()) / range * spectrumBounds.width;
      }
    };
    var getXPos = function (slider) {
      var spectrum = $_1n5d3m10tjepbveyq.getPartOrDie(slider, detail, 'spectrum');
      var spectrumBounds = spectrum.element().dom().getBoundingClientRect();
      var sliderBounds = slider.element().dom().getBoundingClientRect();
      var xOffset = getXOffset(slider, spectrumBounds, detail);
      return spectrumBounds.left - sliderBounds.left + xOffset;
    };
    var refresh = function (component) {
      var pos = getXPos(component);
      var thumb = getThumb(component);
      var thumbRadius = $_j3x6211kjepbvf58.get(thumb.element()) / 2;
      $_ct8mbo103jepbvesz.set(thumb.element(), 'left', pos - thumbRadius + 'px');
    };
    var changeValue = function (component, newValue) {
      var oldValue = detail.value().get();
      var thumb = getThumb(component);
      if (oldValue !== newValue || $_ct8mbo103jepbvesz.getRaw(thumb.element(), 'left').isNone()) {
        detail.value().set(newValue);
        refresh(component);
        detail.onChange()(component, thumb, newValue);
        return Option.some(true);
      } else {
        return Option.none();
      }
    };
    var resetToMin = function (slider) {
      changeValue(slider, detail.min());
    };
    var resetToMax = function (slider) {
      changeValue(slider, detail.max());
    };
    var uiEventsArr = isTouch$3 ? [
      $_81tpe0y4jepbvehy.run($_e2bl11wijepbvead.touchstart(), function (slider, simulatedEvent) {
        detail.onDragStart()(slider, getThumb(slider));
      }),
      $_81tpe0y4jepbvehy.run($_e2bl11wijepbvead.touchend(), function (slider, simulatedEvent) {
        detail.onDragEnd()(slider, getThumb(slider));
      })
    ] : [
      $_81tpe0y4jepbvehy.run($_e2bl11wijepbvead.mousedown(), function (slider, simulatedEvent) {
        simulatedEvent.stop();
        detail.onDragStart()(slider, getThumb(slider));
        detail.mouseIsDown().set(true);
      }),
      $_81tpe0y4jepbvehy.run($_e2bl11wijepbvead.mouseup(), function (slider, simulatedEvent) {
        detail.onDragEnd()(slider, getThumb(slider));
        detail.mouseIsDown().set(false);
      })
    ];
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      components: components,
      behaviours: $_aaookwyjepbvebq.deepMerge($_9otgsgy2jepbveh4.derive($_227y8rwsjepbveb6.flatten([
        !isTouch$3 ? [Keying.config({
            mode: 'special',
            focusIn: function (slider) {
              return $_1n5d3m10tjepbveyq.getPart(slider, detail, 'spectrum').map(Keying.focusIn).map($_167yw6wjjepbveag.constant(true));
            }
          })] : [],
        [me.config({
            store: {
              mode: 'manual',
              getValue: function (_) {
                return detail.value().get();
              }
            }
          })]
      ])), $_4fa1o810ojepbvexo.get(detail.sliderBehaviours())),
      events: $_81tpe0y4jepbvehy.derive([
        $_81tpe0y4jepbvehy.run($_9cupic118jepbvf33.changeEvent(), function (slider, simulatedEvent) {
          changeValue(slider, simulatedEvent.event().value());
        }),
        $_81tpe0y4jepbvehy.runOnAttached(function (slider, simulatedEvent) {
          detail.value().set(detail.getInitialValue()());
          var thumb = getThumb(slider);
          refresh(slider);
          detail.onInit()(slider, thumb, detail.value().get());
        })
      ].concat(uiEventsArr)),
      apis: {
        resetToMin: resetToMin,
        resetToMax: resetToMax,
        refresh: refresh
      },
      domModification: { styles: { position: 'relative' } }
    };
  };
  var $_bliah11jjepbvf4p = { sketch: sketch$1 };

  var Slider = $_bv7bve10pjepbvexx.composite({
    name: 'Slider',
    configFields: SliderSchema,
    partFields: SliderParts,
    factory: $_bliah11jjepbvf4p.sketch,
    apis: {
      resetToMin: function (apis, slider) {
        apis.resetToMin(slider);
      },
      resetToMax: function (apis, slider) {
        apis.resetToMax(slider);
      },
      refresh: function (apis, slider) {
        apis.refresh(slider);
      }
    }
  });

  var button = function (realm, clazz, makeItems) {
    return $_81yxrozfjepbvepm.forToolbar(clazz, function () {
      var items = makeItems();
      realm.setContextToolbar([{
          label: clazz + ' group',
          items: items
        }]);
    }, {});
  };
  var $_7zx4zl11ljepbvf5b = { button: button };

  var BLACK = -1;
  var makeSlider = function (spec) {
    var getColor = function (hue) {
      if (hue < 0) {
        return 'black';
      } else if (hue > 360) {
        return 'white';
      } else {
        return 'hsl(' + hue + ', 100%, 50%)';
      }
    };
    var onInit = function (slider, thumb, value) {
      var color = getColor(value);
      $_ct8mbo103jepbvesz.set(thumb.element(), 'background-color', color);
    };
    var onChange = function (slider, thumb, value) {
      var color = getColor(value);
      $_ct8mbo103jepbvesz.set(thumb.element(), 'background-color', color);
      spec.onChange(slider, thumb, color);
    };
    return Slider.sketch({
      dom: $_8035n1113jepbvf1w.dom('<div class="${prefix}-slider ${prefix}-hue-slider-container"></div>'),
      components: [
        Slider.parts()['left-edge']($_8035n1113jepbvf1w.spec('<div class="${prefix}-hue-slider-black"></div>')),
        Slider.parts().spectrum({
          dom: $_8035n1113jepbvf1w.dom('<div class="${prefix}-slider-gradient-container"></div>'),
          components: [$_8035n1113jepbvf1w.spec('<div class="${prefix}-slider-gradient"></div>')],
          behaviours: $_9otgsgy2jepbveh4.derive([Toggling.config({ toggleClass: $_3fme06zejepbvepj.resolve('thumb-active') })])
        }),
        Slider.parts()['right-edge']($_8035n1113jepbvf1w.spec('<div class="${prefix}-hue-slider-white"></div>')),
        Slider.parts().thumb({
          dom: $_8035n1113jepbvf1w.dom('<div class="${prefix}-slider-thumb"></div>'),
          behaviours: $_9otgsgy2jepbveh4.derive([Toggling.config({ toggleClass: $_3fme06zejepbvepj.resolve('thumb-active') })])
        })
      ],
      onChange: onChange,
      onDragStart: function (slider, thumb) {
        Toggling.on(thumb);
      },
      onDragEnd: function (slider, thumb) {
        Toggling.off(thumb);
      },
      onInit: onInit,
      stepSize: 10,
      min: 0,
      max: 360,
      getInitialValue: spec.getInitialValue,
      sliderBehaviours: $_9otgsgy2jepbveh4.derive([$_bqtojizdjepbvepe.orientation(Slider.refresh)])
    });
  };
  var makeItems = function (spec) {
    return [makeSlider(spec)];
  };
  var sketch$2 = function (realm, editor) {
    var spec = {
      onChange: function (slider, thumb, color) {
        editor.undoManager.transact(function () {
          editor.formatter.apply('forecolor', { value: color });
          editor.nodeChanged();
        });
      },
      getInitialValue: function () {
        return BLACK;
      }
    };
    return $_7zx4zl11ljepbvf5b.button(realm, 'color', function () {
      return makeItems(spec);
    });
  };
  var $_exszm4115jepbvf2f = {
    makeItems: makeItems,
    sketch: sketch$2
  };

  var schema$7 = $_7je55jyejepbvekc.objOfOnly([
    $_8rfcbxy7jepbvein.strict('getInitialValue'),
    $_8rfcbxy7jepbvein.strict('onChange'),
    $_8rfcbxy7jepbvein.strict('category'),
    $_8rfcbxy7jepbvein.strict('sizes')
  ]);
  var sketch$3 = function (rawSpec) {
    var spec = $_7je55jyejepbvekc.asRawOrDie('SizeSlider', schema$7, rawSpec);
    var isValidValue = function (valueIndex) {
      return valueIndex >= 0 && valueIndex < spec.sizes.length;
    };
    var onChange = function (slider, thumb, valueIndex) {
      if (isValidValue(valueIndex)) {
        spec.onChange(valueIndex);
      }
    };
    return Slider.sketch({
      dom: {
        tag: 'div',
        classes: [
          $_3fme06zejepbvepj.resolve('slider-' + spec.category + '-size-container'),
          $_3fme06zejepbvepj.resolve('slider'),
          $_3fme06zejepbvepj.resolve('slider-size-container')
        ]
      },
      onChange: onChange,
      onDragStart: function (slider, thumb) {
        Toggling.on(thumb);
      },
      onDragEnd: function (slider, thumb) {
        Toggling.off(thumb);
      },
      min: 0,
      max: spec.sizes.length - 1,
      stepSize: 1,
      getInitialValue: spec.getInitialValue,
      snapToGrid: true,
      sliderBehaviours: $_9otgsgy2jepbveh4.derive([$_bqtojizdjepbvepe.orientation(Slider.refresh)]),
      components: [
        Slider.parts().spectrum({
          dom: $_8035n1113jepbvf1w.dom('<div class="${prefix}-slider-size-container"></div>'),
          components: [$_8035n1113jepbvf1w.spec('<div class="${prefix}-slider-size-line"></div>')]
        }),
        Slider.parts().thumb({
          dom: $_8035n1113jepbvf1w.dom('<div class="${prefix}-slider-thumb"></div>'),
          behaviours: $_9otgsgy2jepbveh4.derive([Toggling.config({ toggleClass: $_3fme06zejepbvepj.resolve('thumb-active') })])
        })
      ]
    });
  };
  var $_cz5xwz11njepbvf5e = { sketch: sketch$3 };

  var ancestor$3 = function (scope, transform, isRoot) {
    var element = scope.dom();
    var stop = $_bu3dt3wzjepbvebs.isFunction(isRoot) ? isRoot : $_167yw6wjjepbveag.constant(false);
    while (element.parentNode) {
      element = element.parentNode;
      var el = $_4pcs1kxfjepbvee2.fromDom(element);
      var transformed = transform(el);
      if (transformed.isSome())
        return transformed;
      else if (stop(el))
        break;
    }
    return Option.none();
  };
  var closest$3 = function (scope, transform, isRoot) {
    var current = transform(scope);
    return current.orThunk(function () {
      return isRoot(scope) ? Option.none() : ancestor$3(scope, transform, isRoot);
    });
  };
  var $_cbpila11pjepbvf61 = {
    ancestor: ancestor$3,
    closest: closest$3
  };

  var candidates = [
    '9px',
    '10px',
    '11px',
    '12px',
    '14px',
    '16px',
    '18px',
    '20px',
    '24px',
    '32px',
    '36px'
  ];
  var defaultSize = 'medium';
  var defaultIndex = 2;
  var indexToSize = function (index) {
    return Option.from(candidates[index]);
  };
  var sizeToIndex = function (size) {
    return $_227y8rwsjepbveb6.findIndex(candidates, function (v) {
      return v === size;
    });
  };
  var getRawOrComputed = function (isRoot, rawStart) {
    var optStart = $_4aeewhxkjepbveek.isElement(rawStart) ? Option.some(rawStart) : $_ginpy6x3jepbvece.parent(rawStart);
    return optStart.map(function (start) {
      var inline = $_cbpila11pjepbvf61.closest(start, function (elem) {
        return $_ct8mbo103jepbvesz.getRaw(elem, 'font-size');
      }, isRoot);
      return inline.getOrThunk(function () {
        return $_ct8mbo103jepbvesz.get(start, 'font-size');
      });
    }).getOr('');
  };
  var getSize = function (editor) {
    var node = editor.selection.getStart();
    var elem = $_4pcs1kxfjepbvee2.fromDom(node);
    var root = $_4pcs1kxfjepbvee2.fromDom(editor.getBody());
    var isRoot = function (e) {
      return $_6fsl8xx9jepbveda.eq(root, e);
    };
    var elemSize = getRawOrComputed(isRoot, elem);
    return $_227y8rwsjepbveb6.find(candidates, function (size) {
      return elemSize === size;
    }).getOr(defaultSize);
  };
  var applySize = function (editor, value) {
    var currentValue = getSize(editor);
    if (currentValue !== value) {
      editor.execCommand('fontSize', false, value);
    }
  };
  var get$7 = function (editor) {
    var size = getSize(editor);
    return sizeToIndex(size).getOr(defaultIndex);
  };
  var apply$1 = function (editor, index) {
    indexToSize(index).each(function (size) {
      applySize(editor, size);
    });
  };
  var $_3ccqsr11ojepbvf5n = {
    candidates: $_167yw6wjjepbveag.constant(candidates),
    get: get$7,
    apply: apply$1
  };

  var sizes = $_3ccqsr11ojepbvf5n.candidates();
  var makeSlider$1 = function (spec) {
    return $_cz5xwz11njepbvf5e.sketch({
      onChange: spec.onChange,
      sizes: sizes,
      category: 'font',
      getInitialValue: spec.getInitialValue
    });
  };
  var makeItems$1 = function (spec) {
    return [
      $_8035n1113jepbvf1w.spec('<span class="${prefix}-toolbar-button ${prefix}-icon-small-font ${prefix}-icon"></span>'),
      makeSlider$1(spec),
      $_8035n1113jepbvf1w.spec('<span class="${prefix}-toolbar-button ${prefix}-icon-large-font ${prefix}-icon"></span>')
    ];
  };
  var sketch$4 = function (realm, editor) {
    var spec = {
      onChange: function (value) {
        $_3ccqsr11ojepbvf5n.apply(editor, value);
      },
      getInitialValue: function () {
        return $_3ccqsr11ojepbvf5n.get(editor);
      }
    };
    return $_7zx4zl11ljepbvf5b.button(realm, 'font-size', function () {
      return makeItems$1(spec);
    });
  };
  var $_7zjepp11mjepbvf5c = {
    makeItems: makeItems$1,
    sketch: sketch$4
  };

  var record = function (spec) {
    var uid = $_f53w39xsjepbvefs.hasKey(spec, 'uid') ? spec.uid : $_6keeyb10xjepbvf0l.generate('memento');
    var get = function (any) {
      return any.getSystem().getByUid(uid).getOrDie();
    };
    var getOpt = function (any) {
      return any.getSystem().getByUid(uid).fold(Option.none, Option.some);
    };
    var asSpec = function () {
      return $_aaookwyjepbvebq.deepMerge(spec, { uid: uid });
    };
    return {
      get: get,
      getOpt: getOpt,
      asSpec: asSpec
    };
  };
  var $_2ml82x11rjepbvf6k = { record: record };

  function create$3(width, height) {
    return resize(document.createElement('canvas'), width, height);
  }
  function clone$2(canvas) {
    var tCanvas, ctx;
    tCanvas = create$3(canvas.width, canvas.height);
    ctx = get2dContext(tCanvas);
    ctx.drawImage(canvas, 0, 0);
    return tCanvas;
  }
  function get2dContext(canvas) {
    return canvas.getContext('2d');
  }
  function get3dContext(canvas) {
    var gl = null;
    try {
      gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    } catch (e) {
    }
    if (!gl) {
      gl = null;
    }
    return gl;
  }
  function resize(canvas, width, height) {
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }
  var $_1s1v0811ujepbvf7f = {
    create: create$3,
    clone: clone$2,
    resize: resize,
    get2dContext: get2dContext,
    get3dContext: get3dContext
  };

  function getWidth(image) {
    return image.naturalWidth || image.width;
  }
  function getHeight(image) {
    return image.naturalHeight || image.height;
  }
  var $_6o0thl11vjepbvf7h = {
    getWidth: getWidth,
    getHeight: getHeight
  };

  var promise = function () {
    var Promise = function (fn) {
      if (typeof this !== 'object')
        throw new TypeError('Promises must be constructed via new');
      if (typeof fn !== 'function')
        throw new TypeError('not a function');
      this._state = null;
      this._value = null;
      this._deferreds = [];
      doResolve(fn, bind(resolve, this), bind(reject, this));
    };
    var asap = Promise.immediateFn || typeof setImmediate === 'function' && setImmediate || function (fn) {
      setTimeout(fn, 1);
    };
    function bind(fn, thisArg) {
      return function () {
        fn.apply(thisArg, arguments);
      };
    }
    var isArray = Array.isArray || function (value) {
      return Object.prototype.toString.call(value) === '[object Array]';
    };
    function handle(deferred) {
      var me = this;
      if (this._state === null) {
        this._deferreds.push(deferred);
        return;
      }
      asap(function () {
        var cb = me._state ? deferred.onFulfilled : deferred.onRejected;
        if (cb === null) {
          (me._state ? deferred.resolve : deferred.reject)(me._value);
          return;
        }
        var ret;
        try {
          ret = cb(me._value);
        } catch (e) {
          deferred.reject(e);
          return;
        }
        deferred.resolve(ret);
      });
    }
    function resolve(newValue) {
      try {
        if (newValue === this)
          throw new TypeError('A promise cannot be resolved with itself.');
        if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
          var then = newValue.then;
          if (typeof then === 'function') {
            doResolve(bind(then, newValue), bind(resolve, this), bind(reject, this));
            return;
          }
        }
        this._state = true;
        this._value = newValue;
        finale.call(this);
      } catch (e) {
        reject.call(this, e);
      }
    }
    function reject(newValue) {
      this._state = false;
      this._value = newValue;
      finale.call(this);
    }
    function finale() {
      for (var i = 0, len = this._deferreds.length; i < len; i++) {
        handle.call(this, this._deferreds[i]);
      }
      this._deferreds = null;
    }
    function Handler(onFulfilled, onRejected, resolve, reject) {
      this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
      this.onRejected = typeof onRejected === 'function' ? onRejected : null;
      this.resolve = resolve;
      this.reject = reject;
    }
    function doResolve(fn, onFulfilled, onRejected) {
      var done = false;
      try {
        fn(function (value) {
          if (done)
            return;
          done = true;
          onFulfilled(value);
        }, function (reason) {
          if (done)
            return;
          done = true;
          onRejected(reason);
        });
      } catch (ex) {
        if (done)
          return;
        done = true;
        onRejected(ex);
      }
    }
    Promise.prototype['catch'] = function (onRejected) {
      return this.then(null, onRejected);
    };
    Promise.prototype.then = function (onFulfilled, onRejected) {
      var me = this;
      return new Promise(function (resolve, reject) {
        handle.call(me, new Handler(onFulfilled, onRejected, resolve, reject));
      });
    };
    Promise.all = function () {
      var args = Array.prototype.slice.call(arguments.length === 1 && isArray(arguments[0]) ? arguments[0] : arguments);
      return new Promise(function (resolve, reject) {
        if (args.length === 0)
          return resolve([]);
        var remaining = args.length;
        function res(i, val) {
          try {
            if (val && (typeof val === 'object' || typeof val === 'function')) {
              var then = val.then;
              if (typeof then === 'function') {
                then.call(val, function (val) {
                  res(i, val);
                }, reject);
                return;
              }
            }
            args[i] = val;
            if (--remaining === 0) {
              resolve(args);
            }
          } catch (ex) {
            reject(ex);
          }
        }
        for (var i = 0; i < args.length; i++) {
          res(i, args[i]);
        }
      });
    };
    Promise.resolve = function (value) {
      if (value && typeof value === 'object' && value.constructor === Promise) {
        return value;
      }
      return new Promise(function (resolve) {
        resolve(value);
      });
    };
    Promise.reject = function (value) {
      return new Promise(function (resolve, reject) {
        reject(value);
      });
    };
    Promise.race = function (values) {
      return new Promise(function (resolve, reject) {
        for (var i = 0, len = values.length; i < len; i++) {
          values[i].then(resolve, reject);
        }
      });
    };
    return Promise;
  };
  var Promise = window.Promise ? window.Promise : promise();

  function Blob (parts, properties) {
    var f = $_s0o1jxbjepbvedn.getOrDie('Blob');
    return new f(parts, properties);
  }

  function FileReader () {
    var f = $_s0o1jxbjepbvedn.getOrDie('FileReader');
    return new f();
  }

  function Uint8Array (arr) {
    var f = $_s0o1jxbjepbvedn.getOrDie('Uint8Array');
    return new f(arr);
  }

  var requestAnimationFrame = function (callback) {
    var f = $_s0o1jxbjepbvedn.getOrDie('requestAnimationFrame');
    f(callback);
  };
  var atob = function (base64) {
    var f = $_s0o1jxbjepbvedn.getOrDie('atob');
    return f(base64);
  };
  var $_blmxj4120jepbvf7p = {
    atob: atob,
    requestAnimationFrame: requestAnimationFrame
  };

  function imageToBlob(image) {
    var src = image.src;
    if (src.indexOf('data:') === 0) {
      return dataUriToBlob(src);
    }
    return anyUriToBlob(src);
  }
  function blobToImage(blob) {
    return new Promise(function (resolve, reject) {
      var blobUrl = URL.createObjectURL(blob);
      var image = new Image();
      var removeListeners = function () {
        image.removeEventListener('load', loaded);
        image.removeEventListener('error', error);
      };
      function loaded() {
        removeListeners();
        resolve(image);
      }
      function error() {
        removeListeners();
        reject('Unable to load data of type ' + blob.type + ': ' + blobUrl);
      }
      image.addEventListener('load', loaded);
      image.addEventListener('error', error);
      image.src = blobUrl;
      if (image.complete) {
        loaded();
      }
    });
  }
  function anyUriToBlob(url) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'blob';
      xhr.onload = function () {
        if (this.status == 200) {
          resolve(this.response);
        }
      };
      xhr.onerror = function () {
        var _this = this;
        var corsError = function () {
          var obj = new Error('No access to download image');
          obj.code = 18;
          obj.name = 'SecurityError';
          return obj;
        };
        var genericError = function () {
          return new Error('Error ' + _this.status + ' downloading image');
        };
        reject(this.status === 0 ? corsError() : genericError());
      };
      xhr.send();
    });
  }
  function dataUriToBlobSync(uri) {
    var data = uri.split(',');
    var matches = /data:([^;]+)/.exec(data[0]);
    if (!matches)
      return Option.none();
    var mimetype = matches[1];
    var base64 = data[1];
    var sliceSize = 1024;
    var byteCharacters = $_blmxj4120jepbvf7p.atob(base64);
    var bytesLength = byteCharacters.length;
    var slicesCount = Math.ceil(bytesLength / sliceSize);
    var byteArrays = new Array(slicesCount);
    for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
      var begin = sliceIndex * sliceSize;
      var end = Math.min(begin + sliceSize, bytesLength);
      var bytes = new Array(end - begin);
      for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
        bytes[i] = byteCharacters[offset].charCodeAt(0);
      }
      byteArrays[sliceIndex] = Uint8Array(bytes);
    }
    return Option.some(Blob(byteArrays, { type: mimetype }));
  }
  function dataUriToBlob(uri) {
    return new Promise(function (resolve, reject) {
      dataUriToBlobSync(uri).fold(function () {
        reject('uri is not base64: ' + uri);
      }, resolve);
    });
  }
  function uriToBlob(url) {
    if (url.indexOf('blob:') === 0) {
      return anyUriToBlob(url);
    }
    if (url.indexOf('data:') === 0) {
      return dataUriToBlob(url);
    }
    return null;
  }
  function canvasToBlob(canvas, type, quality) {
    type = type || 'image/png';
    if (HTMLCanvasElement.prototype.toBlob) {
      return new Promise(function (resolve) {
        canvas.toBlob(function (blob) {
          resolve(blob);
        }, type, quality);
      });
    } else {
      return dataUriToBlob(canvas.toDataURL(type, quality));
    }
  }
  function canvasToDataURL(getCanvas, type, quality) {
    type = type || 'image/png';
    return getCanvas.then(function (canvas) {
      return canvas.toDataURL(type, quality);
    });
  }
  function blobToCanvas(blob) {
    return blobToImage(blob).then(function (image) {
      revokeImageUrl(image);
      var context, canvas;
      canvas = $_1s1v0811ujepbvf7f.create($_6o0thl11vjepbvf7h.getWidth(image), $_6o0thl11vjepbvf7h.getHeight(image));
      context = $_1s1v0811ujepbvf7f.get2dContext(canvas);
      context.drawImage(image, 0, 0);
      return canvas;
    });
  }
  function blobToDataUri(blob) {
    return new Promise(function (resolve) {
      var reader = new FileReader();
      reader.onloadend = function () {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  }
  function blobToArrayBuffer(blob) {
    return new Promise(function (resolve) {
      var reader = new FileReader();
      reader.onloadend = function () {
        resolve(reader.result);
      };
      reader.readAsArrayBuffer(blob);
    });
  }
  function blobToBase64(blob) {
    return blobToDataUri(blob).then(function (dataUri) {
      return dataUri.split(',')[1];
    });
  }
  function revokeImageUrl(image) {
    URL.revokeObjectURL(image.src);
  }
  var $_7oh8xw11tjepbvf71 = {
    blobToImage: blobToImage,
    imageToBlob: imageToBlob,
    blobToArrayBuffer: blobToArrayBuffer,
    blobToDataUri: blobToDataUri,
    blobToBase64: blobToBase64,
    dataUriToBlobSync: dataUriToBlobSync,
    canvasToBlob: canvasToBlob,
    canvasToDataURL: canvasToDataURL,
    blobToCanvas: blobToCanvas,
    uriToBlob: uriToBlob
  };

  var blobToImage$1 = function (image) {
    return $_7oh8xw11tjepbvf71.blobToImage(image);
  };
  var imageToBlob$1 = function (blob) {
    return $_7oh8xw11tjepbvf71.imageToBlob(blob);
  };
  var blobToDataUri$1 = function (blob) {
    return $_7oh8xw11tjepbvf71.blobToDataUri(blob);
  };
  var blobToBase64$1 = function (blob) {
    return $_7oh8xw11tjepbvf71.blobToBase64(blob);
  };
  var dataUriToBlobSync$1 = function (uri) {
    return $_7oh8xw11tjepbvf71.dataUriToBlobSync(uri);
  };
  var uriToBlob$1 = function (uri) {
    return Option.from($_7oh8xw11tjepbvf71.uriToBlob(uri));
  };
  var $_iarb411sjepbvf6t = {
    blobToImage: blobToImage$1,
    imageToBlob: imageToBlob$1,
    blobToDataUri: blobToDataUri$1,
    blobToBase64: blobToBase64$1,
    dataUriToBlobSync: dataUriToBlobSync$1,
    uriToBlob: uriToBlob$1
  };

  var addImage = function (editor, blob) {
    $_iarb411sjepbvf6t.blobToBase64(blob).then(function (base64) {
      editor.undoManager.transact(function () {
        var cache = editor.editorUpload.blobCache;
        var info = cache.create($_7oey8810rjepbveyh.generate('mceu'), blob, base64);
        cache.add(info);
        var img = editor.dom.createHTML('img', { src: info.blobUri() });
        editor.insertContent(img);
      });
    });
  };
  var extractBlob = function (simulatedEvent) {
    var event = simulatedEvent.event();
    var files = event.raw().target.files || event.raw().dataTransfer.files;
    return Option.from(files[0]);
  };
  var sketch$5 = function (editor) {
    var pickerDom = {
      tag: 'input',
      attributes: {
        accept: 'image/*',
        type: 'file',
        title: ''
      },
      styles: {
        visibility: 'hidden',
        position: 'absolute'
      }
    };
    var memPicker = $_2ml82x11rjepbvf6k.record({
      dom: pickerDom,
      events: $_81tpe0y4jepbvehy.derive([
        $_81tpe0y4jepbvehy.cutter($_e2bl11wijepbvead.click()),
        $_81tpe0y4jepbvehy.run($_e2bl11wijepbvead.change(), function (picker, simulatedEvent) {
          extractBlob(simulatedEvent).each(function (blob) {
            addImage(editor, blob);
          });
        })
      ])
    });
    return Button.sketch({
      dom: $_8035n1113jepbvf1w.dom('<span class="${prefix}-toolbar-button ${prefix}-icon-image ${prefix}-icon"></span>'),
      components: [memPicker.asSpec()],
      action: function (button) {
        var picker = memPicker.get(button);
        picker.element().dom().click();
      }
    });
  };
  var $_faak5v11qjepbvf69 = { sketch: sketch$5 };

  var get$8 = function (element) {
    return element.dom().textContent;
  };
  var set$5 = function (element, value) {
    element.dom().textContent = value;
  };
  var $_afgg9x123jepbvf89 = {
    get: get$8,
    set: set$5
  };

  var isNotEmpty = function (val) {
    return val.length > 0;
  };
  var defaultToEmpty = function (str) {
    return str === undefined || str === null ? '' : str;
  };
  var noLink = function (editor) {
    var text = editor.selection.getContent({ format: 'text' });
    return {
      url: '',
      text: text,
      title: '',
      target: '',
      link: Option.none()
    };
  };
  var fromLink = function (link) {
    var text = $_afgg9x123jepbvf89.get(link);
    var url = $_1sxky7xrjepbvefh.get(link, 'href');
    var title = $_1sxky7xrjepbvefh.get(link, 'title');
    var target = $_1sxky7xrjepbvefh.get(link, 'target');
    return {
      url: defaultToEmpty(url),
      text: text !== url ? defaultToEmpty(text) : '',
      title: defaultToEmpty(title),
      target: defaultToEmpty(target),
      link: Option.some(link)
    };
  };
  var getInfo = function (editor) {
    return query(editor).fold(function () {
      return noLink(editor);
    }, function (link) {
      return fromLink(link);
    });
  };
  var wasSimple = function (link) {
    var prevHref = $_1sxky7xrjepbvefh.get(link, 'href');
    var prevText = $_afgg9x123jepbvf89.get(link);
    return prevHref === prevText;
  };
  var getTextToApply = function (link, url, info) {
    return info.text.filter(isNotEmpty).fold(function () {
      return wasSimple(link) ? Option.some(url) : Option.none();
    }, Option.some);
  };
  var unlinkIfRequired = function (editor, info) {
    var activeLink = info.link.bind($_167yw6wjjepbveag.identity);
    activeLink.each(function (link) {
      editor.execCommand('unlink');
    });
  };
  var getAttrs$1 = function (url, info) {
    var attrs = {};
    attrs.href = url;
    info.title.filter(isNotEmpty).each(function (title) {
      attrs.title = title;
    });
    info.target.filter(isNotEmpty).each(function (target) {
      attrs.target = target;
    });
    return attrs;
  };
  var applyInfo = function (editor, info) {
    info.url.filter(isNotEmpty).fold(function () {
      unlinkIfRequired(editor, info);
    }, function (url) {
      var attrs = getAttrs$1(url, info);
      var activeLink = info.link.bind($_167yw6wjjepbveag.identity);
      activeLink.fold(function () {
        var text = info.text.filter(isNotEmpty).getOr(url);
        editor.insertContent(editor.dom.createHTML('a', attrs, editor.dom.encode(text)));
      }, function (link) {
        var text = getTextToApply(link, url, info);
        $_1sxky7xrjepbvefh.setAll(link, attrs);
        text.each(function (newText) {
          $_afgg9x123jepbvf89.set(link, newText);
        });
      });
    });
  };
  var query = function (editor) {
    var start = $_4pcs1kxfjepbvee2.fromDom(editor.selection.getStart());
    return $_94ndqzxjepbvesc.closest(start, 'a');
  };
  var $_e2z1q8122jepbvf7x = {
    getInfo: getInfo,
    applyInfo: applyInfo,
    query: query
  };

  var platform$1 = $_fs3v1iwkjepbveaj.detect();
  var preserve$1 = function (f, editor) {
    var rng = editor.selection.getRng();
    f();
    editor.selection.setRng(rng);
  };
  var forAndroid = function (editor, f) {
    var wrapper = platform$1.os.isAndroid() ? preserve$1 : $_167yw6wjjepbveag.apply;
    wrapper(f, editor);
  };
  var $_6jlmbp124jepbvf8a = { forAndroid: forAndroid };

  var events$6 = function (name, eventHandlers) {
    var events = $_81tpe0y4jepbvehy.derive(eventHandlers);
    return $_9otgsgy2jepbveh4.create({
      fields: [$_8rfcbxy7jepbvein.strict('enabled')],
      name: name,
      active: { events: $_167yw6wjjepbveag.constant(events) }
    });
  };
  var config = function (name, eventHandlers) {
    var me = events$6(name, eventHandlers);
    return {
      key: name,
      value: {
        config: {},
        me: me,
        configAsRaw: $_167yw6wjjepbveag.constant({}),
        initialConfig: {},
        state: $_9otgsgy2jepbveh4.noState()
      }
    };
  };
  var $_c3kqad126jepbvf94 = {
    events: events$6,
    config: config
  };

  var getCurrent = function (component, composeConfig, composeState) {
    return composeConfig.find()(component);
  };
  var $_1umpkx128jepbvf9c = { getCurrent: getCurrent };

  var ComposeSchema = [$_8rfcbxy7jepbvein.strict('find')];

  var Composing = $_9otgsgy2jepbveh4.create({
    fields: ComposeSchema,
    name: 'composing',
    apis: $_1umpkx128jepbvf9c
  });

  var factory$1 = function (detail, spec) {
    return {
      uid: detail.uid(),
      dom: $_aaookwyjepbvebq.deepMerge({
        tag: 'div',
        attributes: { role: 'presentation' }
      }, detail.dom()),
      components: detail.components(),
      behaviours: $_4fa1o810ojepbvexo.get(detail.containerBehaviours()),
      events: detail.events(),
      domModification: detail.domModification(),
      eventOrder: detail.eventOrder()
    };
  };
  var Container = $_bv7bve10pjepbvexx.single({
    name: 'Container',
    factory: factory$1,
    configFields: [
      $_8rfcbxy7jepbvein.defaulted('components', []),
      $_4fa1o810ojepbvexo.field('containerBehaviours', []),
      $_8rfcbxy7jepbvein.defaulted('events', {}),
      $_8rfcbxy7jepbvein.defaulted('domModification', {}),
      $_8rfcbxy7jepbvein.defaulted('eventOrder', {})
    ]
  });

  var factory$2 = function (detail, spec) {
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      behaviours: $_aaookwyjepbvebq.deepMerge($_9otgsgy2jepbveh4.derive([
        me.config({
          store: {
            mode: 'memory',
            initialValue: detail.getInitialValue()()
          }
        }),
        Composing.config({ find: Option.some })
      ]), $_4fa1o810ojepbvexo.get(detail.dataBehaviours())),
      events: $_81tpe0y4jepbvehy.derive([$_81tpe0y4jepbvehy.runOnAttached(function (component, simulatedEvent) {
          me.setValue(component, detail.getInitialValue()());
        })])
    };
  };
  var DataField = $_bv7bve10pjepbvexx.single({
    name: 'DataField',
    factory: factory$2,
    configFields: [
      $_8rfcbxy7jepbvein.strict('uid'),
      $_8rfcbxy7jepbvein.strict('dom'),
      $_8rfcbxy7jepbvein.strict('getInitialValue'),
      $_4fa1o810ojepbvexo.field('dataBehaviours', [
        me,
        Composing
      ])
    ]
  });

  var get$9 = function (element) {
    return element.dom().value;
  };
  var set$6 = function (element, value) {
    if (value === undefined)
      throw new Error('Value.set was undefined');
    element.dom().value = value;
  };
  var $_anfcxj12ejepbvfab = {
    set: set$6,
    get: get$9
  };

  var schema$8 = [
    $_8rfcbxy7jepbvein.option('data'),
    $_8rfcbxy7jepbvein.defaulted('inputAttributes', {}),
    $_8rfcbxy7jepbvein.defaulted('inputStyles', {}),
    $_8rfcbxy7jepbvein.defaulted('type', 'input'),
    $_8rfcbxy7jepbvein.defaulted('tag', 'input'),
    $_8rfcbxy7jepbvein.defaulted('inputClasses', []),
    $_ca0qsez6jepbvens.onHandler('onSetValue'),
    $_8rfcbxy7jepbvein.defaulted('styles', {}),
    $_8rfcbxy7jepbvein.option('placeholder'),
    $_8rfcbxy7jepbvein.defaulted('eventOrder', {}),
    $_4fa1o810ojepbvexo.field('inputBehaviours', [
      me,
      Focusing
    ]),
    $_8rfcbxy7jepbvein.defaulted('selectOnFocus', true)
  ];
  var behaviours = function (detail) {
    return $_aaookwyjepbvebq.deepMerge($_9otgsgy2jepbveh4.derive([
      me.config({
        store: {
          mode: 'manual',
          initialValue: detail.data().getOr(undefined),
          getValue: function (input) {
            return $_anfcxj12ejepbvfab.get(input.element());
          },
          setValue: function (input, data) {
            var current = $_anfcxj12ejepbvfab.get(input.element());
            if (current !== data) {
              $_anfcxj12ejepbvfab.set(input.element(), data);
            }
          }
        },
        onSetValue: detail.onSetValue()
      }),
      Focusing.config({
        onFocus: detail.selectOnFocus() === false ? $_167yw6wjjepbveag.noop : function (component) {
          var input = component.element();
          var value = $_anfcxj12ejepbvfab.get(input);
          input.dom().setSelectionRange(0, value.length);
        }
      })
    ]), $_4fa1o810ojepbvexo.get(detail.inputBehaviours()));
  };
  var dom$2 = function (detail) {
    return {
      tag: detail.tag(),
      attributes: $_aaookwyjepbvebq.deepMerge($_f53w39xsjepbvefs.wrapAll([{
          key: 'type',
          value: detail.type()
        }].concat(detail.placeholder().map(function (pc) {
        return {
          key: 'placeholder',
          value: pc
        };
      }).toArray())), detail.inputAttributes()),
      styles: detail.inputStyles(),
      classes: detail.inputClasses()
    };
  };
  var $_cx8cpq12djepbvfa0 = {
    schema: $_167yw6wjjepbveag.constant(schema$8),
    behaviours: behaviours,
    dom: dom$2
  };

  var factory$3 = function (detail, spec) {
    return {
      uid: detail.uid(),
      dom: $_cx8cpq12djepbvfa0.dom(detail),
      components: [],
      behaviours: $_cx8cpq12djepbvfa0.behaviours(detail),
      eventOrder: detail.eventOrder()
    };
  };
  var Input = $_bv7bve10pjepbvexx.single({
    name: 'Input',
    configFields: $_cx8cpq12djepbvfa0.schema(),
    factory: factory$3
  });

  var exhibit$3 = function (base, tabConfig) {
    return $_1rbjqxyhjepbveks.nu({
      attributes: $_f53w39xsjepbvefs.wrapAll([{
          key: tabConfig.tabAttr(),
          value: 'true'
        }])
    });
  };
  var $_6fknny12gjepbvfaf = { exhibit: exhibit$3 };

  var TabstopSchema = [$_8rfcbxy7jepbvein.defaulted('tabAttr', 'data-alloy-tabstop')];

  var Tabstopping = $_9otgsgy2jepbveh4.create({
    fields: TabstopSchema,
    name: 'tabstopping',
    active: $_6fknny12gjepbvfaf
  });

  var clearInputBehaviour = 'input-clearing';
  var field$2 = function (name, placeholder) {
    var inputSpec = $_2ml82x11rjepbvf6k.record(Input.sketch({
      placeholder: placeholder,
      onSetValue: function (input, data) {
        $_e4saacwgjepbvea0.emit(input, $_e2bl11wijepbvead.input());
      },
      inputBehaviours: $_9otgsgy2jepbveh4.derive([
        Composing.config({ find: Option.some }),
        Tabstopping.config({}),
        Keying.config({ mode: 'execution' })
      ]),
      selectOnFocus: false
    }));
    var buttonSpec = $_2ml82x11rjepbvf6k.record(Button.sketch({
      dom: $_8035n1113jepbvf1w.dom('<button class="${prefix}-input-container-x ${prefix}-icon-cancel-circle ${prefix}-icon"></button>'),
      action: function (button) {
        var input = inputSpec.get(button);
        me.setValue(input, '');
      }
    }));
    return {
      name: name,
      spec: Container.sketch({
        dom: $_8035n1113jepbvf1w.dom('<div class="${prefix}-input-container"></div>'),
        components: [
          inputSpec.asSpec(),
          buttonSpec.asSpec()
        ],
        containerBehaviours: $_9otgsgy2jepbveh4.derive([
          Toggling.config({ toggleClass: $_3fme06zejepbvepj.resolve('input-container-empty') }),
          Composing.config({
            find: function (comp) {
              return Option.some(inputSpec.get(comp));
            }
          }),
          $_c3kqad126jepbvf94.config(clearInputBehaviour, [$_81tpe0y4jepbvehy.run($_e2bl11wijepbvead.input(), function (iContainer) {
              var input = inputSpec.get(iContainer);
              var val = me.getValue(input);
              var f = val.length > 0 ? Toggling.off : Toggling.on;
              f(iContainer);
            })])
        ])
      })
    };
  };
  var hidden = function (name) {
    return {
      name: name,
      spec: DataField.sketch({
        dom: {
          tag: 'span',
          styles: { display: 'none' }
        },
        getInitialValue: function () {
          return Option.none();
        }
      })
    };
  };
  var $_cxk3dm125jepbvf8f = {
    field: field$2,
    hidden: hidden
  };

  var nativeDisabled = [
    'input',
    'button',
    'textarea'
  ];
  var onLoad$5 = function (component, disableConfig, disableState) {
    if (disableConfig.disabled())
      disable(component, disableConfig, disableState);
  };
  var hasNative = function (component) {
    return $_227y8rwsjepbveb6.contains(nativeDisabled, $_4aeewhxkjepbveek.name(component.element()));
  };
  var nativeIsDisabled = function (component) {
    return $_1sxky7xrjepbvefh.has(component.element(), 'disabled');
  };
  var nativeDisable = function (component) {
    $_1sxky7xrjepbvefh.set(component.element(), 'disabled', 'disabled');
  };
  var nativeEnable = function (component) {
    $_1sxky7xrjepbvefh.remove(component.element(), 'disabled');
  };
  var ariaIsDisabled = function (component) {
    return $_1sxky7xrjepbvefh.get(component.element(), 'aria-disabled') === 'true';
  };
  var ariaDisable = function (component) {
    $_1sxky7xrjepbvefh.set(component.element(), 'aria-disabled', 'true');
  };
  var ariaEnable = function (component) {
    $_1sxky7xrjepbvefh.set(component.element(), 'aria-disabled', 'false');
  };
  var disable = function (component, disableConfig, disableState) {
    disableConfig.disableClass().each(function (disableClass) {
      $_cs8xnaynjepbvelr.add(component.element(), disableClass);
    });
    var f = hasNative(component) ? nativeDisable : ariaDisable;
    f(component);
  };
  var enable = function (component, disableConfig, disableState) {
    disableConfig.disableClass().each(function (disableClass) {
      $_cs8xnaynjepbvelr.remove(component.element(), disableClass);
    });
    var f = hasNative(component) ? nativeEnable : ariaEnable;
    f(component);
  };
  var isDisabled = function (component) {
    return hasNative(component) ? nativeIsDisabled(component) : ariaIsDisabled(component);
  };
  var $_cv0rd712ljepbvfbs = {
    enable: enable,
    disable: disable,
    isDisabled: isDisabled,
    onLoad: onLoad$5
  };

  var exhibit$4 = function (base, disableConfig, disableState) {
    return $_1rbjqxyhjepbveks.nu({ classes: disableConfig.disabled() ? disableConfig.disableClass().map($_227y8rwsjepbveb6.pure).getOr([]) : [] });
  };
  var events$7 = function (disableConfig, disableState) {
    return $_81tpe0y4jepbvehy.derive([
      $_81tpe0y4jepbvehy.abort($_alx3dcwhjepbvea8.execute(), function (component, simulatedEvent) {
        return $_cv0rd712ljepbvfbs.isDisabled(component, disableConfig, disableState);
      }),
      $_s3kjuy3jepbvehf.loadEvent(disableConfig, disableState, $_cv0rd712ljepbvfbs.onLoad)
    ]);
  };
  var $_ac6rlk12kjepbvfbn = {
    exhibit: exhibit$4,
    events: events$7
  };

  var DisableSchema = [
    $_8rfcbxy7jepbvein.defaulted('disabled', false),
    $_8rfcbxy7jepbvein.option('disableClass')
  ];

  var Disabling = $_9otgsgy2jepbveh4.create({
    fields: DisableSchema,
    name: 'disabling',
    active: $_ac6rlk12kjepbvfbn,
    apis: $_cv0rd712ljepbvfbs
  });

  var owner$1 = 'form';
  var schema$9 = [$_4fa1o810ojepbvexo.field('formBehaviours', [me])];
  var getPartName = function (name) {
    return '<alloy.field.' + name + '>';
  };
  var sketch$6 = function (fSpec) {
    var parts = function () {
      var record = [];
      var field = function (name, config) {
        record.push(name);
        return $_1n5d3m10tjepbveyq.generateOne(owner$1, getPartName(name), config);
      };
      return {
        field: field,
        record: function () {
          return record;
        }
      };
    }();
    var spec = fSpec(parts);
    var partNames = parts.record();
    var fieldParts = $_227y8rwsjepbveb6.map(partNames, function (n) {
      return $_3jjkp510vjepbvezm.required({
        name: n,
        pname: getPartName(n)
      });
    });
    return $_6m3pgw10sjepbveyj.composite(owner$1, schema$9, fieldParts, make, spec);
  };
  var make = function (detail, components, spec) {
    return $_aaookwyjepbvebq.deepMerge({
      'debug.sketcher': { 'Form': spec },
      uid: detail.uid(),
      dom: detail.dom(),
      components: components,
      behaviours: $_aaookwyjepbvebq.deepMerge($_9otgsgy2jepbveh4.derive([me.config({
          store: {
            mode: 'manual',
            getValue: function (form) {
              var optPs = $_1n5d3m10tjepbveyq.getAllParts(form, detail);
              return $_1l8sbcx0jepbvebt.map(optPs, function (optPThunk, pName) {
                return optPThunk().bind(Composing.getCurrent).map(me.getValue);
              });
            },
            setValue: function (form, values) {
              $_1l8sbcx0jepbvebt.each(values, function (newValue, key) {
                $_1n5d3m10tjepbveyq.getPart(form, detail, key).each(function (wrapper) {
                  Composing.getCurrent(wrapper).each(function (field) {
                    me.setValue(field, newValue);
                  });
                });
              });
            }
          }
        })]), $_4fa1o810ojepbvexo.get(detail.formBehaviours())),
      apis: {
        getField: function (form, key) {
          return $_1n5d3m10tjepbveyq.getPart(form, detail, key).bind(Composing.getCurrent);
        }
      }
    });
  };
  var $_cj3fvy12njepbvfc7 = {
    getField: $_dc94u710qjepbvey9.makeApi(function (apis, component, key) {
      return apis.getField(component, key);
    }),
    sketch: sketch$6
  };

  var revocable = function (doRevoke) {
    var subject = Cell(Option.none());
    var revoke = function () {
      subject.get().each(doRevoke);
    };
    var clear = function () {
      revoke();
      subject.set(Option.none());
    };
    var set = function (s) {
      revoke();
      subject.set(Option.some(s));
    };
    var isSet = function () {
      return subject.get().isSome();
    };
    return {
      clear: clear,
      isSet: isSet,
      set: set
    };
  };
  var destroyable = function () {
    return revocable(function (s) {
      s.destroy();
    });
  };
  var unbindable = function () {
    return revocable(function (s) {
      s.unbind();
    });
  };
  var api$2 = function () {
    var subject = Cell(Option.none());
    var revoke = function () {
      subject.get().each(function (s) {
        s.destroy();
      });
    };
    var clear = function () {
      revoke();
      subject.set(Option.none());
    };
    var set = function (s) {
      revoke();
      subject.set(Option.some(s));
    };
    var run = function (f) {
      subject.get().each(f);
    };
    var isSet = function () {
      return subject.get().isSome();
    };
    return {
      clear: clear,
      isSet: isSet,
      set: set,
      run: run
    };
  };
  var value$3 = function () {
    var subject = Cell(Option.none());
    var clear = function () {
      subject.set(Option.none());
    };
    var set = function (s) {
      subject.set(Option.some(s));
    };
    var on = function (f) {
      subject.get().each(f);
    };
    var isSet = function () {
      return subject.get().isSome();
    };
    return {
      clear: clear,
      set: set,
      isSet: isSet,
      on: on
    };
  };
  var $_2a8rud12ojepbvfcl = {
    destroyable: destroyable,
    unbindable: unbindable,
    api: api$2,
    value: value$3
  };

  var SWIPING_LEFT = 1;
  var SWIPING_RIGHT = -1;
  var SWIPING_NONE = 0;
  var init$3 = function (xValue) {
    return {
      xValue: xValue,
      points: []
    };
  };
  var move = function (model, xValue) {
    if (xValue === model.xValue) {
      return model;
    }
    var currentDirection = xValue - model.xValue > 0 ? SWIPING_LEFT : SWIPING_RIGHT;
    var newPoint = {
      direction: currentDirection,
      xValue: xValue
    };
    var priorPoints = function () {
      if (model.points.length === 0) {
        return [];
      } else {
        var prev = model.points[model.points.length - 1];
        return prev.direction === currentDirection ? model.points.slice(0, model.points.length - 1) : model.points;
      }
    }();
    return {
      xValue: xValue,
      points: priorPoints.concat([newPoint])
    };
  };
  var complete = function (model) {
    if (model.points.length === 0) {
      return SWIPING_NONE;
    } else {
      var firstDirection = model.points[0].direction;
      var lastDirection = model.points[model.points.length - 1].direction;
      return firstDirection === SWIPING_RIGHT && lastDirection === SWIPING_RIGHT ? SWIPING_RIGHT : firstDirection === SWIPING_LEFT && lastDirection === SWIPING_LEFT ? SWIPING_LEFT : SWIPING_NONE;
    }
  };
  var $_94ahxs12pjepbvfco = {
    init: init$3,
    move: move,
    complete: complete
  };

  var sketch$7 = function (rawSpec) {
    var navigateEvent = 'navigateEvent';
    var wrapperAdhocEvents = 'serializer-wrapper-events';
    var formAdhocEvents = 'form-events';
    var schema = $_7je55jyejepbvekc.objOf([
      $_8rfcbxy7jepbvein.strict('fields'),
      $_8rfcbxy7jepbvein.defaulted('maxFieldIndex', rawSpec.fields.length - 1),
      $_8rfcbxy7jepbvein.strict('onExecute'),
      $_8rfcbxy7jepbvein.strict('getInitialValue'),
      $_8rfcbxy7jepbvein.state('state', function () {
        return {
          dialogSwipeState: $_2a8rud12ojepbvfcl.value(),
          currentScreen: Cell(0)
        };
      })
    ]);
    var spec = $_7je55jyejepbvekc.asRawOrDie('SerialisedDialog', schema, rawSpec);
    var navigationButton = function (direction, directionName, enabled) {
      return Button.sketch({
        dom: $_8035n1113jepbvf1w.dom('<span class="${prefix}-icon-' + directionName + ' ${prefix}-icon"></span>'),
        action: function (button) {
          $_e4saacwgjepbvea0.emitWith(button, navigateEvent, { direction: direction });
        },
        buttonBehaviours: $_9otgsgy2jepbveh4.derive([Disabling.config({
            disableClass: $_3fme06zejepbvepj.resolve('toolbar-navigation-disabled'),
            disabled: !enabled
          })])
      });
    };
    var reposition = function (dialog, message) {
      $_94ndqzxjepbvesc.descendant(dialog.element(), '.' + $_3fme06zejepbvepj.resolve('serialised-dialog-chain')).each(function (parent) {
        $_ct8mbo103jepbvesz.set(parent, 'left', -spec.state.currentScreen.get() * message.width + 'px');
      });
    };
    var navigate = function (dialog, direction) {
      var screens = $_7az4v0zvjepbves7.descendants(dialog.element(), '.' + $_3fme06zejepbvepj.resolve('serialised-dialog-screen'));
      $_94ndqzxjepbvesc.descendant(dialog.element(), '.' + $_3fme06zejepbvepj.resolve('serialised-dialog-chain')).each(function (parent) {
        if (spec.state.currentScreen.get() + direction >= 0 && spec.state.currentScreen.get() + direction < screens.length) {
          $_ct8mbo103jepbvesz.getRaw(parent, 'left').each(function (left) {
            var currentLeft = parseInt(left, 10);
            var w = $_j3x6211kjepbvf58.get(screens[0]);
            $_ct8mbo103jepbvesz.set(parent, 'left', currentLeft - direction * w + 'px');
          });
          spec.state.currentScreen.set(spec.state.currentScreen.get() + direction);
        }
      });
    };
    var focusInput = function (dialog) {
      var inputs = $_7az4v0zvjepbves7.descendants(dialog.element(), 'input');
      var optInput = Option.from(inputs[spec.state.currentScreen.get()]);
      optInput.each(function (input) {
        dialog.getSystem().getByDom(input).each(function (inputComp) {
          $_e4saacwgjepbvea0.dispatchFocus(dialog, inputComp.element());
        });
      });
      var dotitems = memDots.get(dialog);
      Highlighting.highlightAt(dotitems, spec.state.currentScreen.get());
    };
    var resetState = function () {
      spec.state.currentScreen.set(0);
      spec.state.dialogSwipeState.clear();
    };
    var memForm = $_2ml82x11rjepbvf6k.record($_cj3fvy12njepbvfc7.sketch(function (parts) {
      return {
        dom: $_8035n1113jepbvf1w.dom('<div class="${prefix}-serialised-dialog"></div>'),
        components: [Container.sketch({
            dom: $_8035n1113jepbvf1w.dom('<div class="${prefix}-serialised-dialog-chain" style="left: 0px; position: absolute;"></div>'),
            components: $_227y8rwsjepbveb6.map(spec.fields, function (field, i) {
              return i <= spec.maxFieldIndex ? Container.sketch({
                dom: $_8035n1113jepbvf1w.dom('<div class="${prefix}-serialised-dialog-screen"></div>'),
                components: $_227y8rwsjepbveb6.flatten([
                  [navigationButton(-1, 'previous', i > 0)],
                  [parts.field(field.name, field.spec)],
                  [navigationButton(+1, 'next', i < spec.maxFieldIndex)]
                ])
              }) : parts.field(field.name, field.spec);
            })
          })],
        formBehaviours: $_9otgsgy2jepbveh4.derive([
          $_bqtojizdjepbvepe.orientation(function (dialog, message) {
            reposition(dialog, message);
          }),
          Keying.config({
            mode: 'special',
            focusIn: function (dialog) {
              focusInput(dialog);
            },
            onTab: function (dialog) {
              navigate(dialog, +1);
              return Option.some(true);
            },
            onShiftTab: function (dialog) {
              navigate(dialog, -1);
              return Option.some(true);
            }
          }),
          $_c3kqad126jepbvf94.config(formAdhocEvents, [
            $_81tpe0y4jepbvehy.runOnAttached(function (dialog, simulatedEvent) {
              resetState();
              var dotitems = memDots.get(dialog);
              Highlighting.highlightFirst(dotitems);
              spec.getInitialValue(dialog).each(function (v) {
                me.setValue(dialog, v);
              });
            }),
            $_81tpe0y4jepbvehy.runOnExecute(spec.onExecute),
            $_81tpe0y4jepbvehy.run($_e2bl11wijepbvead.transitionend(), function (dialog, simulatedEvent) {
              if (simulatedEvent.event().raw().propertyName === 'left') {
                focusInput(dialog);
              }
            }),
            $_81tpe0y4jepbvehy.run(navigateEvent, function (dialog, simulatedEvent) {
              var direction = simulatedEvent.event().direction();
              navigate(dialog, direction);
            })
          ])
        ])
      };
    }));
    var memDots = $_2ml82x11rjepbvf6k.record({
      dom: $_8035n1113jepbvf1w.dom('<div class="${prefix}-dot-container"></div>'),
      behaviours: $_9otgsgy2jepbveh4.derive([Highlighting.config({
          highlightClass: $_3fme06zejepbvepj.resolve('dot-active'),
          itemClass: $_3fme06zejepbvepj.resolve('dot-item')
        })]),
      components: $_227y8rwsjepbveb6.bind(spec.fields, function (_f, i) {
        return i <= spec.maxFieldIndex ? [$_8035n1113jepbvf1w.spec('<div class="${prefix}-dot-item ${prefix}-icon-full-dot ${prefix}-icon"></div>')] : [];
      })
    });
    return {
      dom: $_8035n1113jepbvf1w.dom('<div class="${prefix}-serializer-wrapper"></div>'),
      components: [
        memForm.asSpec(),
        memDots.asSpec()
      ],
      behaviours: $_9otgsgy2jepbveh4.derive([
        Keying.config({
          mode: 'special',
          focusIn: function (wrapper) {
            var form = memForm.get(wrapper);
            Keying.focusIn(form);
          }
        }),
        $_c3kqad126jepbvf94.config(wrapperAdhocEvents, [
          $_81tpe0y4jepbvehy.run($_e2bl11wijepbvead.touchstart(), function (wrapper, simulatedEvent) {
            spec.state.dialogSwipeState.set($_94ahxs12pjepbvfco.init(simulatedEvent.event().raw().touches[0].clientX));
          }),
          $_81tpe0y4jepbvehy.run($_e2bl11wijepbvead.touchmove(), function (wrapper, simulatedEvent) {
            spec.state.dialogSwipeState.on(function (state) {
              simulatedEvent.event().prevent();
              spec.state.dialogSwipeState.set($_94ahxs12pjepbvfco.move(state, simulatedEvent.event().raw().touches[0].clientX));
            });
          }),
          $_81tpe0y4jepbvehy.run($_e2bl11wijepbvead.touchend(), function (wrapper) {
            spec.state.dialogSwipeState.on(function (state) {
              var dialog = memForm.get(wrapper);
              var direction = -1 * $_94ahxs12pjepbvfco.complete(state);
              navigate(dialog, direction);
            });
          })
        ])
      ])
    };
  };
  var $_3yofvd12ijepbvfao = { sketch: sketch$7 };

  var getGroups = $_b2ra0wwljepbveal.cached(function (realm, editor) {
    return [{
        label: 'the link group',
        items: [$_3yofvd12ijepbvfao.sketch({
            fields: [
              $_cxk3dm125jepbvf8f.field('url', 'Type or paste URL'),
              $_cxk3dm125jepbvf8f.field('text', 'Link text'),
              $_cxk3dm125jepbvf8f.field('title', 'Link title'),
              $_cxk3dm125jepbvf8f.field('target', 'Link target'),
              $_cxk3dm125jepbvf8f.hidden('link')
            ],
            maxFieldIndex: [
              'url',
              'text',
              'title',
              'target'
            ].length - 1,
            getInitialValue: function () {
              return Option.some($_e2z1q8122jepbvf7x.getInfo(editor));
            },
            onExecute: function (dialog) {
              var info = me.getValue(dialog);
              $_e2z1q8122jepbvf7x.applyInfo(editor, info);
              realm.restoreToolbar();
              editor.focus();
            }
          })]
      }];
  });
  var sketch$8 = function (realm, editor) {
    return $_81yxrozfjepbvepm.forToolbarStateAction(editor, 'link', 'link', function () {
      var groups = getGroups(realm, editor);
      realm.setContextToolbar(groups);
      $_6jlmbp124jepbvf8a.forAndroid(editor, function () {
        realm.focusToolbar();
      });
      $_e2z1q8122jepbvf7x.query(editor).each(function (link) {
        editor.selection.select(link.dom());
      });
    });
  };
  var $_96u5yj121jepbvf7q = { sketch: sketch$8 };

  var DefaultStyleFormats = [
    {
      title: 'Headings',
      items: [
        {
          title: 'Heading 1',
          format: 'h1'
        },
        {
          title: 'Heading 2',
          format: 'h2'
        },
        {
          title: 'Heading 3',
          format: 'h3'
        },
        {
          title: 'Heading 4',
          format: 'h4'
        },
        {
          title: 'Heading 5',
          format: 'h5'
        },
        {
          title: 'Heading 6',
          format: 'h6'
        }
      ]
    },
    {
      title: 'Inline',
      items: [
        {
          title: 'Bold',
          icon: 'bold',
          format: 'bold'
        },
        {
          title: 'Italic',
          icon: 'italic',
          format: 'italic'
        },
        {
          title: 'Underline',
          icon: 'underline',
          format: 'underline'
        },
        {
          title: 'Strikethrough',
          icon: 'strikethrough',
          format: 'strikethrough'
        },
        {
          title: 'Superscript',
          icon: 'superscript',
          format: 'superscript'
        },
        {
          title: 'Subscript',
          icon: 'subscript',
          format: 'subscript'
        },
        {
          title: 'Code',
          icon: 'code',
          format: 'code'
        }
      ]
    },
    {
      title: 'Blocks',
      items: [
        {
          title: 'Paragraph',
          format: 'p'
        },
        {
          title: 'Blockquote',
          format: 'blockquote'
        },
        {
          title: 'Div',
          format: 'div'
        },
        {
          title: 'Pre',
          format: 'pre'
        }
      ]
    },
    {
      title: 'Alignment',
      items: [
        {
          title: 'Left',
          icon: 'alignleft',
          format: 'alignleft'
        },
        {
          title: 'Center',
          icon: 'aligncenter',
          format: 'aligncenter'
        },
        {
          title: 'Right',
          icon: 'alignright',
          format: 'alignright'
        },
        {
          title: 'Justify',
          icon: 'alignjustify',
          format: 'alignjustify'
        }
      ]
    }
  ];

  var generateFrom = function (spec, all) {
    var schema = $_227y8rwsjepbveb6.map(all, function (a) {
      return $_8rfcbxy7jepbvein.field(a.name(), a.name(), $_1zybmsy8jepbveix.asOption(), $_7je55jyejepbvekc.objOf([
        $_8rfcbxy7jepbvein.strict('config'),
        $_8rfcbxy7jepbvein.defaulted('state', $_ahkml8yjjepbvele)
      ]));
    });
    var validated = $_7je55jyejepbvekc.asStruct('component.behaviours', $_7je55jyejepbvekc.objOf(schema), spec.behaviours).fold(function (errInfo) {
      throw new Error($_7je55jyejepbvekc.formatError(errInfo) + '\nComplete spec:\n' + $_3c4zqfydjepbvek9.stringify(spec, null, 2));
    }, $_167yw6wjjepbveag.identity);
    return {
      list: all,
      data: $_1l8sbcx0jepbvebt.map(validated, function (blobOptionThunk) {
        var blobOption = blobOptionThunk();
        return $_167yw6wjjepbveag.constant(blobOption.map(function (blob) {
          return {
            config: blob.config(),
            state: blob.state().init(blob.config())
          };
        }));
      })
    };
  };
  var getBehaviours = function (bData) {
    return bData.list;
  };
  var getData = function (bData) {
    return bData.data;
  };
  var $_gdjyzu12wjepbvffp = {
    generateFrom: generateFrom,
    getBehaviours: getBehaviours,
    getData: getData
  };

  var getBehaviours$1 = function (spec) {
    var behaviours = $_f53w39xsjepbvefs.readOptFrom(spec, 'behaviours').getOr({});
    var keys = $_227y8rwsjepbveb6.filter($_1l8sbcx0jepbvebt.keys(behaviours), function (k) {
      return behaviours[k] !== undefined;
    });
    return $_227y8rwsjepbveb6.map(keys, function (k) {
      return spec.behaviours[k].me;
    });
  };
  var generateFrom$1 = function (spec, all) {
    return $_gdjyzu12wjepbvffp.generateFrom(spec, all);
  };
  var generate$4 = function (spec) {
    var all = getBehaviours$1(spec);
    return generateFrom$1(spec, all);
  };
  var $_66f54t12vjepbvffe = {
    generate: generate$4,
    generateFrom: generateFrom$1
  };

  var ComponentApi = $_dn2l7pyljepbveli.exactly([
    'getSystem',
    'config',
    'hasConfigured',
    'spec',
    'connect',
    'disconnect',
    'element',
    'syncComponents',
    'readState',
    'components',
    'events'
  ]);

  var SystemApi = $_dn2l7pyljepbveli.exactly([
    'debugInfo',
    'triggerFocus',
    'triggerEvent',
    'triggerEscape',
    'addToWorld',
    'removeFromWorld',
    'addToGui',
    'removeFromGui',
    'build',
    'getByUid',
    'getByDom',
    'broadcast',
    'broadcastOn'
  ]);

  function NoContextApi (getComp) {
    var fail = function (event) {
      return function () {
        throw new Error('The component must be in a context to send: ' + event + '\n' + $_bx258xmjepbvef1.element(getComp().element()) + ' is not in context.');
      };
    };
    return SystemApi({
      debugInfo: $_167yw6wjjepbveag.constant('fake'),
      triggerEvent: fail('triggerEvent'),
      triggerFocus: fail('triggerFocus'),
      triggerEscape: fail('triggerEscape'),
      build: fail('build'),
      addToWorld: fail('addToWorld'),
      removeFromWorld: fail('removeFromWorld'),
      addToGui: fail('addToGui'),
      removeFromGui: fail('removeFromGui'),
      getByUid: fail('getByUid'),
      getByDom: fail('getByDom'),
      broadcast: fail('broadcast'),
      broadcastOn: fail('broadcastOn')
    });
  }

  var byInnerKey = function (data, tuple) {
    var r = {};
    $_1l8sbcx0jepbvebt.each(data, function (detail, key) {
      $_1l8sbcx0jepbvebt.each(detail, function (value, indexKey) {
        var chain = $_f53w39xsjepbvefs.readOr(indexKey, [])(r);
        r[indexKey] = chain.concat([tuple(key, value)]);
      });
    });
    return r;
  };
  var $_yktgw131jepbvfh0 = { byInnerKey: byInnerKey };

  var behaviourDom = function (name, modification) {
    return {
      name: $_167yw6wjjepbveag.constant(name),
      modification: modification
    };
  };
  var concat = function (chain, aspect) {
    var values = $_227y8rwsjepbveb6.bind(chain, function (c) {
      return c.modification().getOr([]);
    });
    return Result.value($_f53w39xsjepbvefs.wrap(aspect, values));
  };
  var onlyOne = function (chain, aspect, order) {
    if (chain.length > 1)
      return Result.error('Multiple behaviours have tried to change DOM "' + aspect + '". The guilty behaviours are: ' + $_3c4zqfydjepbvek9.stringify($_227y8rwsjepbveb6.map(chain, function (b) {
        return b.name();
      })) + '. At this stage, this ' + 'is not supported. Future releases might provide strategies for resolving this.');
    else if (chain.length === 0)
      return Result.value({});
    else
      return Result.value(chain[0].modification().fold(function () {
        return {};
      }, function (m) {
        return $_f53w39xsjepbvefs.wrap(aspect, m);
      }));
  };
  var duplicate = function (aspect, k, obj, behaviours) {
    return Result.error('Mulitple behaviours have tried to change the _' + k + '_ "' + aspect + '"' + '. The guilty behaviours are: ' + $_3c4zqfydjepbvek9.stringify($_227y8rwsjepbveb6.bind(behaviours, function (b) {
      return b.modification().getOr({})[k] !== undefined ? [b.name()] : [];
    }), null, 2) + '. This is not currently supported.');
  };
  var safeMerge = function (chain, aspect) {
    var y = $_227y8rwsjepbveb6.foldl(chain, function (acc, c) {
      var obj = c.modification().getOr({});
      return acc.bind(function (accRest) {
        var parts = $_1l8sbcx0jepbvebt.mapToArray(obj, function (v, k) {
          return accRest[k] !== undefined ? duplicate(aspect, k, obj, chain) : Result.value($_f53w39xsjepbvefs.wrap(k, v));
        });
        return $_f53w39xsjepbvefs.consolidate(parts, accRest);
      });
    }, Result.value({}));
    return y.map(function (yValue) {
      return $_f53w39xsjepbvefs.wrap(aspect, yValue);
    });
  };
  var mergeTypes = {
    classes: concat,
    attributes: safeMerge,
    styles: safeMerge,
    domChildren: onlyOne,
    defChildren: onlyOne,
    innerHtml: onlyOne,
    value: onlyOne
  };
  var combine$1 = function (info, baseMod, behaviours, base) {
    var behaviourDoms = $_aaookwyjepbvebq.deepMerge({}, baseMod);
    $_227y8rwsjepbveb6.each(behaviours, function (behaviour) {
      behaviourDoms[behaviour.name()] = behaviour.exhibit(info, base);
    });
    var byAspect = $_yktgw131jepbvfh0.byInnerKey(behaviourDoms, behaviourDom);
    var usedAspect = $_1l8sbcx0jepbvebt.map(byAspect, function (values, aspect) {
      return $_227y8rwsjepbveb6.bind(values, function (value) {
        return value.modification().fold(function () {
          return [];
        }, function (v) {
          return [value];
        });
      });
    });
    var modifications = $_1l8sbcx0jepbvebt.mapToArray(usedAspect, function (values, aspect) {
      return $_f53w39xsjepbvefs.readOptFrom(mergeTypes, aspect).fold(function () {
        return Result.error('Unknown field type: ' + aspect);
      }, function (merger) {
        return merger(values, aspect);
      });
    });
    var consolidated = $_f53w39xsjepbvefs.consolidate(modifications, {});
    return consolidated.map($_1rbjqxyhjepbveks.nu);
  };
  var $_48ns9y130jepbvfgj = { combine: combine$1 };

  var sortKeys = function (label, keyName, array, order) {
    var sliced = array.slice(0);
    try {
      var sorted = sliced.sort(function (a, b) {
        var aKey = a[keyName]();
        var bKey = b[keyName]();
        var aIndex = order.indexOf(aKey);
        var bIndex = order.indexOf(bKey);
        if (aIndex === -1)
          throw new Error('The ordering for ' + label + ' does not have an entry for ' + aKey + '.\nOrder specified: ' + $_3c4zqfydjepbvek9.stringify(order, null, 2));
        if (bIndex === -1)
          throw new Error('The ordering for ' + label + ' does not have an entry for ' + bKey + '.\nOrder specified: ' + $_3c4zqfydjepbvek9.stringify(order, null, 2));
        if (aIndex < bIndex)
          return -1;
        else if (bIndex < aIndex)
          return 1;
        else
          return 0;
      });
      return Result.value(sorted);
    } catch (err) {
      return Result.error([err]);
    }
  };
  var $_akx2zh133jepbvfhm = { sortKeys: sortKeys };

  var nu$7 = function (handler, purpose) {
    return {
      handler: handler,
      purpose: $_167yw6wjjepbveag.constant(purpose)
    };
  };
  var curryArgs = function (descHandler, extraArgs) {
    return {
      handler: $_167yw6wjjepbveag.curry.apply(undefined, [descHandler.handler].concat(extraArgs)),
      purpose: descHandler.purpose
    };
  };
  var getHandler = function (descHandler) {
    return descHandler.handler;
  };
  var $_5tsbqa134jepbvfhv = {
    nu: nu$7,
    curryArgs: curryArgs,
    getHandler: getHandler
  };

  var behaviourTuple = function (name, handler) {
    return {
      name: $_167yw6wjjepbveag.constant(name),
      handler: $_167yw6wjjepbveag.constant(handler)
    };
  };
  var nameToHandlers = function (behaviours, info) {
    var r = {};
    $_227y8rwsjepbveb6.each(behaviours, function (behaviour) {
      r[behaviour.name()] = behaviour.handlers(info);
    });
    return r;
  };
  var groupByEvents = function (info, behaviours, base) {
    var behaviourEvents = $_aaookwyjepbvebq.deepMerge(base, nameToHandlers(behaviours, info));
    return $_yktgw131jepbvfh0.byInnerKey(behaviourEvents, behaviourTuple);
  };
  var combine$2 = function (info, eventOrder, behaviours, base) {
    var byEventName = groupByEvents(info, behaviours, base);
    return combineGroups(byEventName, eventOrder);
  };
  var assemble = function (rawHandler) {
    var handler = $_1jox9ry6jepbvei7.read(rawHandler);
    return function (component, simulatedEvent) {
      var args = Array.prototype.slice.call(arguments, 0);
      if (handler.abort.apply(undefined, args)) {
        simulatedEvent.stop();
      } else if (handler.can.apply(undefined, args)) {
        handler.run.apply(undefined, args);
      }
    };
  };
  var missingOrderError = function (eventName, tuples) {
    return Result.error(['The event (' + eventName + ') has more than one behaviour that listens to it.\nWhen this occurs, you must ' + 'specify an event ordering for the behaviours in your spec (e.g. [ "listing", "toggling" ]).\nThe behaviours that ' + 'can trigger it are: ' + $_3c4zqfydjepbvek9.stringify($_227y8rwsjepbveb6.map(tuples, function (c) {
        return c.name();
      }), null, 2)]);
  };
  var fuse$1 = function (tuples, eventOrder, eventName) {
    var order = eventOrder[eventName];
    if (!order)
      return missingOrderError(eventName, tuples);
    else
      return $_akx2zh133jepbvfhm.sortKeys('Event: ' + eventName, 'name', tuples, order).map(function (sortedTuples) {
        var handlers = $_227y8rwsjepbveb6.map(sortedTuples, function (tuple) {
          return tuple.handler();
        });
        return $_1jox9ry6jepbvei7.fuse(handlers);
      });
  };
  var combineGroups = function (byEventName, eventOrder) {
    var r = $_1l8sbcx0jepbvebt.mapToArray(byEventName, function (tuples, eventName) {
      var combined = tuples.length === 1 ? Result.value(tuples[0].handler()) : fuse$1(tuples, eventOrder, eventName);
      return combined.map(function (handler) {
        var assembled = assemble(handler);
        var purpose = tuples.length > 1 ? $_227y8rwsjepbveb6.filter(eventOrder, function (o) {
          return $_227y8rwsjepbveb6.contains(tuples, function (t) {
            return t.name() === o;
          });
        }).join(' > ') : tuples[0].name();
        return $_f53w39xsjepbvefs.wrap(eventName, $_5tsbqa134jepbvfhv.nu(assembled, purpose));
      });
    });
    return $_f53w39xsjepbvefs.consolidate(r, {});
  };
  var $_5n38o4132jepbvfh7 = { combine: combine$2 };

  var toInfo = function (spec) {
    return $_7je55jyejepbvekc.asStruct('custom.definition', $_7je55jyejepbvekc.objOfOnly([
      $_8rfcbxy7jepbvein.field('dom', 'dom', $_1zybmsy8jepbveix.strict(), $_7je55jyejepbvekc.objOfOnly([
        $_8rfcbxy7jepbvein.strict('tag'),
        $_8rfcbxy7jepbvein.defaulted('styles', {}),
        $_8rfcbxy7jepbvein.defaulted('classes', []),
        $_8rfcbxy7jepbvein.defaulted('attributes', {}),
        $_8rfcbxy7jepbvein.option('value'),
        $_8rfcbxy7jepbvein.option('innerHtml')
      ])),
      $_8rfcbxy7jepbvein.strict('components'),
      $_8rfcbxy7jepbvein.strict('uid'),
      $_8rfcbxy7jepbvein.defaulted('events', {}),
      $_8rfcbxy7jepbvein.defaulted('apis', $_167yw6wjjepbveag.constant({})),
      $_8rfcbxy7jepbvein.field('eventOrder', 'eventOrder', $_1zybmsy8jepbveix.mergeWith({
        'alloy.execute': [
          'disabling',
          'alloy.base.behaviour',
          'toggling'
        ],
        'alloy.focus': [
          'alloy.base.behaviour',
          'focusing',
          'keying'
        ],
        'alloy.system.init': [
          'alloy.base.behaviour',
          'disabling',
          'toggling',
          'representing'
        ],
        'input': [
          'alloy.base.behaviour',
          'representing',
          'streaming',
          'invalidating'
        ],
        'alloy.system.detached': [
          'alloy.base.behaviour',
          'representing'
        ]
      }), $_7je55jyejepbvekc.anyValue()),
      $_8rfcbxy7jepbvein.option('domModification'),
      $_ca0qsez6jepbvens.snapshot('originalSpec'),
      $_8rfcbxy7jepbvein.defaulted('debug.sketcher', 'unknown')
    ]), spec);
  };
  var getUid = function (info) {
    return $_f53w39xsjepbvefs.wrap($_5hkrl010yjepbvf0x.idAttr(), info.uid());
  };
  var toDefinition = function (info) {
    var base = {
      tag: info.dom().tag(),
      classes: info.dom().classes(),
      attributes: $_aaookwyjepbvebq.deepMerge(getUid(info), info.dom().attributes()),
      styles: info.dom().styles(),
      domChildren: $_227y8rwsjepbveb6.map(info.components(), function (comp) {
        return comp.element();
      })
    };
    return $_5k63xnyijepbvel4.nu($_aaookwyjepbvebq.deepMerge(base, info.dom().innerHtml().map(function (h) {
      return $_f53w39xsjepbvefs.wrap('innerHtml', h);
    }).getOr({}), info.dom().value().map(function (h) {
      return $_f53w39xsjepbvefs.wrap('value', h);
    }).getOr({})));
  };
  var toModification = function (info) {
    return info.domModification().fold(function () {
      return $_1rbjqxyhjepbveks.nu({});
    }, $_1rbjqxyhjepbveks.nu);
  };
  var toApis = function (info) {
    return info.apis();
  };
  var toEvents = function (info) {
    return info.events();
  };
  var $_7376sd135jepbvfi0 = {
    toInfo: toInfo,
    toDefinition: toDefinition,
    toModification: toModification,
    toApis: toApis,
    toEvents: toEvents
  };

  var add$3 = function (element, classes) {
    $_227y8rwsjepbveb6.each(classes, function (x) {
      $_cs8xnaynjepbvelr.add(element, x);
    });
  };
  var remove$6 = function (element, classes) {
    $_227y8rwsjepbveb6.each(classes, function (x) {
      $_cs8xnaynjepbvelr.remove(element, x);
    });
  };
  var toggle$3 = function (element, classes) {
    $_227y8rwsjepbveb6.each(classes, function (x) {
      $_cs8xnaynjepbvelr.toggle(element, x);
    });
  };
  var hasAll = function (element, classes) {
    return $_227y8rwsjepbveb6.forall(classes, function (clazz) {
      return $_cs8xnaynjepbvelr.has(element, clazz);
    });
  };
  var hasAny = function (element, classes) {
    return $_227y8rwsjepbveb6.exists(classes, function (clazz) {
      return $_cs8xnaynjepbvelr.has(element, clazz);
    });
  };
  var getNative = function (element) {
    var classList = element.dom().classList;
    var r = new Array(classList.length);
    for (var i = 0; i < classList.length; i++) {
      r[i] = classList.item(i);
    }
    return r;
  };
  var get$10 = function (element) {
    return $_dhclc0ypjepbvelv.supports(element) ? getNative(element) : $_dhclc0ypjepbvelv.get(element);
  };
  var $_f9xa8l137jepbvfj2 = {
    add: add$3,
    remove: remove$6,
    toggle: toggle$3,
    hasAll: hasAll,
    hasAny: hasAny,
    get: get$10
  };

  var getChildren = function (definition) {
    if (definition.domChildren().isSome() && definition.defChildren().isSome()) {
      throw new Error('Cannot specify children and child specs! Must be one or the other.\nDef: ' + $_5k63xnyijepbvel4.defToStr(definition));
    } else {
      return definition.domChildren().fold(function () {
        var defChildren = definition.defChildren().getOr([]);
        return $_227y8rwsjepbveb6.map(defChildren, renderDef);
      }, function (domChildren) {
        return domChildren;
      });
    }
  };
  var renderToDom = function (definition) {
    var subject = $_4pcs1kxfjepbvee2.fromTag(definition.tag());
    $_1sxky7xrjepbvefh.setAll(subject, definition.attributes().getOr({}));
    $_f9xa8l137jepbvfj2.add(subject, definition.classes().getOr([]));
    $_ct8mbo103jepbvesz.setAll(subject, definition.styles().getOr({}));
    $_g0wlavxojepbvef7.set(subject, definition.innerHtml().getOr(''));
    var children = getChildren(definition);
    $_78z69ixijepbveeb.append(subject, children);
    definition.value().each(function (value) {
      $_anfcxj12ejepbvfab.set(subject, value);
    });
    return subject;
  };
  var renderDef = function (spec) {
    var definition = $_5k63xnyijepbvel4.nu(spec);
    return renderToDom(definition);
  };
  var $_14cv2r136jepbvfij = { renderToDom: renderToDom };

  var build = function (spec) {
    var getMe = function () {
      return me;
    };
    var systemApi = Cell(NoContextApi(getMe));
    var info = $_7je55jyejepbvekc.getOrDie($_7376sd135jepbvfi0.toInfo($_aaookwyjepbvebq.deepMerge(spec, { behaviours: undefined })));
    var bBlob = $_66f54t12vjepbvffe.generate(spec);
    var bList = $_gdjyzu12wjepbvffp.getBehaviours(bBlob);
    var bData = $_gdjyzu12wjepbvffp.getData(bBlob);
    var definition = $_7376sd135jepbvfi0.toDefinition(info);
    var baseModification = { 'alloy.base.modification': $_7376sd135jepbvfi0.toModification(info) };
    var modification = $_48ns9y130jepbvfgj.combine(bData, baseModification, bList, definition).getOrDie();
    var modDefinition = $_1rbjqxyhjepbveks.merge(definition, modification);
    var item = $_14cv2r136jepbvfij.renderToDom(modDefinition);
    var baseEvents = { 'alloy.base.behaviour': $_7376sd135jepbvfi0.toEvents(info) };
    var events = $_5n38o4132jepbvfh7.combine(bData, info.eventOrder(), bList, baseEvents).getOrDie();
    var subcomponents = Cell(info.components());
    var connect = function (newApi) {
      systemApi.set(newApi);
    };
    var disconnect = function () {
      systemApi.set(NoContextApi(getMe));
    };
    var syncComponents = function () {
      var children = $_ginpy6x3jepbvece.children(item);
      var subs = $_227y8rwsjepbveb6.bind(children, function (child) {
        return systemApi.get().getByDom(child).fold(function () {
          return [];
        }, function (c) {
          return [c];
        });
      });
      subcomponents.set(subs);
    };
    var config = function (behaviour) {
      if (behaviour === $_dc94u710qjepbvey9.apiConfig())
        return info.apis();
      var b = bData;
      var f = $_bu3dt3wzjepbvebs.isFunction(b[behaviour.name()]) ? b[behaviour.name()] : function () {
        throw new Error('Could not find ' + behaviour.name() + ' in ' + $_3c4zqfydjepbvek9.stringify(spec, null, 2));
      };
      return f();
    };
    var hasConfigured = function (behaviour) {
      return $_bu3dt3wzjepbvebs.isFunction(bData[behaviour.name()]);
    };
    var readState = function (behaviourName) {
      return bData[behaviourName]().map(function (b) {
        return b.state.readState();
      }).getOr('not enabled');
    };
    var me = ComponentApi({
      getSystem: systemApi.get,
      config: config,
      hasConfigured: hasConfigured,
      spec: $_167yw6wjjepbveag.constant(spec),
      readState: readState,
      connect: connect,
      disconnect: disconnect,
      element: $_167yw6wjjepbveag.constant(item),
      syncComponents: syncComponents,
      components: subcomponents.get,
      events: $_167yw6wjjepbveag.constant(events)
    });
    return me;
  };
  var $_ak3boh12ujepbvfes = { build: build };

  var isRecursive = function (component, originator, target) {
    return $_6fsl8xx9jepbveda.eq(originator, component.element()) && !$_6fsl8xx9jepbveda.eq(originator, target);
  };
  var $_6dj0mg138jepbvfj8 = {
    events: $_81tpe0y4jepbvehy.derive([$_81tpe0y4jepbvehy.can($_alx3dcwhjepbvea8.focus(), function (component, simulatedEvent) {
        var originator = simulatedEvent.event().originator();
        var target = simulatedEvent.event().target();
        if (isRecursive(component, originator, target)) {
          console.warn($_alx3dcwhjepbvea8.focus() + ' did not get interpreted by the desired target. ' + '\nOriginator: ' + $_bx258xmjepbvef1.element(originator) + '\nTarget: ' + $_bx258xmjepbvef1.element(target) + '\nCheck the ' + $_alx3dcwhjepbvea8.focus() + ' event handlers');
          return false;
        } else {
          return true;
        }
      })])
  };

  var make$1 = function (spec) {
    return spec;
  };
  var $_abcxlg139jepbvfjd = { make: make$1 };

  var buildSubcomponents = function (spec) {
    var components = $_f53w39xsjepbvefs.readOr('components', [])(spec);
    return $_227y8rwsjepbveb6.map(components, build$1);
  };
  var buildFromSpec = function (userSpec) {
    var spec = $_abcxlg139jepbvfjd.make(userSpec);
    var components = buildSubcomponents(spec);
    var completeSpec = $_aaookwyjepbvebq.deepMerge($_6dj0mg138jepbvfj8, spec, $_f53w39xsjepbvefs.wrap('components', components));
    return Result.value($_ak3boh12ujepbvfes.build(completeSpec));
  };
  var text = function (textContent) {
    var element = $_4pcs1kxfjepbvee2.fromText(textContent);
    return external({ element: element });
  };
  var external = function (spec) {
    var extSpec = $_7je55jyejepbvekc.asStructOrDie('external.component', $_7je55jyejepbvekc.objOfOnly([
      $_8rfcbxy7jepbvein.strict('element'),
      $_8rfcbxy7jepbvein.option('uid')
    ]), spec);
    var systemApi = Cell(NoContextApi());
    var connect = function (newApi) {
      systemApi.set(newApi);
    };
    var disconnect = function () {
      systemApi.set(NoContextApi(function () {
        return me;
      }));
    };
    extSpec.uid().each(function (uid) {
      $_6keeyb10xjepbvf0l.writeOnly(extSpec.element(), uid);
    });
    var me = ComponentApi({
      getSystem: systemApi.get,
      config: Option.none,
      hasConfigured: $_167yw6wjjepbveag.constant(false),
      connect: connect,
      disconnect: disconnect,
      element: $_167yw6wjjepbveag.constant(extSpec.element()),
      spec: $_167yw6wjjepbveag.constant(spec),
      readState: $_167yw6wjjepbveag.constant('No state'),
      syncComponents: $_167yw6wjjepbveag.noop,
      components: $_167yw6wjjepbveag.constant([]),
      events: $_167yw6wjjepbveag.constant({})
    });
    return $_dc94u710qjepbvey9.premade(me);
  };
  var build$1 = function (rawUserSpec) {
    return $_dc94u710qjepbvey9.getPremade(rawUserSpec).fold(function () {
      var userSpecWithUid = $_aaookwyjepbvebq.deepMerge({ uid: $_6keeyb10xjepbvf0l.generate('') }, rawUserSpec);
      return buildFromSpec(userSpecWithUid).getOrDie();
    }, function (prebuilt) {
      return prebuilt;
    });
  };
  var $_etb0t512tjepbvfe4 = {
    build: build$1,
    premade: $_dc94u710qjepbvey9.premade,
    external: external,
    text: text
  };

  var hoverEvent = 'alloy.item-hover';
  var focusEvent = 'alloy.item-focus';
  var onHover = function (item) {
    if ($_5khawkytjepbvem5.search(item.element()).isNone() || Focusing.isFocused(item)) {
      if (!Focusing.isFocused(item))
        Focusing.focus(item);
      $_e4saacwgjepbvea0.emitWith(item, hoverEvent, { item: item });
    }
  };
  var onFocus = function (item) {
    $_e4saacwgjepbvea0.emitWith(item, focusEvent, { item: item });
  };
  var $_fhmjkn13djepbvfk1 = {
    hover: $_167yw6wjjepbveag.constant(hoverEvent),
    focus: $_167yw6wjjepbveag.constant(focusEvent),
    onHover: onHover,
    onFocus: onFocus
  };

  var builder = function (info) {
    return {
      dom: $_aaookwyjepbvebq.deepMerge(info.dom(), { attributes: { role: info.toggling().isSome() ? 'menuitemcheckbox' : 'menuitem' } }),
      behaviours: $_aaookwyjepbvebq.deepMerge($_9otgsgy2jepbveh4.derive([
        info.toggling().fold(Toggling.revoke, function (tConfig) {
          return Toggling.config($_aaookwyjepbvebq.deepMerge({ aria: { mode: 'checked' } }, tConfig));
        }),
        Focusing.config({
          ignore: info.ignoreFocus(),
          onFocus: function (component) {
            $_fhmjkn13djepbvfk1.onFocus(component);
          }
        }),
        Keying.config({ mode: 'execution' }),
        me.config({
          store: {
            mode: 'memory',
            initialValue: info.data()
          }
        })
      ]), info.itemBehaviours()),
      events: $_81tpe0y4jepbvehy.derive([
        $_81tpe0y4jepbvehy.runWithTarget($_alx3dcwhjepbvea8.tapOrClick(), $_e4saacwgjepbvea0.emitExecute),
        $_81tpe0y4jepbvehy.cutter($_e2bl11wijepbvead.mousedown()),
        $_81tpe0y4jepbvehy.run($_e2bl11wijepbvead.mouseover(), $_fhmjkn13djepbvfk1.onHover),
        $_81tpe0y4jepbvehy.run($_alx3dcwhjepbvea8.focusItem(), Focusing.focus)
      ]),
      components: info.components(),
      domModification: info.domModification()
    };
  };
  var schema$10 = [
    $_8rfcbxy7jepbvein.strict('data'),
    $_8rfcbxy7jepbvein.strict('components'),
    $_8rfcbxy7jepbvein.strict('dom'),
    $_8rfcbxy7jepbvein.option('toggling'),
    $_8rfcbxy7jepbvein.defaulted('itemBehaviours', {}),
    $_8rfcbxy7jepbvein.defaulted('ignoreFocus', false),
    $_8rfcbxy7jepbvein.defaulted('domModification', {}),
    $_ca0qsez6jepbvens.output('builder', builder)
  ];

  var builder$1 = function (detail) {
    return {
      dom: detail.dom(),
      components: detail.components(),
      events: $_81tpe0y4jepbvehy.derive([$_81tpe0y4jepbvehy.stopper($_alx3dcwhjepbvea8.focusItem())])
    };
  };
  var schema$11 = [
    $_8rfcbxy7jepbvein.strict('dom'),
    $_8rfcbxy7jepbvein.strict('components'),
    $_ca0qsez6jepbvens.output('builder', builder$1)
  ];

  var owner$2 = 'item-widget';
  var partTypes = [$_3jjkp510vjepbvezm.required({
      name: 'widget',
      overrides: function (detail) {
        return {
          behaviours: $_9otgsgy2jepbveh4.derive([me.config({
              store: {
                mode: 'manual',
                getValue: function (component) {
                  return detail.data();
                },
                setValue: function () {
                }
              }
            })])
        };
      }
    })];
  var $_5jtgez13gjepbvfkn = {
    owner: $_167yw6wjjepbveag.constant(owner$2),
    parts: $_167yw6wjjepbveag.constant(partTypes)
  };

  var builder$2 = function (info) {
    var subs = $_1n5d3m10tjepbveyq.substitutes($_5jtgez13gjepbvfkn.owner(), info, $_5jtgez13gjepbvfkn.parts());
    var components = $_1n5d3m10tjepbveyq.components($_5jtgez13gjepbvfkn.owner(), info, subs.internals());
    var focusWidget = function (component) {
      return $_1n5d3m10tjepbveyq.getPart(component, info, 'widget').map(function (widget) {
        Keying.focusIn(widget);
        return widget;
      });
    };
    var onHorizontalArrow = function (component, simulatedEvent) {
      return $_74vhyo108jepbveu0.inside(simulatedEvent.event().target()) ? Option.none() : function () {
        if (info.autofocus()) {
          simulatedEvent.setSource(component.element());
          return Option.none();
        } else {
          return Option.none();
        }
      }();
    };
    return $_aaookwyjepbvebq.deepMerge({
      dom: info.dom(),
      components: components,
      domModification: info.domModification(),
      events: $_81tpe0y4jepbvehy.derive([
        $_81tpe0y4jepbvehy.runOnExecute(function (component, simulatedEvent) {
          focusWidget(component).each(function (widget) {
            simulatedEvent.stop();
          });
        }),
        $_81tpe0y4jepbvehy.run($_e2bl11wijepbvead.mouseover(), $_fhmjkn13djepbvfk1.onHover),
        $_81tpe0y4jepbvehy.run($_alx3dcwhjepbvea8.focusItem(), function (component, simulatedEvent) {
          if (info.autofocus())
            focusWidget(component);
          else
            Focusing.focus(component);
        })
      ]),
      behaviours: $_9otgsgy2jepbveh4.derive([
        me.config({
          store: {
            mode: 'memory',
            initialValue: info.data()
          }
        }),
        Focusing.config({
          onFocus: function (component) {
            $_fhmjkn13djepbvfk1.onFocus(component);
          }
        }),
        Keying.config({
          mode: 'special',
          onLeft: onHorizontalArrow,
          onRight: onHorizontalArrow,
          onEscape: function (component, simulatedEvent) {
            if (!Focusing.isFocused(component) && !info.autofocus()) {
              Focusing.focus(component);
              return Option.some(true);
            } else if (info.autofocus()) {
              simulatedEvent.setSource(component.element());
              return Option.none();
            } else {
              return Option.none();
            }
          }
        })
      ])
    });
  };
  var schema$12 = [
    $_8rfcbxy7jepbvein.strict('uid'),
    $_8rfcbxy7jepbvein.strict('data'),
    $_8rfcbxy7jepbvein.strict('components'),
    $_8rfcbxy7jepbvein.strict('dom'),
    $_8rfcbxy7jepbvein.defaulted('autofocus', false),
    $_8rfcbxy7jepbvein.defaulted('domModification', {}),
    $_1n5d3m10tjepbveyq.defaultUidsSchema($_5jtgez13gjepbvfkn.parts()),
    $_ca0qsez6jepbvens.output('builder', builder$2)
  ];

  var itemSchema$1 = $_7je55jyejepbvekc.choose('type', {
    widget: schema$12,
    item: schema$10,
    separator: schema$11
  });
  var configureGrid = function (detail, movementInfo) {
    return {
      mode: 'flatgrid',
      selector: '.' + detail.markers().item(),
      initSize: {
        numColumns: movementInfo.initSize().numColumns(),
        numRows: movementInfo.initSize().numRows()
      },
      focusManager: detail.focusManager()
    };
  };
  var configureMenu = function (detail, movementInfo) {
    return {
      mode: 'menu',
      selector: '.' + detail.markers().item(),
      moveOnTab: movementInfo.moveOnTab(),
      focusManager: detail.focusManager()
    };
  };
  var parts = [$_3jjkp510vjepbvezm.group({
      factory: {
        sketch: function (spec) {
          var itemInfo = $_7je55jyejepbvekc.asStructOrDie('menu.spec item', itemSchema$1, spec);
          return itemInfo.builder()(itemInfo);
        }
      },
      name: 'items',
      unit: 'item',
      defaults: function (detail, u) {
        var fallbackUid = $_6keeyb10xjepbvf0l.generate('');
        return $_aaookwyjepbvebq.deepMerge({ uid: fallbackUid }, u);
      },
      overrides: function (detail, u) {
        return {
          type: u.type,
          ignoreFocus: detail.fakeFocus(),
          domModification: { classes: [detail.markers().item()] }
        };
      }
    })];
  var schema$13 = [
    $_8rfcbxy7jepbvein.strict('value'),
    $_8rfcbxy7jepbvein.strict('items'),
    $_8rfcbxy7jepbvein.strict('dom'),
    $_8rfcbxy7jepbvein.strict('components'),
    $_8rfcbxy7jepbvein.defaulted('eventOrder', {}),
    $_4fa1o810ojepbvexo.field('menuBehaviours', [
      Highlighting,
      me,
      Composing,
      Keying
    ]),
    $_8rfcbxy7jepbvein.defaultedOf('movement', {
      mode: 'menu',
      moveOnTab: true
    }, $_7je55jyejepbvekc.choose('mode', {
      grid: [
        $_ca0qsez6jepbvens.initSize(),
        $_ca0qsez6jepbvens.output('config', configureGrid)
      ],
      menu: [
        $_8rfcbxy7jepbvein.defaulted('moveOnTab', true),
        $_ca0qsez6jepbvens.output('config', configureMenu)
      ]
    })),
    $_ca0qsez6jepbvens.itemMarkers(),
    $_8rfcbxy7jepbvein.defaulted('fakeFocus', false),
    $_8rfcbxy7jepbvein.defaulted('focusManager', $_usnnrzrjepbverh.dom()),
    $_ca0qsez6jepbvens.onHandler('onHighlight')
  ];
  var $_a2v6ra13bjepbvfjh = {
    name: $_167yw6wjjepbveag.constant('Menu'),
    schema: $_167yw6wjjepbveag.constant(schema$13),
    parts: $_167yw6wjjepbveag.constant(parts)
  };

  var focusEvent$1 = 'alloy.menu-focus';
  var $_3bllpf13ijepbvfkz = { focus: $_167yw6wjjepbveag.constant(focusEvent$1) };

  var make$2 = function (detail, components, spec, externals) {
    return $_aaookwyjepbvebq.deepMerge({
      dom: $_aaookwyjepbvebq.deepMerge(detail.dom(), { attributes: { role: 'menu' } }),
      uid: detail.uid(),
      behaviours: $_aaookwyjepbvebq.deepMerge($_9otgsgy2jepbveh4.derive([
        Highlighting.config({
          highlightClass: detail.markers().selectedItem(),
          itemClass: detail.markers().item(),
          onHighlight: detail.onHighlight()
        }),
        me.config({
          store: {
            mode: 'memory',
            initialValue: detail.value()
          }
        }),
        Composing.config({ find: $_167yw6wjjepbveag.identity }),
        Keying.config(detail.movement().config()(detail, detail.movement()))
      ]), $_4fa1o810ojepbvexo.get(detail.menuBehaviours())),
      events: $_81tpe0y4jepbvehy.derive([
        $_81tpe0y4jepbvehy.run($_fhmjkn13djepbvfk1.focus(), function (menu, simulatedEvent) {
          var event = simulatedEvent.event();
          menu.getSystem().getByDom(event.target()).each(function (item) {
            Highlighting.highlight(menu, item);
            simulatedEvent.stop();
            $_e4saacwgjepbvea0.emitWith(menu, $_3bllpf13ijepbvfkz.focus(), {
              menu: menu,
              item: item
            });
          });
        }),
        $_81tpe0y4jepbvehy.run($_fhmjkn13djepbvfk1.hover(), function (menu, simulatedEvent) {
          var item = simulatedEvent.event().item();
          Highlighting.highlight(menu, item);
        })
      ]),
      components: components,
      eventOrder: detail.eventOrder()
    });
  };
  var $_f5bs2213hjepbvfkt = { make: make$2 };

  var Menu = $_bv7bve10pjepbvexx.composite({
    name: 'Menu',
    configFields: $_a2v6ra13bjepbvfjh.schema(),
    partFields: $_a2v6ra13bjepbvfjh.parts(),
    factory: $_f5bs2213hjepbvfkt.make
  });

  var preserve$2 = function (f, container) {
    var ownerDoc = $_ginpy6x3jepbvece.owner(container);
    var refocus = $_5khawkytjepbvem5.active(ownerDoc).bind(function (focused) {
      var hasFocus = function (elem) {
        return $_6fsl8xx9jepbveda.eq(focused, elem);
      };
      return hasFocus(container) ? Option.some(container) : $_g7dmbqyvjepbvemd.descendant(container, hasFocus);
    });
    var result = f(container);
    refocus.each(function (oldFocus) {
      $_5khawkytjepbvem5.active(ownerDoc).filter(function (newFocus) {
        return $_6fsl8xx9jepbveda.eq(newFocus, oldFocus);
      }).orThunk(function () {
        $_5khawkytjepbvem5.focus(oldFocus);
      });
    });
    return result;
  };
  var $_dbdpm913mjepbvflq = { preserve: preserve$2 };

  var set$7 = function (component, replaceConfig, replaceState, data) {
    $_1sujbrx1jepbvebx.detachChildren(component);
    $_dbdpm913mjepbvflq.preserve(function () {
      var children = $_227y8rwsjepbveb6.map(data, component.getSystem().build);
      $_227y8rwsjepbveb6.each(children, function (l) {
        $_1sujbrx1jepbvebx.attach(component, l);
      });
    }, component.element());
  };
  var insert = function (component, replaceConfig, insertion, childSpec) {
    var child = component.getSystem().build(childSpec);
    $_1sujbrx1jepbvebx.attachWith(component, child, insertion);
  };
  var append$2 = function (component, replaceConfig, replaceState, appendee) {
    insert(component, replaceConfig, $_fm1c56x2jepbvecb.append, appendee);
  };
  var prepend$2 = function (component, replaceConfig, replaceState, prependee) {
    insert(component, replaceConfig, $_fm1c56x2jepbvecb.prepend, prependee);
  };
  var remove$7 = function (component, replaceConfig, replaceState, removee) {
    var children = contents(component, replaceConfig);
    var foundChild = $_227y8rwsjepbveb6.find(children, function (child) {
      return $_6fsl8xx9jepbveda.eq(removee.element(), child.element());
    });
    foundChild.each($_1sujbrx1jepbvebx.detach);
  };
  var contents = function (component, replaceConfig) {
    return component.components();
  };
  var $_2jtllg13ljepbvflh = {
    append: append$2,
    prepend: prepend$2,
    remove: remove$7,
    set: set$7,
    contents: contents
  };

  var Replacing = $_9otgsgy2jepbveh4.create({
    fields: [],
    name: 'replacing',
    apis: $_2jtllg13ljepbvflh
  });

  var transpose = function (obj) {
    return $_1l8sbcx0jepbvebt.tupleMap(obj, function (v, k) {
      return {
        k: v,
        v: k
      };
    });
  };
  var trace = function (items, byItem, byMenu, finish) {
    return $_f53w39xsjepbvefs.readOptFrom(byMenu, finish).bind(function (triggerItem) {
      return $_f53w39xsjepbvefs.readOptFrom(items, triggerItem).bind(function (triggerMenu) {
        var rest = trace(items, byItem, byMenu, triggerMenu);
        return Option.some([triggerMenu].concat(rest));
      });
    }).getOr([]);
  };
  var generate$5 = function (menus, expansions) {
    var items = {};
    $_1l8sbcx0jepbvebt.each(menus, function (menuItems, menu) {
      $_227y8rwsjepbveb6.each(menuItems, function (item) {
        items[item] = menu;
      });
    });
    var byItem = expansions;
    var byMenu = transpose(expansions);
    var menuPaths = $_1l8sbcx0jepbvebt.map(byMenu, function (triggerItem, submenu) {
      return [submenu].concat(trace(items, byItem, byMenu, submenu));
    });
    return $_1l8sbcx0jepbvebt.map(items, function (path) {
      return $_f53w39xsjepbvefs.readOptFrom(menuPaths, path).getOr([path]);
    });
  };
  var $_7j5qo913pjepbvfn8 = { generate: generate$5 };

  function LayeredState () {
    var expansions = Cell({});
    var menus = Cell({});
    var paths = Cell({});
    var primary = Cell(Option.none());
    var toItemValues = Cell($_167yw6wjjepbveag.constant([]));
    var clear = function () {
      expansions.set({});
      menus.set({});
      paths.set({});
      primary.set(Option.none());
    };
    var isClear = function () {
      return primary.get().isNone();
    };
    var setContents = function (sPrimary, sMenus, sExpansions, sToItemValues) {
      primary.set(Option.some(sPrimary));
      expansions.set(sExpansions);
      menus.set(sMenus);
      toItemValues.set(sToItemValues);
      var menuValues = sToItemValues(sMenus);
      var sPaths = $_7j5qo913pjepbvfn8.generate(menuValues, sExpansions);
      paths.set(sPaths);
    };
    var expand = function (itemValue) {
      return $_f53w39xsjepbvefs.readOptFrom(expansions.get(), itemValue).map(function (menu) {
        var current = $_f53w39xsjepbvefs.readOptFrom(paths.get(), itemValue).getOr([]);
        return [menu].concat(current);
      });
    };
    var collapse = function (itemValue) {
      return $_f53w39xsjepbvefs.readOptFrom(paths.get(), itemValue).bind(function (path) {
        return path.length > 1 ? Option.some(path.slice(1)) : Option.none();
      });
    };
    var refresh = function (itemValue) {
      return $_f53w39xsjepbvefs.readOptFrom(paths.get(), itemValue);
    };
    var lookupMenu = function (menuValue) {
      return $_f53w39xsjepbvefs.readOptFrom(menus.get(), menuValue);
    };
    var otherMenus = function (path) {
      var menuValues = toItemValues.get()(menus.get());
      return $_227y8rwsjepbveb6.difference($_1l8sbcx0jepbvebt.keys(menuValues), path);
    };
    var getPrimary = function () {
      return primary.get().bind(lookupMenu);
    };
    var getMenus = function () {
      return menus.get();
    };
    return {
      setContents: setContents,
      expand: expand,
      refresh: refresh,
      collapse: collapse,
      lookupMenu: lookupMenu,
      otherMenus: otherMenus,
      getPrimary: getPrimary,
      getMenus: getMenus,
      clear: clear,
      isClear: isClear
    };
  }

  var make$3 = function (detail, rawUiSpec) {
    var buildMenus = function (container, menus) {
      return $_1l8sbcx0jepbvebt.map(menus, function (spec, name) {
        var data = Menu.sketch($_aaookwyjepbvebq.deepMerge(spec, {
          value: name,
          items: spec.items,
          markers: $_f53w39xsjepbvefs.narrow(rawUiSpec.markers, [
            'item',
            'selectedItem'
          ]),
          fakeFocus: detail.fakeFocus(),
          onHighlight: detail.onHighlight(),
          focusManager: detail.fakeFocus() ? $_usnnrzrjepbverh.highlights() : $_usnnrzrjepbverh.dom()
        }));
        return container.getSystem().build(data);
      });
    };
    var state = LayeredState();
    var setup = function (container) {
      var componentMap = buildMenus(container, detail.data().menus());
      state.setContents(detail.data().primary(), componentMap, detail.data().expansions(), function (sMenus) {
        return toMenuValues(container, sMenus);
      });
      return state.getPrimary();
    };
    var getItemValue = function (item) {
      return me.getValue(item).value;
    };
    var toMenuValues = function (container, sMenus) {
      return $_1l8sbcx0jepbvebt.map(detail.data().menus(), function (data, menuName) {
        return $_227y8rwsjepbveb6.bind(data.items, function (item) {
          return item.type === 'separator' ? [] : [item.data.value];
        });
      });
    };
    var setActiveMenu = function (container, menu) {
      Highlighting.highlight(container, menu);
      Highlighting.getHighlighted(menu).orThunk(function () {
        return Highlighting.getFirst(menu);
      }).each(function (item) {
        $_e4saacwgjepbvea0.dispatch(container, item.element(), $_alx3dcwhjepbvea8.focusItem());
      });
    };
    var getMenus = function (state, menuValues) {
      return $_4ymgfmy0jepbveh0.cat($_227y8rwsjepbveb6.map(menuValues, state.lookupMenu));
    };
    var updateMenuPath = function (container, state, path) {
      return Option.from(path[0]).bind(state.lookupMenu).map(function (activeMenu) {
        var rest = getMenus(state, path.slice(1));
        $_227y8rwsjepbveb6.each(rest, function (r) {
          $_cs8xnaynjepbvelr.add(r.element(), detail.markers().backgroundMenu());
        });
        if (!$_eqayqzxjjepbveeh.inBody(activeMenu.element())) {
          Replacing.append(container, $_etb0t512tjepbvfe4.premade(activeMenu));
        }
        $_f9xa8l137jepbvfj2.remove(activeMenu.element(), [detail.markers().backgroundMenu()]);
        setActiveMenu(container, activeMenu);
        var others = getMenus(state, state.otherMenus(path));
        $_227y8rwsjepbveb6.each(others, function (o) {
          $_f9xa8l137jepbvfj2.remove(o.element(), [detail.markers().backgroundMenu()]);
          if (!detail.stayInDom())
            Replacing.remove(container, o);
        });
        return activeMenu;
      });
    };
    var expandRight = function (container, item) {
      var value = getItemValue(item);
      return state.expand(value).bind(function (path) {
        Option.from(path[0]).bind(state.lookupMenu).each(function (activeMenu) {
          if (!$_eqayqzxjjepbveeh.inBody(activeMenu.element())) {
            Replacing.append(container, $_etb0t512tjepbvfe4.premade(activeMenu));
          }
          detail.onOpenSubmenu()(container, item, activeMenu);
          Highlighting.highlightFirst(activeMenu);
        });
        return updateMenuPath(container, state, path);
      });
    };
    var collapseLeft = function (container, item) {
      var value = getItemValue(item);
      return state.collapse(value).bind(function (path) {
        return updateMenuPath(container, state, path).map(function (activeMenu) {
          detail.onCollapseMenu()(container, item, activeMenu);
          return activeMenu;
        });
      });
    };
    var updateView = function (container, item) {
      var value = getItemValue(item);
      return state.refresh(value).bind(function (path) {
        return updateMenuPath(container, state, path);
      });
    };
    var onRight = function (container, item) {
      return $_74vhyo108jepbveu0.inside(item.element()) ? Option.none() : expandRight(container, item);
    };
    var onLeft = function (container, item) {
      return $_74vhyo108jepbveu0.inside(item.element()) ? Option.none() : collapseLeft(container, item);
    };
    var onEscape = function (container, item) {
      return collapseLeft(container, item).orThunk(function () {
        return detail.onEscape()(container, item);
      });
    };
    var keyOnItem = function (f) {
      return function (container, simulatedEvent) {
        return $_94ndqzxjepbvesc.closest(simulatedEvent.getSource(), '.' + detail.markers().item()).bind(function (target) {
          return container.getSystem().getByDom(target).bind(function (item) {
            return f(container, item);
          });
        });
      };
    };
    var events = $_81tpe0y4jepbvehy.derive([
      $_81tpe0y4jepbvehy.run($_3bllpf13ijepbvfkz.focus(), function (sandbox, simulatedEvent) {
        var menu = simulatedEvent.event().menu();
        Highlighting.highlight(sandbox, menu);
      }),
      $_81tpe0y4jepbvehy.runOnExecute(function (sandbox, simulatedEvent) {
        var target = simulatedEvent.event().target();
        return sandbox.getSystem().getByDom(target).bind(function (item) {
          var itemValue = getItemValue(item);
          if (itemValue.indexOf('collapse-item') === 0) {
            return collapseLeft(sandbox, item);
          }
          return expandRight(sandbox, item).orThunk(function () {
            return detail.onExecute()(sandbox, item);
          });
        });
      }),
      $_81tpe0y4jepbvehy.runOnAttached(function (container, simulatedEvent) {
        setup(container).each(function (primary) {
          Replacing.append(container, $_etb0t512tjepbvfe4.premade(primary));
          if (detail.openImmediately()) {
            setActiveMenu(container, primary);
            detail.onOpenMenu()(container, primary);
          }
        });
      })
    ].concat(detail.navigateOnHover() ? [$_81tpe0y4jepbvehy.run($_fhmjkn13djepbvfk1.hover(), function (sandbox, simulatedEvent) {
        var item = simulatedEvent.event().item();
        updateView(sandbox, item);
        expandRight(sandbox, item);
        detail.onHover()(sandbox, item);
      })] : []));
    var collapseMenuApi = function (container) {
      Highlighting.getHighlighted(container).each(function (currentMenu) {
        Highlighting.getHighlighted(currentMenu).each(function (currentItem) {
          collapseLeft(container, currentItem);
        });
      });
    };
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      behaviours: $_aaookwyjepbvebq.deepMerge($_9otgsgy2jepbveh4.derive([
        Keying.config({
          mode: 'special',
          onRight: keyOnItem(onRight),
          onLeft: keyOnItem(onLeft),
          onEscape: keyOnItem(onEscape),
          focusIn: function (container, keyInfo) {
            state.getPrimary().each(function (primary) {
              $_e4saacwgjepbvea0.dispatch(container, primary.element(), $_alx3dcwhjepbvea8.focusItem());
            });
          }
        }),
        Highlighting.config({
          highlightClass: detail.markers().selectedMenu(),
          itemClass: detail.markers().menu()
        }),
        Composing.config({
          find: function (container) {
            return Highlighting.getHighlighted(container);
          }
        }),
        Replacing.config({})
      ]), $_4fa1o810ojepbvexo.get(detail.tmenuBehaviours())),
      eventOrder: detail.eventOrder(),
      apis: { collapseMenu: collapseMenuApi },
      events: events
    };
  };
  var $_faik6313njepbvfm2 = {
    make: make$3,
    collapseItem: $_167yw6wjjepbveag.constant('collapse-item')
  };

  var tieredData = function (primary, menus, expansions) {
    return {
      primary: primary,
      menus: menus,
      expansions: expansions
    };
  };
  var singleData = function (name, menu) {
    return {
      primary: name,
      menus: $_f53w39xsjepbvefs.wrap(name, menu),
      expansions: {}
    };
  };
  var collapseItem = function (text) {
    return {
      value: $_7oey8810rjepbveyh.generate($_faik6313njepbvfm2.collapseItem()),
      text: text
    };
  };
  var TieredMenu = $_bv7bve10pjepbvexx.single({
    name: 'TieredMenu',
    configFields: [
      $_ca0qsez6jepbvens.onStrictKeyboardHandler('onExecute'),
      $_ca0qsez6jepbvens.onStrictKeyboardHandler('onEscape'),
      $_ca0qsez6jepbvens.onStrictHandler('onOpenMenu'),
      $_ca0qsez6jepbvens.onStrictHandler('onOpenSubmenu'),
      $_ca0qsez6jepbvens.onHandler('onCollapseMenu'),
      $_8rfcbxy7jepbvein.defaulted('openImmediately', true),
      $_8rfcbxy7jepbvein.strictObjOf('data', [
        $_8rfcbxy7jepbvein.strict('primary'),
        $_8rfcbxy7jepbvein.strict('menus'),
        $_8rfcbxy7jepbvein.strict('expansions')
      ]),
      $_8rfcbxy7jepbvein.defaulted('fakeFocus', false),
      $_ca0qsez6jepbvens.onHandler('onHighlight'),
      $_ca0qsez6jepbvens.onHandler('onHover'),
      $_ca0qsez6jepbvens.tieredMenuMarkers(),
      $_8rfcbxy7jepbvein.strict('dom'),
      $_8rfcbxy7jepbvein.defaulted('navigateOnHover', true),
      $_8rfcbxy7jepbvein.defaulted('stayInDom', false),
      $_4fa1o810ojepbvexo.field('tmenuBehaviours', [
        Keying,
        Highlighting,
        Composing,
        Replacing
      ]),
      $_8rfcbxy7jepbvein.defaulted('eventOrder', {})
    ],
    apis: {
      collapseMenu: function (apis, tmenu) {
        apis.collapseMenu(tmenu);
      }
    },
    factory: $_faik6313njepbvfm2.make,
    extraApis: {
      tieredData: tieredData,
      singleData: singleData,
      collapseItem: collapseItem
    }
  });

  var findRoute = function (component, transConfig, transState, route) {
    return $_f53w39xsjepbvefs.readOptFrom(transConfig.routes(), route.start()).map($_167yw6wjjepbveag.apply).bind(function (sConfig) {
      return $_f53w39xsjepbvefs.readOptFrom(sConfig, route.destination()).map($_167yw6wjjepbveag.apply);
    });
  };
  var getTransition = function (comp, transConfig, transState) {
    var route = getCurrentRoute(comp, transConfig, transState);
    return route.bind(function (r) {
      return getTransitionOf(comp, transConfig, transState, r);
    });
  };
  var getTransitionOf = function (comp, transConfig, transState, route) {
    return findRoute(comp, transConfig, transState, route).bind(function (r) {
      return r.transition().map(function (t) {
        return {
          transition: $_167yw6wjjepbveag.constant(t),
          route: $_167yw6wjjepbveag.constant(r)
        };
      });
    });
  };
  var disableTransition = function (comp, transConfig, transState) {
    getTransition(comp, transConfig, transState).each(function (routeTransition) {
      var t = routeTransition.transition();
      $_cs8xnaynjepbvelr.remove(comp.element(), t.transitionClass());
      $_1sxky7xrjepbvefh.remove(comp.element(), transConfig.destinationAttr());
    });
  };
  var getNewRoute = function (comp, transConfig, transState, destination) {
    return {
      start: $_167yw6wjjepbveag.constant($_1sxky7xrjepbvefh.get(comp.element(), transConfig.stateAttr())),
      destination: $_167yw6wjjepbveag.constant(destination)
    };
  };
  var getCurrentRoute = function (comp, transConfig, transState) {
    var el = comp.element();
    return $_1sxky7xrjepbvefh.has(el, transConfig.destinationAttr()) ? Option.some({
      start: $_167yw6wjjepbveag.constant($_1sxky7xrjepbvefh.get(comp.element(), transConfig.stateAttr())),
      destination: $_167yw6wjjepbveag.constant($_1sxky7xrjepbvefh.get(comp.element(), transConfig.destinationAttr()))
    }) : Option.none();
  };
  var jumpTo = function (comp, transConfig, transState, destination) {
    disableTransition(comp, transConfig, transState);
    if ($_1sxky7xrjepbvefh.has(comp.element(), transConfig.stateAttr()) && $_1sxky7xrjepbvefh.get(comp.element(), transConfig.stateAttr()) !== destination)
      transConfig.onFinish()(comp, destination);
    $_1sxky7xrjepbvefh.set(comp.element(), transConfig.stateAttr(), destination);
  };
  var fasttrack = function (comp, transConfig, transState, destination) {
    if ($_1sxky7xrjepbvefh.has(comp.element(), transConfig.destinationAttr())) {
      $_1sxky7xrjepbvefh.set(comp.element(), transConfig.stateAttr(), $_1sxky7xrjepbvefh.get(comp.element(), transConfig.destinationAttr()));
      $_1sxky7xrjepbvefh.remove(comp.element(), transConfig.destinationAttr());
    }
  };
  var progressTo = function (comp, transConfig, transState, destination) {
    fasttrack(comp, transConfig, transState, destination);
    var route = getNewRoute(comp, transConfig, transState, destination);
    getTransitionOf(comp, transConfig, transState, route).fold(function () {
      jumpTo(comp, transConfig, transState, destination);
    }, function (routeTransition) {
      disableTransition(comp, transConfig, transState);
      var t = routeTransition.transition();
      $_cs8xnaynjepbvelr.add(comp.element(), t.transitionClass());
      $_1sxky7xrjepbvefh.set(comp.element(), transConfig.destinationAttr(), destination);
    });
  };
  var getState = function (comp, transConfig, transState) {
    var e = comp.element();
    return $_1sxky7xrjepbvefh.has(e, transConfig.stateAttr()) ? Option.some($_1sxky7xrjepbvefh.get(e, transConfig.stateAttr())) : Option.none();
  };
  var $_7s3kj513sjepbvfnw = {
    findRoute: findRoute,
    disableTransition: disableTransition,
    getCurrentRoute: getCurrentRoute,
    jumpTo: jumpTo,
    progressTo: progressTo,
    getState: getState
  };

  var events$8 = function (transConfig, transState) {
    return $_81tpe0y4jepbvehy.derive([
      $_81tpe0y4jepbvehy.run($_e2bl11wijepbvead.transitionend(), function (component, simulatedEvent) {
        var raw = simulatedEvent.event().raw();
        $_7s3kj513sjepbvfnw.getCurrentRoute(component, transConfig, transState).each(function (route) {
          $_7s3kj513sjepbvfnw.findRoute(component, transConfig, transState, route).each(function (rInfo) {
            rInfo.transition().each(function (rTransition) {
              if (raw.propertyName === rTransition.property()) {
                $_7s3kj513sjepbvfnw.jumpTo(component, transConfig, transState, route.destination());
                transConfig.onTransition()(component, route);
              }
            });
          });
        });
      }),
      $_81tpe0y4jepbvehy.runOnAttached(function (comp, se) {
        $_7s3kj513sjepbvfnw.jumpTo(comp, transConfig, transState, transConfig.initialState());
      })
    ]);
  };
  var $_dfw5zo13rjepbvfnt = { events: events$8 };

  var TransitionSchema = [
    $_8rfcbxy7jepbvein.defaulted('destinationAttr', 'data-transitioning-destination'),
    $_8rfcbxy7jepbvein.defaulted('stateAttr', 'data-transitioning-state'),
    $_8rfcbxy7jepbvein.strict('initialState'),
    $_ca0qsez6jepbvens.onHandler('onTransition'),
    $_ca0qsez6jepbvens.onHandler('onFinish'),
    $_8rfcbxy7jepbvein.strictOf('routes', $_7je55jyejepbvekc.setOf(Result.value, $_7je55jyejepbvekc.setOf(Result.value, $_7je55jyejepbvekc.objOfOnly([$_8rfcbxy7jepbvein.optionObjOfOnly('transition', [
        $_8rfcbxy7jepbvein.strict('property'),
        $_8rfcbxy7jepbvein.strict('transitionClass')
      ])]))))
  ];

  var createRoutes = function (routes) {
    var r = {};
    $_1l8sbcx0jepbvebt.each(routes, function (v, k) {
      var waypoints = k.split('<->');
      r[waypoints[0]] = $_f53w39xsjepbvefs.wrap(waypoints[1], v);
      r[waypoints[1]] = $_f53w39xsjepbvefs.wrap(waypoints[0], v);
    });
    return r;
  };
  var createBistate = function (first, second, transitions) {
    return $_f53w39xsjepbvefs.wrapAll([
      {
        key: first,
        value: $_f53w39xsjepbvefs.wrap(second, transitions)
      },
      {
        key: second,
        value: $_f53w39xsjepbvefs.wrap(first, transitions)
      }
    ]);
  };
  var createTristate = function (first, second, third, transitions) {
    return $_f53w39xsjepbvefs.wrapAll([
      {
        key: first,
        value: $_f53w39xsjepbvefs.wrapAll([
          {
            key: second,
            value: transitions
          },
          {
            key: third,
            value: transitions
          }
        ])
      },
      {
        key: second,
        value: $_f53w39xsjepbvefs.wrapAll([
          {
            key: first,
            value: transitions
          },
          {
            key: third,
            value: transitions
          }
        ])
      },
      {
        key: third,
        value: $_f53w39xsjepbvefs.wrapAll([
          {
            key: first,
            value: transitions
          },
          {
            key: second,
            value: transitions
          }
        ])
      }
    ]);
  };
  var Transitioning = $_9otgsgy2jepbveh4.create({
    fields: TransitionSchema,
    name: 'transitioning',
    active: $_dfw5zo13rjepbvfnt,
    apis: $_7s3kj513sjepbvfnw,
    extra: {
      createRoutes: createRoutes,
      createBistate: createBistate,
      createTristate: createTristate
    }
  });

  var scrollable = $_3fme06zejepbvepj.resolve('scrollable');
  var register = function (element) {
    $_cs8xnaynjepbvelr.add(element, scrollable);
  };
  var deregister = function (element) {
    $_cs8xnaynjepbvelr.remove(element, scrollable);
  };
  var $_62bvz013ujepbvfoi = {
    register: register,
    deregister: deregister,
    scrollable: $_167yw6wjjepbveag.constant(scrollable)
  };

  var getValue$4 = function (item) {
    return $_f53w39xsjepbvefs.readOptFrom(item, 'format').getOr(item.title);
  };
  var convert$1 = function (formats, memMenuThunk) {
    var mainMenu = makeMenu('Styles', [].concat($_227y8rwsjepbveb6.map(formats.items, function (k) {
      return makeItem(getValue$4(k), k.title, k.isSelected(), k.getPreview(), $_f53w39xsjepbvefs.hasKey(formats.expansions, getValue$4(k)));
    })), memMenuThunk, false);
    var submenus = $_1l8sbcx0jepbvebt.map(formats.menus, function (menuItems, menuName) {
      var items = $_227y8rwsjepbveb6.map(menuItems, function (item) {
        return makeItem(getValue$4(item), item.title, item.isSelected !== undefined ? item.isSelected() : false, item.getPreview !== undefined ? item.getPreview() : '', $_f53w39xsjepbvefs.hasKey(formats.expansions, getValue$4(item)));
      });
      return makeMenu(menuName, items, memMenuThunk, true);
    });
    var menus = $_aaookwyjepbvebq.deepMerge(submenus, $_f53w39xsjepbvefs.wrap('styles', mainMenu));
    var tmenu = TieredMenu.tieredData('styles', menus, formats.expansions);
    return { tmenu: tmenu };
  };
  var makeItem = function (value, text, selected, preview, isMenu) {
    return {
      data: {
        value: value,
        text: text
      },
      type: 'item',
      dom: {
        tag: 'div',
        classes: isMenu ? [$_3fme06zejepbvepj.resolve('styles-item-is-menu')] : []
      },
      toggling: {
        toggleOnExecute: false,
        toggleClass: $_3fme06zejepbvepj.resolve('format-matches'),
        selected: selected
      },
      itemBehaviours: $_9otgsgy2jepbveh4.derive(isMenu ? [] : [$_bqtojizdjepbvepe.format(value, function (comp, status) {
          var toggle = status ? Toggling.on : Toggling.off;
          toggle(comp);
        })]),
      components: [{
          dom: {
            tag: 'div',
            attributes: { style: preview },
            innerHtml: text
          }
        }]
    };
  };
  var makeMenu = function (value, items, memMenuThunk, collapsable) {
    return {
      value: value,
      dom: { tag: 'div' },
      components: [
        Button.sketch({
          dom: {
            tag: 'div',
            classes: [$_3fme06zejepbvepj.resolve('styles-collapser')]
          },
          components: collapsable ? [
            {
              dom: {
                tag: 'span',
                classes: [$_3fme06zejepbvepj.resolve('styles-collapse-icon')]
              }
            },
            $_etb0t512tjepbvfe4.text(value)
          ] : [$_etb0t512tjepbvfe4.text(value)],
          action: function (item) {
            if (collapsable) {
              var comp = memMenuThunk().get(item);
              TieredMenu.collapseMenu(comp);
            }
          }
        }),
        {
          dom: {
            tag: 'div',
            classes: [$_3fme06zejepbvepj.resolve('styles-menu-items-container')]
          },
          components: [Menu.parts().items({})],
          behaviours: $_9otgsgy2jepbveh4.derive([$_c3kqad126jepbvf94.config('adhoc-scrollable-menu', [
              $_81tpe0y4jepbvehy.runOnAttached(function (component, simulatedEvent) {
                $_ct8mbo103jepbvesz.set(component.element(), 'overflow-y', 'auto');
                $_ct8mbo103jepbvesz.set(component.element(), '-webkit-overflow-scrolling', 'touch');
                $_62bvz013ujepbvfoi.register(component.element());
              }),
              $_81tpe0y4jepbvehy.runOnDetached(function (component) {
                $_ct8mbo103jepbvesz.remove(component.element(), 'overflow-y');
                $_ct8mbo103jepbvesz.remove(component.element(), '-webkit-overflow-scrolling');
                $_62bvz013ujepbvfoi.deregister(component.element());
              })
            ])])
        }
      ],
      items: items,
      menuBehaviours: $_9otgsgy2jepbveh4.derive([Transitioning.config({
          initialState: 'after',
          routes: Transitioning.createTristate('before', 'current', 'after', {
            transition: {
              property: 'transform',
              transitionClass: 'transitioning'
            }
          })
        })])
    };
  };
  var sketch$9 = function (settings) {
    var dataset = convert$1(settings.formats, function () {
      return memMenu;
    });
    var memMenu = $_2ml82x11rjepbvf6k.record(TieredMenu.sketch({
      dom: {
        tag: 'div',
        classes: [$_3fme06zejepbvepj.resolve('styles-menu')]
      },
      components: [],
      fakeFocus: true,
      stayInDom: true,
      onExecute: function (tmenu, item) {
        var v = me.getValue(item);
        settings.handle(item, v.value);
      },
      onEscape: function () {
      },
      onOpenMenu: function (container, menu) {
        var w = $_j3x6211kjepbvf58.get(container.element());
        $_j3x6211kjepbvf58.set(menu.element(), w);
        Transitioning.jumpTo(menu, 'current');
      },
      onOpenSubmenu: function (container, item, submenu) {
        var w = $_j3x6211kjepbvf58.get(container.element());
        var menu = $_94ndqzxjepbvesc.ancestor(item.element(), '[role="menu"]').getOrDie('hacky');
        var menuComp = container.getSystem().getByDom(menu).getOrDie();
        $_j3x6211kjepbvf58.set(submenu.element(), w);
        Transitioning.progressTo(menuComp, 'before');
        Transitioning.jumpTo(submenu, 'after');
        Transitioning.progressTo(submenu, 'current');
      },
      onCollapseMenu: function (container, item, menu) {
        var submenu = $_94ndqzxjepbvesc.ancestor(item.element(), '[role="menu"]').getOrDie('hacky');
        var submenuComp = container.getSystem().getByDom(submenu).getOrDie();
        Transitioning.progressTo(submenuComp, 'after');
        Transitioning.progressTo(menu, 'current');
      },
      navigateOnHover: false,
      openImmediately: true,
      data: dataset.tmenu,
      markers: {
        backgroundMenu: $_3fme06zejepbvepj.resolve('styles-background-menu'),
        menu: $_3fme06zejepbvepj.resolve('styles-menu'),
        selectedMenu: $_3fme06zejepbvepj.resolve('styles-selected-menu'),
        item: $_3fme06zejepbvepj.resolve('styles-item'),
        selectedItem: $_3fme06zejepbvepj.resolve('styles-selected-item')
      }
    }));
    return memMenu.asSpec();
  };
  var $_anydf112sjepbvfd5 = { sketch: sketch$9 };

  var getFromExpandingItem = function (item) {
    var newItem = $_aaookwyjepbvebq.deepMerge($_f53w39xsjepbvefs.exclude(item, ['items']), { menu: true });
    var rest = expand(item.items);
    var newMenus = $_aaookwyjepbvebq.deepMerge(rest.menus, $_f53w39xsjepbvefs.wrap(item.title, rest.items));
    var newExpansions = $_aaookwyjepbvebq.deepMerge(rest.expansions, $_f53w39xsjepbvefs.wrap(item.title, item.title));
    return {
      item: newItem,
      menus: newMenus,
      expansions: newExpansions
    };
  };
  var getFromItem = function (item) {
    return $_f53w39xsjepbvefs.hasKey(item, 'items') ? getFromExpandingItem(item) : {
      item: item,
      menus: {},
      expansions: {}
    };
  };
  var expand = function (items) {
    return $_227y8rwsjepbveb6.foldr(items, function (acc, item) {
      var newData = getFromItem(item);
      return {
        menus: $_aaookwyjepbvebq.deepMerge(acc.menus, newData.menus),
        items: [newData.item].concat(acc.items),
        expansions: $_aaookwyjepbvebq.deepMerge(acc.expansions, newData.expansions)
      };
    }, {
      menus: {},
      expansions: {},
      items: []
    });
  };
  var $_63qc9f13vjepbvfon = { expand: expand };

  var register$1 = function (editor, settings) {
    var isSelectedFor = function (format) {
      return function () {
        return editor.formatter.match(format);
      };
    };
    var getPreview = function (format) {
      return function () {
        var styles = editor.formatter.getCssText(format);
        return styles;
      };
    };
    var enrichSupported = function (item) {
      return $_aaookwyjepbvebq.deepMerge(item, {
        isSelected: isSelectedFor(item.format),
        getPreview: getPreview(item.format)
      });
    };
    var enrichMenu = function (item) {
      return $_aaookwyjepbvebq.deepMerge(item, {
        isSelected: $_167yw6wjjepbveag.constant(false),
        getPreview: $_167yw6wjjepbveag.constant('')
      });
    };
    var enrichCustom = function (item) {
      var formatName = $_7oey8810rjepbveyh.generate(item.title);
      var newItem = $_aaookwyjepbvebq.deepMerge(item, {
        format: formatName,
        isSelected: isSelectedFor(formatName),
        getPreview: getPreview(formatName)
      });
      editor.formatter.register(formatName, newItem);
      return newItem;
    };
    var formats = $_f53w39xsjepbvefs.readOptFrom(settings, 'style_formats').getOr(DefaultStyleFormats);
    var doEnrich = function (items) {
      return $_227y8rwsjepbveb6.map(items, function (item) {
        if ($_f53w39xsjepbvefs.hasKey(item, 'items')) {
          var newItems = doEnrich(item.items);
          return $_aaookwyjepbvebq.deepMerge(enrichMenu(item), { items: newItems });
        } else if ($_f53w39xsjepbvefs.hasKey(item, 'format')) {
          return enrichSupported(item);
        } else {
          return enrichCustom(item);
        }
      });
    };
    return doEnrich(formats);
  };
  var prune = function (editor, formats) {
    var doPrune = function (items) {
      return $_227y8rwsjepbveb6.bind(items, function (item) {
        if (item.items !== undefined) {
          var newItems = doPrune(item.items);
          return newItems.length > 0 ? [item] : [];
        } else {
          var keep = $_f53w39xsjepbvefs.hasKey(item, 'format') ? editor.formatter.canApply(item.format) : true;
          return keep ? [item] : [];
        }
      });
    };
    var prunedItems = doPrune(formats);
    return $_63qc9f13vjepbvfon.expand(prunedItems);
  };
  var ui = function (editor, formats, onDone) {
    var pruned = prune(editor, formats);
    return $_anydf112sjepbvfd5.sketch({
      formats: pruned,
      handle: function (item, value) {
        editor.undoManager.transact(function () {
          if (Toggling.isOn(item)) {
            editor.formatter.remove(value);
          } else {
            editor.formatter.apply(value);
          }
        });
        onDone();
      }
    });
  };
  var $_4n8izg12qjepbvfcs = {
    register: register$1,
    ui: ui
  };

  var defaults = [
    'undo',
    'bold',
    'italic',
    'link',
    'image',
    'bullist',
    'styleselect'
  ];
  var extract$1 = function (rawToolbar) {
    var toolbar = rawToolbar.replace(/\|/g, ' ').trim();
    return toolbar.length > 0 ? toolbar.split(/\s+/) : [];
  };
  var identifyFromArray = function (toolbar) {
    return $_227y8rwsjepbveb6.bind(toolbar, function (item) {
      return $_bu3dt3wzjepbvebs.isArray(item) ? identifyFromArray(item) : extract$1(item);
    });
  };
  var identify = function (settings) {
    var toolbar = settings.toolbar !== undefined ? settings.toolbar : defaults;
    return $_bu3dt3wzjepbvebs.isArray(toolbar) ? identifyFromArray(toolbar) : extract$1(toolbar);
  };
  var setup = function (realm, editor) {
    var commandSketch = function (name) {
      return function () {
        return $_81yxrozfjepbvepm.forToolbarCommand(editor, name);
      };
    };
    var stateCommandSketch = function (name) {
      return function () {
        return $_81yxrozfjepbvepm.forToolbarStateCommand(editor, name);
      };
    };
    var actionSketch = function (name, query, action) {
      return function () {
        return $_81yxrozfjepbvepm.forToolbarStateAction(editor, name, query, action);
      };
    };
    var undo = commandSketch('undo');
    var redo = commandSketch('redo');
    var bold = stateCommandSketch('bold');
    var italic = stateCommandSketch('italic');
    var underline = stateCommandSketch('underline');
    var removeformat = commandSketch('removeformat');
    var link = function () {
      return $_96u5yj121jepbvf7q.sketch(realm, editor);
    };
    var unlink = actionSketch('unlink', 'link', function () {
      editor.execCommand('unlink', null, false);
    });
    var image = function () {
      return $_faak5v11qjepbvf69.sketch(editor);
    };
    var bullist = actionSketch('unordered-list', 'ul', function () {
      editor.execCommand('InsertUnorderedList', null, false);
    });
    var numlist = actionSketch('ordered-list', 'ol', function () {
      editor.execCommand('InsertOrderedList', null, false);
    });
    var fontsizeselect = function () {
      return $_7zjepp11mjepbvf5c.sketch(realm, editor);
    };
    var forecolor = function () {
      return $_exszm4115jepbvf2f.sketch(realm, editor);
    };
    var styleFormats = $_4n8izg12qjepbvfcs.register(editor, editor.settings);
    var styleFormatsMenu = function () {
      return $_4n8izg12qjepbvfcs.ui(editor, styleFormats, function () {
        editor.fire('scrollIntoView');
      });
    };
    var styleselect = function () {
      return $_81yxrozfjepbvepm.forToolbar('style-formats', function (button) {
        editor.fire('toReading');
        realm.dropup().appear(styleFormatsMenu, Toggling.on, button);
      }, $_9otgsgy2jepbveh4.derive([
        Toggling.config({
          toggleClass: $_3fme06zejepbvepj.resolve('toolbar-button-selected'),
          toggleOnExecute: false,
          aria: { mode: 'pressed' }
        }),
        Receiving.config({
          channels: $_f53w39xsjepbvefs.wrapAll([
            $_bqtojizdjepbvepe.receive($_cr5a5qz1jepbvemv.orientationChanged(), Toggling.off),
            $_bqtojizdjepbvepe.receive($_cr5a5qz1jepbvemv.dropupDismissed(), Toggling.off)
          ])
        })
      ]));
    };
    var feature = function (prereq, sketch) {
      return {
        isSupported: function () {
          return prereq.forall(function (p) {
            return $_f53w39xsjepbvefs.hasKey(editor.buttons, p);
          });
        },
        sketch: sketch
      };
    };
    return {
      undo: feature(Option.none(), undo),
      redo: feature(Option.none(), redo),
      bold: feature(Option.none(), bold),
      italic: feature(Option.none(), italic),
      underline: feature(Option.none(), underline),
      removeformat: feature(Option.none(), removeformat),
      link: feature(Option.none(), link),
      unlink: feature(Option.none(), unlink),
      image: feature(Option.none(), image),
      bullist: feature(Option.some('bullist'), bullist),
      numlist: feature(Option.some('numlist'), numlist),
      fontsizeselect: feature(Option.none(), fontsizeselect),
      forecolor: feature(Option.none(), forecolor),
      styleselect: feature(Option.none(), styleselect)
    };
  };
  var detect$4 = function (settings, features) {
    var itemNames = identify(settings);
    var present = {};
    return $_227y8rwsjepbveb6.bind(itemNames, function (iName) {
      var r = !$_f53w39xsjepbvefs.hasKey(present, iName) && $_f53w39xsjepbvefs.hasKey(features, iName) && features[iName].isSupported() ? [features[iName].sketch()] : [];
      present[iName] = true;
      return r;
    });
  };
  var $_2a7zdmz2jepbvemy = {
    identify: identify,
    setup: setup,
    detect: detect$4
  };

  var mkEvent = function (target, x, y, stop, prevent, kill, raw) {
    return {
      'target': $_167yw6wjjepbveag.constant(target),
      'x': $_167yw6wjjepbveag.constant(x),
      'y': $_167yw6wjjepbveag.constant(y),
      'stop': stop,
      'prevent': prevent,
      'kill': kill,
      'raw': $_167yw6wjjepbveag.constant(raw)
    };
  };
  var handle = function (filter, handler) {
    return function (rawEvent) {
      if (!filter(rawEvent))
        return;
      var target = $_4pcs1kxfjepbvee2.fromDom(rawEvent.target);
      var stop = function () {
        rawEvent.stopPropagation();
      };
      var prevent = function () {
        rawEvent.preventDefault();
      };
      var kill = $_167yw6wjjepbveag.compose(prevent, stop);
      var evt = mkEvent(target, rawEvent.clientX, rawEvent.clientY, stop, prevent, kill, rawEvent);
      handler(evt);
    };
  };
  var binder = function (element, event, filter, handler, useCapture) {
    var wrapped = handle(filter, handler);
    element.dom().addEventListener(event, wrapped, useCapture);
    return { unbind: $_167yw6wjjepbveag.curry(unbind, element, event, wrapped, useCapture) };
  };
  var bind$1 = function (element, event, filter, handler) {
    return binder(element, event, filter, handler, false);
  };
  var capture = function (element, event, filter, handler) {
    return binder(element, event, filter, handler, true);
  };
  var unbind = function (element, event, handler, useCapture) {
    element.dom().removeEventListener(event, handler, useCapture);
  };
  var $_4s2a2c13yjepbvfp6 = {
    bind: bind$1,
    capture: capture
  };

  var filter$1 = $_167yw6wjjepbveag.constant(true);
  var bind$2 = function (element, event, handler) {
    return $_4s2a2c13yjepbvfp6.bind(element, event, filter$1, handler);
  };
  var capture$1 = function (element, event, handler) {
    return $_4s2a2c13yjepbvfp6.capture(element, event, filter$1, handler);
  };
  var $_fr2gc113xjepbvfp3 = {
    bind: bind$2,
    capture: capture$1
  };

  var INTERVAL = 50;
  var INSURANCE = 1000 / INTERVAL;
  var get$11 = function (outerWindow) {
    var isPortrait = outerWindow.matchMedia('(orientation: portrait)').matches;
    return { isPortrait: $_167yw6wjjepbveag.constant(isPortrait) };
  };
  var getActualWidth = function (outerWindow) {
    var isIos = $_fs3v1iwkjepbveaj.detect().os.isiOS();
    var isPortrait = get$11(outerWindow).isPortrait();
    return isIos && !isPortrait ? outerWindow.screen.height : outerWindow.screen.width;
  };
  var onChange = function (outerWindow, listeners) {
    var win = $_4pcs1kxfjepbvee2.fromDom(outerWindow);
    var poller = null;
    var change = function () {
      clearInterval(poller);
      var orientation = get$11(outerWindow);
      listeners.onChange(orientation);
      onAdjustment(function () {
        listeners.onReady(orientation);
      });
    };
    var orientationHandle = $_fr2gc113xjepbvfp3.bind(win, 'orientationchange', change);
    var onAdjustment = function (f) {
      clearInterval(poller);
      var flag = outerWindow.innerHeight;
      var insurance = 0;
      poller = setInterval(function () {
        if (flag !== outerWindow.innerHeight) {
          clearInterval(poller);
          f(Option.some(outerWindow.innerHeight));
        } else if (insurance > INSURANCE) {
          clearInterval(poller);
          f(Option.none());
        }
        insurance++;
      }, INTERVAL);
    };
    var destroy = function () {
      orientationHandle.unbind();
    };
    return {
      onAdjustment: onAdjustment,
      destroy: destroy
    };
  };
  var $_3wqb9113wjepbvfov = {
    get: get$11,
    onChange: onChange,
    getActualWidth: getActualWidth
  };

  function DelayedFunction (fun, delay) {
    var ref = null;
    var schedule = function () {
      var args = arguments;
      ref = setTimeout(function () {
        fun.apply(null, args);
        ref = null;
      }, delay);
    };
    var cancel = function () {
      if (ref !== null) {
        clearTimeout(ref);
        ref = null;
      }
    };
    return {
      cancel: cancel,
      schedule: schedule
    };
  }

  var SIGNIFICANT_MOVE = 5;
  var LONGPRESS_DELAY = 400;
  var getTouch = function (event) {
    if (event.raw().touches === undefined || event.raw().touches.length !== 1)
      return Option.none();
    return Option.some(event.raw().touches[0]);
  };
  var isFarEnough = function (touch, data) {
    var distX = Math.abs(touch.clientX - data.x());
    var distY = Math.abs(touch.clientY - data.y());
    return distX > SIGNIFICANT_MOVE || distY > SIGNIFICANT_MOVE;
  };
  var monitor = function (settings) {
    var startData = Cell(Option.none());
    var longpress = DelayedFunction(function (event) {
      startData.set(Option.none());
      settings.triggerEvent($_alx3dcwhjepbvea8.longpress(), event);
    }, LONGPRESS_DELAY);
    var handleTouchstart = function (event) {
      getTouch(event).each(function (touch) {
        longpress.cancel();
        var data = {
          x: $_167yw6wjjepbveag.constant(touch.clientX),
          y: $_167yw6wjjepbveag.constant(touch.clientY),
          target: event.target
        };
        longpress.schedule(data);
        startData.set(Option.some(data));
      });
      return Option.none();
    };
    var handleTouchmove = function (event) {
      longpress.cancel();
      getTouch(event).each(function (touch) {
        startData.get().each(function (data) {
          if (isFarEnough(touch, data))
            startData.set(Option.none());
        });
      });
      return Option.none();
    };
    var handleTouchend = function (event) {
      longpress.cancel();
      var isSame = function (data) {
        return $_6fsl8xx9jepbveda.eq(data.target(), event.target());
      };
      return startData.get().filter(isSame).map(function (data) {
        return settings.triggerEvent($_alx3dcwhjepbvea8.tap(), event);
      });
    };
    var handlers = $_f53w39xsjepbvefs.wrapAll([
      {
        key: $_e2bl11wijepbvead.touchstart(),
        value: handleTouchstart
      },
      {
        key: $_e2bl11wijepbvead.touchmove(),
        value: handleTouchmove
      },
      {
        key: $_e2bl11wijepbvead.touchend(),
        value: handleTouchend
      }
    ]);
    var fireIfReady = function (event, type) {
      return $_f53w39xsjepbvefs.readOptFrom(handlers, type).bind(function (handler) {
        return handler(event);
      });
    };
    return { fireIfReady: fireIfReady };
  };
  var $_6k51tn144jepbvfql = { monitor: monitor };

  var monitor$1 = function (editorApi) {
    var tapEvent = $_6k51tn144jepbvfql.monitor({
      triggerEvent: function (type, evt) {
        editorApi.onTapContent(evt);
      }
    });
    var onTouchend = function () {
      return $_fr2gc113xjepbvfp3.bind(editorApi.body(), 'touchend', function (evt) {
        tapEvent.fireIfReady(evt, 'touchend');
      });
    };
    var onTouchmove = function () {
      return $_fr2gc113xjepbvfp3.bind(editorApi.body(), 'touchmove', function (evt) {
        tapEvent.fireIfReady(evt, 'touchmove');
      });
    };
    var fireTouchstart = function (evt) {
      tapEvent.fireIfReady(evt, 'touchstart');
    };
    return {
      fireTouchstart: fireTouchstart,
      onTouchend: onTouchend,
      onTouchmove: onTouchmove
    };
  };
  var $_5shsdq143jepbvfqd = { monitor: monitor$1 };

  var isAndroid6 = $_fs3v1iwkjepbveaj.detect().os.version.major >= 6;
  var initEvents = function (editorApi, toolstrip, alloy) {
    var tapping = $_5shsdq143jepbvfqd.monitor(editorApi);
    var outerDoc = $_ginpy6x3jepbvece.owner(toolstrip);
    var isRanged = function (sel) {
      return !$_6fsl8xx9jepbveda.eq(sel.start(), sel.finish()) || sel.soffset() !== sel.foffset();
    };
    var hasRangeInUi = function () {
      return $_5khawkytjepbvem5.active(outerDoc).filter(function (input) {
        return $_4aeewhxkjepbveek.name(input) === 'input';
      }).exists(function (input) {
        return input.dom().selectionStart !== input.dom().selectionEnd;
      });
    };
    var updateMargin = function () {
      var rangeInContent = editorApi.doc().dom().hasFocus() && editorApi.getSelection().exists(isRanged);
      alloy.getByDom(toolstrip).each((rangeInContent || hasRangeInUi()) === true ? Toggling.on : Toggling.off);
    };
    var listeners = [
      $_fr2gc113xjepbvfp3.bind(editorApi.body(), 'touchstart', function (evt) {
        editorApi.onTouchContent();
        tapping.fireTouchstart(evt);
      }),
      tapping.onTouchmove(),
      tapping.onTouchend(),
      $_fr2gc113xjepbvfp3.bind(toolstrip, 'touchstart', function (evt) {
        editorApi.onTouchToolstrip();
      }),
      editorApi.onToReading(function () {
        $_5khawkytjepbvem5.blur(editorApi.body());
      }),
      editorApi.onToEditing($_167yw6wjjepbveag.noop),
      editorApi.onScrollToCursor(function (tinyEvent) {
        tinyEvent.preventDefault();
        editorApi.getCursorBox().each(function (bounds) {
          var cWin = editorApi.win();
          var isOutside = bounds.top() > cWin.innerHeight || bounds.bottom() > cWin.innerHeight;
          var cScrollBy = isOutside ? bounds.bottom() - cWin.innerHeight + 50 : 0;
          if (cScrollBy !== 0) {
            cWin.scrollTo(cWin.pageXOffset, cWin.pageYOffset + cScrollBy);
          }
        });
      })
    ].concat(isAndroid6 === true ? [] : [
      $_fr2gc113xjepbvfp3.bind($_4pcs1kxfjepbvee2.fromDom(editorApi.win()), 'blur', function () {
        alloy.getByDom(toolstrip).each(Toggling.off);
      }),
      $_fr2gc113xjepbvfp3.bind(outerDoc, 'select', updateMargin),
      $_fr2gc113xjepbvfp3.bind(editorApi.doc(), 'selectionchange', updateMargin)
    ]);
    var destroy = function () {
      $_227y8rwsjepbveb6.each(listeners, function (l) {
        l.unbind();
      });
    };
    return { destroy: destroy };
  };
  var $_eq8jcx142jepbvfpw = { initEvents: initEvents };

  var safeParse = function (element, attribute) {
    var parsed = parseInt($_1sxky7xrjepbvefh.get(element, attribute), 10);
    return isNaN(parsed) ? 0 : parsed;
  };
  var $_d8u1f9147jepbvfrd = { safeParse: safeParse };

  function NodeValue (is, name) {
    var get = function (element) {
      if (!is(element))
        throw new Error('Can only get ' + name + ' value of a ' + name + ' node');
      return getOption(element).getOr('');
    };
    var getOptionIE10 = function (element) {
      try {
        return getOptionSafe(element);
      } catch (e) {
        return Option.none();
      }
    };
    var getOptionSafe = function (element) {
      return is(element) ? Option.from(element.dom().nodeValue) : Option.none();
    };
    var browser = $_fs3v1iwkjepbveaj.detect().browser;
    var getOption = browser.isIE() && browser.version.major === 10 ? getOptionIE10 : getOptionSafe;
    var set = function (element, value) {
      if (!is(element))
        throw new Error('Can only set raw ' + name + ' value of a ' + name + ' node');
      element.dom().nodeValue = value;
    };
    return {
      get: get,
      getOption: getOption,
      set: set
    };
  }

  var api$3 = NodeValue($_4aeewhxkjepbveek.isText, 'text');
  var get$12 = function (element) {
    return api$3.get(element);
  };
  var getOption = function (element) {
    return api$3.getOption(element);
  };
  var set$8 = function (element, value) {
    api$3.set(element, value);
  };
  var $_dsm4at14ajepbvfrw = {
    get: get$12,
    getOption: getOption,
    set: set$8
  };

  var getEnd = function (element) {
    return $_4aeewhxkjepbveek.name(element) === 'img' ? 1 : $_dsm4at14ajepbvfrw.getOption(element).fold(function () {
      return $_ginpy6x3jepbvece.children(element).length;
    }, function (v) {
      return v.length;
    });
  };
  var isEnd = function (element, offset) {
    return getEnd(element) === offset;
  };
  var isStart = function (element, offset) {
    return offset === 0;
  };
  var NBSP = '\xA0';
  var isTextNodeWithCursorPosition = function (el) {
    return $_dsm4at14ajepbvfrw.getOption(el).filter(function (text) {
      return text.trim().length !== 0 || text.indexOf(NBSP) > -1;
    }).isSome();
  };
  var elementsWithCursorPosition = [
    'img',
    'br'
  ];
  var isCursorPosition = function (elem) {
    var hasCursorPosition = isTextNodeWithCursorPosition(elem);
    return hasCursorPosition || $_227y8rwsjepbveb6.contains(elementsWithCursorPosition, $_4aeewhxkjepbveek.name(elem));
  };
  var $_2j5dkm149jepbvfrs = {
    getEnd: getEnd,
    isEnd: isEnd,
    isStart: isStart,
    isCursorPosition: isCursorPosition
  };

  var adt$4 = $_9vwywgxwjepbvegj.generate([
    { 'before': ['element'] },
    {
      'on': [
        'element',
        'offset'
      ]
    },
    { after: ['element'] }
  ]);
  var cata = function (subject, onBefore, onOn, onAfter) {
    return subject.fold(onBefore, onOn, onAfter);
  };
  var getStart = function (situ) {
    return situ.fold($_167yw6wjjepbveag.identity, $_167yw6wjjepbveag.identity, $_167yw6wjjepbveag.identity);
  };
  var $_50hlhh14djepbvfsa = {
    before: adt$4.before,
    on: adt$4.on,
    after: adt$4.after,
    cata: cata,
    getStart: getStart
  };

  var type$1 = $_9vwywgxwjepbvegj.generate([
    { domRange: ['rng'] },
    {
      relative: [
        'startSitu',
        'finishSitu'
      ]
    },
    {
      exact: [
        'start',
        'soffset',
        'finish',
        'foffset'
      ]
    }
  ]);
  var range$1 = $_2pqntjx4jepbvecr.immutable('start', 'soffset', 'finish', 'foffset');
  var exactFromRange = function (simRange) {
    return type$1.exact(simRange.start(), simRange.soffset(), simRange.finish(), simRange.foffset());
  };
  var getStart$1 = function (selection) {
    return selection.match({
      domRange: function (rng) {
        return $_4pcs1kxfjepbvee2.fromDom(rng.startContainer);
      },
      relative: function (startSitu, finishSitu) {
        return $_50hlhh14djepbvfsa.getStart(startSitu);
      },
      exact: function (start, soffset, finish, foffset) {
        return start;
      }
    });
  };
  var getWin = function (selection) {
    var start = getStart$1(selection);
    return $_ginpy6x3jepbvece.defaultView(start);
  };
  var $_6ghtyf14cjepbvfs4 = {
    domRange: type$1.domRange,
    relative: type$1.relative,
    exact: type$1.exact,
    exactFromRange: exactFromRange,
    range: range$1,
    getWin: getWin
  };

  var makeRange = function (start, soffset, finish, foffset) {
    var doc = $_ginpy6x3jepbvece.owner(start);
    var rng = doc.dom().createRange();
    rng.setStart(start.dom(), soffset);
    rng.setEnd(finish.dom(), foffset);
    return rng;
  };
  var commonAncestorContainer = function (start, soffset, finish, foffset) {
    var r = makeRange(start, soffset, finish, foffset);
    return $_4pcs1kxfjepbvee2.fromDom(r.commonAncestorContainer);
  };
  var after$2 = function (start, soffset, finish, foffset) {
    var r = makeRange(start, soffset, finish, foffset);
    var same = $_6fsl8xx9jepbveda.eq(start, finish) && soffset === foffset;
    return r.collapsed && !same;
  };
  var $_cqukdv14fjepbvfsm = {
    after: after$2,
    commonAncestorContainer: commonAncestorContainer
  };

  var fromElements = function (elements, scope) {
    var doc = scope || document;
    var fragment = doc.createDocumentFragment();
    $_227y8rwsjepbveb6.each(elements, function (element) {
      fragment.appendChild(element.dom());
    });
    return $_4pcs1kxfjepbvee2.fromDom(fragment);
  };
  var $_cyc16d14gjepbvfso = { fromElements: fromElements };

  var selectNodeContents = function (win, element) {
    var rng = win.document.createRange();
    selectNodeContentsUsing(rng, element);
    return rng;
  };
  var selectNodeContentsUsing = function (rng, element) {
    rng.selectNodeContents(element.dom());
  };
  var isWithin = function (outerRange, innerRange) {
    return innerRange.compareBoundaryPoints(outerRange.END_TO_START, outerRange) < 1 && innerRange.compareBoundaryPoints(outerRange.START_TO_END, outerRange) > -1;
  };
  var create$4 = function (win) {
    return win.document.createRange();
  };
  var setStart = function (rng, situ) {
    situ.fold(function (e) {
      rng.setStartBefore(e.dom());
    }, function (e, o) {
      rng.setStart(e.dom(), o);
    }, function (e) {
      rng.setStartAfter(e.dom());
    });
  };
  var setFinish = function (rng, situ) {
    situ.fold(function (e) {
      rng.setEndBefore(e.dom());
    }, function (e, o) {
      rng.setEnd(e.dom(), o);
    }, function (e) {
      rng.setEndAfter(e.dom());
    });
  };
  var replaceWith = function (rng, fragment) {
    deleteContents(rng);
    rng.insertNode(fragment.dom());
  };
  var relativeToNative = function (win, startSitu, finishSitu) {
    var range = win.document.createRange();
    setStart(range, startSitu);
    setFinish(range, finishSitu);
    return range;
  };
  var exactToNative = function (win, start, soffset, finish, foffset) {
    var rng = win.document.createRange();
    rng.setStart(start.dom(), soffset);
    rng.setEnd(finish.dom(), foffset);
    return rng;
  };
  var deleteContents = function (rng) {
    rng.deleteContents();
  };
  var cloneFragment = function (rng) {
    var fragment = rng.cloneContents();
    return $_4pcs1kxfjepbvee2.fromDom(fragment);
  };
  var toRect = function (rect) {
    return {
      left: $_167yw6wjjepbveag.constant(rect.left),
      top: $_167yw6wjjepbveag.constant(rect.top),
      right: $_167yw6wjjepbveag.constant(rect.right),
      bottom: $_167yw6wjjepbveag.constant(rect.bottom),
      width: $_167yw6wjjepbveag.constant(rect.width),
      height: $_167yw6wjjepbveag.constant(rect.height)
    };
  };
  var getFirstRect = function (rng) {
    var rects = rng.getClientRects();
    var rect = rects.length > 0 ? rects[0] : rng.getBoundingClientRect();
    return rect.width > 0 || rect.height > 0 ? Option.some(rect).map(toRect) : Option.none();
  };
  var getBounds = function (rng) {
    var rect = rng.getBoundingClientRect();
    return rect.width > 0 || rect.height > 0 ? Option.some(rect).map(toRect) : Option.none();
  };
  var toString$1 = function (rng) {
    return rng.toString();
  };
  var $_1hf0ya14hjepbvfst = {
    create: create$4,
    replaceWith: replaceWith,
    selectNodeContents: selectNodeContents,
    selectNodeContentsUsing: selectNodeContentsUsing,
    relativeToNative: relativeToNative,
    exactToNative: exactToNative,
    deleteContents: deleteContents,
    cloneFragment: cloneFragment,
    getFirstRect: getFirstRect,
    getBounds: getBounds,
    isWithin: isWithin,
    toString: toString$1
  };

  var adt$5 = $_9vwywgxwjepbvegj.generate([
    {
      ltr: [
        'start',
        'soffset',
        'finish',
        'foffset'
      ]
    },
    {
      rtl: [
        'start',
        'soffset',
        'finish',
        'foffset'
      ]
    }
  ]);
  var fromRange = function (win, type, range) {
    return type($_4pcs1kxfjepbvee2.fromDom(range.startContainer), range.startOffset, $_4pcs1kxfjepbvee2.fromDom(range.endContainer), range.endOffset);
  };
  var getRanges = function (win, selection) {
    return selection.match({
      domRange: function (rng) {
        return {
          ltr: $_167yw6wjjepbveag.constant(rng),
          rtl: Option.none
        };
      },
      relative: function (startSitu, finishSitu) {
        return {
          ltr: $_b2ra0wwljepbveal.cached(function () {
            return $_1hf0ya14hjepbvfst.relativeToNative(win, startSitu, finishSitu);
          }),
          rtl: $_b2ra0wwljepbveal.cached(function () {
            return Option.some($_1hf0ya14hjepbvfst.relativeToNative(win, finishSitu, startSitu));
          })
        };
      },
      exact: function (start, soffset, finish, foffset) {
        return {
          ltr: $_b2ra0wwljepbveal.cached(function () {
            return $_1hf0ya14hjepbvfst.exactToNative(win, start, soffset, finish, foffset);
          }),
          rtl: $_b2ra0wwljepbveal.cached(function () {
            return Option.some($_1hf0ya14hjepbvfst.exactToNative(win, finish, foffset, start, soffset));
          })
        };
      }
    });
  };
  var doDiagnose = function (win, ranges) {
    var rng = ranges.ltr();
    if (rng.collapsed) {
      var reversed = ranges.rtl().filter(function (rev) {
        return rev.collapsed === false;
      });
      return reversed.map(function (rev) {
        return adt$5.rtl($_4pcs1kxfjepbvee2.fromDom(rev.endContainer), rev.endOffset, $_4pcs1kxfjepbvee2.fromDom(rev.startContainer), rev.startOffset);
      }).getOrThunk(function () {
        return fromRange(win, adt$5.ltr, rng);
      });
    } else {
      return fromRange(win, adt$5.ltr, rng);
    }
  };
  var diagnose = function (win, selection) {
    var ranges = getRanges(win, selection);
    return doDiagnose(win, ranges);
  };
  var asLtrRange = function (win, selection) {
    var diagnosis = diagnose(win, selection);
    return diagnosis.match({
      ltr: function (start, soffset, finish, foffset) {
        var rng = win.document.createRange();
        rng.setStart(start.dom(), soffset);
        rng.setEnd(finish.dom(), foffset);
        return rng;
      },
      rtl: function (start, soffset, finish, foffset) {
        var rng = win.document.createRange();
        rng.setStart(finish.dom(), foffset);
        rng.setEnd(start.dom(), soffset);
        return rng;
      }
    });
  };
  var $_9yrkd314ijepbvft2 = {
    ltr: adt$5.ltr,
    rtl: adt$5.rtl,
    diagnose: diagnose,
    asLtrRange: asLtrRange
  };

  var searchForPoint = function (rectForOffset, x, y, maxX, length) {
    if (length === 0)
      return 0;
    else if (x === maxX)
      return length - 1;
    var xDelta = maxX;
    for (var i = 1; i < length; i++) {
      var rect = rectForOffset(i);
      var curDeltaX = Math.abs(x - rect.left);
      if (y > rect.bottom) {
      } else if (y < rect.top || curDeltaX > xDelta) {
        return i - 1;
      } else {
        xDelta = curDeltaX;
      }
    }
    return 0;
  };
  var inRect = function (rect, x, y) {
    return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
  };
  var $_7ljebn14ljepbvftt = {
    inRect: inRect,
    searchForPoint: searchForPoint
  };

  var locateOffset = function (doc, textnode, x, y, rect) {
    var rangeForOffset = function (offset) {
      var r = doc.dom().createRange();
      r.setStart(textnode.dom(), offset);
      r.collapse(true);
      return r;
    };
    var rectForOffset = function (offset) {
      var r = rangeForOffset(offset);
      return r.getBoundingClientRect();
    };
    var length = $_dsm4at14ajepbvfrw.get(textnode).length;
    var offset = $_7ljebn14ljepbvftt.searchForPoint(rectForOffset, x, y, rect.right, length);
    return rangeForOffset(offset);
  };
  var locate$1 = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    r.selectNode(node.dom());
    var rects = r.getClientRects();
    var foundRect = $_4ymgfmy0jepbveh0.findMap(rects, function (rect) {
      return $_7ljebn14ljepbvftt.inRect(rect, x, y) ? Option.some(rect) : Option.none();
    });
    return foundRect.map(function (rect) {
      return locateOffset(doc, node, x, y, rect);
    });
  };
  var $_3mpq8h14mjepbvftu = { locate: locate$1 };

  var searchInChildren = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    var nodes = $_ginpy6x3jepbvece.children(node);
    return $_4ymgfmy0jepbveh0.findMap(nodes, function (n) {
      r.selectNode(n.dom());
      return $_7ljebn14ljepbvftt.inRect(r.getBoundingClientRect(), x, y) ? locateNode(doc, n, x, y) : Option.none();
    });
  };
  var locateNode = function (doc, node, x, y) {
    var locator = $_4aeewhxkjepbveek.isText(node) ? $_3mpq8h14mjepbvftu.locate : searchInChildren;
    return locator(doc, node, x, y);
  };
  var locate$2 = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    r.selectNode(node.dom());
    var rect = r.getBoundingClientRect();
    var boundedX = Math.max(rect.left, Math.min(rect.right, x));
    var boundedY = Math.max(rect.top, Math.min(rect.bottom, y));
    return locateNode(doc, node, boundedX, boundedY);
  };
  var $_6swf1814kjepbvftn = { locate: locate$2 };

  var first$3 = function (element) {
    return $_g7dmbqyvjepbvemd.descendant(element, $_2j5dkm149jepbvfrs.isCursorPosition);
  };
  var last$2 = function (element) {
    return descendantRtl(element, $_2j5dkm149jepbvfrs.isCursorPosition);
  };
  var descendantRtl = function (scope, predicate) {
    var descend = function (element) {
      var children = $_ginpy6x3jepbvece.children(element);
      for (var i = children.length - 1; i >= 0; i--) {
        var child = children[i];
        if (predicate(child))
          return Option.some(child);
        var res = descend(child);
        if (res.isSome())
          return res;
      }
      return Option.none();
    };
    return descend(scope);
  };
  var $_4dt6ao14ojepbvfu6 = {
    first: first$3,
    last: last$2
  };

  var COLLAPSE_TO_LEFT = true;
  var COLLAPSE_TO_RIGHT = false;
  var getCollapseDirection = function (rect, x) {
    return x - rect.left < rect.right - x ? COLLAPSE_TO_LEFT : COLLAPSE_TO_RIGHT;
  };
  var createCollapsedNode = function (doc, target, collapseDirection) {
    var r = doc.dom().createRange();
    r.selectNode(target.dom());
    r.collapse(collapseDirection);
    return r;
  };
  var locateInElement = function (doc, node, x) {
    var cursorRange = doc.dom().createRange();
    cursorRange.selectNode(node.dom());
    var rect = cursorRange.getBoundingClientRect();
    var collapseDirection = getCollapseDirection(rect, x);
    var f = collapseDirection === COLLAPSE_TO_LEFT ? $_4dt6ao14ojepbvfu6.first : $_4dt6ao14ojepbvfu6.last;
    return f(node).map(function (target) {
      return createCollapsedNode(doc, target, collapseDirection);
    });
  };
  var locateInEmpty = function (doc, node, x) {
    var rect = node.dom().getBoundingClientRect();
    var collapseDirection = getCollapseDirection(rect, x);
    return Option.some(createCollapsedNode(doc, node, collapseDirection));
  };
  var search$1 = function (doc, node, x) {
    var f = $_ginpy6x3jepbvece.children(node).length === 0 ? locateInEmpty : locateInElement;
    return f(doc, node, x);
  };
  var $_92nedp14njepbvfu2 = { search: search$1 };

  var caretPositionFromPoint = function (doc, x, y) {
    return Option.from(doc.dom().caretPositionFromPoint(x, y)).bind(function (pos) {
      if (pos.offsetNode === null)
        return Option.none();
      var r = doc.dom().createRange();
      r.setStart(pos.offsetNode, pos.offset);
      r.collapse();
      return Option.some(r);
    });
  };
  var caretRangeFromPoint = function (doc, x, y) {
    return Option.from(doc.dom().caretRangeFromPoint(x, y));
  };
  var searchTextNodes = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    r.selectNode(node.dom());
    var rect = r.getBoundingClientRect();
    var boundedX = Math.max(rect.left, Math.min(rect.right, x));
    var boundedY = Math.max(rect.top, Math.min(rect.bottom, y));
    return $_6swf1814kjepbvftn.locate(doc, node, boundedX, boundedY);
  };
  var searchFromPoint = function (doc, x, y) {
    return $_4pcs1kxfjepbvee2.fromPoint(doc, x, y).bind(function (elem) {
      var fallback = function () {
        return $_92nedp14njepbvfu2.search(doc, elem, x);
      };
      return $_ginpy6x3jepbvece.children(elem).length === 0 ? fallback() : searchTextNodes(doc, elem, x, y).orThunk(fallback);
    });
  };
  var availableSearch = document.caretPositionFromPoint ? caretPositionFromPoint : document.caretRangeFromPoint ? caretRangeFromPoint : searchFromPoint;
  var fromPoint$1 = function (win, x, y) {
    var doc = $_4pcs1kxfjepbvee2.fromDom(win.document);
    return availableSearch(doc, x, y).map(function (rng) {
      return $_6ghtyf14cjepbvfs4.range($_4pcs1kxfjepbvee2.fromDom(rng.startContainer), rng.startOffset, $_4pcs1kxfjepbvee2.fromDom(rng.endContainer), rng.endOffset);
    });
  };
  var $_b3qlow14jjepbvfth = { fromPoint: fromPoint$1 };

  var withinContainer = function (win, ancestor, outerRange, selector) {
    var innerRange = $_1hf0ya14hjepbvfst.create(win);
    var self = $_d1zhj7xejepbvedv.is(ancestor, selector) ? [ancestor] : [];
    var elements = self.concat($_7az4v0zvjepbves7.descendants(ancestor, selector));
    return $_227y8rwsjepbveb6.filter(elements, function (elem) {
      $_1hf0ya14hjepbvfst.selectNodeContentsUsing(innerRange, elem);
      return $_1hf0ya14hjepbvfst.isWithin(outerRange, innerRange);
    });
  };
  var find$4 = function (win, selection, selector) {
    var outerRange = $_9yrkd314ijepbvft2.asLtrRange(win, selection);
    var ancestor = $_4pcs1kxfjepbvee2.fromDom(outerRange.commonAncestorContainer);
    return $_4aeewhxkjepbveek.isElement(ancestor) ? withinContainer(win, ancestor, outerRange, selector) : [];
  };
  var $_2uzepp14pjepbvfu9 = { find: find$4 };

  var beforeSpecial = function (element, offset) {
    var name = $_4aeewhxkjepbveek.name(element);
    if ('input' === name)
      return $_50hlhh14djepbvfsa.after(element);
    else if (!$_227y8rwsjepbveb6.contains([
        'br',
        'img'
      ], name))
      return $_50hlhh14djepbvfsa.on(element, offset);
    else
      return offset === 0 ? $_50hlhh14djepbvfsa.before(element) : $_50hlhh14djepbvfsa.after(element);
  };
  var preprocessRelative = function (startSitu, finishSitu) {
    var start = startSitu.fold($_50hlhh14djepbvfsa.before, beforeSpecial, $_50hlhh14djepbvfsa.after);
    var finish = finishSitu.fold($_50hlhh14djepbvfsa.before, beforeSpecial, $_50hlhh14djepbvfsa.after);
    return $_6ghtyf14cjepbvfs4.relative(start, finish);
  };
  var preprocessExact = function (start, soffset, finish, foffset) {
    var startSitu = beforeSpecial(start, soffset);
    var finishSitu = beforeSpecial(finish, foffset);
    return $_6ghtyf14cjepbvfs4.relative(startSitu, finishSitu);
  };
  var preprocess = function (selection) {
    return selection.match({
      domRange: function (rng) {
        var start = $_4pcs1kxfjepbvee2.fromDom(rng.startContainer);
        var finish = $_4pcs1kxfjepbvee2.fromDom(rng.endContainer);
        return preprocessExact(start, rng.startOffset, finish, rng.endOffset);
      },
      relative: preprocessRelative,
      exact: preprocessExact
    });
  };
  var $_4q0ef514qjepbvfug = {
    beforeSpecial: beforeSpecial,
    preprocess: preprocess,
    preprocessRelative: preprocessRelative,
    preprocessExact: preprocessExact
  };

  var doSetNativeRange = function (win, rng) {
    Option.from(win.getSelection()).each(function (selection) {
      selection.removeAllRanges();
      selection.addRange(rng);
    });
  };
  var doSetRange = function (win, start, soffset, finish, foffset) {
    var rng = $_1hf0ya14hjepbvfst.exactToNative(win, start, soffset, finish, foffset);
    doSetNativeRange(win, rng);
  };
  var findWithin = function (win, selection, selector) {
    return $_2uzepp14pjepbvfu9.find(win, selection, selector);
  };
  var setRangeFromRelative = function (win, relative) {
    return $_9yrkd314ijepbvft2.diagnose(win, relative).match({
      ltr: function (start, soffset, finish, foffset) {
        doSetRange(win, start, soffset, finish, foffset);
      },
      rtl: function (start, soffset, finish, foffset) {
        var selection = win.getSelection();
        if (selection.setBaseAndExtent) {
          selection.setBaseAndExtent(start.dom(), soffset, finish.dom(), foffset);
        } else if (selection.extend) {
          selection.collapse(start.dom(), soffset);
          selection.extend(finish.dom(), foffset);
        } else {
          doSetRange(win, finish, foffset, start, soffset);
        }
      }
    });
  };
  var setExact = function (win, start, soffset, finish, foffset) {
    var relative = $_4q0ef514qjepbvfug.preprocessExact(start, soffset, finish, foffset);
    setRangeFromRelative(win, relative);
  };
  var setRelative = function (win, startSitu, finishSitu) {
    var relative = $_4q0ef514qjepbvfug.preprocessRelative(startSitu, finishSitu);
    setRangeFromRelative(win, relative);
  };
  var toNative = function (selection) {
    var win = $_6ghtyf14cjepbvfs4.getWin(selection).dom();
    var getDomRange = function (start, soffset, finish, foffset) {
      return $_1hf0ya14hjepbvfst.exactToNative(win, start, soffset, finish, foffset);
    };
    var filtered = $_4q0ef514qjepbvfug.preprocess(selection);
    return $_9yrkd314ijepbvft2.diagnose(win, filtered).match({
      ltr: getDomRange,
      rtl: getDomRange
    });
  };
  var readRange = function (selection) {
    if (selection.rangeCount > 0) {
      var firstRng = selection.getRangeAt(0);
      var lastRng = selection.getRangeAt(selection.rangeCount - 1);
      return Option.some($_6ghtyf14cjepbvfs4.range($_4pcs1kxfjepbvee2.fromDom(firstRng.startContainer), firstRng.startOffset, $_4pcs1kxfjepbvee2.fromDom(lastRng.endContainer), lastRng.endOffset));
    } else {
      return Option.none();
    }
  };
  var doGetExact = function (selection) {
    var anchorNode = $_4pcs1kxfjepbvee2.fromDom(selection.anchorNode);
    var focusNode = $_4pcs1kxfjepbvee2.fromDom(selection.focusNode);
    return $_cqukdv14fjepbvfsm.after(anchorNode, selection.anchorOffset, focusNode, selection.focusOffset) ? Option.some($_6ghtyf14cjepbvfs4.range($_4pcs1kxfjepbvee2.fromDom(selection.anchorNode), selection.anchorOffset, $_4pcs1kxfjepbvee2.fromDom(selection.focusNode), selection.focusOffset)) : readRange(selection);
  };
  var setToElement = function (win, element) {
    var rng = $_1hf0ya14hjepbvfst.selectNodeContents(win, element);
    doSetNativeRange(win, rng);
  };
  var forElement = function (win, element) {
    var rng = $_1hf0ya14hjepbvfst.selectNodeContents(win, element);
    return $_6ghtyf14cjepbvfs4.range($_4pcs1kxfjepbvee2.fromDom(rng.startContainer), rng.startOffset, $_4pcs1kxfjepbvee2.fromDom(rng.endContainer), rng.endOffset);
  };
  var getExact = function (win) {
    var selection = win.getSelection();
    return selection.rangeCount > 0 ? doGetExact(selection) : Option.none();
  };
  var get$13 = function (win) {
    return getExact(win).map(function (range) {
      return $_6ghtyf14cjepbvfs4.exact(range.start(), range.soffset(), range.finish(), range.foffset());
    });
  };
  var getFirstRect$1 = function (win, selection) {
    var rng = $_9yrkd314ijepbvft2.asLtrRange(win, selection);
    return $_1hf0ya14hjepbvfst.getFirstRect(rng);
  };
  var getBounds$1 = function (win, selection) {
    var rng = $_9yrkd314ijepbvft2.asLtrRange(win, selection);
    return $_1hf0ya14hjepbvfst.getBounds(rng);
  };
  var getAtPoint = function (win, x, y) {
    return $_b3qlow14jjepbvfth.fromPoint(win, x, y);
  };
  var getAsString = function (win, selection) {
    var rng = $_9yrkd314ijepbvft2.asLtrRange(win, selection);
    return $_1hf0ya14hjepbvfst.toString(rng);
  };
  var clear$1 = function (win) {
    var selection = win.getSelection();
    selection.removeAllRanges();
  };
  var clone$3 = function (win, selection) {
    var rng = $_9yrkd314ijepbvft2.asLtrRange(win, selection);
    return $_1hf0ya14hjepbvfst.cloneFragment(rng);
  };
  var replace = function (win, selection, elements) {
    var rng = $_9yrkd314ijepbvft2.asLtrRange(win, selection);
    var fragment = $_cyc16d14gjepbvfso.fromElements(elements, win.document);
    $_1hf0ya14hjepbvfst.replaceWith(rng, fragment);
  };
  var deleteAt = function (win, selection) {
    var rng = $_9yrkd314ijepbvft2.asLtrRange(win, selection);
    $_1hf0ya14hjepbvfst.deleteContents(rng);
  };
  var isCollapsed = function (start, soffset, finish, foffset) {
    return $_6fsl8xx9jepbveda.eq(start, finish) && soffset === foffset;
  };
  var $_d77g3t14ejepbvfsg = {
    setExact: setExact,
    getExact: getExact,
    get: get$13,
    setRelative: setRelative,
    toNative: toNative,
    setToElement: setToElement,
    clear: clear$1,
    clone: clone$3,
    replace: replace,
    deleteAt: deleteAt,
    forElement: forElement,
    getFirstRect: getFirstRect$1,
    getBounds: getBounds$1,
    getAtPoint: getAtPoint,
    findWithin: findWithin,
    getAsString: getAsString,
    isCollapsed: isCollapsed
  };

  var COLLAPSED_WIDTH = 2;
  var collapsedRect = function (rect) {
    return {
      left: rect.left,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      width: $_167yw6wjjepbveag.constant(COLLAPSED_WIDTH),
      height: rect.height
    };
  };
  var toRect$1 = function (rawRect) {
    return {
      left: $_167yw6wjjepbveag.constant(rawRect.left),
      top: $_167yw6wjjepbveag.constant(rawRect.top),
      right: $_167yw6wjjepbveag.constant(rawRect.right),
      bottom: $_167yw6wjjepbveag.constant(rawRect.bottom),
      width: $_167yw6wjjepbveag.constant(rawRect.width),
      height: $_167yw6wjjepbveag.constant(rawRect.height)
    };
  };
  var getRectsFromRange = function (range) {
    if (!range.collapsed) {
      return $_227y8rwsjepbveb6.map(range.getClientRects(), toRect$1);
    } else {
      var start_1 = $_4pcs1kxfjepbvee2.fromDom(range.startContainer);
      return $_ginpy6x3jepbvece.parent(start_1).bind(function (parent) {
        var selection = $_6ghtyf14cjepbvfs4.exact(start_1, range.startOffset, parent, $_2j5dkm149jepbvfrs.getEnd(parent));
        var optRect = $_d77g3t14ejepbvfsg.getFirstRect(range.startContainer.ownerDocument.defaultView, selection);
        return optRect.map(collapsedRect).map($_227y8rwsjepbveb6.pure);
      }).getOr([]);
    }
  };
  var getRectangles = function (cWin) {
    var sel = cWin.getSelection();
    return sel !== undefined && sel.rangeCount > 0 ? getRectsFromRange(sel.getRangeAt(0)) : [];
  };
  var $_7r2e5c148jepbvfrg = { getRectangles: getRectangles };

  var autocompleteHack = function () {
    return function (f) {
      setTimeout(function () {
        f();
      }, 0);
    };
  };
  var resume = function (cWin) {
    cWin.focus();
    var iBody = $_4pcs1kxfjepbvee2.fromDom(cWin.document.body);
    var inInput = $_5khawkytjepbvem5.active().exists(function (elem) {
      return $_227y8rwsjepbveb6.contains([
        'input',
        'textarea'
      ], $_4aeewhxkjepbveek.name(elem));
    });
    var transaction = inInput ? autocompleteHack() : $_167yw6wjjepbveag.apply;
    transaction(function () {
      $_5khawkytjepbvem5.active().each($_5khawkytjepbvem5.blur);
      $_5khawkytjepbvem5.focus(iBody);
    });
  };
  var $_f8ccv714rjepbvful = { resume: resume };

  var EXTRA_SPACING = 50;
  var data = 'data-' + $_3fme06zejepbvepj.resolve('last-outer-height');
  var setLastHeight = function (cBody, value) {
    $_1sxky7xrjepbvefh.set(cBody, data, value);
  };
  var getLastHeight = function (cBody) {
    return $_d8u1f9147jepbvfrd.safeParse(cBody, data);
  };
  var getBoundsFrom = function (rect) {
    return {
      top: $_167yw6wjjepbveag.constant(rect.top()),
      bottom: $_167yw6wjjepbveag.constant(rect.top() + rect.height())
    };
  };
  var getBounds$2 = function (cWin) {
    var rects = $_7r2e5c148jepbvfrg.getRectangles(cWin);
    return rects.length > 0 ? Option.some(rects[0]).map(getBoundsFrom) : Option.none();
  };
  var findDelta = function (outerWindow, cBody) {
    var last = getLastHeight(cBody);
    var current = outerWindow.innerHeight;
    return last > current ? Option.some(last - current) : Option.none();
  };
  var calculate = function (cWin, bounds, delta) {
    var isOutside = bounds.top() > cWin.innerHeight || bounds.bottom() > cWin.innerHeight;
    return isOutside ? Math.min(delta, bounds.bottom() - cWin.innerHeight + EXTRA_SPACING) : 0;
  };
  var setup$1 = function (outerWindow, cWin) {
    var cBody = $_4pcs1kxfjepbvee2.fromDom(cWin.document.body);
    var toEditing = function () {
      $_f8ccv714rjepbvful.resume(cWin);
    };
    var onResize = $_fr2gc113xjepbvfp3.bind($_4pcs1kxfjepbvee2.fromDom(outerWindow), 'resize', function () {
      findDelta(outerWindow, cBody).each(function (delta) {
        getBounds$2(cWin).each(function (bounds) {
          var cScrollBy = calculate(cWin, bounds, delta);
          if (cScrollBy !== 0) {
            cWin.scrollTo(cWin.pageXOffset, cWin.pageYOffset + cScrollBy);
          }
        });
      });
      setLastHeight(cBody, outerWindow.innerHeight);
    });
    setLastHeight(cBody, outerWindow.innerHeight);
    var destroy = function () {
      onResize.unbind();
    };
    return {
      toEditing: toEditing,
      destroy: destroy
    };
  };
  var $_aoj5f2146jepbvfqz = { setup: setup$1 };

  var getBodyFromFrame = function (frame) {
    return Option.some($_4pcs1kxfjepbvee2.fromDom(frame.dom().contentWindow.document.body));
  };
  var getDocFromFrame = function (frame) {
    return Option.some($_4pcs1kxfjepbvee2.fromDom(frame.dom().contentWindow.document));
  };
  var getWinFromFrame = function (frame) {
    return Option.from(frame.dom().contentWindow);
  };
  var getSelectionFromFrame = function (frame) {
    var optWin = getWinFromFrame(frame);
    return optWin.bind($_d77g3t14ejepbvfsg.getExact);
  };
  var getFrame = function (editor) {
    return editor.getFrame();
  };
  var getOrDerive = function (name, f) {
    return function (editor) {
      var g = editor[name].getOrThunk(function () {
        var frame = getFrame(editor);
        return function () {
          return f(frame);
        };
      });
      return g();
    };
  };
  var getOrListen = function (editor, doc, name, type) {
    return editor[name].getOrThunk(function () {
      return function (handler) {
        return $_fr2gc113xjepbvfp3.bind(doc, type, handler);
      };
    });
  };
  var toRect$2 = function (rect) {
    return {
      left: $_167yw6wjjepbveag.constant(rect.left),
      top: $_167yw6wjjepbveag.constant(rect.top),
      right: $_167yw6wjjepbveag.constant(rect.right),
      bottom: $_167yw6wjjepbveag.constant(rect.bottom),
      width: $_167yw6wjjepbveag.constant(rect.width),
      height: $_167yw6wjjepbveag.constant(rect.height)
    };
  };
  var getActiveApi = function (editor) {
    var frame = getFrame(editor);
    var tryFallbackBox = function (win) {
      var isCollapsed = function (sel) {
        return $_6fsl8xx9jepbveda.eq(sel.start(), sel.finish()) && sel.soffset() === sel.foffset();
      };
      var toStartRect = function (sel) {
        var rect = sel.start().dom().getBoundingClientRect();
        return rect.width > 0 || rect.height > 0 ? Option.some(rect).map(toRect$2) : Option.none();
      };
      return $_d77g3t14ejepbvfsg.getExact(win).filter(isCollapsed).bind(toStartRect);
    };
    return getBodyFromFrame(frame).bind(function (body) {
      return getDocFromFrame(frame).bind(function (doc) {
        return getWinFromFrame(frame).map(function (win) {
          var html = $_4pcs1kxfjepbvee2.fromDom(doc.dom().documentElement);
          var getCursorBox = editor.getCursorBox.getOrThunk(function () {
            return function () {
              return $_d77g3t14ejepbvfsg.get(win).bind(function (sel) {
                return $_d77g3t14ejepbvfsg.getFirstRect(win, sel).orThunk(function () {
                  return tryFallbackBox(win);
                });
              });
            };
          });
          var setSelection = editor.setSelection.getOrThunk(function () {
            return function (start, soffset, finish, foffset) {
              $_d77g3t14ejepbvfsg.setExact(win, start, soffset, finish, foffset);
            };
          });
          var clearSelection = editor.clearSelection.getOrThunk(function () {
            return function () {
              $_d77g3t14ejepbvfsg.clear(win);
            };
          });
          return {
            body: $_167yw6wjjepbveag.constant(body),
            doc: $_167yw6wjjepbveag.constant(doc),
            win: $_167yw6wjjepbveag.constant(win),
            html: $_167yw6wjjepbveag.constant(html),
            getSelection: $_167yw6wjjepbveag.curry(getSelectionFromFrame, frame),
            setSelection: setSelection,
            clearSelection: clearSelection,
            frame: $_167yw6wjjepbveag.constant(frame),
            onKeyup: getOrListen(editor, doc, 'onKeyup', 'keyup'),
            onNodeChanged: getOrListen(editor, doc, 'onNodeChanged', 'selectionchange'),
            onDomChanged: editor.onDomChanged,
            onScrollToCursor: editor.onScrollToCursor,
            onScrollToElement: editor.onScrollToElement,
            onToReading: editor.onToReading,
            onToEditing: editor.onToEditing,
            onToolbarScrollStart: editor.onToolbarScrollStart,
            onTouchContent: editor.onTouchContent,
            onTapContent: editor.onTapContent,
            onTouchToolstrip: editor.onTouchToolstrip,
            getCursorBox: getCursorBox
          };
        });
      });
    });
  };
  var $_1n2b1714sjepbvfuv = {
    getBody: getOrDerive('getBody', getBodyFromFrame),
    getDoc: getOrDerive('getDoc', getDocFromFrame),
    getWin: getOrDerive('getWin', getWinFromFrame),
    getSelection: getOrDerive('getSelection', getSelectionFromFrame),
    getFrame: getFrame,
    getActiveApi: getActiveApi
  };

  var attr = 'data-ephox-mobile-fullscreen-style';
  var siblingStyles = 'display:none!important;';
  var ancestorPosition = 'position:absolute!important;';
  var ancestorStyles = 'top:0!important;left:0!important;margin:0' + '!important;padding:0!important;width:100%!important;';
  var bgFallback = 'background-color:rgb(255,255,255)!important;';
  var isAndroid = $_fs3v1iwkjepbveaj.detect().os.isAndroid();
  var matchColor = function (editorBody) {
    var color = $_ct8mbo103jepbvesz.get(editorBody, 'background-color');
    return color !== undefined && color !== '' ? 'background-color:' + color + '!important' : bgFallback;
  };
  var clobberStyles = function (container, editorBody) {
    var gatherSibilings = function (element) {
      var siblings = $_7az4v0zvjepbves7.siblings(element, '*');
      return siblings;
    };
    var clobber = function (clobberStyle) {
      return function (element) {
        var styles = $_1sxky7xrjepbvefh.get(element, 'style');
        var backup = styles === undefined ? 'no-styles' : styles.trim();
        if (backup === clobberStyle) {
          return;
        } else {
          $_1sxky7xrjepbvefh.set(element, attr, backup);
          $_1sxky7xrjepbvefh.set(element, 'style', clobberStyle);
        }
      };
    };
    var ancestors = $_7az4v0zvjepbves7.ancestors(container, '*');
    var siblings = $_227y8rwsjepbveb6.bind(ancestors, gatherSibilings);
    var bgColor = matchColor(editorBody);
    $_227y8rwsjepbveb6.each(siblings, clobber(siblingStyles));
    $_227y8rwsjepbveb6.each(ancestors, clobber(ancestorPosition + ancestorStyles + bgColor));
    var containerStyles = isAndroid === true ? '' : ancestorPosition;
    clobber(containerStyles + ancestorStyles + bgColor)(container);
  };
  var restoreStyles = function () {
    var clobberedEls = $_7az4v0zvjepbves7.all('[' + attr + ']');
    $_227y8rwsjepbveb6.each(clobberedEls, function (element) {
      var restore = $_1sxky7xrjepbvefh.get(element, attr);
      if (restore !== 'no-styles') {
        $_1sxky7xrjepbvefh.set(element, 'style', restore);
      } else {
        $_1sxky7xrjepbvefh.remove(element, 'style');
      }
      $_1sxky7xrjepbvefh.remove(element, attr);
    });
  };
  var $_74a90r14tjepbvfv7 = {
    clobberStyles: clobberStyles,
    restoreStyles: restoreStyles
  };

  var tag = function () {
    var head = $_94ndqzxjepbvesc.first('head').getOrDie();
    var nu = function () {
      var meta = $_4pcs1kxfjepbvee2.fromTag('meta');
      $_1sxky7xrjepbvefh.set(meta, 'name', 'viewport');
      $_fm1c56x2jepbvecb.append(head, meta);
      return meta;
    };
    var element = $_94ndqzxjepbvesc.first('meta[name="viewport"]').getOrThunk(nu);
    var backup = $_1sxky7xrjepbvefh.get(element, 'content');
    var maximize = function () {
      $_1sxky7xrjepbvefh.set(element, 'content', 'width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0');
    };
    var restore = function () {
      if (backup !== undefined && backup !== null && backup.length > 0) {
        $_1sxky7xrjepbvefh.set(element, 'content', backup);
      } else {
        $_1sxky7xrjepbvefh.set(element, 'content', 'user-scalable=yes');
      }
    };
    return {
      maximize: maximize,
      restore: restore
    };
  };
  var $_6pdagw14ujepbvfvj = { tag: tag };

  var create$5 = function (platform, mask) {
    var meta = $_6pdagw14ujepbvfvj.tag();
    var androidApi = $_2a8rud12ojepbvfcl.api();
    var androidEvents = $_2a8rud12ojepbvfcl.api();
    var enter = function () {
      mask.hide();
      $_cs8xnaynjepbvelr.add(platform.container, $_3fme06zejepbvepj.resolve('fullscreen-maximized'));
      $_cs8xnaynjepbvelr.add(platform.container, $_3fme06zejepbvepj.resolve('android-maximized'));
      meta.maximize();
      $_cs8xnaynjepbvelr.add(platform.body, $_3fme06zejepbvepj.resolve('android-scroll-reload'));
      androidApi.set($_aoj5f2146jepbvfqz.setup(platform.win, $_1n2b1714sjepbvfuv.getWin(platform.editor).getOrDie('no')));
      $_1n2b1714sjepbvfuv.getActiveApi(platform.editor).each(function (editorApi) {
        $_74a90r14tjepbvfv7.clobberStyles(platform.container, editorApi.body());
        androidEvents.set($_eq8jcx142jepbvfpw.initEvents(editorApi, platform.toolstrip, platform.alloy));
      });
    };
    var exit = function () {
      meta.restore();
      mask.show();
      $_cs8xnaynjepbvelr.remove(platform.container, $_3fme06zejepbvepj.resolve('fullscreen-maximized'));
      $_cs8xnaynjepbvelr.remove(platform.container, $_3fme06zejepbvepj.resolve('android-maximized'));
      $_74a90r14tjepbvfv7.restoreStyles();
      $_cs8xnaynjepbvelr.remove(platform.body, $_3fme06zejepbvepj.resolve('android-scroll-reload'));
      androidEvents.clear();
      androidApi.clear();
    };
    return {
      enter: enter,
      exit: exit
    };
  };
  var $_323bbe141jepbvfpr = { create: create$5 };

  var adaptable = function (fn, rate) {
    var timer = null;
    var args = null;
    var cancel = function () {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
        args = null;
      }
    };
    var throttle = function () {
      args = arguments;
      if (timer === null) {
        timer = setTimeout(function () {
          fn.apply(null, args);
          timer = null;
          args = null;
        }, rate);
      }
    };
    return {
      cancel: cancel,
      throttle: throttle
    };
  };
  var first$4 = function (fn, rate) {
    var timer = null;
    var cancel = function () {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
    };
    var throttle = function () {
      var args = arguments;
      if (timer === null) {
        timer = setTimeout(function () {
          fn.apply(null, args);
          timer = null;
          args = null;
        }, rate);
      }
    };
    return {
      cancel: cancel,
      throttle: throttle
    };
  };
  var last$3 = function (fn, rate) {
    var timer = null;
    var cancel = function () {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
    };
    var throttle = function () {
      var args = arguments;
      if (timer !== null)
        clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(null, args);
        timer = null;
        args = null;
      }, rate);
    };
    return {
      cancel: cancel,
      throttle: throttle
    };
  };
  var $_37d9m714wjepbvfw2 = {
    adaptable: adaptable,
    first: first$4,
    last: last$3
  };

  var sketch$10 = function (onView, translate) {
    var memIcon = $_2ml82x11rjepbvf6k.record(Container.sketch({
      dom: $_8035n1113jepbvf1w.dom('<div aria-hidden="true" class="${prefix}-mask-tap-icon"></div>'),
      containerBehaviours: $_9otgsgy2jepbveh4.derive([Toggling.config({
          toggleClass: $_3fme06zejepbvepj.resolve('mask-tap-icon-selected'),
          toggleOnExecute: false
        })])
    }));
    var onViewThrottle = $_37d9m714wjepbvfw2.first(onView, 200);
    return Container.sketch({
      dom: $_8035n1113jepbvf1w.dom('<div class="${prefix}-disabled-mask"></div>'),
      components: [Container.sketch({
          dom: $_8035n1113jepbvf1w.dom('<div class="${prefix}-content-container"></div>'),
          components: [Button.sketch({
              dom: $_8035n1113jepbvf1w.dom('<div class="${prefix}-content-tap-section"></div>'),
              components: [memIcon.asSpec()],
              action: function (button) {
                onViewThrottle.throttle();
              },
              buttonBehaviours: $_9otgsgy2jepbveh4.derive([Toggling.config({ toggleClass: $_3fme06zejepbvepj.resolve('mask-tap-icon-selected') })])
            })]
        })]
    });
  };
  var $_334ueu14vjepbvfvr = { sketch: sketch$10 };

  var MobileSchema = $_7je55jyejepbvekc.objOf([
    $_8rfcbxy7jepbvein.strictObjOf('editor', [
      $_8rfcbxy7jepbvein.strict('getFrame'),
      $_8rfcbxy7jepbvein.option('getBody'),
      $_8rfcbxy7jepbvein.option('getDoc'),
      $_8rfcbxy7jepbvein.option('getWin'),
      $_8rfcbxy7jepbvein.option('getSelection'),
      $_8rfcbxy7jepbvein.option('setSelection'),
      $_8rfcbxy7jepbvein.option('clearSelection'),
      $_8rfcbxy7jepbvein.option('cursorSaver'),
      $_8rfcbxy7jepbvein.option('onKeyup'),
      $_8rfcbxy7jepbvein.option('onNodeChanged'),
      $_8rfcbxy7jepbvein.option('getCursorBox'),
      $_8rfcbxy7jepbvein.strict('onDomChanged'),
      $_8rfcbxy7jepbvein.defaulted('onTouchContent', $_167yw6wjjepbveag.noop),
      $_8rfcbxy7jepbvein.defaulted('onTapContent', $_167yw6wjjepbveag.noop),
      $_8rfcbxy7jepbvein.defaulted('onTouchToolstrip', $_167yw6wjjepbveag.noop),
      $_8rfcbxy7jepbvein.defaulted('onScrollToCursor', $_167yw6wjjepbveag.constant({ unbind: $_167yw6wjjepbveag.noop })),
      $_8rfcbxy7jepbvein.defaulted('onScrollToElement', $_167yw6wjjepbveag.constant({ unbind: $_167yw6wjjepbveag.noop })),
      $_8rfcbxy7jepbvein.defaulted('onToEditing', $_167yw6wjjepbveag.constant({ unbind: $_167yw6wjjepbveag.noop })),
      $_8rfcbxy7jepbvein.defaulted('onToReading', $_167yw6wjjepbveag.constant({ unbind: $_167yw6wjjepbveag.noop })),
      $_8rfcbxy7jepbvein.defaulted('onToolbarScrollStart', $_167yw6wjjepbveag.identity)
    ]),
    $_8rfcbxy7jepbvein.strict('socket'),
    $_8rfcbxy7jepbvein.strict('toolstrip'),
    $_8rfcbxy7jepbvein.strict('dropup'),
    $_8rfcbxy7jepbvein.strict('toolbar'),
    $_8rfcbxy7jepbvein.strict('container'),
    $_8rfcbxy7jepbvein.strict('alloy'),
    $_8rfcbxy7jepbvein.state('win', function (spec) {
      return $_ginpy6x3jepbvece.owner(spec.socket).dom().defaultView;
    }),
    $_8rfcbxy7jepbvein.state('body', function (spec) {
      return $_4pcs1kxfjepbvee2.fromDom(spec.socket.dom().ownerDocument.body);
    }),
    $_8rfcbxy7jepbvein.defaulted('translate', $_167yw6wjjepbveag.identity),
    $_8rfcbxy7jepbvein.defaulted('setReadOnly', $_167yw6wjjepbveag.noop)
  ]);

  var produce = function (raw) {
    var mobile = $_7je55jyejepbvekc.asRawOrDie('Getting AndroidWebapp schema', MobileSchema, raw);
    $_ct8mbo103jepbvesz.set(mobile.toolstrip, 'width', '100%');
    var onTap = function () {
      mobile.setReadOnly(true);
      mode.enter();
    };
    var mask = $_etb0t512tjepbvfe4.build($_334ueu14vjepbvfvr.sketch(onTap, mobile.translate));
    mobile.alloy.add(mask);
    var maskApi = {
      show: function () {
        mobile.alloy.add(mask);
      },
      hide: function () {
        mobile.alloy.remove(mask);
      }
    };
    $_fm1c56x2jepbvecb.append(mobile.container, mask.element());
    var mode = $_323bbe141jepbvfpr.create(mobile, maskApi);
    return {
      setReadOnly: mobile.setReadOnly,
      refreshStructure: $_167yw6wjjepbveag.noop,
      enter: mode.enter,
      exit: mode.exit,
      destroy: $_167yw6wjjepbveag.noop
    };
  };
  var $_1d2bir140jepbvfph = { produce: produce };

  var schema$14 = [
    $_8rfcbxy7jepbvein.defaulted('shell', true),
    $_4fa1o810ojepbvexo.field('toolbarBehaviours', [Replacing])
  ];
  var enhanceGroups = function (detail) {
    return { behaviours: $_9otgsgy2jepbveh4.derive([Replacing.config({})]) };
  };
  var partTypes$1 = [$_3jjkp510vjepbvezm.optional({
      name: 'groups',
      overrides: enhanceGroups
    })];
  var $_1dilq5150jepbvfxg = {
    name: $_167yw6wjjepbveag.constant('Toolbar'),
    schema: $_167yw6wjjepbveag.constant(schema$14),
    parts: $_167yw6wjjepbveag.constant(partTypes$1)
  };

  var factory$4 = function (detail, components, spec, _externals) {
    var setGroups = function (toolbar, groups) {
      getGroupContainer(toolbar).fold(function () {
        console.error('Toolbar was defined to not be a shell, but no groups container was specified in components');
        throw new Error('Toolbar was defined to not be a shell, but no groups container was specified in components');
      }, function (container) {
        Replacing.set(container, groups);
      });
    };
    var getGroupContainer = function (component) {
      return detail.shell() ? Option.some(component) : $_1n5d3m10tjepbveyq.getPart(component, detail, 'groups');
    };
    var extra = detail.shell() ? {
      behaviours: [Replacing.config({})],
      components: []
    } : {
      behaviours: [],
      components: components
    };
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      components: extra.components,
      behaviours: $_aaookwyjepbvebq.deepMerge($_9otgsgy2jepbveh4.derive(extra.behaviours), $_4fa1o810ojepbvexo.get(detail.toolbarBehaviours())),
      apis: { setGroups: setGroups },
      domModification: { attributes: { role: 'group' } }
    };
  };
  var Toolbar = $_bv7bve10pjepbvexx.composite({
    name: 'Toolbar',
    configFields: $_1dilq5150jepbvfxg.schema(),
    partFields: $_1dilq5150jepbvfxg.parts(),
    factory: factory$4,
    apis: {
      setGroups: function (apis, toolbar, groups) {
        apis.setGroups(toolbar, groups);
      }
    }
  });

  var schema$15 = [
    $_8rfcbxy7jepbvein.strict('items'),
    $_ca0qsez6jepbvens.markers(['itemClass']),
    $_4fa1o810ojepbvexo.field('tgroupBehaviours', [Keying])
  ];
  var partTypes$2 = [$_3jjkp510vjepbvezm.group({
      name: 'items',
      unit: 'item',
      overrides: function (detail) {
        return { domModification: { classes: [detail.markers().itemClass()] } };
      }
    })];
  var $_4t91tf152jepbvfxs = {
    name: $_167yw6wjjepbveag.constant('ToolbarGroup'),
    schema: $_167yw6wjjepbveag.constant(schema$15),
    parts: $_167yw6wjjepbveag.constant(partTypes$2)
  };

  var factory$5 = function (detail, components, spec, _externals) {
    return $_aaookwyjepbvebq.deepMerge({ dom: { attributes: { role: 'toolbar' } } }, {
      uid: detail.uid(),
      dom: detail.dom(),
      components: components,
      behaviours: $_aaookwyjepbvebq.deepMerge($_9otgsgy2jepbveh4.derive([Keying.config({
          mode: 'flow',
          selector: '.' + detail.markers().itemClass()
        })]), $_4fa1o810ojepbvexo.get(detail.tgroupBehaviours())),
      'debug.sketcher': spec['debug.sketcher']
    });
  };
  var ToolbarGroup = $_bv7bve10pjepbvexx.composite({
    name: 'ToolbarGroup',
    configFields: $_4t91tf152jepbvfxs.schema(),
    partFields: $_4t91tf152jepbvfxs.parts(),
    factory: factory$5
  });

  var dataHorizontal = 'data-' + $_3fme06zejepbvepj.resolve('horizontal-scroll');
  var canScrollVertically = function (container) {
    container.dom().scrollTop = 1;
    var result = container.dom().scrollTop !== 0;
    container.dom().scrollTop = 0;
    return result;
  };
  var canScrollHorizontally = function (container) {
    container.dom().scrollLeft = 1;
    var result = container.dom().scrollLeft !== 0;
    container.dom().scrollLeft = 0;
    return result;
  };
  var hasVerticalScroll = function (container) {
    return container.dom().scrollTop > 0 || canScrollVertically(container);
  };
  var hasHorizontalScroll = function (container) {
    return container.dom().scrollLeft > 0 || canScrollHorizontally(container);
  };
  var markAsHorizontal = function (container) {
    $_1sxky7xrjepbvefh.set(container, dataHorizontal, 'true');
  };
  var hasScroll = function (container) {
    return $_1sxky7xrjepbvefh.get(container, dataHorizontal) === 'true' ? hasHorizontalScroll : hasVerticalScroll;
  };
  var exclusive = function (scope, selector) {
    return $_fr2gc113xjepbvfp3.bind(scope, 'touchmove', function (event) {
      $_94ndqzxjepbvesc.closest(event.target(), selector).filter(hasScroll).fold(function () {
        event.raw().preventDefault();
      }, $_167yw6wjjepbveag.noop);
    });
  };
  var $_2ufaeq153jepbvfxy = {
    exclusive: exclusive,
    markAsHorizontal: markAsHorizontal
  };

  function ScrollingToolbar () {
    var makeGroup = function (gSpec) {
      var scrollClass = gSpec.scrollable === true ? '${prefix}-toolbar-scrollable-group' : '';
      return {
        dom: $_8035n1113jepbvf1w.dom('<div aria-label="' + gSpec.label + '" class="${prefix}-toolbar-group ' + scrollClass + '"></div>'),
        tgroupBehaviours: $_9otgsgy2jepbveh4.derive([$_c3kqad126jepbvf94.config('adhoc-scrollable-toolbar', gSpec.scrollable === true ? [$_81tpe0y4jepbvehy.runOnInit(function (component, simulatedEvent) {
              $_ct8mbo103jepbvesz.set(component.element(), 'overflow-x', 'auto');
              $_2ufaeq153jepbvfxy.markAsHorizontal(component.element());
              $_62bvz013ujepbvfoi.register(component.element());
            })] : [])]),
        components: [Container.sketch({ components: [ToolbarGroup.parts().items({})] })],
        markers: { itemClass: $_3fme06zejepbvepj.resolve('toolbar-group-item') },
        items: gSpec.items
      };
    };
    var toolbar = $_etb0t512tjepbvfe4.build(Toolbar.sketch({
      dom: $_8035n1113jepbvf1w.dom('<div class="${prefix}-toolbar"></div>'),
      components: [Toolbar.parts().groups({})],
      toolbarBehaviours: $_9otgsgy2jepbveh4.derive([
        Toggling.config({
          toggleClass: $_3fme06zejepbvepj.resolve('context-toolbar'),
          toggleOnExecute: false,
          aria: { mode: 'none' }
        }),
        Keying.config({ mode: 'cyclic' })
      ]),
      shell: true
    }));
    var wrapper = $_etb0t512tjepbvfe4.build(Container.sketch({
      dom: { classes: [$_3fme06zejepbvepj.resolve('toolstrip')] },
      components: [$_etb0t512tjepbvfe4.premade(toolbar)],
      containerBehaviours: $_9otgsgy2jepbveh4.derive([Toggling.config({
          toggleClass: $_3fme06zejepbvepj.resolve('android-selection-context-toolbar'),
          toggleOnExecute: false
        })])
    }));
    var resetGroups = function () {
      Toolbar.setGroups(toolbar, initGroups.get());
      Toggling.off(toolbar);
    };
    var initGroups = Cell([]);
    var setGroups = function (gs) {
      initGroups.set(gs);
      resetGroups();
    };
    var createGroups = function (gs) {
      return $_227y8rwsjepbveb6.map(gs, $_167yw6wjjepbveag.compose(ToolbarGroup.sketch, makeGroup));
    };
    var refresh = function () {
      Toolbar.refresh(toolbar);
    };
    var setContextToolbar = function (gs) {
      Toggling.on(toolbar);
      Toolbar.setGroups(toolbar, gs);
    };
    var restoreToolbar = function () {
      if (Toggling.isOn(toolbar)) {
        resetGroups();
      }
    };
    var focus = function () {
      Keying.focusIn(toolbar);
    };
    return {
      wrapper: $_167yw6wjjepbveag.constant(wrapper),
      toolbar: $_167yw6wjjepbveag.constant(toolbar),
      createGroups: createGroups,
      setGroups: setGroups,
      setContextToolbar: setContextToolbar,
      restoreToolbar: restoreToolbar,
      refresh: refresh,
      focus: focus
    };
  }

  var makeEditSwitch = function (webapp) {
    return $_etb0t512tjepbvfe4.build(Button.sketch({
      dom: $_8035n1113jepbvf1w.dom('<div class="${prefix}-mask-edit-icon ${prefix}-icon"></div>'),
      action: function () {
        webapp.run(function (w) {
          w.setReadOnly(false);
        });
      }
    }));
  };
  var makeSocket = function () {
    return $_etb0t512tjepbvfe4.build(Container.sketch({
      dom: $_8035n1113jepbvf1w.dom('<div class="${prefix}-editor-socket"></div>'),
      components: [],
      containerBehaviours: $_9otgsgy2jepbveh4.derive([Replacing.config({})])
    }));
  };
  var showEdit = function (socket, switchToEdit) {
    Replacing.append(socket, $_etb0t512tjepbvfe4.premade(switchToEdit));
  };
  var hideEdit = function (socket, switchToEdit) {
    Replacing.remove(socket, switchToEdit);
  };
  var updateMode = function (socket, switchToEdit, readOnly, root) {
    var swap = readOnly === true ? Swapping.toAlpha : Swapping.toOmega;
    swap(root);
    var f = readOnly ? showEdit : hideEdit;
    f(socket, switchToEdit);
  };
  var $_716azr154jepbvfy8 = {
    makeEditSwitch: makeEditSwitch,
    makeSocket: makeSocket,
    updateMode: updateMode
  };

  var getAnimationRoot = function (component, slideConfig) {
    return slideConfig.getAnimationRoot().fold(function () {
      return component.element();
    }, function (get) {
      return get(component);
    });
  };
  var getDimensionProperty = function (slideConfig) {
    return slideConfig.dimension().property();
  };
  var getDimension = function (slideConfig, elem) {
    return slideConfig.dimension().getDimension()(elem);
  };
  var disableTransitions = function (component, slideConfig) {
    var root = getAnimationRoot(component, slideConfig);
    $_f9xa8l137jepbvfj2.remove(root, [
      slideConfig.shrinkingClass(),
      slideConfig.growingClass()
    ]);
  };
  var setShrunk = function (component, slideConfig) {
    $_cs8xnaynjepbvelr.remove(component.element(), slideConfig.openClass());
    $_cs8xnaynjepbvelr.add(component.element(), slideConfig.closedClass());
    $_ct8mbo103jepbvesz.set(component.element(), getDimensionProperty(slideConfig), '0px');
    $_ct8mbo103jepbvesz.reflow(component.element());
  };
  var measureTargetSize = function (component, slideConfig) {
    setGrown(component, slideConfig);
    var expanded = getDimension(slideConfig, component.element());
    setShrunk(component, slideConfig);
    return expanded;
  };
  var setGrown = function (component, slideConfig) {
    $_cs8xnaynjepbvelr.remove(component.element(), slideConfig.closedClass());
    $_cs8xnaynjepbvelr.add(component.element(), slideConfig.openClass());
    $_ct8mbo103jepbvesz.remove(component.element(), getDimensionProperty(slideConfig));
  };
  var doImmediateShrink = function (component, slideConfig, slideState) {
    slideState.setCollapsed();
    $_ct8mbo103jepbvesz.set(component.element(), getDimensionProperty(slideConfig), getDimension(slideConfig, component.element()));
    $_ct8mbo103jepbvesz.reflow(component.element());
    disableTransitions(component, slideConfig);
    setShrunk(component, slideConfig);
    slideConfig.onStartShrink()(component);
    slideConfig.onShrunk()(component);
  };
  var doStartShrink = function (component, slideConfig, slideState) {
    slideState.setCollapsed();
    $_ct8mbo103jepbvesz.set(component.element(), getDimensionProperty(slideConfig), getDimension(slideConfig, component.element()));
    $_ct8mbo103jepbvesz.reflow(component.element());
    var root = getAnimationRoot(component, slideConfig);
    $_cs8xnaynjepbvelr.add(root, slideConfig.shrinkingClass());
    setShrunk(component, slideConfig);
    slideConfig.onStartShrink()(component);
  };
  var doStartGrow = function (component, slideConfig, slideState) {
    var fullSize = measureTargetSize(component, slideConfig);
    var root = getAnimationRoot(component, slideConfig);
    $_cs8xnaynjepbvelr.add(root, slideConfig.growingClass());
    setGrown(component, slideConfig);
    $_ct8mbo103jepbvesz.set(component.element(), getDimensionProperty(slideConfig), fullSize);
    slideState.setExpanded();
    slideConfig.onStartGrow()(component);
  };
  var grow = function (component, slideConfig, slideState) {
    if (!slideState.isExpanded())
      doStartGrow(component, slideConfig, slideState);
  };
  var shrink = function (component, slideConfig, slideState) {
    if (slideState.isExpanded())
      doStartShrink(component, slideConfig, slideState);
  };
  var immediateShrink = function (component, slideConfig, slideState) {
    if (slideState.isExpanded())
      doImmediateShrink(component, slideConfig, slideState);
  };
  var hasGrown = function (component, slideConfig, slideState) {
    return slideState.isExpanded();
  };
  var hasShrunk = function (component, slideConfig, slideState) {
    return slideState.isCollapsed();
  };
  var isGrowing = function (component, slideConfig, slideState) {
    var root = getAnimationRoot(component, slideConfig);
    return $_cs8xnaynjepbvelr.has(root, slideConfig.growingClass()) === true;
  };
  var isShrinking = function (component, slideConfig, slideState) {
    var root = getAnimationRoot(component, slideConfig);
    return $_cs8xnaynjepbvelr.has(root, slideConfig.shrinkingClass()) === true;
  };
  var isTransitioning = function (component, slideConfig, slideState) {
    return isGrowing(component, slideConfig, slideState) === true || isShrinking(component, slideConfig, slideState) === true;
  };
  var toggleGrow = function (component, slideConfig, slideState) {
    var f = slideState.isExpanded() ? doStartShrink : doStartGrow;
    f(component, slideConfig, slideState);
  };
  var $_ef0xhm158jepbvfz5 = {
    grow: grow,
    shrink: shrink,
    immediateShrink: immediateShrink,
    hasGrown: hasGrown,
    hasShrunk: hasShrunk,
    isGrowing: isGrowing,
    isShrinking: isShrinking,
    isTransitioning: isTransitioning,
    toggleGrow: toggleGrow,
    disableTransitions: disableTransitions
  };

  var exhibit$5 = function (base, slideConfig) {
    var expanded = slideConfig.expanded();
    return expanded ? $_1rbjqxyhjepbveks.nu({
      classes: [slideConfig.openClass()],
      styles: {}
    }) : $_1rbjqxyhjepbveks.nu({
      classes: [slideConfig.closedClass()],
      styles: $_f53w39xsjepbvefs.wrap(slideConfig.dimension().property(), '0px')
    });
  };
  var events$9 = function (slideConfig, slideState) {
    return $_81tpe0y4jepbvehy.derive([$_81tpe0y4jepbvehy.run($_e2bl11wijepbvead.transitionend(), function (component, simulatedEvent) {
        var raw = simulatedEvent.event().raw();
        if (raw.propertyName === slideConfig.dimension().property()) {
          $_ef0xhm158jepbvfz5.disableTransitions(component, slideConfig, slideState);
          if (slideState.isExpanded())
            $_ct8mbo103jepbvesz.remove(component.element(), slideConfig.dimension().property());
          var notify = slideState.isExpanded() ? slideConfig.onGrown() : slideConfig.onShrunk();
          notify(component, simulatedEvent);
        }
      })]);
  };
  var $_bl5cog157jepbvfyw = {
    exhibit: exhibit$5,
    events: events$9
  };

  var SlidingSchema = [
    $_8rfcbxy7jepbvein.strict('closedClass'),
    $_8rfcbxy7jepbvein.strict('openClass'),
    $_8rfcbxy7jepbvein.strict('shrinkingClass'),
    $_8rfcbxy7jepbvein.strict('growingClass'),
    $_8rfcbxy7jepbvein.option('getAnimationRoot'),
    $_ca0qsez6jepbvens.onHandler('onShrunk'),
    $_ca0qsez6jepbvens.onHandler('onStartShrink'),
    $_ca0qsez6jepbvens.onHandler('onGrown'),
    $_ca0qsez6jepbvens.onHandler('onStartGrow'),
    $_8rfcbxy7jepbvein.defaulted('expanded', false),
    $_8rfcbxy7jepbvein.strictOf('dimension', $_7je55jyejepbvekc.choose('property', {
      width: [
        $_ca0qsez6jepbvens.output('property', 'width'),
        $_ca0qsez6jepbvens.output('getDimension', function (elem) {
          return $_j3x6211kjepbvf58.get(elem) + 'px';
        })
      ],
      height: [
        $_ca0qsez6jepbvens.output('property', 'height'),
        $_ca0qsez6jepbvens.output('getDimension', function (elem) {
          return $_2t28t5102jepbvesx.get(elem) + 'px';
        })
      ]
    }))
  ];

  var init$4 = function (spec) {
    var state = Cell(spec.expanded());
    var readState = function () {
      return 'expanded: ' + state.get();
    };
    return BehaviourState({
      isExpanded: function () {
        return state.get() === true;
      },
      isCollapsed: function () {
        return state.get() === false;
      },
      setCollapsed: $_167yw6wjjepbveag.curry(state.set, false),
      setExpanded: $_167yw6wjjepbveag.curry(state.set, true),
      readState: readState
    });
  };
  var $_5hk92v15ajepbvfzu = { init: init$4 };

  var Sliding = $_9otgsgy2jepbveh4.create({
    fields: SlidingSchema,
    name: 'sliding',
    active: $_bl5cog157jepbvfyw,
    apis: $_ef0xhm158jepbvfz5,
    state: $_5hk92v15ajepbvfzu
  });

  var build$2 = function (refresh, scrollIntoView) {
    var dropup = $_etb0t512tjepbvfe4.build(Container.sketch({
      dom: {
        tag: 'div',
        classes: $_3fme06zejepbvepj.resolve('dropup')
      },
      components: [],
      containerBehaviours: $_9otgsgy2jepbveh4.derive([
        Replacing.config({}),
        Sliding.config({
          closedClass: $_3fme06zejepbvepj.resolve('dropup-closed'),
          openClass: $_3fme06zejepbvepj.resolve('dropup-open'),
          shrinkingClass: $_3fme06zejepbvepj.resolve('dropup-shrinking'),
          growingClass: $_3fme06zejepbvepj.resolve('dropup-growing'),
          dimension: { property: 'height' },
          onShrunk: function (component) {
            refresh();
            scrollIntoView();
            Replacing.set(component, []);
          },
          onGrown: function (component) {
            refresh();
            scrollIntoView();
          }
        }),
        $_bqtojizdjepbvepe.orientation(function (component, data) {
          disappear($_167yw6wjjepbveag.noop);
        })
      ])
    }));
    var appear = function (menu, update, component) {
      if (Sliding.hasShrunk(dropup) === true && Sliding.isTransitioning(dropup) === false) {
        window.requestAnimationFrame(function () {
          update(component);
          Replacing.set(dropup, [menu()]);
          Sliding.grow(dropup);
        });
      }
    };
    var disappear = function (onReadyToShrink) {
      window.requestAnimationFrame(function () {
        onReadyToShrink();
        Sliding.shrink(dropup);
      });
    };
    return {
      appear: appear,
      disappear: disappear,
      component: $_167yw6wjjepbveag.constant(dropup),
      element: dropup.element
    };
  };
  var $_7vevfv155jepbvfyi = { build: build$2 };

  var isDangerous = function (event) {
    return event.raw().which === $_fngredzpjepbver5.BACKSPACE()[0] && !$_227y8rwsjepbveb6.contains([
      'input',
      'textarea'
    ], $_4aeewhxkjepbveek.name(event.target()));
  };
  var isFirefox = $_fs3v1iwkjepbveaj.detect().browser.isFirefox();
  var settingsSchema = $_7je55jyejepbvekc.objOfOnly([
    $_8rfcbxy7jepbvein.strictFunction('triggerEvent'),
    $_8rfcbxy7jepbvein.strictFunction('broadcastEvent'),
    $_8rfcbxy7jepbvein.defaulted('stopBackspace', true)
  ]);
  var bindFocus = function (container, handler) {
    if (isFirefox) {
      return $_fr2gc113xjepbvfp3.capture(container, 'focus', handler);
    } else {
      return $_fr2gc113xjepbvfp3.bind(container, 'focusin', handler);
    }
  };
  var bindBlur = function (container, handler) {
    if (isFirefox) {
      return $_fr2gc113xjepbvfp3.capture(container, 'blur', handler);
    } else {
      return $_fr2gc113xjepbvfp3.bind(container, 'focusout', handler);
    }
  };
  var setup$2 = function (container, rawSettings) {
    var settings = $_7je55jyejepbvekc.asRawOrDie('Getting GUI events settings', settingsSchema, rawSettings);
    var pointerEvents = $_fs3v1iwkjepbveaj.detect().deviceType.isTouch() ? [
      'touchstart',
      'touchmove',
      'touchend',
      'gesturestart'
    ] : [
      'mousedown',
      'mouseup',
      'mouseover',
      'mousemove',
      'mouseout',
      'click'
    ];
    var tapEvent = $_6k51tn144jepbvfql.monitor(settings);
    var simpleEvents = $_227y8rwsjepbveb6.map(pointerEvents.concat([
      'selectstart',
      'input',
      'contextmenu',
      'change',
      'transitionend',
      'dragstart',
      'dragover',
      'drop'
    ]), function (type) {
      return $_fr2gc113xjepbvfp3.bind(container, type, function (event) {
        tapEvent.fireIfReady(event, type).each(function (tapStopped) {
          if (tapStopped)
            event.kill();
        });
        var stopped = settings.triggerEvent(type, event);
        if (stopped)
          event.kill();
      });
    });
    var onKeydown = $_fr2gc113xjepbvfp3.bind(container, 'keydown', function (event) {
      var stopped = settings.triggerEvent('keydown', event);
      if (stopped)
        event.kill();
      else if (settings.stopBackspace === true && isDangerous(event)) {
        event.prevent();
      }
    });
    var onFocusIn = bindFocus(container, function (event) {
      var stopped = settings.triggerEvent('focusin', event);
      if (stopped)
        event.kill();
    });
    var onFocusOut = bindBlur(container, function (event) {
      var stopped = settings.triggerEvent('focusout', event);
      if (stopped)
        event.kill();
      setTimeout(function () {
        settings.triggerEvent($_alx3dcwhjepbvea8.postBlur(), event);
      }, 0);
    });
    var defaultView = $_ginpy6x3jepbvece.defaultView(container);
    var onWindowScroll = $_fr2gc113xjepbvfp3.bind(defaultView, 'scroll', function (event) {
      var stopped = settings.broadcastEvent($_alx3dcwhjepbvea8.windowScroll(), event);
      if (stopped)
        event.kill();
    });
    var unbind = function () {
      $_227y8rwsjepbveb6.each(simpleEvents, function (e) {
        e.unbind();
      });
      onKeydown.unbind();
      onFocusIn.unbind();
      onFocusOut.unbind();
      onWindowScroll.unbind();
    };
    return { unbind: unbind };
  };
  var $_8112sh15djepbvg0v = { setup: setup$2 };

  var derive$3 = function (rawEvent, rawTarget) {
    var source = $_f53w39xsjepbvefs.readOptFrom(rawEvent, 'target').map(function (getTarget) {
      return getTarget();
    }).getOr(rawTarget);
    return Cell(source);
  };
  var $_fg0p8l15fjepbvg1k = { derive: derive$3 };

  var fromSource = function (event, source) {
    var stopper = Cell(false);
    var cutter = Cell(false);
    var stop = function () {
      stopper.set(true);
    };
    var cut = function () {
      cutter.set(true);
    };
    return {
      stop: stop,
      cut: cut,
      isStopped: stopper.get,
      isCut: cutter.get,
      event: $_167yw6wjjepbveag.constant(event),
      setSource: source.set,
      getSource: source.get
    };
  };
  var fromExternal = function (event) {
    var stopper = Cell(false);
    var stop = function () {
      stopper.set(true);
    };
    return {
      stop: stop,
      cut: $_167yw6wjjepbveag.noop,
      isStopped: stopper.get,
      isCut: $_167yw6wjjepbveag.constant(false),
      event: $_167yw6wjjepbveag.constant(event),
      setTarget: $_167yw6wjjepbveag.die(new Error('Cannot set target of a broadcasted event')),
      getTarget: $_167yw6wjjepbveag.die(new Error('Cannot get target of a broadcasted event'))
    };
  };
  var fromTarget = function (event, target) {
    var source = Cell(target);
    return fromSource(event, source);
  };
  var $_fpt3bt15gjepbvg1p = {
    fromSource: fromSource,
    fromExternal: fromExternal,
    fromTarget: fromTarget
  };

  var adt$6 = $_9vwywgxwjepbvegj.generate([
    { stopped: [] },
    { resume: ['element'] },
    { complete: [] }
  ]);
  var doTriggerHandler = function (lookup, eventType, rawEvent, target, source, logger) {
    var handler = lookup(eventType, target);
    var simulatedEvent = $_fpt3bt15gjepbvg1p.fromSource(rawEvent, source);
    return handler.fold(function () {
      logger.logEventNoHandlers(eventType, target);
      return adt$6.complete();
    }, function (handlerInfo) {
      var descHandler = handlerInfo.descHandler();
      var eventHandler = $_5tsbqa134jepbvfhv.getHandler(descHandler);
      eventHandler(simulatedEvent);
      if (simulatedEvent.isStopped()) {
        logger.logEventStopped(eventType, handlerInfo.element(), descHandler.purpose());
        return adt$6.stopped();
      } else if (simulatedEvent.isCut()) {
        logger.logEventCut(eventType, handlerInfo.element(), descHandler.purpose());
        return adt$6.complete();
      } else
        return $_ginpy6x3jepbvece.parent(handlerInfo.element()).fold(function () {
          logger.logNoParent(eventType, handlerInfo.element(), descHandler.purpose());
          return adt$6.complete();
        }, function (parent) {
          logger.logEventResponse(eventType, handlerInfo.element(), descHandler.purpose());
          return adt$6.resume(parent);
        });
    });
  };
  var doTriggerOnUntilStopped = function (lookup, eventType, rawEvent, rawTarget, source, logger) {
    return doTriggerHandler(lookup, eventType, rawEvent, rawTarget, source, logger).fold(function () {
      return true;
    }, function (parent) {
      return doTriggerOnUntilStopped(lookup, eventType, rawEvent, parent, source, logger);
    }, function () {
      return false;
    });
  };
  var triggerHandler = function (lookup, eventType, rawEvent, target, logger) {
    var source = $_fg0p8l15fjepbvg1k.derive(rawEvent, target);
    return doTriggerHandler(lookup, eventType, rawEvent, target, source, logger);
  };
  var broadcast = function (listeners, rawEvent, logger) {
    var simulatedEvent = $_fpt3bt15gjepbvg1p.fromExternal(rawEvent);
    $_227y8rwsjepbveb6.each(listeners, function (listener) {
      var descHandler = listener.descHandler();
      var handler = $_5tsbqa134jepbvfhv.getHandler(descHandler);
      handler(simulatedEvent);
    });
    return simulatedEvent.isStopped();
  };
  var triggerUntilStopped = function (lookup, eventType, rawEvent, logger) {
    var rawTarget = rawEvent.target();
    return triggerOnUntilStopped(lookup, eventType, rawEvent, rawTarget, logger);
  };
  var triggerOnUntilStopped = function (lookup, eventType, rawEvent, rawTarget, logger) {
    var source = $_fg0p8l15fjepbvg1k.derive(rawEvent, rawTarget);
    return doTriggerOnUntilStopped(lookup, eventType, rawEvent, rawTarget, source, logger);
  };
  var $_1b6fx615ejepbvg1c = {
    triggerHandler: triggerHandler,
    triggerUntilStopped: triggerUntilStopped,
    triggerOnUntilStopped: triggerOnUntilStopped,
    broadcast: broadcast
  };

  var closest$4 = function (target, transform, isRoot) {
    var delegate = $_g7dmbqyvjepbvemd.closest(target, function (elem) {
      return transform(elem).isSome();
    }, isRoot);
    return delegate.bind(transform);
  };
  var $_fvog4h15jjepbvg2g = { closest: closest$4 };

  var eventHandler = $_2pqntjx4jepbvecr.immutable('element', 'descHandler');
  var messageHandler = function (id, handler) {
    return {
      id: $_167yw6wjjepbveag.constant(id),
      descHandler: $_167yw6wjjepbveag.constant(handler)
    };
  };
  function EventRegistry () {
    var registry = {};
    var registerId = function (extraArgs, id, events) {
      $_1l8sbcx0jepbvebt.each(events, function (v, k) {
        var handlers = registry[k] !== undefined ? registry[k] : {};
        handlers[id] = $_5tsbqa134jepbvfhv.curryArgs(v, extraArgs);
        registry[k] = handlers;
      });
    };
    var findHandler = function (handlers, elem) {
      return $_6keeyb10xjepbvf0l.read(elem).fold(function (err) {
        return Option.none();
      }, function (id) {
        var reader = $_f53w39xsjepbvefs.readOpt(id);
        return handlers.bind(reader).map(function (descHandler) {
          return eventHandler(elem, descHandler);
        });
      });
    };
    var filterByType = function (type) {
      return $_f53w39xsjepbvefs.readOptFrom(registry, type).map(function (handlers) {
        return $_1l8sbcx0jepbvebt.mapToArray(handlers, function (f, id) {
          return messageHandler(id, f);
        });
      }).getOr([]);
    };
    var find = function (isAboveRoot, type, target) {
      var readType = $_f53w39xsjepbvefs.readOpt(type);
      var handlers = readType(registry);
      return $_fvog4h15jjepbvg2g.closest(target, function (elem) {
        return findHandler(handlers, elem);
      }, isAboveRoot);
    };
    var unregisterId = function (id) {
      $_1l8sbcx0jepbvebt.each(registry, function (handlersById, eventName) {
        if (handlersById.hasOwnProperty(id))
          delete handlersById[id];
      });
    };
    return {
      registerId: registerId,
      unregisterId: unregisterId,
      filterByType: filterByType,
      find: find
    };
  }

  function Registry () {
    var events = EventRegistry();
    var components = {};
    var readOrTag = function (component) {
      var elem = component.element();
      return $_6keeyb10xjepbvf0l.read(elem).fold(function () {
        return $_6keeyb10xjepbvf0l.write('uid-', component.element());
      }, function (uid) {
        return uid;
      });
    };
    var failOnDuplicate = function (component, tagId) {
      var conflict = components[tagId];
      if (conflict === component)
        unregister(component);
      else
        throw new Error('The tagId "' + tagId + '" is already used by: ' + $_bx258xmjepbvef1.element(conflict.element()) + '\nCannot use it for: ' + $_bx258xmjepbvef1.element(component.element()) + '\n' + 'The conflicting element is' + ($_eqayqzxjjepbveeh.inBody(conflict.element()) ? ' ' : ' not ') + 'already in the DOM');
    };
    var register = function (component) {
      var tagId = readOrTag(component);
      if ($_f53w39xsjepbvefs.hasKey(components, tagId))
        failOnDuplicate(component, tagId);
      var extraArgs = [component];
      events.registerId(extraArgs, tagId, component.events());
      components[tagId] = component;
    };
    var unregister = function (component) {
      $_6keeyb10xjepbvf0l.read(component.element()).each(function (tagId) {
        components[tagId] = undefined;
        events.unregisterId(tagId);
      });
    };
    var filter = function (type) {
      return events.filterByType(type);
    };
    var find = function (isAboveRoot, type, target) {
      return events.find(isAboveRoot, type, target);
    };
    var getById = function (id) {
      return $_f53w39xsjepbvefs.readOpt(id)(components);
    };
    return {
      find: find,
      filter: filter,
      register: register,
      unregister: unregister,
      getById: getById
    };
  }

  var create$6 = function () {
    var root = $_etb0t512tjepbvfe4.build(Container.sketch({ dom: { tag: 'div' } }));
    return takeover(root);
  };
  var takeover = function (root) {
    var isAboveRoot = function (el) {
      return $_ginpy6x3jepbvece.parent(root.element()).fold(function () {
        return true;
      }, function (parent) {
        return $_6fsl8xx9jepbveda.eq(el, parent);
      });
    };
    var registry = Registry();
    var lookup = function (eventName, target) {
      return registry.find(isAboveRoot, eventName, target);
    };
    var domEvents = $_8112sh15djepbvg0v.setup(root.element(), {
      triggerEvent: function (eventName, event) {
        return $_fa6js4xljepbveen.monitorEvent(eventName, event.target(), function (logger) {
          return $_1b6fx615ejepbvg1c.triggerUntilStopped(lookup, eventName, event, logger);
        });
      },
      broadcastEvent: function (eventName, event) {
        var listeners = registry.filter(eventName);
        return $_1b6fx615ejepbvg1c.broadcast(listeners, event);
      }
    });
    var systemApi = SystemApi({
      debugInfo: $_167yw6wjjepbveag.constant('real'),
      triggerEvent: function (customType, target, data) {
        $_fa6js4xljepbveen.monitorEvent(customType, target, function (logger) {
          $_1b6fx615ejepbvg1c.triggerOnUntilStopped(lookup, customType, data, target, logger);
        });
      },
      triggerFocus: function (target, originator) {
        $_6keeyb10xjepbvf0l.read(target).fold(function () {
          $_5khawkytjepbvem5.focus(target);
        }, function (_alloyId) {
          $_fa6js4xljepbveen.monitorEvent($_alx3dcwhjepbvea8.focus(), target, function (logger) {
            $_1b6fx615ejepbvg1c.triggerHandler(lookup, $_alx3dcwhjepbvea8.focus(), {
              originator: $_167yw6wjjepbveag.constant(originator),
              target: $_167yw6wjjepbveag.constant(target)
            }, target, logger);
          });
        });
      },
      triggerEscape: function (comp, simulatedEvent) {
        systemApi.triggerEvent('keydown', comp.element(), simulatedEvent.event());
      },
      getByUid: function (uid) {
        return getByUid(uid);
      },
      getByDom: function (elem) {
        return getByDom(elem);
      },
      build: $_etb0t512tjepbvfe4.build,
      addToGui: function (c) {
        add(c);
      },
      removeFromGui: function (c) {
        remove(c);
      },
      addToWorld: function (c) {
        addToWorld(c);
      },
      removeFromWorld: function (c) {
        removeFromWorld(c);
      },
      broadcast: function (message) {
        broadcast(message);
      },
      broadcastOn: function (channels, message) {
        broadcastOn(channels, message);
      }
    });
    var addToWorld = function (component) {
      component.connect(systemApi);
      if (!$_4aeewhxkjepbveek.isText(component.element())) {
        registry.register(component);
        $_227y8rwsjepbveb6.each(component.components(), addToWorld);
        systemApi.triggerEvent($_alx3dcwhjepbvea8.systemInit(), component.element(), { target: $_167yw6wjjepbveag.constant(component.element()) });
      }
    };
    var removeFromWorld = function (component) {
      if (!$_4aeewhxkjepbveek.isText(component.element())) {
        $_227y8rwsjepbveb6.each(component.components(), removeFromWorld);
        registry.unregister(component);
      }
      component.disconnect();
    };
    var add = function (component) {
      $_1sujbrx1jepbvebx.attach(root, component);
    };
    var remove = function (component) {
      $_1sujbrx1jepbvebx.detach(component);
    };
    var destroy = function () {
      domEvents.unbind();
      $_b9oivrxhjepbvee8.remove(root.element());
    };
    var broadcastData = function (data) {
      var receivers = registry.filter($_alx3dcwhjepbvea8.receive());
      $_227y8rwsjepbveb6.each(receivers, function (receiver) {
        var descHandler = receiver.descHandler();
        var handler = $_5tsbqa134jepbvfhv.getHandler(descHandler);
        handler(data);
      });
    };
    var broadcast = function (message) {
      broadcastData({
        universal: $_167yw6wjjepbveag.constant(true),
        data: $_167yw6wjjepbveag.constant(message)
      });
    };
    var broadcastOn = function (channels, message) {
      broadcastData({
        universal: $_167yw6wjjepbveag.constant(false),
        channels: $_167yw6wjjepbveag.constant(channels),
        data: $_167yw6wjjepbveag.constant(message)
      });
    };
    var getByUid = function (uid) {
      return registry.getById(uid).fold(function () {
        return Result.error(new Error('Could not find component with uid: "' + uid + '" in system.'));
      }, Result.value);
    };
    var getByDom = function (elem) {
      return $_6keeyb10xjepbvf0l.read(elem).bind(getByUid);
    };
    addToWorld(root);
    return {
      root: $_167yw6wjjepbveag.constant(root),
      element: root.element,
      destroy: destroy,
      add: add,
      remove: remove,
      getByUid: getByUid,
      getByDom: getByDom,
      addToWorld: addToWorld,
      removeFromWorld: removeFromWorld,
      broadcast: broadcast,
      broadcastOn: broadcastOn
    };
  };
  var $_fcxy3p15cjepbvg0b = {
    create: create$6,
    takeover: takeover
  };

  var READ_ONLY_MODE_CLASS = $_167yw6wjjepbveag.constant($_3fme06zejepbvepj.resolve('readonly-mode'));
  var EDIT_MODE_CLASS = $_167yw6wjjepbveag.constant($_3fme06zejepbvepj.resolve('edit-mode'));
  function OuterContainer (spec) {
    var root = $_etb0t512tjepbvfe4.build(Container.sketch({
      dom: { classes: [$_3fme06zejepbvepj.resolve('outer-container')].concat(spec.classes) },
      containerBehaviours: $_9otgsgy2jepbveh4.derive([Swapping.config({
          alpha: READ_ONLY_MODE_CLASS(),
          omega: EDIT_MODE_CLASS()
        })])
    }));
    return $_fcxy3p15cjepbvg0b.takeover(root);
  }

  function AndroidRealm (scrollIntoView) {
    var alloy = OuterContainer({ classes: [$_3fme06zejepbvepj.resolve('android-container')] });
    var toolbar = ScrollingToolbar();
    var webapp = $_2a8rud12ojepbvfcl.api();
    var switchToEdit = $_716azr154jepbvfy8.makeEditSwitch(webapp);
    var socket = $_716azr154jepbvfy8.makeSocket();
    var dropup = $_7vevfv155jepbvfyi.build($_167yw6wjjepbveag.noop, scrollIntoView);
    alloy.add(toolbar.wrapper());
    alloy.add(socket);
    alloy.add(dropup.component());
    var setToolbarGroups = function (rawGroups) {
      var groups = toolbar.createGroups(rawGroups);
      toolbar.setGroups(groups);
    };
    var setContextToolbar = function (rawGroups) {
      var groups = toolbar.createGroups(rawGroups);
      toolbar.setContextToolbar(groups);
    };
    var focusToolbar = function () {
      toolbar.focus();
    };
    var restoreToolbar = function () {
      toolbar.restoreToolbar();
    };
    var init = function (spec) {
      webapp.set($_1d2bir140jepbvfph.produce(spec));
    };
    var exit = function () {
      webapp.run(function (w) {
        w.exit();
        Replacing.remove(socket, switchToEdit);
      });
    };
    var updateMode = function (readOnly) {
      $_716azr154jepbvfy8.updateMode(socket, switchToEdit, readOnly, alloy.root());
    };
    return {
      system: $_167yw6wjjepbveag.constant(alloy),
      element: alloy.element,
      init: init,
      exit: exit,
      setToolbarGroups: setToolbarGroups,
      setContextToolbar: setContextToolbar,
      focusToolbar: focusToolbar,
      restoreToolbar: restoreToolbar,
      updateMode: updateMode,
      socket: $_167yw6wjjepbveag.constant(socket),
      dropup: $_167yw6wjjepbveag.constant(dropup)
    };
  }

  var input = function (parent, operation) {
    var input = $_4pcs1kxfjepbvee2.fromTag('input');
    $_ct8mbo103jepbvesz.setAll(input, {
      opacity: '0',
      position: 'absolute',
      top: '-1000px',
      left: '-1000px'
    });
    $_fm1c56x2jepbvecb.append(parent, input);
    $_5khawkytjepbvem5.focus(input);
    operation(input);
    $_b9oivrxhjepbvee8.remove(input);
  };
  var $_f44s2p15ojepbvg3k = { input: input };

  var refreshInput = function (input) {
    var start = input.dom().selectionStart;
    var end = input.dom().selectionEnd;
    var dir = input.dom().selectionDirection;
    setTimeout(function () {
      input.dom().setSelectionRange(start, end, dir);
      $_5khawkytjepbvem5.focus(input);
    }, 50);
  };
  var refresh = function (winScope) {
    var sel = winScope.getSelection();
    if (sel.rangeCount > 0) {
      var br = sel.getRangeAt(0);
      var r = winScope.document.createRange();
      r.setStart(br.startContainer, br.startOffset);
      r.setEnd(br.endContainer, br.endOffset);
      sel.removeAllRanges();
      sel.addRange(r);
    }
  };
  var $_dd27cg15qjepbvg3y = {
    refreshInput: refreshInput,
    refresh: refresh
  };

  var resume$1 = function (cWin, frame) {
    $_5khawkytjepbvem5.active().each(function (active) {
      if (!$_6fsl8xx9jepbveda.eq(active, frame)) {
        $_5khawkytjepbvem5.blur(active);
      }
    });
    cWin.focus();
    $_5khawkytjepbvem5.focus($_4pcs1kxfjepbvee2.fromDom(cWin.document.body));
    $_dd27cg15qjepbvg3y.refresh(cWin);
  };
  var $_4krs1v15pjepbvg3t = { resume: resume$1 };

  var stubborn = function (outerBody, cWin, page, frame) {
    var toEditing = function () {
      $_4krs1v15pjepbvg3t.resume(cWin, frame);
    };
    var toReading = function () {
      $_f44s2p15ojepbvg3k.input(outerBody, $_5khawkytjepbvem5.blur);
    };
    var captureInput = $_fr2gc113xjepbvfp3.bind(page, 'keydown', function (evt) {
      if (!$_227y8rwsjepbveb6.contains([
          'input',
          'textarea'
        ], $_4aeewhxkjepbveek.name(evt.target()))) {
        toEditing();
      }
    });
    var onToolbarTouch = function () {
    };
    var destroy = function () {
      captureInput.unbind();
    };
    return {
      toReading: toReading,
      toEditing: toEditing,
      onToolbarTouch: onToolbarTouch,
      destroy: destroy
    };
  };
  var timid = function (outerBody, cWin, page, frame) {
    var dismissKeyboard = function () {
      $_5khawkytjepbvem5.blur(frame);
    };
    var onToolbarTouch = function () {
      dismissKeyboard();
    };
    var toReading = function () {
      dismissKeyboard();
    };
    var toEditing = function () {
      $_4krs1v15pjepbvg3t.resume(cWin, frame);
    };
    return {
      toReading: toReading,
      toEditing: toEditing,
      onToolbarTouch: onToolbarTouch,
      destroy: $_167yw6wjjepbveag.noop
    };
  };
  var $_bvpze215njepbvg3c = {
    stubborn: stubborn,
    timid: timid
  };

  var initEvents$1 = function (editorApi, iosApi, toolstrip, socket, dropup) {
    var saveSelectionFirst = function () {
      iosApi.run(function (api) {
        api.highlightSelection();
      });
    };
    var refreshIosSelection = function () {
      iosApi.run(function (api) {
        api.refreshSelection();
      });
    };
    var scrollToY = function (yTop, height) {
      var y = yTop - socket.dom().scrollTop;
      iosApi.run(function (api) {
        api.scrollIntoView(y, y + height);
      });
    };
    var scrollToElement = function (target) {
      scrollToY(iosApi, socket);
    };
    var scrollToCursor = function () {
      editorApi.getCursorBox().each(function (box) {
        scrollToY(box.top(), box.height());
      });
    };
    var clearSelection = function () {
      iosApi.run(function (api) {
        api.clearSelection();
      });
    };
    var clearAndRefresh = function () {
      clearSelection();
      refreshThrottle.throttle();
    };
    var refreshView = function () {
      scrollToCursor();
      iosApi.run(function (api) {
        api.syncHeight();
      });
    };
    var reposition = function () {
      var toolbarHeight = $_2t28t5102jepbvesx.get(toolstrip);
      iosApi.run(function (api) {
        api.setViewportOffset(toolbarHeight);
      });
      refreshIosSelection();
      refreshView();
    };
    var toEditing = function () {
      iosApi.run(function (api) {
        api.toEditing();
      });
    };
    var toReading = function () {
      iosApi.run(function (api) {
        api.toReading();
      });
    };
    var onToolbarTouch = function (event) {
      iosApi.run(function (api) {
        api.onToolbarTouch(event);
      });
    };
    var tapping = $_5shsdq143jepbvfqd.monitor(editorApi);
    var refreshThrottle = $_37d9m714wjepbvfw2.last(refreshView, 300);
    var listeners = [
      editorApi.onKeyup(clearAndRefresh),
      editorApi.onNodeChanged(refreshIosSelection),
      editorApi.onDomChanged(refreshThrottle.throttle),
      editorApi.onDomChanged(refreshIosSelection),
      editorApi.onScrollToCursor(function (tinyEvent) {
        tinyEvent.preventDefault();
        refreshThrottle.throttle();
      }),
      editorApi.onScrollToElement(function (event) {
        scrollToElement(event.element());
      }),
      editorApi.onToEditing(toEditing),
      editorApi.onToReading(toReading),
      $_fr2gc113xjepbvfp3.bind(editorApi.doc(), 'touchend', function (touchEvent) {
        if ($_6fsl8xx9jepbveda.eq(editorApi.html(), touchEvent.target()) || $_6fsl8xx9jepbveda.eq(editorApi.body(), touchEvent.target())) {
        }
      }),
      $_fr2gc113xjepbvfp3.bind(toolstrip, 'transitionend', function (transitionEvent) {
        if (transitionEvent.raw().propertyName === 'height') {
          reposition();
        }
      }),
      $_fr2gc113xjepbvfp3.capture(toolstrip, 'touchstart', function (touchEvent) {
        saveSelectionFirst();
        onToolbarTouch(touchEvent);
        editorApi.onTouchToolstrip();
      }),
      $_fr2gc113xjepbvfp3.bind(editorApi.body(), 'touchstart', function (evt) {
        clearSelection();
        editorApi.onTouchContent();
        tapping.fireTouchstart(evt);
      }),
      tapping.onTouchmove(),
      tapping.onTouchend(),
      $_fr2gc113xjepbvfp3.bind(editorApi.body(), 'click', function (event) {
        event.kill();
      }),
      $_fr2gc113xjepbvfp3.bind(toolstrip, 'touchmove', function () {
        editorApi.onToolbarScrollStart();
      })
    ];
    var destroy = function () {
      $_227y8rwsjepbveb6.each(listeners, function (l) {
        l.unbind();
      });
    };
    return { destroy: destroy };
  };
  var $_ejidck15rjepbvg41 = { initEvents: initEvents$1 };

  function FakeSelection (win, frame) {
    var doc = win.document;
    var container = $_4pcs1kxfjepbvee2.fromTag('div');
    $_cs8xnaynjepbvelr.add(container, $_3fme06zejepbvepj.resolve('unfocused-selections'));
    $_fm1c56x2jepbvecb.append($_4pcs1kxfjepbvee2.fromDom(doc.documentElement), container);
    var onTouch = $_fr2gc113xjepbvfp3.bind(container, 'touchstart', function (event) {
      event.prevent();
      $_4krs1v15pjepbvg3t.resume(win, frame);
      clear();
    });
    var make = function (rectangle) {
      var span = $_4pcs1kxfjepbvee2.fromTag('span');
      $_f9xa8l137jepbvfj2.add(span, [
        $_3fme06zejepbvepj.resolve('layer-editor'),
        $_3fme06zejepbvepj.resolve('unfocused-selection')
      ]);
      $_ct8mbo103jepbvesz.setAll(span, {
        left: rectangle.left() + 'px',
        top: rectangle.top() + 'px',
        width: rectangle.width() + 'px',
        height: rectangle.height() + 'px'
      });
      return span;
    };
    var update = function () {
      clear();
      var rectangles = $_7r2e5c148jepbvfrg.getRectangles(win);
      var spans = $_227y8rwsjepbveb6.map(rectangles, make);
      $_78z69ixijepbveeb.append(container, spans);
    };
    var clear = function () {
      $_b9oivrxhjepbvee8.empty(container);
    };
    var destroy = function () {
      onTouch.unbind();
      $_b9oivrxhjepbvee8.remove(container);
    };
    var isActive = function () {
      return $_ginpy6x3jepbvece.children(container).length > 0;
    };
    return {
      update: update,
      isActive: isActive,
      destroy: destroy,
      clear: clear
    };
  }

  var nu$8 = function (baseFn) {
    var data = Option.none();
    var callbacks = [];
    var map = function (f) {
      return nu$8(function (nCallback) {
        get(function (data) {
          nCallback(f(data));
        });
      });
    };
    var get = function (nCallback) {
      if (isReady())
        call(nCallback);
      else
        callbacks.push(nCallback);
    };
    var set = function (x) {
      data = Option.some(x);
      run(callbacks);
      callbacks = [];
    };
    var isReady = function () {
      return data.isSome();
    };
    var run = function (cbs) {
      $_227y8rwsjepbveb6.each(cbs, call);
    };
    var call = function (cb) {
      data.each(function (x) {
        setTimeout(function () {
          cb(x);
        }, 0);
      });
    };
    baseFn(set);
    return {
      get: get,
      map: map,
      isReady: isReady
    };
  };
  var pure$1 = function (a) {
    return nu$8(function (callback) {
      callback(a);
    });
  };
  var LazyValue = {
    nu: nu$8,
    pure: pure$1
  };

  var bounce = function (f) {
    return function () {
      var args = Array.prototype.slice.call(arguments);
      var me = this;
      setTimeout(function () {
        f.apply(me, args);
      }, 0);
    };
  };
  var $_d94irf15xjepbvg5p = { bounce: bounce };

  var nu$9 = function (baseFn) {
    var get = function (callback) {
      baseFn($_d94irf15xjepbvg5p.bounce(callback));
    };
    var map = function (fab) {
      return nu$9(function (callback) {
        get(function (a) {
          var value = fab(a);
          callback(value);
        });
      });
    };
    var bind = function (aFutureB) {
      return nu$9(function (callback) {
        get(function (a) {
          aFutureB(a).get(callback);
        });
      });
    };
    var anonBind = function (futureB) {
      return nu$9(function (callback) {
        get(function (a) {
          futureB.get(callback);
        });
      });
    };
    var toLazy = function () {
      return LazyValue.nu(get);
    };
    return {
      map: map,
      bind: bind,
      anonBind: anonBind,
      toLazy: toLazy,
      get: get
    };
  };
  var pure$2 = function (a) {
    return nu$9(function (callback) {
      callback(a);
    });
  };
  var Future = {
    nu: nu$9,
    pure: pure$2
  };

  var adjust = function (value, destination, amount) {
    if (Math.abs(value - destination) <= amount) {
      return Option.none();
    } else if (value < destination) {
      return Option.some(value + amount);
    } else {
      return Option.some(value - amount);
    }
  };
  var create$7 = function () {
    var interval = null;
    var animate = function (getCurrent, destination, amount, increment, doFinish, rate) {
      var finished = false;
      var finish = function (v) {
        finished = true;
        doFinish(v);
      };
      clearInterval(interval);
      var abort = function (v) {
        clearInterval(interval);
        finish(v);
      };
      interval = setInterval(function () {
        var value = getCurrent();
        adjust(value, destination, amount).fold(function () {
          clearInterval(interval);
          finish(destination);
        }, function (s) {
          increment(s, abort);
          if (!finished) {
            var newValue = getCurrent();
            if (newValue !== s || Math.abs(newValue - destination) > Math.abs(value - destination)) {
              clearInterval(interval);
              finish(destination);
            }
          }
        });
      }, rate);
    };
    return { animate: animate };
  };
  var $_bm2dba15yjepbvg5q = {
    create: create$7,
    adjust: adjust
  };

  var findDevice = function (deviceWidth, deviceHeight) {
    var devices = [
      {
        width: 320,
        height: 480,
        keyboard: {
          portrait: 300,
          landscape: 240
        }
      },
      {
        width: 320,
        height: 568,
        keyboard: {
          portrait: 300,
          landscape: 240
        }
      },
      {
        width: 375,
        height: 667,
        keyboard: {
          portrait: 305,
          landscape: 240
        }
      },
      {
        width: 414,
        height: 736,
        keyboard: {
          portrait: 320,
          landscape: 240
        }
      },
      {
        width: 768,
        height: 1024,
        keyboard: {
          portrait: 320,
          landscape: 400
        }
      },
      {
        width: 1024,
        height: 1366,
        keyboard: {
          portrait: 380,
          landscape: 460
        }
      }
    ];
    return $_4ymgfmy0jepbveh0.findMap(devices, function (device) {
      return deviceWidth <= device.width && deviceHeight <= device.height ? Option.some(device.keyboard) : Option.none();
    }).getOr({
      portrait: deviceHeight / 5,
      landscape: deviceWidth / 4
    });
  };
  var $_lgepu161jepbvg6k = { findDevice: findDevice };

  var softKeyboardLimits = function (outerWindow) {
    return $_lgepu161jepbvg6k.findDevice(outerWindow.screen.width, outerWindow.screen.height);
  };
  var accountableKeyboardHeight = function (outerWindow) {
    var portrait = $_3wqb9113wjepbvfov.get(outerWindow).isPortrait();
    var limits = softKeyboardLimits(outerWindow);
    var keyboard = portrait ? limits.portrait : limits.landscape;
    var visualScreenHeight = portrait ? outerWindow.screen.height : outerWindow.screen.width;
    return visualScreenHeight - outerWindow.innerHeight > keyboard ? 0 : keyboard;
  };
  var getGreenzone = function (socket, dropup) {
    var outerWindow = $_ginpy6x3jepbvece.owner(socket).dom().defaultView;
    var viewportHeight = $_2t28t5102jepbvesx.get(socket) + $_2t28t5102jepbvesx.get(dropup);
    var acc = accountableKeyboardHeight(outerWindow);
    return viewportHeight - acc;
  };
  var updatePadding = function (contentBody, socket, dropup) {
    var greenzoneHeight = getGreenzone(socket, dropup);
    var deltaHeight = $_2t28t5102jepbvesx.get(socket) + $_2t28t5102jepbvesx.get(dropup) - greenzoneHeight;
    $_ct8mbo103jepbvesz.set(contentBody, 'padding-bottom', deltaHeight + 'px');
  };
  var $_999ccm160jepbvg6b = {
    getGreenzone: getGreenzone,
    updatePadding: updatePadding
  };

  var fixture = $_9vwywgxwjepbvegj.generate([
    {
      fixed: [
        'element',
        'property',
        'offsetY'
      ]
    },
    {
      scroller: [
        'element',
        'offsetY'
      ]
    }
  ]);
  var yFixedData = 'data-' + $_3fme06zejepbvepj.resolve('position-y-fixed');
  var yFixedProperty = 'data-' + $_3fme06zejepbvepj.resolve('y-property');
  var yScrollingData = 'data-' + $_3fme06zejepbvepj.resolve('scrolling');
  var windowSizeData = 'data-' + $_3fme06zejepbvepj.resolve('last-window-height');
  var getYFixedData = function (element) {
    return $_d8u1f9147jepbvfrd.safeParse(element, yFixedData);
  };
  var getYFixedProperty = function (element) {
    return $_1sxky7xrjepbvefh.get(element, yFixedProperty);
  };
  var getLastWindowSize = function (element) {
    return $_d8u1f9147jepbvfrd.safeParse(element, windowSizeData);
  };
  var classifyFixed = function (element, offsetY) {
    var prop = getYFixedProperty(element);
    return fixture.fixed(element, prop, offsetY);
  };
  var classifyScrolling = function (element, offsetY) {
    return fixture.scroller(element, offsetY);
  };
  var classify = function (element) {
    var offsetY = getYFixedData(element);
    var classifier = $_1sxky7xrjepbvefh.get(element, yScrollingData) === 'true' ? classifyScrolling : classifyFixed;
    return classifier(element, offsetY);
  };
  var findFixtures = function (container) {
    var candidates = $_7az4v0zvjepbves7.descendants(container, '[' + yFixedData + ']');
    return $_227y8rwsjepbveb6.map(candidates, classify);
  };
  var takeoverToolbar = function (toolbar) {
    var oldToolbarStyle = $_1sxky7xrjepbvefh.get(toolbar, 'style');
    $_ct8mbo103jepbvesz.setAll(toolbar, {
      position: 'absolute',
      top: '0px'
    });
    $_1sxky7xrjepbvefh.set(toolbar, yFixedData, '0px');
    $_1sxky7xrjepbvefh.set(toolbar, yFixedProperty, 'top');
    var restore = function () {
      $_1sxky7xrjepbvefh.set(toolbar, 'style', oldToolbarStyle || '');
      $_1sxky7xrjepbvefh.remove(toolbar, yFixedData);
      $_1sxky7xrjepbvefh.remove(toolbar, yFixedProperty);
    };
    return { restore: restore };
  };
  var takeoverViewport = function (toolbarHeight, height, viewport) {
    var oldViewportStyle = $_1sxky7xrjepbvefh.get(viewport, 'style');
    $_62bvz013ujepbvfoi.register(viewport);
    $_ct8mbo103jepbvesz.setAll(viewport, {
      position: 'absolute',
      height: height + 'px',
      width: '100%',
      top: toolbarHeight + 'px'
    });
    $_1sxky7xrjepbvefh.set(viewport, yFixedData, toolbarHeight + 'px');
    $_1sxky7xrjepbvefh.set(viewport, yScrollingData, 'true');
    $_1sxky7xrjepbvefh.set(viewport, yFixedProperty, 'top');
    var restore = function () {
      $_62bvz013ujepbvfoi.deregister(viewport);
      $_1sxky7xrjepbvefh.set(viewport, 'style', oldViewportStyle || '');
      $_1sxky7xrjepbvefh.remove(viewport, yFixedData);
      $_1sxky7xrjepbvefh.remove(viewport, yScrollingData);
      $_1sxky7xrjepbvefh.remove(viewport, yFixedProperty);
    };
    return { restore: restore };
  };
  var takeoverDropup = function (dropup, toolbarHeight, viewportHeight) {
    var oldDropupStyle = $_1sxky7xrjepbvefh.get(dropup, 'style');
    $_ct8mbo103jepbvesz.setAll(dropup, {
      position: 'absolute',
      bottom: '0px'
    });
    $_1sxky7xrjepbvefh.set(dropup, yFixedData, '0px');
    $_1sxky7xrjepbvefh.set(dropup, yFixedProperty, 'bottom');
    var restore = function () {
      $_1sxky7xrjepbvefh.set(dropup, 'style', oldDropupStyle || '');
      $_1sxky7xrjepbvefh.remove(dropup, yFixedData);
      $_1sxky7xrjepbvefh.remove(dropup, yFixedProperty);
    };
    return { restore: restore };
  };
  var deriveViewportHeight = function (viewport, toolbarHeight, dropupHeight) {
    var outerWindow = $_ginpy6x3jepbvece.owner(viewport).dom().defaultView;
    var winH = outerWindow.innerHeight;
    $_1sxky7xrjepbvefh.set(viewport, windowSizeData, winH + 'px');
    return winH - toolbarHeight - dropupHeight;
  };
  var takeover$1 = function (viewport, contentBody, toolbar, dropup) {
    var outerWindow = $_ginpy6x3jepbvece.owner(viewport).dom().defaultView;
    var toolbarSetup = takeoverToolbar(toolbar);
    var toolbarHeight = $_2t28t5102jepbvesx.get(toolbar);
    var dropupHeight = $_2t28t5102jepbvesx.get(dropup);
    var viewportHeight = deriveViewportHeight(viewport, toolbarHeight, dropupHeight);
    var viewportSetup = takeoverViewport(toolbarHeight, viewportHeight, viewport);
    var dropupSetup = takeoverDropup(dropup, toolbarHeight, viewportHeight);
    var isActive = true;
    var restore = function () {
      isActive = false;
      toolbarSetup.restore();
      viewportSetup.restore();
      dropupSetup.restore();
    };
    var isExpanding = function () {
      var currentWinHeight = outerWindow.innerHeight;
      var lastWinHeight = getLastWindowSize(viewport);
      return currentWinHeight > lastWinHeight;
    };
    var refresh = function () {
      if (isActive) {
        var newToolbarHeight = $_2t28t5102jepbvesx.get(toolbar);
        var dropupHeight_1 = $_2t28t5102jepbvesx.get(dropup);
        var newHeight = deriveViewportHeight(viewport, newToolbarHeight, dropupHeight_1);
        $_1sxky7xrjepbvefh.set(viewport, yFixedData, newToolbarHeight + 'px');
        $_ct8mbo103jepbvesz.set(viewport, 'height', newHeight + 'px');
        $_ct8mbo103jepbvesz.set(dropup, 'bottom', -(newToolbarHeight + newHeight + dropupHeight_1) + 'px');
        $_999ccm160jepbvg6b.updatePadding(contentBody, viewport, dropup);
      }
    };
    var setViewportOffset = function (newYOffset) {
      var offsetPx = newYOffset + 'px';
      $_1sxky7xrjepbvefh.set(viewport, yFixedData, offsetPx);
      refresh();
    };
    $_999ccm160jepbvg6b.updatePadding(contentBody, viewport, dropup);
    return {
      setViewportOffset: setViewportOffset,
      isExpanding: isExpanding,
      isShrinking: $_167yw6wjjepbveag.not(isExpanding),
      refresh: refresh,
      restore: restore
    };
  };
  var $_eemfju15zjepbvg5v = {
    findFixtures: findFixtures,
    takeover: takeover$1,
    getYFixedData: getYFixedData
  };

  var animator = $_bm2dba15yjepbvg5q.create();
  var ANIMATION_STEP = 15;
  var NUM_TOP_ANIMATION_FRAMES = 10;
  var ANIMATION_RATE = 10;
  var lastScroll = 'data-' + $_3fme06zejepbvepj.resolve('last-scroll-top');
  var getTop = function (element) {
    var raw = $_ct8mbo103jepbvesz.getRaw(element, 'top').getOr(0);
    return parseInt(raw, 10);
  };
  var getScrollTop = function (element) {
    return parseInt(element.dom().scrollTop, 10);
  };
  var moveScrollAndTop = function (element, destination, finalTop) {
    return Future.nu(function (callback) {
      var getCurrent = $_167yw6wjjepbveag.curry(getScrollTop, element);
      var update = function (newScroll) {
        element.dom().scrollTop = newScroll;
        $_ct8mbo103jepbvesz.set(element, 'top', getTop(element) + ANIMATION_STEP + 'px');
      };
      var finish = function () {
        element.dom().scrollTop = destination;
        $_ct8mbo103jepbvesz.set(element, 'top', finalTop + 'px');
        callback(destination);
      };
      animator.animate(getCurrent, destination, ANIMATION_STEP, update, finish, ANIMATION_RATE);
    });
  };
  var moveOnlyScroll = function (element, destination) {
    return Future.nu(function (callback) {
      var getCurrent = $_167yw6wjjepbveag.curry(getScrollTop, element);
      $_1sxky7xrjepbvefh.set(element, lastScroll, getCurrent());
      var update = function (newScroll, abort) {
        var previous = $_d8u1f9147jepbvfrd.safeParse(element, lastScroll);
        if (previous !== element.dom().scrollTop) {
          abort(element.dom().scrollTop);
        } else {
          element.dom().scrollTop = newScroll;
          $_1sxky7xrjepbvefh.set(element, lastScroll, newScroll);
        }
      };
      var finish = function () {
        element.dom().scrollTop = destination;
        $_1sxky7xrjepbvefh.set(element, lastScroll, destination);
        callback(destination);
      };
      var distance = Math.abs(destination - getCurrent());
      var step = Math.ceil(distance / NUM_TOP_ANIMATION_FRAMES);
      animator.animate(getCurrent, destination, step, update, finish, ANIMATION_RATE);
    });
  };
  var moveOnlyTop = function (element, destination) {
    return Future.nu(function (callback) {
      var getCurrent = $_167yw6wjjepbveag.curry(getTop, element);
      var update = function (newTop) {
        $_ct8mbo103jepbvesz.set(element, 'top', newTop + 'px');
      };
      var finish = function () {
        update(destination);
        callback(destination);
      };
      var distance = Math.abs(destination - getCurrent());
      var step = Math.ceil(distance / NUM_TOP_ANIMATION_FRAMES);
      animator.animate(getCurrent, destination, step, update, finish, ANIMATION_RATE);
    });
  };
  var updateTop = function (element, amount) {
    var newTop = amount + $_eemfju15zjepbvg5v.getYFixedData(element) + 'px';
    $_ct8mbo103jepbvesz.set(element, 'top', newTop);
  };
  var moveWindowScroll = function (toolbar, viewport, destY) {
    var outerWindow = $_ginpy6x3jepbvece.owner(toolbar).dom().defaultView;
    return Future.nu(function (callback) {
      updateTop(toolbar, destY);
      updateTop(viewport, destY);
      outerWindow.scrollTo(0, destY);
      callback(destY);
    });
  };
  var $_g4xmha15ujepbvg5b = {
    moveScrollAndTop: moveScrollAndTop,
    moveOnlyScroll: moveOnlyScroll,
    moveOnlyTop: moveOnlyTop,
    moveWindowScroll: moveWindowScroll
  };

  function BackgroundActivity (doAction) {
    var action = Cell(LazyValue.pure({}));
    var start = function (value) {
      var future = LazyValue.nu(function (callback) {
        return doAction(value).get(callback);
      });
      action.set(future);
    };
    var idle = function (g) {
      action.get().get(function () {
        g();
      });
    };
    return {
      start: start,
      idle: idle
    };
  }

  var scrollIntoView = function (cWin, socket, dropup, top, bottom) {
    var greenzone = $_999ccm160jepbvg6b.getGreenzone(socket, dropup);
    var refreshCursor = $_167yw6wjjepbveag.curry($_dd27cg15qjepbvg3y.refresh, cWin);
    if (top > greenzone || bottom > greenzone) {
      $_g4xmha15ujepbvg5b.moveOnlyScroll(socket, socket.dom().scrollTop - greenzone + bottom).get(refreshCursor);
    } else if (top < 0) {
      $_g4xmha15ujepbvg5b.moveOnlyScroll(socket, socket.dom().scrollTop + top).get(refreshCursor);
    } else {
    }
  };
  var $_fvup58163jepbvg6w = { scrollIntoView: scrollIntoView };

  var par = function (asyncValues, nu) {
    return nu(function (callback) {
      var r = [];
      var count = 0;
      var cb = function (i) {
        return function (value) {
          r[i] = value;
          count++;
          if (count >= asyncValues.length) {
            callback(r);
          }
        };
      };
      if (asyncValues.length === 0) {
        callback([]);
      } else {
        $_227y8rwsjepbveb6.each(asyncValues, function (asyncValue, i) {
          asyncValue.get(cb(i));
        });
      }
    });
  };
  var $_5jn9b8166jepbvg7h = { par: par };

  var par$1 = function (futures) {
    return $_5jn9b8166jepbvg7h.par(futures, Future.nu);
  };
  var mapM = function (array, fn) {
    var futures = $_227y8rwsjepbveb6.map(array, fn);
    return par$1(futures);
  };
  var compose$1 = function (f, g) {
    return function (a) {
      return g(a).bind(f);
    };
  };
  var $_6r6onw165jepbvg7f = {
    par: par$1,
    mapM: mapM,
    compose: compose$1
  };

  var updateFixed = function (element, property, winY, offsetY) {
    var destination = winY + offsetY;
    $_ct8mbo103jepbvesz.set(element, property, destination + 'px');
    return Future.pure(offsetY);
  };
  var updateScrollingFixed = function (element, winY, offsetY) {
    var destTop = winY + offsetY;
    var oldProp = $_ct8mbo103jepbvesz.getRaw(element, 'top').getOr(offsetY);
    var delta = destTop - parseInt(oldProp, 10);
    var destScroll = element.dom().scrollTop + delta;
    return $_g4xmha15ujepbvg5b.moveScrollAndTop(element, destScroll, destTop);
  };
  var updateFixture = function (fixture, winY) {
    return fixture.fold(function (element, property, offsetY) {
      return updateFixed(element, property, winY, offsetY);
    }, function (element, offsetY) {
      return updateScrollingFixed(element, winY, offsetY);
    });
  };
  var updatePositions = function (container, winY) {
    var fixtures = $_eemfju15zjepbvg5v.findFixtures(container);
    var updates = $_227y8rwsjepbveb6.map(fixtures, function (fixture) {
      return updateFixture(fixture, winY);
    });
    return $_6r6onw165jepbvg7f.par(updates);
  };
  var $_6uca3p164jepbvg76 = { updatePositions: updatePositions };

  var VIEW_MARGIN = 5;
  var register$2 = function (toolstrip, socket, container, outerWindow, structure, cWin) {
    var scroller = BackgroundActivity(function (y) {
      return $_g4xmha15ujepbvg5b.moveWindowScroll(toolstrip, socket, y);
    });
    var scrollBounds = function () {
      var rects = $_7r2e5c148jepbvfrg.getRectangles(cWin);
      return Option.from(rects[0]).bind(function (rect) {
        var viewTop = rect.top() - socket.dom().scrollTop;
        var outside = viewTop > outerWindow.innerHeight + VIEW_MARGIN || viewTop < -VIEW_MARGIN;
        return outside ? Option.some({
          top: $_167yw6wjjepbveag.constant(viewTop),
          bottom: $_167yw6wjjepbveag.constant(viewTop + rect.height())
        }) : Option.none();
      });
    };
    var scrollThrottle = $_37d9m714wjepbvfw2.last(function () {
      scroller.idle(function () {
        $_6uca3p164jepbvg76.updatePositions(container, outerWindow.pageYOffset).get(function () {
          var extraScroll = scrollBounds();
          extraScroll.each(function (extra) {
            socket.dom().scrollTop = socket.dom().scrollTop + extra.top();
          });
          scroller.start(0);
          structure.refresh();
        });
      });
    }, 1000);
    var onScroll = $_fr2gc113xjepbvfp3.bind($_4pcs1kxfjepbvee2.fromDom(outerWindow), 'scroll', function () {
      if (outerWindow.pageYOffset < 0) {
        return;
      }
      scrollThrottle.throttle();
    });
    $_6uca3p164jepbvg76.updatePositions(container, outerWindow.pageYOffset).get($_167yw6wjjepbveag.identity);
    return { unbind: onScroll.unbind };
  };
  var setup$3 = function (bag) {
    var cWin = bag.cWin();
    var ceBody = bag.ceBody();
    var socket = bag.socket();
    var toolstrip = bag.toolstrip();
    var toolbar = bag.toolbar();
    var contentElement = bag.contentElement();
    var keyboardType = bag.keyboardType();
    var outerWindow = bag.outerWindow();
    var dropup = bag.dropup();
    var structure = $_eemfju15zjepbvg5v.takeover(socket, ceBody, toolstrip, dropup);
    var keyboardModel = keyboardType(bag.outerBody(), cWin, $_eqayqzxjjepbveeh.body(), contentElement, toolstrip, toolbar);
    var toEditing = function () {
      keyboardModel.toEditing();
      clearSelection();
    };
    var toReading = function () {
      keyboardModel.toReading();
    };
    var onToolbarTouch = function (event) {
      keyboardModel.onToolbarTouch(event);
    };
    var onOrientation = $_3wqb9113wjepbvfov.onChange(outerWindow, {
      onChange: $_167yw6wjjepbveag.noop,
      onReady: structure.refresh
    });
    onOrientation.onAdjustment(function () {
      structure.refresh();
    });
    var onResize = $_fr2gc113xjepbvfp3.bind($_4pcs1kxfjepbvee2.fromDom(outerWindow), 'resize', function () {
      if (structure.isExpanding()) {
        structure.refresh();
      }
    });
    var onScroll = register$2(toolstrip, socket, bag.outerBody(), outerWindow, structure, cWin);
    var unfocusedSelection = FakeSelection(cWin, contentElement);
    var refreshSelection = function () {
      if (unfocusedSelection.isActive()) {
        unfocusedSelection.update();
      }
    };
    var highlightSelection = function () {
      unfocusedSelection.update();
    };
    var clearSelection = function () {
      unfocusedSelection.clear();
    };
    var scrollIntoView = function (top, bottom) {
      $_fvup58163jepbvg6w.scrollIntoView(cWin, socket, dropup, top, bottom);
    };
    var syncHeight = function () {
      $_ct8mbo103jepbvesz.set(contentElement, 'height', contentElement.dom().contentWindow.document.body.scrollHeight + 'px');
    };
    var setViewportOffset = function (newYOffset) {
      structure.setViewportOffset(newYOffset);
      $_g4xmha15ujepbvg5b.moveOnlyTop(socket, newYOffset).get($_167yw6wjjepbveag.identity);
    };
    var destroy = function () {
      structure.restore();
      onOrientation.destroy();
      onScroll.unbind();
      onResize.unbind();
      keyboardModel.destroy();
      unfocusedSelection.destroy();
      $_f44s2p15ojepbvg3k.input($_eqayqzxjjepbveeh.body(), $_5khawkytjepbvem5.blur);
    };
    return {
      toEditing: toEditing,
      toReading: toReading,
      onToolbarTouch: onToolbarTouch,
      refreshSelection: refreshSelection,
      clearSelection: clearSelection,
      highlightSelection: highlightSelection,
      scrollIntoView: scrollIntoView,
      updateToolbarPadding: $_167yw6wjjepbveag.noop,
      setViewportOffset: setViewportOffset,
      syncHeight: syncHeight,
      refreshStructure: structure.refresh,
      destroy: destroy
    };
  };
  var $_4npwlk15sjepbvg4d = { setup: setup$3 };

  var create$8 = function (platform, mask) {
    var meta = $_6pdagw14ujepbvfvj.tag();
    var priorState = $_2a8rud12ojepbvfcl.value();
    var scrollEvents = $_2a8rud12ojepbvfcl.value();
    var iosApi = $_2a8rud12ojepbvfcl.api();
    var iosEvents = $_2a8rud12ojepbvfcl.api();
    var enter = function () {
      mask.hide();
      var doc = $_4pcs1kxfjepbvee2.fromDom(document);
      $_1n2b1714sjepbvfuv.getActiveApi(platform.editor).each(function (editorApi) {
        priorState.set({
          socketHeight: $_ct8mbo103jepbvesz.getRaw(platform.socket, 'height'),
          iframeHeight: $_ct8mbo103jepbvesz.getRaw(editorApi.frame(), 'height'),
          outerScroll: document.body.scrollTop
        });
        scrollEvents.set({ exclusives: $_2ufaeq153jepbvfxy.exclusive(doc, '.' + $_62bvz013ujepbvfoi.scrollable()) });
        $_cs8xnaynjepbvelr.add(platform.container, $_3fme06zejepbvepj.resolve('fullscreen-maximized'));
        $_74a90r14tjepbvfv7.clobberStyles(platform.container, editorApi.body());
        meta.maximize();
        $_ct8mbo103jepbvesz.set(platform.socket, 'overflow', 'scroll');
        $_ct8mbo103jepbvesz.set(platform.socket, '-webkit-overflow-scrolling', 'touch');
        $_5khawkytjepbvem5.focus(editorApi.body());
        var setupBag = $_2pqntjx4jepbvecr.immutableBag([
          'cWin',
          'ceBody',
          'socket',
          'toolstrip',
          'toolbar',
          'dropup',
          'contentElement',
          'cursor',
          'keyboardType',
          'isScrolling',
          'outerWindow',
          'outerBody'
        ], []);
        iosApi.set($_4npwlk15sjepbvg4d.setup(setupBag({
          cWin: editorApi.win(),
          ceBody: editorApi.body(),
          socket: platform.socket,
          toolstrip: platform.toolstrip,
          toolbar: platform.toolbar,
          dropup: platform.dropup.element(),
          contentElement: editorApi.frame(),
          cursor: $_167yw6wjjepbveag.noop,
          outerBody: platform.body,
          outerWindow: platform.win,
          keyboardType: $_bvpze215njepbvg3c.stubborn,
          isScrolling: function () {
            return scrollEvents.get().exists(function (s) {
              return s.socket.isScrolling();
            });
          }
        })));
        iosApi.run(function (api) {
          api.syncHeight();
        });
        iosEvents.set($_ejidck15rjepbvg41.initEvents(editorApi, iosApi, platform.toolstrip, platform.socket, platform.dropup));
      });
    };
    var exit = function () {
      meta.restore();
      iosEvents.clear();
      iosApi.clear();
      mask.show();
      priorState.on(function (s) {
        s.socketHeight.each(function (h) {
          $_ct8mbo103jepbvesz.set(platform.socket, 'height', h);
        });
        s.iframeHeight.each(function (h) {
          $_ct8mbo103jepbvesz.set(platform.editor.getFrame(), 'height', h);
        });
        document.body.scrollTop = s.scrollTop;
      });
      priorState.clear();
      scrollEvents.on(function (s) {
        s.exclusives.unbind();
      });
      scrollEvents.clear();
      $_cs8xnaynjepbvelr.remove(platform.container, $_3fme06zejepbvepj.resolve('fullscreen-maximized'));
      $_74a90r14tjepbvfv7.restoreStyles();
      $_62bvz013ujepbvfoi.deregister(platform.toolbar);
      $_ct8mbo103jepbvesz.remove(platform.socket, 'overflow');
      $_ct8mbo103jepbvesz.remove(platform.socket, '-webkit-overflow-scrolling');
      $_5khawkytjepbvem5.blur(platform.editor.getFrame());
      $_1n2b1714sjepbvfuv.getActiveApi(platform.editor).each(function (editorApi) {
        editorApi.clearSelection();
      });
    };
    var refreshStructure = function () {
      iosApi.run(function (api) {
        api.refreshStructure();
      });
    };
    return {
      enter: enter,
      refreshStructure: refreshStructure,
      exit: exit
    };
  };
  var $_dqhb3e15mjepbvg2x = { create: create$8 };

  var produce$1 = function (raw) {
    var mobile = $_7je55jyejepbvekc.asRawOrDie('Getting IosWebapp schema', MobileSchema, raw);
    $_ct8mbo103jepbvesz.set(mobile.toolstrip, 'width', '100%');
    $_ct8mbo103jepbvesz.set(mobile.container, 'position', 'relative');
    var onView = function () {
      mobile.setReadOnly(true);
      mode.enter();
    };
    var mask = $_etb0t512tjepbvfe4.build($_334ueu14vjepbvfvr.sketch(onView, mobile.translate));
    mobile.alloy.add(mask);
    var maskApi = {
      show: function () {
        mobile.alloy.add(mask);
      },
      hide: function () {
        mobile.alloy.remove(mask);
      }
    };
    var mode = $_dqhb3e15mjepbvg2x.create(mobile, maskApi);
    return {
      setReadOnly: mobile.setReadOnly,
      refreshStructure: mode.refreshStructure,
      enter: mode.enter,
      exit: mode.exit,
      destroy: $_167yw6wjjepbveag.noop
    };
  };
  var $_bsiquv15ljepbvg2q = { produce: produce$1 };

  function IosRealm (scrollIntoView) {
    var alloy = OuterContainer({ classes: [$_3fme06zejepbvepj.resolve('ios-container')] });
    var toolbar = ScrollingToolbar();
    var webapp = $_2a8rud12ojepbvfcl.api();
    var switchToEdit = $_716azr154jepbvfy8.makeEditSwitch(webapp);
    var socket = $_716azr154jepbvfy8.makeSocket();
    var dropup = $_7vevfv155jepbvfyi.build(function () {
      webapp.run(function (w) {
        w.refreshStructure();
      });
    }, scrollIntoView);
    alloy.add(toolbar.wrapper());
    alloy.add(socket);
    alloy.add(dropup.component());
    var setToolbarGroups = function (rawGroups) {
      var groups = toolbar.createGroups(rawGroups);
      toolbar.setGroups(groups);
    };
    var setContextToolbar = function (rawGroups) {
      var groups = toolbar.createGroups(rawGroups);
      toolbar.setContextToolbar(groups);
    };
    var focusToolbar = function () {
      toolbar.focus();
    };
    var restoreToolbar = function () {
      toolbar.restoreToolbar();
    };
    var init = function (spec) {
      webapp.set($_bsiquv15ljepbvg2q.produce(spec));
    };
    var exit = function () {
      webapp.run(function (w) {
        Replacing.remove(socket, switchToEdit);
        w.exit();
      });
    };
    var updateMode = function (readOnly) {
      $_716azr154jepbvfy8.updateMode(socket, switchToEdit, readOnly, alloy.root());
    };
    return {
      system: $_167yw6wjjepbveag.constant(alloy),
      element: alloy.element,
      init: init,
      exit: exit,
      setToolbarGroups: setToolbarGroups,
      setContextToolbar: setContextToolbar,
      focusToolbar: focusToolbar,
      restoreToolbar: restoreToolbar,
      updateMode: updateMode,
      socket: $_167yw6wjjepbveag.constant(socket),
      dropup: $_167yw6wjjepbveag.constant(dropup)
    };
  }

  var EditorManager = tinymce.util.Tools.resolve('tinymce.EditorManager');

  var derive$4 = function (editor) {
    var base = $_f53w39xsjepbvefs.readOptFrom(editor.settings, 'skin_url').fold(function () {
      return EditorManager.baseURL + '/skins/' + 'lightgray';
    }, function (url) {
      return url;
    });
    return {
      content: base + '/content.mobile.min.css',
      ui: base + '/skin.mobile.min.css'
    };
  };
  var $_7mpovs167jepbvg7l = { derive: derive$4 };

  var fontSizes = [
    'x-small',
    'small',
    'medium',
    'large',
    'x-large'
  ];
  var fireChange$1 = function (realm, command, state) {
    realm.system().broadcastOn([$_cr5a5qz1jepbvemv.formatChanged()], {
      command: command,
      state: state
    });
  };
  var init$5 = function (realm, editor) {
    var allFormats = $_1l8sbcx0jepbvebt.keys(editor.formatter.get());
    $_227y8rwsjepbveb6.each(allFormats, function (command) {
      editor.formatter.formatChanged(command, function (state) {
        fireChange$1(realm, command, state);
      });
    });
    $_227y8rwsjepbveb6.each([
      'ul',
      'ol'
    ], function (command) {
      editor.selection.selectorChanged(command, function (state, data) {
        fireChange$1(realm, command, state);
      });
    });
  };
  var $_elpby169jepbvg7p = {
    init: init$5,
    fontSizes: $_167yw6wjjepbveag.constant(fontSizes)
  };

  var fireSkinLoaded = function (editor) {
    var done = function () {
      editor._skinLoaded = true;
      editor.fire('SkinLoaded');
    };
    return function () {
      if (editor.initialized) {
        done();
      } else {
        editor.on('init', done);
      }
    };
  };
  var $_81i36c16ajepbvg7w = { fireSkinLoaded: fireSkinLoaded };

  var READING = $_167yw6wjjepbveag.constant('toReading');
  var EDITING = $_167yw6wjjepbveag.constant('toEditing');
  ThemeManager.add('mobile', function (editor) {
    var renderUI = function (args) {
      var cssUrls = $_7mpovs167jepbvg7l.derive(editor);
      if ($_66hxhbz0jepbvemu.isSkinDisabled(editor) === false) {
        editor.contentCSS.push(cssUrls.content);
        DOMUtils.DOM.styleSheetLoader.load(cssUrls.ui, $_81i36c16ajepbvg7w.fireSkinLoaded(editor));
      } else {
        $_81i36c16ajepbvg7w.fireSkinLoaded(editor)();
      }
      var doScrollIntoView = function () {
        editor.fire('scrollIntoView');
      };
      var wrapper = $_4pcs1kxfjepbvee2.fromTag('div');
      var realm = $_fs3v1iwkjepbveaj.detect().os.isAndroid() ? AndroidRealm(doScrollIntoView) : IosRealm(doScrollIntoView);
      var original = $_4pcs1kxfjepbvee2.fromDom(args.targetNode);
      $_fm1c56x2jepbvecb.after(original, wrapper);
      $_1sujbrx1jepbvebx.attachSystem(wrapper, realm.system());
      var findFocusIn = function (elem) {
        return $_5khawkytjepbvem5.search(elem).bind(function (focused) {
          return realm.system().getByDom(focused).toOption();
        });
      };
      var outerWindow = args.targetNode.ownerDocument.defaultView;
      var orientation = $_3wqb9113wjepbvfov.onChange(outerWindow, {
        onChange: function () {
          var alloy = realm.system();
          alloy.broadcastOn([$_cr5a5qz1jepbvemv.orientationChanged()], { width: $_3wqb9113wjepbvfov.getActualWidth(outerWindow) });
        },
        onReady: $_167yw6wjjepbveag.noop
      });
      var setReadOnly = function (readOnlyGroups, mainGroups, ro) {
        if (ro === false) {
          editor.selection.collapse();
        }
        realm.setToolbarGroups(ro ? readOnlyGroups.get() : mainGroups.get());
        editor.setMode(ro === true ? 'readonly' : 'design');
        editor.fire(ro === true ? READING() : EDITING());
        realm.updateMode(ro);
      };
      var bindHandler = function (label, handler) {
        editor.on(label, handler);
        return {
          unbind: function () {
            editor.off(label);
          }
        };
      };
      editor.on('init', function () {
        realm.init({
          editor: {
            getFrame: function () {
              return $_4pcs1kxfjepbvee2.fromDom(editor.contentAreaContainer.querySelector('iframe'));
            },
            onDomChanged: function () {
              return { unbind: $_167yw6wjjepbveag.noop };
            },
            onToReading: function (handler) {
              return bindHandler(READING(), handler);
            },
            onToEditing: function (handler) {
              return bindHandler(EDITING(), handler);
            },
            onScrollToCursor: function (handler) {
              editor.on('scrollIntoView', function (tinyEvent) {
                handler(tinyEvent);
              });
              var unbind = function () {
                editor.off('scrollIntoView');
                orientation.destroy();
              };
              return { unbind: unbind };
            },
            onTouchToolstrip: function () {
              hideDropup();
            },
            onTouchContent: function () {
              var toolbar = $_4pcs1kxfjepbvee2.fromDom(editor.editorContainer.querySelector('.' + $_3fme06zejepbvepj.resolve('toolbar')));
              findFocusIn(toolbar).each($_e4saacwgjepbvea0.emitExecute);
              realm.restoreToolbar();
              hideDropup();
            },
            onTapContent: function (evt) {
              var target = evt.target();
              if ($_4aeewhxkjepbveek.name(target) === 'img') {
                editor.selection.select(target.dom());
                evt.kill();
              } else if ($_4aeewhxkjepbveek.name(target) === 'a') {
                var component = realm.system().getByDom($_4pcs1kxfjepbvee2.fromDom(editor.editorContainer));
                component.each(function (container) {
                  if (Swapping.isAlpha(container)) {
                    $_b2l4wtyzjepbvemt.openLink(target.dom());
                  }
                });
              }
            }
          },
          container: $_4pcs1kxfjepbvee2.fromDom(editor.editorContainer),
          socket: $_4pcs1kxfjepbvee2.fromDom(editor.contentAreaContainer),
          toolstrip: $_4pcs1kxfjepbvee2.fromDom(editor.editorContainer.querySelector('.' + $_3fme06zejepbvepj.resolve('toolstrip'))),
          toolbar: $_4pcs1kxfjepbvee2.fromDom(editor.editorContainer.querySelector('.' + $_3fme06zejepbvepj.resolve('toolbar'))),
          dropup: realm.dropup(),
          alloy: realm.system(),
          translate: $_167yw6wjjepbveag.noop,
          setReadOnly: function (ro) {
            setReadOnly(readOnlyGroups, mainGroups, ro);
          }
        });
        var hideDropup = function () {
          realm.dropup().disappear(function () {
            realm.system().broadcastOn([$_cr5a5qz1jepbvemv.dropupDismissed()], {});
          });
        };
        $_fa6js4xljepbveen.registerInspector('remove this', realm.system());
        var backToMaskGroup = {
          label: 'The first group',
          scrollable: false,
          items: [$_81yxrozfjepbvepm.forToolbar('back', function () {
              editor.selection.collapse();
              realm.exit();
            }, {})]
        };
        var backToReadOnlyGroup = {
          label: 'Back to read only',
          scrollable: false,
          items: [$_81yxrozfjepbvepm.forToolbar('readonly-back', function () {
              setReadOnly(readOnlyGroups, mainGroups, true);
            }, {})]
        };
        var readOnlyGroup = {
          label: 'The read only mode group',
          scrollable: true,
          items: []
        };
        var features = $_2a7zdmz2jepbvemy.setup(realm, editor);
        var items = $_2a7zdmz2jepbvemy.detect(editor.settings, features);
        var actionGroup = {
          label: 'the action group',
          scrollable: true,
          items: items
        };
        var extraGroup = {
          label: 'The extra group',
          scrollable: false,
          items: []
        };
        var mainGroups = Cell([
          backToReadOnlyGroup,
          actionGroup,
          extraGroup
        ]);
        var readOnlyGroups = Cell([
          backToMaskGroup,
          readOnlyGroup,
          extraGroup
        ]);
        $_elpby169jepbvg7p.init(realm, editor);
      });
      return {
        iframeContainer: realm.socket().element().dom(),
        editorContainer: realm.element().dom()
      };
    };
    return {
      getNotificationManagerImpl: function () {
        return {
          open: $_167yw6wjjepbveag.identity,
          close: $_167yw6wjjepbveag.noop,
          reposition: $_167yw6wjjepbveag.noop,
          getArgs: $_167yw6wjjepbveag.identity
        };
      },
      renderUI: renderUI
    };
  });
  function Theme () {
  }

  return Theme;

}());
})();
