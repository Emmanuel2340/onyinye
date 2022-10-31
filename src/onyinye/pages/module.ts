import { HomeImg } from "./Onyimage";

export interface myArr {
  name: string; id: number; date: number; time: number; amount: number, email: string;
}[]  = [
  { name: "ebuka Odeni", amount: 1000, id: Math.random() * 10000000 , time:new Date().getTime(), date:new Date(),email:"Ebuka40@gmai;.com"},
]






// class CardObj {
//   id: string;
//   amount: number;

//   constructor( myNum:number ) {
//     this.id = new Date().toISOString();
//     this.amount = myNum;
//   }
// }

// export default CardObj;
