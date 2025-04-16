function ownKeys(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})));n.push.apply(n,i)}return n}function _objectSpread2(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ownKeys(Object(n),true).forEach((function(e){_defineProperty(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function _typeof(t){_typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return _typeof(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||false;i.configurable=true;"value"in i&&(i.writable=true);Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){e&&_defineProperties(t.prototype,e);n&&_defineProperties(t,n);return t}function _defineProperty(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:true,configurable:true,writable:true}):t[e]=n;return t}function _inherits(t,e){if(typeof e!=="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:true,configurable:true}});e&&_setPrototypeOf(t,e)}function _getPrototypeOf(t){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(t){return t.__proto__||Object.getPrototypeOf(t)};return _getPrototypeOf(t)}function _setPrototypeOf(t,e){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(t,e){t.__proto__=e;return t};return _setPrototypeOf(t,e)}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return true}catch(t){return false}}function _assertThisInitialized(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _possibleConstructorReturn(t,e){if(e&&(typeof e==="object"||typeof e==="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _createSuper(t){var e=_isNativeReflectConstruct();return function _createSuperInternal(){var n,i=_getPrototypeOf(t);if(e){var r=_getPrototypeOf(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _superPropBase(t,e){while(!Object.prototype.hasOwnProperty.call(t,e)){t=_getPrototypeOf(t);if(t===null)break}return t}function _get(){_get=typeof Reflect!=="undefined"&&Reflect.get?Reflect.get:function _get(t,e,n){var i=_superPropBase(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}};return _get.apply(this,arguments)}var t={
/**
   * Type of the movement.
   *
   * Available types:
   * `slider` - Rewinds slider to the start/end when it reaches the first or last slide.
   * `carousel` - Changes slides without starting over when it reaches the first or last slide.
   *
   * @type {String}
   */
type:"slider",
/**
   * Start at specific slide number defined with zero-based index.
   *
   * @type {Number}
   */
startAt:0,
/**
   * A number of slides visible on the single viewport.
   *
   * @type {Number}
   */
perView:1,
/**
   * Focus currently active slide at a specified position in the track.
   *
   * Available inputs:
   * `center` - Current slide will be always focused at the center of a track.
   * `0,1,2,3...` - Current slide will be focused on the specified zero-based index.
   *
   * @type {String|Number}
   */
focusAt:0,
/**
   * A size of the gap added between slides.
   *
   * @type {Number}
   */
gap:10,
/**
   * Change slides after a specified interval. Use `false` for turning off autoplay.
   *
   * @type {Number|Boolean}
   */
autoplay:false,
/**
   * Stop autoplay on mouseover event.
   *
   * @type {Boolean}
   */
hoverpause:true,
/**
   * Allow for changing slides with left and right keyboard arrows.
   *
   * @type {Boolean}
   */
keyboard:true,
/**
   * Stop running `perView` number of slides from the end. Use this
   * option if you don't want to have an empty space after
   * a slider. Works only with `slider` type and a
   * non-centered `focusAt` setting.
   *
   * @type {Boolean}
   */
bound:false,
/**
   * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.
   *
   * @type {Number|Boolean}
   */
swipeThreshold:80,
/**
   * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.
   *
   * @type {Number|Boolean}
   */
dragThreshold:120,
/**
   * A number of slides moved on single swipe.
   *
   * Available types:
   * `` - Moves slider by one slide per swipe
   * `|` - Moves slider between views per swipe (number of slides defined in `perView` options)
   *
   * @type {String}
   */
perSwipe:"",
/**
   * Moving distance ratio of the slides on a swiping and dragging.
   *
   * @type {Number}
   */
touchRatio:.5,
/**
   * Angle required to activate slides moving on swiping or dragging.
   *
   * @type {Number}
   */
touchAngle:45,
/**
   * Duration of the animation in milliseconds.
   *
   * @type {Number}
   */
animationDuration:400,
/**
   * Allows looping the `slider` type. Slider will rewind to the first/last slide when it's at the start/end.
   *
   * @type {Boolean}
   */
rewind:true,
/**
   * Duration of the rewinding animation of the `slider` type in milliseconds.
   *
   * @type {Number}
   */
rewindDuration:800,
/**
   * Easing function for the animation.
   *
   * @type {String}
   */
animationTimingFunc:"cubic-bezier(.165, .840, .440, 1)",
/**
   * Wait for the animation to finish until the next user input can be processed
   *
   * @type {boolean}
   */
waitForTransition:true,
/**
   * Throttle costly events at most once per every wait milliseconds.
   *
   * @type {Number}
   */
throttle:10,
/**
   * Moving direction mode.
   *
   * Available inputs:
   * - 'ltr' - left to right movement,
   * - 'rtl' - right to left movement.
   *
   * @type {String}
   */
direction:"ltr",
/**
   * The distance value of the next and previous viewports which
   * have to peek in the current view. Accepts number and
   * pixels as a string. Left and right peeking can be
   * set up separately with a directions object.
   *
   * For example:
   * `100` - Peek 100px on the both sides.
   * { before: 100, after: 50 }` - Peek 100px on the left side and 50px on the right side.
   *
   * @type {Number|String|Object}
   */
peek:0,
/**
   * Defines how many clones of current viewport will be generated.
   *
   * @type {Number}
   */
cloningRatio:1,breakpoints:{},
/**
   * Collection of internally used HTML classes.
   *
   * @todo Refactor `slider` and `carousel` properties to single `type: { slider: '', carousel: '' }` object
   * @type {Object}
   */
classes:{swipeable:"glide--swipeable",dragging:"glide--dragging",direction:{ltr:"glide--ltr",rtl:"glide--rtl"},type:{slider:"glide--slider",carousel:"glide--carousel"},slide:{clone:"glide__slide--clone",active:"glide__slide--active"},arrow:{disabled:"glide__arrow--disabled"},nav:{active:"glide__bullet--active"}}};
/**
 * Outputs warning message to the bowser console.
 *
 * @param  {String} msg
 * @return {Void}
 */function warn(t){console.error("[Glide warn]: ".concat(t))}
/**
 * Converts value entered as number
 * or string to integer value.
 *
 * @param {String} value
 * @returns {Number}
 */function toInt(t){return parseInt(t)}
/**
 * Converts value entered as number
 * or string to flat value.
 *
 * @param {String} value
 * @returns {Number}
 */function toFloat(t){return parseFloat(t)}
/**
 * Indicates whether the specified value is a string.
 *
 * @param  {*}   value
 * @return {Boolean}
 */function isString(t){return typeof t==="string"}
/**
 * Indicates whether the specified value is an object.
 *
 * @param  {*} value
 * @return {Boolean}
 *
 * @see https://github.com/jashkenas/underscore
 */function isObject(t){var e=_typeof(t);return e==="function"||e==="object"&&!!t}
/**
 * Indicates whether the specified value is a function.
 *
 * @param  {*} value
 * @return {Boolean}
 */function isFunction(t){return typeof t==="function"}
/**
 * Indicates whether the specified value is undefined.
 *
 * @param  {*} value
 * @return {Boolean}
 */function isUndefined(t){return typeof t==="undefined"}
/**
 * Indicates whether the specified value is an array.
 *
 * @param  {*} value
 * @return {Boolean}
 */function isArray(t){return t.constructor===Array}
/**
 * Creates and initializes specified collection of extensions.
 * Each extension receives access to instance of glide and rest of components.
 *
 * @param {Object} glide
 * @param {Object} extensions
 *
 * @returns {Object}
 */function mount(t,e,n){var i={};for(var r in e)isFunction(e[r])?i[r]=e[r](t,i,n):warn("Extension must be a function");for(var o in i)isFunction(i[o].mount)&&i[o].mount();return i}
/**
 * Defines getter and setter property on the specified object.
 *
 * @param  {Object} obj         Object where property has to be defined.
 * @param  {String} prop        Name of the defined property.
 * @param  {Object} definition  Get and set definitions for the property.
 * @return {Void}
 */function define(t,e,n){Object.defineProperty(t,e,n)}
/**
 * Sorts aphabetically object keys.
 *
 * @param  {Object} obj
 * @return {Object}
 */function sortKeys(t){return Object.keys(t).sort().reduce((function(e,n){e[n]=t[n];return e[n],e}),{})}
/**
 * Merges passed settings object with default options.
 *
 * @param  {Object} defaults
 * @param  {Object} settings
 * @return {Object}
 */function mergeOptions(t,e){var n=Object.assign({},t,e);if(e.hasOwnProperty("classes")){n.classes=Object.assign({},t.classes,e.classes);var i=["direction","type","slide","arrow","nav"];i.forEach((function(i){e.classes.hasOwnProperty(i)&&(n.classes[i]=_objectSpread2(_objectSpread2({},t.classes[i]),e.classes[i]))}))}e.hasOwnProperty("breakpoints")&&(n.breakpoints=Object.assign({},t.breakpoints,e.breakpoints));return n}var e=function(){
/**
   * Construct a EventBus instance.
   *
   * @param {Object} events
   */
function EventsBus(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};_classCallCheck(this,EventsBus);this.events=t;this.hop=t.hasOwnProperty}
/**
   * Adds listener to the specifed event.
   *
   * @param {String|Array} event
   * @param {Function} handler
   */_createClass(EventsBus,[{key:"on",value:function on(t,e){if(!isArray(t)){this.hop.call(this.events,t)||(this.events[t]=[]);var n=this.events[t].push(e)-1;return{remove:function remove(){delete this.events[t][n]}}}for(var i=0;i<t.length;i++)this.on(t[i],e)}
/**
     * Runs registered handlers for specified event.
     *
     * @param {String|Array} event
     * @param {Object=} context
     */},{key:"emit",value:function emit(t,e){if(isArray(t))for(var n=0;n<t.length;n++)this.emit(t[n],e);else this.hop.call(this.events,t)&&this.events[t].forEach((function(t){t(e||{})}))}}]);return EventsBus}();var n=function(){
/**
   * Construct glide.
   *
   * @param  {String} selector
   * @param  {Object} options
   */
function Glide(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};_classCallCheck(this,Glide);this._c={};this._t=[];this._e=new e;this.disabled=false;this.selector=n;this.settings=mergeOptions(t,i);this.index=this.settings.startAt}
/**
   * Initializes glide.
   *
   * @param {Object} extensions Collection of extensions to initialize.
   * @return {Glide}
   */_createClass(Glide,[{key:"mount",value:function mount$1(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this._e.emit("mount.before");isObject(t)?this._c=mount(this,t,this._e):warn("You need to provide a object on `mount()`");this._e.emit("mount.after");return this}
/**
     * Collects an instance `translate` transformers.
     *
     * @param  {Array} transformers Collection of transformers.
     * @return {Void}
     */},{key:"mutate",value:function mutate(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];isArray(t)?this._t=t:warn("You need to provide a array on `mutate()`");return this}
/**
     * Updates glide with specified settings.
     *
     * @param {Object} settings
     * @return {Glide}
     */},{key:"update",value:function update(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.settings=mergeOptions(this.settings,t);t.hasOwnProperty("startAt")&&(this.index=t.startAt);this._e.emit("update");return this}
/**
     * Change slide with specified pattern. A pattern must be in the special format:
     * `>` - Move one forward
     * `<` - Move one backward
     * `={i}` - Go to {i} zero-based slide (eq. '=1', will go to second slide)
     * `>>` - Rewinds to end (last slide)
     * `<<` - Rewinds to start (first slide)
     * `|>` - Move one viewport forward
     * `|<` - Move one viewport backward
     *
     * @param {String} pattern
     * @return {Glide}
     */},{key:"go",value:function go(t){this._c.Run.make(t);return this}
/**
     * Move track by specified distance.
     *
     * @param {String} distance
     * @return {Glide}
     */},{key:"move",value:function move(t){this._c.Transition.disable();this._c.Move.make(t);return this}},{key:"destroy",value:function destroy(){this._e.emit("destroy");return this}
/**
     * Start instance autoplaying.
     *
     * @param {Boolean|Number} interval Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Glide}
     */},{key:"play",value:function play(){var t=arguments.length>0&&arguments[0]!==void 0&&arguments[0];t&&(this.settings.autoplay=t);this._e.emit("play");return this}},{key:"pause",value:function pause(){this._e.emit("pause");return this}},{key:"disable",value:function disable(){this.disabled=true;return this}},{key:"enable",value:function enable(){this.disabled=false;return this}
/**
     * Adds cuutom event listener with handler.
     *
     * @param  {String|Array} event
     * @param  {Function} handler
     * @return {Glide}
     */},{key:"on",value:function on(t,e){this._e.on(t,e);return this}
/**
     * Checks if glide is a precised type.
     *
     * @param  {String} name
     * @return {Boolean}
     */},{key:"isType",value:function isType(t){return this.settings.type===t}},{key:"settings",get:function get(){return this._o}
/**
     * Sets value of the core options.
     *
     * @param  {Object} o
     * @return {Void}
     */,set:function set(t){isObject(t)?this._o=t:warn("Options must be an `object` instance.")}},{key:"index",get:function get(){return this._i},set:function set(t){this._i=toInt(t)}},{key:"type",get:function get(){return this.settings.type}},{key:"disabled",get:function get(){return this._d},set:function set(t){this._d=!!t}}]);return Glide}();function Run(t,e,n){var i={mount:function mount(){this._o=false},
/**
     * Makes glides running based on the passed moving schema.
     *
     * @param {String} move
     */
make:function make(i){var r=this;if(!t.disabled){!t.settings.waitForTransition||t.disable();this.move=i;n.emit("run.before",this.move);this.calculate();n.emit("run",this.move);e.Transition.after((function(){r.isStart()&&n.emit("run.start",r.move);r.isEnd()&&n.emit("run.end",r.move);if(r.isOffset()){r._o=false;n.emit("run.offset",r.move)}n.emit("run.after",r.move);t.enable()}))}},calculate:function calculate(){var e=this.move,n=this.length;var i=e.steps,r=e.direction;var o=1;if(r!=="=")if(r!==">"||i!==">")if(r!=="<"||i!=="<"){r==="|"&&(o=t.settings.perView||1);if(r===">"||r==="|"&&i===">"){var s=calculateForwardIndex(o);s>n&&(this._o=true);t.index=normalizeForwardIndex(s,o)}else if(r==="<"||r==="|"&&i==="<"){var a=calculateBackwardIndex(o);a<0&&(this._o=true);t.index=normalizeBackwardIndex(a,o)}else warn("Invalid direction pattern [".concat(r).concat(i,"] has been used"))}else t.index=0;else t.index=n;else{if(t.settings.bound&&toInt(i)>n){t.index=n;return}t.index=i}},isStart:function isStart(){return t.index<=0},isEnd:function isEnd(){return t.index>=this.length},
/**
     * Checks if we are making a offset run.
     *
     * @param {String} direction
     * @return {Boolean}
     */
isOffset:function isOffset(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;return t?!!this._o&&(t==="|>"?this.move.direction==="|"&&this.move.steps===">":t==="|<"?this.move.direction==="|"&&this.move.steps==="<":this.move.direction===t):this._o},isBound:function isBound(){return t.isType("slider")&&t.settings.focusAt!=="center"&&t.settings.bound}};
/**
   * Returns index value to move forward/to the right
   *
   * @param viewSize
   * @returns {Number}
   */function calculateForwardIndex(e){var n=t.index;return t.isType("carousel")?n+e:n+(e-n%e)}
/**
   * Normalizes the given forward index based on glide settings, preventing it to exceed certain boundaries
   *
   * @param index
   * @param length
   * @param viewSize
   * @returns {Number}
   */function normalizeForwardIndex(e,n){var r=i.length;return e<=r?e:t.isType("carousel")?e-(r+1):t.settings.rewind?i.isBound()&&!i.isEnd()?r:0:i.isBound()?r:Math.floor(r/n)*n}
/**
   * Calculates index value to move backward/to the left
   *
   * @param viewSize
   * @returns {Number}
   */function calculateBackwardIndex(e){var n=t.index;if(t.isType("carousel"))return n-e;var i=Math.ceil(n/e);return(i-1)*e}
/**
   * Normalizes the given backward index based on glide settings, preventing it to exceed certain boundaries
   *
   * @param index
   * @param length
   * @param viewSize
   * @returns {*}
   */function normalizeBackwardIndex(e,n){var r=i.length;return e>=0?e:t.isType("carousel")?e+(r+1):t.settings.rewind?i.isBound()&&i.isStart()?r:Math.floor(r/n)*n:0}define(i,"move",{
/**
     * Gets value of the move schema.
     *
     * @returns {Object}
     */
get:function get(){return this._m},
/**
     * Sets value of the move schema.
     *
     * @returns {Object}
     */
set:function set(t){var e=t.substr(1);this._m={direction:t.substr(0,1),steps:e?toInt(e)?toInt(e):e:0}}});define(i,"length",{get:function get(){var n=t.settings;var i=e.Html.slides.length;return this.isBound()?i-1-(toInt(n.perView)-1)+toInt(n.focusAt):i-1}});define(i,"offset",{get:function get(){return this._o}});return i}function now(){return(new Date).getTime()}
/**
 * Returns a function, that, when invoked, will only be triggered
 * at most once during a given window of time.
 *
 * @param {Function} func
 * @param {Number} wait
 * @param {Object=} options
 * @return {Function}
 *
 * @see https://github.com/jashkenas/underscore
 */function throttle(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};var i,r,o,s;var a=0;var u=function later(){a=n.leading===false?0:now();i=null;s=t.apply(r,o);i||(r=o=null)};var c=function throttled(){var c=now();a||n.leading!==false||(a=c);var l=e-(c-a);r=this;o=arguments;if(l<=0||l>e){if(i){clearTimeout(i);i=null}a=c;s=t.apply(r,o);i||(r=o=null)}else i||n.trailing===false||(i=setTimeout(u,l));return s};c.cancel=function(){clearTimeout(i);a=0;i=r=o=null};return c}var i={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};function Gaps(t,e,n){var r={
/**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
apply:function apply(t){for(var n=0,r=t.length;n<r;n++){var o=t[n].style;var s=e.Direction.value;o[i[s][0]]=n!==0?"".concat(this.value/2,"px"):"";n!==t.length-1?o[i[s][1]]="".concat(this.value/2,"px"):o[i[s][1]]=""}},
/**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */
remove:function remove(t){for(var e=0,n=t.length;e<n;e++){var i=t[e].style;i.marginLeft="";i.marginRight=""}}};define(r,"value",{
/**
     * Gets value of the gap.
     *
     * @returns {Number}
     */
get:function get(){return toInt(t.settings.gap)}});define(r,"grow",{
/**
     * Gets additional dimensions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */
get:function get(){return r.value*e.Sizes.length}});define(r,"reductor",{
/**
     * Gets reduction value caused by gaps.
     * Used to subtract width of the slides.
     *
     * @returns {Number}
     */
get:function get(){var e=t.settings.perView;return r.value*(e-1)/e}});n.on(["build.after","update"],throttle((function(){r.apply(e.Html.wrapper.children)}),30));n.on("destroy",(function(){r.remove(e.Html.wrapper.children)}));return r}
/**
 * Finds siblings nodes of the passed node.
 *
 * @param  {Element} node
 * @return {Array}
 */function siblings(t){if(t&&t.parentNode){var e=t.parentNode.firstChild;var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}return[]}
/**
 * Coerces a NodeList to an Array.
 *
 * @param  {NodeList} nodeList
 * @return {Array}
 */function toArray(t){return Array.prototype.slice.call(t)}var r='[data-glide-el="track"]';function Html(t,e,n){var i={
/**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
mount:function mount(){this.root=t.selector;this.track=this.root.querySelector(r);this.collectSlides()},collectSlides:function collectSlides(){this.slides=toArray(this.wrapper.children).filter((function(e){return!e.classList.contains(t.settings.classes.slide.clone)}))}};define(i,"root",{get:function get(){return i._r},set:function set(t){isString(t)&&(t=document.querySelector(t));t!==null?i._r=t:warn("Root element must be a existing Html node")}});define(i,"track",{get:function get(){return i._t},set:function set(t){i._t=t}});define(i,"wrapper",{get:function get(){return i.track.children[0]}});n.on("update",(function(){i.collectSlides()}));return i}function Peek(t,e,n){var i={mount:function mount(){this.value=t.settings.peek}};define(i,"value",{
/**
     * Gets value of the peek.
     *
     * @returns {Number|Object}
     */
get:function get(){return i._v},
/**
     * Sets value of the peek.
     *
     * @param {Number|Object} value
     * @return {Void}
     */
set:function set(t){if(isObject(t)){t.before=toInt(t.before);t.after=toInt(t.after)}else t=toInt(t);i._v=t}});define(i,"reductor",{
/**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
get:function get(){var e=i.value;var n=t.settings.perView;return isObject(e)?e.before/n+e.after/n:e*2/n}});n.on(["resize","update"],(function(){i.mount()}));return i}function Move(t,e,n){var i={
/**
     * Constructs move component.
     *
     * @returns {Void}
     */
mount:function mount(){this._o=0},
/**
     * Calculates a movement value based on passed offset and currently active index.
     *
     * @param  {Number} offset
     * @return {Void}
     */
make:function make(){var t=this;var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;this.offset=i;n.emit("move",{movement:this.value});e.Transition.after((function(){n.emit("move.after",{movement:t.value})}))}};define(i,"offset",{get:function get(){return i._o},set:function set(t){i._o=isUndefined(t)?0:toInt(t)}});define(i,"translate",{get:function get(){return e.Sizes.slideWidth*t.index}});define(i,"value",{get:function get(){var t=this.offset;var n=this.translate;return e.Direction.is("rtl")?n+t:n-t}});n.on(["build.before","run"],(function(){i.make()}));return i}function Sizes(t,e,n){var i={setupSlides:function setupSlides(){var t="".concat(this.slideWidth,"px");var n=e.Html.slides;for(var i=0;i<n.length;i++)n[i].style.width=t},setupWrapper:function setupWrapper(){e.Html.wrapper.style.width="".concat(this.wrapperSize,"px")},
/**
     * Removes applied styles from HTML elements.
     *
     * @returns {Void}
     */
remove:function remove(){var t=e.Html.slides;for(var n=0;n<t.length;n++)t[n].style.width="";e.Html.wrapper.style.width=""}};define(i,"length",{get:function get(){return e.Html.slides.length}});define(i,"width",{get:function get(){return e.Html.track.offsetWidth}});define(i,"wrapperSize",{get:function get(){return i.slideWidth*i.length+e.Gaps.grow+e.Clones.grow}});define(i,"slideWidth",{get:function get(){return i.width/t.settings.perView-e.Peek.reductor-e.Gaps.reductor}});n.on(["build.before","resize","update"],(function(){i.setupSlides();i.setupWrapper()}));n.on("destroy",(function(){i.remove()}));return i}function Build(t,e,n){var i={mount:function mount(){n.emit("build.before");this.typeClass();this.activeClass();n.emit("build.after")},typeClass:function typeClass(){e.Html.root.classList.add(t.settings.classes.type[t.settings.type])},activeClass:function activeClass(){var n=t.settings.classes;var i=e.Html.slides[t.index];if(i){i.classList.add(n.slide.active);siblings(i).forEach((function(t){t.classList.remove(n.slide.active)}))}},removeClasses:function removeClasses(){var n=t.settings.classes,i=n.type,r=n.slide;e.Html.root.classList.remove(i[t.settings.type]);e.Html.slides.forEach((function(t){t.classList.remove(r.active)}))}};n.on(["destroy","update"],(function(){i.removeClasses()}));n.on(["resize","update"],(function(){i.mount()}));n.on("move.after",(function(){i.activeClass()}));return i}function Clones(t,e,n){var i={mount:function mount(){this.items=[];t.isType("carousel")&&(this.items=this.collect())},collect:function collect(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];var i=e.Html.slides;var r=t.settings,o=r.perView,s=r.classes,a=r.cloningRatio;if(i.length>0){var u=+!!t.settings.peek;var c=o+u+Math.round(o/2);var l=i.slice(0,c).reverse();var f=i.slice(c*-1);for(var d=0;d<Math.max(a,Math.floor(o/i.length));d++){for(var v=0;v<l.length;v++){var h=l[v].cloneNode(true);h.classList.add(s.slide.clone);n.push(h)}for(var p=0;p<f.length;p++){var m=f[p].cloneNode(true);m.classList.add(s.slide.clone);n.unshift(m)}}}return n},append:function append(){var t=this.items;var n=e.Html,i=n.wrapper,r=n.slides;var o=Math.floor(t.length/2);var s=t.slice(0,o).reverse();var append=t.slice(o*-1).reverse();var a="".concat(e.Sizes.slideWidth,"px");for(var u=0;u<append.length;u++)i.appendChild(append[u]);for(var c=0;c<s.length;c++)i.insertBefore(s[c],r[0]);for(var l=0;l<t.length;l++)t[l].style.width=a},remove:function remove(){var t=this.items;for(var n=0;n<t.length;n++)e.Html.wrapper.removeChild(t[n])}};define(i,"grow",{get:function get(){return(e.Sizes.slideWidth+e.Gaps.value)*i.items.length}});n.on("update",(function(){i.remove();i.mount();i.append()}));n.on("build.before",(function(){t.isType("carousel")&&i.append()}));n.on("destroy",(function(){i.remove()}));return i}var o=function(){function EventsBinder(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};_classCallCheck(this,EventsBinder);this.listeners=t}
/**
   * Adds events listeners to arrows HTML elements.
   *
   * @param  {String|Array} events
   * @param  {Element|Window|Document} el
   * @param  {Function} closure
   * @param  {Boolean|Object} capture
   * @return {Void}
   */_createClass(EventsBinder,[{key:"on",value:function on(t,e,n){var i=arguments.length>3&&arguments[3]!==void 0&&arguments[3];isString(t)&&(t=[t]);for(var r=0;r<t.length;r++){this.listeners[t[r]]=n;e.addEventListener(t[r],this.listeners[t[r]],i)}}
/**
     * Removes event listeners from arrows HTML elements.
     *
     * @param  {String|Array} events
     * @param  {Element|Window|Document} el
     * @param  {Boolean|Object} capture
     * @return {Void}
     */},{key:"off",value:function off(t,e){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];isString(t)&&(t=[t]);for(var i=0;i<t.length;i++)e.removeEventListener(t[i],this.listeners[t[i]],n)}
/**
     * Destroy collected listeners.
     *
     * @returns {Void}
     */},{key:"destroy",value:function destroy(){delete this.listeners}}]);return EventsBinder}();function Resize(t,e,n){
/**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
var i=new o;var r={mount:function mount(){this.bind()},bind:function bind(){i.on("resize",window,throttle((function(){n.emit("resize")}),t.settings.throttle))},unbind:function unbind(){i.off("resize",window)}};n.on("destroy",(function(){r.unbind();i.destroy()}));return r}var s=["ltr","rtl"];var a={">":"<","<":">","=":"="};function Direction(t,e,n){var i={mount:function mount(){this.value=t.settings.direction},
/**
     * Resolves pattern based on direction value
     *
     * @param {String} pattern
     * @returns {String}
     */
resolve:function resolve(t){var e=t.slice(0,1);return this.is("rtl")?t.split(e).join(a[e]):t},
/**
     * Checks value of direction mode.
     *
     * @param {String} direction
     * @returns {Boolean}
     */
is:function is(t){return this.value===t},addClass:function addClass(){e.Html.root.classList.add(t.settings.classes.direction[this.value])},removeClass:function removeClass(){e.Html.root.classList.remove(t.settings.classes.direction[this.value])}};define(i,"value",{
/**
     * Gets value of the direction.
     *
     * @returns {Number}
     */
get:function get(){return i._v},
/**
     * Sets value of the direction.
     *
     * @param {String} value
     * @return {Void}
     */
set:function set(t){s.indexOf(t)>-1?i._v=t:warn("Direction value must be `ltr` or `rtl`")}});n.on(["destroy","update"],(function(){i.removeClass()}));n.on("update",(function(){i.mount()}));n.on(["build.before","update"],(function(){i.addClass()}));return i}
/**
 * Reflects value of glide movement.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */function Rtl(t,e){return{
/**
     * Negates the passed translate if glide is in RTL option.
     *
     * @param  {Number} translate
     * @return {Number}
     */
modify:function modify(t){return e.Direction.is("rtl")?-t:t}}}
/**
 * Updates glide movement with a `gap` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */function Gap(t,e){return{
/**
     * Modifies passed translate value with number in the `gap` settings.
     *
     * @param  {Number} translate
     * @return {Number}
     */
modify:function modify(t){var n=Math.floor(t/e.Sizes.slideWidth);return t+e.Gaps.value*n}}}
/**
 * Updates glide movement with width of additional clones width.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */function Grow(t,e){return{
/**
     * Adds to the passed translate width of the half of clones.
     *
     * @param  {Number} translate
     * @return {Number}
     */
modify:function modify(t){return t+e.Clones.grow/2}}}
/**
 * Updates glide movement with a `peek` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */function Peeking(t,e){return{
/**
     * Modifies passed translate value with a `peek` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
modify:function modify(n){if(t.settings.focusAt>=0){var i=e.Peek.value;return isObject(i)?n-i.before:n-i}return n}}}
/**
 * Updates glide movement with a `focusAt` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */function Focusing(t,e){return{
/**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
modify:function modify(n){var i=e.Gaps.value;var r=e.Sizes.width;var o=t.settings.focusAt;var s=e.Sizes.slideWidth;return o==="center"?n-(r/2-s/2):n-s*o-i*o}}}
/**
 * Applies diffrent transformers on translate value.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */function mutator(t,e,n){
/**
   * Merge instance transformers with collection of default transformers.
   * It's important that the Rtl component be last on the list,
   * so it reflects all previous transformations.
   *
   * @type {Array}
   */
var i=[Gap,Grow,Peeking,Focusing].concat(t._t,[Rtl]);return{
/**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */
mutate:function mutate(r){for(var o=0;o<i.length;o++){var s=i[o];isFunction(s)&&isFunction(s().modify)?r=s(t,e,n).modify(r):warn("Transformer should be a function that returns an object with `modify()` method")}return r}}}function Translate(t,e,n){var i={
/**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
set:function set(n){var i=mutator(t,e).mutate(n);var r="translate3d(".concat(-1*i,"px, 0px, 0px)");e.Html.wrapper.style.mozTransform=r;e.Html.wrapper.style.webkitTransform=r;e.Html.wrapper.style.transform=r},remove:function remove(){e.Html.wrapper.style.transform=""},getStartIndex:function getStartIndex(){var n=e.Sizes.length;var i=t.index;var r=t.settings.perView;return e.Run.isOffset(">")||e.Run.isOffset("|>")?n+(i-r):(i+r)%n},getTravelDistance:function getTravelDistance(){var n=e.Sizes.slideWidth*t.settings.perView;return e.Run.isOffset(">")||e.Run.isOffset("|>")?n*-1:n}};n.on("move",(function(r){if(!t.isType("carousel")||!e.Run.isOffset())return i.set(r.movement);e.Transition.after((function(){n.emit("translate.jump");i.set(e.Sizes.slideWidth*t.index)}));var o=e.Sizes.slideWidth*e.Translate.getStartIndex();return i.set(o-e.Translate.getTravelDistance())}));n.on("destroy",(function(){i.remove()}));return i}function Transition(t,e,n){
/**
   * Holds inactivity status of transition.
   * When true transition is not applied.
   *
   * @type {Boolean}
   */
var i=false;var r={
/**
     * Composes string of the CSS transition.
     *
     * @param {String} property
     * @return {String}
     */
compose:function compose(e){var n=t.settings;return i?"".concat(e," 0ms ").concat(n.animationTimingFunc):"".concat(e," ").concat(this.duration,"ms ").concat(n.animationTimingFunc)},
/**
     * Sets value of transition on HTML element.
     *
     * @param {String=} property
     * @return {Void}
     */
set:function set(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";e.Html.wrapper.style.transition=this.compose(t)},remove:function remove(){e.Html.wrapper.style.transition=""},
/**
     * Runs callback after animation.
     *
     * @param  {Function} callback
     * @return {Void}
     */
after:function after(t){setTimeout((function(){t()}),this.duration)},enable:function enable(){i=false;this.set()},disable:function disable(){i=true;this.set()}};define(r,"duration",{get:function get(){var n=t.settings;return t.isType("slider")&&e.Run.offset?n.rewindDuration:n.animationDuration}});n.on("move",(function(){r.set()}));n.on(["build.before","resize","translate.jump"],(function(){r.disable()}));n.on("run",(function(){r.enable()}));n.on("destroy",(function(){r.remove()}));return r}var u=false;try{var c=Object.defineProperty({},"passive",{get:function get(){u=true}});window.addEventListener("testPassive",null,c);window.removeEventListener("testPassive",null,c)}catch(t){}var l=u;var f=["touchstart","mousedown"];var d=["touchmove","mousemove"];var v=["touchend","touchcancel","mouseup","mouseleave"];var h=["mousedown","mousemove","mouseup","mouseleave"];function Swipe(t,e,n){
/**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
var i=new o;var r=0;var s=0;var a=0;var u=false;var c=!!l&&{passive:true};var p={mount:function mount(){this.bindSwipeStart()},
/**
     * Handler for `swipestart` event. Calculates entry points of the user's tap.
     *
     * @param {Object} event
     * @return {Void}
     */
start:function start(e){if(!u&&!t.disabled){this.disable();var i=this.touches(e);r=null;s=toInt(i.pageX);a=toInt(i.pageY);this.bindSwipeMove();this.bindSwipeEnd();n.emit("swipe.start")}},
/**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
move:function move(i){if(!t.disabled){var o=t.settings,u=o.touchAngle,c=o.touchRatio,l=o.classes;var f=this.touches(i);var d=toInt(f.pageX)-s;var v=toInt(f.pageY)-a;var h=Math.abs(d<<2);var p=Math.abs(v<<2);var m=Math.sqrt(h+p);var g=Math.sqrt(p);r=Math.asin(g/m);if(!(r*180/Math.PI<u))return false;i.stopPropagation();e.Move.make(d*toFloat(c));e.Html.root.classList.add(l.dragging);n.emit("swipe.move")}},
/**
     * Handler for `swipeend` event. Finitializes user's tap and decides about glide move.
     *
     * @param {Object} event
     * @return {Void}
     */
end:function end(i){if(!t.disabled){var o=t.settings,a=o.perSwipe,u=o.touchAngle,c=o.classes;var l=this.touches(i);var f=this.threshold(i);var d=l.pageX-s;var v=r*180/Math.PI;this.enable();d>f&&v<u?e.Run.make(e.Direction.resolve("".concat(a,"<"))):d<-f&&v<u?e.Run.make(e.Direction.resolve("".concat(a,">"))):e.Move.make();e.Html.root.classList.remove(c.dragging);this.unbindSwipeMove();this.unbindSwipeEnd();n.emit("swipe.end")}},bindSwipeStart:function bindSwipeStart(){var n=this;var r=t.settings,o=r.swipeThreshold,s=r.dragThreshold;o&&i.on(f[0],e.Html.wrapper,(function(t){n.start(t)}),c);s&&i.on(f[1],e.Html.wrapper,(function(t){n.start(t)}),c)},unbindSwipeStart:function unbindSwipeStart(){i.off(f[0],e.Html.wrapper,c);i.off(f[1],e.Html.wrapper,c)},bindSwipeMove:function bindSwipeMove(){var n=this;i.on(d,e.Html.wrapper,throttle((function(t){n.move(t)}),t.settings.throttle),c)},unbindSwipeMove:function unbindSwipeMove(){i.off(d,e.Html.wrapper,c)},bindSwipeEnd:function bindSwipeEnd(){var t=this;i.on(v,e.Html.wrapper,(function(e){t.end(e)}))},unbindSwipeEnd:function unbindSwipeEnd(){i.off(v,e.Html.wrapper)},
/**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
touches:function touches(t){return h.indexOf(t.type)>-1?t:t.touches[0]||t.changedTouches[0]},threshold:function threshold(e){var n=t.settings;return h.indexOf(e.type)>-1?n.dragThreshold:n.swipeThreshold},enable:function enable(){u=false;e.Transition.enable();return this},disable:function disable(){u=true;e.Transition.disable();return this}};n.on("build.after",(function(){e.Html.root.classList.add(t.settings.classes.swipeable)}));n.on("destroy",(function(){p.unbindSwipeStart();p.unbindSwipeMove();p.unbindSwipeEnd();i.destroy()}));return p}function Images(t,e,n){
/**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
var i=new o;var r={mount:function mount(){this.bind()},bind:function bind(){i.on("dragstart",e.Html.wrapper,this.dragstart)},unbind:function unbind(){i.off("dragstart",e.Html.wrapper)},dragstart:function dragstart(t){t.preventDefault()}};n.on("destroy",(function(){r.unbind();i.destroy()}));return r}function Anchors(t,e,n){
/**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
var i=new o;
/**
   * Holds detaching status of anchors.
   * Prevents detaching of already detached anchors.
   *
   * @private
   * @type {Boolean}
   */var r=false;
/**
   * Holds preventing status of anchors.
   * If `true` redirection after click will be disabled.
   *
   * @private
   * @type {Boolean}
   */var s=false;var a={
/**
     * Setups a initial state of anchors component.
     *
     * @returns {Void}
     */
mount:function mount(){
/**
       * Holds collection of anchors elements.
       *
       * @private
       * @type {HTMLCollection}
       */
this._a=e.Html.wrapper.querySelectorAll("a");this.bind()},bind:function bind(){i.on("click",e.Html.wrapper,this.click)},unbind:function unbind(){i.off("click",e.Html.wrapper)},
/**
     * Handler for click event. Prevents clicks when glide is in `prevent` status.
     *
     * @param  {Object} event
     * @return {Void}
     */
click:function click(t){if(s){t.stopPropagation();t.preventDefault()}},detach:function detach(){s=true;if(!r){for(var t=0;t<this.items.length;t++)this.items[t].draggable=false;r=true}return this},attach:function attach(){s=false;if(r){for(var t=0;t<this.items.length;t++)this.items[t].draggable=true;r=false}return this}};define(a,"items",{get:function get(){return a._a}});n.on("swipe.move",(function(){a.detach()}));n.on("swipe.end",(function(){e.Transition.after((function(){a.attach()}))}));n.on("destroy",(function(){a.attach();a.unbind();i.destroy()}));return a}var p='[data-glide-el="controls[nav]"]';var m='[data-glide-el^="controls"]';var g="".concat(m,' [data-glide-dir*="<"]');var y="".concat(m,' [data-glide-dir*=">"]');function Controls(t,e,n){
/**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
var i=new o;var r=!!l&&{passive:true};var s={mount:function mount(){
/**
       * Collection of navigation HTML elements.
       *
       * @private
       * @type {HTMLCollection}
       */
this._n=e.Html.root.querySelectorAll(p);
/**
       * Collection of controls HTML elements.
       *
       * @private
       * @type {HTMLCollection}
       */this._c=e.Html.root.querySelectorAll(m);
/**
       * Collection of arrow control HTML elements.
       *
       * @private
       * @type {Object}
       */this._arrowControls={previous:e.Html.root.querySelectorAll(g),next:e.Html.root.querySelectorAll(y)};this.addBindings()},setActive:function setActive(){for(var t=0;t<this._n.length;t++)this.addClass(this._n[t].children)},removeActive:function removeActive(){for(var t=0;t<this._n.length;t++)this.removeClass(this._n[t].children)},
/**
     * Toggles active class on items inside navigation.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
addClass:function addClass(e){var n=t.settings;var i=e[t.index];if(i){i.classList.add(n.classes.nav.active);siblings(i).forEach((function(t){t.classList.remove(n.classes.nav.active)}))}},
/**
     * Removes active class from active control.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
removeClass:function removeClass(e){var n=e[t.index];n===null||n===void 0?void 0:n.classList.remove(t.settings.classes.nav.active)},setArrowState:function setArrowState(){if(!t.settings.rewind){var n=s._arrowControls.next;var i=s._arrowControls.previous;this.resetArrowState(n,i);t.index===0&&this.disableArrow(i);t.index===e.Run.length&&this.disableArrow(n)}},
/**
     * Removes `Glide.settings.classes.disabledArrow` from given NodeList elements
     *
     * @param {NodeList[]} lists
     */
resetArrowState:function resetArrowState(){var e=t.settings;for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];i.forEach((function(t){toArray(t).forEach((function(t){t.classList.remove(e.classes.arrow.disabled)}))}))},
/**
     * Adds `Glide.settings.classes.disabledArrow` to given NodeList elements
     *
     * @param {NodeList[]} lists
     */
disableArrow:function disableArrow(){var e=t.settings;for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];i.forEach((function(t){toArray(t).forEach((function(t){t.classList.add(e.classes.arrow.disabled)}))}))},addBindings:function addBindings(){for(var t=0;t<this._c.length;t++)this.bind(this._c[t].children)},removeBindings:function removeBindings(){for(var t=0;t<this._c.length;t++)this.unbind(this._c[t].children)},
/**
     * Binds events to arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
bind:function bind(t){for(var e=0;e<t.length;e++){i.on("click",t[e],this.click);i.on("touchstart",t[e],this.click,r)}},
/**
     * Unbinds events binded to the arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
unbind:function unbind(t){for(var e=0;e<t.length;e++)i.off(["click","touchstart"],t[e])},
/**
     * Handles `click` event on the arrows HTML elements.
     * Moves slider in direction given via the
     * `data-glide-dir` attribute.
     *
     * @param {Object} event
     * @return {void}
     */
click:function click(t){l||t.type!=="touchstart"||t.preventDefault();var n=t.currentTarget.getAttribute("data-glide-dir");e.Run.make(e.Direction.resolve(n))}};define(s,"items",{get:function get(){return s._c}});n.on(["mount.after","move.after"],(function(){s.setActive()}));n.on(["mount.after","run"],(function(){s.setArrowState()}));n.on("destroy",(function(){s.removeBindings();s.removeActive();i.destroy()}));return s}function Keyboard(t,e,n){
/**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
var i=new o;var r={mount:function mount(){t.settings.keyboard&&this.bind()},bind:function bind(){i.on("keyup",document,this.press)},unbind:function unbind(){i.off("keyup",document)},
/**
     * Handles keyboard's arrows press and moving glide foward and backward.
     *
     * @param  {Object} event
     * @return {Void}
     */
press:function press(n){var i=t.settings.perSwipe;var r={ArrowRight:">",ArrowLeft:"<"};["ArrowRight","ArrowLeft"].includes(n.code)&&e.Run.make(e.Direction.resolve("".concat(i).concat(r[n.code])))}};n.on(["destroy","update"],(function(){r.unbind()}));n.on("update",(function(){r.mount()}));n.on("destroy",(function(){i.destroy()}));return r}function Autoplay(t,e,n){
/**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
var i=new o;var r={mount:function mount(){this.enable();this.start();t.settings.hoverpause&&this.bind()},
/**
     * Enables autoplaying
     *
     * @returns {Void}
     */
enable:function enable(){this._e=true},
/**
     * Disables autoplaying.
     *
     * @returns {Void}
     */
disable:function disable(){this._e=false},
/**
     * Starts autoplaying in configured interval.
     *
     * @param {Boolean|Number} force Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Void}
     */
start:function start(){var i=this;if(this._e){this.enable();t.settings.autoplay&&isUndefined(this._i)&&(this._i=setInterval((function(){i.stop();e.Run.make(">");i.start();n.emit("autoplay")}),this.time))}},stop:function stop(){this._i=clearInterval(this._i)},bind:function bind(){var t=this;i.on("mouseover",e.Html.root,(function(){t._e&&t.stop()}));i.on("mouseout",e.Html.root,(function(){t._e&&t.start()}))},
/**
     * Unbind mouseover events.
     *
     * @returns {Void}
     */
unbind:function unbind(){i.off(["mouseover","mouseout"],e.Html.root)}};define(r,"time",{get:function get(){var n=e.Html.slides[t.index].getAttribute("data-glide-autoplay");return toInt(n||t.settings.autoplay)}});n.on(["destroy","update"],(function(){r.unbind()}));n.on(["run.before","swipe.start","update"],(function(){r.stop()}));n.on(["pause","destroy"],(function(){r.disable();r.stop()}));n.on(["run.after","swipe.end"],(function(){r.start()}));n.on(["play"],(function(){r.enable();r.start()}));n.on("update",(function(){r.mount()}));n.on("destroy",(function(){i.destroy()}));return r}
/**
 * Sorts keys of breakpoint object so they will be ordered from lower to bigger.
 *
 * @param {Object} points
 * @returns {Object}
 */function sortBreakpoints(t){if(isObject(t))return sortKeys(t);warn("Breakpoints option must be an object");return{}}function Breakpoints(t,e,n){
/**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
var i=new o;
/**
   * Holds reference to settings.
   *
   * @type {Object}
   */var r=t.settings;
/**
   * Holds reference to breakpoints object in settings. Sorts breakpoints
   * from smaller to larger. It is required in order to proper
   * matching currently active breakpoint settings.
   *
   * @type {Object}
   */var s=sortBreakpoints(r.breakpoints);
/**
   * Cache initial settings before overwritting.
   *
   * @type {Object}
   */var a=Object.assign({},r);var u={
/**
     * Matches settings for currectly matching media breakpoint.
     *
     * @param {Object} points
     * @returns {Object}
     */
match:function match(t){if(typeof window.matchMedia!=="undefined")for(var e in t)if(t.hasOwnProperty(e)&&window.matchMedia("(max-width: ".concat(e,"px)")).matches)return t[e];return a}};Object.assign(r,u.match(s));i.on("resize",window,throttle((function(){t.settings=mergeOptions(r,u.match(s))}),t.settings.throttle));n.on("update",(function(){s=sortBreakpoints(s);a=Object.assign({},r)}));n.on("destroy",(function(){i.off("resize",window)}));return u}var b={Html:Html,Translate:Translate,Transition:Transition,Direction:Direction,Peek:Peek,Sizes:Sizes,Gaps:Gaps,Move:Move,Clones:Clones,Resize:Resize,Build:Build,Run:Run,Swipe:Swipe,Images:Images,Anchors:Anchors,Controls:Controls,Keyboard:Keyboard,Autoplay:Autoplay,Breakpoints:Breakpoints};var w=function(t){_inherits(Glide,t);var e=_createSuper(Glide);function Glide(){_classCallCheck(this,Glide);return e.apply(this,arguments)}_createClass(Glide,[{key:"mount",value:function mount(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return _get(_getPrototypeOf(Glide.prototype),"mount",this).call(this,Object.assign({},b,t))}}]);return Glide}(n);export{w as default};

