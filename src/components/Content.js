

const Content = ({contents}) =>{
  return (
    <div>
     
            {contents.map(part =>
                <h3 key = {part.id}>
                    {part.name} {part.exercises}

                </h3>)}
        
    </div>
  )
}



export default Content