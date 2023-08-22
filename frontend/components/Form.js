import React from 'react'

export default class Form extends React.Component {
  state = {
    name: '',
  }

  onSumbit = evt => {
    evt.preventDefault()
    this.props.addTodo(this.state.name)
  }
  onChange = evt => {
    const { value } = evt.target
    this.setState({
      name: value
    })
  }
  render() {
    return (
      <form onClick={this.onSumbit}>
        <input type="text" value={this.state.name} onChange={this.onChange} />
        <input type="submit" />
      </form>
    )
  }
  }
