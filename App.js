const heading = React.createElement("h1" , {id:'heading' , xyz:'abc'} , "Hello World from React!");

console.log(heading)    //it will return the object



//nested kind of structure
//if we want to add siblings then use arrays
const parent = React.createElement('div' , { id : 'parent' } , [
        React.createElement('div' , { id : 'child' }, [
            React.createElement('h1' , {} , "I'm H1 Tag"),
            React.createElement('h2' , {} , "I'm H2 Tag"),
            React.createElement('h3' , {} , "I'm H3 Tag"),
        ]),
        React.createElement('div' , { id : 'child2' } ,[
            React.createElement('h1' , {} , "I'm H1 Tag"),
            React.createElement('h2' , {} , "I'm H2 Tag"),
            React.createElement('h3' , {} , "I'm H3 Tag"),
    ]),
])
                                        
console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

root.render(parent)