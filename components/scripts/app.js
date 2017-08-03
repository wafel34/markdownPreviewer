
var React = require("react"),
    ReactDOM = require("react-dom"),
    marked = require("marked");

class MyComponenet extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            text: "__Random text for a beginning__"
        };
    }
    typing = (e) =>{
        var currentVal = e.target.value;
        this.setState({
            text: currentVal
        });
    }
    getMarkdownText = () => {
        var rawMarkup = marked(this.state.text);
        return { __html: rawMarkup };
    }
    render () {
        return (
            <div className="container">
                <textarea className="input-area" defaultValue={this.state.text}
                    onChange={this.typing}>

                </textarea>
                <div className="output-area">
                    <div dangerouslySetInnerHTML={this.getMarkdownText()}></div>
                </div>
            </div>
        );
    }
}



ReactDOM.render(<MyComponenet />, document.getElementById("main-interface"));
