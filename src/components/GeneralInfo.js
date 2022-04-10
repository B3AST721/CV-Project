import React, { Component } from 'react'

class GeneralInfo extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Name',
         email: 'johndoe@gmail.com',
         phone: 1234567890,
         saved: true,
      }
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePhone = (e) => {
        this.setState({
            phone: e.target.value
        })
    }

    handleEdit = () => {
        this.setState({
            saved: false
        })
    }

    handleSave = () => {
        this.setState({
            saved: true
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
    }

  render() {
    return (
        <div>
            <h1 className='text-2xl underline flex justify-center my-10'>General Information</h1>
            <div className='mb-8 flex justify-evenly'>
                <div>
                    <h2><b>Name:</b> {this.state.name}</h2>
                    <h2><b>Email:</b> {this.state.email}</h2>
                    <h2><b>Phone Number:</b> {this.state.phone}</h2>
                </div>
                <button onClick={this.handleEdit.bind(this)} className='bg-blue-400 px-3 py-1 rounded mx-4'>Edit</button>
            </div>
            <form onSubmit={this.onSubmit} className={this.state.saved ? 'hidden': 'flex flex-col justify-center items-center'}>
                <div>
                    <input onChange={this.handleName} type='text' className='border border-solid border-black' value={this.state.name} />
                </div>
                <div>
                    <input onChange={this.handleEmail} type='email' className='border border-solid border-black' value={this.state.email} />
                </div>
                <div>
                    <input onChange={this.handlePhone} type='number' className='border border-solid border-black' value={this.state.phone} />
                </div>
                <button onClick={this.handleSave.bind(this)} className='bg-blue-400 px-3 py-1 rounded mx-4 mt-2'>Save</button>
            </form>
            <h1 className='text-2xl underline flex justify-center my-10'>Educational Experience</h1>
        </div>
    )
  }
}

export default GeneralInfo