import { useState } from "react";

function NewTodoList() {
    const [list, setList] = useState([
        { text: "Create a to do list", checked: false },
        { text: "Check off first item", checked: false },
        { text: "Investigate race condition", checked: false }
    ]);
    
    const [task, setTask] = useState("");

    function handleChange(event) {
        setTask(event.target.value);
    }

    function addTask() {
        if (task.trim()) {
            setList(l => [...l, { text: task, checked: false }]);
            setTask("");
        }
    }

    function removeTask(index) {
        setList(list.filter((_, i) => i !== index));
    }

    function toggleCheck(index) {
        setList(list.map((item, i) => (
            i === index ? { ...item, checked: !item.checked } : item
        )));
    }

    return (
        <>
            <div className="box">
                <span>Today</span>
                {list.map((item, index) =>
                    <div className="listBox" key={index}>
                        <div className="listValue">
                            <label>
                                <input
                                    type="checkbox"
                                    className="default"
                                    checked={item.checked}
                                    onChange={() => toggleCheck(index)}
                                />
                                <span style={{ textDecoration: item.checked ? "line-through" : "none" }}>
                                    {item.text}
                                </span>
                            </label>
                            <img
                                height="20px"
                                src="src/assets/close.png"
                                onClick={() => removeTask(index)}
                                alt="Remove"
                            />
                        </div>
                    </div>
                )}
            </div>
            <div className="selectionBox">
                <input
                    type="text"
                    placeholder="Enter a task"
                    className="newTask"
                    onChange={handleChange}
                    value={task}
                />
                <button onClick={addTask}>Add</button>
            </div>
        </>
    );
}

export default NewTodoList;
