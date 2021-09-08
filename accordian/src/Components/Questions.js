const Questions = [
    {
        id:1,
        question:" What is React?",
        answer:"React is a front-end JavaScript library developed by Facebook in 2011."
    },
    {
        id:2,
        question:"What is a state in React and how is it used?",
        answer:"States are the heart of React components. States are the source of data and must be kept as simple as possible. Basically, states are the objects which determine components rendering and behavior. They are mutable unlike the props and create dynamic and interactive components. They are accessed via this.state()."
    }, 
    {
        id:3,
        question:"What are Pure Components?",
        answer:"Pure components are the simplest and fastest components which can be written. They can replace any component which only has a render(). These components enhance the simplicity of the code and performance of the application."
    },
    {
        id:4,
        question:"What is Redux?",
        answer:"Redux is one of the most trending libraries for front-end development in today’s marketplace. It is a predictable state container for JavaScript applications and is used for the entire applications state management. Applications developed with Redux are easy to test and can run in different environments showing consistent behavior."
    },
    {
        id:5,
        question:"Why do we need a Router in React?",
        answer:"A Router is used to define multiple routes and when a user types a specific URL, if this URL matches the path of any ‘route’ defined inside the router, then the user is redirected to that particular route. So basically, we need to add a Router library to our app that allows creating multiple routes with each leading to us a unique view."
    }, 
    {
        id:6,
        question:"What is JSX?",
        answer:"JSX is a shorthand for JavaScript XML. This is a type of file used by React which utilizes the expressiveness of JavaScript along with HTML like template syntax. This makes the HTML file really easy to understand"
    }
]

export default Questions;