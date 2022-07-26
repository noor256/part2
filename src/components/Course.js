import Header from "./Header"
import Content from "./Content"
import Total from "./TotalExos"

const Course = ({course}) =>{

   
    return(
        <div>
            {course.map(node =>
            <div key={node.id}>
            <Header title= {node.name}/>
          <Content contents={node.parts} />
          <Total addition={node.parts}/>
      
           </div>
            )}       
   
      </div>
    )
}

export default Course