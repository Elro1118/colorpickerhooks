import React, { useState } from 'react'

export default function ColorPicker(props) {
  const [h, changeValueH] = useState(80)
  const [s, changeValueS] = useState(60)
  const [l, changeValueL] = useState(20)
  const [a, changeValueA] = useState(100)
  const [list, changeList] = useState([])

  const addColorToList = () => {
    changeList(prevList => prevList.concat(`hsla(${h},${s}%,${l}%,${a}%)`))
  }
  return (
    <div className="main">
      <h2>HSL COLOR PICKER</h2>
      <div className="color-picker-section">
        <div className="external-box-section">
          <div
            className="box-section"
            style={{
              backgroundColor: `hsla(${h},${s}%,${l}%,${a}%)`
            }}
          />
          <p className="hsla-section">
            hsla({h},{s}%,{l}%,
            {a}%)
          </p>
        </div>
        <div className="ranges-section">
          <div className="range-section">
            <p>H &nbsp;</p>
            <input
              className="range-input"
              min="0"
              max="360"
              type="range"
              value={h}
              onChange={event => changeValueH(event.target.value)}
            />
            <p>&nbsp;{h}</p>
          </div>
          <div className="range-section">
            <p>S &nbsp;</p>
            <input
              className="range-input"
              type="range"
              value={s}
              onChange={event => changeValueS(event.target.value)}
            />
            <p>&nbsp;{s}</p>
          </div>
          <div className="range-section">
            <p>L &nbsp;</p>
            <input
              className="range-input"
              min="0"
              max="100"
              type="range"
              value={l}
              onChange={event => changeValueL(event.target.value)}
            />
            <p>&nbsp;{l}</p>
          </div>
          <div className="range-section">
            <p>A &nbsp;</p>
            <input
              className="range-input"
              min="0"
              max="100"
              type="range"
              value={a}
              onChange={event => changeValueA(event.target.value)}
            />
            <p>&nbsp;{a}</p>
          </div>
          <div>
            <button onClick={() => addColorToList()}>Remember Color</button>
          </div>
        </div>

        <div className="list-hsl">
          <h2> List of HSL </h2>
          <ul>
            {list.map((color, i) => {
              return (
                <li key={i}>
                  <div
                    className="little-box"
                    style={{
                      backgroundColor: `${color}`
                    }}
                  />
                  &nbsp;{color}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
