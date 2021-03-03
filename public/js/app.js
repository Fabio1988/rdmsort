/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@shopify/draggable/lib/draggable.bundle.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@shopify/draggable/lib/draggable.bundle.js ***!
  \*****************************************************************/
/***/ ((module) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_556__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_556__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_556__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_556__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_556__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_556__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_556__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_556__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_556__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_556__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_556__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_556__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_556__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_556__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_556__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_556__(__nested_webpack_require_556__.s = 66);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __nested_webpack_require_4021__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AbstractEvent = __nested_webpack_require_4021__(64);

var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _AbstractEvent2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __nested_webpack_require_4429__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AbstractPlugin = __nested_webpack_require_4429__(60);

var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _AbstractPlugin2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __nested_webpack_require_4841__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _closest = __nested_webpack_require_4841__(51);

Object.defineProperty(exports, 'closest', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_closest).default;
  }
});

var _requestNextAnimationFrame = __nested_webpack_require_4841__(49);

Object.defineProperty(exports, 'requestNextAnimationFrame', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_requestNextAnimationFrame).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 3 */
/***/ (function(module, exports, __nested_webpack_require_5525__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SensorEvent = __nested_webpack_require_5525__(44);

Object.keys(_SensorEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SensorEvent[key];
    }
  });
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __nested_webpack_require_5969__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Sensor = __nested_webpack_require_5969__(47);

var _Sensor2 = _interopRequireDefault(_Sensor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Sensor2.default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __nested_webpack_require_6349__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DragEvent = __nested_webpack_require_6349__(14);

Object.keys(_DragEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _DragEvent[key];
    }
  });
});

var _DraggableEvent = __nested_webpack_require_6349__(13);

Object.keys(_DraggableEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _DraggableEvent[key];
    }
  });
});

var _Plugins = __nested_webpack_require_6349__(12);

Object.keys(_Plugins).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Plugins[key];
    }
  });
});

var _Sensors = __nested_webpack_require_6349__(6);

Object.keys(_Sensors).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Sensors[key];
    }
  });
});

var _Draggable = __nested_webpack_require_6349__(37);

var _Draggable2 = _interopRequireDefault(_Draggable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Draggable2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __nested_webpack_require_7867__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Sensor = __nested_webpack_require_7867__(4);

Object.defineProperty(exports, 'Sensor', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_Sensor).default;
  }
});

var _MouseSensor = __nested_webpack_require_7867__(46);

Object.defineProperty(exports, 'MouseSensor', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_MouseSensor).default;
  }
});

var _TouchSensor = __nested_webpack_require_7867__(43);

Object.defineProperty(exports, 'TouchSensor', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_TouchSensor).default;
  }
});

var _DragSensor = __nested_webpack_require_7867__(41);

Object.defineProperty(exports, 'DragSensor', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_DragSensor).default;
  }
});

var _ForceTouchSensor = __nested_webpack_require_7867__(39);

Object.defineProperty(exports, 'ForceTouchSensor', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_ForceTouchSensor).default;
  }
});

var _SensorEvent = __nested_webpack_require_7867__(3);

Object.keys(_SensorEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SensorEvent[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 7 */
/***/ (function(module, exports, __nested_webpack_require_9403__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SnappableEvent = __nested_webpack_require_9403__(18);

Object.keys(_SnappableEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SnappableEvent[key];
    }
  });
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __nested_webpack_require_9856__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CollidableEvent = __nested_webpack_require_9856__(23);

Object.keys(_CollidableEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CollidableEvent[key];
    }
  });
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __nested_webpack_require_10312__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SortableEvent = __nested_webpack_require_10312__(27);

Object.keys(_SortableEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SortableEvent[key];
    }
  });
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __nested_webpack_require_10763__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SwappableEvent = __nested_webpack_require_10763__(30);

Object.keys(_SwappableEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SwappableEvent[key];
    }
  });
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __nested_webpack_require_11217__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DroppableEvent = __nested_webpack_require_11217__(33);

Object.keys(_DroppableEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _DroppableEvent[key];
    }
  });
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __nested_webpack_require_11671__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Announcement = __nested_webpack_require_11671__(62);

Object.defineProperty(exports, 'Announcement', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_Announcement).default;
  }
});
Object.defineProperty(exports, 'defaultAnnouncementOptions', {
  enumerable: true,
  get: function () {
    return _Announcement.defaultOptions;
  }
});

var _Focusable = __nested_webpack_require_11671__(59);

Object.defineProperty(exports, 'Focusable', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_Focusable).default;
  }
});

var _Mirror = __nested_webpack_require_11671__(57);

Object.defineProperty(exports, 'Mirror', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_Mirror).default;
  }
});
Object.defineProperty(exports, 'defaultMirrorOptions', {
  enumerable: true,
  get: function () {
    return _Mirror.defaultOptions;
  }
});

var _Scrollable = __nested_webpack_require_11671__(53);

Object.defineProperty(exports, 'Scrollable', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_Scrollable).default;
  }
});
Object.defineProperty(exports, 'defaultScrollableOptions', {
  enumerable: true,
  get: function () {
    return _Scrollable.defaultOptions;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 13 */
/***/ (function(module, exports, __nested_webpack_require_13148__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DraggableEvent = __nested_webpack_require_13148__(63);

Object.keys(_DraggableEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _DraggableEvent[key];
    }
  });
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __nested_webpack_require_13602__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DragEvent = __nested_webpack_require_13602__(65);

Object.keys(_DragEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _DragEvent[key];
    }
  });
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __nested_webpack_require_14041__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultOptions = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _AbstractPlugin = __nested_webpack_require_14041__(1);

var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const onSortableSorted = Symbol('onSortableSorted');

/**
 * SwapAnimation default options
 * @property {Object} defaultOptions
 * @property {Number} defaultOptions.duration
 * @property {String} defaultOptions.easingFunction
 * @property {Boolean} defaultOptions.horizontal
 * @type {Object}
 */
const defaultOptions = exports.defaultOptions = {
  duration: 150,
  easingFunction: 'ease-in-out',
  horizontal: false
};

/**
 * SwapAnimation plugin adds swap animations for sortable
 * @class SwapAnimation
 * @module SwapAnimation
 * @extends AbstractPlugin
 */
class SwapAnimation extends _AbstractPlugin2.default {
  /**
   * SwapAnimation constructor.
   * @constructs SwapAnimation
   * @param {Draggable} draggable - Draggable instance
   */
  constructor(draggable) {
    super(draggable);

    /**
     * SwapAnimation options
     * @property {Object} options
     * @property {Number} defaultOptions.duration
     * @property {String} defaultOptions.easingFunction
     * @type {Object}
     */
    this.options = _extends({}, defaultOptions, this.getOptions());

    /**
     * Last animation frame
     * @property {Number} lastAnimationFrame
     * @type {Number}
     */
    this.lastAnimationFrame = null;

    this[onSortableSorted] = this[onSortableSorted].bind(this);
  }

  /**
   * Attaches plugins event listeners
   */
  attach() {
    this.draggable.on('sortable:sorted', this[onSortableSorted]);
  }

  /**
   * Detaches plugins event listeners
   */
  detach() {
    this.draggable.off('sortable:sorted', this[onSortableSorted]);
  }

  /**
   * Returns options passed through draggable
   * @return {Object}
   */
  getOptions() {
    return this.draggable.options.swapAnimation || {};
  }

  /**
   * Sortable sorted handler
   * @param {SortableSortedEvent} sortableEvent
   * @private
   */
  [onSortableSorted]({ oldIndex, newIndex, dragEvent }) {
    const { source, over } = dragEvent;

    cancelAnimationFrame(this.lastAnimationFrame);

    // Can be done in a separate frame
    this.lastAnimationFrame = requestAnimationFrame(() => {
      if (oldIndex >= newIndex) {
        animate(source, over, this.options);
      } else {
        animate(over, source, this.options);
      }
    });
  }
}

exports.default = SwapAnimation; /**
                                  * Animates two elements
                                  * @param {HTMLElement} from
                                  * @param {HTMLElement} to
                                  * @param {Object} options
                                  * @param {Number} options.duration
                                  * @param {String} options.easingFunction
                                  * @param {String} options.horizontal
                                  * @private
                                  */

function animate(from, to, { duration, easingFunction, horizontal }) {
  for (const element of [from, to]) {
    element.style.pointerEvents = 'none';
  }

  if (horizontal) {
    const width = from.offsetWidth;
    from.style.transform = `translate3d(${width}px, 0, 0)`;
    to.style.transform = `translate3d(-${width}px, 0, 0)`;
  } else {
    const height = from.offsetHeight;
    from.style.transform = `translate3d(0, ${height}px, 0)`;
    to.style.transform = `translate3d(0, -${height}px, 0)`;
  }

  requestAnimationFrame(() => {
    for (const element of [from, to]) {
      element.addEventListener('transitionend', resetElementOnTransitionEnd);
      element.style.transition = `transform ${duration}ms ${easingFunction}`;
      element.style.transform = '';
    }
  });
}

/**
 * Resets animation style properties after animation has completed
 * @param {Event} event
 * @private
 */
function resetElementOnTransitionEnd(event) {
  event.target.style.transition = '';
  event.target.style.pointerEvents = '';
  event.target.removeEventListener('transitionend', resetElementOnTransitionEnd);
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __nested_webpack_require_18616__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultOptions = undefined;

var _SwapAnimation = __nested_webpack_require_18616__(15);

var _SwapAnimation2 = _interopRequireDefault(_SwapAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SwapAnimation2.default;
exports.defaultOptions = _SwapAnimation.defaultOptions;

/***/ }),
/* 17 */
/***/ (function(module, exports, __nested_webpack_require_19117__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AbstractPlugin = __nested_webpack_require_19117__(1);

var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

var _SnappableEvent = __nested_webpack_require_19117__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const onDragStart = Symbol('onDragStart');
const onDragStop = Symbol('onDragStop');
const onDragOver = Symbol('onDragOver');
const onDragOut = Symbol('onDragOut');
const onMirrorCreated = Symbol('onMirrorCreated');
const onMirrorDestroy = Symbol('onMirrorDestroy');

/**
 * Snappable plugin which snaps draggable elements into place
 * @class Snappable
 * @module Snappable
 * @extends AbstractPlugin
 */
class Snappable extends _AbstractPlugin2.default {
  /**
   * Snappable constructor.
   * @constructs Snappable
   * @param {Draggable} draggable - Draggable instance
   */
  constructor(draggable) {
    super(draggable);

    /**
     * Keeps track of the first source element
     * @property {HTMLElement|null} firstSource
     */
    this.firstSource = null;

    /**
     * Keeps track of the mirror element
     * @property {HTMLElement} mirror
     */
    this.mirror = null;

    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this[onDragOver] = this[onDragOver].bind(this);
    this[onDragOut] = this[onDragOut].bind(this);
    this[onMirrorCreated] = this[onMirrorCreated].bind(this);
    this[onMirrorDestroy] = this[onMirrorDestroy].bind(this);
  }

  /**
   * Attaches plugins event listeners
   */
  attach() {
    this.draggable.on('drag:start', this[onDragStart]).on('drag:stop', this[onDragStop]).on('drag:over', this[onDragOver]).on('drag:out', this[onDragOut]).on('droppable:over', this[onDragOver]).on('droppable:out', this[onDragOut]).on('mirror:created', this[onMirrorCreated]).on('mirror:destroy', this[onMirrorDestroy]);
  }

  /**
   * Detaches plugins event listeners
   */
  detach() {
    this.draggable.off('drag:start', this[onDragStart]).off('drag:stop', this[onDragStop]).off('drag:over', this[onDragOver]).off('drag:out', this[onDragOut]).off('droppable:over', this[onDragOver]).off('droppable:out', this[onDragOut]).off('mirror:created', this[onMirrorCreated]).off('mirror:destroy', this[onMirrorDestroy]);
  }

  /**
   * Drag start handler
   * @private
   * @param {DragStartEvent} event - Drag start event
   */
  [onDragStart](event) {
    if (event.canceled()) {
      return;
    }

    this.firstSource = event.source;
  }

  /**
   * Drag stop handler
   * @private
   * @param {DragStopEvent} event - Drag stop event
   */
  [onDragStop]() {
    this.firstSource = null;
  }

  /**
   * Drag over handler
   * @private
   * @param {DragOverEvent|DroppableOverEvent} event - Drag over event
   */
  [onDragOver](event) {
    if (event.canceled()) {
      return;
    }

    const source = event.source || event.dragEvent.source;

    if (source === this.firstSource) {
      this.firstSource = null;
      return;
    }

    const snapInEvent = new _SnappableEvent.SnapInEvent({
      dragEvent: event,
      snappable: event.over || event.droppable
    });

    this.draggable.trigger(snapInEvent);

    if (snapInEvent.canceled()) {
      return;
    }

    if (this.mirror) {
      this.mirror.style.display = 'none';
    }

    source.classList.remove(this.draggable.getClassNameFor('source:dragging'));
    source.classList.add(this.draggable.getClassNameFor('source:placed'));

    // Need to cancel this in drag out
    setTimeout(() => {
      source.classList.remove(this.draggable.getClassNameFor('source:placed'));
    }, this.draggable.options.placedTimeout);
  }

  /**
   * Drag out handler
   * @private
   * @param {DragOutEvent|DroppableOutEvent} event - Drag out event
   */
  [onDragOut](event) {
    if (event.canceled()) {
      return;
    }

    const source = event.source || event.dragEvent.source;

    const snapOutEvent = new _SnappableEvent.SnapOutEvent({
      dragEvent: event,
      snappable: event.over || event.droppable
    });

    this.draggable.trigger(snapOutEvent);

    if (snapOutEvent.canceled()) {
      return;
    }

    if (this.mirror) {
      this.mirror.style.display = '';
    }

    source.classList.add(this.draggable.getClassNameFor('source:dragging'));
  }

  /**
   * Mirror created handler
   * @param {MirrorCreatedEvent} mirrorEvent
   * @private
   */
  [onMirrorCreated]({ mirror }) {
    this.mirror = mirror;
  }

  /**
   * Mirror destroy handler
   * @param {MirrorDestroyEvent} mirrorEvent
   * @private
   */
  [onMirrorDestroy]() {
    this.mirror = null;
  }
}
exports.default = Snappable;

/***/ }),
/* 18 */
/***/ (function(module, exports, __nested_webpack_require_23899__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SnapOutEvent = exports.SnapInEvent = exports.SnapEvent = undefined;

var _AbstractEvent = __nested_webpack_require_23899__(0);

var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Base snap event
 * @class SnapEvent
 * @module SnapEvent
 * @extends AbstractEvent
 */
class SnapEvent extends _AbstractEvent2.default {

  /**
   * Drag event that triggered this snap event
   * @property dragEvent
   * @type {DragEvent}
   * @readonly
   */
  get dragEvent() {
    return this.data.dragEvent;
  }

  /**
   * Snappable element
   * @property snappable
   * @type {HTMLElement}
   * @readonly
   */
  get snappable() {
    return this.data.snappable;
  }
}

exports.SnapEvent = SnapEvent; /**
                                * Snap in event
                                * @class SnapInEvent
                                * @module SnapInEvent
                                * @extends SnapEvent
                                */

SnapEvent.type = 'snap';
class SnapInEvent extends SnapEvent {}

exports.SnapInEvent = SnapInEvent; /**
                                    * Snap out event
                                    * @class SnapOutEvent
                                    * @module SnapOutEvent
                                    * @extends SnapEvent
                                    */

SnapInEvent.type = 'snap:in';
SnapInEvent.cancelable = true;
class SnapOutEvent extends SnapEvent {}
exports.SnapOutEvent = SnapOutEvent;
SnapOutEvent.type = 'snap:out';
SnapOutEvent.cancelable = true;

/***/ }),
/* 19 */
/***/ (function(module, exports, __nested_webpack_require_25675__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SnappableEvent = __nested_webpack_require_25675__(7);

Object.keys(_SnappableEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SnappableEvent[key];
    }
  });
});

var _Snappable = __nested_webpack_require_25675__(17);

var _Snappable2 = _interopRequireDefault(_Snappable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Snappable2.default;

/***/ }),
/* 20 */
/***/ (function(module, exports, __nested_webpack_require_26363__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultOptions = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _AbstractPlugin = __nested_webpack_require_26363__(1);

var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

var _utils = __nested_webpack_require_26363__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const onMirrorCreated = Symbol('onMirrorCreated');
const onMirrorDestroy = Symbol('onMirrorDestroy');
const onDragOver = Symbol('onDragOver');
const resize = Symbol('resize');

/**
 * ResizeMirror default options
 * @property {Object} defaultOptions
 * @type {Object}
 */
const defaultOptions = exports.defaultOptions = {};

/**
 * The ResizeMirror plugin resizes the mirror element to the dimensions of the draggable element that the mirror is hovering over
 * @class ResizeMirror
 * @module ResizeMirror
 * @extends AbstractPlugin
 */
class ResizeMirror extends _AbstractPlugin2.default {
  /**
   * ResizeMirror constructor.
   * @constructs ResizeMirror
   * @param {Draggable} draggable - Draggable instance
   */
  constructor(draggable) {
    super(draggable);

    /**
     * ResizeMirror options
     * @property {Object} options
     * @type {Object}
     */
    this.options = _extends({}, defaultOptions, this.getOptions());

    /**
     * ResizeMirror remembers the last width when resizing the mirror
     * to avoid additional writes to the DOM
     * @property {number} lastWidth
     */
    this.lastWidth = 0;

    /**
     * ResizeMirror remembers the last height when resizing the mirror
     * to avoid additional writes to the DOM
     * @property {number} lastHeight
     */
    this.lastHeight = 0;

    /**
     * Keeps track of the mirror element
     * @property {HTMLElement} mirror
     */
    this.mirror = null;

    this[onMirrorCreated] = this[onMirrorCreated].bind(this);
    this[onMirrorDestroy] = this[onMirrorDestroy].bind(this);
    this[onDragOver] = this[onDragOver].bind(this);
  }

  /**
   * Attaches plugins event listeners
   */
  attach() {
    this.draggable.on('mirror:created', this[onMirrorCreated]).on('drag:over', this[onDragOver]).on('drag:over:container', this[onDragOver]);
  }

  /**
   * Detaches plugins event listeners
   */
  detach() {
    this.draggable.off('mirror:created', this[onMirrorCreated]).off('mirror:destroy', this[onMirrorDestroy]).off('drag:over', this[onDragOver]).off('drag:over:container', this[onDragOver]);
  }

  /**
   * Returns options passed through draggable
   * @return {Object}
   */
  getOptions() {
    return this.draggable.options.resizeMirror || {};
  }

  /**
   * Mirror created handler
   * @param {MirrorCreatedEvent} mirrorEvent
   * @private
   */
  [onMirrorCreated]({ mirror }) {
    this.mirror = mirror;
  }

  /**
   * Mirror destroy handler
   * @param {MirrorDestroyEvent} mirrorEvent
   * @private
   */
  [onMirrorDestroy]() {
    this.mirror = null;
  }

  /**
   * Drag over handler
   * @param {DragOverEvent | DragOverContainer} dragEvent
   * @private
   */
  [onDragOver](dragEvent) {
    this[resize](dragEvent);
  }

  /**
   * Resize function for
   * @param {DragOverEvent | DragOverContainer} dragEvent
   * @private
   */
  [resize]({ overContainer, over }) {
    requestAnimationFrame(() => {
      if (this.mirror.parentNode !== overContainer) {
        overContainer.appendChild(this.mirror);
      }

      const overElement = over || this.draggable.getDraggableElementsForContainer(overContainer)[0];

      if (!overElement) {
        return;
      }

      (0, _utils.requestNextAnimationFrame)(() => {
        const overRect = overElement.getBoundingClientRect();

        if (this.lastHeight === overRect.height && this.lastWidth === overRect.width) {
          return;
        }

        this.mirror.style.width = `${overRect.width}px`;
        this.mirror.style.height = `${overRect.height}px`;

        this.lastWidth = overRect.width;
        this.lastHeight = overRect.height;
      });
    });
  }
}
exports.default = ResizeMirror;

/***/ }),
/* 21 */
/***/ (function(module, exports, __nested_webpack_require_30733__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultOptions = undefined;

var _ResizeMirror = __nested_webpack_require_30733__(20);

var _ResizeMirror2 = _interopRequireDefault(_ResizeMirror);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ResizeMirror2.default;
exports.defaultOptions = _ResizeMirror.defaultOptions;

/***/ }),
/* 22 */
/***/ (function(module, exports, __nested_webpack_require_31229__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AbstractPlugin = __nested_webpack_require_31229__(1);

var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

var _utils = __nested_webpack_require_31229__(2);

var _CollidableEvent = __nested_webpack_require_31229__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const onDragMove = Symbol('onDragMove');
const onDragStop = Symbol('onDragStop');
const onRequestAnimationFrame = Symbol('onRequestAnimationFrame');

/**
 * Collidable plugin which detects colliding elements while dragging
 * @class Collidable
 * @module Collidable
 * @extends AbstractPlugin
 */
class Collidable extends _AbstractPlugin2.default {
  /**
   * Collidable constructor.
   * @constructs Collidable
   * @param {Draggable} draggable - Draggable instance
   */
  constructor(draggable) {
    super(draggable);

    /**
     * Keeps track of currently colliding elements
     * @property {HTMLElement|null} currentlyCollidingElement
     * @type {HTMLElement|null}
     */
    this.currentlyCollidingElement = null;

    /**
     * Keeps track of currently colliding elements
     * @property {HTMLElement|null} lastCollidingElement
     * @type {HTMLElement|null}
     */
    this.lastCollidingElement = null;

    /**
     * Animation frame for finding colliding elements
     * @property {Number|null} currentAnimationFrame
     * @type {Number|null}
     */
    this.currentAnimationFrame = null;

    this[onDragMove] = this[onDragMove].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this[onRequestAnimationFrame] = this[onRequestAnimationFrame].bind(this);
  }

  /**
   * Attaches plugins event listeners
   */
  attach() {
    this.draggable.on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]);
  }

  /**
   * Detaches plugins event listeners
   */
  detach() {
    this.draggable.off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]);
  }

  /**
   * Returns current collidables based on `collidables` option
   * @return {HTMLElement[]}
   */
  getCollidables() {
    const collidables = this.draggable.options.collidables;

    if (typeof collidables === 'string') {
      return Array.prototype.slice.call(document.querySelectorAll(collidables));
    } else if (collidables instanceof NodeList || collidables instanceof Array) {
      return Array.prototype.slice.call(collidables);
    } else if (collidables instanceof HTMLElement) {
      return [collidables];
    } else if (typeof collidables === 'function') {
      return collidables();
    } else {
      return [];
    }
  }

  /**
   * Drag move handler
   * @private
   * @param {DragMoveEvent} event - Drag move event
   */
  [onDragMove](event) {
    const target = event.sensorEvent.target;

    this.currentAnimationFrame = requestAnimationFrame(this[onRequestAnimationFrame](target));

    if (this.currentlyCollidingElement) {
      event.cancel();
    }

    const collidableInEvent = new _CollidableEvent.CollidableInEvent({
      dragEvent: event,
      collidingElement: this.currentlyCollidingElement
    });

    const collidableOutEvent = new _CollidableEvent.CollidableOutEvent({
      dragEvent: event,
      collidingElement: this.lastCollidingElement
    });

    const enteringCollidable = Boolean(this.currentlyCollidingElement && this.lastCollidingElement !== this.currentlyCollidingElement);
    const leavingCollidable = Boolean(!this.currentlyCollidingElement && this.lastCollidingElement);

    if (enteringCollidable) {
      if (this.lastCollidingElement) {
        this.draggable.trigger(collidableOutEvent);
      }

      this.draggable.trigger(collidableInEvent);
    } else if (leavingCollidable) {
      this.draggable.trigger(collidableOutEvent);
    }

    this.lastCollidingElement = this.currentlyCollidingElement;
  }

  /**
   * Drag stop handler
   * @private
   * @param {DragStopEvent} event - Drag stop event
   */
  [onDragStop](event) {
    const lastCollidingElement = this.currentlyCollidingElement || this.lastCollidingElement;
    const collidableOutEvent = new _CollidableEvent.CollidableOutEvent({
      dragEvent: event,
      collidingElement: lastCollidingElement
    });

    if (lastCollidingElement) {
      this.draggable.trigger(collidableOutEvent);
    }

    this.lastCollidingElement = null;
    this.currentlyCollidingElement = null;
  }

  /**
   * Animation frame function
   * @private
   * @param {HTMLElement} target - Current move target
   * @return {Function}
   */
  [onRequestAnimationFrame](target) {
    return () => {
      const collidables = this.getCollidables();
      this.currentlyCollidingElement = (0, _utils.closest)(target, element => collidables.includes(element));
    };
  }
}
exports.default = Collidable;

/***/ }),
/* 23 */
/***/ (function(module, exports, __nested_webpack_require_36116__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollidableOutEvent = exports.CollidableInEvent = exports.CollidableEvent = undefined;

var _AbstractEvent = __nested_webpack_require_36116__(0);

var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Base collidable event
 * @class CollidableEvent
 * @module CollidableEvent
 * @extends AbstractEvent
 */
class CollidableEvent extends _AbstractEvent2.default {

  /**
   * Drag event that triggered this colliable event
   * @property dragEvent
   * @type {DragEvent}
   * @readonly
   */
  get dragEvent() {
    return this.data.dragEvent;
  }
}

exports.CollidableEvent = CollidableEvent; /**
                                            * Collidable in event
                                            * @class CollidableInEvent
                                            * @module CollidableInEvent
                                            * @extends CollidableEvent
                                            */

CollidableEvent.type = 'collidable';
class CollidableInEvent extends CollidableEvent {

  /**
   * Element you are currently colliding with
   * @property collidingElement
   * @type {HTMLElement}
   * @readonly
   */
  get collidingElement() {
    return this.data.collidingElement;
  }
}

exports.CollidableInEvent = CollidableInEvent; /**
                                                * Collidable out event
                                                * @class CollidableOutEvent
                                                * @module CollidableOutEvent
                                                * @extends CollidableEvent
                                                */

CollidableInEvent.type = 'collidable:in';
class CollidableOutEvent extends CollidableEvent {

  /**
   * Element you were previously colliding with
   * @property collidingElement
   * @type {HTMLElement}
   * @readonly
   */
  get collidingElement() {
    return this.data.collidingElement;
  }
}
exports.CollidableOutEvent = CollidableOutEvent;
CollidableOutEvent.type = 'collidable:out';

/***/ }),
/* 24 */
/***/ (function(module, exports, __nested_webpack_require_38389__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CollidableEvent = __nested_webpack_require_38389__(8);

Object.keys(_CollidableEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CollidableEvent[key];
    }
  });
});

var _Collidable = __nested_webpack_require_38389__(22);

var _Collidable2 = _interopRequireDefault(_Collidable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Collidable2.default;

/***/ }),
/* 25 */
/***/ (function(module, exports, __nested_webpack_require_39084__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Collidable = __nested_webpack_require_39084__(24);

Object.defineProperty(exports, 'Collidable', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_Collidable).default;
  }
});

var _ResizeMirror = __nested_webpack_require_39084__(21);

Object.defineProperty(exports, 'ResizeMirror', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_ResizeMirror).default;
  }
});
Object.defineProperty(exports, 'defaultResizeMirrorOptions', {
  enumerable: true,
  get: function () {
    return _ResizeMirror.defaultOptions;
  }
});

var _Snappable = __nested_webpack_require_39084__(19);

Object.defineProperty(exports, 'Snappable', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_Snappable).default;
  }
});

var _SwapAnimation = __nested_webpack_require_39084__(16);

Object.defineProperty(exports, 'SwapAnimation', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_SwapAnimation).default;
  }
});
Object.defineProperty(exports, 'defaultSwapAnimationOptions', {
  enumerable: true,
  get: function () {
    return _SwapAnimation.defaultOptions;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 26 */
/***/ (function(module, exports, __nested_webpack_require_40447__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Draggable = __nested_webpack_require_40447__(5);

var _Draggable2 = _interopRequireDefault(_Draggable);

var _SortableEvent = __nested_webpack_require_40447__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const onDragStart = Symbol('onDragStart');
const onDragOverContainer = Symbol('onDragOverContainer');
const onDragOver = Symbol('onDragOver');
const onDragStop = Symbol('onDragStop');

/**
 * Returns announcement message when a Draggable element has been sorted with another Draggable element
 * or moved into a new container
 * @param {SortableSortedEvent} sortableEvent
 * @return {String}
 */
function onSortableSortedDefaultAnnouncement({ dragEvent }) {
  const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'sortable element';

  if (dragEvent.over) {
    const overText = dragEvent.over.textContent.trim() || dragEvent.over.id || 'sortable element';
    const isFollowing = dragEvent.source.compareDocumentPosition(dragEvent.over) & Node.DOCUMENT_POSITION_FOLLOWING;

    if (isFollowing) {
      return `Placed ${sourceText} after ${overText}`;
    } else {
      return `Placed ${sourceText} before ${overText}`;
    }
  } else {
    // need to figure out how to compute container name
    return `Placed ${sourceText} into a different container`;
  }
}

/**
 * @const {Object} defaultAnnouncements
 * @const {Function} defaultAnnouncements['sortable:sorted']
 */
const defaultAnnouncements = {
  'sortable:sorted': onSortableSortedDefaultAnnouncement
};

/**
 * Sortable is built on top of Draggable and allows sorting of draggable elements. Sortable will keep
 * track of the original index and emits the new index as you drag over draggable elements.
 * @class Sortable
 * @module Sortable
 * @extends Draggable
 */
class Sortable extends _Draggable2.default {
  /**
   * Sortable constructor.
   * @constructs Sortable
   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Sortable containers
   * @param {Object} options - Options for Sortable
   */
  constructor(containers = [], options = {}) {
    super(containers, _extends({}, options, {
      announcements: _extends({}, defaultAnnouncements, options.announcements || {})
    }));

    /**
     * start index of source on drag start
     * @property startIndex
     * @type {Number}
     */
    this.startIndex = null;

    /**
     * start container on drag start
     * @property startContainer
     * @type {HTMLElement}
     * @default null
     */
    this.startContainer = null;

    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragOverContainer] = this[onDragOverContainer].bind(this);
    this[onDragOver] = this[onDragOver].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);

    this.on('drag:start', this[onDragStart]).on('drag:over:container', this[onDragOverContainer]).on('drag:over', this[onDragOver]).on('drag:stop', this[onDragStop]);
  }

  /**
   * Destroys Sortable instance.
   */
  destroy() {
    super.destroy();

    this.off('drag:start', this[onDragStart]).off('drag:over:container', this[onDragOverContainer]).off('drag:over', this[onDragOver]).off('drag:stop', this[onDragStop]);
  }

  /**
   * Returns true index of element within its container during drag operation, i.e. excluding mirror and original source
   * @param {HTMLElement} element - An element
   * @return {Number}
   */
  index(element) {
    return this.getDraggableElementsForContainer(element.parentNode).indexOf(element);
  }

  /**
   * Drag start handler
   * @private
   * @param {DragStartEvent} event - Drag start event
   */
  [onDragStart](event) {
    this.startContainer = event.source.parentNode;
    this.startIndex = this.index(event.source);

    const sortableStartEvent = new _SortableEvent.SortableStartEvent({
      dragEvent: event,
      startIndex: this.startIndex,
      startContainer: this.startContainer
    });

    this.trigger(sortableStartEvent);

    if (sortableStartEvent.canceled()) {
      event.cancel();
    }
  }

  /**
   * Drag over container handler
   * @private
   * @param {DragOverContainerEvent} event - Drag over container event
   */
  [onDragOverContainer](event) {
    if (event.canceled()) {
      return;
    }

    const { source, over, overContainer } = event;
    const oldIndex = this.index(source);

    const sortableSortEvent = new _SortableEvent.SortableSortEvent({
      dragEvent: event,
      currentIndex: oldIndex,
      source,
      over
    });

    this.trigger(sortableSortEvent);

    if (sortableSortEvent.canceled()) {
      return;
    }

    const children = this.getDraggableElementsForContainer(overContainer);
    const moves = move({ source, over, overContainer, children });

    if (!moves) {
      return;
    }

    const { oldContainer, newContainer } = moves;
    const newIndex = this.index(event.source);

    const sortableSortedEvent = new _SortableEvent.SortableSortedEvent({
      dragEvent: event,
      oldIndex,
      newIndex,
      oldContainer,
      newContainer
    });

    this.trigger(sortableSortedEvent);
  }

  /**
   * Drag over handler
   * @private
   * @param {DragOverEvent} event - Drag over event
   */
  [onDragOver](event) {
    if (event.over === event.originalSource || event.over === event.source) {
      return;
    }

    const { source, over, overContainer } = event;
    const oldIndex = this.index(source);

    const sortableSortEvent = new _SortableEvent.SortableSortEvent({
      dragEvent: event,
      currentIndex: oldIndex,
      source,
      over
    });

    this.trigger(sortableSortEvent);

    if (sortableSortEvent.canceled()) {
      return;
    }

    const children = this.getDraggableElementsForContainer(overContainer);
    const moves = move({ source, over, overContainer, children });

    if (!moves) {
      return;
    }

    const { oldContainer, newContainer } = moves;
    const newIndex = this.index(source);

    const sortableSortedEvent = new _SortableEvent.SortableSortedEvent({
      dragEvent: event,
      oldIndex,
      newIndex,
      oldContainer,
      newContainer
    });

    this.trigger(sortableSortedEvent);
  }

  /**
   * Drag stop handler
   * @private
   * @param {DragStopEvent} event - Drag stop event
   */
  [onDragStop](event) {
    const sortableStopEvent = new _SortableEvent.SortableStopEvent({
      dragEvent: event,
      oldIndex: this.startIndex,
      newIndex: this.index(event.source),
      oldContainer: this.startContainer,
      newContainer: event.source.parentNode
    });

    this.trigger(sortableStopEvent);

    this.startIndex = null;
    this.startContainer = null;
  }
}

exports.default = Sortable;
function index(element) {
  return Array.prototype.indexOf.call(element.parentNode.children, element);
}

function move({ source, over, overContainer, children }) {
  const emptyOverContainer = !children.length;
  const differentContainer = source.parentNode !== overContainer;
  const sameContainer = over && !differentContainer;

  if (emptyOverContainer) {
    return moveInsideEmptyContainer(source, overContainer);
  } else if (sameContainer) {
    return moveWithinContainer(source, over);
  } else if (differentContainer) {
    return moveOutsideContainer(source, over, overContainer);
  } else {
    return null;
  }
}

function moveInsideEmptyContainer(source, overContainer) {
  const oldContainer = source.parentNode;

  overContainer.appendChild(source);

  return { oldContainer, newContainer: overContainer };
}

function moveWithinContainer(source, over) {
  const oldIndex = index(source);
  const newIndex = index(over);

  if (oldIndex < newIndex) {
    source.parentNode.insertBefore(source, over.nextElementSibling);
  } else {
    source.parentNode.insertBefore(source, over);
  }

  return { oldContainer: source.parentNode, newContainer: source.parentNode };
}

function moveOutsideContainer(source, over, overContainer) {
  const oldContainer = source.parentNode;

  if (over) {
    over.parentNode.insertBefore(source, over);
  } else {
    // need to figure out proper position
    overContainer.appendChild(source);
  }

  return { oldContainer, newContainer: source.parentNode };
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __nested_webpack_require_49051__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SortableStopEvent = exports.SortableSortedEvent = exports.SortableSortEvent = exports.SortableStartEvent = exports.SortableEvent = undefined;

var _AbstractEvent = __nested_webpack_require_49051__(0);

var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Base sortable event
 * @class SortableEvent
 * @module SortableEvent
 * @extends AbstractEvent
 */
class SortableEvent extends _AbstractEvent2.default {

  /**
   * Original drag event that triggered this sortable event
   * @property dragEvent
   * @type {DragEvent}
   * @readonly
   */
  get dragEvent() {
    return this.data.dragEvent;
  }
}

exports.SortableEvent = SortableEvent; /**
                                        * Sortable start event
                                        * @class SortableStartEvent
                                        * @module SortableStartEvent
                                        * @extends SortableEvent
                                        */

SortableEvent.type = 'sortable';
class SortableStartEvent extends SortableEvent {

  /**
   * Start index of source on sortable start
   * @property startIndex
   * @type {Number}
   * @readonly
   */
  get startIndex() {
    return this.data.startIndex;
  }

  /**
   * Start container on sortable start
   * @property startContainer
   * @type {HTMLElement}
   * @readonly
   */
  get startContainer() {
    return this.data.startContainer;
  }
}

exports.SortableStartEvent = SortableStartEvent; /**
                                                  * Sortable sort event
                                                  * @class SortableSortEvent
                                                  * @module SortableSortEvent
                                                  * @extends SortableEvent
                                                  */

SortableStartEvent.type = 'sortable:start';
SortableStartEvent.cancelable = true;
class SortableSortEvent extends SortableEvent {

  /**
   * Index of current draggable element
   * @property currentIndex
   * @type {Number}
   * @readonly
   */
  get currentIndex() {
    return this.data.currentIndex;
  }

  /**
   * Draggable element you are hovering over
   * @property over
   * @type {HTMLElement}
   * @readonly
   */
  get over() {
    return this.data.oldIndex;
  }

  /**
   * Draggable container element you are hovering over
   * @property overContainer
   * @type {HTMLElement}
   * @readonly
   */
  get overContainer() {
    return this.data.newIndex;
  }
}

exports.SortableSortEvent = SortableSortEvent; /**
                                                * Sortable sorted event
                                                * @class SortableSortedEvent
                                                * @module SortableSortedEvent
                                                * @extends SortableEvent
                                                */

SortableSortEvent.type = 'sortable:sort';
SortableSortEvent.cancelable = true;
class SortableSortedEvent extends SortableEvent {

  /**
   * Index of last sorted event
   * @property oldIndex
   * @type {Number}
   * @readonly
   */
  get oldIndex() {
    return this.data.oldIndex;
  }

  /**
   * New index of this sorted event
   * @property newIndex
   * @type {Number}
   * @readonly
   */
  get newIndex() {
    return this.data.newIndex;
  }

  /**
   * Old container of draggable element
   * @property oldContainer
   * @type {HTMLElement}
   * @readonly
   */
  get oldContainer() {
    return this.data.oldContainer;
  }

  /**
   * New container of draggable element
   * @property newContainer
   * @type {HTMLElement}
   * @readonly
   */
  get newContainer() {
    return this.data.newContainer;
  }
}

exports.SortableSortedEvent = SortableSortedEvent; /**
                                                    * Sortable stop event
                                                    * @class SortableStopEvent
                                                    * @module SortableStopEvent
                                                    * @extends SortableEvent
                                                    */

SortableSortedEvent.type = 'sortable:sorted';
class SortableStopEvent extends SortableEvent {

  /**
   * Original index on sortable start
   * @property oldIndex
   * @type {Number}
   * @readonly
   */
  get oldIndex() {
    return this.data.oldIndex;
  }

  /**
   * New index of draggable element
   * @property newIndex
   * @type {Number}
   * @readonly
   */
  get newIndex() {
    return this.data.newIndex;
  }

  /**
   * Original container of draggable element
   * @property oldContainer
   * @type {HTMLElement}
   * @readonly
   */
  get oldContainer() {
    return this.data.oldContainer;
  }

  /**
   * New container of draggable element
   * @property newContainer
   * @type {HTMLElement}
   * @readonly
   */
  get newContainer() {
    return this.data.newContainer;
  }
}
exports.SortableStopEvent = SortableStopEvent;
SortableStopEvent.type = 'sortable:stop';

/***/ }),
/* 28 */
/***/ (function(module, exports, __nested_webpack_require_54331__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SortableEvent = __nested_webpack_require_54331__(9);

Object.keys(_SortableEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SortableEvent[key];
    }
  });
});

var _Sortable = __nested_webpack_require_54331__(26);

var _Sortable2 = _interopRequireDefault(_Sortable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Sortable2.default;

/***/ }),
/* 29 */
/***/ (function(module, exports, __nested_webpack_require_55012__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Draggable = __nested_webpack_require_55012__(5);

var _Draggable2 = _interopRequireDefault(_Draggable);

var _SwappableEvent = __nested_webpack_require_55012__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const onDragStart = Symbol('onDragStart');
const onDragOver = Symbol('onDragOver');
const onDragStop = Symbol('onDragStop');

/**
 * Returns an announcement message when the Draggable element is swapped with another draggable element
 * @param {SwappableSwappedEvent} swappableEvent
 * @return {String}
 */
function onSwappableSwappedDefaultAnnouncement({ dragEvent, swappedElement }) {
  const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'swappable element';
  const overText = swappedElement.textContent.trim() || swappedElement.id || 'swappable element';

  return `Swapped ${sourceText} with ${overText}`;
}

/**
 * @const {Object} defaultAnnouncements
 * @const {Function} defaultAnnouncements['swappabled:swapped']
 */
const defaultAnnouncements = {
  'swappabled:swapped': onSwappableSwappedDefaultAnnouncement
};

/**
 * Swappable is built on top of Draggable and allows swapping of draggable elements.
 * Order is irrelevant to Swappable.
 * @class Swappable
 * @module Swappable
 * @extends Draggable
 */
class Swappable extends _Draggable2.default {
  /**
   * Swappable constructor.
   * @constructs Swappable
   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Swappable containers
   * @param {Object} options - Options for Swappable
   */
  constructor(containers = [], options = {}) {
    super(containers, _extends({}, options, {
      announcements: _extends({}, defaultAnnouncements, options.announcements || {})
    }));

    /**
     * Last draggable element that was dragged over
     * @property lastOver
     * @type {HTMLElement}
     */
    this.lastOver = null;

    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragOver] = this[onDragOver].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);

    this.on('drag:start', this[onDragStart]).on('drag:over', this[onDragOver]).on('drag:stop', this[onDragStop]);
  }

  /**
   * Destroys Swappable instance.
   */
  destroy() {
    super.destroy();

    this.off('drag:start', this._onDragStart).off('drag:over', this._onDragOver).off('drag:stop', this._onDragStop);
  }

  /**
   * Drag start handler
   * @private
   * @param {DragStartEvent} event - Drag start event
   */
  [onDragStart](event) {
    const swappableStartEvent = new _SwappableEvent.SwappableStartEvent({
      dragEvent: event
    });

    this.trigger(swappableStartEvent);

    if (swappableStartEvent.canceled()) {
      event.cancel();
    }
  }

  /**
   * Drag over handler
   * @private
   * @param {DragOverEvent} event - Drag over event
   */
  [onDragOver](event) {
    if (event.over === event.originalSource || event.over === event.source || event.canceled()) {
      return;
    }

    const swappableSwapEvent = new _SwappableEvent.SwappableSwapEvent({
      dragEvent: event,
      over: event.over,
      overContainer: event.overContainer
    });

    this.trigger(swappableSwapEvent);

    if (swappableSwapEvent.canceled()) {
      return;
    }

    // swap originally swapped element back
    if (this.lastOver && this.lastOver !== event.over) {
      swap(this.lastOver, event.source);
    }

    if (this.lastOver === event.over) {
      this.lastOver = null;
    } else {
      this.lastOver = event.over;
    }

    swap(event.source, event.over);

    const swappableSwappedEvent = new _SwappableEvent.SwappableSwappedEvent({
      dragEvent: event,
      swappedElement: event.over
    });

    this.trigger(swappableSwappedEvent);
  }

  /**
   * Drag stop handler
   * @private
   * @param {DragStopEvent} event - Drag stop event
   */
  [onDragStop](event) {
    const swappableStopEvent = new _SwappableEvent.SwappableStopEvent({
      dragEvent: event
    });

    this.trigger(swappableStopEvent);
    this.lastOver = null;
  }
}

exports.default = Swappable;
function withTempElement(callback) {
  const tmpElement = document.createElement('div');
  callback(tmpElement);
  tmpElement.parentNode.removeChild(tmpElement);
}

function swap(source, over) {
  const overParent = over.parentNode;
  const sourceParent = source.parentNode;

  withTempElement(tmpElement => {
    sourceParent.insertBefore(tmpElement, source);
    overParent.insertBefore(source, over);
    sourceParent.insertBefore(over, tmpElement);
  });
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __nested_webpack_require_59938__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwappableStopEvent = exports.SwappableSwappedEvent = exports.SwappableSwapEvent = exports.SwappableStartEvent = exports.SwappableEvent = undefined;

var _AbstractEvent = __nested_webpack_require_59938__(0);

var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Base swappable event
 * @class SwappableEvent
 * @module SwappableEvent
 * @extends AbstractEvent
 */
class SwappableEvent extends _AbstractEvent2.default {

  /**
   * Original drag event that triggered this swappable event
   * @property dragEvent
   * @type {DragEvent}
   * @readonly
   */
  get dragEvent() {
    return this.data.dragEvent;
  }
}

exports.SwappableEvent = SwappableEvent; /**
                                          * Swappable start event
                                          * @class SwappableStartEvent
                                          * @module SwappableStartEvent
                                          * @extends SwappableEvent
                                          */

SwappableEvent.type = 'swappable';
class SwappableStartEvent extends SwappableEvent {}

exports.SwappableStartEvent = SwappableStartEvent; /**
                                                    * Swappable swap event
                                                    * @class SwappableSwapEvent
                                                    * @module SwappableSwapEvent
                                                    * @extends SwappableEvent
                                                    */

SwappableStartEvent.type = 'swappable:start';
SwappableStartEvent.cancelable = true;
class SwappableSwapEvent extends SwappableEvent {

  /**
   * Draggable element you are over
   * @property over
   * @type {HTMLElement}
   * @readonly
   */
  get over() {
    return this.data.over;
  }

  /**
   * Draggable container you are over
   * @property overContainer
   * @type {HTMLElement}
   * @readonly
   */
  get overContainer() {
    return this.data.overContainer;
  }
}

exports.SwappableSwapEvent = SwappableSwapEvent; /**
                                                  * Swappable swapped event
                                                  * @class SwappableSwappedEvent
                                                  * @module SwappableSwappedEvent
                                                  * @extends SwappableEvent
                                                  */

SwappableSwapEvent.type = 'swappable:swap';
SwappableSwapEvent.cancelable = true;
class SwappableSwappedEvent extends SwappableEvent {

  /**
   * The draggable element that you swapped with
   * @property swappedElement
   * @type {HTMLElement}
   * @readonly
   */
  get swappedElement() {
    return this.data.swappedElement;
  }
}

exports.SwappableSwappedEvent = SwappableSwappedEvent; /**
                                                        * Swappable stop event
                                                        * @class SwappableStopEvent
                                                        * @module SwappableStopEvent
                                                        * @extends SwappableEvent
                                                        */

SwappableSwappedEvent.type = 'swappable:swapped';
class SwappableStopEvent extends SwappableEvent {}
exports.SwappableStopEvent = SwappableStopEvent;
SwappableStopEvent.type = 'swappable:stop';

/***/ }),
/* 31 */
/***/ (function(module, exports, __nested_webpack_require_63578__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SwappableEvent = __nested_webpack_require_63578__(10);

Object.keys(_SwappableEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SwappableEvent[key];
    }
  });
});

var _Swappable = __nested_webpack_require_63578__(29);

var _Swappable2 = _interopRequireDefault(_Swappable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Swappable2.default;

/***/ }),
/* 32 */
/***/ (function(module, exports, __nested_webpack_require_64267__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __nested_webpack_require_64267__(2);

var _Draggable = __nested_webpack_require_64267__(5);

var _Draggable2 = _interopRequireDefault(_Draggable);

var _DroppableEvent = __nested_webpack_require_64267__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const onDragStart = Symbol('onDragStart');
const onDragMove = Symbol('onDragMove');
const onDragStop = Symbol('onDragStop');
const dropInDropzone = Symbol('dropInDropZone');
const returnToOriginalDropzone = Symbol('returnToOriginalDropzone');
const closestDropzone = Symbol('closestDropzone');
const getDropzones = Symbol('getDropzones');

/**
 * Returns an announcement message when the Draggable element is dropped into a dropzone element
 * @param {DroppableDroppedEvent} droppableEvent
 * @return {String}
 */
function onDroppableDroppedDefaultAnnouncement({ dragEvent, dropzone }) {
  const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'draggable element';
  const dropzoneText = dropzone.textContent.trim() || dropzone.id || 'droppable element';

  return `Dropped ${sourceText} into ${dropzoneText}`;
}

/**
 * Returns an announcement message when the Draggable element has returned to its original dropzone element
 * @param {DroppableReturnedEvent} droppableEvent
 * @return {String}
 */
function onDroppableReturnedDefaultAnnouncement({ dragEvent, dropzone }) {
  const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'draggable element';
  const dropzoneText = dropzone.textContent.trim() || dropzone.id || 'droppable element';

  return `Returned ${sourceText} from ${dropzoneText}`;
}

/**
 * @const {Object} defaultAnnouncements
 * @const {Function} defaultAnnouncements['droppable:dropped']
 * @const {Function} defaultAnnouncements['droppable:returned']
 */
const defaultAnnouncements = {
  'droppable:dropped': onDroppableDroppedDefaultAnnouncement,
  'droppable:returned': onDroppableReturnedDefaultAnnouncement
};

const defaultClasses = {
  'droppable:active': 'draggable-dropzone--active',
  'droppable:occupied': 'draggable-dropzone--occupied'
};

const defaultOptions = {
  dropzone: '.draggable-droppable'
};

/**
 * Droppable is built on top of Draggable and allows dropping draggable elements
 * into dropzone element
 * @class Droppable
 * @module Droppable
 * @extends Draggable
 */
class Droppable extends _Draggable2.default {
  /**
   * Droppable constructor.
   * @constructs Droppable
   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Droppable containers
   * @param {Object} options - Options for Droppable
   */
  constructor(containers = [], options = {}) {
    super(containers, _extends({}, defaultOptions, options, {
      classes: _extends({}, defaultClasses, options.classes || {}),
      announcements: _extends({}, defaultAnnouncements, options.announcements || {})
    }));

    /**
     * All dropzone elements on drag start
     * @property dropzones
     * @type {HTMLElement[]}
     */
    this.dropzones = null;

    /**
     * Last dropzone element that the source was dropped into
     * @property lastDropzone
     * @type {HTMLElement}
     */
    this.lastDropzone = null;

    /**
     * Initial dropzone element that the source was drag from
     * @property initialDropzone
     * @type {HTMLElement}
     */
    this.initialDropzone = null;

    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragMove] = this[onDragMove].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);

    this.on('drag:start', this[onDragStart]).on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]);
  }

  /**
   * Destroys Droppable instance.
   */
  destroy() {
    super.destroy();

    this.off('drag:start', this[onDragStart]).off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]);
  }

  /**
   * Drag start handler
   * @private
   * @param {DragStartEvent} event - Drag start event
   */
  [onDragStart](event) {
    if (event.canceled()) {
      return;
    }

    this.dropzones = [...this[getDropzones]()];
    const dropzone = (0, _utils.closest)(event.sensorEvent.target, this.options.dropzone);

    if (!dropzone) {
      event.cancel();
      return;
    }

    const droppableStartEvent = new _DroppableEvent.DroppableStartEvent({
      dragEvent: event,
      dropzone
    });

    this.trigger(droppableStartEvent);

    if (droppableStartEvent.canceled()) {
      event.cancel();
      return;
    }

    this.initialDropzone = dropzone;

    for (const dropzoneElement of this.dropzones) {
      if (dropzoneElement.classList.contains(this.getClassNameFor('droppable:occupied'))) {
        continue;
      }

      dropzoneElement.classList.add(this.getClassNameFor('droppable:active'));
    }
  }

  /**
   * Drag move handler
   * @private
   * @param {DragMoveEvent} event - Drag move event
   */
  [onDragMove](event) {
    if (event.canceled()) {
      return;
    }

    const dropzone = this[closestDropzone](event.sensorEvent.target);
    const overEmptyDropzone = dropzone && !dropzone.classList.contains(this.getClassNameFor('droppable:occupied'));

    if (overEmptyDropzone && this[dropInDropzone](event, dropzone)) {
      this.lastDropzone = dropzone;
    } else if ((!dropzone || dropzone === this.initialDropzone) && this.lastDropzone) {
      this[returnToOriginalDropzone](event);
      this.lastDropzone = null;
    }
  }

  /**
   * Drag stop handler
   * @private
   * @param {DragStopEvent} event - Drag stop event
   */
  [onDragStop](event) {
    const droppableStopEvent = new _DroppableEvent.DroppableStopEvent({
      dragEvent: event,
      dropzone: this.lastDropzone || this.initialDropzone
    });

    this.trigger(droppableStopEvent);

    const occupiedClass = this.getClassNameFor('droppable:occupied');

    for (const dropzone of this.dropzones) {
      dropzone.classList.remove(this.getClassNameFor('droppable:active'));
    }

    if (this.lastDropzone && this.lastDropzone !== this.initialDropzone) {
      this.initialDropzone.classList.remove(occupiedClass);
    }

    this.dropzones = null;
    this.lastDropzone = null;
    this.initialDropzone = null;
  }

  /**
   * Drops a draggable element into a dropzone element
   * @private
   * @param {DragMoveEvent} event - Drag move event
   * @param {HTMLElement} dropzone - Dropzone element to drop draggable into
   */
  [dropInDropzone](event, dropzone) {
    const droppableDroppedEvent = new _DroppableEvent.DroppableDroppedEvent({
      dragEvent: event,
      dropzone
    });

    this.trigger(droppableDroppedEvent);

    if (droppableDroppedEvent.canceled()) {
      return false;
    }

    const occupiedClass = this.getClassNameFor('droppable:occupied');

    if (this.lastDropzone) {
      this.lastDropzone.classList.remove(occupiedClass);
    }

    dropzone.appendChild(event.source);
    dropzone.classList.add(occupiedClass);

    return true;
  }

  /**
   * Moves the previously dropped element back into its original dropzone
   * @private
   * @param {DragMoveEvent} event - Drag move event
   */
  [returnToOriginalDropzone](event) {
    const droppableReturnedEvent = new _DroppableEvent.DroppableReturnedEvent({
      dragEvent: event,
      dropzone: this.lastDropzone
    });

    this.trigger(droppableReturnedEvent);

    if (droppableReturnedEvent.canceled()) {
      return;
    }

    this.initialDropzone.appendChild(event.source);
    this.lastDropzone.classList.remove(this.getClassNameFor('droppable:occupied'));
  }

  /**
   * Returns closest dropzone element for even target
   * @private
   * @param {HTMLElement} target - Event target
   * @return {HTMLElement|null}
   */
  [closestDropzone](target) {
    if (!this.dropzones) {
      return null;
    }

    return (0, _utils.closest)(target, this.dropzones);
  }

  /**
   * Returns all current dropzone elements for this draggable instance
   * @private
   * @return {NodeList|HTMLElement[]|Array}
   */
  [getDropzones]() {
    const dropzone = this.options.dropzone;

    if (typeof dropzone === 'string') {
      return document.querySelectorAll(dropzone);
    } else if (dropzone instanceof NodeList || dropzone instanceof Array) {
      return dropzone;
    } else if (typeof dropzone === 'function') {
      return dropzone();
    } else {
      return [];
    }
  }
}
exports.default = Droppable;

/***/ }),
/* 33 */
/***/ (function(module, exports, __nested_webpack_require_73039__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DroppableStopEvent = exports.DroppableReturnedEvent = exports.DroppableDroppedEvent = exports.DroppableStartEvent = exports.DroppableEvent = undefined;

var _AbstractEvent = __nested_webpack_require_73039__(0);

var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Base droppable event
 * @class DroppableEvent
 * @module DroppableEvent
 * @extends AbstractEvent
 */
class DroppableEvent extends _AbstractEvent2.default {

  /**
   * Original drag event that triggered this droppable event
   * @property dragEvent
   * @type {DragEvent}
   * @readonly
   */
  get dragEvent() {
    return this.data.dragEvent;
  }
}

exports.DroppableEvent = DroppableEvent; /**
                                          * Droppable start event
                                          * @class DroppableStartEvent
                                          * @module DroppableStartEvent
                                          * @extends DroppableEvent
                                          */

DroppableEvent.type = 'droppable';
class DroppableStartEvent extends DroppableEvent {

  /**
   * The initial dropzone element of the currently dragging draggable element
   * @property dropzone
   * @type {HTMLElement}
   * @readonly
   */
  get dropzone() {
    return this.data.dropzone;
  }
}

exports.DroppableStartEvent = DroppableStartEvent; /**
                                                    * Droppable dropped event
                                                    * @class DroppableDroppedEvent
                                                    * @module DroppableDroppedEvent
                                                    * @extends DroppableEvent
                                                    */

DroppableStartEvent.type = 'droppable:start';
DroppableStartEvent.cancelable = true;
class DroppableDroppedEvent extends DroppableEvent {

  /**
   * The dropzone element you dropped the draggable element into
   * @property dropzone
   * @type {HTMLElement}
   * @readonly
   */
  get dropzone() {
    return this.data.dropzone;
  }
}

exports.DroppableDroppedEvent = DroppableDroppedEvent; /**
                                                        * Droppable returned event
                                                        * @class DroppableReturnedEvent
                                                        * @module DroppableReturnedEvent
                                                        * @extends DroppableEvent
                                                        */

DroppableDroppedEvent.type = 'droppable:dropped';
DroppableDroppedEvent.cancelable = true;
class DroppableReturnedEvent extends DroppableEvent {

  /**
   * The dropzone element you dragged away from
   * @property dropzone
   * @type {HTMLElement}
   * @readonly
   */
  get dropzone() {
    return this.data.dropzone;
  }
}

exports.DroppableReturnedEvent = DroppableReturnedEvent; /**
                                                          * Droppable stop event
                                                          * @class DroppableStopEvent
                                                          * @module DroppableStopEvent
                                                          * @extends DroppableEvent
                                                          */

DroppableReturnedEvent.type = 'droppable:returned';
DroppableReturnedEvent.cancelable = true;
class DroppableStopEvent extends DroppableEvent {

  /**
   * The final dropzone element of the draggable element
   * @property dropzone
   * @type {HTMLElement}
   * @readonly
   */
  get dropzone() {
    return this.data.dropzone;
  }
}
exports.DroppableStopEvent = DroppableStopEvent;
DroppableStopEvent.type = 'droppable:stop';
DroppableStopEvent.cancelable = true;

/***/ }),
/* 34 */
/***/ (function(module, exports, __nested_webpack_require_77075__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DroppableEvent = __nested_webpack_require_77075__(11);

Object.keys(_DroppableEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _DroppableEvent[key];
    }
  });
});

var _Droppable = __nested_webpack_require_77075__(32);

var _Droppable2 = _interopRequireDefault(_Droppable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Droppable2.default;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * The Emitter is a simple emitter class that provides you with `on()`, `off()` and `trigger()` methods
 * @class Emitter
 * @module Emitter
 */
class Emitter {
  constructor() {
    this.callbacks = {};
  }

  /**
   * Registers callbacks by event name
   * @param {String} type
   * @param {...Function} callbacks
   */
  on(type, ...callbacks) {
    if (!this.callbacks[type]) {
      this.callbacks[type] = [];
    }

    this.callbacks[type].push(...callbacks);

    return this;
  }

  /**
   * Unregisters callbacks by event name
   * @param {String} type
   * @param {Function} callback
   */
  off(type, callback) {
    if (!this.callbacks[type]) {
      return null;
    }

    const copy = this.callbacks[type].slice(0);

    for (let i = 0; i < copy.length; i++) {
      if (callback === copy[i]) {
        this.callbacks[type].splice(i, 1);
      }
    }

    return this;
  }

  /**
   * Triggers event callbacks by event object
   * @param {AbstractEvent} event
   */
  trigger(event) {
    if (!this.callbacks[event.type]) {
      return null;
    }

    const callbacks = [...this.callbacks[event.type]];
    const caughtErrors = [];

    for (let i = callbacks.length - 1; i >= 0; i--) {
      const callback = callbacks[i];

      try {
        callback(event);
      } catch (error) {
        caughtErrors.push(error);
      }
    }

    if (caughtErrors.length) {
      /* eslint-disable no-console */
      console.error(`Draggable caught errors while triggering '${event.type}'`, caughtErrors);
      /* eslint-disable no-console */
    }

    return this;
  }
}
exports.default = Emitter;

/***/ }),
/* 36 */
/***/ (function(module, exports, __nested_webpack_require_79539__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Emitter = __nested_webpack_require_79539__(35);

var _Emitter2 = _interopRequireDefault(_Emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Emitter2.default;

/***/ }),
/* 37 */
/***/ (function(module, exports, __nested_webpack_require_79924__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultOptions = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __nested_webpack_require_79924__(2);

var _Plugins = __nested_webpack_require_79924__(12);

var _Emitter = __nested_webpack_require_79924__(36);

var _Emitter2 = _interopRequireDefault(_Emitter);

var _Sensors = __nested_webpack_require_79924__(6);

var _DraggableEvent = __nested_webpack_require_79924__(13);

var _DragEvent = __nested_webpack_require_79924__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const onDragStart = Symbol('onDragStart');
const onDragMove = Symbol('onDragMove');
const onDragStop = Symbol('onDragStop');
const onDragPressure = Symbol('onDragPressure');

/**
 * @const {Object} defaultAnnouncements
 * @const {Function} defaultAnnouncements['drag:start']
 * @const {Function} defaultAnnouncements['drag:stop']
 */
const defaultAnnouncements = {
  'drag:start': event => `Picked up ${event.source.textContent.trim() || event.source.id || 'draggable element'}`,
  'drag:stop': event => `Released ${event.source.textContent.trim() || event.source.id || 'draggable element'}`
};

const defaultClasses = {
  'container:dragging': 'draggable-container--is-dragging',
  'source:dragging': 'draggable-source--is-dragging',
  'source:placed': 'draggable-source--placed',
  'container:placed': 'draggable-container--placed',
  'body:dragging': 'draggable--is-dragging',
  'draggable:over': 'draggable--over',
  'container:over': 'draggable-container--over',
  'source:original': 'draggable--original',
  mirror: 'draggable-mirror'
};

const defaultOptions = exports.defaultOptions = {
  draggable: '.draggable-source',
  handle: null,
  delay: 100,
  placedTimeout: 800,
  plugins: [],
  sensors: []
};

/**
 * This is the core draggable library that does the heavy lifting
 * @class Draggable
 * @module Draggable
 */
class Draggable {

  /**
   * Draggable constructor.
   * @constructs Draggable
   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Draggable containers
   * @param {Object} options - Options for draggable
   */
  constructor(containers = [document.body], options = {}) {
    /**
     * Draggable containers
     * @property containers
     * @type {HTMLElement[]}
     */
    if (containers instanceof NodeList || containers instanceof Array) {
      this.containers = [...containers];
    } else if (containers instanceof HTMLElement) {
      this.containers = [containers];
    } else {
      throw new Error('Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`');
    }

    this.options = _extends({}, defaultOptions, options, {
      classes: _extends({}, defaultClasses, options.classes || {}),
      announcements: _extends({}, defaultAnnouncements, options.announcements || {})
    });

    /**
     * Draggables event emitter
     * @property emitter
     * @type {Emitter}
     */
    this.emitter = new _Emitter2.default();

    /**
     * Current drag state
     * @property dragging
     * @type {Boolean}
     */
    this.dragging = false;

    /**
     * Active plugins
     * @property plugins
     * @type {Plugin[]}
     */
    this.plugins = [];

    /**
     * Active sensors
     * @property sensors
     * @type {Sensor[]}
     */
    this.sensors = [];

    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragMove] = this[onDragMove].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this[onDragPressure] = this[onDragPressure].bind(this);

    document.addEventListener('drag:start', this[onDragStart], true);
    document.addEventListener('drag:move', this[onDragMove], true);
    document.addEventListener('drag:stop', this[onDragStop], true);
    document.addEventListener('drag:pressure', this[onDragPressure], true);

    const defaultPlugins = Object.values(Draggable.Plugins).map(Plugin => Plugin);
    const defaultSensors = [_Sensors.MouseSensor, _Sensors.TouchSensor];

    this.addPlugin(...[...defaultPlugins, ...this.options.plugins]);
    this.addSensor(...[...defaultSensors, ...this.options.sensors]);

    const draggableInitializedEvent = new _DraggableEvent.DraggableInitializedEvent({
      draggable: this
    });

    this.on('mirror:created', ({ mirror }) => this.mirror = mirror);
    this.on('mirror:destroy', () => this.mirror = null);

    this.trigger(draggableInitializedEvent);
  }

  /**
   * Destroys Draggable instance. This removes all internal event listeners and
   * deactivates sensors and plugins
   */

  /**
   * Default plugins draggable uses
   * @static
   * @property {Object} Plugins
   * @property {Announcement} Plugins.Announcement
   * @property {Focusable} Plugins.Focusable
   * @property {Mirror} Plugins.Mirror
   * @property {Scrollable} Plugins.Scrollable
   * @type {Object}
   */
  destroy() {
    document.removeEventListener('drag:start', this[onDragStart], true);
    document.removeEventListener('drag:move', this[onDragMove], true);
    document.removeEventListener('drag:stop', this[onDragStop], true);
    document.removeEventListener('drag:pressure', this[onDragPressure], true);

    const draggableDestroyEvent = new _DraggableEvent.DraggableDestroyEvent({
      draggable: this
    });

    this.trigger(draggableDestroyEvent);

    this.removePlugin(...this.plugins.map(plugin => plugin.constructor));
    this.removeSensor(...this.sensors.map(sensor => sensor.constructor));
  }

  /**
   * Adds plugin to this draggable instance. This will end up calling the attach method of the plugin
   * @param {...typeof Plugin} plugins - Plugins that you want attached to draggable
   * @return {Draggable}
   * @example draggable.addPlugin(CustomA11yPlugin, CustomMirrorPlugin)
   */
  addPlugin(...plugins) {
    const activePlugins = plugins.map(Plugin => new Plugin(this));

    activePlugins.forEach(plugin => plugin.attach());
    this.plugins = [...this.plugins, ...activePlugins];

    return this;
  }

  /**
   * Removes plugins that are already attached to this draggable instance. This will end up calling
   * the detach method of the plugin
   * @param {...typeof Plugin} plugins - Plugins that you want detached from draggable
   * @return {Draggable}
   * @example draggable.removePlugin(MirrorPlugin, CustomMirrorPlugin)
   */
  removePlugin(...plugins) {
    const removedPlugins = this.plugins.filter(plugin => plugins.includes(plugin.constructor));

    removedPlugins.forEach(plugin => plugin.detach());
    this.plugins = this.plugins.filter(plugin => !plugins.includes(plugin.constructor));

    return this;
  }

  /**
   * Adds sensors to this draggable instance. This will end up calling the attach method of the sensor
   * @param {...typeof Sensor} sensors - Sensors that you want attached to draggable
   * @return {Draggable}
   * @example draggable.addSensor(ForceTouchSensor, CustomSensor)
   */
  addSensor(...sensors) {
    const activeSensors = sensors.map(Sensor => new Sensor(this.containers, this.options));

    activeSensors.forEach(sensor => sensor.attach());
    this.sensors = [...this.sensors, ...activeSensors];

    return this;
  }

  /**
   * Removes sensors that are already attached to this draggable instance. This will end up calling
   * the detach method of the sensor
   * @param {...typeof Sensor} sensors - Sensors that you want attached to draggable
   * @return {Draggable}
   * @example draggable.removeSensor(TouchSensor, DragSensor)
   */
  removeSensor(...sensors) {
    const removedSensors = this.sensors.filter(sensor => sensors.includes(sensor.constructor));

    removedSensors.forEach(sensor => sensor.detach());
    this.sensors = this.sensors.filter(sensor => !sensors.includes(sensor.constructor));

    return this;
  }

  /**
   * Adds container to this draggable instance
   * @param {...HTMLElement} containers - Containers you want to add to draggable
   * @return {Draggable}
   * @example draggable.addContainer(document.body)
   */
  addContainer(...containers) {
    this.containers = [...this.containers, ...containers];
    this.sensors.forEach(sensor => sensor.addContainer(...containers));
    return this;
  }

  /**
   * Removes container from this draggable instance
   * @param {...HTMLElement} containers - Containers you want to remove from draggable
   * @return {Draggable}
   * @example draggable.removeContainer(document.body)
   */
  removeContainer(...containers) {
    this.containers = this.containers.filter(container => !containers.includes(container));
    this.sensors.forEach(sensor => sensor.removeContainer(...containers));
    return this;
  }

  /**
   * Adds listener for draggable events
   * @param {String} type - Event name
   * @param {...Function} callbacks - Event callbacks
   * @return {Draggable}
   * @example draggable.on('drag:start', (dragEvent) => dragEvent.cancel());
   */
  on(type, ...callbacks) {
    this.emitter.on(type, ...callbacks);
    return this;
  }

  /**
   * Removes listener from draggable
   * @param {String} type - Event name
   * @param {Function} callback - Event callback
   * @return {Draggable}
   * @example draggable.off('drag:start', handlerFunction);
   */
  off(type, callback) {
    this.emitter.off(type, callback);
    return this;
  }

  /**
   * Triggers draggable event
   * @param {AbstractEvent} event - Event instance
   * @return {Draggable}
   * @example draggable.trigger(event);
   */
  trigger(event) {
    this.emitter.trigger(event);
    return this;
  }

  /**
   * Returns class name for class identifier
   * @param {String} name - Name of class identifier
   * @return {String|null}
   */
  getClassNameFor(name) {
    return this.options.classes[name];
  }

  /**
   * Returns true if this draggable instance is currently dragging
   * @return {Boolean}
   */
  isDragging() {
    return Boolean(this.dragging);
  }

  /**
   * Returns all draggable elements
   * @return {HTMLElement[]}
   */
  getDraggableElements() {
    return this.containers.reduce((current, container) => {
      return [...current, ...this.getDraggableElementsForContainer(container)];
    }, []);
  }

  /**
   * Returns draggable elements for a given container, excluding the mirror and
   * original source element if present
   * @param {HTMLElement} container
   * @return {HTMLElement[]}
   */
  getDraggableElementsForContainer(container) {
    const allDraggableElements = container.querySelectorAll(this.options.draggable);

    return [...allDraggableElements].filter(childElement => {
      return childElement !== this.originalSource && childElement !== this.mirror;
    });
  }

  /**
   * Drag start handler
   * @private
   * @param {Event} event - DOM Drag event
   */
  [onDragStart](event) {
    const sensorEvent = getSensorEvent(event);
    const { target, container } = sensorEvent;

    if (!this.containers.includes(container)) {
      return;
    }

    if (this.options.handle && target && !(0, _utils.closest)(target, this.options.handle)) {
      sensorEvent.cancel();
      return;
    }

    // Find draggable source element
    this.originalSource = (0, _utils.closest)(target, this.options.draggable);
    this.sourceContainer = container;

    if (!this.originalSource) {
      sensorEvent.cancel();
      return;
    }

    if (this.lastPlacedSource && this.lastPlacedContainer) {
      clearTimeout(this.placedTimeoutID);
      this.lastPlacedSource.classList.remove(this.getClassNameFor('source:placed'));
      this.lastPlacedContainer.classList.remove(this.getClassNameFor('container:placed'));
    }

    this.source = this.originalSource.cloneNode(true);
    this.originalSource.parentNode.insertBefore(this.source, this.originalSource);
    this.originalSource.style.display = 'none';

    const dragEvent = new _DragEvent.DragStartEvent({
      source: this.source,
      originalSource: this.originalSource,
      sourceContainer: container,
      sensorEvent
    });

    this.trigger(dragEvent);

    this.dragging = !dragEvent.canceled();

    if (dragEvent.canceled()) {
      this.source.parentNode.removeChild(this.source);
      this.originalSource.style.display = null;
      return;
    }

    this.originalSource.classList.add(this.getClassNameFor('source:original'));
    this.source.classList.add(this.getClassNameFor('source:dragging'));
    this.sourceContainer.classList.add(this.getClassNameFor('container:dragging'));
    document.body.classList.add(this.getClassNameFor('body:dragging'));
    applyUserSelect(document.body, 'none');

    requestAnimationFrame(() => {
      const oldSensorEvent = getSensorEvent(event);
      const newSensorEvent = oldSensorEvent.clone({ target: this.source });

      this[onDragMove](_extends({}, event, {
        detail: newSensorEvent
      }));
    });
  }

  /**
   * Drag move handler
   * @private
   * @param {Event} event - DOM Drag event
   */
  [onDragMove](event) {
    if (!this.dragging) {
      return;
    }

    const sensorEvent = getSensorEvent(event);
    const { container } = sensorEvent;
    let target = sensorEvent.target;

    const dragMoveEvent = new _DragEvent.DragMoveEvent({
      source: this.source,
      originalSource: this.originalSource,
      sourceContainer: container,
      sensorEvent
    });

    this.trigger(dragMoveEvent);

    if (dragMoveEvent.canceled()) {
      sensorEvent.cancel();
    }

    target = (0, _utils.closest)(target, this.options.draggable);
    const withinCorrectContainer = (0, _utils.closest)(sensorEvent.target, this.containers);
    const overContainer = sensorEvent.overContainer || withinCorrectContainer;
    const isLeavingContainer = this.currentOverContainer && overContainer !== this.currentOverContainer;
    const isLeavingDraggable = this.currentOver && target !== this.currentOver;
    const isOverContainer = overContainer && this.currentOverContainer !== overContainer;
    const isOverDraggable = withinCorrectContainer && target && this.currentOver !== target;

    if (isLeavingDraggable) {
      const dragOutEvent = new _DragEvent.DragOutEvent({
        source: this.source,
        originalSource: this.originalSource,
        sourceContainer: container,
        sensorEvent,
        over: this.currentOver
      });

      this.currentOver.classList.remove(this.getClassNameFor('draggable:over'));
      this.currentOver = null;

      this.trigger(dragOutEvent);
    }

    if (isLeavingContainer) {
      const dragOutContainerEvent = new _DragEvent.DragOutContainerEvent({
        source: this.source,
        originalSource: this.originalSource,
        sourceContainer: container,
        sensorEvent,
        overContainer: this.currentOverContainer
      });

      this.currentOverContainer.classList.remove(this.getClassNameFor('container:over'));
      this.currentOverContainer = null;

      this.trigger(dragOutContainerEvent);
    }

    if (isOverContainer) {
      overContainer.classList.add(this.getClassNameFor('container:over'));

      const dragOverContainerEvent = new _DragEvent.DragOverContainerEvent({
        source: this.source,
        originalSource: this.originalSource,
        sourceContainer: container,
        sensorEvent,
        overContainer
      });

      this.currentOverContainer = overContainer;

      this.trigger(dragOverContainerEvent);
    }

    if (isOverDraggable) {
      target.classList.add(this.getClassNameFor('draggable:over'));

      const dragOverEvent = new _DragEvent.DragOverEvent({
        source: this.source,
        originalSource: this.originalSource,
        sourceContainer: container,
        sensorEvent,
        overContainer,
        over: target
      });

      this.currentOver = target;

      this.trigger(dragOverEvent);
    }
  }

  /**
   * Drag stop handler
   * @private
   * @param {Event} event - DOM Drag event
   */
  [onDragStop](event) {
    if (!this.dragging) {
      return;
    }

    this.dragging = false;

    const dragStopEvent = new _DragEvent.DragStopEvent({
      source: this.source,
      originalSource: this.originalSource,
      sensorEvent: event.sensorEvent,
      sourceContainer: this.sourceContainer
    });

    this.trigger(dragStopEvent);

    this.source.parentNode.insertBefore(this.originalSource, this.source);
    this.source.parentNode.removeChild(this.source);
    this.originalSource.style.display = '';

    this.source.classList.remove(this.getClassNameFor('source:dragging'));
    this.originalSource.classList.remove(this.getClassNameFor('source:original'));
    this.originalSource.classList.add(this.getClassNameFor('source:placed'));
    this.sourceContainer.classList.add(this.getClassNameFor('container:placed'));
    this.sourceContainer.classList.remove(this.getClassNameFor('container:dragging'));
    document.body.classList.remove(this.getClassNameFor('body:dragging'));
    applyUserSelect(document.body, '');

    if (this.currentOver) {
      this.currentOver.classList.remove(this.getClassNameFor('draggable:over'));
    }

    if (this.currentOverContainer) {
      this.currentOverContainer.classList.remove(this.getClassNameFor('container:over'));
    }

    this.lastPlacedSource = this.originalSource;
    this.lastPlacedContainer = this.sourceContainer;

    this.placedTimeoutID = setTimeout(() => {
      if (this.lastPlacedSource) {
        this.lastPlacedSource.classList.remove(this.getClassNameFor('source:placed'));
      }

      if (this.lastPlacedContainer) {
        this.lastPlacedContainer.classList.remove(this.getClassNameFor('container:placed'));
      }

      this.lastPlacedSource = null;
      this.lastPlacedContainer = null;
    }, this.options.placedTimeout);

    this.source = null;
    this.originalSource = null;
    this.currentOverContainer = null;
    this.currentOver = null;
    this.sourceContainer = null;
  }

  /**
   * Drag pressure handler
   * @private
   * @param {Event} event - DOM Drag event
   */
  [onDragPressure](event) {
    if (!this.dragging) {
      return;
    }

    const sensorEvent = getSensorEvent(event);
    const source = this.source || (0, _utils.closest)(sensorEvent.originalEvent.target, this.options.draggable);

    const dragPressureEvent = new _DragEvent.DragPressureEvent({
      sensorEvent,
      source,
      pressure: sensorEvent.pressure
    });

    this.trigger(dragPressureEvent);
  }
}

exports.default = Draggable;
Draggable.Plugins = { Announcement: _Plugins.Announcement, Focusable: _Plugins.Focusable, Mirror: _Plugins.Mirror, Scrollable: _Plugins.Scrollable };
function getSensorEvent(event) {
  return event.detail;
}

function applyUserSelect(element, value) {
  element.style.webkitUserSelect = value;
  element.style.mozUserSelect = value;
  element.style.msUserSelect = value;
  element.style.oUserSelect = value;
  element.style.userSelect = value;
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __nested_webpack_require_99003__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Sensor = __nested_webpack_require_99003__(4);

var _Sensor2 = _interopRequireDefault(_Sensor);

var _SensorEvent = __nested_webpack_require_99003__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const onMouseForceWillBegin = Symbol('onMouseForceWillBegin');
const onMouseForceDown = Symbol('onMouseForceDown');
const onMouseDown = Symbol('onMouseDown');
const onMouseForceChange = Symbol('onMouseForceChange');
const onMouseMove = Symbol('onMouseMove');
const onMouseUp = Symbol('onMouseUp');
const onMouseForceGlobalChange = Symbol('onMouseForceGlobalChange');

/**
 * This sensor picks up native force touch events and dictates drag operations
 * @class ForceTouchSensor
 * @module ForceTouchSensor
 * @extends Sensor
 */
class ForceTouchSensor extends _Sensor2.default {
  /**
   * ForceTouchSensor constructor.
   * @constructs ForceTouchSensor
   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
   * @param {Object} options - Options
   */
  constructor(containers = [], options = {}) {
    super(containers, options);

    /**
     * Draggable element needs to be remembered to unset the draggable attribute after drag operation has completed
     * @property mightDrag
     * @type {Boolean}
     */
    this.mightDrag = false;

    this[onMouseForceWillBegin] = this[onMouseForceWillBegin].bind(this);
    this[onMouseForceDown] = this[onMouseForceDown].bind(this);
    this[onMouseDown] = this[onMouseDown].bind(this);
    this[onMouseForceChange] = this[onMouseForceChange].bind(this);
    this[onMouseMove] = this[onMouseMove].bind(this);
    this[onMouseUp] = this[onMouseUp].bind(this);
  }

  /**
   * Attaches sensors event listeners to the DOM
   */
  attach() {
    for (const container of this.containers) {
      container.addEventListener('webkitmouseforcewillbegin', this[onMouseForceWillBegin], false);
      container.addEventListener('webkitmouseforcedown', this[onMouseForceDown], false);
      container.addEventListener('mousedown', this[onMouseDown], true);
      container.addEventListener('webkitmouseforcechanged', this[onMouseForceChange], false);
    }

    document.addEventListener('mousemove', this[onMouseMove]);
    document.addEventListener('mouseup', this[onMouseUp]);
  }

  /**
   * Detaches sensors event listeners to the DOM
   */
  detach() {
    for (const container of this.containers) {
      container.removeEventListener('webkitmouseforcewillbegin', this[onMouseForceWillBegin], false);
      container.removeEventListener('webkitmouseforcedown', this[onMouseForceDown], false);
      container.removeEventListener('mousedown', this[onMouseDown], true);
      container.removeEventListener('webkitmouseforcechanged', this[onMouseForceChange], false);
    }

    document.removeEventListener('mousemove', this[onMouseMove]);
    document.removeEventListener('mouseup', this[onMouseUp]);
  }

  /**
   * Mouse force will begin handler
   * @private
   * @param {Event} event - Mouse force will begin event
   */
  [onMouseForceWillBegin](event) {
    event.preventDefault();
    this.mightDrag = true;
  }

  /**
   * Mouse force down handler
   * @private
   * @param {Event} event - Mouse force down event
   */
  [onMouseForceDown](event) {
    if (this.dragging) {
      return;
    }

    const target = document.elementFromPoint(event.clientX, event.clientY);
    const container = event.currentTarget;

    const dragStartEvent = new _SensorEvent.DragStartSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container,
      originalEvent: event
    });

    this.trigger(container, dragStartEvent);

    this.currentContainer = container;
    this.dragging = !dragStartEvent.canceled();
    this.mightDrag = false;
  }

  /**
   * Mouse up handler
   * @private
   * @param {Event} event - Mouse up event
   */
  [onMouseUp](event) {
    if (!this.dragging) {
      return;
    }

    const dragStopEvent = new _SensorEvent.DragStopSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target: null,
      container: this.currentContainer,
      originalEvent: event
    });

    this.trigger(this.currentContainer, dragStopEvent);

    this.currentContainer = null;
    this.dragging = false;
    this.mightDrag = false;
  }

  /**
   * Mouse down handler
   * @private
   * @param {Event} event - Mouse down event
   */
  [onMouseDown](event) {
    if (!this.mightDrag) {
      return;
    }

    // Need workaround for real click
    // Cancel potential drag events
    event.stopPropagation();
    event.stopImmediatePropagation();
    event.preventDefault();
  }

  /**
   * Mouse move handler
   * @private
   * @param {Event} event - Mouse force will begin event
   */
  [onMouseMove](event) {
    if (!this.dragging) {
      return;
    }

    const target = document.elementFromPoint(event.clientX, event.clientY);

    const dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });

    this.trigger(this.currentContainer, dragMoveEvent);
  }

  /**
   * Mouse force change handler
   * @private
   * @param {Event} event - Mouse force change event
   */
  [onMouseForceChange](event) {
    if (this.dragging) {
      return;
    }

    const target = event.target;
    const container = event.currentTarget;

    const dragPressureEvent = new _SensorEvent.DragPressureSensorEvent({
      pressure: event.webkitForce,
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container,
      originalEvent: event
    });

    this.trigger(container, dragPressureEvent);
  }

  /**
   * Mouse force global change handler
   * @private
   * @param {Event} event - Mouse force global change event
   */
  [onMouseForceGlobalChange](event) {
    if (!this.dragging) {
      return;
    }

    const target = event.target;

    const dragPressureEvent = new _SensorEvent.DragPressureSensorEvent({
      pressure: event.webkitForce,
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });

    this.trigger(this.currentContainer, dragPressureEvent);
  }
}
exports.default = ForceTouchSensor;

/***/ }),
/* 39 */
/***/ (function(module, exports, __nested_webpack_require_105501__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ForceTouchSensor = __nested_webpack_require_105501__(38);

var _ForceTouchSensor2 = _interopRequireDefault(_ForceTouchSensor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ForceTouchSensor2.default;

/***/ }),
/* 40 */
/***/ (function(module, exports, __nested_webpack_require_105922__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __nested_webpack_require_105922__(2);

var _Sensor = __nested_webpack_require_105922__(4);

var _Sensor2 = _interopRequireDefault(_Sensor);

var _SensorEvent = __nested_webpack_require_105922__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const onMouseDown = Symbol('onMouseDown');
const onMouseUp = Symbol('onMouseUp');
const onDragStart = Symbol('onDragStart');
const onDragOver = Symbol('onDragOver');
const onDragEnd = Symbol('onDragEnd');
const onDrop = Symbol('onDrop');
const reset = Symbol('reset');

/**
 * This sensor picks up native browser drag events and dictates drag operations
 * @class DragSensor
 * @module DragSensor
 * @extends Sensor
 */
class DragSensor extends _Sensor2.default {
  /**
   * DragSensor constructor.
   * @constructs DragSensor
   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
   * @param {Object} options - Options
   */
  constructor(containers = [], options = {}) {
    super(containers, options);

    /**
     * Mouse down timer which will end up setting the draggable attribute, unless canceled
     * @property mouseDownTimeout
     * @type {Number}
     */
    this.mouseDownTimeout = null;

    /**
     * Draggable element needs to be remembered to unset the draggable attribute after drag operation has completed
     * @property draggableElement
     * @type {HTMLElement}
     */
    this.draggableElement = null;

    /**
     * Native draggable element could be links or images, their draggable state will be disabled during drag operation
     * @property nativeDraggableElement
     * @type {HTMLElement}
     */
    this.nativeDraggableElement = null;

    this[onMouseDown] = this[onMouseDown].bind(this);
    this[onMouseUp] = this[onMouseUp].bind(this);
    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragOver] = this[onDragOver].bind(this);
    this[onDragEnd] = this[onDragEnd].bind(this);
    this[onDrop] = this[onDrop].bind(this);
  }

  /**
   * Attaches sensors event listeners to the DOM
   */
  attach() {
    document.addEventListener('mousedown', this[onMouseDown], true);
  }

  /**
   * Detaches sensors event listeners to the DOM
   */
  detach() {
    document.removeEventListener('mousedown', this[onMouseDown], true);
  }

  /**
   * Drag start handler
   * @private
   * @param {Event} event - Drag start event
   */
  [onDragStart](event) {
    // Need for firefox. "text" key is needed for IE
    event.dataTransfer.setData('text', '');
    event.dataTransfer.effectAllowed = this.options.type;

    const target = document.elementFromPoint(event.clientX, event.clientY);
    this.currentContainer = (0, _utils.closest)(event.target, this.containers);

    if (!this.currentContainer) {
      return;
    }

    const dragStartEvent = new _SensorEvent.DragStartSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });

    // Workaround
    setTimeout(() => {
      this.trigger(this.currentContainer, dragStartEvent);

      if (dragStartEvent.canceled()) {
        this.dragging = false;
      } else {
        this.dragging = true;
      }
    }, 0);
  }

  /**
   * Drag over handler
   * @private
   * @param {Event} event - Drag over event
   */
  [onDragOver](event) {
    if (!this.dragging) {
      return;
    }

    const target = document.elementFromPoint(event.clientX, event.clientY);
    const container = this.currentContainer;

    const dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container,
      originalEvent: event
    });

    this.trigger(container, dragMoveEvent);

    if (!dragMoveEvent.canceled()) {
      event.preventDefault();
      event.dataTransfer.dropEffect = this.options.type;
    }
  }

  /**
   * Drag end handler
   * @private
   * @param {Event} event - Drag end event
   */
  [onDragEnd](event) {
    if (!this.dragging) {
      return;
    }

    document.removeEventListener('mouseup', this[onMouseUp], true);

    const target = document.elementFromPoint(event.clientX, event.clientY);
    const container = this.currentContainer;

    const dragStopEvent = new _SensorEvent.DragStopSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container,
      originalEvent: event
    });

    this.trigger(container, dragStopEvent);

    this.dragging = false;

    this[reset]();
  }

  /**
   * Drop handler
   * @private
   * @param {Event} event - Drop event
   */
  [onDrop](event) {
    // eslint-disable-line class-methods-use-this
    event.preventDefault();
  }

  /**
   * Mouse down handler
   * @private
   * @param {Event} event - Mouse down event
   */
  [onMouseDown](event) {
    // Firefox bug for inputs within draggables https://bugzilla.mozilla.org/show_bug.cgi?id=739071
    if (event.target && (event.target.form || event.target.contenteditable)) {
      return;
    }

    const nativeDraggableElement = (0, _utils.closest)(event.target, element => element.draggable);

    if (nativeDraggableElement) {
      nativeDraggableElement.draggable = false;
      this.nativeDraggableElement = nativeDraggableElement;
    }

    document.addEventListener('mouseup', this[onMouseUp], true);
    document.addEventListener('dragstart', this[onDragStart], false);
    document.addEventListener('dragover', this[onDragOver], false);
    document.addEventListener('dragend', this[onDragEnd], false);
    document.addEventListener('drop', this[onDrop], false);

    const target = (0, _utils.closest)(event.target, this.options.draggable);

    if (!target) {
      return;
    }

    this.mouseDownTimeout = setTimeout(() => {
      target.draggable = true;
      this.draggableElement = target;
    }, this.options.delay);
  }

  /**
   * Mouse up handler
   * @private
   * @param {Event} event - Mouse up event
   */
  [onMouseUp]() {
    this[reset]();
  }

  /**
   * Mouse up handler
   * @private
   * @param {Event} event - Mouse up event
   */
  [reset]() {
    clearTimeout(this.mouseDownTimeout);

    document.removeEventListener('mouseup', this[onMouseUp], true);
    document.removeEventListener('dragstart', this[onDragStart], false);
    document.removeEventListener('dragover', this[onDragOver], false);
    document.removeEventListener('dragend', this[onDragEnd], false);
    document.removeEventListener('drop', this[onDrop], false);

    if (this.nativeDraggableElement) {
      this.nativeDraggableElement.draggable = true;
      this.nativeDraggableElement = null;
    }

    if (this.draggableElement) {
      this.draggableElement.draggable = false;
      this.draggableElement = null;
    }
  }
}
exports.default = DragSensor;

/***/ }),
/* 41 */
/***/ (function(module, exports, __nested_webpack_require_112871__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DragSensor = __nested_webpack_require_112871__(40);

var _DragSensor2 = _interopRequireDefault(_DragSensor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _DragSensor2.default;

/***/ }),
/* 42 */
/***/ (function(module, exports, __nested_webpack_require_113268__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __nested_webpack_require_113268__(2);

var _Sensor = __nested_webpack_require_113268__(4);

var _Sensor2 = _interopRequireDefault(_Sensor);

var _SensorEvent = __nested_webpack_require_113268__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const onTouchStart = Symbol('onTouchStart');
const onTouchHold = Symbol('onTouchHold');
const onTouchEnd = Symbol('onTouchEnd');
const onTouchMove = Symbol('onTouchMove');

/**
 * Prevents scrolling when set to true
 * @var {Boolean} preventScrolling
 */
let preventScrolling = false;

// WebKit requires cancelable `touchmove` events to be added as early as possible
window.addEventListener('touchmove', event => {
  if (!preventScrolling) {
    return;
  }

  // Prevent scrolling
  event.preventDefault();
}, { passive: false });

/**
 * This sensor picks up native browser touch events and dictates drag operations
 * @class TouchSensor
 * @module TouchSensor
 * @extends Sensor
 */
class TouchSensor extends _Sensor2.default {
  /**
   * TouchSensor constructor.
   * @constructs TouchSensor
   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
   * @param {Object} options - Options
   */
  constructor(containers = [], options = {}) {
    super(containers, options);

    /**
     * Closest scrollable container so accidental scroll can cancel long touch
     * @property currentScrollableParent
     * @type {HTMLElement}
     */
    this.currentScrollableParent = null;

    /**
     * TimeoutID for long touch
     * @property tapTimeout
     * @type {Number}
     */
    this.tapTimeout = null;

    /**
     * touchMoved indicates if touch has moved during tapTimeout
     * @property touchMoved
     * @type {Boolean}
     */
    this.touchMoved = false;

    this[onTouchStart] = this[onTouchStart].bind(this);
    this[onTouchHold] = this[onTouchHold].bind(this);
    this[onTouchEnd] = this[onTouchEnd].bind(this);
    this[onTouchMove] = this[onTouchMove].bind(this);
  }

  /**
   * Attaches sensors event listeners to the DOM
   */
  attach() {
    document.addEventListener('touchstart', this[onTouchStart]);
  }

  /**
   * Detaches sensors event listeners to the DOM
   */
  detach() {
    document.removeEventListener('touchstart', this[onTouchStart]);
  }

  /**
   * Touch start handler
   * @private
   * @param {Event} event - Touch start event
   */
  [onTouchStart](event) {
    const container = (0, _utils.closest)(event.target, this.containers);

    if (!container) {
      return;
    }

    document.addEventListener('touchmove', this[onTouchMove]);
    document.addEventListener('touchend', this[onTouchEnd]);
    document.addEventListener('touchcancel', this[onTouchEnd]);
    container.addEventListener('contextmenu', onContextMenu);

    this.currentContainer = container;
    this.tapTimeout = setTimeout(this[onTouchHold](event, container), this.options.delay);
  }

  /**
   * Touch hold handler
   * @private
   * @param {Event} event - Touch start event
   * @param {HTMLElement} container - Container element
   */
  [onTouchHold](event, container) {
    return () => {
      if (this.touchMoved) {
        return;
      }

      const touch = event.touches[0] || event.changedTouches[0];
      const target = event.target;

      const dragStartEvent = new _SensorEvent.DragStartSensorEvent({
        clientX: touch.pageX,
        clientY: touch.pageY,
        target,
        container,
        originalEvent: event
      });

      this.trigger(container, dragStartEvent);

      this.dragging = !dragStartEvent.canceled();
      preventScrolling = this.dragging;
    };
  }

  /**
   * Touch move handler
   * @private
   * @param {Event} event - Touch move event
   */
  [onTouchMove](event) {
    this.touchMoved = true;

    if (!this.dragging) {
      return;
    }

    const touch = event.touches[0] || event.changedTouches[0];
    const target = document.elementFromPoint(touch.pageX - window.scrollX, touch.pageY - window.scrollY);

    const dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
      clientX: touch.pageX,
      clientY: touch.pageY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });

    this.trigger(this.currentContainer, dragMoveEvent);
  }

  /**
   * Touch end handler
   * @private
   * @param {Event} event - Touch end event
   */
  [onTouchEnd](event) {
    this.touchMoved = false;
    preventScrolling = false;

    document.removeEventListener('touchend', this[onTouchEnd]);
    document.removeEventListener('touchcancel', this[onTouchEnd]);
    document.removeEventListener('touchmove', this[onTouchMove]);

    if (this.currentContainer) {
      this.currentContainer.removeEventListener('contextmenu', onContextMenu);
    }

    clearTimeout(this.tapTimeout);

    if (!this.dragging) {
      return;
    }

    const touch = event.touches[0] || event.changedTouches[0];
    const target = document.elementFromPoint(touch.pageX - window.scrollX, touch.pageY - window.scrollY);

    event.preventDefault();

    const dragStopEvent = new _SensorEvent.DragStopSensorEvent({
      clientX: touch.pageX,
      clientY: touch.pageY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });

    this.trigger(this.currentContainer, dragStopEvent);

    this.currentContainer = null;
    this.dragging = false;
  }
}

exports.default = TouchSensor;
function onContextMenu(event) {
  event.preventDefault();
  event.stopPropagation();
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __nested_webpack_require_118906__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TouchSensor = __nested_webpack_require_118906__(42);

var _TouchSensor2 = _interopRequireDefault(_TouchSensor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TouchSensor2.default;

/***/ }),
/* 44 */
/***/ (function(module, exports, __nested_webpack_require_119307__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DragPressureSensorEvent = exports.DragStopSensorEvent = exports.DragMoveSensorEvent = exports.DragStartSensorEvent = exports.SensorEvent = undefined;

var _AbstractEvent = __nested_webpack_require_119307__(0);

var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Base sensor event
 * @class SensorEvent
 * @module SensorEvent
 * @extends AbstractEvent
 */
class SensorEvent extends _AbstractEvent2.default {
  /**
   * Original browser event that triggered a sensor
   * @property originalEvent
   * @type {Event}
   * @readonly
   */
  get originalEvent() {
    return this.data.originalEvent;
  }

  /**
   * Normalized clientX for both touch and mouse events
   * @property clientX
   * @type {Number}
   * @readonly
   */
  get clientX() {
    return this.data.clientX;
  }

  /**
   * Normalized clientY for both touch and mouse events
   * @property clientY
   * @type {Number}
   * @readonly
   */
  get clientY() {
    return this.data.clientY;
  }

  /**
   * Normalized target for both touch and mouse events
   * Returns the element that is behind cursor or touch pointer
   * @property target
   * @type {HTMLElement}
   * @readonly
   */
  get target() {
    return this.data.target;
  }

  /**
   * Container that initiated the sensor
   * @property container
   * @type {HTMLElement}
   * @readonly
   */
  get container() {
    return this.data.container;
  }

  /**
   * Trackpad pressure
   * @property pressure
   * @type {Number}
   * @readonly
   */
  get pressure() {
    return this.data.pressure;
  }
}

exports.SensorEvent = SensorEvent; /**
                                    * Drag start sensor event
                                    * @class DragStartSensorEvent
                                    * @module DragStartSensorEvent
                                    * @extends SensorEvent
                                    */

class DragStartSensorEvent extends SensorEvent {}

exports.DragStartSensorEvent = DragStartSensorEvent; /**
                                                      * Drag move sensor event
                                                      * @class DragMoveSensorEvent
                                                      * @module DragMoveSensorEvent
                                                      * @extends SensorEvent
                                                      */

DragStartSensorEvent.type = 'drag:start';
class DragMoveSensorEvent extends SensorEvent {}

exports.DragMoveSensorEvent = DragMoveSensorEvent; /**
                                                    * Drag stop sensor event
                                                    * @class DragStopSensorEvent
                                                    * @module DragStopSensorEvent
                                                    * @extends SensorEvent
                                                    */

DragMoveSensorEvent.type = 'drag:move';
class DragStopSensorEvent extends SensorEvent {}

exports.DragStopSensorEvent = DragStopSensorEvent; /**
                                                    * Drag pressure sensor event
                                                    * @class DragPressureSensorEvent
                                                    * @module DragPressureSensorEvent
                                                    * @extends SensorEvent
                                                    */

DragStopSensorEvent.type = 'drag:stop';
class DragPressureSensorEvent extends SensorEvent {}
exports.DragPressureSensorEvent = DragPressureSensorEvent;
DragPressureSensorEvent.type = 'drag:pressure';

/***/ }),
/* 45 */
/***/ (function(module, exports, __nested_webpack_require_123170__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __nested_webpack_require_123170__(2);

var _Sensor = __nested_webpack_require_123170__(4);

var _Sensor2 = _interopRequireDefault(_Sensor);

var _SensorEvent = __nested_webpack_require_123170__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const onContextMenuWhileDragging = Symbol('onContextMenuWhileDragging');
const onMouseDown = Symbol('onMouseDown');
const onMouseMove = Symbol('onMouseMove');
const onMouseUp = Symbol('onMouseUp');

/**
 * This sensor picks up native browser mouse events and dictates drag operations
 * @class MouseSensor
 * @module MouseSensor
 * @extends Sensor
 */
class MouseSensor extends _Sensor2.default {
  /**
   * MouseSensor constructor.
   * @constructs MouseSensor
   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
   * @param {Object} options - Options
   */
  constructor(containers = [], options = {}) {
    super(containers, options);

    /**
     * Indicates if mouse button is still down
     * @property mouseDown
     * @type {Boolean}
     */
    this.mouseDown = false;

    /**
     * Mouse down timer which will end up triggering the drag start operation
     * @property mouseDownTimeout
     * @type {Number}
     */
    this.mouseDownTimeout = null;

    /**
     * Indicates if context menu has been opened during drag operation
     * @property openedContextMenu
     * @type {Boolean}
     */
    this.openedContextMenu = false;

    this[onContextMenuWhileDragging] = this[onContextMenuWhileDragging].bind(this);
    this[onMouseDown] = this[onMouseDown].bind(this);
    this[onMouseMove] = this[onMouseMove].bind(this);
    this[onMouseUp] = this[onMouseUp].bind(this);
  }

  /**
   * Attaches sensors event listeners to the DOM
   */
  attach() {
    document.addEventListener('mousedown', this[onMouseDown], true);
  }

  /**
   * Detaches sensors event listeners to the DOM
   */
  detach() {
    document.removeEventListener('mousedown', this[onMouseDown], true);
  }

  /**
   * Mouse down handler
   * @private
   * @param {Event} event - Mouse down event
   */
  [onMouseDown](event) {
    if (event.button !== 0 || event.ctrlKey || event.metaKey) {
      return;
    }

    document.addEventListener('mouseup', this[onMouseUp]);

    const target = document.elementFromPoint(event.clientX, event.clientY);
    const container = (0, _utils.closest)(target, this.containers);

    if (!container) {
      return;
    }

    document.addEventListener('dragstart', preventNativeDragStart);

    this.mouseDown = true;

    clearTimeout(this.mouseDownTimeout);
    this.mouseDownTimeout = setTimeout(() => {
      if (!this.mouseDown) {
        return;
      }

      const dragStartEvent = new _SensorEvent.DragStartSensorEvent({
        clientX: event.clientX,
        clientY: event.clientY,
        target,
        container,
        originalEvent: event
      });

      this.trigger(container, dragStartEvent);

      this.currentContainer = container;
      this.dragging = !dragStartEvent.canceled();

      if (this.dragging) {
        document.addEventListener('contextmenu', this[onContextMenuWhileDragging]);
        document.addEventListener('mousemove', this[onMouseMove]);
      }
    }, this.options.delay);
  }

  /**
   * Mouse move handler
   * @private
   * @param {Event} event - Mouse move event
   */
  [onMouseMove](event) {
    if (!this.dragging) {
      return;
    }

    const target = document.elementFromPoint(event.clientX, event.clientY);

    const dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });

    this.trigger(this.currentContainer, dragMoveEvent);
  }

  /**
   * Mouse up handler
   * @private
   * @param {Event} event - Mouse up event
   */
  [onMouseUp](event) {
    this.mouseDown = Boolean(this.openedContextMenu);

    if (this.openedContextMenu) {
      this.openedContextMenu = false;
      return;
    }

    document.removeEventListener('mouseup', this[onMouseUp]);
    document.removeEventListener('dragstart', preventNativeDragStart);

    if (!this.dragging) {
      return;
    }

    const target = document.elementFromPoint(event.clientX, event.clientY);

    const dragStopEvent = new _SensorEvent.DragStopSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });

    this.trigger(this.currentContainer, dragStopEvent);

    document.removeEventListener('contextmenu', this[onContextMenuWhileDragging]);
    document.removeEventListener('mousemove', this[onMouseMove]);

    this.currentContainer = null;
    this.dragging = false;
  }

  /**
   * Context menu handler
   * @private
   * @param {Event} event - Context menu event
   */
  [onContextMenuWhileDragging](event) {
    event.preventDefault();
    this.openedContextMenu = true;
  }
}

exports.default = MouseSensor;
function preventNativeDragStart(event) {
  event.preventDefault();
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __nested_webpack_require_128407__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MouseSensor = __nested_webpack_require_128407__(45);

var _MouseSensor2 = _interopRequireDefault(_MouseSensor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _MouseSensor2.default;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Base sensor class. Extend from this class to create a new or custom sensor
 * @class Sensor
 * @module Sensor
 */
class Sensor {
  /**
   * Sensor constructor.
   * @constructs Sensor
   * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
   * @param {Object} options - Options
   */
  constructor(containers = [], options = {}) {
    /**
     * Current containers
     * @property containers
     * @type {HTMLElement[]}
     */
    this.containers = [...containers];

    /**
     * Current options
     * @property options
     * @type {Object}
     */
    this.options = _extends({}, options);

    /**
     * Current drag state
     * @property dragging
     * @type {Boolean}
     */
    this.dragging = false;

    /**
     * Current container
     * @property currentContainer
     * @type {HTMLElement}
     */
    this.currentContainer = null;
  }

  /**
   * Attaches sensors event listeners to the DOM
   * @return {Sensor}
   */
  attach() {
    return this;
  }

  /**
   * Detaches sensors event listeners to the DOM
   * @return {Sensor}
   */
  detach() {
    return this;
  }

  /**
   * Adds container to this sensor instance
   * @param {...HTMLElement} containers - Containers you want to add to this sensor
   * @example draggable.addContainer(document.body)
   */
  addContainer(...containers) {
    this.containers = [...this.containers, ...containers];
  }

  /**
   * Removes container from this sensor instance
   * @param {...HTMLElement} containers - Containers you want to remove from this sensor
   * @example draggable.removeContainer(document.body)
   */
  removeContainer(...containers) {
    this.containers = this.containers.filter(container => !containers.includes(container));
  }

  /**
   * Triggers event on target element
   * @param {HTMLElement} element - Element to trigger event on
   * @param {SensorEvent} sensorEvent - Sensor event to trigger
   */
  trigger(element, sensorEvent) {
    const event = document.createEvent('Event');
    event.detail = sensorEvent;
    event.initEvent(sensorEvent.type, true, true);
    element.dispatchEvent(event);
    this.lastEvent = sensorEvent;

    return sensorEvent;
  }
}
exports.default = Sensor;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = requestNextAnimationFrame;
function requestNextAnimationFrame(callback) {
  return requestAnimationFrame(() => {
    requestAnimationFrame(callback);
  });
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __nested_webpack_require_131774__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _requestNextAnimationFrame = __nested_webpack_require_131774__(48);

var _requestNextAnimationFrame2 = _interopRequireDefault(_requestNextAnimationFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _requestNextAnimationFrame2.default;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = closest;
const matchFunction = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;

/**
 * Get the closest parent element of a given element that matches the given
 * selector string or matching function
 *
 * @param {Element} element The child element to find a parent of
 * @param {String|Function} selector The string or function to use to match
 *     the parent element
 * @return {Element|null}
 */
function closest(element, value) {
  if (!element) {
    return null;
  }

  const selector = value;
  const callback = value;
  const nodeList = value;
  const singleElement = value;

  const isSelector = Boolean(typeof value === 'string');
  const isFunction = Boolean(typeof value === 'function');
  const isNodeList = Boolean(value instanceof NodeList || value instanceof Array);
  const isElement = Boolean(value instanceof HTMLElement);

  function conditionFn(currentElement) {
    if (!currentElement) {
      return currentElement;
    } else if (isSelector) {
      return matchFunction.call(currentElement, selector);
    } else if (isNodeList) {
      return [...nodeList].includes(currentElement);
    } else if (isElement) {
      return singleElement === currentElement;
    } else if (isFunction) {
      return callback(currentElement);
    } else {
      return null;
    }
  }

  let current = element;

  do {
    current = current.correspondingUseElement || current.correspondingElement || current;

    if (conditionFn(current)) {
      return current;
    }

    current = current.parentNode;
  } while (current && current !== document.body && current !== document);

  return null;
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __nested_webpack_require_134117__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _closest = __nested_webpack_require_134117__(50);

var _closest2 = _interopRequireDefault(_closest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _closest2.default;

/***/ }),
/* 52 */
/***/ (function(module, exports, __nested_webpack_require_134502__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultOptions = exports.scroll = exports.onDragStop = exports.onDragMove = exports.onDragStart = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _AbstractPlugin = __nested_webpack_require_134502__(1);

var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

var _utils = __nested_webpack_require_134502__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const onDragStart = exports.onDragStart = Symbol('onDragStart');
const onDragMove = exports.onDragMove = Symbol('onDragMove');
const onDragStop = exports.onDragStop = Symbol('onDragStop');
const scroll = exports.scroll = Symbol('scroll');

/**
 * Scrollable default options
 * @property {Object} defaultOptions
 * @property {Number} defaultOptions.speed
 * @property {Number} defaultOptions.sensitivity
 * @property {HTMLElement[]} defaultOptions.scrollableElements
 * @type {Object}
 */
const defaultOptions = exports.defaultOptions = {
  speed: 6,
  sensitivity: 50,
  scrollableElements: []
};

/**
 * Scrollable plugin which scrolls the closest scrollable parent
 * @class Scrollable
 * @module Scrollable
 * @extends AbstractPlugin
 */
class Scrollable extends _AbstractPlugin2.default {
  /**
   * Scrollable constructor.
   * @constructs Scrollable
   * @param {Draggable} draggable - Draggable instance
   */
  constructor(draggable) {
    super(draggable);

    /**
     * Scrollable options
     * @property {Object} options
     * @property {Number} options.speed
     * @property {Number} options.sensitivity
     * @property {HTMLElement[]} options.scrollableElements
     * @type {Object}
     */
    this.options = _extends({}, defaultOptions, this.getOptions());

    /**
     * Keeps current mouse position
     * @property {Object} currentMousePosition
     * @property {Number} currentMousePosition.clientX
     * @property {Number} currentMousePosition.clientY
     * @type {Object|null}
     */
    this.currentMousePosition = null;

    /**
     * Scroll animation frame
     * @property scrollAnimationFrame
     * @type {Number|null}
     */
    this.scrollAnimationFrame = null;

    /**
     * Closest scrollable element
     * @property scrollableElement
     * @type {HTMLElement|null}
     */
    this.scrollableElement = null;

    /**
     * Animation frame looking for the closest scrollable element
     * @property findScrollableElementFrame
     * @type {Number|null}
     */
    this.findScrollableElementFrame = null;

    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragMove] = this[onDragMove].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this[scroll] = this[scroll].bind(this);
  }

  /**
   * Attaches plugins event listeners
   */
  attach() {
    this.draggable.on('drag:start', this[onDragStart]).on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]);
  }

  /**
   * Detaches plugins event listeners
   */
  detach() {
    this.draggable.off('drag:start', this[onDragStart]).off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]);
  }

  /**
   * Returns options passed through draggable
   * @return {Object}
   */
  getOptions() {
    return this.draggable.options.scrollable || {};
  }

  /**
   * Returns closest scrollable elements by element
   * @param {HTMLElement} target
   * @return {HTMLElement}
   */
  getScrollableElement(target) {
    if (this.hasDefinedScrollableElements()) {
      return (0, _utils.closest)(target, this.options.scrollableElements) || document.documentElement;
    } else {
      return closestScrollableElement(target);
    }
  }

  /**
   * Returns true if at least one scrollable element have been defined via options
   * @param {HTMLElement} target
   * @return {Boolean}
   */
  hasDefinedScrollableElements() {
    return Boolean(this.options.scrollableElements.length !== 0);
  }

  /**
   * Drag start handler. Finds closest scrollable parent in separate frame
   * @param {DragStartEvent} dragEvent
   * @private
   */
  [onDragStart](dragEvent) {
    this.findScrollableElementFrame = requestAnimationFrame(() => {
      this.scrollableElement = this.getScrollableElement(dragEvent.source);
    });
  }

  /**
   * Drag move handler. Remembers mouse position and initiates scrolling
   * @param {DragMoveEvent} dragEvent
   * @private
   */
  [onDragMove](dragEvent) {
    this.findScrollableElementFrame = requestAnimationFrame(() => {
      this.scrollableElement = this.getScrollableElement(dragEvent.sensorEvent.target);
    });

    if (!this.scrollableElement) {
      return;
    }

    const sensorEvent = dragEvent.sensorEvent;
    const scrollOffset = { x: 0, y: 0 };

    if ('ontouchstart' in window) {
      scrollOffset.y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      scrollOffset.x = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    }

    this.currentMousePosition = {
      clientX: sensorEvent.clientX - scrollOffset.x,
      clientY: sensorEvent.clientY - scrollOffset.y
    };

    this.scrollAnimationFrame = requestAnimationFrame(this[scroll]);
  }

  /**
   * Drag stop handler. Cancels scroll animations and resets state
   * @private
   */
  [onDragStop]() {
    cancelAnimationFrame(this.scrollAnimationFrame);
    cancelAnimationFrame(this.findScrollableElementFrame);

    this.scrollableElement = null;
    this.scrollAnimationFrame = null;
    this.findScrollableElementFrame = null;
    this.currentMousePosition = null;
  }

  /**
   * Scroll function that does the heavylifting
   * @private
   */
  [scroll]() {
    if (!this.scrollableElement || !this.currentMousePosition) {
      return;
    }

    cancelAnimationFrame(this.scrollAnimationFrame);

    const { speed, sensitivity } = this.options;

    const rect = this.scrollableElement.getBoundingClientRect();
    const bottomCutOff = rect.bottom > window.innerHeight;
    const topCutOff = rect.top < 0;
    const cutOff = topCutOff || bottomCutOff;

    const documentScrollingElement = getDocumentScrollingElement();
    const scrollableElement = this.scrollableElement;
    const clientX = this.currentMousePosition.clientX;
    const clientY = this.currentMousePosition.clientY;

    if (scrollableElement !== document.body && scrollableElement !== document.documentElement && !cutOff) {
      const { offsetHeight, offsetWidth } = scrollableElement;

      if (rect.top + offsetHeight - clientY < sensitivity) {
        scrollableElement.scrollTop += speed;
      } else if (clientY - rect.top < sensitivity) {
        scrollableElement.scrollTop -= speed;
      }

      if (rect.left + offsetWidth - clientX < sensitivity) {
        scrollableElement.scrollLeft += speed;
      } else if (clientX - rect.left < sensitivity) {
        scrollableElement.scrollLeft -= speed;
      }
    } else {
      const { innerHeight, innerWidth } = window;

      if (clientY < sensitivity) {
        documentScrollingElement.scrollTop -= speed;
      } else if (innerHeight - clientY < sensitivity) {
        documentScrollingElement.scrollTop += speed;
      }

      if (clientX < sensitivity) {
        documentScrollingElement.scrollLeft -= speed;
      } else if (innerWidth - clientX < sensitivity) {
        documentScrollingElement.scrollLeft += speed;
      }
    }

    this.scrollAnimationFrame = requestAnimationFrame(this[scroll]);
  }
}

exports.default = Scrollable; /**
                               * Returns true if the passed element has overflow
                               * @param {HTMLElement} element
                               * @return {Boolean}
                               * @private
                               */

function hasOverflow(element) {
  const overflowRegex = /(auto|scroll)/;
  const computedStyles = getComputedStyle(element, null);

  const overflow = computedStyles.getPropertyValue('overflow') + computedStyles.getPropertyValue('overflow-y') + computedStyles.getPropertyValue('overflow-x');

  return overflowRegex.test(overflow);
}

/**
 * Returns true if the passed element is statically positioned
 * @param {HTMLElement} element
 * @return {Boolean}
 * @private
 */
function isStaticallyPositioned(element) {
  const position = getComputedStyle(element).getPropertyValue('position');
  return position === 'static';
}

/**
 * Finds closest scrollable element
 * @param {HTMLElement} element
 * @return {HTMLElement}
 * @private
 */
function closestScrollableElement(element) {
  if (!element) {
    return getDocumentScrollingElement();
  }

  const position = getComputedStyle(element).getPropertyValue('position');
  const excludeStaticParents = position === 'absolute';

  const scrollableElement = (0, _utils.closest)(element, parent => {
    if (excludeStaticParents && isStaticallyPositioned(parent)) {
      return false;
    }
    return hasOverflow(parent);
  });

  if (position === 'fixed' || !scrollableElement) {
    return getDocumentScrollingElement();
  } else {
    return scrollableElement;
  }
}

/**
 * Returns element that scrolls document
 * @return {HTMLElement}
 * @private
 */
function getDocumentScrollingElement() {
  return document.scrollingElement || document.documentElement;
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __nested_webpack_require_144102__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultOptions = undefined;

var _Scrollable = __nested_webpack_require_144102__(52);

var _Scrollable2 = _interopRequireDefault(_Scrollable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Scrollable2.default;
exports.defaultOptions = _Scrollable.defaultOptions;

/***/ }),
/* 54 */
/***/ (function(module, exports, __nested_webpack_require_144588__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MirrorDestroyEvent = exports.MirrorMoveEvent = exports.MirrorAttachedEvent = exports.MirrorCreatedEvent = exports.MirrorCreateEvent = exports.MirrorEvent = undefined;

var _AbstractEvent = __nested_webpack_require_144588__(0);

var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Base mirror event
 * @class MirrorEvent
 * @module MirrorEvent
 * @extends AbstractEvent
 */
class MirrorEvent extends _AbstractEvent2.default {
  /**
   * Draggables source element
   * @property source
   * @type {HTMLElement}
   * @readonly
   */
  get source() {
    return this.data.source;
  }

  /**
   * Draggables original source element
   * @property originalSource
   * @type {HTMLElement}
   * @readonly
   */
  get originalSource() {
    return this.data.originalSource;
  }

  /**
   * Draggables source container element
   * @property sourceContainer
   * @type {HTMLElement}
   * @readonly
   */
  get sourceContainer() {
    return this.data.sourceContainer;
  }

  /**
   * Sensor event
   * @property sensorEvent
   * @type {SensorEvent}
   * @readonly
   */
  get sensorEvent() {
    return this.data.sensorEvent;
  }

  /**
   * Drag event
   * @property dragEvent
   * @type {DragEvent}
   * @readonly
   */
  get dragEvent() {
    return this.data.dragEvent;
  }

  /**
   * Original event that triggered sensor event
   * @property originalEvent
   * @type {Event}
   * @readonly
   */
  get originalEvent() {
    if (this.sensorEvent) {
      return this.sensorEvent.originalEvent;
    }

    return null;
  }
}

exports.MirrorEvent = MirrorEvent; /**
                                    * Mirror create event
                                    * @class MirrorCreateEvent
                                    * @module MirrorCreateEvent
                                    * @extends MirrorEvent
                                    */

class MirrorCreateEvent extends MirrorEvent {}

exports.MirrorCreateEvent = MirrorCreateEvent; /**
                                                * Mirror created event
                                                * @class MirrorCreatedEvent
                                                * @module MirrorCreatedEvent
                                                * @extends MirrorEvent
                                                */

MirrorCreateEvent.type = 'mirror:create';
class MirrorCreatedEvent extends MirrorEvent {

  /**
   * Draggables mirror element
   * @property mirror
   * @type {HTMLElement}
   * @readonly
   */
  get mirror() {
    return this.data.mirror;
  }
}

exports.MirrorCreatedEvent = MirrorCreatedEvent; /**
                                                  * Mirror attached event
                                                  * @class MirrorAttachedEvent
                                                  * @module MirrorAttachedEvent
                                                  * @extends MirrorEvent
                                                  */

MirrorCreatedEvent.type = 'mirror:created';
class MirrorAttachedEvent extends MirrorEvent {

  /**
   * Draggables mirror element
   * @property mirror
   * @type {HTMLElement}
   * @readonly
   */
  get mirror() {
    return this.data.mirror;
  }
}

exports.MirrorAttachedEvent = MirrorAttachedEvent; /**
                                                    * Mirror move event
                                                    * @class MirrorMoveEvent
                                                    * @module MirrorMoveEvent
                                                    * @extends MirrorEvent
                                                    */

MirrorAttachedEvent.type = 'mirror:attached';
class MirrorMoveEvent extends MirrorEvent {

  /**
   * Draggables mirror element
   * @property mirror
   * @type {HTMLElement}
   * @readonly
   */
  get mirror() {
    return this.data.mirror;
  }
}

exports.MirrorMoveEvent = MirrorMoveEvent; /**
                                            * Mirror destroy event
                                            * @class MirrorDestroyEvent
                                            * @module MirrorDestroyEvent
                                            * @extends MirrorEvent
                                            */

MirrorMoveEvent.type = 'mirror:move';
MirrorMoveEvent.cancelable = true;
class MirrorDestroyEvent extends MirrorEvent {

  /**
   * Draggables mirror element
   * @property mirror
   * @type {HTMLElement}
   * @readonly
   */
  get mirror() {
    return this.data.mirror;
  }
}
exports.MirrorDestroyEvent = MirrorDestroyEvent;
MirrorDestroyEvent.type = 'mirror:destroy';
MirrorDestroyEvent.cancelable = true;

/***/ }),
/* 55 */
/***/ (function(module, exports, __nested_webpack_require_149501__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MirrorEvent = __nested_webpack_require_149501__(54);

Object.keys(_MirrorEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _MirrorEvent[key];
    }
  });
});

/***/ }),
/* 56 */
/***/ (function(module, exports, __nested_webpack_require_149946__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultOptions = exports.getAppendableContainer = exports.onScroll = exports.onMirrorMove = exports.onMirrorCreated = exports.onDragStop = exports.onDragMove = exports.onDragStart = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _AbstractPlugin = __nested_webpack_require_149946__(1);

var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

var _MirrorEvent = __nested_webpack_require_149946__(55);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

const onDragStart = exports.onDragStart = Symbol('onDragStart');
const onDragMove = exports.onDragMove = Symbol('onDragMove');
const onDragStop = exports.onDragStop = Symbol('onDragStop');
const onMirrorCreated = exports.onMirrorCreated = Symbol('onMirrorCreated');
const onMirrorMove = exports.onMirrorMove = Symbol('onMirrorMove');
const onScroll = exports.onScroll = Symbol('onScroll');
const getAppendableContainer = exports.getAppendableContainer = Symbol('getAppendableContainer');

/**
 * Mirror default options
 * @property {Object} defaultOptions
 * @property {Boolean} defaultOptions.constrainDimensions
 * @property {Boolean} defaultOptions.xAxis
 * @property {Boolean} defaultOptions.yAxis
 * @property {null} defaultOptions.cursorOffsetX
 * @property {null} defaultOptions.cursorOffsetY
 * @type {Object}
 */
const defaultOptions = exports.defaultOptions = {
  constrainDimensions: false,
  xAxis: true,
  yAxis: true,
  cursorOffsetX: null,
  cursorOffsetY: null
};

/**
 * Mirror plugin which controls the mirror positioning while dragging
 * @class Mirror
 * @module Mirror
 * @extends AbstractPlugin
 */
class Mirror extends _AbstractPlugin2.default {
  /**
   * Mirror constructor.
   * @constructs Mirror
   * @param {Draggable} draggable - Draggable instance
   */
  constructor(draggable) {
    super(draggable);

    /**
     * Mirror options
     * @property {Object} options
     * @property {Boolean} options.constrainDimensions
     * @property {Boolean} options.xAxis
     * @property {Boolean} options.yAxis
     * @property {Number|null} options.cursorOffsetX
     * @property {Number|null} options.cursorOffsetY
     * @property {String|HTMLElement|Function} options.appendTo
     * @type {Object}
     */
    this.options = _extends({}, defaultOptions, this.getOptions());

    /**
     * Scroll offset for touch devices because the mirror is positioned fixed
     * @property {Object} scrollOffset
     * @property {Number} scrollOffset.x
     * @property {Number} scrollOffset.y
     */
    this.scrollOffset = { x: 0, y: 0 };

    /**
     * Initial scroll offset for touch devices because the mirror is positioned fixed
     * @property {Object} scrollOffset
     * @property {Number} scrollOffset.x
     * @property {Number} scrollOffset.y
     */
    this.initialScrollOffset = {
      x: window.scrollX,
      y: window.scrollY
    };

    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragMove] = this[onDragMove].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this[onMirrorCreated] = this[onMirrorCreated].bind(this);
    this[onMirrorMove] = this[onMirrorMove].bind(this);
    this[onScroll] = this[onScroll].bind(this);
  }

  /**
   * Attaches plugins event listeners
   */
  attach() {
    this.draggable.on('drag:start', this[onDragStart]).on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]).on('mirror:created', this[onMirrorCreated]).on('mirror:move', this[onMirrorMove]);
  }

  /**
   * Detaches plugins event listeners
   */
  detach() {
    this.draggable.off('drag:start', this[onDragStart]).off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]).off('mirror:created', this[onMirrorCreated]).off('mirror:move', this[onMirrorMove]);
  }

  /**
   * Returns options passed through draggable
   * @return {Object}
   */
  getOptions() {
    return this.draggable.options.mirror || {};
  }

  [onDragStart](dragEvent) {
    if (dragEvent.canceled()) {
      return;
    }

    if ('ontouchstart' in window) {
      document.addEventListener('scroll', this[onScroll], true);
    }

    this.initialScrollOffset = {
      x: window.scrollX,
      y: window.scrollY
    };

    const { source, originalSource, sourceContainer, sensorEvent } = dragEvent;

    const mirrorCreateEvent = new _MirrorEvent.MirrorCreateEvent({
      source,
      originalSource,
      sourceContainer,
      sensorEvent,
      dragEvent
    });

    this.draggable.trigger(mirrorCreateEvent);

    if (isNativeDragEvent(sensorEvent) || mirrorCreateEvent.canceled()) {
      return;
    }

    const appendableContainer = this[getAppendableContainer](source) || sourceContainer;
    this.mirror = source.cloneNode(true);

    const mirrorCreatedEvent = new _MirrorEvent.MirrorCreatedEvent({
      source,
      originalSource,
      sourceContainer,
      sensorEvent,
      dragEvent,
      mirror: this.mirror
    });

    const mirrorAttachedEvent = new _MirrorEvent.MirrorAttachedEvent({
      source,
      originalSource,
      sourceContainer,
      sensorEvent,
      dragEvent,
      mirror: this.mirror
    });

    this.draggable.trigger(mirrorCreatedEvent);
    appendableContainer.appendChild(this.mirror);
    this.draggable.trigger(mirrorAttachedEvent);
  }

  [onDragMove](dragEvent) {
    if (!this.mirror || dragEvent.canceled()) {
      return;
    }

    const { source, originalSource, sourceContainer, sensorEvent } = dragEvent;

    const mirrorMoveEvent = new _MirrorEvent.MirrorMoveEvent({
      source,
      originalSource,
      sourceContainer,
      sensorEvent,
      dragEvent,
      mirror: this.mirror
    });

    this.draggable.trigger(mirrorMoveEvent);
  }

  [onDragStop](dragEvent) {
    if ('ontouchstart' in window) {
      document.removeEventListener('scroll', this[onScroll], true);
    }

    this.initialScrollOffset = { x: 0, y: 0 };
    this.scrollOffset = { x: 0, y: 0 };

    if (!this.mirror) {
      return;
    }

    const { source, sourceContainer, sensorEvent } = dragEvent;

    const mirrorDestroyEvent = new _MirrorEvent.MirrorDestroyEvent({
      source,
      mirror: this.mirror,
      sourceContainer,
      sensorEvent,
      dragEvent
    });

    this.draggable.trigger(mirrorDestroyEvent);

    if (!mirrorDestroyEvent.canceled()) {
      this.mirror.parentNode.removeChild(this.mirror);
    }
  }

  [onScroll]() {
    this.scrollOffset = {
      x: window.scrollX - this.initialScrollOffset.x,
      y: window.scrollY - this.initialScrollOffset.y
    };
  }

  /**
   * Mirror created handler
   * @param {MirrorCreatedEvent} mirrorEvent
   * @return {Promise}
   * @private
   */
  [onMirrorCreated]({ mirror, source, sensorEvent }) {
    const mirrorClass = this.draggable.getClassNameFor('mirror');

    const setState = (_ref) => {
      let { mirrorOffset, initialX, initialY } = _ref,
          args = _objectWithoutProperties(_ref, ['mirrorOffset', 'initialX', 'initialY']);

      this.mirrorOffset = mirrorOffset;
      this.initialX = initialX;
      this.initialY = initialY;
      return _extends({ mirrorOffset, initialX, initialY }, args);
    };

    const initialState = {
      mirror,
      source,
      sensorEvent,
      mirrorClass,
      scrollOffset: this.scrollOffset,
      options: this.options
    };

    return Promise.resolve(initialState)
    // Fix reflow here
    .then(computeMirrorDimensions).then(calculateMirrorOffset).then(resetMirror).then(addMirrorClasses).then(positionMirror({ initial: true })).then(removeMirrorID).then(setState);
  }

  /**
   * Mirror move handler
   * @param {MirrorMoveEvent} mirrorEvent
   * @return {Promise|null}
   * @private
   */
  [onMirrorMove](mirrorEvent) {
    if (mirrorEvent.canceled()) {
      return null;
    }

    const initialState = {
      mirror: mirrorEvent.mirror,
      sensorEvent: mirrorEvent.sensorEvent,
      mirrorOffset: this.mirrorOffset,
      options: this.options,
      initialX: this.initialX,
      initialY: this.initialY,
      scrollOffset: this.scrollOffset
    };

    return Promise.resolve(initialState).then(positionMirror({ raf: true }));
  }

  /**
   * Returns appendable container for mirror based on the appendTo option
   * @private
   * @param {Object} options
   * @param {HTMLElement} options.source - Current source
   * @return {HTMLElement}
   */
  [getAppendableContainer](source) {
    const appendTo = this.options.appendTo;

    if (typeof appendTo === 'string') {
      return document.querySelector(appendTo);
    } else if (appendTo instanceof HTMLElement) {
      return appendTo;
    } else if (typeof appendTo === 'function') {
      return appendTo(source);
    } else {
      return source.parentNode;
    }
  }
}

exports.default = Mirror; /**
                           * Computes mirror dimensions based on the source element
                           * Adds sourceRect to state
                           * @param {Object} state
                           * @param {HTMLElement} state.source
                           * @return {Promise}
                           * @private
                           */

function computeMirrorDimensions(_ref2) {
  let { source } = _ref2,
      args = _objectWithoutProperties(_ref2, ['source']);

  return withPromise(resolve => {
    const sourceRect = source.getBoundingClientRect();
    resolve(_extends({ source, sourceRect }, args));
  });
}

/**
 * Calculates mirror offset
 * Adds mirrorOffset to state
 * @param {Object} state
 * @param {SensorEvent} state.sensorEvent
 * @param {DOMRect} state.sourceRect
 * @return {Promise}
 * @private
 */
function calculateMirrorOffset(_ref3) {
  let { sensorEvent, sourceRect, options } = _ref3,
      args = _objectWithoutProperties(_ref3, ['sensorEvent', 'sourceRect', 'options']);

  return withPromise(resolve => {
    const top = options.cursorOffsetY === null ? sensorEvent.clientY - sourceRect.top : options.cursorOffsetY;
    const left = options.cursorOffsetX === null ? sensorEvent.clientX - sourceRect.left : options.cursorOffsetX;

    const mirrorOffset = { top, left };

    resolve(_extends({ sensorEvent, sourceRect, mirrorOffset, options }, args));
  });
}

/**
 * Applys mirror styles
 * @param {Object} state
 * @param {HTMLElement} state.mirror
 * @param {HTMLElement} state.source
 * @param {Object} state.options
 * @return {Promise}
 * @private
 */
function resetMirror(_ref4) {
  let { mirror, source, options } = _ref4,
      args = _objectWithoutProperties(_ref4, ['mirror', 'source', 'options']);

  return withPromise(resolve => {
    let offsetHeight;
    let offsetWidth;

    if (options.constrainDimensions) {
      const computedSourceStyles = getComputedStyle(source);
      offsetHeight = computedSourceStyles.getPropertyValue('height');
      offsetWidth = computedSourceStyles.getPropertyValue('width');
    }

    mirror.style.position = 'fixed';
    mirror.style.pointerEvents = 'none';
    mirror.style.top = 0;
    mirror.style.left = 0;
    mirror.style.margin = 0;

    if (options.constrainDimensions) {
      mirror.style.height = offsetHeight;
      mirror.style.width = offsetWidth;
    }

    resolve(_extends({ mirror, source, options }, args));
  });
}

/**
 * Applys mirror class on mirror element
 * @param {Object} state
 * @param {HTMLElement} state.mirror
 * @param {String} state.mirrorClass
 * @return {Promise}
 * @private
 */
function addMirrorClasses(_ref5) {
  let { mirror, mirrorClass } = _ref5,
      args = _objectWithoutProperties(_ref5, ['mirror', 'mirrorClass']);

  return withPromise(resolve => {
    mirror.classList.add(mirrorClass);
    resolve(_extends({ mirror, mirrorClass }, args));
  });
}

/**
 * Removes source ID from cloned mirror element
 * @param {Object} state
 * @param {HTMLElement} state.mirror
 * @return {Promise}
 * @private
 */
function removeMirrorID(_ref6) {
  let { mirror } = _ref6,
      args = _objectWithoutProperties(_ref6, ['mirror']);

  return withPromise(resolve => {
    mirror.removeAttribute('id');
    delete mirror.id;
    resolve(_extends({ mirror }, args));
  });
}

/**
 * Positions mirror with translate3d
 * @param {Object} state
 * @param {HTMLElement} state.mirror
 * @param {SensorEvent} state.sensorEvent
 * @param {Object} state.mirrorOffset
 * @param {Number} state.initialY
 * @param {Number} state.initialX
 * @param {Object} state.options
 * @return {Promise}
 * @private
 */
function positionMirror({ withFrame = false, initial = false } = {}) {
  return (_ref7) => {
    let { mirror, sensorEvent, mirrorOffset, initialY, initialX, scrollOffset, options } = _ref7,
        args = _objectWithoutProperties(_ref7, ['mirror', 'sensorEvent', 'mirrorOffset', 'initialY', 'initialX', 'scrollOffset', 'options']);

    return withPromise(resolve => {
      const result = _extends({
        mirror,
        sensorEvent,
        mirrorOffset,
        options
      }, args);

      if (mirrorOffset) {
        const x = sensorEvent.clientX - mirrorOffset.left - scrollOffset.x;
        const y = sensorEvent.clientY - mirrorOffset.top - scrollOffset.y;

        if (options.xAxis && options.yAxis || initial) {
          mirror.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        } else if (options.xAxis && !options.yAxis) {
          mirror.style.transform = `translate3d(${x}px, ${initialY}px, 0)`;
        } else if (options.yAxis && !options.xAxis) {
          mirror.style.transform = `translate3d(${initialX}px, ${y}px, 0)`;
        }

        if (initial) {
          result.initialX = x;
          result.initialY = y;
        }
      }

      resolve(result);
    }, { frame: withFrame });
  };
}

/**
 * Wraps functions in promise with potential animation frame option
 * @param {Function} callback
 * @param {Object} options
 * @param {Boolean} options.raf
 * @return {Promise}
 * @private
 */
function withPromise(callback, { raf = false } = {}) {
  return new Promise((resolve, reject) => {
    if (raf) {
      requestAnimationFrame(() => {
        callback(resolve, reject);
      });
    } else {
      callback(resolve, reject);
    }
  });
}

/**
 * Returns true if the sensor event was triggered by a native browser drag event
 * @param {SensorEvent} sensorEvent
 */
function isNativeDragEvent(sensorEvent) {
  return (/^drag/.test(sensorEvent.originalEvent.type)
  );
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __nested_webpack_require_164842__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultOptions = undefined;

var _Mirror = __nested_webpack_require_164842__(56);

var _Mirror2 = _interopRequireDefault(_Mirror);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Mirror2.default;
exports.defaultOptions = _Mirror.defaultOptions;

/***/ }),
/* 58 */
/***/ (function(module, exports, __nested_webpack_require_165308__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _AbstractPlugin = __nested_webpack_require_165308__(1);

var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const onInitialize = Symbol('onInitialize');
const onDestroy = Symbol('onDestroy');

/**
 * Focusable default options
 * @property {Object} defaultOptions
 * @type {Object}
 */
const defaultOptions = {};

/**
 * Focusable plugin
 * @class Focusable
 * @module Focusable
 * @extends AbstractPlugin
 */
class Focusable extends _AbstractPlugin2.default {
  /**
   * Focusable constructor.
   * @constructs Focusable
   * @param {Draggable} draggable - Draggable instance
   */
  constructor(draggable) {
    super(draggable);

    /**
     * Focusable options
     * @property {Object} options
     * @type {Object}
     */
    this.options = _extends({}, defaultOptions, this.getOptions());

    this[onInitialize] = this[onInitialize].bind(this);
    this[onDestroy] = this[onDestroy].bind(this);
  }

  /**
   * Attaches listeners to draggable
   */
  attach() {
    this.draggable.on('draggable:initialize', this[onInitialize]).on('draggable:destroy', this[onDestroy]);
  }

  /**
   * Detaches listeners from draggable
   */
  detach() {
    this.draggable.off('draggable:initialize', this[onInitialize]).off('draggable:destroy', this[onDestroy]);
  }

  /**
   * Returns options passed through draggable
   * @return {Object}
   */
  getOptions() {
    return this.draggable.options.focusable || {};
  }

  /**
   * Returns draggable containers and elements
   * @return {HTMLElement[]}
   */
  getElements() {
    return [...this.draggable.containers, ...this.draggable.getDraggableElements()];
  }

  /**
   * Intialize handler
   * @private
   */
  [onInitialize]() {
    // Can wait until the next best frame is available
    requestAnimationFrame(() => {
      this.getElements().forEach(element => decorateElement(element));
    });
  }

  /**
   * Destroy handler
   * @private
   */
  [onDestroy]() {
    // Can wait until the next best frame is available
    requestAnimationFrame(() => {
      this.getElements().forEach(element => stripElement(element));
    });
  }
}

exports.default = Focusable; /**
                              * Keeps track of all the elements that are missing tabindex attributes
                              * so they can be reset when draggable gets destroyed
                              * @const {HTMLElement[]} elementsWithMissingTabIndex
                              */

const elementsWithMissingTabIndex = [];

/**
 * Decorates element with tabindex attributes
 * @param {HTMLElement} element
 * @return {Object}
 * @private
 */
function decorateElement(element) {
  const hasMissingTabIndex = Boolean(!element.getAttribute('tabindex') && element.tabIndex === -1);

  if (hasMissingTabIndex) {
    elementsWithMissingTabIndex.push(element);
    element.tabIndex = 0;
  }
}

/**
 * Removes elements tabindex attributes
 * @param {HTMLElement} element
 * @private
 */
function stripElement(element) {
  const tabIndexElementPosition = elementsWithMissingTabIndex.indexOf(element);

  if (tabIndexElementPosition !== -1) {
    element.tabIndex = -1;
    elementsWithMissingTabIndex.splice(tabIndexElementPosition, 1);
  }
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __nested_webpack_require_169004__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Focusable = __nested_webpack_require_169004__(58);

var _Focusable2 = _interopRequireDefault(_Focusable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Focusable2.default;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * All draggable plugins inherit from this class.
 * @abstract
 * @class AbstractPlugin
 * @module AbstractPlugin
 */
class AbstractPlugin {
  /**
   * AbstractPlugin constructor.
   * @constructs AbstractPlugin
   * @param {Draggable} draggable - Draggable instance
   */
  constructor(draggable) {
    /**
     * Draggable instance
     * @property draggable
     * @type {Draggable}
     */
    this.draggable = draggable;
  }

  /**
   * Override to add listeners
   * @abstract
   */
  attach() {
    throw new Error('Not Implemented');
  }

  /**
   * Override to remove listeners
   * @abstract
   */
  detach() {
    throw new Error('Not Implemented');
  }
}
exports.default = AbstractPlugin;

/***/ }),
/* 61 */
/***/ (function(module, exports, __nested_webpack_require_170260__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultOptions = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _AbstractPlugin = __nested_webpack_require_170260__(1);

var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const onInitialize = Symbol('onInitialize');
const onDestroy = Symbol('onDestroy');
const announceEvent = Symbol('announceEvent');
const announceMessage = Symbol('announceMessage');

const ARIA_RELEVANT = 'aria-relevant';
const ARIA_ATOMIC = 'aria-atomic';
const ARIA_LIVE = 'aria-live';
const ROLE = 'role';

/**
 * Announcement default options
 * @property {Object} defaultOptions
 * @property {Number} defaultOptions.expire
 * @type {Object}
 */
const defaultOptions = exports.defaultOptions = {
  expire: 7000
};

/**
 * Announcement plugin
 * @class Announcement
 * @module Announcement
 * @extends AbstractPlugin
 */
class Announcement extends _AbstractPlugin2.default {
  /**
   * Announcement constructor.
   * @constructs Announcement
   * @param {Draggable} draggable - Draggable instance
   */
  constructor(draggable) {
    super(draggable);

    /**
     * Plugin options
     * @property options
     * @type {Object}
     */
    this.options = _extends({}, defaultOptions, this.getOptions());

    /**
     * Original draggable trigger method. Hack until we have onAll or on('all')
     * @property originalTriggerMethod
     * @type {Function}
     */
    this.originalTriggerMethod = this.draggable.trigger;

    this[onInitialize] = this[onInitialize].bind(this);
    this[onDestroy] = this[onDestroy].bind(this);
  }

  /**
   * Attaches listeners to draggable
   */
  attach() {
    this.draggable.on('draggable:initialize', this[onInitialize]);
  }

  /**
   * Detaches listeners from draggable
   */
  detach() {
    this.draggable.off('draggable:destroy', this[onDestroy]);
  }

  /**
   * Returns passed in options
   */
  getOptions() {
    return this.draggable.options.announcements || {};
  }

  /**
   * Announces event
   * @private
   * @param {AbstractEvent} event
   */
  [announceEvent](event) {
    const message = this.options[event.type];

    if (message && typeof message === 'string') {
      this[announceMessage](message);
    }

    if (message && typeof message === 'function') {
      this[announceMessage](message(event));
    }
  }

  /**
   * Announces message to screen reader
   * @private
   * @param {String} message
   */
  [announceMessage](message) {
    announce(message, { expire: this.options.expire });
  }

  /**
   * Initialize hander
   * @private
   */
  [onInitialize]() {
    // Hack until there is an api for listening for all events
    this.draggable.trigger = event => {
      try {
        this[announceEvent](event);
      } finally {
        // Ensure that original trigger is called
        this.originalTriggerMethod.call(this.draggable, event);
      }
    };
  }

  /**
   * Destroy hander
   * @private
   */
  [onDestroy]() {
    this.draggable.trigger = this.originalTriggerMethod;
  }
}

exports.default = Announcement; /**
                                 * @const {HTMLElement} liveRegion
                                 */

const liveRegion = createRegion();

/**
 * Announces message via live region
 * @param {String} message
 * @param {Object} options
 * @param {Number} options.expire
 */
function announce(message, { expire }) {
  const element = document.createElement('div');

  element.textContent = message;
  liveRegion.appendChild(element);

  return setTimeout(() => {
    liveRegion.removeChild(element);
  }, expire);
}

/**
 * Creates region element
 * @return {HTMLElement}
 */
function createRegion() {
  const element = document.createElement('div');

  element.setAttribute('id', 'draggable-live-region');
  element.setAttribute(ARIA_RELEVANT, 'additions');
  element.setAttribute(ARIA_ATOMIC, 'true');
  element.setAttribute(ARIA_LIVE, 'assertive');
  element.setAttribute(ROLE, 'log');

  element.style.position = 'fixed';
  element.style.width = '1px';
  element.style.height = '1px';
  element.style.top = '-1px';
  element.style.overflow = 'hidden';

  return element;
}

// Append live region element as early as possible
document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(liveRegion);
});

/***/ }),
/* 62 */
/***/ (function(module, exports, __nested_webpack_require_174953__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultOptions = undefined;

var _Announcement = __nested_webpack_require_174953__(61);

var _Announcement2 = _interopRequireDefault(_Announcement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Announcement2.default;
exports.defaultOptions = _Announcement.defaultOptions;

/***/ }),
/* 63 */
/***/ (function(module, exports, __nested_webpack_require_175449__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DraggableDestroyEvent = exports.DraggableInitializedEvent = exports.DraggableEvent = undefined;

var _AbstractEvent = __nested_webpack_require_175449__(0);

var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Base draggable event
 * @class DraggableEvent
 * @module DraggableEvent
 * @extends AbstractEvent
 */
class DraggableEvent extends _AbstractEvent2.default {

  /**
   * Draggable instance
   * @property draggable
   * @type {Draggable}
   * @readonly
   */
  get draggable() {
    return this.data.draggable;
  }
}

exports.DraggableEvent = DraggableEvent; /**
                                          * Draggable initialized event
                                          * @class DraggableInitializedEvent
                                          * @module DraggableInitializedEvent
                                          * @extends DraggableEvent
                                          */

DraggableEvent.type = 'draggable';
class DraggableInitializedEvent extends DraggableEvent {}

exports.DraggableInitializedEvent = DraggableInitializedEvent; /**
                                                                * Draggable destory event
                                                                * @class DraggableInitializedEvent
                                                                * @module DraggableDestroyEvent
                                                                * @extends DraggableDestroyEvent
                                                                */

DraggableInitializedEvent.type = 'draggable:initialize';
class DraggableDestroyEvent extends DraggableEvent {}
exports.DraggableDestroyEvent = DraggableDestroyEvent;
DraggableDestroyEvent.type = 'draggable:destroy';

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const canceled = Symbol('canceled');

/**
 * All events fired by draggable inherit this class. You can call `cancel()` to
 * cancel a specific event or you can check if an event has been canceled by
 * calling `canceled()`.
 * @abstract
 * @class AbstractEvent
 * @module AbstractEvent
 */
class AbstractEvent {

  /**
   * AbstractEvent constructor.
   * @constructs AbstractEvent
   * @param {object} data - Event data
   */

  /**
   * Event type
   * @static
   * @abstract
   * @property type
   * @type {String}
   */
  constructor(data) {
    this[canceled] = false;
    this.data = data;
  }

  /**
   * Read-only type
   * @abstract
   * @return {String}
   */


  /**
   * Event cancelable
   * @static
   * @abstract
   * @property cancelable
   * @type {Boolean}
   */
  get type() {
    return this.constructor.type;
  }

  /**
   * Read-only cancelable
   * @abstract
   * @return {Boolean}
   */
  get cancelable() {
    return this.constructor.cancelable;
  }

  /**
   * Cancels the event instance
   * @abstract
   */
  cancel() {
    this[canceled] = true;
  }

  /**
   * Check if event has been canceled
   * @abstract
   * @return {Boolean}
   */
  canceled() {
    return Boolean(this[canceled]);
  }

  /**
   * Returns new event instance with existing event data.
   * This method allows for overriding of event data.
   * @param {Object} data
   * @return {AbstractEvent}
   */
  clone(data) {
    return new this.constructor(_extends({}, this.data, data));
  }
}
exports.default = AbstractEvent;
AbstractEvent.type = 'event';
AbstractEvent.cancelable = false;

/***/ }),
/* 65 */
/***/ (function(module, exports, __nested_webpack_require_179459__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DragStopEvent = exports.DragPressureEvent = exports.DragOutContainerEvent = exports.DragOverContainerEvent = exports.DragOutEvent = exports.DragOverEvent = exports.DragMoveEvent = exports.DragStartEvent = exports.DragEvent = undefined;

var _AbstractEvent = __nested_webpack_require_179459__(0);

var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Base drag event
 * @class DragEvent
 * @module DragEvent
 * @extends AbstractEvent
 */
class DragEvent extends _AbstractEvent2.default {

  /**
   * Draggables source element
   * @property source
   * @type {HTMLElement}
   * @readonly
   */
  get source() {
    return this.data.source;
  }

  /**
   * Draggables original source element
   * @property originalSource
   * @type {HTMLElement}
   * @readonly
   */
  get originalSource() {
    return this.data.originalSource;
  }

  /**
   * Draggables mirror element
   * @property mirror
   * @type {HTMLElement}
   * @readonly
   */
  get mirror() {
    return this.data.mirror;
  }

  /**
   * Draggables source container element
   * @property sourceContainer
   * @type {HTMLElement}
   * @readonly
   */
  get sourceContainer() {
    return this.data.sourceContainer;
  }

  /**
   * Sensor event
   * @property sensorEvent
   * @type {SensorEvent}
   * @readonly
   */
  get sensorEvent() {
    return this.data.sensorEvent;
  }

  /**
   * Original event that triggered sensor event
   * @property originalEvent
   * @type {Event}
   * @readonly
   */
  get originalEvent() {
    if (this.sensorEvent) {
      return this.sensorEvent.originalEvent;
    }

    return null;
  }
}

exports.DragEvent = DragEvent; /**
                                * Drag start event
                                * @class DragStartEvent
                                * @module DragStartEvent
                                * @extends DragEvent
                                */

DragEvent.type = 'drag';
class DragStartEvent extends DragEvent {}

exports.DragStartEvent = DragStartEvent; /**
                                          * Drag move event
                                          * @class DragMoveEvent
                                          * @module DragMoveEvent
                                          * @extends DragEvent
                                          */

DragStartEvent.type = 'drag:start';
DragStartEvent.cancelable = true;
class DragMoveEvent extends DragEvent {}

exports.DragMoveEvent = DragMoveEvent; /**
                                        * Drag over event
                                        * @class DragOverEvent
                                        * @module DragOverEvent
                                        * @extends DragEvent
                                        */

DragMoveEvent.type = 'drag:move';
class DragOverEvent extends DragEvent {

  /**
   * Draggable container you are over
   * @property overContainer
   * @type {HTMLElement}
   * @readonly
   */
  get overContainer() {
    return this.data.overContainer;
  }

  /**
   * Draggable element you are over
   * @property over
   * @type {HTMLElement}
   * @readonly
   */
  get over() {
    return this.data.over;
  }
}

exports.DragOverEvent = DragOverEvent; /**
                                        * Drag out event
                                        * @class DragOutEvent
                                        * @module DragOutEvent
                                        * @extends DragEvent
                                        */

DragOverEvent.type = 'drag:over';
DragOverEvent.cancelable = true;
class DragOutEvent extends DragEvent {

  /**
   * Draggable container you are over
   * @property overContainer
   * @type {HTMLElement}
   * @readonly
   */
  get overContainer() {
    return this.data.overContainer;
  }

  /**
   * Draggable element you left
   * @property over
   * @type {HTMLElement}
   * @readonly
   */
  get over() {
    return this.data.over;
  }
}

exports.DragOutEvent = DragOutEvent; /**
                                      * Drag over container event
                                      * @class DragOverContainerEvent
                                      * @module DragOverContainerEvent
                                      * @extends DragEvent
                                      */

DragOutEvent.type = 'drag:out';
class DragOverContainerEvent extends DragEvent {

  /**
   * Draggable container you are over
   * @property overContainer
   * @type {HTMLElement}
   * @readonly
   */
  get overContainer() {
    return this.data.overContainer;
  }
}

exports.DragOverContainerEvent = DragOverContainerEvent; /**
                                                          * Drag out container event
                                                          * @class DragOutContainerEvent
                                                          * @module DragOutContainerEvent
                                                          * @extends DragEvent
                                                          */

DragOverContainerEvent.type = 'drag:over:container';
class DragOutContainerEvent extends DragEvent {

  /**
   * Draggable container you left
   * @property overContainer
   * @type {HTMLElement}
   * @readonly
   */
  get overContainer() {
    return this.data.overContainer;
  }
}

exports.DragOutContainerEvent = DragOutContainerEvent; /**
                                                        * Drag pressure event
                                                        * @class DragPressureEvent
                                                        * @module DragPressureEvent
                                                        * @extends DragEvent
                                                        */

DragOutContainerEvent.type = 'drag:out:container';
class DragPressureEvent extends DragEvent {

  /**
   * Pressure applied on draggable element
   * @property pressure
   * @type {Number}
   * @readonly
   */
  get pressure() {
    return this.data.pressure;
  }
}

exports.DragPressureEvent = DragPressureEvent; /**
                                                * Drag stop event
                                                * @class DragStopEvent
                                                * @module DragStopEvent
                                                * @extends DragEvent
                                                */

DragPressureEvent.type = 'drag:pressure';
class DragStopEvent extends DragEvent {}
exports.DragStopEvent = DragStopEvent;
DragStopEvent.type = 'drag:stop';

/***/ }),
/* 66 */
/***/ (function(module, exports, __nested_webpack_require_186264__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Plugins = exports.Sensors = exports.Sortable = exports.Swappable = exports.Droppable = exports.Draggable = exports.BasePlugin = exports.BaseEvent = undefined;

var _Draggable = __nested_webpack_require_186264__(5);

Object.defineProperty(exports, 'Draggable', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_Draggable).default;
  }
});

var _Droppable = __nested_webpack_require_186264__(34);

Object.defineProperty(exports, 'Droppable', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_Droppable).default;
  }
});

var _Swappable = __nested_webpack_require_186264__(31);

Object.defineProperty(exports, 'Swappable', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_Swappable).default;
  }
});

var _Sortable = __nested_webpack_require_186264__(28);

Object.defineProperty(exports, 'Sortable', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_Sortable).default;
  }
});

var _AbstractEvent = __nested_webpack_require_186264__(0);

var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

var _AbstractPlugin = __nested_webpack_require_186264__(1);

var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

var _Sensors = __nested_webpack_require_186264__(6);

var Sensors = _interopRequireWildcard(_Sensors);

var _Plugins = __nested_webpack_require_186264__(25);

var Plugins = _interopRequireWildcard(_Plugins);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.BaseEvent = _AbstractEvent2.default;
exports.BasePlugin = _AbstractPlugin2.default;
exports.Sensors = Sensors;
exports.Plugins = Plugins;

/***/ })
/******/ ]);
});

/***/ }),

/***/ "./node_modules/alpinejs/dist/alpine.js":
/*!**********************************************!*\
  !*** ./node_modules/alpinejs/dist/alpine.js ***!
  \**********************************************/
/***/ (function(module) {

(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, (function () { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  // Thanks @stimulus:
  // https://github.com/stimulusjs/stimulus/blob/master/packages/%40stimulus/core/src/application.ts
  function domReady() {
    return new Promise(resolve => {
      if (document.readyState == "loading") {
        document.addEventListener("DOMContentLoaded", resolve);
      } else {
        resolve();
      }
    });
  }
  function arrayUnique(array) {
    return Array.from(new Set(array));
  }
  function isTesting() {
    return navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom");
  }
  function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
  }
  function warnIfMalformedTemplate(el, directive) {
    if (el.tagName.toLowerCase() !== 'template') {
      console.warn(`Alpine: [${directive}] directive should only be added to <template> tags. See https://github.com/alpinejs/alpine#${directive}`);
    } else if (el.content.childElementCount !== 1) {
      console.warn(`Alpine: <template> tag with [${directive}] encountered with an unexpected number of root elements. Make sure <template> has a single root element. `);
    }
  }
  function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[_\s]/, '-').toLowerCase();
  }
  function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function walk(el, callback) {
    if (callback(el) === false) return;
    let node = el.firstElementChild;

    while (node) {
      walk(node, callback);
      node = node.nextElementSibling;
    }
  }
  function debounce(func, wait) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;

      var later = function later() {
        timeout = null;
        func.apply(context, args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  const handleError = (el, expression, error) => {
    console.warn(`Alpine Error: "${error}"\n\nExpression: "${expression}"\nElement:`, el);

    if (!isTesting()) {
      Object.assign(error, {
        el,
        expression
      });
      throw error;
    }
  };

  function tryCatch(cb, {
    el,
    expression
  }) {
    try {
      const value = cb();
      return value instanceof Promise ? value.catch(e => handleError(el, expression, e)) : value;
    } catch (e) {
      handleError(el, expression, e);
    }
  }

  function saferEval(el, expression, dataContext, additionalHelperVariables = {}) {
    return tryCatch(() => {
      if (typeof expression === 'function') {
        return expression.call(dataContext);
      }

      return new Function(['$data', ...Object.keys(additionalHelperVariables)], `var __alpine_result; with($data) { __alpine_result = ${expression} }; return __alpine_result`)(dataContext, ...Object.values(additionalHelperVariables));
    }, {
      el,
      expression
    });
  }
  function saferEvalNoReturn(el, expression, dataContext, additionalHelperVariables = {}) {
    return tryCatch(() => {
      if (typeof expression === 'function') {
        return Promise.resolve(expression.call(dataContext, additionalHelperVariables['$event']));
      }

      let AsyncFunction = Function;
      /* MODERN-ONLY:START */

      AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
      /* MODERN-ONLY:END */
      // For the cases when users pass only a function reference to the caller: `x-on:click="foo"`
      // Where "foo" is a function. Also, we'll pass the function the event instance when we call it.

      if (Object.keys(dataContext).includes(expression)) {
        let methodReference = new Function(['dataContext', ...Object.keys(additionalHelperVariables)], `with(dataContext) { return ${expression} }`)(dataContext, ...Object.values(additionalHelperVariables));

        if (typeof methodReference === 'function') {
          return Promise.resolve(methodReference.call(dataContext, additionalHelperVariables['$event']));
        } else {
          return Promise.resolve();
        }
      }

      return Promise.resolve(new AsyncFunction(['dataContext', ...Object.keys(additionalHelperVariables)], `with(dataContext) { ${expression} }`)(dataContext, ...Object.values(additionalHelperVariables)));
    }, {
      el,
      expression
    });
  }
  const xAttrRE = /^x-(on|bind|data|text|html|model|if|for|show|cloak|transition|ref|spread)\b/;
  function isXAttr(attr) {
    const name = replaceAtAndColonWithStandardSyntax(attr.name);
    return xAttrRE.test(name);
  }
  function getXAttrs(el, component, type) {
    let directives = Array.from(el.attributes).filter(isXAttr).map(parseHtmlAttribute); // Get an object of directives from x-spread.

    let spreadDirective = directives.filter(directive => directive.type === 'spread')[0];

    if (spreadDirective) {
      let spreadObject = saferEval(el, spreadDirective.expression, component.$data); // Add x-spread directives to the pile of existing directives.

      directives = directives.concat(Object.entries(spreadObject).map(([name, value]) => parseHtmlAttribute({
        name,
        value
      })));
    }

    if (type) return directives.filter(i => i.type === type);
    return sortDirectives(directives);
  }

  function sortDirectives(directives) {
    let directiveOrder = ['bind', 'model', 'show', 'catch-all'];
    return directives.sort((a, b) => {
      let typeA = directiveOrder.indexOf(a.type) === -1 ? 'catch-all' : a.type;
      let typeB = directiveOrder.indexOf(b.type) === -1 ? 'catch-all' : b.type;
      return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
    });
  }

  function parseHtmlAttribute({
    name,
    value
  }) {
    const normalizedName = replaceAtAndColonWithStandardSyntax(name);
    const typeMatch = normalizedName.match(xAttrRE);
    const valueMatch = normalizedName.match(/:([a-zA-Z0-9\-:]+)/);
    const modifiers = normalizedName.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
    return {
      type: typeMatch ? typeMatch[1] : null,
      value: valueMatch ? valueMatch[1] : null,
      modifiers: modifiers.map(i => i.replace('.', '')),
      expression: value
    };
  }
  function isBooleanAttr(attrName) {
    // As per HTML spec table https://html.spec.whatwg.org/multipage/indices.html#attributes-3:boolean-attribute
    // Array roughly ordered by estimated usage
    const booleanAttributes = ['disabled', 'checked', 'required', 'readonly', 'hidden', 'open', 'selected', 'autofocus', 'itemscope', 'multiple', 'novalidate', 'allowfullscreen', 'allowpaymentrequest', 'formnovalidate', 'autoplay', 'controls', 'loop', 'muted', 'playsinline', 'default', 'ismap', 'reversed', 'async', 'defer', 'nomodule'];
    return booleanAttributes.includes(attrName);
  }
  function replaceAtAndColonWithStandardSyntax(name) {
    if (name.startsWith('@')) {
      return name.replace('@', 'x-on:');
    } else if (name.startsWith(':')) {
      return name.replace(':', 'x-bind:');
    }

    return name;
  }
  function convertClassStringToArray(classList, filterFn = Boolean) {
    return classList.split(' ').filter(filterFn);
  }
  const TRANSITION_TYPE_IN = 'in';
  const TRANSITION_TYPE_OUT = 'out';
  const TRANSITION_CANCELLED = 'cancelled';
  function transitionIn(el, show, reject, component, forceSkip = false) {
    // We don't want to transition on the initial page load.
    if (forceSkip) return show();

    if (el.__x_transition && el.__x_transition.type === TRANSITION_TYPE_IN) {
      // there is already a similar transition going on, this was probably triggered by
      // a change in a different property, let's just leave the previous one doing its job
      return;
    }

    const attrs = getXAttrs(el, component, 'transition');
    const showAttr = getXAttrs(el, component, 'show')[0]; // If this is triggered by a x-show.transition.

    if (showAttr && showAttr.modifiers.includes('transition')) {
      let modifiers = showAttr.modifiers; // If x-show.transition.out, we'll skip the "in" transition.

      if (modifiers.includes('out') && !modifiers.includes('in')) return show();
      const settingBothSidesOfTransition = modifiers.includes('in') && modifiers.includes('out'); // If x-show.transition.in...out... only use "in" related modifiers for this transition.

      modifiers = settingBothSidesOfTransition ? modifiers.filter((i, index) => index < modifiers.indexOf('out')) : modifiers;
      transitionHelperIn(el, modifiers, show, reject); // Otherwise, we can assume x-transition:enter.
    } else if (attrs.some(attr => ['enter', 'enter-start', 'enter-end'].includes(attr.value))) {
      transitionClassesIn(el, component, attrs, show, reject);
    } else {
      // If neither, just show that damn thing.
      show();
    }
  }
  function transitionOut(el, hide, reject, component, forceSkip = false) {
    // We don't want to transition on the initial page load.
    if (forceSkip) return hide();

    if (el.__x_transition && el.__x_transition.type === TRANSITION_TYPE_OUT) {
      // there is already a similar transition going on, this was probably triggered by
      // a change in a different property, let's just leave the previous one doing its job
      return;
    }

    const attrs = getXAttrs(el, component, 'transition');
    const showAttr = getXAttrs(el, component, 'show')[0];

    if (showAttr && showAttr.modifiers.includes('transition')) {
      let modifiers = showAttr.modifiers;
      if (modifiers.includes('in') && !modifiers.includes('out')) return hide();
      const settingBothSidesOfTransition = modifiers.includes('in') && modifiers.includes('out');
      modifiers = settingBothSidesOfTransition ? modifiers.filter((i, index) => index > modifiers.indexOf('out')) : modifiers;
      transitionHelperOut(el, modifiers, settingBothSidesOfTransition, hide, reject);
    } else if (attrs.some(attr => ['leave', 'leave-start', 'leave-end'].includes(attr.value))) {
      transitionClassesOut(el, component, attrs, hide, reject);
    } else {
      hide();
    }
  }
  function transitionHelperIn(el, modifiers, showCallback, reject) {
    // Default values inspired by: https://material.io/design/motion/speed.html#duration
    const styleValues = {
      duration: modifierValue(modifiers, 'duration', 150),
      origin: modifierValue(modifiers, 'origin', 'center'),
      first: {
        opacity: 0,
        scale: modifierValue(modifiers, 'scale', 95)
      },
      second: {
        opacity: 1,
        scale: 100
      }
    };
    transitionHelper(el, modifiers, showCallback, () => {}, reject, styleValues, TRANSITION_TYPE_IN);
  }
  function transitionHelperOut(el, modifiers, settingBothSidesOfTransition, hideCallback, reject) {
    // Make the "out" transition .5x slower than the "in". (Visually better)
    // HOWEVER, if they explicitly set a duration for the "out" transition,
    // use that.
    const duration = settingBothSidesOfTransition ? modifierValue(modifiers, 'duration', 150) : modifierValue(modifiers, 'duration', 150) / 2;
    const styleValues = {
      duration: duration,
      origin: modifierValue(modifiers, 'origin', 'center'),
      first: {
        opacity: 1,
        scale: 100
      },
      second: {
        opacity: 0,
        scale: modifierValue(modifiers, 'scale', 95)
      }
    };
    transitionHelper(el, modifiers, () => {}, hideCallback, reject, styleValues, TRANSITION_TYPE_OUT);
  }

  function modifierValue(modifiers, key, fallback) {
    // If the modifier isn't present, use the default.
    if (modifiers.indexOf(key) === -1) return fallback; // If it IS present, grab the value after it: x-show.transition.duration.500ms

    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue) return fallback;

    if (key === 'scale') {
      // Check if the very next value is NOT a number and return the fallback.
      // If x-show.transition.scale, we'll use the default scale value.
      // That is how a user opts out of the opacity transition.
      if (!isNumeric(rawValue)) return fallback;
    }

    if (key === 'duration') {
      // Support x-show.transition.duration.500ms && duration.500
      let match = rawValue.match(/([0-9]+)ms/);
      if (match) return match[1];
    }

    if (key === 'origin') {
      // Support chaining origin directions: x-show.transition.top.right
      if (['top', 'right', 'left', 'center', 'bottom'].includes(modifiers[modifiers.indexOf(key) + 2])) {
        return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(' ');
      }
    }

    return rawValue;
  }

  function transitionHelper(el, modifiers, hook1, hook2, reject, styleValues, type) {
    // clear the previous transition if exists to avoid caching the wrong styles
    if (el.__x_transition) {
      el.__x_transition.cancel && el.__x_transition.cancel();
    } // If the user set these style values, we'll put them back when we're done with them.


    const opacityCache = el.style.opacity;
    const transformCache = el.style.transform;
    const transformOriginCache = el.style.transformOrigin; // If no modifiers are present: x-show.transition, we'll default to both opacity and scale.

    const noModifiers = !modifiers.includes('opacity') && !modifiers.includes('scale');
    const transitionOpacity = noModifiers || modifiers.includes('opacity');
    const transitionScale = noModifiers || modifiers.includes('scale'); // These are the explicit stages of a transition (same stages for in and for out).
    // This way you can get a birds eye view of the hooks, and the differences
    // between them.

    const stages = {
      start() {
        if (transitionOpacity) el.style.opacity = styleValues.first.opacity;
        if (transitionScale) el.style.transform = `scale(${styleValues.first.scale / 100})`;
      },

      during() {
        if (transitionScale) el.style.transformOrigin = styleValues.origin;
        el.style.transitionProperty = [transitionOpacity ? `opacity` : ``, transitionScale ? `transform` : ``].join(' ').trim();
        el.style.transitionDuration = `${styleValues.duration / 1000}s`;
        el.style.transitionTimingFunction = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
      },

      show() {
        hook1();
      },

      end() {
        if (transitionOpacity) el.style.opacity = styleValues.second.opacity;
        if (transitionScale) el.style.transform = `scale(${styleValues.second.scale / 100})`;
      },

      hide() {
        hook2();
      },

      cleanup() {
        if (transitionOpacity) el.style.opacity = opacityCache;
        if (transitionScale) el.style.transform = transformCache;
        if (transitionScale) el.style.transformOrigin = transformOriginCache;
        el.style.transitionProperty = null;
        el.style.transitionDuration = null;
        el.style.transitionTimingFunction = null;
      }

    };
    transition(el, stages, type, reject);
  }

  const ensureStringExpression = (expression, el, component) => {
    return typeof expression === 'function' ? component.evaluateReturnExpression(el, expression) : expression;
  };

  function transitionClassesIn(el, component, directives, showCallback, reject) {
    const enter = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'enter') || {
      expression: ''
    }).expression, el, component));
    const enterStart = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'enter-start') || {
      expression: ''
    }).expression, el, component));
    const enterEnd = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'enter-end') || {
      expression: ''
    }).expression, el, component));
    transitionClasses(el, enter, enterStart, enterEnd, showCallback, () => {}, TRANSITION_TYPE_IN, reject);
  }
  function transitionClassesOut(el, component, directives, hideCallback, reject) {
    const leave = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'leave') || {
      expression: ''
    }).expression, el, component));
    const leaveStart = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'leave-start') || {
      expression: ''
    }).expression, el, component));
    const leaveEnd = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'leave-end') || {
      expression: ''
    }).expression, el, component));
    transitionClasses(el, leave, leaveStart, leaveEnd, () => {}, hideCallback, TRANSITION_TYPE_OUT, reject);
  }
  function transitionClasses(el, classesDuring, classesStart, classesEnd, hook1, hook2, type, reject) {
    // clear the previous transition if exists to avoid caching the wrong classes
    if (el.__x_transition) {
      el.__x_transition.cancel && el.__x_transition.cancel();
    }

    const originalClasses = el.__x_original_classes || [];
    const stages = {
      start() {
        el.classList.add(...classesStart);
      },

      during() {
        el.classList.add(...classesDuring);
      },

      show() {
        hook1();
      },

      end() {
        // Don't remove classes that were in the original class attribute.
        el.classList.remove(...classesStart.filter(i => !originalClasses.includes(i)));
        el.classList.add(...classesEnd);
      },

      hide() {
        hook2();
      },

      cleanup() {
        el.classList.remove(...classesDuring.filter(i => !originalClasses.includes(i)));
        el.classList.remove(...classesEnd.filter(i => !originalClasses.includes(i)));
      }

    };
    transition(el, stages, type, reject);
  }
  function transition(el, stages, type, reject) {
    const finish = once(() => {
      stages.hide(); // Adding an "isConnected" check, in case the callback
      // removed the element from the DOM.

      if (el.isConnected) {
        stages.cleanup();
      }

      delete el.__x_transition;
    });
    el.__x_transition = {
      // Set transition type so we can avoid clearing transition if the direction is the same
      type: type,
      // create a callback for the last stages of the transition so we can call it
      // from different point and early terminate it. Once will ensure that function
      // is only called one time.
      cancel: once(() => {
        reject(TRANSITION_CANCELLED);
        finish();
      }),
      finish,
      // This store the next animation frame so we can cancel it
      nextFrame: null
    };
    stages.start();
    stages.during();
    el.__x_transition.nextFrame = requestAnimationFrame(() => {
      // Note: Safari's transitionDuration property will list out comma separated transition durations
      // for every single transition property. Let's grab the first one and call it a day.
      let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, '').replace('s', '')) * 1000;

      if (duration === 0) {
        duration = Number(getComputedStyle(el).animationDuration.replace('s', '')) * 1000;
      }

      stages.show();
      el.__x_transition.nextFrame = requestAnimationFrame(() => {
        stages.end();
        setTimeout(el.__x_transition.finish, duration);
      });
    });
  }
  function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  } // Thanks @vuejs
  // https://github.com/vuejs/vue/blob/4de4649d9637262a9b007720b59f80ac72a5620c/src/shared/util.js

  function once(callback) {
    let called = false;
    return function () {
      if (!called) {
        called = true;
        callback.apply(this, arguments);
      }
    };
  }

  function handleForDirective(component, templateEl, expression, initialUpdate, extraVars) {
    warnIfMalformedTemplate(templateEl, 'x-for');
    let iteratorNames = typeof expression === 'function' ? parseForExpression(component.evaluateReturnExpression(templateEl, expression)) : parseForExpression(expression);
    let items = evaluateItemsAndReturnEmptyIfXIfIsPresentAndFalseOnElement(component, templateEl, iteratorNames, extraVars); // As we walk the array, we'll also walk the DOM (updating/creating as we go).

    let currentEl = templateEl;
    items.forEach((item, index) => {
      let iterationScopeVariables = getIterationScopeVariables(iteratorNames, item, index, items, extraVars());
      let currentKey = generateKeyForIteration(component, templateEl, index, iterationScopeVariables);
      let nextEl = lookAheadForMatchingKeyedElementAndMoveItIfFound(currentEl.nextElementSibling, currentKey); // If we haven't found a matching key, insert the element at the current position.

      if (!nextEl) {
        nextEl = addElementInLoopAfterCurrentEl(templateEl, currentEl); // And transition it in if it's not the first page load.

        transitionIn(nextEl, () => {}, () => {}, component, initialUpdate);
        nextEl.__x_for = iterationScopeVariables;
        component.initializeElements(nextEl, () => nextEl.__x_for); // Otherwise update the element we found.
      } else {
        // Temporarily remove the key indicator to allow the normal "updateElements" to work.
        delete nextEl.__x_for_key;
        nextEl.__x_for = iterationScopeVariables;
        component.updateElements(nextEl, () => nextEl.__x_for);
      }

      currentEl = nextEl;
      currentEl.__x_for_key = currentKey;
    });
    removeAnyLeftOverElementsFromPreviousUpdate(currentEl, component);
  } // This was taken from VueJS 2.* core. Thanks Vue!

  function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\(|\)$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = String(expression).match(forAliasRE);
    if (!inMatch) return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].trim().replace(stripParensRE, '');
    let iteratorMatch = item.match(forIteratorRE);

    if (iteratorMatch) {
      res.item = item.replace(forIteratorRE, '').trim();
      res.index = iteratorMatch[1].trim();

      if (iteratorMatch[2]) {
        res.collection = iteratorMatch[2].trim();
      }
    } else {
      res.item = item;
    }

    return res;
  }

  function getIterationScopeVariables(iteratorNames, item, index, items, extraVars) {
    // We must create a new object, so each iteration has a new scope
    let scopeVariables = extraVars ? _objectSpread2({}, extraVars) : {};
    scopeVariables[iteratorNames.item] = item;
    if (iteratorNames.index) scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection) scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
  }

  function generateKeyForIteration(component, el, index, iterationScopeVariables) {
    let bindKeyAttribute = getXAttrs(el, component, 'bind').filter(attr => attr.value === 'key')[0]; // If the dev hasn't specified a key, just return the index of the iteration.

    if (!bindKeyAttribute) return index;
    return component.evaluateReturnExpression(el, bindKeyAttribute.expression, () => iterationScopeVariables);
  }

  function evaluateItemsAndReturnEmptyIfXIfIsPresentAndFalseOnElement(component, el, iteratorNames, extraVars) {
    let ifAttribute = getXAttrs(el, component, 'if')[0];

    if (ifAttribute && !component.evaluateReturnExpression(el, ifAttribute.expression)) {
      return [];
    }

    let items = component.evaluateReturnExpression(el, iteratorNames.items, extraVars); // This adds support for the `i in n` syntax.

    if (isNumeric(items) && items >= 0) {
      items = Array.from(Array(items).keys(), i => i + 1);
    }

    return items;
  }

  function addElementInLoopAfterCurrentEl(templateEl, currentEl) {
    let clone = document.importNode(templateEl.content, true);
    currentEl.parentElement.insertBefore(clone, currentEl.nextElementSibling);
    return currentEl.nextElementSibling;
  }

  function lookAheadForMatchingKeyedElementAndMoveItIfFound(nextEl, currentKey) {
    if (!nextEl) return; // If we are already past the x-for generated elements, we don't need to look ahead.

    if (nextEl.__x_for_key === undefined) return; // If the the key's DO match, no need to look ahead.

    if (nextEl.__x_for_key === currentKey) return nextEl; // If they don't, we'll look ahead for a match.
    // If we find it, we'll move it to the current position in the loop.

    let tmpNextEl = nextEl;

    while (tmpNextEl) {
      if (tmpNextEl.__x_for_key === currentKey) {
        return tmpNextEl.parentElement.insertBefore(tmpNextEl, nextEl);
      }

      tmpNextEl = tmpNextEl.nextElementSibling && tmpNextEl.nextElementSibling.__x_for_key !== undefined ? tmpNextEl.nextElementSibling : false;
    }
  }

  function removeAnyLeftOverElementsFromPreviousUpdate(currentEl, component) {
    var nextElementFromOldLoop = currentEl.nextElementSibling && currentEl.nextElementSibling.__x_for_key !== undefined ? currentEl.nextElementSibling : false;

    while (nextElementFromOldLoop) {
      let nextElementFromOldLoopImmutable = nextElementFromOldLoop;
      let nextSibling = nextElementFromOldLoop.nextElementSibling;
      transitionOut(nextElementFromOldLoop, () => {
        nextElementFromOldLoopImmutable.remove();
      }, () => {}, component);
      nextElementFromOldLoop = nextSibling && nextSibling.__x_for_key !== undefined ? nextSibling : false;
    }
  }

  function handleAttributeBindingDirective(component, el, attrName, expression, extraVars, attrType, modifiers) {
    var value = component.evaluateReturnExpression(el, expression, extraVars);

    if (attrName === 'value') {
      if (Alpine.ignoreFocusedForValueBinding && document.activeElement.isSameNode(el)) return; // If nested model key is undefined, set the default value to empty string.

      if (value === undefined && String(expression).match(/\./)) {
        value = '';
      }

      if (el.type === 'radio') {
        // Set radio value from x-bind:value, if no "value" attribute exists.
        // If there are any initial state values, radio will have a correct
        // "checked" value since x-bind:value is processed before x-model.
        if (el.attributes.value === undefined && attrType === 'bind') {
          el.value = value;
        } else if (attrType !== 'bind') {
          el.checked = checkedAttrLooseCompare(el.value, value);
        }
      } else if (el.type === 'checkbox') {
        // If we are explicitly binding a string to the :value, set the string,
        // If the value is a boolean, leave it alone, it will be set to "on"
        // automatically.
        if (typeof value !== 'boolean' && ![null, undefined].includes(value) && attrType === 'bind') {
          el.value = String(value);
        } else if (attrType !== 'bind') {
          if (Array.isArray(value)) {
            // I'm purposely not using Array.includes here because it's
            // strict, and because of Numeric/String mis-casting, I
            // want the "includes" to be "fuzzy".
            el.checked = value.some(val => checkedAttrLooseCompare(val, el.value));
          } else {
            el.checked = !!value;
          }
        }
      } else if (el.tagName === 'SELECT') {
        updateSelect(el, value);
      } else {
        if (el.value === value) return;
        el.value = value;
      }
    } else if (attrName === 'class') {
      if (Array.isArray(value)) {
        const originalClasses = el.__x_original_classes || [];
        el.setAttribute('class', arrayUnique(originalClasses.concat(value)).join(' '));
      } else if (typeof value === 'object') {
        // Sorting the keys / class names by their boolean value will ensure that
        // anything that evaluates to `false` and needs to remove classes is run first.
        const keysSortedByBooleanValue = Object.keys(value).sort((a, b) => value[a] - value[b]);
        keysSortedByBooleanValue.forEach(classNames => {
          if (value[classNames]) {
            convertClassStringToArray(classNames).forEach(className => el.classList.add(className));
          } else {
            convertClassStringToArray(classNames).forEach(className => el.classList.remove(className));
          }
        });
      } else {
        const originalClasses = el.__x_original_classes || [];
        const newClasses = value ? convertClassStringToArray(value) : [];
        el.setAttribute('class', arrayUnique(originalClasses.concat(newClasses)).join(' '));
      }
    } else {
      attrName = modifiers.includes('camel') ? camelCase(attrName) : attrName; // If an attribute's bound value is null, undefined or false, remove the attribute

      if ([null, undefined, false].includes(value)) {
        el.removeAttribute(attrName);
      } else {
        isBooleanAttr(attrName) ? setIfChanged(el, attrName, attrName) : setIfChanged(el, attrName, value);
      }
    }
  }

  function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) {
      el.setAttribute(attrName, value);
    }
  }

  function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map(value => {
      return value + '';
    });
    Array.from(el.options).forEach(option => {
      option.selected = arrayWrappedValue.includes(option.value || option.text);
    });
  }

  function handleTextDirective(el, output, expression) {
    // If nested model key is undefined, set the default value to empty string.
    if (output === undefined && String(expression).match(/\./)) {
      output = '';
    }

    el.textContent = output;
  }

  function handleHtmlDirective(component, el, expression, extraVars) {
    el.innerHTML = component.evaluateReturnExpression(el, expression, extraVars);
  }

  function handleShowDirective(component, el, value, modifiers, initialUpdate = false) {
    const hide = () => {
      el.style.display = 'none';
      el.__x_is_shown = false;
    };

    const show = () => {
      if (el.style.length === 1 && el.style.display === 'none') {
        el.removeAttribute('style');
      } else {
        el.style.removeProperty('display');
      }

      el.__x_is_shown = true;
    };

    if (initialUpdate === true) {
      if (value) {
        show();
      } else {
        hide();
      }

      return;
    }

    const handle = (resolve, reject) => {
      if (value) {
        if (el.style.display === 'none' || el.__x_transition) {
          transitionIn(el, () => {
            show();
          }, reject, component);
        }

        resolve(() => {});
      } else {
        if (el.style.display !== 'none') {
          transitionOut(el, () => {
            resolve(() => {
              hide();
            });
          }, reject, component);
        } else {
          resolve(() => {});
        }
      }
    }; // The working of x-show is a bit complex because we need to
    // wait for any child transitions to finish before hiding
    // some element. Also, this has to be done recursively.
    // If x-show.immediate, foregoe the waiting.


    if (modifiers.includes('immediate')) {
      handle(finish => finish(), () => {});
      return;
    } // x-show is encountered during a DOM tree walk. If an element
    // we encounter is NOT a child of another x-show element we
    // can execute the previous x-show stack (if one exists).


    if (component.showDirectiveLastElement && !component.showDirectiveLastElement.contains(el)) {
      component.executeAndClearRemainingShowDirectiveStack();
    }

    component.showDirectiveStack.push(handle);
    component.showDirectiveLastElement = el;
  }

  function handleIfDirective(component, el, expressionResult, initialUpdate, extraVars) {
    warnIfMalformedTemplate(el, 'x-if');
    const elementHasAlreadyBeenAdded = el.nextElementSibling && el.nextElementSibling.__x_inserted_me === true;

    if (expressionResult && (!elementHasAlreadyBeenAdded || el.__x_transition)) {
      const clone = document.importNode(el.content, true);
      el.parentElement.insertBefore(clone, el.nextElementSibling);
      transitionIn(el.nextElementSibling, () => {}, () => {}, component, initialUpdate);
      component.initializeElements(el.nextElementSibling, extraVars);
      el.nextElementSibling.__x_inserted_me = true;
    } else if (!expressionResult && elementHasAlreadyBeenAdded) {
      transitionOut(el.nextElementSibling, () => {
        el.nextElementSibling.remove();
      }, () => {}, component, initialUpdate);
    }
  }

  function registerListener(component, el, event, modifiers, expression, extraVars = {}) {
    const options = {
      passive: modifiers.includes('passive')
    };

    if (modifiers.includes('camel')) {
      event = camelCase(event);
    }

    let handler, listenerTarget;

    if (modifiers.includes('away')) {
      listenerTarget = document;

      handler = e => {
        // Don't do anything if the click came from the element or within it.
        if (el.contains(e.target)) return; // Don't do anything if this element isn't currently visible.

        if (el.offsetWidth < 1 && el.offsetHeight < 1) return; // Now that we are sure the element is visible, AND the click
        // is from outside it, let's run the expression.

        runListenerHandler(component, expression, e, extraVars);

        if (modifiers.includes('once')) {
          document.removeEventListener(event, handler, options);
        }
      };
    } else {
      listenerTarget = modifiers.includes('window') ? window : modifiers.includes('document') ? document : el;

      handler = e => {
        // Remove this global event handler if the element that declared it
        // has been removed. It's now stale.
        if (listenerTarget === window || listenerTarget === document) {
          if (!document.body.contains(el)) {
            listenerTarget.removeEventListener(event, handler, options);
            return;
          }
        }

        if (isKeyEvent(event)) {
          if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
            return;
          }
        }

        if (modifiers.includes('prevent')) e.preventDefault();
        if (modifiers.includes('stop')) e.stopPropagation(); // If the .self modifier isn't present, or if it is present and
        // the target element matches the element we are registering the
        // event on, run the handler

        if (!modifiers.includes('self') || e.target === el) {
          const returnValue = runListenerHandler(component, expression, e, extraVars);
          returnValue.then(value => {
            if (value === false) {
              e.preventDefault();
            } else {
              if (modifiers.includes('once')) {
                listenerTarget.removeEventListener(event, handler, options);
              }
            }
          });
        }
      };
    }

    if (modifiers.includes('debounce')) {
      let nextModifier = modifiers[modifiers.indexOf('debounce') + 1] || 'invalid-wait';
      let wait = isNumeric(nextModifier.split('ms')[0]) ? Number(nextModifier.split('ms')[0]) : 250;
      handler = debounce(handler, wait);
    }

    listenerTarget.addEventListener(event, handler, options);
  }

  function runListenerHandler(component, expression, e, extraVars) {
    return component.evaluateCommandExpression(e.target, expression, () => {
      return _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        '$event': e
      });
    });
  }

  function isKeyEvent(event) {
    return ['keydown', 'keyup'].includes(event);
  }

  function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
    let keyModifiers = modifiers.filter(i => {
      return !['window', 'document', 'prevent', 'stop'].includes(i);
    });

    if (keyModifiers.includes('debounce')) {
      let debounceIndex = keyModifiers.indexOf('debounce');
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || 'invalid-wait').split('ms')[0]) ? 2 : 1);
    } // If no modifier is specified, we'll call it a press.


    if (keyModifiers.length === 0) return false; // If one is passed, AND it matches the key pressed, we'll call it a press.

    if (keyModifiers.length === 1 && keyModifiers[0] === keyToModifier(e.key)) return false; // The user is listening for key combinations.

    const systemKeyModifiers = ['ctrl', 'shift', 'alt', 'meta', 'cmd', 'super'];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter(modifier => keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter(i => !selectedSystemKeyModifiers.includes(i));

    if (selectedSystemKeyModifiers.length > 0) {
      const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter(modifier => {
        // Alias "cmd" and "super" to "meta"
        if (modifier === 'cmd' || modifier === 'super') modifier = 'meta';
        return e[`${modifier}Key`];
      }); // If all the modifiers selected are pressed, ...

      if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
        // AND the remaining key is pressed as well. It's a press.
        if (keyModifiers[0] === keyToModifier(e.key)) return false;
      }
    } // We'll call it NOT a valid keypress.


    return true;
  }

  function keyToModifier(key) {
    switch (key) {
      case '/':
        return 'slash';

      case ' ':
      case 'Spacebar':
        return 'space';

      default:
        return key && kebabCase(key);
    }
  }

  function registerModelListener(component, el, modifiers, expression, extraVars) {
    // If the element we are binding to is a select, a radio, or checkbox
    // we'll listen for the change event instead of the "input" event.
    var event = el.tagName.toLowerCase() === 'select' || ['checkbox', 'radio'].includes(el.type) || modifiers.includes('lazy') ? 'change' : 'input';
    const listenerExpression = `${expression} = rightSideOfExpression($event, ${expression})`;
    registerListener(component, el, event, modifiers, listenerExpression, () => {
      return _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        rightSideOfExpression: generateModelAssignmentFunction(el, modifiers, expression)
      });
    });
  }

  function generateModelAssignmentFunction(el, modifiers, expression) {
    if (el.type === 'radio') {
      // Radio buttons only work properly when they share a name attribute.
      // People might assume we take care of that for them, because
      // they already set a shared "x-model" attribute.
      if (!el.hasAttribute('name')) el.setAttribute('name', expression);
    }

    return (event, currentValue) => {
      // Check for event.detail due to an issue where IE11 handles other events as a CustomEvent.
      if (event instanceof CustomEvent && event.detail) {
        return event.detail;
      } else if (el.type === 'checkbox') {
        // If the data we are binding to is an array, toggle its value inside the array.
        if (Array.isArray(currentValue)) {
          const newValue = modifiers.includes('number') ? safeParseNumber(event.target.value) : event.target.value;
          return event.target.checked ? currentValue.concat([newValue]) : currentValue.filter(el => !checkedAttrLooseCompare(el, newValue));
        } else {
          return event.target.checked;
        }
      } else if (el.tagName.toLowerCase() === 'select' && el.multiple) {
        return modifiers.includes('number') ? Array.from(event.target.selectedOptions).map(option => {
          const rawValue = option.value || option.text;
          return safeParseNumber(rawValue);
        }) : Array.from(event.target.selectedOptions).map(option => {
          return option.value || option.text;
        });
      } else {
        const rawValue = event.target.value;
        return modifiers.includes('number') ? safeParseNumber(rawValue) : modifiers.includes('trim') ? rawValue.trim() : rawValue;
      }
    };
  }

  function safeParseNumber(rawValue) {
    const number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric(number) ? number : rawValue;
  }

  /**
   * Copyright (C) 2017 salesforce.com, inc.
   */
  const { isArray } = Array;
  const { getPrototypeOf, create: ObjectCreate, defineProperty: ObjectDefineProperty, defineProperties: ObjectDefineProperties, isExtensible, getOwnPropertyDescriptor, getOwnPropertyNames, getOwnPropertySymbols, preventExtensions, hasOwnProperty, } = Object;
  const { push: ArrayPush, concat: ArrayConcat, map: ArrayMap, } = Array.prototype;
  function isUndefined(obj) {
      return obj === undefined;
  }
  function isFunction(obj) {
      return typeof obj === 'function';
  }
  function isObject(obj) {
      return typeof obj === 'object';
  }
  const proxyToValueMap = new WeakMap();
  function registerProxy(proxy, value) {
      proxyToValueMap.set(proxy, value);
  }
  const unwrap = (replicaOrAny) => proxyToValueMap.get(replicaOrAny) || replicaOrAny;

  function wrapValue(membrane, value) {
      return membrane.valueIsObservable(value) ? membrane.getProxy(value) : value;
  }
  /**
   * Unwrap property descriptors will set value on original descriptor
   * We only need to unwrap if value is specified
   * @param descriptor external descrpitor provided to define new property on original value
   */
  function unwrapDescriptor(descriptor) {
      if (hasOwnProperty.call(descriptor, 'value')) {
          descriptor.value = unwrap(descriptor.value);
      }
      return descriptor;
  }
  function lockShadowTarget(membrane, shadowTarget, originalTarget) {
      const targetKeys = ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      targetKeys.forEach((key) => {
          let descriptor = getOwnPropertyDescriptor(originalTarget, key);
          // We do not need to wrap the descriptor if configurable
          // Because we can deal with wrapping it when user goes through
          // Get own property descriptor. There is also a chance that this descriptor
          // could change sometime in the future, so we can defer wrapping
          // until we need to
          if (!descriptor.configurable) {
              descriptor = wrapDescriptor(membrane, descriptor, wrapValue);
          }
          ObjectDefineProperty(shadowTarget, key, descriptor);
      });
      preventExtensions(shadowTarget);
  }
  class ReactiveProxyHandler {
      constructor(membrane, value) {
          this.originalTarget = value;
          this.membrane = membrane;
      }
      get(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const value = originalTarget[key];
          const { valueObserved } = membrane;
          valueObserved(originalTarget, key);
          return membrane.getProxy(value);
      }
      set(shadowTarget, key, value) {
          const { originalTarget, membrane: { valueMutated } } = this;
          const oldValue = originalTarget[key];
          if (oldValue !== value) {
              originalTarget[key] = value;
              valueMutated(originalTarget, key);
          }
          else if (key === 'length' && isArray(originalTarget)) {
              // fix for issue #236: push will add the new index, and by the time length
              // is updated, the internal length is already equal to the new length value
              // therefore, the oldValue is equal to the value. This is the forking logic
              // to support this use case.
              valueMutated(originalTarget, key);
          }
          return true;
      }
      deleteProperty(shadowTarget, key) {
          const { originalTarget, membrane: { valueMutated } } = this;
          delete originalTarget[key];
          valueMutated(originalTarget, key);
          return true;
      }
      apply(shadowTarget, thisArg, argArray) {
          /* No op */
      }
      construct(target, argArray, newTarget) {
          /* No op */
      }
      has(shadowTarget, key) {
          const { originalTarget, membrane: { valueObserved } } = this;
          valueObserved(originalTarget, key);
          return key in originalTarget;
      }
      ownKeys(shadowTarget) {
          const { originalTarget } = this;
          return ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      }
      isExtensible(shadowTarget) {
          const shadowIsExtensible = isExtensible(shadowTarget);
          if (!shadowIsExtensible) {
              return shadowIsExtensible;
          }
          const { originalTarget, membrane } = this;
          const targetIsExtensible = isExtensible(originalTarget);
          if (!targetIsExtensible) {
              lockShadowTarget(membrane, shadowTarget, originalTarget);
          }
          return targetIsExtensible;
      }
      setPrototypeOf(shadowTarget, prototype) {
      }
      getPrototypeOf(shadowTarget) {
          const { originalTarget } = this;
          return getPrototypeOf(originalTarget);
      }
      getOwnPropertyDescriptor(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const { valueObserved } = this.membrane;
          // keys looked up via hasOwnProperty need to be reactive
          valueObserved(originalTarget, key);
          let desc = getOwnPropertyDescriptor(originalTarget, key);
          if (isUndefined(desc)) {
              return desc;
          }
          const shadowDescriptor = getOwnPropertyDescriptor(shadowTarget, key);
          if (!isUndefined(shadowDescriptor)) {
              return shadowDescriptor;
          }
          // Note: by accessing the descriptor, the key is marked as observed
          // but access to the value, setter or getter (if available) cannot observe
          // mutations, just like regular methods, in which case we just do nothing.
          desc = wrapDescriptor(membrane, desc, wrapValue);
          if (!desc.configurable) {
              // If descriptor from original target is not configurable,
              // We must copy the wrapped descriptor over to the shadow target.
              // Otherwise, proxy will throw an invariant error.
              // This is our last chance to lock the value.
              // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
              ObjectDefineProperty(shadowTarget, key, desc);
          }
          return desc;
      }
      preventExtensions(shadowTarget) {
          const { originalTarget, membrane } = this;
          lockShadowTarget(membrane, shadowTarget, originalTarget);
          preventExtensions(originalTarget);
          return true;
      }
      defineProperty(shadowTarget, key, descriptor) {
          const { originalTarget, membrane } = this;
          const { valueMutated } = membrane;
          const { configurable } = descriptor;
          // We have to check for value in descriptor
          // because Object.freeze(proxy) calls this method
          // with only { configurable: false, writeable: false }
          // Additionally, method will only be called with writeable:false
          // if the descriptor has a value, as opposed to getter/setter
          // So we can just check if writable is present and then see if
          // value is present. This eliminates getter and setter descriptors
          if (hasOwnProperty.call(descriptor, 'writable') && !hasOwnProperty.call(descriptor, 'value')) {
              const originalDescriptor = getOwnPropertyDescriptor(originalTarget, key);
              descriptor.value = originalDescriptor.value;
          }
          ObjectDefineProperty(originalTarget, key, unwrapDescriptor(descriptor));
          if (configurable === false) {
              ObjectDefineProperty(shadowTarget, key, wrapDescriptor(membrane, descriptor, wrapValue));
          }
          valueMutated(originalTarget, key);
          return true;
      }
  }

  function wrapReadOnlyValue(membrane, value) {
      return membrane.valueIsObservable(value) ? membrane.getReadOnlyProxy(value) : value;
  }
  class ReadOnlyHandler {
      constructor(membrane, value) {
          this.originalTarget = value;
          this.membrane = membrane;
      }
      get(shadowTarget, key) {
          const { membrane, originalTarget } = this;
          const value = originalTarget[key];
          const { valueObserved } = membrane;
          valueObserved(originalTarget, key);
          return membrane.getReadOnlyProxy(value);
      }
      set(shadowTarget, key, value) {
          return false;
      }
      deleteProperty(shadowTarget, key) {
          return false;
      }
      apply(shadowTarget, thisArg, argArray) {
          /* No op */
      }
      construct(target, argArray, newTarget) {
          /* No op */
      }
      has(shadowTarget, key) {
          const { originalTarget, membrane: { valueObserved } } = this;
          valueObserved(originalTarget, key);
          return key in originalTarget;
      }
      ownKeys(shadowTarget) {
          const { originalTarget } = this;
          return ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      }
      setPrototypeOf(shadowTarget, prototype) {
      }
      getOwnPropertyDescriptor(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const { valueObserved } = membrane;
          // keys looked up via hasOwnProperty need to be reactive
          valueObserved(originalTarget, key);
          let desc = getOwnPropertyDescriptor(originalTarget, key);
          if (isUndefined(desc)) {
              return desc;
          }
          const shadowDescriptor = getOwnPropertyDescriptor(shadowTarget, key);
          if (!isUndefined(shadowDescriptor)) {
              return shadowDescriptor;
          }
          // Note: by accessing the descriptor, the key is marked as observed
          // but access to the value or getter (if available) cannot be observed,
          // just like regular methods, in which case we just do nothing.
          desc = wrapDescriptor(membrane, desc, wrapReadOnlyValue);
          if (hasOwnProperty.call(desc, 'set')) {
              desc.set = undefined; // readOnly membrane does not allow setters
          }
          if (!desc.configurable) {
              // If descriptor from original target is not configurable,
              // We must copy the wrapped descriptor over to the shadow target.
              // Otherwise, proxy will throw an invariant error.
              // This is our last chance to lock the value.
              // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
              ObjectDefineProperty(shadowTarget, key, desc);
          }
          return desc;
      }
      preventExtensions(shadowTarget) {
          return false;
      }
      defineProperty(shadowTarget, key, descriptor) {
          return false;
      }
  }
  function createShadowTarget(value) {
      let shadowTarget = undefined;
      if (isArray(value)) {
          shadowTarget = [];
      }
      else if (isObject(value)) {
          shadowTarget = {};
      }
      return shadowTarget;
  }
  const ObjectDotPrototype = Object.prototype;
  function defaultValueIsObservable(value) {
      // intentionally checking for null
      if (value === null) {
          return false;
      }
      // treat all non-object types, including undefined, as non-observable values
      if (typeof value !== 'object') {
          return false;
      }
      if (isArray(value)) {
          return true;
      }
      const proto = getPrototypeOf(value);
      return (proto === ObjectDotPrototype || proto === null || getPrototypeOf(proto) === null);
  }
  const defaultValueObserved = (obj, key) => {
      /* do nothing */
  };
  const defaultValueMutated = (obj, key) => {
      /* do nothing */
  };
  const defaultValueDistortion = (value) => value;
  function wrapDescriptor(membrane, descriptor, getValue) {
      const { set, get } = descriptor;
      if (hasOwnProperty.call(descriptor, 'value')) {
          descriptor.value = getValue(membrane, descriptor.value);
      }
      else {
          if (!isUndefined(get)) {
              descriptor.get = function () {
                  // invoking the original getter with the original target
                  return getValue(membrane, get.call(unwrap(this)));
              };
          }
          if (!isUndefined(set)) {
              descriptor.set = function (value) {
                  // At this point we don't have a clear indication of whether
                  // or not a valid mutation will occur, we don't have the key,
                  // and we are not sure why and how they are invoking this setter.
                  // Nevertheless we preserve the original semantics by invoking the
                  // original setter with the original target and the unwrapped value
                  set.call(unwrap(this), membrane.unwrapProxy(value));
              };
          }
      }
      return descriptor;
  }
  class ReactiveMembrane {
      constructor(options) {
          this.valueDistortion = defaultValueDistortion;
          this.valueMutated = defaultValueMutated;
          this.valueObserved = defaultValueObserved;
          this.valueIsObservable = defaultValueIsObservable;
          this.objectGraph = new WeakMap();
          if (!isUndefined(options)) {
              const { valueDistortion, valueMutated, valueObserved, valueIsObservable } = options;
              this.valueDistortion = isFunction(valueDistortion) ? valueDistortion : defaultValueDistortion;
              this.valueMutated = isFunction(valueMutated) ? valueMutated : defaultValueMutated;
              this.valueObserved = isFunction(valueObserved) ? valueObserved : defaultValueObserved;
              this.valueIsObservable = isFunction(valueIsObservable) ? valueIsObservable : defaultValueIsObservable;
          }
      }
      getProxy(value) {
          const unwrappedValue = unwrap(value);
          const distorted = this.valueDistortion(unwrappedValue);
          if (this.valueIsObservable(distorted)) {
              const o = this.getReactiveState(unwrappedValue, distorted);
              // when trying to extract the writable version of a readonly
              // we return the readonly.
              return o.readOnly === value ? value : o.reactive;
          }
          return distorted;
      }
      getReadOnlyProxy(value) {
          value = unwrap(value);
          const distorted = this.valueDistortion(value);
          if (this.valueIsObservable(distorted)) {
              return this.getReactiveState(value, distorted).readOnly;
          }
          return distorted;
      }
      unwrapProxy(p) {
          return unwrap(p);
      }
      getReactiveState(value, distortedValue) {
          const { objectGraph, } = this;
          let reactiveState = objectGraph.get(distortedValue);
          if (reactiveState) {
              return reactiveState;
          }
          const membrane = this;
          reactiveState = {
              get reactive() {
                  const reactiveHandler = new ReactiveProxyHandler(membrane, distortedValue);
                  // caching the reactive proxy after the first time it is accessed
                  const proxy = new Proxy(createShadowTarget(distortedValue), reactiveHandler);
                  registerProxy(proxy, value);
                  ObjectDefineProperty(this, 'reactive', { value: proxy });
                  return proxy;
              },
              get readOnly() {
                  const readOnlyHandler = new ReadOnlyHandler(membrane, distortedValue);
                  // caching the readOnly proxy after the first time it is accessed
                  const proxy = new Proxy(createShadowTarget(distortedValue), readOnlyHandler);
                  registerProxy(proxy, value);
                  ObjectDefineProperty(this, 'readOnly', { value: proxy });
                  return proxy;
              }
          };
          objectGraph.set(distortedValue, reactiveState);
          return reactiveState;
      }
  }
  /** version: 0.26.0 */

  function wrap(data, mutationCallback) {

    let membrane = new ReactiveMembrane({
      valueMutated(target, key) {
        mutationCallback(target, key);
      }

    });
    return {
      data: membrane.getProxy(data),
      membrane: membrane
    };
  }
  function unwrap$1(membrane, observable) {
    let unwrappedData = membrane.unwrapProxy(observable);
    let copy = {};
    Object.keys(unwrappedData).forEach(key => {
      if (['$el', '$refs', '$nextTick', '$watch'].includes(key)) return;
      copy[key] = unwrappedData[key];
    });
    return copy;
  }

  class Component {
    constructor(el, componentForClone = null) {
      this.$el = el;
      const dataAttr = this.$el.getAttribute('x-data');
      const dataExpression = dataAttr === '' ? '{}' : dataAttr;
      const initExpression = this.$el.getAttribute('x-init');
      let dataExtras = {
        $el: this.$el
      };
      let canonicalComponentElementReference = componentForClone ? componentForClone.$el : this.$el;
      Object.entries(Alpine.magicProperties).forEach(([name, callback]) => {
        Object.defineProperty(dataExtras, `$${name}`, {
          get: function get() {
            return callback(canonicalComponentElementReference);
          }
        });
      });
      this.unobservedData = componentForClone ? componentForClone.getUnobservedData() : saferEval(el, dataExpression, dataExtras);
      // Construct a Proxy-based observable. This will be used to handle reactivity.

      let {
        membrane,
        data
      } = this.wrapDataInObservable(this.unobservedData);
      this.$data = data;
      this.membrane = membrane; // After making user-supplied data methods reactive, we can now add
      // our magic properties to the original data for access.

      this.unobservedData.$el = this.$el;
      this.unobservedData.$refs = this.getRefsProxy();
      this.nextTickStack = [];

      this.unobservedData.$nextTick = callback => {
        this.nextTickStack.push(callback);
      };

      this.watchers = {};

      this.unobservedData.$watch = (property, callback) => {
        if (!this.watchers[property]) this.watchers[property] = [];
        this.watchers[property].push(callback);
      };
      /* MODERN-ONLY:START */
      // We remove this piece of code from the legacy build.
      // In IE11, we have already defined our helpers at this point.
      // Register custom magic properties.


      Object.entries(Alpine.magicProperties).forEach(([name, callback]) => {
        Object.defineProperty(this.unobservedData, `$${name}`, {
          get: function get() {
            return callback(canonicalComponentElementReference, this.$el);
          }
        });
      });
      /* MODERN-ONLY:END */

      this.showDirectiveStack = [];
      this.showDirectiveLastElement;
      componentForClone || Alpine.onBeforeComponentInitializeds.forEach(callback => callback(this));
      var initReturnedCallback; // If x-init is present AND we aren't cloning (skip x-init on clone)

      if (initExpression && !componentForClone) {
        // We want to allow data manipulation, but not trigger DOM updates just yet.
        // We haven't even initialized the elements with their Alpine bindings. I mean c'mon.
        this.pauseReactivity = true;
        initReturnedCallback = this.evaluateReturnExpression(this.$el, initExpression);
        this.pauseReactivity = false;
      } // Register all our listeners and set all our attribute bindings.
      // If we're cloning a component, the third parameter ensures no duplicate
      // event listeners are registered (the mutation observer will take care of them)


      this.initializeElements(this.$el, () => {}, componentForClone ? false : true); // Use mutation observer to detect new elements being added within this component at run-time.
      // Alpine's just so darn flexible amirite?

      this.listenForNewElementsToInitialize();

      if (typeof initReturnedCallback === 'function') {
        // Run the callback returned from the "x-init" hook to allow the user to do stuff after
        // Alpine's got it's grubby little paws all over everything.
        initReturnedCallback.call(this.$data);
      }

      componentForClone || setTimeout(() => {
        Alpine.onComponentInitializeds.forEach(callback => callback(this));
      }, 0);
    }

    getUnobservedData() {
      return unwrap$1(this.membrane, this.$data);
    }

    wrapDataInObservable(data) {
      var self = this;
      let updateDom = debounce(function () {
        self.updateElements(self.$el);
      }, 0);
      return wrap(data, (target, key) => {
        if (self.watchers[key]) {
          // If there's a watcher for this specific key, run it.
          self.watchers[key].forEach(callback => callback(target[key]));
        } else if (Array.isArray(target)) {
          // Arrays are special cases, if any of the items change, we consider the array as mutated.
          Object.keys(self.watchers).forEach(fullDotNotationKey => {
            let dotNotationParts = fullDotNotationKey.split('.'); // Ignore length mutations since they would result in duplicate calls.
            // For example, when calling push, we would get a mutation for the item's key
            // and a second mutation for the length property.

            if (key === 'length') return;
            dotNotationParts.reduce((comparisonData, part) => {
              if (Object.is(target, comparisonData[part])) {
                self.watchers[fullDotNotationKey].forEach(callback => callback(target));
              }

              return comparisonData[part];
            }, self.unobservedData);
          });
        } else {
          // Let's walk through the watchers with "dot-notation" (foo.bar) and see
          // if this mutation fits any of them.
          Object.keys(self.watchers).filter(i => i.includes('.')).forEach(fullDotNotationKey => {
            let dotNotationParts = fullDotNotationKey.split('.'); // If this dot-notation watcher's last "part" doesn't match the current
            // key, then skip it early for performance reasons.

            if (key !== dotNotationParts[dotNotationParts.length - 1]) return; // Now, walk through the dot-notation "parts" recursively to find
            // a match, and call the watcher if one's found.

            dotNotationParts.reduce((comparisonData, part) => {
              if (Object.is(target, comparisonData)) {
                // Run the watchers.
                self.watchers[fullDotNotationKey].forEach(callback => callback(target[key]));
              }

              return comparisonData[part];
            }, self.unobservedData);
          });
        } // Don't react to data changes for cases like the `x-created` hook.


        if (self.pauseReactivity) return;
        updateDom();
      });
    }

    walkAndSkipNestedComponents(el, callback, initializeComponentCallback = () => {}) {
      walk(el, el => {
        // We've hit a component.
        if (el.hasAttribute('x-data')) {
          // If it's not the current one.
          if (!el.isSameNode(this.$el)) {
            // Initialize it if it's not.
            if (!el.__x) initializeComponentCallback(el); // Now we'll let that sub-component deal with itself.

            return false;
          }
        }

        return callback(el);
      });
    }

    initializeElements(rootEl, extraVars = () => {}, shouldRegisterListeners = true) {
      this.walkAndSkipNestedComponents(rootEl, el => {
        // Don't touch spawns from for loop
        if (el.__x_for_key !== undefined) return false; // Don't touch spawns from if directives

        if (el.__x_inserted_me !== undefined) return false;
        this.initializeElement(el, extraVars, shouldRegisterListeners);
      }, el => {
        el.__x = new Component(el);
      });
      this.executeAndClearRemainingShowDirectiveStack();
      this.executeAndClearNextTickStack(rootEl);
    }

    initializeElement(el, extraVars, shouldRegisterListeners = true) {
      // To support class attribute merging, we have to know what the element's
      // original class attribute looked like for reference.
      if (el.hasAttribute('class') && getXAttrs(el, this).length > 0) {
        el.__x_original_classes = convertClassStringToArray(el.getAttribute('class'));
      }

      shouldRegisterListeners && this.registerListeners(el, extraVars);
      this.resolveBoundAttributes(el, true, extraVars);
    }

    updateElements(rootEl, extraVars = () => {}) {
      this.walkAndSkipNestedComponents(rootEl, el => {
        // Don't touch spawns from for loop (and check if the root is actually a for loop in a parent, don't skip it.)
        if (el.__x_for_key !== undefined && !el.isSameNode(this.$el)) return false;
        this.updateElement(el, extraVars);
      }, el => {
        el.__x = new Component(el);
      });
      this.executeAndClearRemainingShowDirectiveStack();
      this.executeAndClearNextTickStack(rootEl);
    }

    executeAndClearNextTickStack(el) {
      // Skip spawns from alpine directives
      if (el === this.$el && this.nextTickStack.length > 0) {
        // We run the tick stack after the next frame to allow any
        // running transitions to pass the initial show stage.
        requestAnimationFrame(() => {
          while (this.nextTickStack.length > 0) {
            this.nextTickStack.shift()();
          }
        });
      }
    }

    executeAndClearRemainingShowDirectiveStack() {
      // The goal here is to start all the x-show transitions
      // and build a nested promise chain so that elements
      // only hide when the children are finished hiding.
      this.showDirectiveStack.reverse().map(handler => {
        return new Promise((resolve, reject) => {
          handler(resolve, reject);
        });
      }).reduce((promiseChain, promise) => {
        return promiseChain.then(() => {
          return promise.then(finishElement => {
            finishElement();
          });
        });
      }, Promise.resolve(() => {})).catch(e => {
        if (e !== TRANSITION_CANCELLED) throw e;
      }); // We've processed the handler stack. let's clear it.

      this.showDirectiveStack = [];
      this.showDirectiveLastElement = undefined;
    }

    updateElement(el, extraVars) {
      this.resolveBoundAttributes(el, false, extraVars);
    }

    registerListeners(el, extraVars) {
      getXAttrs(el, this).forEach(({
        type,
        value,
        modifiers,
        expression
      }) => {
        switch (type) {
          case 'on':
            registerListener(this, el, value, modifiers, expression, extraVars);
            break;

          case 'model':
            registerModelListener(this, el, modifiers, expression, extraVars);
            break;
        }
      });
    }

    resolveBoundAttributes(el, initialUpdate = false, extraVars) {
      let attrs = getXAttrs(el, this);
      attrs.forEach(({
        type,
        value,
        modifiers,
        expression
      }) => {
        switch (type) {
          case 'model':
            handleAttributeBindingDirective(this, el, 'value', expression, extraVars, type, modifiers);
            break;

          case 'bind':
            // The :key binding on an x-for is special, ignore it.
            if (el.tagName.toLowerCase() === 'template' && value === 'key') return;
            handleAttributeBindingDirective(this, el, value, expression, extraVars, type, modifiers);
            break;

          case 'text':
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleTextDirective(el, output, expression);
            break;

          case 'html':
            handleHtmlDirective(this, el, expression, extraVars);
            break;

          case 'show':
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleShowDirective(this, el, output, modifiers, initialUpdate);
            break;

          case 'if':
            // If this element also has x-for on it, don't process x-if.
            // We will let the "x-for" directive handle the "if"ing.
            if (attrs.some(i => i.type === 'for')) return;
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleIfDirective(this, el, output, initialUpdate, extraVars);
            break;

          case 'for':
            handleForDirective(this, el, expression, initialUpdate, extraVars);
            break;

          case 'cloak':
            el.removeAttribute('x-cloak');
            break;
        }
      });
    }

    evaluateReturnExpression(el, expression, extraVars = () => {}) {
      return saferEval(el, expression, this.$data, _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        $dispatch: this.getDispatchFunction(el)
      }));
    }

    evaluateCommandExpression(el, expression, extraVars = () => {}) {
      return saferEvalNoReturn(el, expression, this.$data, _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        $dispatch: this.getDispatchFunction(el)
      }));
    }

    getDispatchFunction(el) {
      return (event, detail = {}) => {
        el.dispatchEvent(new CustomEvent(event, {
          detail,
          bubbles: true
        }));
      };
    }

    listenForNewElementsToInitialize() {
      const targetNode = this.$el;
      const observerOptions = {
        childList: true,
        attributes: true,
        subtree: true
      };
      const observer = new MutationObserver(mutations => {
        for (let i = 0; i < mutations.length; i++) {
          // Filter out mutations triggered from child components.
          const closestParentComponent = mutations[i].target.closest('[x-data]');
          if (!(closestParentComponent && closestParentComponent.isSameNode(this.$el))) continue;

          if (mutations[i].type === 'attributes' && mutations[i].attributeName === 'x-data') {
            const xAttr = mutations[i].target.getAttribute('x-data') || '{}';
            const rawData = saferEval(this.$el, xAttr, {
              $el: this.$el
            });
            Object.keys(rawData).forEach(key => {
              if (this.$data[key] !== rawData[key]) {
                this.$data[key] = rawData[key];
              }
            });
          }

          if (mutations[i].addedNodes.length > 0) {
            mutations[i].addedNodes.forEach(node => {
              if (node.nodeType !== 1 || node.__x_inserted_me) return;

              if (node.matches('[x-data]') && !node.__x) {
                node.__x = new Component(node);
                return;
              }

              this.initializeElements(node);
            });
          }
        }
      });
      observer.observe(targetNode, observerOptions);
    }

    getRefsProxy() {
      var self = this;
      var refObj = {};
      // One of the goals of this is to not hold elements in memory, but rather re-evaluate
      // the DOM when the system needs something from it. This way, the framework is flexible and
      // friendly to outside DOM changes from libraries like Vue/Livewire.
      // For this reason, I'm using an "on-demand" proxy to fake a "$refs" object.

      return new Proxy(refObj, {
        get(object, property) {
          if (property === '$isAlpineProxy') return true;
          var ref; // We can't just query the DOM because it's hard to filter out refs in
          // nested components.

          self.walkAndSkipNestedComponents(self.$el, el => {
            if (el.hasAttribute('x-ref') && el.getAttribute('x-ref') === property) {
              ref = el;
            }
          });
          return ref;
        }

      });
    }

  }

  const Alpine = {
    version: "2.8.1",
    pauseMutationObserver: false,
    magicProperties: {},
    onComponentInitializeds: [],
    onBeforeComponentInitializeds: [],
    ignoreFocusedForValueBinding: false,
    start: async function start() {
      if (!isTesting()) {
        await domReady();
      }

      this.discoverComponents(el => {
        this.initializeComponent(el);
      }); // It's easier and more performant to just support Turbolinks than listen
      // to MutationObserver mutations at the document level.

      document.addEventListener("turbolinks:load", () => {
        this.discoverUninitializedComponents(el => {
          this.initializeComponent(el);
        });
      });
      this.listenForNewUninitializedComponentsAtRunTime();
    },
    discoverComponents: function discoverComponents(callback) {
      const rootEls = document.querySelectorAll('[x-data]');
      rootEls.forEach(rootEl => {
        callback(rootEl);
      });
    },
    discoverUninitializedComponents: function discoverUninitializedComponents(callback, el = null) {
      const rootEls = (el || document).querySelectorAll('[x-data]');
      Array.from(rootEls).filter(el => el.__x === undefined).forEach(rootEl => {
        callback(rootEl);
      });
    },
    listenForNewUninitializedComponentsAtRunTime: function listenForNewUninitializedComponentsAtRunTime() {
      const targetNode = document.querySelector('body');
      const observerOptions = {
        childList: true,
        attributes: true,
        subtree: true
      };
      const observer = new MutationObserver(mutations => {
        if (this.pauseMutationObserver) return;

        for (let i = 0; i < mutations.length; i++) {
          if (mutations[i].addedNodes.length > 0) {
            mutations[i].addedNodes.forEach(node => {
              // Discard non-element nodes (like line-breaks)
              if (node.nodeType !== 1) return; // Discard any changes happening within an existing component.
              // They will take care of themselves.

              if (node.parentElement && node.parentElement.closest('[x-data]')) return;
              this.discoverUninitializedComponents(el => {
                this.initializeComponent(el);
              }, node.parentElement);
            });
          }
        }
      });
      observer.observe(targetNode, observerOptions);
    },
    initializeComponent: function initializeComponent(el) {
      if (!el.__x) {
        // Wrap in a try/catch so that we don't prevent other components
        // from initializing when one component contains an error.
        try {
          el.__x = new Component(el);
        } catch (error) {
          setTimeout(() => {
            throw error;
          }, 0);
        }
      }
    },
    clone: function clone(component, newEl) {
      if (!newEl.__x) {
        newEl.__x = new Component(newEl, component);
      }
    },
    addMagicProperty: function addMagicProperty(name, callback) {
      this.magicProperties[name] = callback;
    },
    onComponentInitialized: function onComponentInitialized(callback) {
      this.onComponentInitializeds.push(callback);
    },
    onBeforeComponentInitialized: function onBeforeComponentInitialized(callback) {
      this.onBeforeComponentInitializeds.push(callback);
    }
  };

  if (!isTesting()) {
    window.Alpine = Alpine;

    if (window.deferLoadingAlpine) {
      window.deferLoadingAlpine(function () {
        window.Alpine.start();
      });
    } else {
      window.Alpine.start();
    }
  }

  return Alpine;

})));


/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/alpine.js");
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alpinejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/draggable */ "./node_modules/@shopify/draggable/lib/draggable.bundle.js");
/* harmony import */ var _shopify_draggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_draggable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var virtual_scroller_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! virtual-scroller/dom */ "./node_modules/virtual-scroller/modules/DOM/VirtualScroller.js");
/* harmony import */ var virtual_scroller_source_DOM_ScrollableContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! virtual-scroller/source/DOM/ScrollableContainer */ "./node_modules/virtual-scroller/source/DOM/ScrollableContainer.js");
/* harmony import */ var virtual_scroller_source_DOM_Screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! virtual-scroller/source/DOM/Screen */ "./node_modules/virtual-scroller/source/DOM/Screen.js");





window.language = 'de';

window.pokemonData = function () {
  return {
    pokemon: [],
    selectedPokemon: [],
    showImages: true,
    showModal: false,
    importIds: '',
    initPokemon: function initPokemon() {
      var _this = this;

      this.$watch('showImages', function (value) {
        _this.buildList();
      });
      fetch('resources/' + language + '.json').then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data) {
          _this.pokemon = data;

          _this.buildList();

          return;
        }

        return Promise.reject(response.data);
      })["catch"](function (error) {
        console.log('Failed to fetch pokemon...', error);
      });
      var sortable = new _shopify_draggable__WEBPACK_IMPORTED_MODULE_1__.Sortable(document.querySelector('ul#selectedItems'), {
        draggable: 'li'
      });
      sortable.on('sortable:stop', function (e) {
        setTimeout(function () {
          var sortedList = [];
          var listElements = document.querySelector('ul#selectedItems').querySelectorAll('li');
          listElements.forEach(function (element) {
            var id = parseInt(element.getAttribute('data-id'));

            var foundElement = _this.pokemon.filter(function (pokemon) {
              return parseInt(pokemon.id) === id;
            });

            if (foundElement.length > 0) {
              var item = foundElement[0];
              sortedList.push({
                id: item.id,
                name: item.name,
                gen: item.gen
              });
            }
          });
          _this.selectedPokemon = sortedList;
        }, 2);
      });
    },
    renderItem: function renderItem(item) {
      var _this2 = this;

      // Item element.
      var root = document.createElement('div');
      root.setAttribute('class', 'pokemon-item group hover:bg-green-500 relative');

      if (this.showImages) {
        // Item image.
        var img = document.createElement('img');
        img.setAttribute('src', "/img/".concat(item.id, ".png"));
        img.setAttribute('alt', item.name);
        img.setAttribute('class', 'h-16 w-16 object-fit');
        root.appendChild(img);
      } // Item name.


      var itemName = document.createElement('span');

      if (!this.showImages) {
        itemName.setAttribute('class', 'px-3 py-2');
      } else {
        itemName.setAttribute('class', 'pl-4 text-sm');
      }

      itemName.innerHTML = "<span class=\"text-green-600\">#".concat(item.id, "</span> ").concat(item.name);
      root.appendChild(itemName); // Item generation.

      var generation = document.createElement('span');
      generation.setAttribute('class', 'absolute rounded-full bg-green-500 text-xs text-green-900 px-2 py-1 right-0 mr-2');
      generation.textContent = "Generation ".concat(item.gen);
      root.appendChild(generation); // Item add.

      var add = document.createElement('button');
      add.setAttribute('class', 'hidden group-hover:flex w-full justify-center items-center absolute top-0 bottom-0 left-0 right-0 transform z-50 bg-primary-75 cursor-pointer');
      add.addEventListener('click', function (e) {
        e.preventDefault();

        var hasItem = _this2.selectedPokemon.filter(function (pokemon) {
          return parseInt(pokemon.id) === parseInt(item.id);
        });

        if (hasItem.length > 0) {
          console.log('Pokemon already added to list.');
          return;
        }

        _this2.selectedPokemon.push({
          id: item.id,
          name: item.name,
          gen: item.gen
        });

        _this2.appendItemToList(item);
      }); // Item add.

      var addButton = document.createElement('span');
      addButton.setAttribute('class', 'inline-block text-green-800 font-bold text-sm');
      addButton.textContent = "Add ".concat(item.name);
      add.appendChild(addButton);
      root.appendChild(add); // Return message element.

      return root;
    },
    buildList: function buildList() {
      document.getElementById("container") && document.getElementById("container").remove();
      this.buildContainer();
      var scrollableContainer = document.getElementById('itemContainer');
      var virtualScroller = new virtual_scroller_dom__WEBPACK_IMPORTED_MODULE_2__.default(document.getElementById('container'), this.pokemon, this.renderItem.bind(this), {
        scrollableContainer: scrollableContainer,
        renderingEngine: {
          name: 'Non-DOM Rendering Engine',
          createScreen: function createScreen() {
            return new virtual_scroller_source_DOM_Screen__WEBPACK_IMPORTED_MODULE_3__.default();
          },
          createScrollableContainer: function createScrollableContainer(scrollableContainer) {
            return new virtual_scroller_source_DOM_ScrollableContainer__WEBPACK_IMPORTED_MODULE_4__.default(scrollableContainer);
          }
        }
      });
    },
    buildContainer: function buildContainer() {
      var containerEl = document.createElement('div');
      containerEl.setAttribute('id', 'container');
      containerEl.setAttribute('class', '');
      document.getElementById('itemContainer').appendChild(containerEl);
    },
    appendItemToList: function appendItemToList(item) {
      var _this3 = this;

      var listItem = document.createElement('li');
      listItem.setAttribute('class', 'relative flex flex-row justify-start items-center min-w-64 group cursor-move');
      listItem.setAttribute('data-id', item.id);
      var img = document.createElement('img');
      img.setAttribute('src', "/img/".concat(item.id, ".png"));
      img.setAttribute('alt', item.name);
      img.setAttribute('class', 'h-16 w-16 object-fit mr-6');
      listItem.appendChild(img);
      var itemName = document.createElement('span');
      itemName.innerHTML = "<span class=\"text-green-600 inline-block w-12\">#".concat(item.id, "</span> ").concat(item.name); // Item generation.

      var generation = document.createElement('span');
      generation.setAttribute('class', 'absolute rounded-full bg-green-500 text-xs text-green-900 px-2 py-1 right-0 mr-2 z-10');
      generation.textContent = "Generation ".concat(item.gen); // Item generation.

      var deleteButton = document.createElement('button');
      deleteButton.setAttribute('class', 'hidden group-hover:block absolute rounded-full bg-red-500 hover:bg-red-700 text-xs text-white px-8 py-1 right-0 mr-2 z-20');
      deleteButton.setAttribute('data-id', item.id);
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener('click', function (e) {
        deleteButton.closest('li').remove();
        _this3.selectedPokemon = _this3.selectedPokemon.filter(function (pk) {
          return parseInt(pk.id) !== parseInt(deleteButton.getAttribute('data-id'));
        });
      });
      listItem.appendChild(itemName);
      listItem.appendChild(generation);
      listItem.appendChild(deleteButton);
      document.querySelector('ul#selectedItems').appendChild(listItem);
    },
    openImportModal: function openImportModal() {
      this.showModal = true;
      this.selectedPokemon = [];
      document.querySelector('ul#selectedItems').querySelectorAll('li').forEach(function (item) {
        return item.remove();
      });
    },
    importPokemon: function importPokemon() {
      var _this4 = this;

      console.log('importing');
      var selectedItems = [];
      this.importIds.split("\n").forEach(function (id) {
        var item = _this4.pokemon.find(function (pk) {
          return parseInt(pk.id) === parseInt(id);
        });

        selectedItems.push({
          id: item.id,
          name: item.name,
          gen: item.gen
        });

        _this4.appendItemToList(item);
      });
      this.selectedPokemon = selectedItems;
      this.showModal = false;
      this.importIds = '';
    },
    exportPokemon: function exportPokemon() {
      var el = document.createElement('textarea'); //el.setAttribute('class', 'hidden');

      el.value = this.selectedPokemon.map(function (item) {
        return item.id;
      }).join("\n").trim();
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      alert('Copied to your clipboard.');
    }
  };
};

/***/ }),

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/performance-now/lib/performance-now.js":
/*!*************************************************************!*\
  !*** ./node_modules/performance-now/lib/performance-now.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");
// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

//# sourceMappingURL=performance-now.js.map


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/raf/index.js":
/*!***********************************!*\
  !*** ./node_modules/raf/index.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var now = __webpack_require__(/*! performance-now */ "./node_modules/performance-now/lib/performance-now.js")
  , root = typeof window === 'undefined' ? __webpack_require__.g : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf
  object.cancelAnimationFrame = caf
}


/***/ }),

/***/ "./node_modules/request-animation-frame-timeout/modules/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/request-animation-frame-timeout/modules/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setTimeout": () => (/* binding */ setTimeout),
/* harmony export */   "clearTimeout": () => (/* binding */ clearTimeout)
/* harmony export */ });
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raf */ "./node_modules/raf/index.js");
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(raf__WEBPACK_IMPORTED_MODULE_0__);

var cancelAnimationFrame = (raf__WEBPACK_IMPORTED_MODULE_0___default().cancel);
function setTimeout(callback, delay) {
  var startedAt = Date.now();
  var animationFrame = raf__WEBPACK_IMPORTED_MODULE_0___default()(tick);

  function tick() {
    if (Date.now() - startedAt >= delay) {
      callback();
    } else {
      animationFrame = raf__WEBPACK_IMPORTED_MODULE_0___default()(tick);
    }
  }

  return {
    clear: function clear() {
      return cancelAnimationFrame(animationFrame);
    }
  };
}
function clearTimeout(timeout) {
  if (timeout) {
    timeout.clear();
  }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/virtual-scroller/modules/DOM/RenderingEngine.js":
/*!**********************************************************************!*\
  !*** ./node_modules/virtual-scroller/modules/DOM/RenderingEngine.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Screen */ "./node_modules/virtual-scroller/modules/DOM/Screen.js");
/* harmony import */ var _ScrollableContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScrollableContainer */ "./node_modules/virtual-scroller/modules/DOM/ScrollableContainer.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'DOM',
  createScreen: function createScreen() {
    return new _Screen__WEBPACK_IMPORTED_MODULE_0__.default();
  },
  // Create `scrollableContainer`.
  // On client side, `scrollableContainer` is always created.
  // On server side, `scrollableContainer` is not created (and not used).
  createScrollableContainer: function createScrollableContainer(scrollableContainer) {
    if (scrollableContainer) {
      return new _ScrollableContainer__WEBPACK_IMPORTED_MODULE_1__.default(scrollableContainer);
    } else if (typeof window !== 'undefined') {
      return new _ScrollableContainer__WEBPACK_IMPORTED_MODULE_1__.ScrollableWindowContainer();
    }
  }
});
//# sourceMappingURL=RenderingEngine.js.map

/***/ }),

/***/ "./node_modules/virtual-scroller/modules/DOM/Screen.js":
/*!*************************************************************!*\
  !*** ./node_modules/virtual-scroller/modules/DOM/Screen.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Screen)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Screen =
/*#__PURE__*/
function () {
  function Screen() {
    _classCallCheck(this, Screen);
  }

  _createClass(Screen, [{
    key: "getChildElementTopOffset",

    /**
     * Returns a child element's "top offset", relative to the `parentElement`'s top edge.
     * @param  {Element} parentElement
     * @param  {number} childElementIndex
     * @return {number}
     */
    value: function getChildElementTopOffset(parentElement, childElementIndex) {
      return parentElement.childNodes[childElementIndex].getBoundingClientRect().top;
    }
    /**
     * Returns a child element's height.
     * @param  {Element} parentElement
     * @param  {number} childElementIndex
     * @return {number}
     */

  }, {
    key: "getChildElementHeight",
    value: function getChildElementHeight(parentElement, childElementIndex) {
      return this.getElementHeight(parentElement.childNodes[childElementIndex]);
    }
    /**
     * Returns the count of child elements of an element.
     * @param  {Element} parentElement
     * @return {number}
     */

  }, {
    key: "getChildElementsCount",
    value: function getChildElementsCount(parentElement) {
      return parentElement.childNodes.length;
    }
    /**
     * Removes all child elements of an element.
     * @param  {Element} element
     */

  }, {
    key: "clearElement",
    value: function clearElement(element) {
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
    }
    /**
     * Returns an element's height.
     * @param  {Element} element
     * @return {number}
     */

  }, {
    key: "getElementHeight",
    value: function getElementHeight(element) {
      // `offsetHeight` is not precise enough (doesn't return fractional pixels).
      // return element.offsetHeight
      return element.getBoundingClientRect().height;
    }
  }]);

  return Screen;
}();


//# sourceMappingURL=Screen.js.map

/***/ }),

/***/ "./node_modules/virtual-scroller/modules/DOM/ScrollableContainer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/virtual-scroller/modules/DOM/ScrollableContainer.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScrollableContainer),
/* harmony export */   "ScrollableWindowContainer": () => (/* binding */ ScrollableWindowContainer)
/* harmony export */ });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ScrollableContainer =
/*#__PURE__*/
function () {
  /**
   * Constructs a new "scrollable container" from an element.
   * @param {Element} scrollableContainer
   */
  function ScrollableContainer(element) {
    _classCallCheck(this, ScrollableContainer);

    this.element = element;
  }
  /**
   * Returns the current scroll position.
   * @return {number}
   */


  _createClass(ScrollableContainer, [{
    key: "getScrollY",
    value: function getScrollY() {
      return this.element.scrollTop;
    }
    /**
     * Scrolls to a specific position.
     * @param {number} scrollY
     */

  }, {
    key: "scrollToY",
    value: function scrollToY(scrollY) {
      this.element.scrollTo(0, scrollY);
    }
    /**
     * Returns "scrollable container" width,
     * i.e. the available width for its content.
     * @return {number}
     */

  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.element.offsetWidth;
    }
    /**
     * Returns the height of the "scrollable container" itself.
     * Not to be confused with the height of "scrollable container"'s content.
     * @return {number}
     */

  }, {
    key: "getHeight",
    value: function getHeight() {
      // if (!this.element && !precise) {
      // 	return getScreenHeight()
      // }
      return this.element.offsetHeight;
    }
    /**
     * Returns the height of the content in a scrollable container.
     * For example, a scrollable container can have a height of 500px,
     * but the content in it could have a height of 5000px,
     * in which case a vertical scrollbar is rendered, and only
     * one-tenth of all the items are shown at any given moment.
     * This function is currently only used when using the
     * `preserveScrollPositionOfTheBottomOfTheListOnMount` feature.
     * @return {number}
     */

  }, {
    key: "getContentHeight",
    value: function getContentHeight() {
      return this.element.scrollHeight;
    }
    /**
     * Returns a "top offset" of an element
     * relative to the "scrollable container"'s top edge.
     * @param {Element} element
     * @return {number}
     */

  }, {
    key: "getTopOffset",
    value: function getTopOffset(element) {
      var scrollableContainerTop = this.element.getBoundingClientRect().top;
      var scrollableContainerBorderTopWidth = this.element.clientTop;
      var top = element.getBoundingClientRect().top;
      return top - scrollableContainerTop + this.getScrollY() - scrollableContainerBorderTopWidth;
    } // isVisible() {
    // 	const { top, bottom } = this.element.getBoundingClientRect()
    // 	return bottom > 0 && top < getScreenHeight()
    // }

    /**
     * Adds a "scroll" event listener to the "scrollable container".
     * @param {onScroll} Should be called whenever the scroll position inside the "scrollable container" (potentially) changes.
     * @return {function} Returns a function that stops listening.
     */

  }, {
    key: "addScrollListener",
    value: function addScrollListener(onScroll) {
      var _this = this;

      this.element.addEventListener('scroll', onScroll);
      return function () {
        return _this.element.removeEventListener('scroll', onScroll);
      };
    }
    /**
     * Adds a "resize" event listener to the "scrollable container".
     * @param {onResize} Should be called whenever the "scrollable container"'s width or height (potentially) changes.
     * @param  {Element} options.container — The result of the `getContainerElement()` function that was passed in `VirtualScroller` constructor. For example, DOM renderer uses it to filter-out unrelated "resize" events.
     * @return {function} Returns a function that stops listening.
     */

  }, {
    key: "onResize",
    value: function onResize(_onResize, _ref) {
      var _this2 = this;

      var container = _ref.container;
      // Could somehow track DOM Element size.
      // For now, `scrollableContainer` is supposed to have constant width and height.
      // (unless window is resized).
      // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
      // https://web.dev/resize-observer/
      var unobserve;

      if (typeof ResizeObserver !== 'undefined') {
        var resizeObserver = new ResizeObserver(function (entries) {
          // "one entry per observed element".
          // https://web.dev/resize-observer/
          // `entry.target === this.element`.
          var entry = entries[0]; // // If `entry.contentBoxSize` property is supported by the web browser.
          // if (entry.contentBoxSize) {
          // 	// https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentBoxSize
          // 	const width = entry.contentBoxSize.inlineSize
          // 	const height = entry.contentBoxSize.blockSize
          // }

          _onResize();
        });
        resizeObserver.observe(this.element);

        unobserve = function unobserve() {
          return resizeObserver.unobserve(_this2.element);
        };
      } // I guess, if window is resized, `onResize()` will be triggered twice:
      // once for window resize, and once for the scrollable container resize.
      // But `onResize()` also has an internal check: if the container size
      // hasn't changed since the previous time `onResize()` has been called,
      // then `onResize()` doesn't do anything, so, I guess, there shouldn't be
      // any "performance implications" of running the listener twice in such case.


      var unlistenGlobalResize = addGlobalResizeListener(_onResize, {
        container: container
      });
      return function () {
        if (unobserve) {
          unobserve();
        }

        unlistenGlobalResize();
      };
    }
  }]);

  return ScrollableContainer;
}();


var ScrollableWindowContainer =
/*#__PURE__*/
function (_ScrollableContainer) {
  _inherits(ScrollableWindowContainer, _ScrollableContainer);

  function ScrollableWindowContainer() {
    _classCallCheck(this, ScrollableWindowContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ScrollableWindowContainer).call(this, window));
  }
  /**
   * Returns the current scroll position.
   * @return {number}
   */


  _createClass(ScrollableWindowContainer, [{
    key: "getScrollY",
    value: function getScrollY() {
      // `window.scrollY` is not supported by Internet Explorer.
      return window.pageYOffset;
    }
    /**
     * Returns "scrollable container" width,
     * i.e. the available width for its content.
     * @return {number}
     */

  }, {
    key: "getWidth",
    value: function getWidth() {
      // https://javascript.info/size-and-scroll-window
      // `<!DOCTYPE html>` may be required in order for this to work correctly.
      // Includes scrollbar (if any).
      // Correctly reflects page zoom in iOS Safari.
      // (scales screen width accordingly).
      // But, includes scrollbar (if any).
      return window.innerWidth;
    }
    /**
     * Returns the height of the "scrollable container" itself.
     * Not to be confused with the height of "scrollable container"'s content.
     * @return {number}
     */

  }, {
    key: "getHeight",
    value: function getHeight() {
      // https://javascript.info/size-and-scroll-window
      // `<!DOCTYPE html>` is required in order for this to work correctly.
      // Without it, the returned height would be the height of the entire document.
      // Includes scrollbar (if any).
      // Supports iOS Safari's dynamically shown/hidden
      // top URL bar and bottom actions bar.
      // https://codesandbox.io/s/elegant-fog-iddrh
      // Tested in IE 11.
      // It also correctly reflects page zoom in iOS Safari.
      // (scales screen height accordingly).
      // But, includes scrollbar (if any).
      return window.innerHeight;
    }
    /**
     * Returns the height of the content in a scrollable container.
     * For example, a scrollable container can have a height of 500px,
     * but the content in it could have a height of 5000px,
     * in which case a vertical scrollbar is rendered, and only
     * one-tenth of all the items are shown at any given moment.
     * This function is currently only used when using the
     * `preserveScrollPositionOfTheBottomOfTheListOnMount` feature.
     * @return {number}
     */

  }, {
    key: "getContentHeight",
    value: function getContentHeight() {
      return document.documentElement.scrollHeight;
    }
    /**
     * Returns a "top offset" of an element
     * relative to the "scrollable container"'s top edge.
     * @param {Element} element
     * @return {number}
     */

  }, {
    key: "getTopOffset",
    value: function getTopOffset(element) {
      var borderTopWidth = document.clientTop || document.body.clientTop || 0;
      return element.getBoundingClientRect().top + this.getScrollY() - borderTopWidth;
    }
    /**
     * Adds a "resize" event listener to the "scrollable container".
     * @param {onScroll} Should be called whenever the "scrollable container"'s width or height (potentially) changes.
     * @param  {Element} options.container — The result of the `getContainerElement()` function that was passed in `VirtualScroller` constructor. For example, DOM renderer uses it to filter-out unrelated "resize" events.
     * @return {function} Returns a function that stops listening.
     */

  }, {
    key: "onResize",
    value: function onResize(_onResize2, _ref2) {
      var container = _ref2.container;
      return addGlobalResizeListener(_onResize2, {
        container: container
      });
    } // isVisible() {
    // 	return true
    // }

  }]);

  return ScrollableWindowContainer;
}(ScrollableContainer);
/**
 * Adds a "resize" event listener to the `window`.
 * @param {onResize} Should be called whenever the "container"'s width or height (potentially) changes.
 * @param  {Element} options.container — The "container".
 * @return {function} Returns a function that stops listening.
 */

function addGlobalResizeListener(onResize, _ref3) {
  var container = _ref3.container;

  var onResizeListener = function onResizeListener() {
    // By default, `VirtualScroller` always performs a re-layout
    // on window `resize` event. But browsers (Chrome, Firefox)
    // [trigger](https://developer.mozilla.org/en-US/docs/Web/API/Window/fullScreen#Notes)
    // window `resize` event also when a user switches into fullscreen mode:
    // for example, when a user is watching a video and double-clicks on it
    // to maximize it. And also when the user goes out of the fullscreen mode.
    // Each such fullscreen mode entering/exiting will trigger window `resize`
    // event that will it turn trigger a re-layout of `VirtualScroller`,
    // resulting in bad user experience. To prevent that, such cases are filtered out.
    // Some other workaround:
    // https://stackoverflow.com/questions/23770449/embedded-youtube-video-fullscreen-or-causing-resize
    if (document.fullscreenElement) {
      // If the fullscreened element doesn't contain the list
      // (and is not the list itself), then the layout hasn't been affected,
      // so don't perform a re-layout.
      //
      // For example, suppose there's a list of items, and some item contains a video.
      // If, upon clicking such video, it plays inline, and the user enters
      // fullscreen mode while playing such inline video, then the layout won't be
      // affected, and so such `resize` event should be ignored: when
      // `document.fullscreenElement` is in a separate "branch" relative to the
      // `container`.
      //
      // Another scenario: suppose that upon click, the video doesn't play inline,
      // but instead a "Slideshow" component is open, with the video shown at the
      // center of the screen in an overlay. If then the user enters fullscreen mode,
      // the layout wouldn't be affected too, so such `resize` event should also be
      // ignored: when `document.fullscreenElement` is inside the `container`.
      //
      if (document.fullscreenElement.contains(container)) {// The element is either the `container`'s ancestor,
        // Or is the `container` itself.
        // (`a.contains(b)` includes the `a === b` case).
        // So the `resize` event will affect the `container`'s dimensions.
      } else {
        // The element is either inside the `container`,
        // Or is in a separate tree.
        // So the `resize` event won't affect the `container`'s dimensions.
        return;
      }
    }

    onResize();
  };

  window.addEventListener('resize', onResizeListener);
  return function () {
    return window.removeEventListener('resize', onResizeListener);
  };
}
//# sourceMappingURL=ScrollableContainer.js.map

/***/ }),

/***/ "./node_modules/virtual-scroller/modules/DOM/VirtualScroller.js":
/*!**********************************************************************!*\
  !*** ./node_modules/virtual-scroller/modules/DOM/VirtualScroller.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VirtualScroller)
/* harmony export */ });
/* harmony import */ var _VirtualScroller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../VirtualScroller */ "./node_modules/virtual-scroller/modules/VirtualScroller.js");
/* harmony import */ var _utility_debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/debug */ "./node_modules/virtual-scroller/modules/utility/debug.js");
/* harmony import */ var _utility_px__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/px */ "./node_modules/virtual-scroller/modules/utility/px.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var VirtualScroller =
/*#__PURE__*/
function () {
  function VirtualScroller(element, _items, renderItem) {
    var _this = this;

    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, VirtualScroller);

    _defineProperty(this, "onStateChange", function (state, prevState) {
      var items = state.items,
          firstShownItemIndex = state.firstShownItemIndex,
          lastShownItemIndex = state.lastShownItemIndex,
          beforeItemsHeight = state.beforeItemsHeight,
          afterItemsHeight = state.afterItemsHeight;
      (0,_utility_debug__WEBPACK_IMPORTED_MODULE_0__.default)('~ On state change ~');
      (0,_utility_debug__WEBPACK_IMPORTED_MODULE_0__.default)('Previous state', prevState);
      (0,_utility_debug__WEBPACK_IMPORTED_MODULE_0__.default)('New state', state); // Set container padding top and bottom.
      // Work around `<tbody/>` not being able to have `padding`.
      // https://gitlab.com/catamphetamine/virtual-scroller/-/issues/1
      // `this.virtualScroller` hasn't been initialized yet at this stage,
      // so using `this.tbody` instead of `this.virtualScroller.tbody`.

      if (!_this.tbody) {
        _this.container.style.paddingTop = (0,_utility_px__WEBPACK_IMPORTED_MODULE_1__.default)(beforeItemsHeight);
        _this.container.style.paddingBottom = (0,_utility_px__WEBPACK_IMPORTED_MODULE_1__.default)(afterItemsHeight);
      } // Perform an intelligent "diff" re-render if the `items` are the same.


      var diffRender = prevState && items === prevState.items && items.length > 0; // Remove no longer visible items from the DOM.

      if (diffRender) {
        (0,_utility_debug__WEBPACK_IMPORTED_MODULE_0__.default)('Incremental rerender'); // Decrement instead of increment here because
        // `this.container.removeChild()` changes indexes.

        var _i = prevState.lastShownItemIndex;

        while (_i >= prevState.firstShownItemIndex) {
          if (_i >= firstShownItemIndex && _i <= lastShownItemIndex) {// The item is still visible.
          } else {
            (0,_utility_debug__WEBPACK_IMPORTED_MODULE_0__.default)('Remove item index', _i); // The item is no longer visible. Remove it.

            _this.unmountItem(_this.container.childNodes[_i - prevState.firstShownItemIndex]);
          }

          _i--;
        }
      } else {
        (0,_utility_debug__WEBPACK_IMPORTED_MODULE_0__.default)('Rerender from scratch');

        while (_this.container.firstChild) {
          _this.unmountItem(_this.container.firstChild);
        }
      } // Add newly visible items to the DOM.


      var shouldPrependItems = diffRender;
      var prependBeforeItemElement = shouldPrependItems && _this.container.firstChild;
      var i = firstShownItemIndex;

      while (i <= lastShownItemIndex) {
        if (diffRender && i >= prevState.firstShownItemIndex && i <= prevState.lastShownItemIndex) {
          // The item is already being rendered.
          // Next items will be appended rather than prepended.
          if (shouldPrependItems) {
            shouldPrependItems = false;
          }
        } else {
          var item = _this.renderItem(items[i]);

          if (shouldPrependItems) {
            (0,_utility_debug__WEBPACK_IMPORTED_MODULE_0__.default)('Prepend item index', i); // Append `item` to `this.container` before the retained items.

            _this.container.insertBefore(item, prependBeforeItemElement);
          } else {
            (0,_utility_debug__WEBPACK_IMPORTED_MODULE_0__.default)('Append item index', i); // Append `item` to `this.container`.

            _this.container.appendChild(item);
          }
        }

        i++;
      }
    });

    _defineProperty(this, "onUnmount", function () {
      console.warn('[virtual-scroller] `.onUnmount()` instance method name is deprecated, use `.stop()` instance method name instead.');

      _this.stop();
    });

    _defineProperty(this, "destroy", function () {
      console.warn('[virtual-scroller] `.destroy()` instance method name is deprecated, use `.stop()` instance method name instead.');

      _this.stop();
    });

    _defineProperty(this, "stop", function () {
      _this.virtualScroller.stop();
    });

    this.container = element;
    this.renderItem = renderItem;

    var onMount = options.onMount,
        onItemUnmount = options.onItemUnmount,
        restOptions = _objectWithoutProperties(options, ["onMount", "onItemUnmount"]);

    this.onItemUnmount = onItemUnmount;
    this.tbody = this.container.tagName === 'TBODY';
    this.virtualScroller = new _VirtualScroller__WEBPACK_IMPORTED_MODULE_2__.default(function () {
      return _this.container;
    }, _items, _objectSpread({}, restOptions, {
      tbody: this.tbody,
      onStateChange: this.onStateChange
    })); // `onMount()` option is deprecated due to no longer being used.
    // If someone thinks there's a valid use case for it, create an issue.

    if (onMount) {
      onMount();
    }

    this.virtualScroller.listen();
  }

  _createClass(VirtualScroller, [{
    key: "unmountItem",
    value: function unmountItem(itemElement) {
      this.container.removeChild(itemElement);

      if (this.onItemUnmount) {
        this.onItemUnmount(itemElement);
      }
    }
  }, {
    key: "onItemHeightChange",
    value: function onItemHeightChange(i) {
      this.virtualScroller.onItemHeightChange(i);
    }
    /**
     * @deprecated
     * `.updateItems()` has been renamed to `.setItems()`.
     */

  }, {
    key: "updateItems",
    value: function updateItems(newItems, options) {
      this.setItems(newItems, options);
    }
  }, {
    key: "setItems",
    value: function setItems(newItems, options) {
      this.virtualScroller.setItems(newItems, options);
    }
    /*
    getItemCoordinates(i) {
      return this.virtualScroller.getItemCoordinates(i)
    }
    */

  }]);

  return VirtualScroller;
}();


//# sourceMappingURL=VirtualScroller.js.map

/***/ }),

/***/ "./node_modules/virtual-scroller/modules/DOM/WaitForStylesToLoad.js":
/*!**************************************************************************!*\
  !*** ./node_modules/virtual-scroller/modules/DOM/WaitForStylesToLoad.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WaitForStylesToLoad)
/* harmony export */ });
/* harmony import */ var request_animation_frame_timeout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! request-animation-frame-timeout */ "./node_modules/request-animation-frame-timeout/modules/index.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layout */ "./node_modules/virtual-scroller/modules/Layout.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// For some weird reason, in Chrome, `setTimeout()` would lag up to a second (or more) behind.
// Turns out, Chrome developers have deprecated `setTimeout()` API entirely without asking anyone.
// Replacing `setTimeout()` with `requestAnimationFrame()` can work around that Chrome bug.
// https://github.com/bvaughn/react-virtualized/issues/722

 // `VirtualScroller` calls `this.layout.layOut()` on mount,
// but if the page styles are applied after `VirtualScroller` mounts
// (for example, if styles are applied via javascript, like Webpack does)
// then the list might not render correctly and will only show the first item.
// The reason for that would be that calling `.getListTopOffsetInsideScrollableContainer()`
// on mount returns "incorrect" `top` position because the styles haven't been applied yet.
// For example, consider a page:
// <div class="page">
//   <nav class="sidebar">...</nav>
//   <main>...</main>
// </div>
// The sidebar is styled as `position: fixed`, but until
// the page styles have been applied it's gonna be a regular `<div/>`
// meaning that `<main/>` will be rendered below the sidebar
// and will appear offscreen and so it will only render the first item.
// Then, the page styles are loaded and applied and the sidebar
// is now `position: fixed` so `<main/>` is now rendered at the top of the page
// but `VirtualScroller`'s `.render()` has already been called
// and it won't re-render until the user scrolls or the window is resized.
// This type of a bug doesn't occur in production, but it can appear
// in development mode when using Webpack. The workaround `VirtualScroller`
// implements for such cases is calling `.getListTopOffsetInsideScrollableContainer()`
// on the list container DOM element periodically (every second) to check
// if the `top` coordinate has changed as a result of CSS being applied:
// if it has then it recalculates the shown item indexes.

var WaitForStylesToLoad =
/*#__PURE__*/
function () {
  function WaitForStylesToLoad(_ref) {
    var updateLayout = _ref.updateLayout,
        getListTopOffsetInsideScrollableContainer = _ref.getListTopOffsetInsideScrollableContainer;

    _classCallCheck(this, WaitForStylesToLoad);

    this.updateLayout = updateLayout;
    this.getListTopOffsetInsideScrollableContainer = getListTopOffsetInsideScrollableContainer;
  }

  _createClass(WaitForStylesToLoad, [{
    key: "onGotListTopOffset",
    value: function onGotListTopOffset(listTopOffset) {
      if (this.listTopOffsetInsideScrollableContainer === undefined) {
        // Start periodical checks of the list's top offset
        // in order to perform a re-layout in case it changes.
        // See the comments in `WaitForStylesToLoad.js` file
        // on why can the list's top offset change, and in which circumstances.
        this.start();
      }

      this.listTopOffsetInsideScrollableContainer = listTopOffset;
    }
  }, {
    key: "start",
    value: function start() {
      this.isRendered = true;
      this.watchListTopOffset();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.isRendered = false;
      (0,request_animation_frame_timeout__WEBPACK_IMPORTED_MODULE_0__.clearTimeout)(this.watchListTopOffsetTimer);
    }
  }, {
    key: "watchListTopOffset",
    value: function watchListTopOffset() {
      var _this = this;

      var startedAt = Date.now();

      var check = function check() {
        // If `VirtualScroller` has been unmounted
        // while `setTimeout()` was waiting, then exit.
        if (!_this.isRendered) {
          return;
        } // Skip comparing `top` coordinate of the list
        // when this function is called for the first time.


        if (_this.listTopOffsetInsideScrollableContainer !== undefined) {
          // Calling `this.getListTopOffsetInsideScrollableContainer()`
          // on an element is about 0.003 milliseconds on a modern desktop CPU,
          // so I guess it's fine calling it twice a second.
          if (_this.getListTopOffsetInsideScrollableContainer() !== _this.listTopOffsetInsideScrollableContainer) {
            _this.updateLayout({
              reason: _Layout__WEBPACK_IMPORTED_MODULE_1__.LAYOUT_REASON.TOP_OFFSET_CHANGED
            });
          }
        } // Compare `top` coordinate of the list twice a second
        // to find out if it has changed as a result of loading CSS styles.
        // The total duration of 3 seconds would be enough for any styles to load, I guess.
        // There could be other cases changing the `top` coordinate
        // of the list (like collapsing an "accordeon" panel above the list
        // without scrolling the page), but those cases should be handled
        // by manually calling `.updateLayout()` instance method on `VirtualScroller` instance.


        if (Date.now() - startedAt < WATCH_LIST_TOP_OFFSET_MAX_DURATION) {
          _this.watchListTopOffsetTimer = (0,request_animation_frame_timeout__WEBPACK_IMPORTED_MODULE_0__.setTimeout)(check, WATCH_LIST_TOP_OFFSET_INTERVAL);
        }
      }; // Run the cycle.


      check();
    }
  }]);

  return WaitForStylesToLoad;
}();


var WATCH_LIST_TOP_OFFSET_INTERVAL = 500;
var WATCH_LIST_TOP_OFFSET_MAX_DURATION = 3000;
//# sourceMappingURL=WaitForStylesToLoad.js.map

/***/ }),

/***/ "./node_modules/virtual-scroller/modules/DOM/tbody.js":
/*!************************************************************!*\
  !*** ./node_modules/virtual-scroller/modules/DOM/tbody.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BROWSER_NOT_SUPPORTED_ERROR": () => (/* binding */ BROWSER_NOT_SUPPORTED_ERROR),
/* harmony export */   "supportsTbody": () => (/* binding */ supportsTbody),
/* harmony export */   "addTbodyStyles": () => (/* binding */ addTbodyStyles),
/* harmony export */   "setTbodyPadding": () => (/* binding */ setTbodyPadding)
/* harmony export */ });
/* harmony import */ var _utility_px__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/px */ "./node_modules/virtual-scroller/modules/utility/px.js");
// A workaround for `<tbody/>` not being able to have `padding`.
// https://gitlab.com/catamphetamine/virtual-scroller/-/issues/1

var BROWSER_NOT_SUPPORTED_ERROR = 'It looks like you\'re using Internet Explorer which doesn\'t support CSS variables required for a <tbody/> container. VirtualScroller has been switched into "bypass" mode (render all items). See: https://gitlab.com/catamphetamine/virtual-scroller/-/issues/1';
function supportsTbody() {
  // Detect Internet Explorer.
  // https://stackoverflow.com/questions/19999388/check-if-user-is-using-ie
  // `documentMode` is an IE-only property.
  // Supports IE 9-11. Maybe even IE 8.
  // http://msdn.microsoft.com/en-us/library/ie/cc196988(v=vs.85).aspx
  if (typeof window !== 'undefined' && window.document.documentMode) {
    // CSS variables aren't supported in Internet Explorer.
    return false;
  }

  return true;
}
function addTbodyStyles(tbody) {
  // `classList.add` is supported in Internet Explorer 10+.
  tbody.classList.add('VirtualScroller');
  var style = document.getElementById('VirtualScrollerStyle');

  if (!style) {
    style = document.createElement('style');
    style.id = 'VirtualScrollerStyle'; // CSS variables aren't supported in Internet Explorer.

    style.innerText = "\n\t\t\ttbody.VirtualScroller:before {\n\t\t\t\tcontent: '';\n\t\t\t\tdisplay: table-row;\n\t\t\t\theight: var(--VirtualScroller-paddingTop);\n\t\t\t}\n\t\t\ttbody.VirtualScroller:after {\n\t\t\t\tcontent: '';\n\t\t\t\tdisplay: table-row;\n\t\t\t\theight: var(--VirtualScroller-paddingBottom);\n\t\t\t}\n\t\t".replace(/[\n\t]/g, '');
    document.head.appendChild(style);
  }
}
function setTbodyPadding(tbody, beforeItemsHeight, afterItemsHeight) {
  // CSS variables aren't supported in Internet Explorer.
  tbody.style.setProperty('--VirtualScroller-paddingTop', (0,_utility_px__WEBPACK_IMPORTED_MODULE_0__.default)(beforeItemsHeight));
  tbody.style.setProperty('--VirtualScroller-paddingBottom', (0,_utility_px__WEBPACK_IMPORTED_MODULE_0__.default)(afterItemsHeight));
}
//# sourceMappingURL=tbody.js.map

/***/ }),

/***/ "./node_modules/virtual-scroller/modules/ItemHeights.js":
/*!**************************************************************!*\
  !*** ./node_modules/virtual-scroller/modules/ItemHeights.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ItemHeights)
/* harmony export */ });
/* harmony import */ var _utility_debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility/debug */ "./node_modules/virtual-scroller/modules/utility/debug.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ItemHeights =
/*#__PURE__*/
function () {
  function ItemHeights(screen, getContainerElement, getItemHeight, setItemHeight) {
    _classCallCheck(this, ItemHeights);

    this.screen = screen;
    this.getContainerElement = getContainerElement;
    this._get = getItemHeight;
    this._set = setItemHeight;
    this.reset();
  }

  _createClass(ItemHeights, [{
    key: "reset",
    value: function reset() {
      this.measuredItemsHeight = 0; // "First measured item index" variable was introduced
      // because it's not always `0`: when `virtualScroller.setItems()`
      // is called, some items might get prepended, in which case
      // `this.lastMeasuredItemIndex` is updated. If there was no
      // `this.firstMeasuredItemIndex`, then the average item height
      // calculated in `.getAverage()` would be incorrect in the timeframe
      // between `.setItems()` is called and those changes have been rendered.
      // And in that timeframe, `.getAverage()` is used to calculate the "layout":
      // stuff like "before/after items height" and "estimated items count on screen".

      this.firstMeasuredItemIndex = undefined;
      this.lastMeasuredItemIndex = undefined;
    }
    /**
     * Is called after `.reset()`.
     * Initializes `this.measuredItemsHeight`, `this.firstMeasuredItemIndex`
     * and `this.lastMeasuredItemIndex` instance variables from `VirtualScroller` `state`.
     * These instance variables are used when calculating "average" item height:
     * the "average" item height is simply `this.measuredItemsHeight` divided by
     * `this.lastMeasuredItemIndex` minus `this.firstMeasuredItemIndex` plus 1.
     */

  }, {
    key: "initialize",
    value: function initialize(itemHeights) {
      var i = 0;

      while (i < itemHeights.length) {
        if (itemHeights[i] === undefined) {
          if (this.firstMeasuredItemIndex !== undefined) {
            this.lastMeasuredItemIndex = i - 1;
            break;
          }
        } else {
          if (this.firstMeasuredItemIndex === undefined) {
            this.firstMeasuredItemIndex = i;
          }

          this.measuredItemsHeight += itemHeights[i];
        }

        i++;
      }
    } // Seems to be no longer used.
    // getItemHeight(i, firstShownItemIndex) {
    // 	if (this._get(i)) {
    // 		return this._get(i)
    // 	}
    // 	const itemHeight = this._measureItemHeight(i, firstShownItemIndex)
    // 	if (itemHeight) {
    // 		this._set(i, itemHeight)
    // 		return itemHeight
    // 	}
    // 	return this.getAverage()
    // }

  }, {
    key: "_measureItemHeight",
    value: function _measureItemHeight(i, firstShownItemIndex) {
      var container = this.getContainerElement();

      if (container) {
        var elementIndex = i - firstShownItemIndex;

        if (elementIndex >= 0 && elementIndex < this.screen.getChildElementsCount(container)) {
          return this.screen.getChildElementHeight(container, elementIndex);
        }
      }
    }
    /**
     * Measures item heights:
     *
     * * For the items that haven't been previously measured,
     *   measures them for the first time.
     *
     * * For the items that have been previoulsy measured,
     *   validate that their previously measured height
     *   is still equal to their current height.
     *   The unequalness may not necessarily be caused by
     *   incorrect use of `virtual-scroller`: there are
     *   also some valid use cases when such unequalness
     *   could happen (see the comments in the code).
     *
     * @param {number} firstShownItemIndex
     * @param {number} lastShownItemIndex
     * @return {number[]} The indexes of the items that have not previously been measured and have been measured now.
     */

  }, {
    key: "measureItemHeights",
    value: function measureItemHeights(firstShownItemIndex, lastShownItemIndex) {
      // If no items are rendered, don't measure anything.
      if (firstShownItemIndex === undefined) {
        return;
      } // Reset `this.measuredItemsHeight` if it's not a "continuous" measured items list:
      // if a group of items has been measured previously, and now it has rendered a completely
      // different group of items, and there's a non-measured "gap" between those two groups,
      // then reset `this.measuredItemsHeight` and "first measured"/"last measured" item indexes.
      // For example, this could happen when `.setItems()` prepends a lot of new items.


      if (this.firstMeasuredItemIndex !== undefined) {
        if (firstShownItemIndex > this.lastMeasuredItemIndex + 1 || lastShownItemIndex < this.firstMeasuredItemIndex - 1) {
          // Reset.
          (0,_utility_debug__WEBPACK_IMPORTED_MODULE_0__.default)('Non-measured items gap detected. Reset first and last measured item indexes.');
          this.reset();
        }
      }

      var nonPreviouslyMeasuredItemIndexes = [];
      var previousFirstMeasuredItemIndex = this.firstMeasuredItemIndex;
      var previousLastMeasuredItemIndex = this.lastMeasuredItemIndex;
      var firstMeasuredItemIndexHasBeenUpdated = false;
      var i = firstShownItemIndex;

      while (i <= lastShownItemIndex) {
        // Don't re-measure item heights that have been measured previously.
        // The rationale is that developers are supposed to manually call
        // `.onItemHeightChange()` every time an item's height changes.
        // If developers aren't neglecting that rule, item heights won't
        // change unexpectedly.
        // // Re-measure all shown items' heights, because an item's height
        // // might have changed since it has been measured initially.
        // // For example, if an item is a long comment with a "Show more" button,
        // // then the user might have clicked that "Show more" button.
        if (this._get(i) === undefined) {
          nonPreviouslyMeasuredItemIndexes.push(i);
          (0,_utility_debug__WEBPACK_IMPORTED_MODULE_0__.default)('Item', i, 'hasn\'t been previously measured');

          var height = this._measureItemHeight(i, firstShownItemIndex);

          (0,_utility_debug__WEBPACK_IMPORTED_MODULE_0__.default)('Height', height);

          this._set(i, height); // Update average item height calculation variables
          // related to the previously measured items
          // that're above the items currently being shown.
          // It is known to be a "continuous" measured items list,
          // because the code at the start of this function checks that.


          if (previousFirstMeasuredItemIndex === undefined || i < previousFirstMeasuredItemIndex) {
            this.measuredItemsHeight += height; // Update first measured item index.

            if (!firstMeasuredItemIndexHasBeenUpdated) {
              // log('Set first measured item index', i)
              this.firstMeasuredItemIndex = i;
              firstMeasuredItemIndexHasBeenUpdated = true;
            }
          } // Update average item height calculation variables
          // related to the previously measured items
          // that're below the items currently being shown.
          // It is known to be a "continuous" measured items list,
          // because the code at the start of this function checks that.


          if (previousLastMeasuredItemIndex === undefined || i > previousLastMeasuredItemIndex) {
            // If `previousLastMeasuredItemIndex` is `undefined`
            // then `previousFirstMeasuredItemIndex` is also `undefined`
            // which means that the item's `height` has already been added
            // to `this.measuredItemsHeight` in the code above,
            // so this condition guards against counting the item's `height`
            // twice in `this.measuredItemsHeight`.
            if (previousLastMeasuredItemIndex !== undefined) {
              // Add newly shown item height.
              this.measuredItemsHeight += height;
            } // Update last measured item index.


            this.lastMeasuredItemIndex = i;
          }
        } else {
          // // Validate the item's height right after showing it after being hidden,
          // // because, if the stored item's state isn't applied properly, the item's
          // // height might be incorrect when it's rendered with that state not applied,
          // // and so a developer could know that there's a bug in their code.
          //
          // Actually, don't perform a strict previously measured item height validation
          // here, because there could be valid cases when the item's height has changed
          // by this time before the `.onItemHeightChange(i)` call has been executed.
          // For example, suppose there's a list of several items on a page,
          // and those items are in "minimized" state (having height 100px).
          // Then, a user clicks an "Expand all items" button, and all items
          // in the list are expanded (expanded item height is gonna be 700px).
          // `VirtualScroller` demands that `.onItemHeightChange(i)` is called
          // in such cases, and the developer has properly added the code to do that.
          // So, if there were 10 "minimized" items visible on a page, then there
          // will be 10 individual `.onItemHeightChange(i)` calls. No issues so far.
          // But, as the first `.onItemHeightChange(i)` call executes, it immediately
          // ("synchronously") triggers a re-layout, and immediately after that re-layout
          // `itemHeights.measureItemHeights()` function is called,
          // that detects the height mismatch for all the rest of the items.
          // So, even though the developer has written their code properly, there're
          // still situations when the item's height could have changed by this time,
          // and the `.onItemHeightChange(i)` call hasn't been executed for this item yet.
          //
          var previousHeight = this._get(i);

          var _height = this._measureItemHeight(i, firstShownItemIndex);

          if (previousHeight !== _height) {
            (0,_utility_debug__WEBPACK_IMPORTED_MODULE_0__.default)('Item', i, 'height has changed from', previousHeight, 'to', _height, 'while it was shown, and ".onItemHeightChange(i)" hasn\'t been called yet. This is not necessarily a bug, and could happen, for example, when there\'re several `onItemHeightChange(i)` calls issued at the same time.');
          }
        }

        i++;
      } // // Update average item height.
      // this.updateAverageItemHeight()


      return nonPreviouslyMeasuredItemIndexes;
    }
    /**
     * Re-measures item height.
     * @param  {number} i — Item index.
     * @param  {number} firstShownItemIndex
     */

  }, {
    key: "remeasureItemHeight",
    value: function remeasureItemHeight(i, firstShownItemIndex) {
      var previousHeight = this._get(i);

      var height = this._measureItemHeight(i, firstShownItemIndex); // // Because this function is called from `.onItemHeightChange()`,
      // // there're no guarantees in which circumstances a developer calls it,
      // // and for which item indexes.
      // // Therefore, to guard against cases of incorrect usage,
      // // this function won't crash anything if the item isn't rendered
      // // or hasn't been previously rendered.
      // if (height !== undefined) {
      // 	reportError(`"onItemHeightChange()" has been called for item ${i}, but that item isn't rendered.`)
      // 	return
      // }
      // if (previousHeight === undefined) {
      // 	reportError(`"onItemHeightChange()" has been called for item ${i}, but that item hasn't been rendered before.`)
      // 	return
      // }


      this._set(i, height);

      this.measuredItemsHeight += height - previousHeight;
      return height;
    } // /**
    //  * "Average" item height is stored as an instance variable.
    //  * For example, for caching, so that it isn't calculated every time it's requested.
    //  * But that would be negligible performance gain, not really worth the extra code.
    //  * Another thing it's stored for as an instance variable is
    //  * keeping "previous" "average" item height, because it can be more precise
    //  * than the newly calculated "average" item height, provided it had
    //  * more "samples" (measured items). The newly calculated average item height
    //  * could get less samples in a scenario when the scroll somehow jumps
    //  * from one position to some other distant position: in that case previous
    //  * "total measured items height" is discarded and the new one is initialized.
    //  * Could such situation happen in real life? I guess, it's unlikely.
    //  * So I'm commenting out this code, but still keeping it just in case.
    //  */
    // updateAverageItemHeight() {
    // 	this.averageItemHeightSamplesCount = this.lastMeasuredItemIndex - this.firstMeasuredItemIndex + 1
    // 	this.averageItemHeight = this.measuredItemsHeight / this.averageItemHeightSamplesCount
    // }
    //
    // /**
    //  * Public API: is called by `VirtualScroller`.
    //  * @return {number}
    //  */
    // getAverage() {
    // 	// Previously measured average item height might still be
    // 	// more precise if it contains more measured items ("samples").
    // 	if (this.previousAverageItemHeight) {
    // 		if (this.previousAverageItemHeightSamplesCount > this.averageItemHeightSamplesCount) {
    // 			return this.previousAverageItemHeight
    // 		}
    // 	}
    // 	return this.averageItemHeight || 0
    // }

    /**
     * Public API: is called by `VirtualScroller`.
     * @return {number}
     */

  }, {
    key: "getAverage",
    value: function getAverage() {
      if (this.lastMeasuredItemIndex === undefined) {
        return 0;
      }

      return this.measuredItemsHeight / (this.lastMeasuredItemIndex - this.firstMeasuredItemIndex + 1);
    }
  }, {
    key: "onPrepend",
    value: function onPrepend(count) {
      if (this.firstMeasuredItemIndex !== undefined) {
        this.firstMeasuredItemIndex += count;
        this.lastMeasuredItemIndex += count;
      }
    }
  }]);

  return ItemHeights;
}();


//# sourceMappingURL=ItemHeights.js.map

/***/ }),

/***/ "./node_modules/virtual-scroller/modules/Layout.js":
/*!*********************************************************!*\
  !*** ./node_modules/virtual-scroller/modules/Layout.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout),
/* harmony export */   "LAYOUT_REASON": () => (/* binding */ LAYOUT_REASON)
/* harmony export */ });
/* harmony import */ var _utility_debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility/debug */ "./node_modules/virtual-scroller/modules/utility/debug.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Layout =
/*#__PURE__*/
function () {
  function Layout(_ref) {
    var bypass = _ref.bypass,
        estimatedItemHeight = _ref.estimatedItemHeight,
        measureItemsBatchSize = _ref.measureItemsBatchSize,
        getVerticalSpacing = _ref.getVerticalSpacing,
        getColumnsCount = _ref.getColumnsCount,
        getItemHeight = _ref.getItemHeight,
        getAverageItemHeight = _ref.getAverageItemHeight;

    _classCallCheck(this, Layout);

    this.bypass = bypass;
    this.estimatedItemHeight = estimatedItemHeight;
    this.measureItemsBatchSize = measureItemsBatchSize;
    this.getVerticalSpacing = getVerticalSpacing;
    this.getColumnsCount = getColumnsCount;
    this.getItemHeight = getItemHeight;
    this.getAverageItemHeight = getAverageItemHeight;
  }

  _createClass(Layout, [{
    key: "getInitialLayoutValues",
    value: function getInitialLayoutValues(_ref2) {
      var bypass = _ref2.bypass,
          itemsCount = _ref2.itemsCount,
          visibleAreaHeightIncludingMargins = _ref2.visibleAreaHeightIncludingMargins;
      // On server side, at initialization time, there's no "visible area height",
      // so default to `1` estimated rows count.
      var estimatedRowsCount = visibleAreaHeightIncludingMargins ? this.getEstimatedRowsCountForHeight(visibleAreaHeightIncludingMargins) : 1;
      var firstShownItemIndex;
      var lastShownItemIndex; // If there're no items then `firstShownItemIndex` stays `undefined`.

      if (itemsCount > 0) {
        firstShownItemIndex = 0;
        lastShownItemIndex = this.getLastShownItemIndex(firstShownItemIndex, itemsCount, estimatedRowsCount, bypass);
      }

      return {
        beforeItemsHeight: 0,
        afterItemsHeight: 0,
        firstShownItemIndex: firstShownItemIndex,
        lastShownItemIndex: lastShownItemIndex
      };
    }
  }, {
    key: "getLastShownItemIndex",
    value: function getLastShownItemIndex(firstShownItemIndex, itemsCount, estimatedRowsCount, bypass) {
      if (this.bypass || bypass) {
        return itemsCount - 1;
      }

      return Math.min(firstShownItemIndex + (estimatedRowsCount * this.getColumnsCount() - 1), itemsCount - 1);
    }
  }, {
    key: "getEstimatedRowsCountForHeight",
    value: function getEstimatedRowsCountForHeight(height) {
      var estimatedItemHeight = this.getEstimatedItemHeight();

      if (estimatedItemHeight) {
        return Math.ceil((height + this.getVerticalSpacing()) / (estimatedItemHeight + this.getVerticalSpacing()));
      } else {
        // If no items have been rendered yet, and no `estimatedItemHeight` option
        // has been passed, then default to `1` estimated rows count in any `height`.
        return 1;
      }
    }
    /**
     * Returns estimated list item height.
     * (depends on which items have been previously rendered and measured).
     * @return {number}
     */

  }, {
    key: "getEstimatedItemHeight",
    value: function getEstimatedItemHeight() {
      return this.getAverageItemHeight() || this.estimatedItemHeight || 0;
    }
  }, {
    key: "updateLayoutForItemsDiff",
    value: function updateLayoutForItemsDiff(layout, _ref3, _ref4) {
      var prependedItemsCount = _ref3.prependedItemsCount,
          appendedItemsCount = _ref3.appendedItemsCount;
      var itemsCount = _ref4.itemsCount;
      layout.firstShownItemIndex += prependedItemsCount;
      layout.lastShownItemIndex += prependedItemsCount;
      var columnsCount = this.getColumnsCount();

      if (prependedItemsCount % columnsCount === 0) {
        // If the layout stays the same, then simply increase
        // the top and bottom margins proportionally to the amount
        // of the items added.
        var prependedRowsCount = prependedItemsCount / columnsCount;
        var appendedRowsCount = Math.ceil(appendedItemsCount / columnsCount);
        var averageItemHeight = this.getAverageItemHeight();
        var verticalSpacing = this.getVerticalSpacing();
        layout.beforeItemsHeight += prependedRowsCount * (averageItemHeight + verticalSpacing);
        layout.afterItemsHeight += appendedRowsCount * (verticalSpacing + averageItemHeight);
      } else {
        // Rows will be rebalanced as a result of prepending the items,
        // and the row heights can change as a result, so recalculate
        // `beforeItemsHeight` and `afterItemsHeight` from scratch.
        // `this.itemHeights[]` and `firstShownItemIndex`/`lastShownItemIndex`
        // have already been updated at this point.
        layout.beforeItemsHeight = this.getBeforeItemsHeight(firstShownItemIndex, lastShownItemIndex);
        layout.afterItemsHeight = this.getAfterItemsHeight(firstShownItemIndex, lastShownItemIndex, itemsCount);
      }
    }
  }, {
    key: "_getVisibleItemIndexes",
    value: function _getVisibleItemIndexes(visibleAreaTop, visibleAreaBottom, listTopOffset, itemsCount) {
      var columnsCount = this.getColumnsCount();
      var firstShownItemIndex;
      var lastShownItemIndex;
      var previousRowsHeight = 0;
      var rowsCount = Math.ceil(itemsCount / columnsCount);
      var rowIndex = 0;

      while (rowIndex < rowsCount) {
        var hasMoreRows = itemsCount > (rowIndex + 1) * columnsCount;
        var verticalSpaceAfterCurrentRow = hasMoreRows ? this.getVerticalSpacing() : 0;
        var currentRowHeight = 0;
        var columnIndex = 0;
        var i = void 0;

        while (columnIndex < columnsCount && (i = rowIndex * columnsCount + columnIndex) < itemsCount) {
          var itemHeight = this.getItemHeight(i); // If an item that hasn't been shown (and measured) yet is encountered
          // then show such item and then retry after it has been measured.

          if (itemHeight === undefined) {
            (0,_utility_debug__WEBPACK_IMPORTED_MODULE_0__.default)("Item index ".concat(i, " lies within the visible area or its \"margins\", but its height hasn't been measured yet. Mark the item as \"shown\", render the list, measure the item's height and redo the layout."));

            if (firstShownItemIndex === undefined) {
              firstShownItemIndex = rowIndex * columnsCount;
            }

            var heightLeft = visibleAreaBottom - (listTopOffset + previousRowsHeight);
            lastShownItemIndex = Math.min((rowIndex + this.getEstimatedRowsCountForHeight(heightLeft)) * columnsCount - 1, // Guard against index overflow.
            itemsCount - 1);
            return {
              firstNonMeasuredItemIndex: i,
              firstShownItemIndex: firstShownItemIndex,
              lastShownItemIndex: lastShownItemIndex
            };
          }

          currentRowHeight = Math.max(currentRowHeight, itemHeight); // If this is the first item visible
          // then start showing items from this row.

          if (firstShownItemIndex === undefined) {
            if (listTopOffset + previousRowsHeight + currentRowHeight > visibleAreaTop) {
              (0,_utility_debug__WEBPACK_IMPORTED_MODULE_0__.default)('First shown row index', rowIndex);
              firstShownItemIndex = rowIndex * columnsCount;
            }
          } // If this item is the last one visible in the viewport then exit.


          if (listTopOffset + previousRowsHeight + currentRowHeight + verticalSpaceAfterCurrentRow > visibleAreaBottom) {
            (0,_utility_debug__WEBPACK_IMPORTED_MODULE_0__.default)('Last shown row index', rowIndex); // The list height is estimated until all items have been seen,
            // so it's possible that even when the list DOM element happens
            // to be in the viewport in reality the list isn't visible
            // in which case `firstShownItemIndex` will be `undefined`.

            if (firstShownItemIndex !== undefined) {
              lastShownItemIndex = Math.min( // The index of the last item in the current row.
              (rowIndex + 1) * columnsCount - 1, // Guards against index overflow.
              itemsCount - 1);
            }

            return {
              firstShownItemIndex: firstShownItemIndex,
              lastShownItemIndex: lastShownItemIndex
            };
          }

          columnIndex++;
        }

        previousRowsHeight += currentRowHeight; // If there're more rows below the current row, then add vertical spacing.

        previousRowsHeight += verticalSpaceAfterCurrentRow;
        rowIndex++;
      } // If there're no more items then the last item is the last one to show.


      if (firstShownItemIndex !== undefined && lastShownItemIndex === undefined) {
        lastShownItemIndex = itemsCount - 1;
        (0,_utility_debug__WEBPACK_IMPORTED_MODULE_0__.default)('Last item index (is fully visible)', lastShownItemIndex);
      }

      return {
        firstShownItemIndex: firstShownItemIndex,
        lastShownItemIndex: lastShownItemIndex
      };
    } // Finds the items which are displayed in the viewport.

  }, {
    key: "getVisibleItemIndexes",
    value: function getVisibleItemIndexes(visibleAreaTop, visibleAreaBottom, listTopOffset, itemsCount) {
      var _this$_getVisibleItem = this._getVisibleItemIndexes(visibleAreaTop, visibleAreaBottom, listTopOffset, itemsCount),
          firstNonMeasuredItemIndex = _this$_getVisibleItem.firstNonMeasuredItemIndex,
          firstShownItemIndex = _this$_getVisibleItem.firstShownItemIndex,
          lastShownItemIndex = _this$_getVisibleItem.lastShownItemIndex;

      var redoLayoutAfterMeasuringItemHeights = firstNonMeasuredItemIndex !== undefined; // If some items will be rendered in order to measure their height,
      // and it's not a `preserveScrollPositionOnPrependItems` case,
      // then limit the amount of such items being measured in a single pass.

      if (redoLayoutAfterMeasuringItemHeights && this.measureItemsBatchSize) {
        var maxAllowedLastShownItemIndex = firstNonMeasuredItemIndex + this.measureItemsBatchSize - 1;
        var columnsCount = this.getColumnsCount();
        lastShownItemIndex = Math.min( // Also guards against index overflow.
        lastShownItemIndex, // The index of the last item in the row.
        Math.ceil(maxAllowedLastShownItemIndex / columnsCount) * columnsCount - 1);
      }

      return {
        firstShownItemIndex: firstShownItemIndex,
        lastShownItemIndex: lastShownItemIndex,
        redoLayoutAfterMeasuringItemHeights: redoLayoutAfterMeasuringItemHeights
      };
    }
  }, {
    key: "getNonVisibleListShownItemIndexes",
    value: function getNonVisibleListShownItemIndexes() {
      return {
        firstShownItemIndex: 0,
        lastShownItemIndex: 0,
        redoLayoutAfterMeasuringItemHeights: this.getItemHeight(0) === undefined
      };
    }
  }, {
    key: "getItemIndexes",
    value: function getItemIndexes(visibleAreaTop, visibleAreaBottom, listTopOffset, listHeight, itemsCount) {
      var isVisible = listTopOffset + listHeight > visibleAreaTop && listTopOffset < visibleAreaBottom;

      if (!isVisible) {
        (0,_utility_debug__WEBPACK_IMPORTED_MODULE_0__.default)('The entire list is off-screen. No items are visible.');
        return;
      } // Find the items which are displayed in the viewport.


      var indexes = this.getVisibleItemIndexes(visibleAreaTop, visibleAreaBottom, listTopOffset, itemsCount); // The list height is estimated until all items have been seen,
      // so it's possible that even when the list DOM element happens
      // to be in the viewport, in reality the list isn't visible
      // in which case `firstShownItemIndex` will be `undefined`.

      if (indexes.firstShownItemIndex === undefined) {
        (0,_utility_debug__WEBPACK_IMPORTED_MODULE_0__.default)('The entire list is off-screen. No items are visible.');
        return;
      }

      return indexes;
    }
    /**
     * Measures "before" items height.
     * @param  {number} firstShownItemIndex — New first shown item index.
     * @param  {number} lastShownItemIndex — New last shown item index.
     * @return {number}
     */

  }, {
    key: "getBeforeItemsHeight",
    value: function getBeforeItemsHeight(firstShownItemIndex, lastShownItemIndex) {
      var columnsCount = this.getColumnsCount();
      var firstShownRowIndex = Math.floor(firstShownItemIndex / columnsCount);
      var beforeItemsHeight = 0; // Add all "before" items height.

      var rowIndex = 0;

      while (rowIndex < firstShownRowIndex) {
        var rowHeight = 0;
        var columnIndex = 0;

        while (columnIndex < columnsCount) {
          rowHeight = Math.max(rowHeight, this.getItemHeight(rowIndex * columnsCount + columnIndex) || this.getAverageItemHeight());
          columnIndex++;
        }

        beforeItemsHeight += rowHeight;
        beforeItemsHeight += this.getVerticalSpacing();
        rowIndex++;
      }

      return beforeItemsHeight;
    }
    /**
     * Measures "after" items height.
     * @param  {number} firstShownItemIndex — New first shown item index.
     * @param  {number} lastShownItemIndex — New last shown item index.
     * @param  {number} averageItemHeight — Average item height.
     * @param  {number} verticalSpacing — Item vertical spacing.
     * @param  {number} itemsCount — Items count.
     * @return {number}
     */

  }, {
    key: "getAfterItemsHeight",
    value: function getAfterItemsHeight(firstShownItemIndex, lastShownItemIndex, itemsCount) {
      var columnsCount = this.getColumnsCount();
      var rowsCount = Math.ceil(itemsCount / columnsCount);
      var lastShownRowIndex = Math.floor(lastShownItemIndex / columnsCount);
      var afterItemsHeight = 0;
      var rowIndex = lastShownRowIndex + 1;

      while (rowIndex < rowsCount) {
        var rowHeight = 0;
        var columnIndex = 0;
        var i = void 0;

        while (columnIndex < columnsCount && (i = rowIndex * columnsCount + columnIndex) < itemsCount) {
          rowHeight = Math.max(rowHeight, this.getItemHeight(i) || this.getAverageItemHeight());
          columnIndex++;
        } // Add all "after" items height.


        afterItemsHeight += this.getVerticalSpacing();
        afterItemsHeight += rowHeight;
        rowIndex++;
      }

      return afterItemsHeight;
    }
    /**
     * Finds the indexes of the currently visible items.
     * @return {object} `{ firstShownItemIndex: number, lastShownItemIndex: number, redoLayoutAfterMeasuringItemHeights: boolean }`
     */

  }, {
    key: "getShownItemIndexes",
    value: function getShownItemIndexes(_ref5) {
      var listHeight = _ref5.listHeight,
          itemsCount = _ref5.itemsCount,
          visibleAreaIncludingMargins = _ref5.visibleAreaIncludingMargins,
          listTopOffsetInsideScrollableContainer = _ref5.listTopOffsetInsideScrollableContainer;

      if (this.bypass) {
        return {
          firstShownItemIndex: 0,
          lastShownItemIndex: itemsCount - 1
        };
      } // Finds the indexes of the items that are currently visible
      // (or close to being visible) in the scrollable container.
      // For scrollable containers other than the main screen, it could also
      // check the visibility of such scrollable container itself, because it
      // might be not visible.
      // If such kind of an optimization would hypothetically be implemented,
      // then it would also require listening for "scroll" events on the screen.
      // Overall, I suppose that such "actual visibility" feature would be
      // a very minor optimization and not something I'd deal with.


      return this.getItemIndexes(visibleAreaIncludingMargins.top, visibleAreaIncludingMargins.bottom, listTopOffsetInsideScrollableContainer, listHeight, itemsCount) || this.getNonVisibleListShownItemIndexes();
    }
  }, {
    key: "showItemsFromTheStart",
    value: function showItemsFromTheStart(layout) {
      layout.firstShownItemIndex = 0;
      layout.beforeItemsHeight = 0;
    }
  }]);

  return Layout;
}();


var LAYOUT_REASON = {
  SCROLL: 'scroll',
  STOPPED_SCROLLING: 'stopped scrolling',
  MANUAL: 'manual',
  MOUNT: 'mount',
  ITEM_HEIGHT_NOT_MEASURED: 'some item height wasn\'t measured',
  RESIZE: 'resize',
  ITEM_HEIGHT_CHANGED: 'item height changed',
  ITEMS_CHANGED: 'items changed',
  TOP_OFFSET_CHANGED: 'list top offset changed'
};
//# sourceMappingURL=Layout.js.map

/***/ }),

/***/ "./node_modules/virtual-scroller/modules/Resize.js":
/*!*********************************************************!*\
  !*** ./node_modules/virtual-scroller/modules/Resize.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Resize)
/* harmony export */ });
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ "./node_modules/virtual-scroller/modules/Layout.js");
/* harmony import */ var _utility_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility/debounce */ "./node_modules/virtual-scroller/modules/utility/debounce.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Resize =
/*#__PURE__*/
function () {
  function Resize(_ref) {
    var _this = this;

    var bypass = _ref.bypass,
        scrollableContainer = _ref.scrollableContainer,
        getContainerElement = _ref.getContainerElement,
        updateLayout = _ref.updateLayout,
        resetStateAndLayout = _ref.resetStateAndLayout;

    _classCallCheck(this, Resize);

    _defineProperty(this, "onResize", (0,_utility_debounce__WEBPACK_IMPORTED_MODULE_0__.default)(function () {
      // If `VirtualScroller` has been unmounted
      // while `debounce()`'s `setTimeout()` was waiting, then exit.
      if (!_this.isRendered) {
        return;
      }

      var prevScrollableContainerWidth = _this.scrollableContainerWidth;
      var prevScrollableContainerHeight = _this.scrollableContainerHeight;
      _this.scrollableContainerWidth = _this.scrollableContainer.getWidth();
      _this.scrollableContainerHeight = _this.scrollableContainer.getHeight();

      if (_this.scrollableContainerWidth === prevScrollableContainerWidth) {
        if (_this.scrollableContainerHeight === prevScrollableContainerHeight) {
          // The dimensions of the container didn't change,
          // so there's no need to re-layout anything.
          return;
        } else {
          // Scrollable container height has changed,
          // so just recalculate shown item indexes.
          // No need to perform a re-layout from scratch.
          _this.updateLayout({
            reason: _Layout__WEBPACK_IMPORTED_MODULE_1__.LAYOUT_REASON.RESIZE
          });
        }
      } else {
        // Reset item heights, because if scrollable container's width (or height)
        // has changed, then the list width (or height) most likely also has changed,
        // and also some CSS `@media()` rules might have been added or removed.
        // So re-render the list entirely.
        _this.resetStateAndLayout();
      }
    }, SCROLLABLE_CONTAINER_RESIZE_DEBOUNCE_INTERVAL));

    this.bypass = bypass;
    this.scrollableContainer = scrollableContainer;
    this.getContainerElement = getContainerElement;
    this.updateLayout = updateLayout;
    this.resetStateAndLayout = resetStateAndLayout;
  }

  _createClass(Resize, [{
    key: "listen",
    value: function listen() {
      if (this.bypass) {
        return;
      }

      this.isRendered = true;
      this.scrollableContainerWidth = this.scrollableContainer.getWidth();
      this.scrollableContainerHeight = this.scrollableContainer.getHeight();
      this.scrollableContainerUnlistenResize = this.scrollableContainer.onResize(this.onResize, {
        container: this.getContainerElement()
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      this.isRendered = false;

      if (this.scrollableContainerUnlistenResize) {
        this.scrollableContainerUnlistenResize();
      }
    }
    /**
     * On scrollable container resize.
     */

  }]);

  return Resize;
}();


var SCROLLABLE_CONTAINER_RESIZE_DEBOUNCE_INTERVAL = 250;
//# sourceMappingURL=Resize.js.map

/***/ }),

/***/ "./node_modules/virtual-scroller/modules/RestoreScroll.js":
/*!****************************************************************!*\
  !*** ./node_modules/virtual-scroller/modules/RestoreScroll.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RestoreScroll)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RestoreScroll =
/*#__PURE__*/
function () {
  function RestoreScroll(_ref) {
    var screen = _ref.screen,
        getContainerElement = _ref.getContainerElement,
        scrollBy = _ref.scrollBy;

    _classCallCheck(this, RestoreScroll);

    this.screen = screen;
    this.getContainerElement = getContainerElement;
    this.scrollBy = scrollBy;
  }
  /**
   * `<ReactVirtualScroller/>` calls this method.
   * @param  {any[]} previousItems
   * @param  {any[]} newItems
   * @param  {number} prependedItemsCount
   */


  _createClass(RestoreScroll, [{
    key: "captureScroll",
    value: function captureScroll(_ref2) {
      var previousItems = _ref2.previousItems,
          newItems = _ref2.newItems,
          prependedItemsCount = _ref2.prependedItemsCount;

      // If there were no items in the list
      // then there's no point in restoring scroll position.
      if (previousItems.length === 0) {
        return;
      } // If no items were prepended then no need to restore scroll position.


      if (prependedItemsCount === 0) {
        return;
      }

      var container = this.getContainerElement();
      var firstItemTopOffset = this.screen.getChildElementTopOffset(container, 0); // The first item is supposed to be shown when the user clicks
      // "Show previous items" button. If it isn't shown though,
      // could still calculate the first item's top position using
      // the values from `itemHeights` and `verticalSpacing`.
      // But that would be a weird non-realistic scenario.
      // if (firstShownItemIndex > 0) {
      // 	let i = firstShownItemIndex - 1
      // 	while (i >= 0) {
      // 		firstItemTopOffset += itemHeights[i] + verticalSpacing
      // 		i--
      // 	}
      // }
      // If the scroll position has already been captured for restoration,
      // then don't capture it the second time.
      // Capturing scroll position could happen when using `<ReactVirtualScroller/>`
      // because it calls `.captureScroll()` inside `ReactVirtualScroller.render()`
      // which is followed by `<VirtualScroller/>`'s `.componentDidUpdate()`
      // that also calls `.captureScroll()` with the same arguments,
      // so that second call to `.captureScroll()` is ignored.
      // Calling `.captureScroll()` inside `ReactVirtualScroller.render()`
      // is done to prevent scroll Y position from jumping
      // when showing the first page of the "Previous items".
      // See the long section of comments in `ReactVirtualScroller.render()`
      // method for more info on why is `.captureScroll()` called there.

      if (this.restoreScrollAfterRenderValues && this.restoreScrollAfterRenderValues.previousItems === previousItems && this.restoreScrollAfterRenderValues.newItems === newItems) {
        return;
      }

      this.restoreScrollAfterRenderValues = {
        previousItems: previousItems,
        newItems: newItems,
        index: prependedItemsCount,
        visibleAreaTop: firstItemTopOffset
      };
    }
  }, {
    key: "getAnchorItemIndex",
    value: function getAnchorItemIndex() {
      return this.restoreScrollAfterRenderValues.index;
    }
  }, {
    key: "shouldRestoreScrollAfterRender",
    value: function shouldRestoreScrollAfterRender() {
      return this.restoreScrollAfterRenderValues !== undefined;
    }
  }, {
    key: "getScrollDifference",
    value: function getScrollDifference() {
      var _this$restoreScrollAf = this.restoreScrollAfterRenderValues,
          index = _this$restoreScrollAf.index,
          visibleAreaTop = _this$restoreScrollAf.visibleAreaTop;
      this.restoreScrollAfterRenderValues = undefined; // `firstShownItemIndex` is supposed to be `0` here.

      var newVisibleAreaTop = this.screen.getChildElementTopOffset(this.getContainerElement(), index);
      return newVisibleAreaTop - visibleAreaTop;
    }
  }]);

  return RestoreScroll;
}();


//# sourceMappingURL=RestoreScroll.js.map

/***/ }),

/***/ "./node_modules/virtual-scroller/modules/Scroll.js":
/*!*********************************************************!*\
  !*** ./node_modules/virtual-scroller/modules/Scroll.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Scroll)
/* harmony export */ });
/* harmony import */ var request_animation_frame_timeout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! request-animation-frame-timeout */ "./node_modules/request-animation-frame-timeout/modules/index.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout */ "./node_modules/virtual-scroller/modules/Layout.js");
/* harmony import */ var _utility_debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility/debug */ "./node_modules/virtual-scroller/modules/utility/debug.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// For some weird reason, in Chrome, `setTimeout()` would lag up to a second (or more) behind.
// Turns out, Chrome developers have deprecated `setTimeout()` API entirely without asking anyone.
// Replacing `setTimeout()` with `requestAnimationFrame()` can work around that Chrome bug.
// https://github.com/bvaughn/react-virtualized/issues/722




var Scroll =
/*#__PURE__*/
function () {
  function Scroll(_ref) {
    var _this = this;

    var bypass = _ref.bypass,
        scrollableContainer = _ref.scrollableContainer,
        updateLayout = _ref.updateLayout,
        initialScrollPosition = _ref.initialScrollPosition,
        onScrollPositionChange = _ref.onScrollPositionChange,
        isImmediateLayoutScheduled = _ref.isImmediateLayoutScheduled,
        hasNonRenderedItemsAtTheTop = _ref.hasNonRenderedItemsAtTheTop,
        hasNonRenderedItemsAtTheBottom = _ref.hasNonRenderedItemsAtTheBottom,
        getLatestLayoutVisibleAreaIncludingMargins = _ref.getLatestLayoutVisibleAreaIncludingMargins,
        preserveScrollPositionOfTheBottomOfTheListOnMount = _ref.preserveScrollPositionOfTheBottomOfTheListOnMount;

    _classCallCheck(this, Scroll);

    _defineProperty(this, "updateScrollPosition", function () {
      _this.onScrollPositionChange(_this.getScrollY());
    });

    _defineProperty(this, "onScroll", function () {
      // Prefer not performing a re-layout while the user is scrolling (if possible).
      // If the user doesn't scroll too far and then stops for a moment,
      // then a mid-scroll re-layout could be delayed until such a brief stop:
      // presumably, this results in better (smoother) scrolling performance,
      // delaying the work to when it doesn't introduce any stutter or "jank".
      // Reset `this.onUserStopsScrollingTimer` (will be re-created below).
      _this.cancelOnUserStopsScrollingTimer(); // See whether rendering "new" previous/next items is required
      // right now, or it can wait until the user stops scrolling.


      var forceUpdate = // If the items have been rendered at least once
      _this.getLatestLayoutVisibleAreaIncludingMargins() && ( // If the user has scrolled up past the extra "margin"
      _this.getScrollY() < _this.getLatestLayoutVisibleAreaIncludingMargins().top && // and if there're any previous non-rendered items to render.
      _this.hasNonRenderedItemsAtTheTop() || // If the user has scrolled down past the extra "margin"
      _this.getScrollY() + _this.scrollableContainer.getHeight() > _this.getLatestLayoutVisibleAreaIncludingMargins().bottom && // and if there're any next non-rendered items to render.
      _this.hasNonRenderedItemsAtTheBottom());

      if (forceUpdate) {
        (0,_utility_debug__WEBPACK_IMPORTED_MODULE_1__.default)('The user has scrolled far enough: force re-layout');
      } else {
        (0,_utility_debug__WEBPACK_IMPORTED_MODULE_1__.default)('The user hasn\'t scrolled too much: delay re-layout');
      }

      if (!forceUpdate) {
        // If a re-layout is already scheduled at the next "frame",
        // don't schedule a "re-layout when user stops scrolling" timer.
        if (_this.isImmediateLayoutScheduled()) {
          return;
        }

        _this.onUserStopsScrollingTimer = (0,request_animation_frame_timeout__WEBPACK_IMPORTED_MODULE_0__.setTimeout)(function () {
          _this.onUserStopsScrollingTimer = undefined;

          _this.updateLayout({
            reason: _Layout__WEBPACK_IMPORTED_MODULE_2__.LAYOUT_REASON.STOPPED_SCROLLING
          });
        }, // "scroll" events are usually dispatched every 16 milliseconds
        // for 60fps refresh rate, so waiting for 100 milliseconds feels
        // reasonable: that would be about 6 frames of inactivity period,
        // which could mean that either the user has stopped scrolling
        // (for a moment) or the browser is lagging and stuttering
        // (skipping frames due to high load).
        // If the user continues scrolling then this timeout is constantly
        // refreshed (cancelled and then re-created).
        WAIT_FOR_USER_TO_STOP_SCROLLING_TIMEOUT);
        return;
      }

      _this.updateLayout({
        reason: _Layout__WEBPACK_IMPORTED_MODULE_2__.LAYOUT_REASON.SCROLL
      });
    });

    this.bypass = bypass;
    this.scrollableContainer = scrollableContainer;
    this.updateLayout = updateLayout;
    this.initialScrollPosition = initialScrollPosition;
    this.onScrollPositionChange = onScrollPositionChange;
    this.isImmediateLayoutScheduled = isImmediateLayoutScheduled;
    this.hasNonRenderedItemsAtTheTop = hasNonRenderedItemsAtTheTop;
    this.hasNonRenderedItemsAtTheBottom = hasNonRenderedItemsAtTheBottom;
    this.getLatestLayoutVisibleAreaIncludingMargins = getLatestLayoutVisibleAreaIncludingMargins;

    if (preserveScrollPositionOfTheBottomOfTheListOnMount) {
      if (scrollableContainer) {
        this.preserveScrollPositionOfTheBottomOfTheListOnMount = {
          scrollableContainerContentHeight: scrollableContainer.getContentHeight()
        };
      }
    }
  }

  _createClass(Scroll, [{
    key: "listen",
    value: function listen() {
      if (this.initialScrollPosition !== undefined) {
        this.scrollToY(this.initialScrollPosition);
      }

      if (this.onScrollPositionChange) {
        this.updateScrollPosition();
        this.removeScrollPositionListener = this.scrollableContainer.addScrollListener(this.updateScrollPosition);
      }

      if (!this.bypass) {
        this.removeScrollListener = this.scrollableContainer.addScrollListener(this.onScroll);
      }

      if (this.preserveScrollPositionOfTheBottomOfTheListOnMount) {
        this.scrollToY(this.getScrollY() + (this.scrollableContainer.getContentHeight() - this.preserveScrollPositionOfTheBottomOfTheListOnMount.scrollableContainerContentHeight));
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.removeScrollPositionListener) {
        this.removeScrollPositionListener();
      }

      if (this.removeScrollListener) {
        this.removeScrollListener();
      }

      this.cancelOnUserStopsScrollingTimer();
    }
  }, {
    key: "scrollToY",
    value: function scrollToY(scrollY) {
      this.scrollableContainer.scrollToY(scrollY);
    }
  }, {
    key: "scrollByY",
    value: function scrollByY(_scrollByY) {
      this.scrollToY(this.getScrollY() + _scrollByY);
    }
  }, {
    key: "getScrollY",
    value: function getScrollY() {
      return this.scrollableContainer.getScrollY();
    }
    /**
     * Updates the current scroll Y position in state.
     */

  }, {
    key: "cancelOnUserStopsScrollingTimer",
    value: function cancelOnUserStopsScrollingTimer() {
      if (this.onUserStopsScrollingTimer) {
        (0,request_animation_frame_timeout__WEBPACK_IMPORTED_MODULE_0__.clearTimeout)(this.onUserStopsScrollingTimer);
        this.onUserStopsScrollingTimer = undefined;
      }
    }
  }, {
    key: "onLayout",
    value: function onLayout() {
      // Cancel a "re-layout when user stops scrolling" timer.
      this.cancelOnUserStopsScrollingTimer();
    }
  }, {
    key: "getVisibleAreaBounds",

    /**
     * Returns visible area coordinates relative to the scrollable container.
     * @return {object} `{ top: number, bottom: number }`
     */
    value: function getVisibleAreaBounds() {
      var scrollY = this.getScrollY();
      return {
        // The first pixel of the screen.
        top: scrollY,
        // The pixel after the last pixel of the screen.
        bottom: scrollY + this.scrollableContainer.getHeight()
      };
    }
  }]);

  return Scroll;
}();


var WAIT_FOR_USER_TO_STOP_SCROLLING_TIMEOUT = 100;
//# sourceMappingURL=Scroll.js.map

/***/ }),

/***/ "./node_modules/virtual-scroller/modules/VirtualScroller.js":
/*!******************************************************************!*\
  !*** ./node_modules/virtual-scroller/modules/VirtualScroller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VirtualScroller)
/* harmony export */ });
/* harmony import */ var request_animation_frame_timeout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! request-animation-frame-timeout */ "./node_modules/request-animation-frame-timeout/modules/index.js");
/* harmony import */ var _DOM_tbody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DOM/tbody */ "./node_modules/virtual-scroller/modules/DOM/tbody.js");
/* harmony import */ var _DOM_RenderingEngine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOM/RenderingEngine */ "./node_modules/virtual-scroller/modules/DOM/RenderingEngine.js");
/* harmony import */ var _DOM_WaitForStylesToLoad__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DOM/WaitForStylesToLoad */ "./node_modules/virtual-scroller/modules/DOM/WaitForStylesToLoad.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout */ "./node_modules/virtual-scroller/modules/Layout.js");
/* harmony import */ var _Resize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Resize */ "./node_modules/virtual-scroller/modules/Resize.js");
/* harmony import */ var _Scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Scroll */ "./node_modules/virtual-scroller/modules/Scroll.js");
/* harmony import */ var _RestoreScroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RestoreScroll */ "./node_modules/virtual-scroller/modules/RestoreScroll.js");
/* harmony import */ var _ItemHeights__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ItemHeights */ "./node_modules/virtual-scroller/modules/ItemHeights.js");
/* harmony import */ var _getItemsDiff__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getItemsDiff */ "./node_modules/virtual-scroller/modules/getItemsDiff.js");
/* harmony import */ var _getVerticalSpacing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./getVerticalSpacing */ "./node_modules/virtual-scroller/modules/getVerticalSpacing.js");
/* harmony import */ var _utility_debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility/debug */ "./node_modules/virtual-scroller/modules/utility/debug.js");
/* harmony import */ var _utility_shallowEqual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility/shallowEqual */ "./node_modules/virtual-scroller/modules/utility/shallowEqual.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// For some weird reason, in Chrome, `setTimeout()` would lag up to a second (or more) behind.
// Turns out, Chrome developers have deprecated `setTimeout()` API entirely without asking anyone.
// Replacing `setTimeout()` with `requestAnimationFrame()` can work around that Chrome bug.
// https://github.com/bvaughn/react-virtualized/issues/722










 // import getItemCoordinates from './getItemCoordinates'




var VirtualScroller =
/*#__PURE__*/
function () {
  /**
   * @param  {function} getContainerElement — Returns the container DOM `Element`.
   * @param  {any[]} items — The list of items.
   * @param  {Object} [options] — See README.md.
   * @return {VirtualScroller}
   */
  function VirtualScroller(getContainerElement, items) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, VirtualScroller);

    _defineProperty(this, "getListTopOffsetInsideScrollableContainer", function () {
      var listTopOffset = _this.scrollableContainer.getTopOffset(_this.getContainerElement());

      _this.waitForStylesToLoad.onGotListTopOffset(listTopOffset);

      return listTopOffset;
    });

    _defineProperty(this, "willUpdateState", function (newState, prevState) {
      // Ignore setting initial state.
      if (!prevState) {
        return;
      } // This function isn't currently used.
      // Was previously used to capture scroll position in order to
      // restore it later after the new state is rendered.

    });

    _defineProperty(this, "didUpdateState", function (prevState) {
      var newState = _this.getState();

      if (_this.onStateChange) {
        if (!(0,_utility_shallowEqual__WEBPACK_IMPORTED_MODULE_1__.default)(newState, prevState)) {
          _this.onStateChange(newState, prevState);
        }
      } // Ignore setting initial state.


      if (!prevState) {
        return;
      }

      if (!_this.isRendered) {
        return;
      }

      (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('~ Rendered ~');
      _this.newItemsPending = undefined;
      _this.layoutResetPending = undefined;
      var redoLayoutReason = _this.redoLayoutReason;
      _this.redoLayoutReason = undefined;
      var previousItems = prevState.items;
      var newItems = newState.items;

      if (newItems !== previousItems) {
        var layoutNeedsReCalculating = true;

        var itemsDiff = _this.getItemsDiff(previousItems, newItems); // If it's an "incremental" update.


        if (itemsDiff) {
          var prependedItemsCount = itemsDiff.prependedItemsCount,
              appendedItemsCount = itemsDiff.appendedItemsCount;

          if (prependedItemsCount > 0) {
            // The call to `.onPrepend()` must precede
            // the call to `.measureItemHeights()`
            // which is called in `.onRendered()`.
            _this.itemHeights.onPrepend(prependedItemsCount);

            if (_this.restoreScroll.shouldRestoreScrollAfterRender()) {
              layoutNeedsReCalculating = false;
              (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('~ Restore Scroll Position ~');

              var scrollByY = _this.restoreScroll.getScrollDifference();

              if (scrollByY) {
                (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('Scroll down by', scrollByY);

                _this.scroll.scrollByY(scrollByY);
              } else {
                (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('Scroll position hasn\'t changed');
              }
            }
          }
        } else {
          _this.itemHeights.reset();

          _this.itemHeights.initialize(_this.getState().itemHeights);
        }

        if (layoutNeedsReCalculating) {
          redoLayoutReason = _Layout__WEBPACK_IMPORTED_MODULE_3__.LAYOUT_REASON.ITEMS_CHANGED;
        }
      } // Call `.onRendered()` if shown items configuration changed.


      if (newState.firstShownItemIndex !== prevState.firstShownItemIndex || newState.lastShownItemIndex !== prevState.lastShownItemIndex || newState.items !== prevState.items) {
        _this.onRenderedNewLayout();
      }

      if (redoLayoutReason) {
        return _this.redoLayoutRightAfterRender({
          reason: redoLayoutReason
        });
      }
    });

    _defineProperty(this, "updateShownItemIndexes", function () {
      (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('~ Layout results ' + (_this.bypass ? '(bypass) ' : '') + '~');

      var visibleAreaIncludingMargins = _this.getVisibleAreaBoundsIncludingMargins();

      _this.latestLayoutVisibleAreaIncludingMargins = visibleAreaIncludingMargins;

      var listTopOffsetInsideScrollableContainer = _this.getListTopOffsetInsideScrollableContainer(); // Get shown item indexes.


      var _this$layout$getShown = _this.layout.getShownItemIndexes({
        listHeight: _this.screen.getElementHeight(_this.getContainerElement()),
        itemsCount: _this.getItemsCount(),
        visibleAreaIncludingMargins: visibleAreaIncludingMargins,
        listTopOffsetInsideScrollableContainer: listTopOffsetInsideScrollableContainer
      }),
          firstShownItemIndex = _this$layout$getShown.firstShownItemIndex,
          lastShownItemIndex = _this$layout$getShown.lastShownItemIndex,
          redoLayoutAfterMeasuringItemHeights = _this$layout$getShown.redoLayoutAfterMeasuringItemHeights; // If scroll position is scheduled to be restored after render,
      // then the "anchor" item must be rendered, and all of the prepended
      // items before it, all in a single pass. This way, all of the
      // prepended items' heights could be measured right after the render
      // has finished, and the scroll position can then be immediately restored.


      if (_this.restoreScroll.shouldRestoreScrollAfterRender()) {
        if (lastShownItemIndex < _this.restoreScroll.getAnchorItemIndex()) {
          lastShownItemIndex = _this.restoreScroll.getAnchorItemIndex();
        } // `firstShownItemIndex` is always `0` when prepending items.
        // And `lastShownItemIndex` always covers all prepended items in this case.
        // None of the prepended items have been rendered before,
        // so their heights are unknown. The code at the start of this function
        // did therefore set `redoLayoutAfterMeasuringItemHeights` to `true`
        // in order to render just the first prepended item in order to
        // measure it, and only then make a decision on how many other
        // prepended items to render. But since we've instructed the code
        // to show all of the prepended items at once, there's no need to
        // "redo layout after render". Additionally, if layout was re-done
        // after render, then there would be a short interval of visual
        // "jitter" due to the scroll position not being restored because it'd
        // wait for the second layout to finish instead of being restored
        // right after the first one.


        redoLayoutAfterMeasuringItemHeights = false;
      } // Measure "before" items height.


      var beforeItemsHeight = _this.layout.getBeforeItemsHeight(firstShownItemIndex, lastShownItemIndex); // Measure "after" items height.


      var afterItemsHeight = _this.layout.getAfterItemsHeight(firstShownItemIndex, lastShownItemIndex, _this.getItemsCount()); // Debugging.


      if (_this._getColumnsCount) {
        (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('Columns count', _this.getColumnsCount());
      }

      (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('First shown item index', firstShownItemIndex);
      (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('Last shown item index', lastShownItemIndex);
      (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('Before items height', beforeItemsHeight);
      (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('After items height (actual or estimated)', afterItemsHeight);
      (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('Average item height (calculated on previous render)', _this.itemHeights.getAverage());

      if ((0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.isDebug)()) {
        (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('Item heights', _this.getState().itemHeights.slice());
        (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('Item states', _this.getState().itemStates.slice());
      }

      if (redoLayoutAfterMeasuringItemHeights) {
        // `this.redoLayoutReason` will be detected in `didUpdateState()`.
        // `didUpdateState()` is triggered by `this.setState()` below.
        _this.redoLayoutReason = _Layout__WEBPACK_IMPORTED_MODULE_3__.LAYOUT_REASON.ITEM_HEIGHT_NOT_MEASURED;
      } // Validate the heights of items to be hidden on next render.
      // For example, a user could click a "Show more" button,
      // or an "Expand YouTube video" button, which would result
      // in the actual height of the list item being different
      // from what has been initially measured in `this.itemHeights[i]`,
      // if the developer didn't call `.onItemStateChange()` and `.onItemHeightChange(i)`.


      _this.validateWillBeHiddenItemHeights(firstShownItemIndex, lastShownItemIndex); // Optionally preload items to be rendered.


      _this.onBeforeShowItems(_this.getState().items, _this.getState().itemHeights, firstShownItemIndex, lastShownItemIndex); // Render.


      _this.setState({
        firstShownItemIndex: firstShownItemIndex,
        lastShownItemIndex: lastShownItemIndex,
        beforeItemsHeight: beforeItemsHeight,
        afterItemsHeight: afterItemsHeight // // Average item height is stored in state to differentiate between
        // // the initial state and "anything has been measured already" state.
        // averageItemHeight: this.itemHeights.getAverage()

      });
    });

    _defineProperty(this, "onUpdateShownItemIndexes", function (_ref) {
      var reason = _ref.reason;

      // If there're no items then there's no need to re-layout anything.
      if (_this.getItemsCount() === 0) {
        return;
      } // Cancel a "re-layout when user stops scrolling" timer.


      _this.scroll.onLayout(); // Cancel a re-layout that is scheduled to run at the next "frame",
      // because a re-layout will be performed right now.


      if (_this.layoutTimer) {
        (0,request_animation_frame_timeout__WEBPACK_IMPORTED_MODULE_0__.clearTimeout)(_this.layoutTimer);
        _this.layoutTimer = undefined;
      } // Perform a re-layout.


      (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)("~ Calculate Layout (on ".concat(reason, ") ~"));

      _this.updateShownItemIndexes();
    });

    _defineProperty(this, "updateLayout", function () {
      return _this.onUpdateShownItemIndexes({
        reason: _Layout__WEBPACK_IMPORTED_MODULE_3__.LAYOUT_REASON.MANUAL
      });
    });

    _defineProperty(this, "layout", function () {
      return _this.updateLayout();
    });

    var getState = options.getState,
        setState = options.setState,
        onStateChange = options.onStateChange,
        customState = options.customState,
        preserveScrollPositionAtBottomOnMount = options.preserveScrollPositionAtBottomOnMount,
        preserveScrollPositionOfTheBottomOfTheListOnMount = options.preserveScrollPositionOfTheBottomOfTheListOnMount,
        initialScrollPosition = options.initialScrollPosition,
        onScrollPositionChange = options.onScrollPositionChange,
        measureItemsBatchSize = options.measureItemsBatchSize,
        getScrollableContainer = options.getScrollableContainer,
        getColumnsCount = options.getColumnsCount,
        getItemId = options.getItemId,
        tbody = options.tbody,
        _useTimeoutInRenderLoop = options._useTimeoutInRenderLoop;
    var bypass = options.bypass,
        estimatedItemHeight = options.estimatedItemHeight,
        onItemInitialRender = options.onItemInitialRender,
        onItemFirstRender = options.onItemFirstRender,
        scrollableContainer = options.scrollableContainer,
        state = options.state,
        renderingEngine = options.renderingEngine;
    (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('~ Initialize ~'); // If `state` is passed then use `items` from `state`
    // instead of the `items` argument.

    if (state) {
      items = state.items;
    } // `getScrollableContainer` option is deprecated.
    // Use `scrollableContainer` instead.


    if (!scrollableContainer && getScrollableContainer) {
      scrollableContainer = getScrollableContainer();
    } // Could support non-DOM rendering engines.
    // For example, React Native, `<canvas/>`, etc.


    if (!renderingEngine) {
      renderingEngine = _DOM_RenderingEngine__WEBPACK_IMPORTED_MODULE_4__.default;
    }

    this.screen = renderingEngine.createScreen();
    this.scrollableContainer = renderingEngine.createScrollableContainer(scrollableContainer); // if (margin === undefined) {
    // 	// Renders items which are outside of the screen by this "margin".
    // 	// Is the screen height by default: seems to be the optimal value
    // 	// for "Page Up" / "Page Down" navigation and optimized mouse wheel scrolling.
    // 	margin = this.scrollableContainer ? this.scrollableContainer.getHeight() : 0
    // }
    // Work around `<tbody/>` not being able to have `padding`.
    // https://gitlab.com/catamphetamine/virtual-scroller/-/issues/1

    if (tbody) {
      if (renderingEngine.name !== 'DOM') {
        throw new Error('`tbody` option is only supported for DOM rendering engine');
      }

      (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('~ <tbody/> detected ~');
      this.tbody = true;

      if (!(0,_DOM_tbody__WEBPACK_IMPORTED_MODULE_5__.supportsTbody)()) {
        (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('~ <tbody/> not supported ~');
        (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.reportError)(_DOM_tbody__WEBPACK_IMPORTED_MODULE_5__.BROWSER_NOT_SUPPORTED_ERROR);
        bypass = true;
      }
    }

    if (bypass) {
      (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('~ "bypass" mode ~');
    } // In `bypass` mode, `VirtualScroller` doesn't wait
    // for the user to scroll down to render all items:
    // instead, it renders all items right away, as if
    // the list is rendered without using `VirtualScroller`.
    // It was added just to measure how much is the
    // performance difference between using a `VirtualScroller`
    // and not using a `VirtualScroller`.
    // It turned out that unmounting large React component trees
    // is a very long process, so `VirtualScroller` does seem to
    // make sense when used in a React application.


    this.bypass = bypass; // this.bypassBatchSize = bypassBatchSize || 10
    // Using `setTimeout()` in render loop is a workaround
    // for avoiding a React error message:
    // "Maximum update depth exceeded.
    //  This can happen when a component repeatedly calls
    //  `.setState()` inside `componentWillUpdate()` or `componentDidUpdate()`.
    //  React limits the number of nested updates to prevent infinite loops."

    this._useTimeoutInRenderLoop = _useTimeoutInRenderLoop;

    if (getItemId) {
      this.isItemEqual = function (a, b) {
        return getItemId(a) === getItemId(b);
      };
    } else {
      this.isItemEqual = function (a, b) {
        return a === b;
      };
    }

    this.initialItems = items; // this.margin = margin

    this.onStateChange = onStateChange;
    this._getColumnsCount = getColumnsCount;

    if (onItemInitialRender) {
      this.onItemInitialRender = onItemInitialRender;
    } // `onItemFirstRender(i)` is deprecated, use `onItemInitialRender(item)` instead.
    else if (onItemFirstRender) {
        this.onItemInitialRender = function (item) {
          console.warn("[virtual-scroller] `onItemFirstRender(i)` is deprecated, use `onItemInitialRender(item)` instead.");

          var _this$getState = _this.getState(),
              items = _this$getState.items;

          var i = items.indexOf(item); // The `item` could also be non-found due to the inconsistency bug:
          // The reason is that `i` can be non-consistent with the `items`
          // passed to `<VirtualScroller/>` in React due to `setState()` not being
          // instanteneous: when new `items` are passed to `<VirtualScroller/>`,
          // `VirtualScroller.setState({ items })` is called, and if `onItemFirstRender(i)`
          // is called after the aforementioned `setState()` is called but before it finishes,
          // `i` would point to an index in "previous" `items` while the application
          // would assume that `i` points to an index in the "new" `items`,
          // resulting in an incorrect item being assumed by the application
          // or even in an "array index out of bounds" error.

          if (i >= 0) {
            onItemFirstRender(i);
          }
        };
      }

    (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('Items count', items.length);

    if (estimatedItemHeight) {
      (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('Estimated item height', estimatedItemHeight);
    }

    if (setState) {
      this.getState = getState;

      this.setState = function (state) {
        (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('Set state', state);
        setState(state, {
          willUpdateState: _this.willUpdateState,
          didUpdateState: _this.didUpdateState
        });
      };
    } else {
      this.getState = function () {
        return _this.state;
      };

      this.setState = function (state) {
        (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('Set state', state);

        var prevState = _this.getState(); // Because this variant of `.setState()` is "synchronous" (immediate),
        // it can be written like `...prevState`, and no state updates would be lost.
        // But if it was "asynchronous" (not immediate), then `...prevState`
        // wouldn't work in all cases, because it could be stale in cases
        // when more than a single `setState()` call is made before
        // the state actually updates, making `prevState` stale.


        var newState = _objectSpread({}, prevState, state);

        _this.willUpdateState(newState, prevState);

        _this.state = newState;

        _this.didUpdateState(prevState);
      };
    }

    if (state) {
      (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('Initial state (passed)', state);
    } // Sometimes, when `new VirtualScroller()` instance is created,
    // `getContainerElement()` might not be ready to return the "container" DOM Element yet
    // (for example, because it's not rendered yet). That's the reason why it's a getter function.
    // For example, in React `<VirtualScroller/>` component, a `VirtualScroller`
    // instance is created in the React component's `constructor()`, and at that time
    // the container Element is not yet available. The container Element is available
    // in `componentDidMount()`, but `componentDidMount()` is not executed on server,
    // which would mean that React `<VirtualScroller/>` wouldn't render at all
    // on server side, while with the `getContainerElement()` approach, on server side,
    // it still "renders" a list with a predefined amount of items in it by default.
    // (`initiallyRenderedItemsCount`, or `1`).


    this.getContainerElement = getContainerElement; // Remove any accidental text nodes from container (like whitespace).
    // Also guards against cases when someone accidentally tries
    // using `VirtualScroller` on a non-empty element.

    if (getContainerElement()) {
      this.screen.clearElement(getContainerElement());
    }

    this.itemHeights = new _ItemHeights__WEBPACK_IMPORTED_MODULE_6__.default(this.screen, this.getContainerElement, function (i) {
      return _this.getState().itemHeights[i];
    }, function (i, height) {
      return _this.getState().itemHeights[i] = height;
    }); // Initialize `ItemHeights` from the initially passed `state`.

    if (state) {
      this.itemHeights.initialize(state.itemHeights);
    }

    this.layout = new _Layout__WEBPACK_IMPORTED_MODULE_3__.default({
      bypass: bypass,
      estimatedItemHeight: estimatedItemHeight,
      measureItemsBatchSize: measureItemsBatchSize === undefined ? 50 : measureItemsBatchSize,
      getVerticalSpacing: function getVerticalSpacing() {
        return _this.getVerticalSpacing();
      },
      getColumnsCount: function getColumnsCount() {
        return _this.getColumnsCount();
      },
      getItemHeight: function getItemHeight(i) {
        return _this.getState().itemHeights[i];
      },
      getAverageItemHeight: function getAverageItemHeight() {
        return _this.itemHeights.getAverage();
      }
    });
    this.resize = new _Resize__WEBPACK_IMPORTED_MODULE_7__.default({
      bypass: bypass,
      scrollableContainer: this.scrollableContainer,
      getContainerElement: this.getContainerElement,
      updateLayout: function updateLayout(_ref2) {
        var reason = _ref2.reason;
        return _this.onUpdateShownItemIndexes({
          reason: reason
        });
      },
      resetStateAndLayout: function resetStateAndLayout() {
        // Reset item heights, because if scrollable container's width (or height)
        // has changed, then the list width (or height) most likely also has changed,
        // and also some CSS `@media()` rules might have been added or removed.
        // So re-render the list entirely.
        (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('~ Scrollable container size changed, re-measure item heights. ~');
        _this.redoLayoutReason = _Layout__WEBPACK_IMPORTED_MODULE_3__.LAYOUT_REASON.RESIZE; // `this.layoutResetPending` flag will be cleared in `didUpdateState()`.

        _this.layoutResetPending = true;
        (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('Reset state'); // Calling `this.setState(state)` will trigger `didUpdateState()`.
        // `didUpdateState()` will detect `this.redoLayoutReason`.

        _this.setState(_this.getInitialLayoutState(_this.newItemsPending || _this.getState().items));
      }
    });

    if (preserveScrollPositionAtBottomOnMount) {
      console.warn('[virtual-scroller] `preserveScrollPositionAtBottomOnMount` option/property has been renamed to `preserveScrollPositionOfTheBottomOfTheListOnMount`');
    }

    this.preserveScrollPositionOfTheBottomOfTheListOnMount = preserveScrollPositionOfTheBottomOfTheListOnMount || preserveScrollPositionAtBottomOnMount;
    this.scroll = new _Scroll__WEBPACK_IMPORTED_MODULE_8__.default({
      bypass: this.bypass,
      scrollableContainer: this.scrollableContainer,
      updateLayout: function updateLayout(_ref3) {
        var reason = _ref3.reason;
        return _this.onUpdateShownItemIndexes({
          reason: reason
        });
      },
      initialScrollPosition: initialScrollPosition,
      onScrollPositionChange: onScrollPositionChange,
      isImmediateLayoutScheduled: function isImmediateLayoutScheduled() {
        return _this.layoutTimer;
      },
      hasNonRenderedItemsAtTheTop: function hasNonRenderedItemsAtTheTop() {
        return _this.getState().firstShownItemIndex > 0;
      },
      hasNonRenderedItemsAtTheBottom: function hasNonRenderedItemsAtTheBottom() {
        return _this.getState().lastShownItemIndex < _this.getItemsCount() - 1;
      },
      getLatestLayoutVisibleAreaIncludingMargins: function getLatestLayoutVisibleAreaIncludingMargins() {
        return _this.latestLayoutVisibleAreaIncludingMargins;
      },
      preserveScrollPositionOfTheBottomOfTheListOnMount: this.preserveScrollPositionOfTheBottomOfTheListOnMount
    });
    this.restoreScroll = new _RestoreScroll__WEBPACK_IMPORTED_MODULE_9__.default({
      screen: this.screen,
      getContainerElement: this.getContainerElement
    });
    this.waitForStylesToLoad = new _DOM_WaitForStylesToLoad__WEBPACK_IMPORTED_MODULE_10__.default({
      updateLayout: function updateLayout(_ref4) {
        var reason = _ref4.reason;
        return _this.onUpdateShownItemIndexes({
          reason: reason
        });
      },
      getListTopOffsetInsideScrollableContainer: this.getListTopOffsetInsideScrollableContainer
    });
    this.setState(state || this.getInitialState(customState));
  }
  /**
   * Returns the initial state of the `VirtualScroller`.
   * @param  {object} [customState] — Any additional "custom" state may be stored in `VirtualScroller`'s state. For example, React implementation stores item "refs" as "custom" state.
   * @return {object}
   */


  _createClass(VirtualScroller, [{
    key: "getInitialState",
    value: function getInitialState(customState) {
      var items = this.initialItems;

      var state = _objectSpread({}, customState, this.getInitialLayoutState(items), {
        items: items,
        itemStates: new Array(items.length)
      });

      (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('Initial state (autogenerated)', state);
      (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('First shown item index', state.firstShownItemIndex);
      (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('Last shown item index', state.lastShownItemIndex);
      return state;
    }
  }, {
    key: "getInitialLayoutValues",
    value: function getInitialLayoutValues(_ref5) {
      var itemsCount = _ref5.itemsCount,
          bypass = _ref5.bypass;
      return this.layout.getInitialLayoutValues({
        bypass: bypass,
        itemsCount: itemsCount,
        visibleAreaHeightIncludingMargins: this.scrollableContainer && 2 * this.getMargin() + this.scrollableContainer.getHeight()
      });
    }
  }, {
    key: "getInitialLayoutState",
    value: function getInitialLayoutState(items) {
      var itemsCount = items.length;

      var _this$getInitialLayou = this.getInitialLayoutValues({
        itemsCount: itemsCount,
        bypass: this.preserveScrollPositionOfTheBottomOfTheListOnMount
      }),
          firstShownItemIndex = _this$getInitialLayou.firstShownItemIndex,
          lastShownItemIndex = _this$getInitialLayou.lastShownItemIndex,
          beforeItemsHeight = _this$getInitialLayou.beforeItemsHeight,
          afterItemsHeight = _this$getInitialLayou.afterItemsHeight;

      var itemHeights = new Array(itemsCount); // Optionally preload items to be rendered.

      this.onBeforeShowItems(items, itemHeights, firstShownItemIndex, lastShownItemIndex); // This "initial" state object must include all possible state properties
      // because `this.setState()` gets called with this state on window resize,
      // when `VirtualScroller` gets reset.
      // Item states aren't included here because the state of all items should be
      // preserved on window resize.

      return {
        itemHeights: itemHeights,
        columnsCount: this._getColumnsCount ? this._getColumnsCount(this.scrollableContainer) : undefined,
        verticalSpacing: undefined,
        firstShownItemIndex: firstShownItemIndex,
        lastShownItemIndex: lastShownItemIndex,
        beforeItemsHeight: beforeItemsHeight,
        afterItemsHeight: afterItemsHeight
      };
    }
  }, {
    key: "getVerticalSpacing",
    value: function getVerticalSpacing() {
      return this.getState() && this.getState().verticalSpacing || 0;
    }
  }, {
    key: "getColumnsCount",
    value: function getColumnsCount() {
      return this.getState() && this.getState().columnsCount || 1;
    }
  }, {
    key: "getItemsCount",
    value: function getItemsCount() {
      return this.getState().items.length;
    }
  }, {
    key: "getMargin",
    value: function getMargin() {
      // `VirtualScroller` also items that are outside of the screen
      // by the amount of this "render ahead margin" (both on top and bottom).
      // The default "render ahead margin" is equal to the screen height:
      // this seems to be the optimal value for "Page Up" / "Page Down" navigation
      // and optimized mouse wheel scrolling (a user is unlikely to continuously
      // scroll past the height of a screen, and when they stop scrolling,
      // the list is re-rendered).
      var renderAheadMarginRatio = 1; // in scrollable container heights.

      return this.scrollableContainer.getHeight() * renderAheadMarginRatio;
    }
    /**
     * Calls `onItemFirstRender()` for items that haven't been
     * "seen" previously.
     * @param  {any[]} items
     * @param  {number[]} itemHeights
     * @param  {number} firstShownItemIndex
     * @param  {number} lastShownItemIndex
     */

  }, {
    key: "onBeforeShowItems",
    value: function onBeforeShowItems(items, itemHeights, firstShownItemIndex, lastShownItemIndex) {
      if (this.onItemInitialRender) {
        var i = firstShownItemIndex;

        while (i <= lastShownItemIndex) {
          if (itemHeights[i] === undefined) {
            this.onItemInitialRender(items[i]);
          }

          i++;
        }
      }
    }
  }, {
    key: "onMount",
    value: function onMount() {
      console.warn('[virtual-scroller] `.onMount()` instance method name is deprecated, use `.listen()` instance method name instead.');
      this.listen();
    }
  }, {
    key: "render",
    value: function render() {
      console.warn('[virtual-scroller] `.render()` instance method name is deprecated, use `.listen()` instance method name instead.');
      this.listen();
    }
    /**
     * Should be invoked after a "container" DOM Element is mounted (inserted into the DOM tree).
     */

  }, {
    key: "listen",
    value: function listen() {
      if (this.isRendered === false) {
        throw new Error('[virtual-scroller] Can\'t restart a `VirtualScroller` after it has been stopped');
      }

      (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('~ Rendered (initial) ~'); // `this.isRendered = true` should be the first statement in this function,
      // otherwise `DOMVirtualScroller` would enter an infinite re-render loop.

      this.isRendered = true;
      this.onRenderedNewLayout();
      this.resize.listen();
      this.scroll.listen(); // Work around `<tbody/>` not being able to have `padding`.
      // https://gitlab.com/catamphetamine/virtual-scroller/-/issues/1

      if (this.tbody) {
        (0,_DOM_tbody__WEBPACK_IMPORTED_MODULE_5__.addTbodyStyles)(this.getContainerElement());
      }

      if (this.preserveScrollPositionOfTheBottomOfTheListOnMount) {// In this case, all items are shown, so there's no need to call
        // `this.onUpdateShownItemIndexes()` after the initial render.
      } else {
        this.onUpdateShownItemIndexes({
          reason: _Layout__WEBPACK_IMPORTED_MODULE_3__.LAYOUT_REASON.MOUNT
        });
      }
    }
  }, {
    key: "onRenderedNewLayout",
    value: function onRenderedNewLayout() {
      // Update item vertical spacing.
      this.measureVerticalSpacing(); // Measure "newly shown" item heights.
      // Also re-validate already measured items' heights.

      this.itemHeights.measureItemHeights(this.getState().firstShownItemIndex, this.getState().lastShownItemIndex); // Update `<tbody/>` `padding`.
      // (`<tbody/>` is different in a way that it can't have `margin`, only `padding`).
      // https://gitlab.com/catamphetamine/virtual-scroller/-/issues/1

      if (this.tbody) {
        (0,_DOM_tbody__WEBPACK_IMPORTED_MODULE_5__.setTbodyPadding)(this.getContainerElement(), this.getState().beforeItemsHeight, this.getState().afterItemsHeight);
      }
    }
  }, {
    key: "getVisibleAreaBoundsIncludingMargins",
    value: function getVisibleAreaBoundsIncludingMargins() {
      var visibleArea = this.scroll.getVisibleAreaBounds();
      visibleArea.top -= this.getMargin();
      visibleArea.bottom += this.getMargin();
      return visibleArea;
    }
    /**
     * Returns the list's top offset relative to the scrollable container's top edge.
     * @return {number}
     */

  }, {
    key: "onUnmount",
    value: function onUnmount() {
      console.warn('[virtual-scroller] `.onUnmount()` instance method name is deprecated, use `.stop()` instance method name instead.');
      this.stop();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      console.warn('[virtual-scroller] `.destroy()` instance method name is deprecated, use `.stop()` instance method name instead.');
      this.stop();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.isRendered = false;
      this.resize.stop();
      this.scroll.stop();
      this.waitForStylesToLoad.stop();

      if (this.layoutTimer) {
        (0,request_animation_frame_timeout__WEBPACK_IMPORTED_MODULE_0__.clearTimeout)(this.layoutTimer);
        this.layoutTimer = undefined;
      }
    }
    /**
     * Should be called right before `state` is updated.
     * @param  {object} prevState
     * @param  {object} newState
     */

  }, {
    key: "redoLayoutRightAfterRender",
    value: function redoLayoutRightAfterRender(_ref6) {
      var _this2 = this;

      var reason = _ref6.reason;

      // In React, `setTimeout()` is used to prevent a React error:
      // "Maximum update depth exceeded.
      //  This can happen when a component repeatedly calls
      //  `.setState()` inside `componentWillUpdate()` or `componentDidUpdate()`.
      //  React limits the number of nested updates to prevent infinite loops."
      if (this._useTimeoutInRenderLoop) {
        // Cancel a previously scheduled re-layout.
        if (this.layoutTimer) {
          (0,request_animation_frame_timeout__WEBPACK_IMPORTED_MODULE_0__.clearTimeout)(this.layoutTimer);
        } // Schedule a new re-layout.


        this.layoutTimer = (0,request_animation_frame_timeout__WEBPACK_IMPORTED_MODULE_0__.setTimeout)(function () {
          _this2.layoutTimer = undefined;

          _this2.onUpdateShownItemIndexes({
            reason: reason
          });
        }, 0);
      } else {
        this.onUpdateShownItemIndexes({
          reason: reason
        });
      }
    }
  }, {
    key: "measureVerticalSpacing",
    value: function measureVerticalSpacing() {
      if (this.getState().verticalSpacing === undefined) {
        (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('~ Measure item vertical spacing ~');
        var verticalSpacing = (0,_getVerticalSpacing__WEBPACK_IMPORTED_MODULE_11__.default)({
          container: this.getContainerElement(),
          screen: this.screen
        });

        if (verticalSpacing === undefined) {
          (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('Not enough items rendered to measure vertical spacing');
        } else {
          (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('Item vertical spacing', verticalSpacing);
          this.setState({
            verticalSpacing: verticalSpacing
          });
        }
      }
    }
  }, {
    key: "remeasureItemHeight",
    value: function remeasureItemHeight(i) {
      var _this$getState2 = this.getState(),
          firstShownItemIndex = _this$getState2.firstShownItemIndex;

      return this.itemHeights.remeasureItemHeight(i, firstShownItemIndex);
    }
  }, {
    key: "onItemStateChange",
    value: function onItemStateChange(i, itemState) {
      if ((0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.isDebug)()) {
        (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('~ Item state changed ~');
        (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('Item', i);
        (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('Previous state' + '\n' + JSON.stringify(this.getState().itemStates[i], null, 2));
        (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('New state' + '\n' + JSON.stringify(itemState, null, 2));
      }

      this.getState().itemStates[i] = itemState;
    }
  }, {
    key: "onItemHeightChange",
    value: function onItemHeightChange(i) {
      (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('~ Re-measure item height ~');
      (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('Item', i);

      var _this$getState3 = this.getState(),
          itemHeights = _this$getState3.itemHeights;

      var previousHeight = itemHeights[i];

      if (previousHeight === undefined) {
        return (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.reportError)("\"onItemHeightChange()\" has been called for item ".concat(i, ", but that item hasn't been rendered before."));
      }

      var newHeight = this.remeasureItemHeight(i); // Check if the item is still rendered.

      if (newHeight === undefined) {
        // There could be valid cases when an item is no longer rendered
        // by the time `.onItemHeightChange(i)` gets called.
        // For example, suppose there's a list of several items on a page,
        // and those items are in "minimized" state (having height 100px).
        // Then, a user clicks an "Expand all items" button, and all items
        // in the list are expanded (expanded item height is gonna be 700px).
        // `VirtualScroller` demands that `.onItemHeightChange(i)` is called
        // in such cases, and the developer has properly added the code to do that.
        // So, if there were 10 "minimized" items visible on a page, then there
        // will be 10 individual `.onItemHeightChange(i)` calls. No issues so far.
        // But, as the first `.onItemHeightChange(i)` call executes, it immediately
        // ("synchronously") triggers a re-layout, and that re-layout finds out
        // that now, because the first item is big, it occupies most of the screen
        // space, and only the first 3 items are visible on screen instead of 10,
        // and so it leaves the first 3 items mounted and unmounts the rest 7.
        // Then, after `VirtualScroller` has rerendered, the code returns to
        // where it was executing, and calls `.onItemHeightChange(i)` for the
        // second item. It also triggers an immediate re-layout that finds out
        // that only the first 2 items are visible on screen, and it unmounts
        // the third one too. After that, it calls `.onItemHeightChange(i)`
        // for the third item, but that item is no longer rendered, so its height
        // can't be measured, and the same's for all the rest of the original 10 items.
        // So, even though the developer has written their code properly, there're
        // still situations when the item could be no longer rendered by the time
        // `.onItemHeightChange(i)` gets called.
        return (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('The item is no longer rendered. This is not necessarily a bug, and could happen, for example, when there\'re several `onItemHeightChange(i)` calls issued at the same time.');
      }

      (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('Previous height', previousHeight);
      (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('New height', newHeight);

      if (previousHeight !== newHeight) {
        (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('~ Item height has changed ~'); // log('Item', i)

        this.onUpdateShownItemIndexes({
          reason: _Layout__WEBPACK_IMPORTED_MODULE_3__.LAYOUT_REASON.ITEM_HEIGHT_CHANGED
        });
      }
    }
    /**
     * Validates the heights of items to be hidden on next render.
     * For example, a user could click a "Show more" button,
     * or an "Expand YouTube video" button, which would result
     * in the actual height of the list item being different
     * from what has been initially measured in `this.itemHeights[i]`,
     * if the developer didn't call `.onItemStateChange()` and `.onItemHeightChange(i)`.
     */

  }, {
    key: "validateWillBeHiddenItemHeights",
    value: function validateWillBeHiddenItemHeights(firstShownItemIndex, lastShownItemIndex) {
      var i = this.getState().firstShownItemIndex;

      while (i <= this.getState().lastShownItemIndex) {
        if (i >= firstShownItemIndex && i <= lastShownItemIndex) {// The item's still visible.
        } else {
          // The item will be hidden. Re-measure its height.
          // The rationale is that there could be a situation when an item's
          // height has changed, and the developer has properly added an
          // `.onItemHeightChange(i)` call to notify `VirtualScroller`
          // about that change, but at the same time that wouldn't work.
          // For example, suppose there's a list of several items on a page,
          // and those items are in "minimized" state (having height 100px).
          // Then, a user clicks an "Expand all items" button, and all items
          // in the list are expanded (expanded item height is gonna be 700px).
          // `VirtualScroller` demands that `.onItemHeightChange(i)` is called
          // in such cases, and the developer has properly added the code to do that.
          // So, if there were 10 "minimized" items visible on a page, then there
          // will be 10 individual `.onItemHeightChange(i)` calls. No issues so far.
          // But, as the first `.onItemHeightChange(i)` call executes, it immediately
          // ("synchronously") triggers a re-layout, and that re-layout finds out
          // that now, because the first item is big, it occupies most of the screen
          // space, and only the first 3 items are visible on screen instead of 10,
          // and so it leaves the first 3 items mounted and unmounts the rest 7.
          // Then, after `VirtualScroller` has rerendered, the code returns to
          // where it was executing, and calls `.onItemHeightChange(i)` for the
          // second item. It also triggers an immediate re-layout that finds out
          // that only the first 2 items are visible on screen, and it unmounts
          // the third one too. After that, it calls `.onItemHeightChange(i)`
          // for the third item, but that item is no longer rendered, so its height
          // can't be measured, and the same's for all the rest of the original 10 items.
          // So, even though the developer has written their code properly, the
          // `VirtualScroller` still ends up having incorrect `itemHeights[]`:
          // `[700px, 700px, 100px, 100px, 100px, 100px, 100px, 100px, 100px, 100px]`
          // while it should have been `700px` for all of them.
          // To work around such issues, every item's height is re-measured before it
          // gets hidden.
          var previouslyMeasuredItemHeight = this.getState().itemHeights[i];
          var actualItemHeight = this.remeasureItemHeight(i);

          if (actualItemHeight !== previouslyMeasuredItemHeight) {
            (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('Item', i, 'will be unmounted at next render. Its height has changed from', previouslyMeasuredItemHeight, 'to', actualItemHeight, 'while it was shown. This is not necessarily a bug, and could happen, for example, when there\'re several `onItemHeightChange(i)` calls issued at the same time.');
          }
        }

        i++;
      }
    }
    /**
     * Updates the "from" and "to" shown item indexes.
     * If the list is visible and some of the items being shown are new
     * and are required to be measured first, then
     * `redoLayoutAfterMeasuringItemHeights` is `true`.
     * If the list is visible and all items being shown have been encountered
     * (and measured) before, then `redoLayoutAfterMeasuringItemHeights` is `false`.
     */

  }, {
    key: "updateItems",

    /**
     * @deprecated
     * `.updateItems()` has been renamed to `.setItems()`.
     */
    value: function updateItems(newItems, options) {
      return this.setItems(newItems, options);
    }
    /**
     * Updates `items`. For example, can prepend or append new items to the list.
     * @param  {any[]} newItems
     * @param {boolean} [options.preserveScrollPositionOnPrependItems] — Set to `true` to enable "restore scroll position after prepending items" feature (could be useful when implementing "Show previous items" button).
     */

  }, {
    key: "setItems",
    value: function setItems(newItems) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      // * @param  {object} [newCustomState] — If `customState` was passed to `getInitialState()`, this `newCustomState` updates it.
      var _this$getState4 = this.getState(),
          previousItems = _this$getState4.items;

      var _this$getState5 = this.getState(),
          itemStates = _this$getState5.itemStates,
          itemHeights = _this$getState5.itemHeights;

      (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('~ Update items ~');
      var layout;
      var itemsDiff = this.getItemsDiff(previousItems, newItems); // If it's an "incremental" update.

      if (itemsDiff && !this.layoutResetPending) {
        var _this$getState6 = this.getState(),
            firstShownItemIndex = _this$getState6.firstShownItemIndex,
            lastShownItemIndex = _this$getState6.lastShownItemIndex,
            beforeItemsHeight = _this$getState6.beforeItemsHeight,
            afterItemsHeight = _this$getState6.afterItemsHeight;

        layout = {
          firstShownItemIndex: firstShownItemIndex,
          lastShownItemIndex: lastShownItemIndex,
          beforeItemsHeight: beforeItemsHeight,
          afterItemsHeight: afterItemsHeight
        };
        var prependedItemsCount = itemsDiff.prependedItemsCount,
            appendedItemsCount = itemsDiff.appendedItemsCount;

        if (prependedItemsCount > 0) {
          (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('Prepend', prependedItemsCount, 'items');
          itemHeights = new Array(prependedItemsCount).concat(itemHeights);

          if (itemStates) {
            itemStates = new Array(prependedItemsCount).concat(itemStates);
          }
        }

        if (appendedItemsCount > 0) {
          (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('Append', appendedItemsCount, 'items');
          itemHeights = itemHeights.concat(new Array(appendedItemsCount));

          if (itemStates) {
            itemStates = itemStates.concat(new Array(appendedItemsCount));
          }
        }

        this.layout.updateLayoutForItemsDiff(layout, itemsDiff, {
          itemsCount: newItems.length
        });

        if (prependedItemsCount > 0) {
          // `preserveScrollPosition` option name is deprecated,
          // use `preserveScrollPositionOnPrependItems` instead.
          if (options.preserveScrollPositionOnPrependItems || options.preserveScrollPosition) {
            if (this.getState().firstShownItemIndex === 0) {
              this.restoreScroll.captureScroll({
                previousItems: previousItems,
                newItems: newItems,
                prependedItemsCount: prependedItemsCount
              });
              this.layout.showItemsFromTheStart(layout);
            }
          }
        }
      } else {
        (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('Items have changed, and', itemsDiff ? 'a re-layout from scratch has been requested.' : 'it\'s not a simple append and/or prepend.', 'Rerender the entire list from scratch.');
        (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('Previous items', previousItems);
        (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('New items', newItems);
        itemHeights = new Array(newItems.length);
        itemStates = new Array(newItems.length);
        layout = this.getInitialLayoutValues({
          itemsCount: newItems.length
        });
      }

      (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('~ Update state ~');
      (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('First shown item index', layout.firstShownItemIndex);
      (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('Last shown item index', layout.lastShownItemIndex);
      (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('Before items height', layout.beforeItemsHeight);
      (0,_utility_debug__WEBPACK_IMPORTED_MODULE_2__.default)('After items height (actual or estimated)', layout.afterItemsHeight); // Optionally preload items to be rendered.

      this.onBeforeShowItems(newItems, itemHeights, layout.firstShownItemIndex, layout.lastShownItemIndex); // `this.newItemsPending` will be cleared in `didUpdateState()`.

      this.newItemsPending = newItems; // Update state.

      this.setState(_objectSpread({}, layout, {
        items: newItems,
        itemStates: itemStates,
        itemHeights: itemHeights
      }));
    }
  }, {
    key: "getItemsDiff",
    value: function getItemsDiff(previousItems, newItems) {
      return (0,_getItemsDiff__WEBPACK_IMPORTED_MODULE_12__.default)(previousItems, newItems, this.isItemEqual);
    }
  }]);

  return VirtualScroller;
}();


//# sourceMappingURL=VirtualScroller.js.map

/***/ }),

/***/ "./node_modules/virtual-scroller/modules/getItemsDiff.js":
/*!***************************************************************!*\
  !*** ./node_modules/virtual-scroller/modules/getItemsDiff.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getItemsDiff)
/* harmony export */ });
/**
 * Checks whether it's an "incremental" items update, and returns the "diff".
 * @param  {any[]} previousItems
 * @param  {any[]} newItems
 * @return {object} [diff]
 */
function getItemsDiff(previousItems, newItems, isEqual) {
  var firstPreviousItemIndex = -1;
  var lastPreviousItemIndex = -1;

  if (previousItems.length > 0) {
    firstPreviousItemIndex = findInArray(newItems, previousItems[0], isEqual);

    if (firstPreviousItemIndex >= 0) {
      if (arePreviousItemsPreserved(previousItems, newItems, firstPreviousItemIndex, isEqual)) {
        lastPreviousItemIndex = firstPreviousItemIndex + previousItems.length - 1;
      }
    }
  }

  var isIncrementalUpdate = firstPreviousItemIndex >= 0 && lastPreviousItemIndex >= 0;

  if (isIncrementalUpdate) {
    return {
      prependedItemsCount: firstPreviousItemIndex,
      appendedItemsCount: newItems.length - (lastPreviousItemIndex + 1)
    };
  }
}

function arePreviousItemsPreserved(previousItems, newItems, offset, isEqual) {
  // Check each item of the `previousItems` to determine
  // whether it's an "incremental" items update.
  // (an update when items are prepended or appended)
  var i = 0;

  while (i < previousItems.length) {
    if (newItems.length <= offset + i || !isEqual(newItems[offset + i], previousItems[i])) {
      return false;
    }

    i++;
  }

  return true;
}

function findInArray(array, element, isEqual) {
  var i = 0;

  while (i < array.length) {
    if (isEqual(array[i], element)) {
      return i;
    }

    i++;
  }

  return -1;
}
//# sourceMappingURL=getItemsDiff.js.map

/***/ }),

/***/ "./node_modules/virtual-scroller/modules/getVerticalSpacing.js":
/*!*********************************************************************!*\
  !*** ./node_modules/virtual-scroller/modules/getVerticalSpacing.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getVerticalSpacing)
/* harmony export */ });
function getVerticalSpacing(_ref) {
  var container = _ref.container,
      screen = _ref.screen;

  if (screen.getChildElementsCount(container) > 1) {
    var firstShownRowTopOffset = screen.getChildElementTopOffset(container, 0);
    var firstShownRowHeight = screen.getChildElementHeight(container, 0);
    var i = 1;

    while (i < screen.getChildElementsCount(container)) {
      var itemTopOffset = screen.getChildElementTopOffset(container, i);
      var itemHeight = screen.getChildElementHeight(container, i); // If next row is detected.

      if (itemTopOffset !== firstShownRowTopOffset) {
        // Measure inter-row spacing.
        return itemTopOffset - (firstShownRowTopOffset + firstShownRowHeight);
      } // A row height is the maximum of its item heights.


      firstShownRowHeight = Math.max(firstShownRowHeight, itemHeight);
      i++;
    }
  }
}
//# sourceMappingURL=getVerticalSpacing.js.map

/***/ }),

/***/ "./node_modules/virtual-scroller/modules/utility/debounce.js":
/*!*******************************************************************!*\
  !*** ./node_modules/virtual-scroller/modules/utility/debounce.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ debounce)
/* harmony export */ });
/* harmony import */ var request_animation_frame_timeout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! request-animation-frame-timeout */ "./node_modules/request-animation-frame-timeout/modules/index.js");
// For some weird reason, in Chrome, `setTimeout()` would lag up to a second (or more) behind.
// Turns out, Chrome developers have deprecated `setTimeout()` API entirely without asking anyone.
// Replacing `setTimeout()` with `requestAnimationFrame()` can work around that Chrome bug.
// https://github.com/bvaughn/react-virtualized/issues/722

/**
 * Same as `lodash`'s `debounce()` for functions with no arguments.
 * @param  {function} func
 * @param  {number} interval
 * @return {function}
 */

function debounce(func, interval) {
  var timeout;
  return function () {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    (0,request_animation_frame_timeout__WEBPACK_IMPORTED_MODULE_0__.clearTimeout)(timeout);
    timeout = (0,request_animation_frame_timeout__WEBPACK_IMPORTED_MODULE_0__.setTimeout)(function () {
      return func.apply(_this, args);
    }, interval);
  };
}
//# sourceMappingURL=debounce.js.map

/***/ }),

/***/ "./node_modules/virtual-scroller/modules/utility/debug.js":
/*!****************************************************************!*\
  !*** ./node_modules/virtual-scroller/modules/utility/debug.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ log),
/* harmony export */   "reportError": () => (/* binding */ reportError),
/* harmony export */   "isDebug": () => (/* binding */ isDebug)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function log() {
  if (isDebug()) {
    var _console;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    (_console = console).log.apply(_console, _toConsumableArray(['[virtual-scroller]'].concat(args)));
  }
}
function reportError() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (typeof window !== 'undefined') {
    // In a web browser.
    // Output a debug message immediately so that it's known
    // at which point did the error occur between other debug logs.
    log.apply(this, ['ERROR'].concat(args));
    setTimeout(function () {
      // Throw an error in a timeout so that it doesn't interrupt the application's flow.
      // At the same time, by throwing a client-side error, such error could be spotted
      // in some error monitoring software like `sentry.io`, while also being visible
      // in the console.
      // The `.join(' ')` part doesn't support stringifying JSON objects,
      // but those don't seem to be used in any of the error messages.
      throw new Error(['[virtual-scroller]'].concat(args).join(' '));
    }, 0);
  } else {
    var _console2;

    // On a server.
    (_console2 = console).error.apply(_console2, _toConsumableArray(['[virtual-scroller]'].concat(args)));
  }
}
function isDebug() {
  return typeof window !== 'undefined' && window.VirtualScrollerDebug;
}
//# sourceMappingURL=debug.js.map

/***/ }),

/***/ "./node_modules/virtual-scroller/modules/utility/px.js":
/*!*************************************************************!*\
  !*** ./node_modules/virtual-scroller/modules/utility/px.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ px)
/* harmony export */ });
/**
 * Rounds coordinates upto 4th decimal place (after dot) and appends "px".
 * Small numbers could be printed as `"1.2345e-50"` unless rounded:
 * that would be invalid "px" value in CSS.
 * @param {number}
 * @return {string}
 */
function px(number) {
  // Fractional pixels are used on "retina" screens.
  return number.toFixed(2) + 'px';
}
//# sourceMappingURL=px.js.map

/***/ }),

/***/ "./node_modules/virtual-scroller/modules/utility/shallowEqual.js":
/*!***********************************************************************!*\
  !*** ./node_modules/virtual-scroller/modules/utility/shallowEqual.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shallowEqual)
/* harmony export */ });
// https://github.com/lodash/lodash/issues/2340
// https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/shallowEqual.js

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule shallowEqual
 * @typechecks
 * @flow
 */

/*eslint-disable no-self-compare */


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */

function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}
/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */


function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (_typeof(objA) !== 'object' || objA === null || _typeof(objB) !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  } // Test for A's keys different from B.


  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}
//# sourceMappingURL=shallowEqual.js.map

/***/ }),

/***/ "./node_modules/virtual-scroller/source/DOM/Screen.js":
/*!************************************************************!*\
  !*** ./node_modules/virtual-scroller/source/DOM/Screen.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Screen)
/* harmony export */ });
class Screen {
	/**
	 * Returns a child element's "top offset", relative to the `parentElement`'s top edge.
	 * @param  {Element} parentElement
	 * @param  {number} childElementIndex
	 * @return {number}
	 */
	getChildElementTopOffset(parentElement, childElementIndex) {
		return parentElement.childNodes[childElementIndex].getBoundingClientRect().top
	}

	/**
	 * Returns a child element's height.
	 * @param  {Element} parentElement
	 * @param  {number} childElementIndex
	 * @return {number}
	 */
	getChildElementHeight(parentElement, childElementIndex) {
		return this.getElementHeight(parentElement.childNodes[childElementIndex])
	}

	/**
	 * Returns the count of child elements of an element.
	 * @param  {Element} parentElement
	 * @return {number}
	 */
	getChildElementsCount(parentElement) {
		return parentElement.childNodes.length
	}

	/**
	 * Removes all child elements of an element.
	 * @param  {Element} element
	 */
	clearElement(element) {
		while (element.firstChild) {
			element.removeChild(element.firstChild)
		}
	}

	/**
	 * Returns an element's height.
	 * @param  {Element} element
	 * @return {number}
	 */
	getElementHeight(element) {
		// `offsetHeight` is not precise enough (doesn't return fractional pixels).
		// return element.offsetHeight
		return element.getBoundingClientRect().height
	}
}

/***/ }),

/***/ "./node_modules/virtual-scroller/source/DOM/ScrollableContainer.js":
/*!*************************************************************************!*\
  !*** ./node_modules/virtual-scroller/source/DOM/ScrollableContainer.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScrollableContainer),
/* harmony export */   "ScrollableWindowContainer": () => (/* binding */ ScrollableWindowContainer)
/* harmony export */ });
class ScrollableContainer {
	/**
	 * Constructs a new "scrollable container" from an element.
	 * @param {Element} scrollableContainer
	 */
	constructor(element) {
		this.element = element
	}

	/**
	 * Returns the current scroll position.
	 * @return {number}
	 */
	getScrollY() {
		return this.element.scrollTop
	}

	/**
	 * Scrolls to a specific position.
	 * @param {number} scrollY
	 */
	scrollToY(scrollY) {
		this.element.scrollTo(0, scrollY)
	}

	/**
	 * Returns "scrollable container" width,
	 * i.e. the available width for its content.
	 * @return {number}
	 */
	getWidth() {
		return this.element.offsetWidth
	}

	/**
	 * Returns the height of the "scrollable container" itself.
	 * Not to be confused with the height of "scrollable container"'s content.
	 * @return {number}
	 */
	getHeight() {
		// if (!this.element && !precise) {
		// 	return getScreenHeight()
		// }
		return this.element.offsetHeight
	}

	/**
	 * Returns the height of the content in a scrollable container.
	 * For example, a scrollable container can have a height of 500px,
	 * but the content in it could have a height of 5000px,
	 * in which case a vertical scrollbar is rendered, and only
	 * one-tenth of all the items are shown at any given moment.
	 * This function is currently only used when using the
	 * `preserveScrollPositionOfTheBottomOfTheListOnMount` feature.
	 * @return {number}
	 */
	getContentHeight() {
		return this.element.scrollHeight
	}

	/**
	 * Returns a "top offset" of an element
	 * relative to the "scrollable container"'s top edge.
	 * @param {Element} element
	 * @return {number}
	 */
	getTopOffset(element) {
		const scrollableContainerTop = this.element.getBoundingClientRect().top
		const scrollableContainerBorderTopWidth = this.element.clientTop
		const top = element.getBoundingClientRect().top
		return (top - scrollableContainerTop) + this.getScrollY() - scrollableContainerBorderTopWidth
	}

	// isVisible() {
	// 	const { top, bottom } = this.element.getBoundingClientRect()
	// 	return bottom > 0 && top < getScreenHeight()
	// }

	/**
	 * Adds a "scroll" event listener to the "scrollable container".
	 * @param {onScroll} Should be called whenever the scroll position inside the "scrollable container" (potentially) changes.
	 * @return {function} Returns a function that stops listening.
	 */
	addScrollListener(onScroll) {
		this.element.addEventListener('scroll', onScroll)
		return () => this.element.removeEventListener('scroll', onScroll)
	}

	/**
	 * Adds a "resize" event listener to the "scrollable container".
	 * @param {onResize} Should be called whenever the "scrollable container"'s width or height (potentially) changes.
	 * @param  {Element} options.container — The result of the `getContainerElement()` function that was passed in `VirtualScroller` constructor. For example, DOM renderer uses it to filter-out unrelated "resize" events.
	 * @return {function} Returns a function that stops listening.
	 */
	onResize(onResize, { container }) {
		// Could somehow track DOM Element size.
		// For now, `scrollableContainer` is supposed to have constant width and height.
		// (unless window is resized).
		// https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
		// https://web.dev/resize-observer/
		let unobserve
		if (typeof ResizeObserver !== 'undefined') {
			const resizeObserver = new ResizeObserver((entries) => {
				// "one entry per observed element".
				// https://web.dev/resize-observer/
				// `entry.target === this.element`.
				const entry = entries[0]
				// // If `entry.contentBoxSize` property is supported by the web browser.
				// if (entry.contentBoxSize) {
				// 	// https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentBoxSize
				// 	const width = entry.contentBoxSize.inlineSize
				// 	const height = entry.contentBoxSize.blockSize
				// }
				onResize()
			})
			resizeObserver.observe(this.element)
			unobserve = () => resizeObserver.unobserve(this.element)
		}
		// I guess, if window is resized, `onResize()` will be triggered twice:
		// once for window resize, and once for the scrollable container resize.
		// But `onResize()` also has an internal check: if the container size
		// hasn't changed since the previous time `onResize()` has been called,
		// then `onResize()` doesn't do anything, so, I guess, there shouldn't be
		// any "performance implications" of running the listener twice in such case.
		const unlistenGlobalResize = addGlobalResizeListener(onResize, { container })
		return () => {
			if (unobserve) {
				unobserve()
			}
			unlistenGlobalResize()
		}
	}
}

class ScrollableWindowContainer extends ScrollableContainer {
	constructor() {
		super(window)
	}

	/**
	 * Returns the current scroll position.
	 * @return {number}
	 */
	getScrollY() {
		// `window.scrollY` is not supported by Internet Explorer.
		return window.pageYOffset
	}

	/**
	 * Returns "scrollable container" width,
	 * i.e. the available width for its content.
	 * @return {number}
	 */
	getWidth() {
		// https://javascript.info/size-and-scroll-window
		// `<!DOCTYPE html>` may be required in order for this to work correctly.
		// Includes scrollbar (if any).
		// Correctly reflects page zoom in iOS Safari.
		// (scales screen width accordingly).
		// But, includes scrollbar (if any).
		return window.innerWidth
	}

	/**
	 * Returns the height of the "scrollable container" itself.
	 * Not to be confused with the height of "scrollable container"'s content.
	 * @return {number}
	 */
	getHeight() {
		// https://javascript.info/size-and-scroll-window
		// `<!DOCTYPE html>` is required in order for this to work correctly.
		// Without it, the returned height would be the height of the entire document.
		// Includes scrollbar (if any).
		// Supports iOS Safari's dynamically shown/hidden
		// top URL bar and bottom actions bar.
		// https://codesandbox.io/s/elegant-fog-iddrh
		// Tested in IE 11.
		// It also correctly reflects page zoom in iOS Safari.
		// (scales screen height accordingly).
		// But, includes scrollbar (if any).
		return window.innerHeight
	}

	/**
	 * Returns the height of the content in a scrollable container.
	 * For example, a scrollable container can have a height of 500px,
	 * but the content in it could have a height of 5000px,
	 * in which case a vertical scrollbar is rendered, and only
	 * one-tenth of all the items are shown at any given moment.
	 * This function is currently only used when using the
	 * `preserveScrollPositionOfTheBottomOfTheListOnMount` feature.
	 * @return {number}
	 */
	getContentHeight() {
		return document.documentElement.scrollHeight
	}

	/**
	 * Returns a "top offset" of an element
	 * relative to the "scrollable container"'s top edge.
	 * @param {Element} element
	 * @return {number}
	 */
	getTopOffset(element) {
		const borderTopWidth = document.clientTop || document.body.clientTop || 0
		return element.getBoundingClientRect().top + this.getScrollY() - borderTopWidth
	}

	/**
	 * Adds a "resize" event listener to the "scrollable container".
	 * @param {onScroll} Should be called whenever the "scrollable container"'s width or height (potentially) changes.
	 * @param  {Element} options.container — The result of the `getContainerElement()` function that was passed in `VirtualScroller` constructor. For example, DOM renderer uses it to filter-out unrelated "resize" events.
	 * @return {function} Returns a function that stops listening.
	 */
	onResize(onResize, { container }) {
		return addGlobalResizeListener(onResize, { container })
	}

	// isVisible() {
	// 	return true
	// }
}

/**
 * Adds a "resize" event listener to the `window`.
 * @param {onResize} Should be called whenever the "container"'s width or height (potentially) changes.
 * @param  {Element} options.container — The "container".
 * @return {function} Returns a function that stops listening.
 */
function addGlobalResizeListener(onResize, { container }) {
	const onResizeListener = () => {
		// By default, `VirtualScroller` always performs a re-layout
		// on window `resize` event. But browsers (Chrome, Firefox)
		// [trigger](https://developer.mozilla.org/en-US/docs/Web/API/Window/fullScreen#Notes)
		// window `resize` event also when a user switches into fullscreen mode:
		// for example, when a user is watching a video and double-clicks on it
		// to maximize it. And also when the user goes out of the fullscreen mode.
		// Each such fullscreen mode entering/exiting will trigger window `resize`
		// event that will it turn trigger a re-layout of `VirtualScroller`,
		// resulting in bad user experience. To prevent that, such cases are filtered out.
		// Some other workaround:
		// https://stackoverflow.com/questions/23770449/embedded-youtube-video-fullscreen-or-causing-resize
		if (document.fullscreenElement) {
			// If the fullscreened element doesn't contain the list
			// (and is not the list itself), then the layout hasn't been affected,
			// so don't perform a re-layout.
			//
			// For example, suppose there's a list of items, and some item contains a video.
			// If, upon clicking such video, it plays inline, and the user enters
			// fullscreen mode while playing such inline video, then the layout won't be
			// affected, and so such `resize` event should be ignored: when
			// `document.fullscreenElement` is in a separate "branch" relative to the
			// `container`.
			//
			// Another scenario: suppose that upon click, the video doesn't play inline,
			// but instead a "Slideshow" component is open, with the video shown at the
			// center of the screen in an overlay. If then the user enters fullscreen mode,
			// the layout wouldn't be affected too, so such `resize` event should also be
			// ignored: when `document.fullscreenElement` is inside the `container`.
			//
			if (document.fullscreenElement.contains(container)) {
				// The element is either the `container`'s ancestor,
				// Or is the `container` itself.
				// (`a.contains(b)` includes the `a === b` case).
				// So the `resize` event will affect the `container`'s dimensions.
			} else {
				// The element is either inside the `container`,
				// Or is in a separate tree.
				// So the `resize` event won't affect the `container`'s dimensions.
				return
			}
		}
		onResize()
	}
	window.addEventListener('resize', onResizeListener)
	return () => window.removeEventListener('resize', onResizeListener)
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/public/js/app": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./assets/js/app.js"],
/******/ 			["./assets/css/app.css"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhachuuu"] = self["webpackChunkhachuuu"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;