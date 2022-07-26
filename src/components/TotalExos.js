
const Total = ({addition}) => {

const total = addition.reduce((sum, parts) => sum + parts.exercises, 0)
    return(
        <h2>Total of {total} exercises</h2>
    )
}

export default Total