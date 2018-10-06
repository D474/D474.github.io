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
      React.createElement("img", { className: "media-object", src: video.snippet.thumbnails.default.url, alt: "" })
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
        { className: "video-list-entry-detail" },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlYWN0ci9zcmMvY29tcG9uZW50cy9WaWRlb0xpc3RFbnRyeS5qc3giXSwibmFtZXMiOlsiVmlkZW9MaXN0RW50cnkiLCJ2aWRlbyIsImhhbmRsZVZpZGVvTGlzdEVudHJ5VGl0bGVDbGljayIsInNuaXBwZXQiLCJ0aHVtYm5haWxzIiwiZGVmYXVsdCIsInVybCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcm9wVHlwZXMiLCJSZWFjdCIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBSUEsaUJBQWlCLFNBQWpCQSxjQUFpQjtBQUFBLE1BQUVDLEtBQUYsUUFBRUEsS0FBRjtBQUFBLE1BQVNDLDhCQUFULFFBQVNBLDhCQUFUO0FBQUEsU0FDbkI7QUFBQTtBQUFBLE1BQUssV0FBVSx3QkFBZjtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUseUJBQWY7QUFDRSxtQ0FBSyxXQUFVLGNBQWYsRUFBOEIsS0FBS0QsTUFBTUUsT0FBTixDQUFjQyxVQUFkLENBQXlCQyxPQUF6QixDQUFpQ0MsR0FBcEUsRUFBeUUsS0FBSSxFQUE3RTtBQURGLEtBREY7QUFJRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUE7QUFDRSxxQkFBVSx3QkFEWjtBQUVFLG1CQUFTO0FBQUEsbUJBQU1KLCtCQUErQkQsS0FBL0IsQ0FBTjtBQUFBO0FBRlg7QUFJR0EsY0FBTUUsT0FBTixDQUFjSTtBQUpqQixPQURGO0FBT0U7QUFBQTtBQUFBLFVBQUssV0FBVSx5QkFBZjtBQUEwQ04sY0FBTUUsT0FBTixDQUFjSztBQUF4RDtBQVBGO0FBSkYsR0FEbUI7QUFBQSxDQUFyQjs7QUFpQkE7QUFDQTtBQUNBUixlQUFlUyxTQUFmLEdBQTJCO0FBQ3pCUixTQUFPUyxNQUFNQyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkM7QUFETCxDQUEzQjs7QUFJQTtBQUNBO0FBQ0FDLE9BQU9kLGNBQVAsR0FBd0JBLGNBQXhCIiwiZmlsZSI6IlZpZGVvTGlzdEVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgVmlkZW9MaXN0RW50cnkgPSAoe3ZpZGVvLCBoYW5kbGVWaWRlb0xpc3RFbnRyeVRpdGxlQ2xpY2t9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tbGlzdC1lbnRyeSBtZWRpYVwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtbGVmdCBtZWRpYS1taWRkbGVcIj5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWVkaWEtb2JqZWN0XCIgc3JjPXt2aWRlby5zbmlwcGV0LnRodW1ibmFpbHMuZGVmYXVsdC51cmx9IGFsdD1cIlwiIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInZpZGVvLWxpc3QtZW50cnktdGl0bGVcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVWaWRlb0xpc3RFbnRyeVRpdGxlQ2xpY2sodmlkZW8pfVxuICAgICAgPlxuICAgICAgICB7dmlkZW8uc25pcHBldC50aXRsZX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1saXN0LWVudHJ5LWRldGFpbFwiPnt2aWRlby5zbmlwcGV0LmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbi8vIFByb3BUeXBlcyB0ZWxsIG90aGVyIGRldmVsb3BlcnMgd2hhdCBgcHJvcHNgIGEgY29tcG9uZW50IGV4cGVjdHNcbi8vIFdhcm5pbmdzIHdpbGwgYmUgc2hvd24gaW4gdGhlIGNvbnNvbGUgd2hlbiB0aGUgZGVmaW5lZCBydWxlcyBhcmUgdmlvbGF0ZWRcblZpZGVvTGlzdEVudHJ5LnByb3BUeXBlcyA9IHtcbiAgdmlkZW86IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbndpbmRvdy5WaWRlb0xpc3RFbnRyeSA9IFZpZGVvTGlzdEVudHJ5O1xuIl19