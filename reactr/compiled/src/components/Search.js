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
          { className: 'btn hidden-sm-down', style: { background: 'blue', color: 'white' } },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJzdGF0ZSIsInZhbHVlIiwiZSIsImhhbmRsZVNlYXJjaElucHV0Q2hhbmdlIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJtYXJnaW4iLCJoYW5kbGVJbnB1dENoYW5nZSIsImJpbmQiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlVuY29udHJvbGxlZFNlYXJjaCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQ0E7SUFDTUEsTTs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU87QUFESSxLQUFiO0FBSGlCO0FBTWxCOzs7O3NDQUVpQkMsQyxFQUFHO0FBQ25CLFdBQUtILEtBQUwsQ0FBV0ksdUJBQVgsQ0FBbUNELEVBQUVFLE1BQUYsQ0FBU0gsS0FBNUM7QUFDQSxXQUFLSSxRQUFMLENBQWM7QUFDWkosZUFBT0MsRUFBRUUsTUFBRixDQUFTSDtBQURKLE9BQWQ7QUFHRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHdCQUFmLEVBQXdDLE9BQU8sRUFBQ0ssUUFBUSxLQUFULEVBQS9DO0FBQ0U7QUFDRSxxQkFBVSxjQURaO0FBRUUsZ0JBQUssTUFGUDtBQUdFLGlCQUFPLEtBQUtOLEtBQUwsQ0FBV0MsS0FIcEI7QUFJRSxvQkFBVSxLQUFLTSxpQkFBTCxDQUF1QkMsSUFBdkIsQ0FBNEIsSUFBNUI7QUFKWixVQURGO0FBUUE7QUFBQTtBQUFBLFlBQVEsV0FBVSxvQkFBbEIsRUFBdUMsT0FBTyxFQUFDQyxZQUFZLE1BQWIsRUFBcUJDLE9BQU0sT0FBM0IsRUFBOUM7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFSQSxPQURGO0FBZ0JEOzs7O0VBakNrQkMsTUFBTUMsUztBQW1DM0I7QUFDQTs7O0FBQ0EsSUFBSUMscUJBQXFCLFNBQXJCQSxrQkFBcUI7QUFBQSxNQUFFVix1QkFBRixRQUFFQSx1QkFBRjtBQUFBLFNBQ3ZCO0FBQUE7QUFBQSxNQUFLLFdBQVUsd0JBQWY7QUFDRTtBQUNFLGlCQUFVLGNBRFo7QUFFRSxZQUFLLE1BRlA7QUFHRSxnQkFBVSxrQkFBQ0QsQ0FBRDtBQUFBLGVBQU9DLHdCQUF3QkQsRUFBRUUsTUFBRixDQUFTSCxLQUFqQyxDQUFQO0FBQUE7QUFIWixNQURGO0FBTUU7QUFBQTtBQUFBLFFBQVEsV0FBVSxvQkFBbEI7QUFDRSxvQ0FBTSxXQUFVLDRCQUFoQjtBQURGO0FBTkYsR0FEdUI7QUFBQSxDQUF6Qjs7QUFhQTtBQUNBO0FBQ0FhLE9BQU9oQixNQUFQLEdBQWdCQSxNQUFoQiIsImZpbGUiOiJTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIFRoaXMgaXMgdGhlIGNvbnJvbGxlZCBjb21wb25lbnQgc29sdXRpb25cbi8vIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvZm9ybXMuaHRtbCNjb250cm9sbGVkLWNvbXBvbmVudHNcbmNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH07XG4gIH1cblxuICBoYW5kbGVJbnB1dENoYW5nZShlKSB7XG4gICAgdGhpcy5wcm9wcy5oYW5kbGVTZWFyY2hJbnB1dENoYW5nZShlLnRhcmdldC52YWx1ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2YWx1ZTogZS50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYmFyIGZvcm0taW5saW5lXCIgc3R5bGU9e3ttYXJnaW46ICczcHgnfX0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGhpZGRlbi1zbS1kb3duXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiAnYmx1ZScsIGNvbG9yOid3aGl0ZSd9fT5cbiAgICAgICAgICA8c3Bhbj5TZWFyY2g8L3NwYW4+XG4gICAgICAgICAgey8qPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zZWFyY2hcIj48L3NwYW4+Ki99XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4vLyBUaGlzIGlzIHRoZSB1bmNvbnRyb2xsZWQgY29tcG9uZW50IHNvbHV0aW9uXG4vLyBJdCBpcyBub3QgdXNlZCwganVzdCBoZXJlIGZvciByZWZlcmVuY2VcbnZhciBVbmNvbnRyb2xsZWRTZWFyY2ggPSAoe2hhbmRsZVNlYXJjaElucHV0Q2hhbmdlfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXIgZm9ybS1pbmxpbmVcIj5cbiAgICA8aW5wdXRcbiAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVNlYXJjaElucHV0Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAvPlxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGhpZGRlbi1zbS1kb3duXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFwiPjwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG4pO1xuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxud2luZG93LlNlYXJjaCA9IFNlYXJjaDtcbiJdfQ==