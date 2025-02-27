
function EmployeeItem( { employee }: 
        { employee : {
                id: number,
                name: string,
                birthDate: Date,
                company: { title: string },
                position: {
                    title: string,
                    salary: number
                }
            }
        })
{
    return (
        <>
            <td>{employee.name}</td>
            <td>{employee.birthDate.getDate()}.{employee.birthDate.getMonth()}.{employee.birthDate.getFullYear()}</td>
            <td>{employee.company.title}</td>
            <td>{employee.position.title}</td>
            <td>{employee.position.salary}</td>
        </>
    );
};

export default EmployeeItem;