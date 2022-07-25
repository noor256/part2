

const Content = ({contents}) =>{
  return (
    <div>
        <ul>
            {contents.map(part =>
                <h3 key = {part.id}>
                    {part.name} &nbsp;
                    {part.exercises}

                </h3>)}
        </ul>
    </div>
  )
}



export default Content