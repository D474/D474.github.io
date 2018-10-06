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
        })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlYWN0ci9zcmMvY29tcG9uZW50cy9TZWFyY2guanN4Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwic3RhdGUiLCJ2YWx1ZSIsImUiLCJoYW5kbGVTZWFyY2hJbnB1dENoYW5nZSIsInRhcmdldCIsInNldFN0YXRlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJVbmNvbnRyb2xsZWRTZWFyY2giLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0lBQ01BLE07OztBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPO0FBREksS0FBYjtBQUhpQjtBQU1sQjs7OztzQ0FFaUJDLEMsRUFBRztBQUNuQixXQUFLSCxLQUFMLENBQVdJLHVCQUFYLENBQW1DRCxFQUFFRSxNQUFGLENBQVNILEtBQTVDO0FBQ0EsV0FBS0ksUUFBTCxDQUFjO0FBQ1pKLGVBQU9DLEVBQUVFLE1BQUYsQ0FBU0g7QUFESixPQUFkO0FBR0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSx3QkFBZjtBQUNFO0FBQ0UscUJBQVUsY0FEWjtBQUVFLGdCQUFLLE1BRlA7QUFHRSxpQkFBTyxLQUFLRCxLQUFMLENBQVdDLEtBSHBCO0FBSUUsb0JBQVUsS0FBS0ssaUJBQUwsQ0FBdUJDLElBQXZCLENBQTRCLElBQTVCO0FBSlo7QUFERixPQURGO0FBY0Q7Ozs7RUEvQmtCQyxNQUFNQyxTO0FBaUMzQjtBQUNBOzs7QUFDQSxJQUFJQyxxQkFBcUIsU0FBckJBLGtCQUFxQjtBQUFBLE1BQUVQLHVCQUFGLFFBQUVBLHVCQUFGO0FBQUEsU0FDdkI7QUFBQTtBQUFBLE1BQUssV0FBVSx3QkFBZjtBQUNFO0FBQ0UsaUJBQVUsY0FEWjtBQUVFLFlBQUssTUFGUDtBQUdFLGdCQUFVLGtCQUFDRCxDQUFEO0FBQUEsZUFBT0Msd0JBQXdCRCxFQUFFRSxNQUFGLENBQVNILEtBQWpDLENBQVA7QUFBQTtBQUhaLE1BREY7QUFNRTtBQUFBO0FBQUEsUUFBUSxXQUFVLG9CQUFsQjtBQUNFLG9DQUFNLFdBQVUsNEJBQWhCO0FBREY7QUFORixHQUR1QjtBQUFBLENBQXpCOztBQWFBO0FBQ0E7QUFDQVUsT0FBT2IsTUFBUCxHQUFnQkEsTUFBaEIiLCJmaWxlIjoiU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBUaGlzIGlzIHRoZSBjb25yb2xsZWQgY29tcG9uZW50IHNvbHV0aW9uXG4vLyBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL2Zvcm1zLmh0bWwjY29udHJvbGxlZC1jb21wb25lbnRzXG5jbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogJydcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UoZSkge1xuICAgIHRoaXMucHJvcHMuaGFuZGxlU2VhcmNoSW5wdXRDaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmFsdWU6IGUudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJhciBmb3JtLWlubGluZVwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAvPlxuey8qICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBoaWRkZW4tc20tZG93blwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXCI+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiovfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuLy8gVGhpcyBpcyB0aGUgdW5jb250cm9sbGVkIGNvbXBvbmVudCBzb2x1dGlvblxuLy8gSXQgaXMgbm90IHVzZWQsIGp1c3QgaGVyZSBmb3IgcmVmZXJlbmNlXG52YXIgVW5jb250cm9sbGVkU2VhcmNoID0gKHtoYW5kbGVTZWFyY2hJbnB1dENoYW5nZX0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYmFyIGZvcm0taW5saW5lXCI+XG4gICAgPGlucHV0XG4gICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVTZWFyY2hJbnB1dENoYW5nZShlLnRhcmdldC52YWx1ZSl9XG4gICAgLz5cbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBoaWRkZW4tc20tZG93blwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zZWFyY2hcIj48L3NwYW4+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuKTtcblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbndpbmRvdy5TZWFyY2ggPSBTZWFyY2g7XG4iXX0=