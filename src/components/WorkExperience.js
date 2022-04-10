import React, { Component } from 'react'

export class WorkExperience extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         cname: 'Company Name',
         position: 'Position',
         date: '',
         edited: true
      }
    }

    handleCname = (e) => {
        this.setState({
            cname: e.target.value
        })
    }

    handlePosition = (e) => {
        this.setState({
            position: e.target.value
        })
    }

    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
    }

    handleEdit = () => {
        this.setState({
            edited: false
        })
    }

    handleSave = () => {
        this.setState({
            edited: true
        })
    }

  render() {
    return (
      <div>
          <div className='mb-8 flex justify-evenly'>
            <div>
                <h2><b>Company Name:</b> {this.state.cname}</h2>
                <h2><b>Position Title:</b> {this.state.position}</h2>
                <h2><b>Period of time:</b> {this.state.date + ' Year(s)'}</h2>
            </div>
            <button onClick={this.handleEdit.bind(this)} className='bg-blue-400 px-3 py-1 rounded mx-4'>Edit</button>
          </div>
          <form onSubmit={this.onSubmit} className={this.state.edited ? 'hidden' : 'flex flex-col justify-center items-center'}>
                <div>
                    <input onChange={this.handleCname} type='text' className='border border-solid border-black' value={this.state.school} />
                </div>
                <div>
                    <input onChange={this.handlePosition} type='text' className='border border-solid border-black' value={this.state.title} />
                </div>
                <div>
                    <input onChange={this.handleDate} type='number' className='border border-solid border-black' value={this.state.date} />
                </div>
                <button onClick={this.handleSave.bind(this)} className='bg-blue-400 px-3 py-1 rounded mx-4 mt-2'>Save</button>
            </form>
      </div>
    )
  }
}

export default WorkExperience