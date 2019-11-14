/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * 
 */
'use strict';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import createReactClass from 'create-react-class';
import DeprecatedEdgeInsetsPropType from '../EdgeInsetsPropType';
import ensurePositiveDelayProps from '../Touchable/ensurePositiveDelayProps';
import * as React from 'react';
import PropTypes from 'prop-types';
import Touchable from '../Touchable';
import View from '../View';
var PRESS_RETENTION_OFFSET = {
  top: 20,
  left: 20,
  right: 20,
  bottom: 30
};
var OVERRIDE_PROPS = ['accessibilityLabel', 'accessibilityHint', 'accessibilityIgnoresInvertColors', 'accessibilityRole', 'accessibilityState', 'hitSlop', 'nativeID', 'onBlur', 'onFocus', 'onLayout', 'testID'];

/**
 * Do not use unless you have a very good reason. All elements that
 * respond to press should have a visual feedback when touched.
 *
 * TouchableWithoutFeedback supports only one child.
 * If you wish to have several child components, wrap them in a View.
 */
// eslint-disable-next-line react/prefer-es6-class
var TouchableWithoutFeedback = createReactClass({
  displayName: 'TouchableWithoutFeedback',
  mixins: [Touchable.Mixin],
  propTypes: {
    accessibilityHint: PropTypes.string,
    accessibilityIgnoresInvertColors: PropTypes.bool,
    accessibilityLabel: PropTypes.node,
    accessibilityRole: PropTypes.string,
    accessibilityState: PropTypes.object,
    accessible: PropTypes.bool,

    /**
     * When `accessible` is true (which is the default) this may be called when
     * the OS-specific concept of "focus" occurs. Some platforms may not have
     * the concept of focus.
     */
    delayLongPress: PropTypes.number,

    /**
     * When `accessible` is true (which is the default) this may be called when
     * the OS-specific concept of "blur" occurs, meaning the element lost focus.
     * Some platforms may not have the concept of blur.
     */
    delayPressIn: PropTypes.number,

    /**
     * If true, disable all interactions for this component.
     */
    delayPressOut: PropTypes.number,

    /**
     * Called when the touch is released, but not if cancelled (e.g. by a scroll
     * that steals the responder lock).
     */
    disabled: PropTypes.bool,

    /**
     * Called as soon as the touchable element is pressed and invoked even before onPress.
     * This can be useful when making network requests.
     */
    hitSlop: DeprecatedEdgeInsetsPropType,

    /**
     * Called as soon as the touch is released even before onPress.
     */
    nativeID: PropTypes.string,

    /**
     * Invoked on mount and layout changes with
     *
     *   `{nativeEvent: {layout: {x, y, width, height}}}`
     */
    onBlur: PropTypes.func,

    /**
     * If true, doesn't play system sound on touch (Android Only)
     **/
    onFocus: PropTypes.func,
    onLayout: PropTypes.func,
    onLongPress: PropTypes.func,
    onPress: PropTypes.func,

    /**
     * Delay in ms, from the start of the touch, before onPressIn is called.
     */
    onPressIn: PropTypes.func,

    /**
     * Delay in ms, from the release of the touch, before onPressOut is called.
     */
    onPressOut: PropTypes.func,

    /**
     * Delay in ms, from onPressIn, before onLongPress is called.
     */
    pressRetentionOffset: DeprecatedEdgeInsetsPropType,

    /**
     * When the scroll view is disabled, this defines how far your touch may
     * move off of the button, before deactivating the button. Once deactivated,
     * try moving it back and you'll see that the button is once again
     * reactivated! Move it back and forth several times while the scroll view
     * is disabled. Ensure you pass in a constant to reduce memory allocations.
     */
    testID: PropTypes.string,

    /**
     * This defines how far your touch can start away from the button. This is
     * added to `pressRetentionOffset` when moving off of the button.
     * ** NOTE **
     * The touch area never extends past the parent view bounds and the Z-index
     * of sibling views always takes precedence if a touch hits two overlapping
     * views.
     */
    touchSoundDisabled: PropTypes.bool
  },
  getInitialState: function getInitialState() {
    return this.touchableGetInitialState();
  },
  componentDidMount: function componentDidMount() {
    ensurePositiveDelayProps(this.props);
  },
  UNSAFE_componentWillReceiveProps: function UNSAFE_componentWillReceiveProps(nextProps) {
    ensurePositiveDelayProps(nextProps);
  },

  /**
   * `Touchable.Mixin` self callbacks. The mixin will invoke these if they are
   * defined on your component.
   */
  touchableHandlePress: function touchableHandlePress(e) {
    this.props.onPress && this.props.onPress(e);
  },
  touchableHandleActivePressIn: function touchableHandleActivePressIn(e) {
    this.props.onPressIn && this.props.onPressIn(e);
  },
  touchableHandleActivePressOut: function touchableHandleActivePressOut(e) {
    this.props.onPressOut && this.props.onPressOut(e);
  },
  touchableHandleLongPress: function touchableHandleLongPress(e) {
    this.props.onLongPress && this.props.onLongPress(e);
  },
  touchableGetPressRectOffset: function touchableGetPressRectOffset() {
    // $FlowFixMe Invalid prop usage
    return this.props.pressRetentionOffset || PRESS_RETENTION_OFFSET;
  },
  touchableGetHitSlop: function touchableGetHitSlop() {
    return this.props.hitSlop;
  },
  touchableGetHighlightDelayMS: function touchableGetHighlightDelayMS() {
    return this.props.delayPressIn || 0;
  },
  touchableGetLongPressDelayMS: function touchableGetLongPressDelayMS() {
    return this.props.delayLongPress === 0 ? 0 : this.props.delayLongPress || 500;
  },
  touchableGetPressOutDelayMS: function touchableGetPressOutDelayMS() {
    return this.props.delayPressOut || 0;
  },
  render: function render() {
    // Note(avik): remove dynamic typecast once Flow has been upgraded
    // $FlowFixMe(>=0.41.0)
    // eslint-disable-next-line react/prop-types
    var child = React.Children.only(this.props.children);
    var children = child.props.children;

    if (Touchable.TOUCH_TARGET_DEBUG && child.type === View) {
      children = React.Children.toArray(children);
      children.push(Touchable.renderDebugView({
        color: 'red',
        hitSlop: this.props.hitSlop
      }));
    }

    var overrides = {};

    for (var _iterator = OVERRIDE_PROPS, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var prop = _ref;

      if (this.props[prop] !== undefined) {
        overrides[prop] = this.props[prop];
      }
    }

    return React.cloneElement(child, _objectSpread({}, overrides, {
      accessible: this.props.accessible !== false,
      //clickable:
      //  this.props.clickable !== false && this.props.onPress !== undefined,
      //onClick: this.touchableHandlePress,
      onKeyDown: this.touchableHandleKeyEvent,
      onKeyUp: this.touchableHandleKeyEvent,
      onStartShouldSetResponder: this.touchableHandleStartShouldSetResponder,
      onResponderTerminationRequest: this.touchableHandleResponderTerminationRequest,
      onResponderGrant: this.touchableHandleResponderGrant,
      onResponderMove: this.touchableHandleResponderMove,
      onResponderRelease: this.touchableHandleResponderRelease,
      onResponderTerminate: this.touchableHandleResponderTerminate,
      children: children
    }));
  }
});
export default TouchableWithoutFeedback;