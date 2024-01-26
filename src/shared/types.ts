export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus"
}


// export interface BenefitType {
//     icon: JSX.Element;
//     title: string;
//     description: string
// };
export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
}

export interface ClassesType {
    name: string,
    description?: string,
    image: string,
};





// class Bike  {
//     constructor(public name: string, public age: number, public phoneNumber: string) {
//         this.name = name;
//         this.age = age;
//         this.phoneNumber = phoneNumber;
//     }

//     public getName = () => {
//         return `${this.name} + ${this.age}`
//     }
// }

// const Suzuki = new Bike("Suzuki", 26, "09067338753");

// console.log(Suzuki.getName());