import Header from "./Header"
import Content from "./Content"
import Total from "./TotalExos"

const Course = ({course}) =>{

   
    return(
        <div>
          <Header title= {course.name}/>
          <Content contents={course.parts} />
          <Total addition={course.parts}/>
      
      </div>
    )
}

export default Course