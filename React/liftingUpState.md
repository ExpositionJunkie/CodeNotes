https://www.youtube.com/watch?v=ZluNj0-NpNI

moves the state from the child component to the parent component
so if you have a child function that originally holds the state in its constructors or functions you could cut that code from the child and move it into the parent.
From the parent, you can use this for setting variables
for instance, you may use a render function like this:

render() {
    return (
        <div className="App">
            <Counter count={this.state.count} />
        </div>
    );
}

This is useful for when you want to have information shared equally across instances
Will make the state the same for all child instances

https://codepen.io/RVAlbrecht/pen/jOBVMdE?editors=0010