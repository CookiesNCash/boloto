import React from 'react';
import { Dropdown } from 'react-bootstrap';

export default function DropDownDate({
  arr,
  name,
}: {
  arr: Array<string | number>;
  name: string;
}) {
  return (
    <div className="dropdown-container">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {name}
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-scroll">
          {arr.map((el, indx) => (
            <Dropdown.Item key={indx} href={`#/action-${indx}`}>
              {el}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
