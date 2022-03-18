// user created module
const my_fun = () => {
    console.log("hello world from user created module function");
};

const greeter = (name) => {

    console.log(`hello ${name}`);
};
module.export = { 
    my_fun,
    greeter
};