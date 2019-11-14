"use strict";

exports.__esModule = true;
exports.default = void 0;

var _applyLayout = _interopRequireDefault(require("../../modules/applyLayout"));

var _applyNativeMethods = _interopRequireDefault(require("../../modules/applyNativeMethods"));

var _createElement = _interopRequireDefault(require("../createElement"));

var _css = _interopRequireDefault(require("../StyleSheet/css"));

var _warning = _interopRequireDefault(require("fbjs/lib/warning"));

var _react = _interopRequireDefault(require("react"));

var _StyleSheet = _interopRequireDefault(require("../StyleSheet"));

var _TextAncestorContext = _interopRequireDefault(require("./TextAncestorContext"));

var _TextPropTypes = _interopRequireDefault(require("./TextPropTypes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Text =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Text, _React$Component);

  function Text() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Text.prototype;

  _proto.renderText = function renderText(hasTextAncestor) {
    var _this$props = this.props,
        dir = _this$props.dir,
        forwardedRef = _this$props.forwardedRef,
        numberOfLines = _this$props.numberOfLines,
        onPress = _this$props.onPress,
        selectable = _this$props.selectable,
        style = _this$props.style,
        adjustsFontSizeToFit = _this$props.adjustsFontSizeToFit,
        allowFontScaling = _this$props.allowFontScaling,
        ellipsizeMode = _this$props.ellipsizeMode,
        lineBreakMode = _this$props.lineBreakMode,
        maxFontSizeMultiplier = _this$props.maxFontSizeMultiplier,
        minimumFontScale = _this$props.minimumFontScale,
        onLayout = _this$props.onLayout,
        onLongPress = _this$props.onLongPress,
        pressRetentionOffset = _this$props.pressRetentionOffset,
        selectionColor = _this$props.selectionColor,
        suppressHighlighting = _this$props.suppressHighlighting,
        textBreakStrategy = _this$props.textBreakStrategy,
        tvParallaxProperties = _this$props.tvParallaxProperties,
        otherProps = _objectWithoutPropertiesLoose(_this$props, ["dir", "forwardedRef", "numberOfLines", "onPress", "selectable", "style", "adjustsFontSizeToFit", "allowFontScaling", "ellipsizeMode", "lineBreakMode", "maxFontSizeMultiplier", "minimumFontScale", "onLayout", "onLongPress", "pressRetentionOffset", "selectionColor", "suppressHighlighting", "textBreakStrategy", "tvParallaxProperties"]);

    if (process.env.NODE_ENV !== 'production') {
      (0, _warning.default)(this.props.className == null, 'Using the "className" prop on <Text> is deprecated.');
    }

    if (onPress) {
      otherProps.accessible = true;
      otherProps.onClick = this._createPressHandler(onPress);
      otherProps.onKeyDown = this._createEnterHandler(onPress);
    }

    otherProps.classList = [this.props.className, classes.text, hasTextAncestor === true && classes.textHasAncestor, numberOfLines === 1 && classes.textOneLine, numberOfLines > 1 && classes.textMultiLine]; // allow browsers to automatically infer the language writing direction

    otherProps.dir = dir !== undefined ? dir : 'auto';
    otherProps.ref = forwardedRef;
    otherProps.style = [style, numberOfLines > 1 && {
      WebkitLineClamp: numberOfLines
    }, selectable === false && styles.notSelectable, onPress && styles.pressable];
    var component = hasTextAncestor ? 'span' : 'div';
    return (0, _createElement.default)(component, otherProps);
  };

  _proto.render = function render() {
    var _this = this;

    return _react.default.createElement(_TextAncestorContext.default.Consumer, null, function (hasTextAncestor) {
      var element = _this.renderText(hasTextAncestor);

      return hasTextAncestor ? element : _react.default.createElement(_TextAncestorContext.default.Provider, {
        value: true
      }, element);
    });
  };

  _proto._createEnterHandler = function _createEnterHandler(fn) {
    return function (e) {
      if (e.keyCode === 13) {
        fn && fn(e);
      }
    };
  };

  _proto._createPressHandler = function _createPressHandler(fn) {
    return function (e) {
      e.stopPropagation();
      fn && fn(e);
    };
  };

  return Text;
}(_react.default.Component);

Text.displayName = 'Text';
Text.propTypes = process.env.NODE_ENV !== "production" ? _TextPropTypes.default : {};

var classes = _css.default.create({
  text: {
    border: '0 solid black',
    boxSizing: 'border-box',
    color: 'black',
    display: 'inline',
    font: '14px System',
    margin: 0,
    padding: 0,
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word'
  },
  textHasAncestor: {
    color: 'inherit',
    font: 'inherit',
    whiteSpace: 'inherit'
  },
  textOneLine: {
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  // See #13
  textMultiLine: {
    display: '-webkit-box',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical'
  }
});

var styles = _StyleSheet.default.create({
  notSelectable: {
    userSelect: 'none'
  },
  pressable: {
    cursor: 'pointer'
  }
});

var _default = (0, _applyLayout.default)((0, _applyNativeMethods.default)(Text));

exports.default = _default;
module.exports = exports.default;