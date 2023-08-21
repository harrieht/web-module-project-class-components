import React from 'react'

export default class Form extends React.Component {
  render() {
    const {addTodo} = this.props
    return (
      <div>
        Form
        <button onClick={evt => addTodo('Go to Concert')}>add todo</button>
      </div>
    )
  }
}
