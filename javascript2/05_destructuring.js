const user={
    name:"nikhil",
    courseInstructor:"me"
}
const {courseInstructor}=user //destructuring.
console.log(courseInstructor) //instead of user.courseInstructor

const {courseInstructor:Inst}=user
console.log(Inst)
const {}=user

//JSON Format.-->API gives data in this format.
// {
//     "name":nikhil
// }
// [
//     {},
//     {},
//     {}
// ]