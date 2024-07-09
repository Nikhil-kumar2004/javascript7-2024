const Teacher={
    makeVideos:true
}
const TeacherSupport={
    isavailable:false
}
const TAsupport={
    makeAssignments:"JS with Nikhil",
    fulltime:false,
    __proto__: Teacher
}
console.log(TAsupport.makeVideos)    //true
TeacherSupport.__proto__=Teacher
console.log(TeacherSupport.makeVideos)  //true

//modern syntax

Object.setPrototypeOf(TAsupport,TeacherSupport)
console.log(TAsupport.fulltime)  //false
