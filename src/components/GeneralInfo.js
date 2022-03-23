import React, { Component } from 'react'

class GeneralInfo extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Name',
         email: 'johndoe@gmail.com',
         phone: 1234567890
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

  render() {
    return (
        <div>
            <h1 className='text-2xl underline flex justify-center mt-10'>General Information</h1>
            <div>
                <h2><b>Name:</b> {this.state.name}</h2>
                <h2><b>Email:</b> {this.state.email}</h2>
                <h2><b>Phone Number:</b> +{this.state.phone}</h2>
            </div>
            <form>
                <div>
                    <input onChange={this.handleName} type='text' className='border border-solid border-black' value={this.state.name} />
                </div>
                <div>
                    <input onChange={this.handleEmail} type='email' className='border border-solid border-black' value={this.state.email} />
                </div>
                <div>
                    <input onChange={this.handlePhone} type='number' className='border border-solid border-black' value={this.state.phone} />
                </div>
                <button onClick='' type='submit' className='bg-blue-400 px-3 py-1 rounded mx-4'>Save</button>
            </form>
        </div>
    )
  }
}

export default GeneralInfo