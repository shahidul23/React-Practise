import { v4 as uuidv4 } from 'uuid';

const todos = [
    {
        "id" : uuidv4(),
        "name": "Shahidul islam",
        "desc": "I am a strong man"
    },
    {
        "id" : uuidv4(),
        "name": "Shohan khan",
        "desc": "I am a loser man"
    },
    {
        "id" : uuidv4(),
        "name": "Eshan khan",
        "desc": "I am a Chuitia man"
    },
    {
        "id" : uuidv4(),
        "name": "Evan khan",
        "desc": "I am a Good boy"
    },
    {
        "id" : uuidv4(),
        "name": "Mubarak hussen",
        "desc": "i am a bussinessn man"
    }
];
const List = () =>{
    return (<div>
        {todos.map((todo,index) =>{
            const {id, name, desc} = todo;
            return <div key={id}>
                <h3>{name}</h3>
                <p>{desc}</p>
            </div>
        })}
    </div>
    )
}
export default List;
