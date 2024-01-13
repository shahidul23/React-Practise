const users = [
    {
    fullName: "Shahidul islam",
    age: 32,
    phones:[
       {
        bl:"01967288486",
        gp:"01798498684"
       }
    ]
    },
    {
    fullName: "Shohan Khan",
    age: 33,
    phones:[
        {
        bl:"01967288487",
        gp:"01798498685"
        }
    ]
    },
    {
    fullName: "mubarak hussen",
    age: 22,
    phones:[
        {
        bl:"01967211486",
        gp:"01798412684"
        }
    ]
    }
];
function Mapping(){
    return <div>
        <h1>Nested Mapping</h1>
        <div>
            {
                users.map((user,index)=> <article key={index}>
                    <h3>{user.fullName}</h3>
                    <p>{user.age}</p>
                    {user.phones.map((phone,index) => <div key={index}>
                        <p>Banglalink: {phone.bl}</p>
                        <p>GraminPhone: {phone.gp}</p>
                    </div>)}
                </article>)
            }
        </div>
    </div>
}
export default Mapping;