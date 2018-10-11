'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is the conrolled component solution
// https://facebook.github.io/react/docs/forms.html#controlled-components
var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.state = {
      value: ''
    };
    return _this;
  }

  _createClass(Search, [{
    key: 'handleInputChange',
    value: function handleInputChange(e) {
      this.props.handleSearchInputChange(e.target.value);
      this.setState({
        value: e.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'search-bar form-inline', style: { margin: '3px' } },
        React.createElement('input', {
          className: 'form-control',
          type: 'text',
          value: this.state.value,
          onChange: this.handleInputChange.bind(this)
        }),
        React.createElement(
          'button',
          { className: 'btn hidden-sm-down', style: { background: 'red', color: 'black', textShadow: '2px 2px 2px white , -2px -2px 2px white', fontWeight: 'bold' } },
          React.createElement(
            'span',
            null,
            'Search'
          )
        )
      );
    }
  }]);

  return Search;
}(React.Component);
// This is the uncontrolled component solution
// It is not used, just here for reference


var UncontrolledSearch = function UncontrolledSearch(_ref) {
  var handleSearchInputChange = _ref.handleSearchInputChange;
  return React.createElement(
    'div',
    { className: 'search-bar form-inline' },
    React.createElement('input', {
      className: 'form-control',
      type: 'text',
      onChange: function onChange(e) {
        return handleSearchInputChange(e.target.value);
      }
    }),
    React.createElement(
      'button',
      { className: 'btn hidden-sm-down' },
      React.createElement('span', { className: 'glyphicon glyphicon-search' })
    )
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJzdGF0ZSIsInZhbHVlIiwiZSIsImhhbmRsZVNlYXJjaElucHV0Q2hhbmdlIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJtYXJnaW4iLCJoYW5kbGVJbnB1dENoYW5nZSIsImJpbmQiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJ0ZXh0U2hhZG93IiwiZm9udFdlaWdodCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiVW5jb250cm9sbGVkU2VhcmNoIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtJQUNNQSxNOzs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNYQSxLQURXOztBQUdqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTztBQURJLEtBQWI7QUFIaUI7QUFNbEI7Ozs7c0NBRWlCQyxDLEVBQUc7QUFDbkIsV0FBS0gsS0FBTCxDQUFXSSx1QkFBWCxDQUFtQ0QsRUFBRUUsTUFBRixDQUFTSCxLQUE1QztBQUNBLFdBQUtJLFFBQUwsQ0FBYztBQUNaSixlQUFPQyxFQUFFRSxNQUFGLENBQVNIO0FBREosT0FBZDtBQUdEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsd0JBQWYsRUFBd0MsT0FBTyxFQUFDSyxRQUFRLEtBQVQsRUFBL0M7QUFDRTtBQUNFLHFCQUFVLGNBRFo7QUFFRSxnQkFBSyxNQUZQO0FBR0UsaUJBQU8sS0FBS04sS0FBTCxDQUFXQyxLQUhwQjtBQUlFLG9CQUFVLEtBQUtNLGlCQUFMLENBQXVCQyxJQUF2QixDQUE0QixJQUE1QjtBQUpaLFVBREY7QUFRQTtBQUFBO0FBQUEsWUFBUSxXQUFVLG9CQUFsQixFQUF1QyxPQUFPLEVBQUNDLFlBQVksS0FBYixFQUFvQkMsT0FBTSxPQUExQixFQUFtQ0MsWUFBWSx5Q0FBL0MsRUFBMEZDLFlBQVksTUFBdEcsRUFBOUM7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFSQSxPQURGO0FBZ0JEOzs7O0VBakNrQkMsTUFBTUMsUztBQW1DM0I7QUFDQTs7O0FBQ0EsSUFBSUMscUJBQXFCLFNBQXJCQSxrQkFBcUI7QUFBQSxNQUFFWix1QkFBRixRQUFFQSx1QkFBRjtBQUFBLFNBQ3ZCO0FBQUE7QUFBQSxNQUFLLFdBQVUsd0JBQWY7QUFDRTtBQUNFLGlCQUFVLGNBRFo7QUFFRSxZQUFLLE1BRlA7QUFHRSxnQkFBVSxrQkFBQ0QsQ0FBRDtBQUFBLGVBQU9DLHdCQUF3QkQsRUFBRUUsTUFBRixDQUFTSCxLQUFqQyxDQUFQO0FBQUE7QUFIWixNQURGO0FBTUU7QUFBQTtBQUFBLFFBQVEsV0FBVSxvQkFBbEI7QUFDRSxvQ0FBTSxXQUFVLDRCQUFoQjtBQURGO0FBTkYsR0FEdUI7QUFBQSxDQUF6Qjs7QUFhQTtBQUNBO0FBQ0FlLE9BQU9sQixNQUFQLEdBQWdCQSxNQUFoQiIsImZpbGUiOiJTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIFRoaXMgaXMgdGhlIGNvbnJvbGxlZCBjb21wb25lbnQgc29sdXRpb25cbi8vIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvZm9ybXMuaHRtbCNjb250cm9sbGVkLWNvbXBvbmVudHNcbmNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH07XG4gIH1cblxuICBoYW5kbGVJbnB1dENoYW5nZShlKSB7XG4gICAgdGhpcy5wcm9wcy5oYW5kbGVTZWFyY2hJbnB1dENoYW5nZShlLnRhcmdldC52YWx1ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2YWx1ZTogZS50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYmFyIGZvcm0taW5saW5lXCIgc3R5bGU9e3ttYXJnaW46ICczcHgnfX0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGhpZGRlbi1zbS1kb3duXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiAncmVkJywgY29sb3I6J2JsYWNrJywgdGV4dFNoYWRvdzogJzJweCAycHggMnB4IHdoaXRlICwgLTJweCAtMnB4IDJweCB3aGl0ZScsIGZvbnRXZWlnaHQ6ICdib2xkJ319PlxuICAgICAgICAgIDxzcGFuPlNlYXJjaDwvc3Bhbj5cbiAgICAgICAgICB7Lyo8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFwiPjwvc3Bhbj4qL31cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbi8vIFRoaXMgaXMgdGhlIHVuY29udHJvbGxlZCBjb21wb25lbnQgc29sdXRpb25cbi8vIEl0IGlzIG5vdCB1c2VkLCBqdXN0IGhlcmUgZm9yIHJlZmVyZW5jZVxudmFyIFVuY29udHJvbGxlZFNlYXJjaCA9ICh7aGFuZGxlU2VhcmNoSW5wdXRDaGFuZ2V9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJhciBmb3JtLWlubGluZVwiPlxuICAgIDxpbnB1dFxuICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlU2VhcmNoSW5wdXRDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgIC8+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gaGlkZGVuLXNtLWRvd25cIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXCI+PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbik7XG5cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG53aW5kb3cuU2VhcmNoID0gU2VhcmNoO1xuIl19