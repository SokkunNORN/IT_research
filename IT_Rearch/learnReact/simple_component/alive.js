
class Welcome extends React.Component {
    render() {
        return React.createElement(
            "h1",
            null,
            this.props.welcome
        );
    }
}

ReactDOM.render(React.createElement(Welcome, {welcome: "Hello React"}),
document.getElementById('hello'));

class Content extends React.Component {
    render() {
        return React.createElement (
            "p",
            null,
            this.props.paragraph
        );
    }
}

ReactDOM.render(React.createElement(Content, {paragraph: "Welcome to SokkunNorn. He try to research about react."}),
document.getElementById('content'));

