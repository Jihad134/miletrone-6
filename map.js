// const array=[1,2,3,4,5]

// const resualtId=array.map(n => n/2);
// console.log(resualtId)
// const resualtId1=array.map(n => n*2);
// console.log(resualtId1)
// const resualtId2=array.map(n => n-2);
// console.log(resualtId2)


const names=['jihad', "rifat", "jotti"];

const firstleter=names.map(n => n[0])
console.log(firstleter)

const totalLength=names.map( x => x.length)

console.log(totalLength)


const products=[
    {name:"iphone", price:156023, model:"l56" },
    {name:"phone", price:1203, model:"l56" },
    {name:"laptop", price:1283, model:"l56" },
]

const objactpro=products.map(p => p.price)

console.log(objactpro)
const objcet2=products.map(p => p.price)

console.log(objcet2)


const foreche=products.forEach(product => console.log(product.name))


const bangladesh=[5,33,444,55,95];

const result1=bangladesh.filter(ban => ban < 444)
console.log(result1)

const result2=bangladesh.filter(ban => ban %3===0)
console.log(result2)

const finding=[5,55,65,75]

const finer=finding.find(f => f%5 == 0)
console.log(finer)


const objact=[
    {name:"iphone", price:34},
    {name:"laptop", price:64},
    {name:"phone", price:13234},
    {name:"tv", price:11234},
]

const reult1=objact.find( p => p.price < 100);
console.log(reult1)
const reult2=objact.filter( p => p.price < 100);
console.log(reult2)


const numbers=[1, 2, 3,4, 5, 6,7,8];

const result4=numbers.filter( num => num<8)
console.log(result4);

const result6=numbers.find( uam => uam<8)
console.log(result6)

const reduces=numbers.reduce((privience,current) =>privience+current,0)
console.log(reduces)


const objact1={
    math:56,
    pysic:76,

    marks:{
        chemistry:87,
        bangla:89,
    }
}
const bangla=objact1["marks"]['bangla'];

const subjact="math";

const subjactMarks=objact1[subjact]

console.log(subjactMarks)


class Teammember{
    name;
    loction;
    
    constructor(name,loction){
        this.name=name;
        this.loction=loction;
    
    }
    
    proviedYourFedback(){
        console.log(`${this.name} thank you very much`)
    }


}



class Instructor extends Teammember{
  
    tem="web Hero"
    coures="web development course"
    constructor(name,loction){
       super(name,loction)
    }
    strateSesion(time){
        console.log(`start form ${time}`)
    }

    creatQuiz(module){
        console.log(`quiz number module ${module}`)
    }
    

}
class Developer extends Teammember{

    teac;
    tem="web Hero"
    coures="web development course"
    constructor(name,loction,teac){
      super(name,loction)
        this.teac=teac;

    }
    strateSesion(time){
        console.log(`start form ${time}`)
    }

    creatQuiz(module){
        console.log(`quiz number module ${module}`)
    }
    
}
class jobPlaceMent{
    name;
    loction;
    tem="web job"
    coures="web jobplacement course"
    constructor(name,loction,resion){
        this.name=name;
        this.loction=loction;
        this.resion=resion;
    }
    strateSesion(time){
        console.log(`start form ${time}`)
    }

    creatQuiz(module){
        console.log(`quiz number module ${module}`)
    }
    proviedYourFedback(){
        console.log(`${this.name} thank you very much`)
    }
}


const alia=new Instructor("alia bate","dhamondi");
console.log(alia)

alia.proviedYourFedback();