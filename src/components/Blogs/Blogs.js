import React from 'react';

const Blogs = () => {
    return (
        <div>
           <h2 className='text-info mt-5'>Question And Answer Section</h2> 
           <div className='ms-5 me-5 mt-5 mb-5 border rounded'>
               <h3>Q - Difference between javascript and Node js?</h3>
               <p> Javascript: Javascript is a programming language that is used for writing scripts on the website.Javascript can only be run in the browsers.It is basically used on the client-side.Javascript is capable enough to add HTML and play with the DOM. 

               <br></br>
                   Node Js: NodeJS is a Javascript runtime environment.We can run Javascript outside the browser with the help of NodeJS.It is mostly used on the server-side.Nodejs does not have capability to add HTML tags.V8 is the Javascript engine inside of node.js that parses and runs Javascript. 
               </p>
           </div>
           <div className='ms-5 me-5 mt-5 mb-5 border rounded'>
               <h3>Q- When should you use nodejs and when should you use mongodb?</h3>
               <p>Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.
                <br></br> 
                MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.
                </p>
           </div>
           <div className='ms-5 me-5 mt-5 mb-5 border rounded'>
               <h3>Q- Differences between sql and nosql databases</h3>
               <p>1. SQL databases are relational, NoSQL databases are non-relational.
                   <br></br>
                   2. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                   <br></br>
                   3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                   <br></br>
                   4. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                   <br></br>
                   5. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                </p>
           </div>
           <div className='ms-5 me-5 mt-5 mb-5 border rounded'>
               <h3>What is the purpose of jwt and how does it work</h3>
               <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                <br></br>
                JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. </p>
           </div>
        </div>
    );
};

export default Blogs;<h2>This is Blogs Section</h2>