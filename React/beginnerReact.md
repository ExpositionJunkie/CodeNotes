## JSX differences between HTML:
className instead of class
htmlFor instead of for
This is because class and for have meaning in javascript.

You can embed js expressions inside JSX using curly braces {}

When an element has no content, you can write it as a self closing tag in JSX, even if you couldn't normally in HTML

Need to have / on tags in JSX even on img where you wouldn't normally in HTML
attributes are key value pairs
can have boolean attributes like hidden
h1 = tag
Hi = text node
h2 = sibling to h1
div = parent to them
<div>
    <h1>Hi</h1>
    <h2>Hello</h2>
</div>

You can run react without JSX
The reason JSX works is because babel takes the JSX and turns it into vanilla javascript.


## React Components -
When rendering React Components, the syntax will look like html with the angle brackets.
The telltale sign that you are dealing with a react component is if the first letter is capitalized. If it is, you know you are dealing with a react component. 
If it is lowercase, you are dealing with a JSX element.

The import and export keywords in Javascript allow files to share data with each other.
The shared data can be objects primitives and functions (including classes)
There are two kinds of exports: named and default - one file can have many named exports but only one default export.

There are two ways to define a react component:
Functional Component
Class Component

## Class component:
Example:

class App extends Component

Note that the component name is capitalized.
A react component will always have a return statement.
For a class component, this return() statement must be wrapped in a render (){ } statement.
Can wrap multiple lines of HTML in a single div, must all be contained in that div though, can't have multiple divs without being wrapped in that initial div.

Rendering components:
Use the name like its own HTML tag.

For instance: 
class App extends Component {
  render() {
      return (
          <div className="App">
              <Navbar dark color="primary">
              <div className="container">
                  <NavbarBrand href="/">NuCamp</NavbarBrand>
              </div>
              </Navbar>
          </div>
      );
  }
}

Navbar is a component.
Also, App can be called itself somewhere else with a self closing tag to actually render on the page. 

## Why use components?
Components are reusable pieces of code like functions, but with a specific purpose - renering different parts of the UI.
Easily compose the user interface in a modular way.
Concept similar to Bootstrap components, but written in javascript, only you can make your own or bring in from component libraries.

## Local State -
Data contained ina  component - can only be seen if we pass it.
To pass state data from component a to component b  you include that data as an attribute when you render compoent b inside of component a

Example:
    render() {
        const directory = this.state.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col">
                    <img src={campsite.image} alt={campsite.name} />
                    <h2>{campsite.name}</h2>
                    <p>{campsite.description}</p>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <ExampleParentComponent />
            </div>
        );
    }
}

class ExampleParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 333
        }
    }
    render () {
        return <ExampleChildComponent number={this.state.number} greeting="Hello World"/>;
    }
}

class ExampleChildComponent extends Component {
    render() {
        return <div>{this.props.number} {this.props.greeting} </div>
    };
}

## State:
information that is read only
You will want to think about where to store state data so that components can have access
If you want multiple components to be able to access the same data then you may want to lif that state up to the parent component.
In react, you never want to update the state directly.
This is so react can make the update itself
