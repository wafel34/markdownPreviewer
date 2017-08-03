
var React = require("react"),
    ReactDOM = require("react-dom");

class MyComponenet extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          text: "Random text for a beginning"
        };
        this.typing = this.typing.bind(this);
    }
    typing (e){
        var currentVal = e.target.value;
        this.setState({
            text: currentVal
        });
    }
    render() {
        return (
            <div className="container">
                <textarea className="input-area" defaultValue={this.state.text}
                onChange={this.typing}>

                </textarea>
                <div className="output-area">{this.state.text}</div>
            </div>
        );
    }
}



ReactDOM.render(<MyComponenet />, document.getElementById("main-interface"));
