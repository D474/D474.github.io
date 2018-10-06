"use strict";

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
    key: "handleInputChange",
    value: function handleInputChange(e) {
      this.props.handleSearchInputChange(e.target.value);
      this.setState({
        value: e.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "search-bar form-inline" },
        React.createElement("input", {
          className: "form-control",
          type: "text",
          value: this.state.value,
          onChange: this.handleInputChange.bind(this)
        }),
        React.createElement(
          "button",
          { className: "btn hidden-sm-down" },
          React.createElement("span", { className: "glyphicon glyphicon-search" })
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
    "div",
    { className: "search-bar form-inline" },
    React.createElement("input", {
      className: "form-control",
      type: "text",
      onChange: function onChange(e) {
        return handleSearchInputChange(e.target.value);
      }
    }),
    React.createElement(
      "button",
      { className: "btn hidden-sm-down" },
      React.createElement("span", { className: "glyphicon glyphicon-search" })
    )
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJzdGF0ZSIsInZhbHVlIiwiZSIsImhhbmRsZVNlYXJjaElucHV0Q2hhbmdlIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJoYW5kbGVJbnB1dENoYW5nZSIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlVuY29udHJvbGxlZFNlYXJjaCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQ0E7SUFDTUEsTTs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU87QUFESSxLQUFiO0FBSGlCO0FBTWxCOzs7O3NDQUVpQkMsQyxFQUFHO0FBQ25CLFdBQUtILEtBQUwsQ0FBV0ksdUJBQVgsQ0FBbUNELEVBQUVFLE1BQUYsQ0FBU0gsS0FBNUM7QUFDQSxXQUFLSSxRQUFMLENBQWM7QUFDWkosZUFBT0MsRUFBRUUsTUFBRixDQUFTSDtBQURKLE9BQWQ7QUFHRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHdCQUFmO0FBQ0U7QUFDRSxxQkFBVSxjQURaO0FBRUUsZ0JBQUssTUFGUDtBQUdFLGlCQUFPLEtBQUtELEtBQUwsQ0FBV0MsS0FIcEI7QUFJRSxvQkFBVSxLQUFLSyxpQkFBTCxDQUF1QkMsSUFBdkIsQ0FBNEIsSUFBNUI7QUFKWixVQURGO0FBT0U7QUFBQTtBQUFBLFlBQVEsV0FBVSxvQkFBbEI7QUFDRSx3Q0FBTSxXQUFVLDRCQUFoQjtBQURGO0FBUEYsT0FERjtBQWFEOzs7O0VBOUJrQkMsTUFBTUMsUztBQWdDM0I7QUFDQTs7O0FBQ0EsSUFBSUMscUJBQXFCLFNBQXJCQSxrQkFBcUI7QUFBQSxNQUFFUCx1QkFBRixRQUFFQSx1QkFBRjtBQUFBLFNBQ3ZCO0FBQUE7QUFBQSxNQUFLLFdBQVUsd0JBQWY7QUFDRTtBQUNFLGlCQUFVLGNBRFo7QUFFRSxZQUFLLE1BRlA7QUFHRSxnQkFBVSxrQkFBQ0QsQ0FBRDtBQUFBLGVBQU9DLHdCQUF3QkQsRUFBRUUsTUFBRixDQUFTSCxLQUFqQyxDQUFQO0FBQUE7QUFIWixNQURGO0FBTUU7QUFBQTtBQUFBLFFBQVEsV0FBVSxvQkFBbEI7QUFDRSxvQ0FBTSxXQUFVLDRCQUFoQjtBQURGO0FBTkYsR0FEdUI7QUFBQSxDQUF6Qjs7QUFhQTtBQUNBO0FBQ0FVLE9BQU9iLE1BQVAsR0FBZ0JBLE1BQWhCIiwiZmlsZSI6IlNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gVGhpcyBpcyB0aGUgY29ucm9sbGVkIGNvbXBvbmVudCBzb2x1dGlvblxuLy8gaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy9mb3Jtcy5odG1sI2NvbnRyb2xsZWQtY29tcG9uZW50c1xuY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6ICcnXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUlucHV0Q2hhbmdlKGUpIHtcbiAgICB0aGlzLnByb3BzLmhhbmRsZVNlYXJjaElucHV0Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXIgZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gaGlkZGVuLXNtLWRvd25cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFwiPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4vLyBUaGlzIGlzIHRoZSB1bmNvbnRyb2xsZWQgY29tcG9uZW50IHNvbHV0aW9uXG4vLyBJdCBpcyBub3QgdXNlZCwganVzdCBoZXJlIGZvciByZWZlcmVuY2VcbnZhciBVbmNvbnRyb2xsZWRTZWFyY2ggPSAoe2hhbmRsZVNlYXJjaElucHV0Q2hhbmdlfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXIgZm9ybS1pbmxpbmVcIj5cbiAgICA8aW5wdXRcbiAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVNlYXJjaElucHV0Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAvPlxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGhpZGRlbi1zbS1kb3duXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFwiPjwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG4pO1xuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxud2luZG93LlNlYXJjaCA9IFNlYXJjaDtcbiJdfQ==