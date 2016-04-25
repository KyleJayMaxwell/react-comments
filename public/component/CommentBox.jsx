var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello World, I am a comment box.
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function () {
    return (
      <div className="commentList">
        Hello I am a comment list
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function () {
    return (
      <div className="commentForm">
        Hello I am a comment form
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);