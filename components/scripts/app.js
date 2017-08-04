
var React = require("react"),
    ReactDOM = require("react-dom"),
    marked = require("marked");

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

class MyComponenet extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            text: `# This is an <h1> tag
## This is an <h2> tag
###### This is an <h6> tag

*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_

* Item 1
* Item 2
  * Item 2a
  * Item 2b

1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b

As Kanye West said:

> We're living the future so
> the present is our past.`
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
