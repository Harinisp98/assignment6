import React,{ Component } from 'react'
  
class Form extends Component{
  constructor(props){
    super(props)
    this.state = { email:'',name:'', age:null, address:'',phoneNo:''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  // Form submitting logic, prevent default page refresh 
  handleSubmit(event){
    const { name, email,  phoneNo } = this.state
    event.preventDefault()
    alert(`
      ____Your Details____\n
      
      Name : ${name}
      Email : ${email}
      Phone No : ${phoneNo}
    `)
  }
  
 
  handleChange(event){
    this.setState({
      
      [event.target.name] : event.target.value
    })
  }
  
  
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
         <div>
          <label htmlFor='name'>Name</label>
          <input
            name='name' 
            placeholder='Name'
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input 
            name='email'
            placeholder='Email' 
            value = {this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='phoneNo'>Phone Number</label>
          <input
            name='phoneNo' 
            placeholder='Phone No'
            value={this.state.phoneNo}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button>submit</button>
        </div>
      </form>
    )
  }
}
  
export default Form

