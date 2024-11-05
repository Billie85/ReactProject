import { useState } from "react";
import styles from "../styles/Box.module.css";

export default function Home() {
    const [state, setstate] = useState(false);
    const [array, setarray] = useState([]);
    const [init, setinit] = useState('');

    function CheckClick(){
        if (state){
            setstate(false);
        }
        else{
            setstate(true);
        }
    }

    function Input(event){
        return(
            setinit(event.target.value)
        )
    }

    function CreateList(){
        if (init.trim()){
            setarray([...array, init]);
        }
    }

    function DeleteMap(index){
       setarray(array.filter((_, i) => i !== index));
    }

    return (
        <>
        <div className={styles.Main}>
          <div className={styles.TodoBox}>
            <h1 className={styles.TodoFont}>To Do List</h1>
            <button className={styles.PlusButton} onClick={CheckClick}>+</button>
          </div>

            {state &&
            <div className={styles.AddBox}>
                <input type="text"
                className={styles.input}
                value={init}
                onChange={Input}
                placeholder="入力してください"
                />
                <button onClick={CreateList} className={styles.AddButton}>Add</button>
            </div>
            }
            <div className={styles.checkBox}>
              <ul>
                {array.map((value, index) => {
                  return(
                  <div key={index} className={styles.listBox}>
                    <input type="checkbox" className={styles.check} onClick={() => DeleteMap(index)}/>
                    <li className={styles.Listfont} >{value}</li>
                  </div>
                  )
                })}
              </ul>
            </div>
        </div>
        </>
    )
}

