// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"nav.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  name: '全部',
  path: '/'
}, {
  name: '科幻',
  path: "/list/".concat(encodeURIComponent('科幻'))
}, {
  name: '惊悚',
  path: "/list/".concat(encodeURIComponent('惊悚'))
}, {
  name: '冒险',
  path: "/list/".concat(encodeURIComponent('冒险'))
}, {
  name: '奇幻',
  path: "/list/".concat(encodeURIComponent('奇幻'))
}, {
  name: '悬疑',
  path: "/list/".concat(encodeURIComponent('悬疑'))
}, {
  name: '剧情',
  path: "/list/".concat(encodeURIComponent('剧情'))
}, {
  name: '犯罪',
  path: "/list/".concat(encodeURIComponent('犯罪'))
}, {
  name: '灾难',
  path: "/list/".concat(encodeURIComponent('灾难'))
}, {
  name: '恐怖',
  path: "/list/".concat(encodeURIComponent('恐怖'))
}, {
  name: '战争',
  path: "/list/".concat(encodeURIComponent('战争'))
}, {
  name: '喜剧',
  path: "/list/".concat(encodeURIComponent('喜剧'))
}, {
  name: '音乐',
  path: "/list/".concat(encodeURIComponent('音乐'))
}, {
  name: '文艺',
  path: "/list/".concat(encodeURIComponent('文艺'))
}, {
  name: '励志',
  path: "/list/".concat(encodeURIComponent('励志'))
}];
exports.default = _default;
},{}],"layouts/default.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("babel-runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _reactRouterDom = require("react-router-dom");

var _nav = _interopRequireDefault(require("../nav"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var getMenuContent = function getMenuContent(_ref) {
  var path = _ref.path,
      name = _ref.name;
  return _react.default.createElement("a", {
    href: path ? path : '/',
    style: {
      color: '#fff2e8'
    }
  }, name);
};

var LayoutDefault =
/*#__PURE__*/
function (_Component) {
  _inherits(LayoutDefault, _Component);

  function LayoutDefault(props) {
    var _this;

    _classCallCheck(this, LayoutDefault);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LayoutDefault).call(this, props));
    _this.matchRouteName = _this.props.match ? _nav.default.find(function (e) {
      return e.name == _this.props.match.params.type;
    }) ? _nav.default.find(function (e) {
      return e.name == _this.props.match.params.type;
    }).name : '全部' : _nav.default[0].name;

    _this.toggleLoading = function () {
      var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var tip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '在等一下';

      _this.setState({
        tip: tip,
        loading: status
      });
    };

    _this.state = {
      loading: false,
      tip: '在等一下'
    };
    return _this;
  }

  _createClass(LayoutDefault, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.__LOADING__ = this.toggleLoading;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.__LOADING__ = null;
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var _this$state = this.state,
          loading = _this$state.loading,
          tip = _this$state.tip;
      return _react.default.createElement("div", {
        className: "flex-column",
        style: {
          width: '100%',
          height: '100%'
        }
      }, _react.default.createElement(_antd.Menu, {
        style: {
          fontSize: 13.5,
          backgroundColor: '#000'
        },
        mode: "horizontal",
        defaultSelectedKeys: [this.matchRouteName]
      }, _react.default.createElement(_antd.Menu.Item, {
        style: {
          marginLeft: 24,
          marginRight: 30,
          fontSize: 18,
          textAlign: 'center',
          color: '#fff !important',
          float: 'left'
        }
      }, _react.default.createElement("a", {
        href: '/',
        className: "hover-scale logo-text",
        style: {
          color: '#fff2e8'
        }
      }, "\u9ED1\u9A91\u9884\u544A\u7247\u7F51\u7AD9")), _nav.default.map(function (e, i) {
        return _react.default.createElement(_antd.Menu.Item, {
          key: e.name
        }, getMenuContent((0, _extends2.default)({}, e)));
      })), _react.default.createElement(_antd.Spin, {
        spinning: loading,
        wrapperClassName: "content-spin full",
        tip: tip
      }, children));
    }
  }]);

  return LayoutDefault;
}(_react.Component);

exports.default = LayoutDefault;
},{"babel-runtime/helpers/extends":"../node_modules/babel-runtime/helpers/extends.js","react":"../node_modules/react/index.js","antd":"../node_modules/antd/es/index.js","react-router-dom":"../node_modules/react-router-dom/es/index.js","../nav":"nav.js"}],"views/home/content.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _moment = _interopRequireDefault(require("moment"));

require("moment/locale/zh-cn");

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

_moment.default.locale('zh-cn');

var site = 'http://pnlbsdu7j.bkt.clouddn.com/';
var Meta = _antd.Card.Meta;

var Content =
/*#__PURE__*/
function (_Component) {
  _inherits(Content, _Component);

  function Content() {
    var _getPrototypeOf2;

    var _this;

    var _temp;

    _classCallCheck(this, Content);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Content)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      visible: false
    }, _this._handleClose = function (e) {
      if (_this.player && _this.player.pause) {
        _this.player.pause();
      }
    }, _this._handleCancel = function (e) {
      _this.setState({
        visible: false
      });
    }, _this._jumpToDetail = function () {
      var url = _this.props.url;
      url && window.open(url);
    }, _this._showModal = function (movie) {
      _this.setState({
        visible: true
      });

      var video = site + movie.videoKey;
      var pic = site + movie.coverKey;

      if (!_this.player) {
        setTimeout(function () {
          _this.player = new DPlayer({
            container: document.getElementsByClassName('videoModal')[0],
            screenshot: true,
            autoplay: true,
            video: {
              url: video,
              pic: pic,
              thumbnails: pic
            }
          });
        }, 500);
      } else {
        if (_this.player.video.currentSrc !== video) {
          _this.player.switchVideo({
            url: video,
            autoplay: true,
            pic: pic,
            type: 'auto'
          });
        }

        _this.player.play();
      }
    }, _this._renderContent = function () {
      var movies = _this.props.movies;
      return _react.default.createElement("div", {
        style: {
          padding: '30px'
        }
      }, _react.default.createElement(_antd.Row, null, movies.map(function (it, i) {
        return _react.default.createElement(_antd.Col, {
          key: i,
          xl: {
            span: 6
          },
          lg: {
            span: 8
          },
          md: {
            span: 12
          },
          sm: {
            span: 24
          },
          style: {
            marginBottom: '8px'
          }
        }, _react.default.createElement(_antd.Card, {
          bordered: false,
          hoverable: true,
          style: {
            width: '100%'
          },
          actions: [_react.default.createElement(_antd.Badge, null, _react.default.createElement(_antd.Icon, {
            style: {
              marginRight: '2px'
            },
            type: "clock-circle"
          }), (0, _moment.default)(it.meta.createdA).fromNow(true), "\u524D\u66F4\u65B0"), _react.default.createElement(_antd.Badge, null, _react.default.createElement(_antd.Icon, {
            style: {
              marginRight: '2px'
            },
            type: "star"
          }), it.rate, " \u5206 \u524D\u66F4\u65B0")],
          cover: _react.default.createElement("img", {
            onClick: function onClick() {
              return _this._showModal(it);
            },
            src: site + it.posterKey + '?imageMongr2/thumbnail/x1680/crop/1080*1600'
          })
        }, _react.default.createElement(Meta, {
          style: {
            height: '202px',
            over: 'hidden'
          },
          title: _react.default.createElement(_reactRouterDom.Link, {
            to: "/detail/".concat(it._id)
          }, it.title),
          description: _react.default.createElement(_reactRouterDom.Link, {
            to: "/detail/".concat(it._id)
          }, it.summary)
        })));
      })), _react.default.createElement(_antd.Modal, {
        className: "videoModal",
        footer: null,
        visible: _this.state.visible,
        afterClose: _this._handleClose,
        onCancel: _this._handleCancel
      }, _react.default.createElement(_antd.Spin, {
        size: "large"
      })));
    }, _temp));
  }

  _createClass(Content, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        style: {
          padding: 10
        }
      }, this._renderContent());
    }
  }]);

  return Content;
}(_react.Component);

exports.default = Content;
},{"react":"../node_modules/react/index.js","antd":"../node_modules/antd/es/index.js","moment":"../node_modules/moment/moment.js","moment/locale/zh-cn":"../node_modules/moment/locale/zh-cn.js","react-router-dom":"../node_modules/react-router-dom/es/index.js"}],"views/home/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _default = _interopRequireDefault(require("../../layouts/default"));

var _antd = require("antd");

var _request = _interopRequireDefault(require("../../lib/request"));

var _content = _interopRequireDefault(require("./content"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    var _this;

    _classCallCheck(this, Home);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this, props));

    _this._selectItem = function (_ref) {
      var key = _ref.key;

      _this.setState({
        selectedKey: key
      });
    };

    _this._getAllMovies = function () {
      (0, _request.default)(window.__LOADING__)({
        method: 'get',
        url: "/api/v0/movies?type=".concat(_this.state.type || '', "&year=").concat(_this.state.year || '')
      }).then(function (res) {
        _this.setState({
          movies: res
        });
      }).catch(function () {
        _this.setState({
          movies: []
        });
      });
    };

    _this._renderContent = function () {
      var movies = _this.state.movies;
      if (!movies || !movies.length) return null;
      return _react.default.createElement(_content.default, {
        movies: movies
      });
    };

    _this.state = {
      years: ['2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018'],
      type: _this.props.match.params.type,
      year: _this.props.match.params.year,
      movies: []
    };
    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._getAllMovies();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          years = _this$state.years,
          selectedKey = _this$state.selectedKey;
      return _react.default.createElement(_default.default, this.props, _react.default.createElement("div", {
        className: "flex-row full"
      }, _react.default.createElement(_antd.Menu, {
        defaultSelectedKeys: [selectedKey],
        mode: "inline",
        style: {
          height: '100%',
          overflowY: 'scroll',
          maxWidth: 230
        },
        onSelect: this._selectItem,
        className: "align-self-start"
      }, years && years.map(function (e, i) {
        _react.default.createElement(_antd.Menu.Item, {
          key: i
        }, _react.default.createElement("a", {
          href: "/year/".concat(e)
        }, e, " \u5E74\u4E0A\u6620"));
      })), _react.default.createElement("div", {
        className: "flex-1 scroll-y align-self-start"
      }, this._renderContent())));
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;
},{"react":"../node_modules/react/index.js","../../layouts/default":"layouts/default.js","antd":"../node_modules/antd/es/index.js","../../lib/request":"lib/request.js","./content":"views/home/content.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65047" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/home.2b845b66.map