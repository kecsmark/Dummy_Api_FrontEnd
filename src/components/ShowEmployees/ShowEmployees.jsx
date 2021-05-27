import ShowData from './ShowData';

export default function ShowEmployees(props){
    return(
        <div
        style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexWrap:'wrap'
        }}
        >
            {props.employees.map(employee=> <ShowData data={employee} />)}
            
        </div>

    )

}