import React from 'react';

type PropsType = {
  title: string
}

export function Todolist(props: PropsType) {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input type="text" />
        <button>+</button>
      </div>
      <ul>
        <li><input type="checkbox" checked={true} /><span>CSS</span></li>
        <li><input type="checkbox" checked={true} /><span>JS</span></li>
        <li><input type="checkbox" checked={false} /><span>React</span></li>
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
}
