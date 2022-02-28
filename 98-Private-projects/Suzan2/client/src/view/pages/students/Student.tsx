import {Link} from "react-router-dom";

export interface studentInfo {
    info: {
        firstName: string;
        lastName: string;
        father: string;
        mother: string;
        id: string;
        phone:string;
        fphone: string;
        mphone: string;
        email: string;
    }
}

function Student(student:studentInfo) {
    const {firstName, lastName, father, mother, id, phone, fphone, mphone, email} = student.info;

    return(
        <Link to={`/students/${id}`}>
            <div className="student">
                <p className="student__name">{firstName} {lastName}</p>
                <p className="student__id">{id}</p>
            </div>
        </Link>
    );
}

export default Student;