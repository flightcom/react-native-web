function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
import AnimationPropTypes from '../../modules/AnimationPropTypes';
import BorderPropTypes from '../../modules/BorderPropTypes';
import ColorPropType from '../ColorPropType';
import ImageResizeMode from './ImageResizeMode';
import InteractionPropTypes from '../../modules/InteractionPropTypes';
import LayoutPropTypes from '../../modules/LayoutPropTypes';
import ShadowPropTypes from '../../modules/ShadowPropTypes';
import TransformPropTypes from '../../modules/TransformPropTypes';
import { number, oneOf, string } from 'prop-types';

var ImageStylePropTypes = _objectSpread({}, AnimationPropTypes, {}, BorderPropTypes, {}, InteractionPropTypes, {}, LayoutPropTypes, {}, ShadowPropTypes, {}, TransformPropTypes, {
  backgroundColor: ColorPropType,
  opacity: number,
  resizeMode: oneOf(Object.keys(ImageResizeMode)),
  tintColor: ColorPropType,

  /**
   * @platform unsupported
   */
  overlayColor: string,

  /**
   * @platform web
   */
  boxShadow: string,
  filter: string
});

export default ImageStylePropTypes;