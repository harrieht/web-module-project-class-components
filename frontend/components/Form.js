import React from 'react'

export default class Form extends React.Component {
  state = {
    name: '',
  }

  onSumbit = evt => {
    
  }

  onChange = evt => {
    const { value } =evt.target
    this.setState({
      name: value
    })
  }
  render() {
    const { addTodo } = this.props
    return (
      <form onClick={this.onSumbit}>
        <input type="text" value={this.state.name} onChange={this.onChange} />
        <input type="submit" />
      </form>
    )
  }
}
