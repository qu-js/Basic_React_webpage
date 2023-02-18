import React, { useContext} from "react";
import { useState, useReducer } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Test from "./Test";

const initialState = {
    count : 0,
    students : [],
};

const reducer = (state, action) => {
    switch(action.type){
    case "add-student" :
        const name = action.payload.name;
        const newStudent = {
            id : Date.now(),
            name,
            isHere : false,
        }
        return {
            count : state.count + 1,
            students : [ ...state.students, newStudent],
        }
    case 'delete-student' :
        return {
            count : state.count - 1,
            students : state.students.filter( (student) => 
                student.id !== action.payload.id
            ),
        }
    case 'mark-student' :
        return {
            count : state.count,
            students : state.students.map( (student) => {
                if(student.id === action.payload.id)
                    return { ...student, isHere : !student.isHere}
                return student;
            }
            ),
        }
    default:
        return state;
    }
};

export default function Content() {
    const {isDark} = useContext(ThemeContext);
    const [name, setName] = useState('');
    const [studentsInfo, dispatch] = useReducer(reducer, initialState);

    return (
        <div 
            className="content"
            style={{
                backgroundColor: isDark ? '#4D4D4D' : '#8D8D8D',
                color: isDark ? 'white' : 'black',
            }}
        >
            <div className="temp1">

                <h2>출석부 예제</h2>
                <br />
                <p>총 학생 수 : {initialState.count}</p>
                <br />

                <div  className="temp2">
                    <input 
                        type = "text"
                        value = {name}
                        placeholder = "이름을 입력해주세요"
                        onChange = { (e) => {setName(e.target.value)}}
                        />
                    <button onClick = { () => {
                        dispatch( {type : 'add-student', payload : {name}} );
                        setName('');
                    }}>추가</button>
                </div>
                <br />
                {studentsInfo.students.map( (student) => { 
                        return <Test key = {student.id} name = {student.name}
                                dispatch = {dispatch} id = {student.id} 
                                isHere = {student.isHere} />
                    })
                }

            </div>

        </div>
    );
}