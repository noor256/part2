
const Total = ({addition}) => {

const total = addition.reduce((s, p) => s + p.exercises, 0)
    return(
        <h2>Total of {total} exercises</h2>
    )
}

export default Total