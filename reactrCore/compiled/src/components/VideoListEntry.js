"use strict";

var VideoListEntry = function VideoListEntry(_ref) {
  var video = _ref.video,
      handleVideoListEntryTitleClick = _ref.handleVideoListEntryTitleClick;
  return React.createElement(
    "div",
    { className: "video-list-entry media" },
    React.createElement(
      "div",
      { className: "media-left media-middle" },
      React.createElement("img", {
        className: "media-object",
        onClick: function onClick() {
          return handleVideoListEntryTitleClick(video);
        },
        src: video.snippet.thumbnails.default.url,
        alt: video.snippet.description
      })
    ),
    React.createElement(
      "div",
      { className: "media-body" },
      React.createElement(
        "div",
        {
          className: "video-list-entry-title",
          onClick: function onClick() {
            return handleVideoListEntryTitleClick(video);
          }
        },
        video.snippet.title
      ),
      React.createElement(
        "div",
        {
          className: "video-list-entry-detail",
          onClick: function onClick() {
            return handleVideoListEntryTitleClick(video);
          }
        },
        video.snippet.description
      )
    )
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJWaWRlb0xpc3RFbnRyeSIsInZpZGVvIiwiaGFuZGxlVmlkZW9MaXN0RW50cnlUaXRsZUNsaWNrIiwic25pcHBldCIsInRodW1ibmFpbHMiLCJkZWZhdWx0IiwidXJsIiwiZGVzY3JpcHRpb24iLCJ0aXRsZSIsInByb3BUeXBlcyIsIlJlYWN0IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFJQSxpQkFBaUIsU0FBakJBLGNBQWlCO0FBQUEsTUFBRUMsS0FBRixRQUFFQSxLQUFGO0FBQUEsTUFBU0MsOEJBQVQsUUFBU0EsOEJBQVQ7QUFBQSxTQUNuQjtBQUFBO0FBQUEsTUFBSyxXQUFVLHdCQUFmO0FBRUU7QUFBQTtBQUFBLFFBQUssV0FBVSx5QkFBZjtBQUVFO0FBQ0UsbUJBQVUsY0FEWjtBQUVFLGlCQUFTO0FBQUEsaUJBQU1BLCtCQUErQkQsS0FBL0IsQ0FBTjtBQUFBLFNBRlg7QUFHRSxhQUFLQSxNQUFNRSxPQUFOLENBQWNDLFVBQWQsQ0FBeUJDLE9BQXpCLENBQWlDQyxHQUh4QztBQUlFLGFBQUtMLE1BQU1FLE9BQU4sQ0FBY0k7QUFKckI7QUFGRixLQUZGO0FBYUU7QUFBQTtBQUFBLFFBQUssV0FBVSxZQUFmO0FBRUU7QUFBQTtBQUFBO0FBQ0UscUJBQVUsd0JBRFo7QUFFRSxtQkFBUztBQUFBLG1CQUFNTCwrQkFBK0JELEtBQS9CLENBQU47QUFBQTtBQUZYO0FBSUdBLGNBQU1FLE9BQU4sQ0FBY0s7QUFKakIsT0FGRjtBQVNFO0FBQUE7QUFBQTtBQUNFLHFCQUFVLHlCQURaO0FBRUUsbUJBQVM7QUFBQSxtQkFBTU4sK0JBQStCRCxLQUEvQixDQUFOO0FBQUE7QUFGWDtBQUlHQSxjQUFNRSxPQUFOLENBQWNJO0FBSmpCO0FBVEY7QUFiRixHQURtQjtBQUFBLENBQXJCOztBQWtDQTtBQUNBO0FBQ0FQLGVBQWVTLFNBQWYsR0FBMkI7QUFDekJSLFNBQU9TLE1BQU1DLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQztBQURMLENBQTNCOztBQUlBO0FBQ0E7QUFDQUMsT0FBT2QsY0FBUCxHQUF3QkEsY0FBeEIiLCJmaWxlIjoiVmlkZW9MaXN0RW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbnZhciBWaWRlb0xpc3RFbnRyeSA9ICh7dmlkZW8sIGhhbmRsZVZpZGVvTGlzdEVudHJ5VGl0bGVDbGlja30pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1saXN0LWVudHJ5IG1lZGlhXCI+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWxlZnQgbWVkaWEtbWlkZGxlXCI+XG5cbiAgICAgIDxpbWdcbiAgICAgICAgY2xhc3NOYW1lPVwibWVkaWEtb2JqZWN0XCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVmlkZW9MaXN0RW50cnlUaXRsZUNsaWNrKHZpZGVvKX1cbiAgICAgICAgc3JjPXt2aWRlby5zbmlwcGV0LnRodW1ibmFpbHMuZGVmYXVsdC51cmx9XG4gICAgICAgIGFsdD17dmlkZW8uc25pcHBldC5kZXNjcmlwdGlvbn1cbiAgICAgICAgLz5cblxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwidmlkZW8tbGlzdC1lbnRyeS10aXRsZVwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVZpZGVvTGlzdEVudHJ5VGl0bGVDbGljayh2aWRlbyl9XG4gICAgICA+XG4gICAgICAgIHt2aWRlby5zbmlwcGV0LnRpdGxlfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwidmlkZW8tbGlzdC1lbnRyeS1kZXRhaWxcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVWaWRlb0xpc3RFbnRyeVRpdGxlQ2xpY2sodmlkZW8pfVxuICAgICAgICA+XG4gICAgICAgIHt2aWRlby5zbmlwcGV0LmRlc2NyaXB0aW9ufVxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG4vLyBQcm9wVHlwZXMgdGVsbCBvdGhlciBkZXZlbG9wZXJzIHdoYXQgYHByb3BzYCBhIGNvbXBvbmVudCBleHBlY3RzXG4vLyBXYXJuaW5ncyB3aWxsIGJlIHNob3duIGluIHRoZSBjb25zb2xlIHdoZW4gdGhlIGRlZmluZWQgcnVsZXMgYXJlIHZpb2xhdGVkXG5WaWRlb0xpc3RFbnRyeS5wcm9wVHlwZXMgPSB7XG4gIHZpZGVvOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG53aW5kb3cuVmlkZW9MaXN0RW50cnkgPSBWaWRlb0xpc3RFbnRyeTtcbiJdfQ==