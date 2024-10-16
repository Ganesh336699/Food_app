import React from "react";
import ReactDOM from "react-dom/client";



const Title = () => (

    <h1 className="head" tabIndex="5">Namasthe React using JSX</h1>

);
const HeaderComponent = () => (
    <div id="container">
        <Title/>
        <h1 className="heading">Namasthe React Functional Component </h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);