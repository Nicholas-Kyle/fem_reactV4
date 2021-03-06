const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed)
    ]);
}

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, 'Adopt Him!'),
        React.createElement(Pet, {
            name: "Luna",
            animal: "Dog",
            breed: "Havanese"
        }),
        React.createElement(Pet, {
            name: "catface",
            animal: "cat",
            breed: "ratcat"
        })
    ]
    )
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))