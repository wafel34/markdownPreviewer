
var React = require("react"),
    ReactDOM = require("react-dom"),
    Test = require("./test");

class MyComponenet extends React.Component{
    render() {
        return (
            <div>Blaskowo1
                <Test />
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        );
    }
}



ReactDOM.render(<MyComponenet />, document.getElementById("main-interface"));
