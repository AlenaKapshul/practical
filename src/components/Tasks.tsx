type TasksType = {
    data: DataType
}

type DataType = {
    title: string
    tasks: TaskType[]
    students: Array<string>
}

type TaskType = {
    taskId: number
    title: string
    isDone: boolean
}

export const Tasks = (props: TasksType) => {
    return (
        <>
            <h1>{props.data.title}</h1>
            <ul>
                {props.data.tasks.map((el) => {
                    return (
                        <li key={el.taskId}>
                            {el.taskId}
                            {el.title}
                            {el.isDone}
                        </li>
                    )
                })}
            </ul>

            <ul>
                {props.data.students.map((el, index)=>{
                    return(
                        <li key={index}>{el}</li>
                    )
                })}
            </ul>
        </>
    )
}