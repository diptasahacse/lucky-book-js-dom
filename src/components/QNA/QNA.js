import React from 'react';

const QNA = () => {
    return (
        <div className='container mt-3'>
            <div>
                <h2>Q. How React Works..?</h2>
                <p>React is a simple JS library for building interactive and fast UI of mobile and web application.It is an open source components base front end library that responsible only for the view part of our application. It creates basic view for each state in the application. React use virtual DOM that is like a soft copy or small model of DOM. when data change, React Virtual Dom update and rerender the appropriate part in very quickly. in short line, react is use for convert our JS code to HTML code directly and now it is time to show that html code on browser. react Dom inject out HTML code into index.html. Interesting thing is, the whole process work without reloading the website. React let's us difficult UL from small and isolated pieces of code call components. it has two different components. one is class component and another is function component.</p>
                <h2>Q. Difference Between State and Props.</h2>
                <p>The state is an updatable structure that is used to contain data about component. it is a heart of the react component. it represents the component's local state. it changes can be asynchronous. it hold info about the components. it can not be access by child components. state is internal and it controlled by the React component itself.</p>
                <p>Props is an object which use to pass data from parent component to child component as argument. Props are read only. it's by default value is true. it is use to communicate between components. it make out components reusable. </p>
                <p>Main Difference between Props and state is, Props are used to pass data from parent to child component, whereas state is for managing the data. props can not be modified but state can be modified.</p>

            </div>
            
        </div>
    );
};

export default QNA;