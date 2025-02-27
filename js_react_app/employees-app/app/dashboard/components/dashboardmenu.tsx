import Link from "next/link";

function DashboardLink({
    href, title
}:{
    href: string,
    title: string
}){
    return(
        <li className="m-10">
            <Link href={href}>
                {title}
            </Link>
        </li>
    );
}

export default function DashboardMenu(){
    return(
        <ul className="flex flex-row">
            <DashboardLink href="/dashboard/employees" title="Employees"/>
            <DashboardLink href="/dashboard/companies" title="Companies"/>
            <DashboardLink href="/dashboard/positions" title="Positions"/>
        </ul>
    )
}