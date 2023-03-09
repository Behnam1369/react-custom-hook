import { useState } from "react";
import style from "./Logs.module.scss";
interface Log {
  id: number;
  date: string;
  message: string;
  type: string;
}
const Logs = (props: { theme: string; toggleTheme: any }) => {
  const [logs, setLogs] = useState<Log[]>([]);
  const [text, setText] = useState<string>("");
  const [buttonCount, setButtonCount] = useState<number>(1);

  const switchTheme = () => {
    props.toggleTheme();
    setLogs([
      ...logs,
      {
        id: new Date().getTime(),
        date: dateStr(),
        message: `Theme was set to ${props.theme}`,
        type: "switch theme",
      },
    ]);
  };

  const sendMessage = () => {
    setText("");
    setLogs([
      ...logs,
      {
        id: new Date().getTime(),
        date: dateStr(),
        message: text,
        type: "send message",
      },
    ]);
  };

  const handleAddButton = (n: number) => {
    setButtonCount(buttonCount + 1);
    setLogs([
      ...logs,
      {
        id: new Date().getTime(),
        date: dateStr(),
        message: `Button ${n} clicked`,
        type: "add button",
      },
    ]);
  };

  return (
    <div className={style.main}>
      <div className="left">
        <button onClick={() => switchTheme()}>
          Swith to {props.theme} theme
        </button>
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={(e) => sendMessage()} disabled={text === ""}>
            Add log
          </button>
        </div>
        {[...Array(buttonCount)].map((_e, i) => (
          <button onClick={() => handleAddButton(i + 1)}>
            Button {i + 1}{" "}
          </button>
        ))}
      </div>
      <ul className="right">
        {logs
          .sort((a, b) => b.id - a.id)
          .map((log) => (
            <li key={log.id}>
              {log.type === "switch theme" && log.date + " " + log.message}
              {log.type === "send message" &&
                log.date + " Message Sent: " + log.message}
              {log.type === "add button" && log.date + " " + log.message}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Logs;

const dateStr = () => {
  let date = new Date();
  return (
    ("00" + (date.getMonth() + 1)).slice(-2) +
    "/" +
    ("00" + date.getDate()).slice(-2) +
    "/" +
    date.getFullYear() +
    " " +
    ("00" + date.getHours()).slice(-2) +
    ":" +
    ("00" + date.getMinutes()).slice(-2) +
    ":" +
    ("00" + date.getSeconds()).slice(-2)
  );
};
