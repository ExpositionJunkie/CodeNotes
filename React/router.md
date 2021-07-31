https://www.youtube.com/watch?v=8wW4vhcXwKM

# Single Page Applications (SPA)

Unlike Bootstrap, in React, you will not have multiple HTML pages
Instead, you will have just one page and from there you will use the react library to launch the application from that one page
this is called a Single Page App (SPA) launched from a single HTML page
A routing library is crucial to an SPA

## React Router
Popular third-party library in the React ecosystem
Collection of router components, route matching components and nav components
Handles routing requests to navigate to different views
Generates unique, bookmarkable URL for each view
Handles browser history - ability to move back and forward

### React Router Components
<BrowserRouter> 
    - Top-level parent component that wraps around all other React-Router components
    - Uses HTML5 History API to control browser history
<Route>
    - Renders the UI for a matching path
    - Use the exact attribute if you want an exact match
<Redirect>
    - Redirects to a new URL
<Switch>
    - Groups <Route> components together similar to a js switch statement
<Link>
    - Creates links to a path, renders as <a> - use instead of <a>! so that your navigation is linked through React Router instead
<NavLink>
    - Special version of <Link> that adds styles to active link