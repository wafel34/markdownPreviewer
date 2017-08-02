//global.jQuery = require("jquery");
var React = require("react"),
    ReactDOM = require("react-dom");

class MyComponenet extends React.Component{
    render() {
        return (
            <div>Blaskowo
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        )
    }
};

ReactDOM.render(<MyComponenet />, document.getElementById('main-interface'));
