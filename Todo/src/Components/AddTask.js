import { useState } from "react";

function AddTask({ addTask }) {
  const [text, setText] = useState("");
  const [day, setday] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("please add someting ");
      return;
    }

    addTask({ text, day, reminder });

    setText("");
    setday("");
    setReminder(false);
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label> Task</label>
        <input
          type="text"
          placeholder="add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label> Day&Time</label>
        <input
          type="text"
          placeholder="add Day and Time"
          value={day}
          onChange={(e) => {
            setday(e.target.value);
          }}
        />
      </div>
      <div className="form-control from-control-check">
        <label> Set Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" className="btn btn-block" value="Save Task" />
    </form>
  );
}

export default AddTask;
