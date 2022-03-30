import React, { Component } from 'react'

class EducationalExperience extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         school: 'School',
         title: 'Business Science',
         date: '',
         edited: true
      }
    }

    handleSchool = (e) => {
        this.setState({
            school: e.target.value
        })
    }

    handleTitle = (e) => {
        this.setState({
            title: e.target.value
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
          <h1 className='text-2xl underline flex justify-center my-10'>Educational Experience</h1>
          <div className='mb-8 flex justify-evenly'>
            <div>
                <h2><b>School Name:</b> {this.state.school}</h2>
                <h2><b>Title of Study:</b> {this.state.title}</h2>
                <h2><b>Date of Study:</b> {this.state.date}</h2>
            </div>
            <button onClick={this.handleEdit.bind(this)} className='bg-blue-400 px-3 py-1 rounded mx-4'>Edit</button>
          </div>
          <form onSubmit={this.onSubmit} className={this.state.edited ? 'hidden' : 'flex flex-col justify-center items-center'}>
                <div>
                    <input onChange={this.handleSchool} type='text' className='border border-solid border-black' value={this.state.school} />
                </div>
                <div>
                    <input onChange={this.handleTitle} type='text' className='border border-solid border-black' value={this.state.title} />
                </div>
                <div>
                    <input onChange={this.handleDate} type='date' className='border border-solid border-black' value={this.state.date} />
                </div>
                <button onClick={this.handleSave.bind(this)} className='bg-blue-400 px-3 py-1 rounded mx-4 mt-2'>Save</button>
            </form>
            <button className='bg-blue-400 px-3 py-1 rounded justify-center items-center'>+</button>
      </div>
    )
  }
}

export default EducationalExperience