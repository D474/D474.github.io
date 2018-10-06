"use strict";

var VideoPlayer = function VideoPlayer(_ref) {
  var video = _ref.video;
  return !video ? React.createElement(
    "div",
    { className: "video-player" },
    "Please wait..."
  ) : React.createElement(
    "div",
    { className: "video-player" },
    React.createElement(
      "div",
      { className: "embed-responsive embed-responsive-16by9" },
      React.createElement("iframe", { className: "embed-responsive-item", src: "https://www.youtube.com/embed/" + video.id.videoId, allowFullScreen: true })
    )
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayer = VideoPlayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlYWN0ci9zcmMvY29tcG9uZW50cy9WaWRlb1BsYXllci5qc3giXSwibmFtZXMiOlsiVmlkZW9QbGF5ZXIiLCJ2aWRlbyIsImlkIiwidmlkZW9JZCIsInByb3BUeXBlcyIsIlJlYWN0IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFJQSxjQUFjLFNBQWRBLFdBQWM7QUFBQSxNQUFFQyxLQUFGLFFBQUVBLEtBQUY7QUFBQSxTQUNoQixDQUFDQSxLQUFELEdBQVM7QUFBQTtBQUFBLE1BQUssV0FBVSxjQUFmO0FBQUE7QUFBQSxHQUFULEdBQ0E7QUFBQTtBQUFBLE1BQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSx5Q0FBZjtBQUNFLHNDQUFRLFdBQVUsdUJBQWxCLEVBQTBDLHdDQUFzQ0EsTUFBTUMsRUFBTixDQUFTQyxPQUF6RixFQUFvRyxxQkFBcEc7QUFERjtBQURGLEdBRmdCO0FBQUEsQ0FBbEI7O0FBY0E7QUFDQTtBQUNBSCxZQUFZSSxTQUFaLEdBQXdCO0FBQ3RCSCxTQUFPSSxNQUFNQyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkM7QUFEUixDQUF4Qjs7QUFJQTtBQUNBO0FBQ0FDLE9BQU9ULFdBQVAsR0FBcUJBLFdBQXJCIiwiZmlsZSI6IlZpZGVvUGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgVmlkZW9QbGF5ZXIgPSAoe3ZpZGVvfSkgPT4gKFxuICAhdmlkZW8gPyA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLXBsYXllclwiPlBsZWFzZSB3YWl0Li4uPC9kaXY+IDpcbiAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1wbGF5ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYmVkLXJlc3BvbnNpdmUgZW1iZWQtcmVzcG9uc2l2ZS0xNmJ5OVwiPlxuICAgICAgPGlmcmFtZSBjbGFzc05hbWU9XCJlbWJlZC1yZXNwb25zaXZlLWl0ZW1cIiBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvLmlkLnZpZGVvSWR9YH0gYWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPlxuICAgIDwvZGl2Plxuey8qICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tcGxheWVyLWRldGFpbHNcIj5cbiAgICAgIDxoMz57dmlkZW8uc25pcHBldC50aXRsZX08L2gzPlxuICAgICAgPGRpdj57dmlkZW8uc25pcHBldC5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICA8L2Rpdj5cbiovfVxuICA8L2Rpdj5cbik7XG5cbi8vIFByb3BUeXBlcyB0ZWxsIG90aGVyIGRldmVsb3BlcnMgd2hhdCBgcHJvcHNgIGEgY29tcG9uZW50IGV4cGVjdHNcbi8vIFdhcm5pbmdzIHdpbGwgYmUgc2hvd24gaW4gdGhlIGNvbnNvbGUgd2hlbiB0aGUgZGVmaW5lZCBydWxlcyBhcmUgdmlvbGF0ZWRcblZpZGVvUGxheWVyLnByb3BUeXBlcyA9IHtcbiAgdmlkZW86IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbndpbmRvdy5WaWRlb1BsYXllciA9IFZpZGVvUGxheWVyO1xuIl19