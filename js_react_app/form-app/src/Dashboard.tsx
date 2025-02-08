function Dashboard(){
    return (
        <>
            <h1>Employees dashboard editor:</h1>
            <form className="flex-col">
                <div className="flex">
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" />
                    </div>
                    <div>
                        <label>Birth Date</label>
                        <input type="date" name="birthDate" />
                    </div>
                </div>
                <div className="flex">
                    <div>
                        <label>Company</label>
                        <select name="company">
                            <option>Yandex</option>
                            <option>Mail</option>
                        </select>
                    </div>
                    <div>
                        <label>Position</label>
                        <select name="position">
                            <option>Developer</option>
                            <option>Tester</option>
                        </select>
                    </div>
                    <div>
                        <label>Salary</label>
                        <input type="number" name="salary" />
                    </div>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </form>
            <table className='table-auto w-full mx-10 text-xl border border-solid'>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Birth Date</th>
                    <th>Company</th>
                    <th>Position</th>
                    <th>Salary</th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </>
    )
}

export default Dashboard;