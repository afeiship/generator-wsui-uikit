'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @usage:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Editor.addMark(editor,'italic', true)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _slateHyperscript = require('slate-hyperscript');

var _slate = require('slate');

var _nextSlatePlugin = require('@jswork/next-slate-plugin');

var _nextSlatePlugin2 = _interopRequireDefault(_nextSlatePlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _nextSlatePlugin2.default.define({
  id: 'editor-extension',
  statics: {
    current: function current(inEditor) {
      var selection = inEditor.selection;
      if (!selection) return null;

      var _Editor$above = _slate.Editor.above(inEditor, selection.anchor.path),
          _Editor$above2 = _slicedToArray(_Editor$above, 2),
          node = _Editor$above2[0],
          _ = _Editor$above2[1];

      return node;
    },
    isActiveMark: function isActiveMark(inEditor, inFormat) {
      var marks = _slate.Editor.marks(inEditor);
      return marks ? marks[inFormat] : false;
    },
    isActiveBlock: function isActiveBlock(inEditor, inFormat) {
      var _Editor$nodes = _slate.Editor.nodes(inEditor, {
        match: function match(n) {
          return !_slate.Editor.isEditor(n) && _slate.Element.isElement(n) && n.type === inFormat;
        }
      }),
          _Editor$nodes2 = _slicedToArray(_Editor$nodes, 1),
          match = _Editor$nodes2[0];

      return !!match;
    }
  }
});