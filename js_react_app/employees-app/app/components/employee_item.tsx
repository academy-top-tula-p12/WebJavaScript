
function EmployeeItem(employee: {
        id: number,
        name: string,
        birthDate: Date,
        companyId: number,
        company: {
            id: number,
            title: string,
        },
        positionId: number,
        position: {
            id: number,
            title: string,
            salary: number,
        };
    })
{
    return (
        <>
            <td>{employee.name}</td>
            {/* <td>{employee.birthDate.getDate()}</td> */}
            {/* <td>{employee.company.title}</td>
            <td>{employee.position.title}</td>
            <td>{employee.position.salary}</td> */}
        </>
    );
};

export default EmployeeItem;