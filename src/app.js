class Greeter{

  constructor(){
    this.message = "hello world";
  }

  greet(){
    console.log(this.message);
  }

}

const obj = new Greeter();
obj.greet();


