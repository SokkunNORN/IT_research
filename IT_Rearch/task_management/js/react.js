

// navbar 
class Navbar extends React.Component {
  render() {
      return (
        <div>
          
          {/* #########navbar########### */}
          <navbar class="navbar navbar-expand-lg navbar-light">
          <div class="container">
          <a class="navbar-brand text-white">Task Management</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ml-auto">
                  <li class="nav-item active">
                    Wep_2019
                  </li>
                  </ul>
              </div>
              </div>
          </navbar>
          <br></br> {this.props.navbar}
          {/* ##########end navbar############ */}

        </div>
      );
  }
}

ReactDOM.render(
  <Navbar navbar = ""/>,document.getElementById('navbar')
)
// #############end navbar##############

// =====================================
class Title extends React.Component {
  render() {
    return (
      <div>
        <h1 class="text-white">Task Management</h1>
        <hr class="bg-white"/> {this.props.title}
      </div> 
    );
  }
}

ReactDOM.render(
  <Title/>, 
  document.getElementById('title')
);

// =====================================
class Subtitle extends React.Component{
  render() {
    return(
      <h3 class="text-white">
        {this.props.subtitle}
      </h3> 
    );
  }
}

ReactDOM.render(
  <Subtitle subtitle="Todo"/>,
  document.getElementById('title_todo')
);

ReactDOM.render(
  <Subtitle subtitle="Progress"/>,
  document.getElementById('title_progress')
);

ReactDOM.render(
  <Subtitle subtitle="Review"/>,
  document.getElementById('title_review')
);

ReactDOM.render(
  <Subtitle subtitle="Done"/>,
  document.getElementById('title_done')
);

// ============= Todo ===========
class Todo extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      // name: 'TODO list',
      count: 0,
      tasks: ['Todo']
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClickIndex = this.handleClickIndex.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleClick(event){
    eval(this[event.target.name]).bind(this)(event)
  }
  handleClickIndex(index, event){
    eval(this[event.target.name]).bind(this)(index, event)
  }
  handleChange(event){
    eval(this[event.target.name]).bind(this)(event)
  }
  handleSubmit(event){
    event.preventDefault()
    eval(this[event.target.name]).bind(this)(event)
  }
  task(event) {
    this.setState({task:event.target.value})
  }
  addTask(event) {
    if (!this.state.task) return
    const tasks = this.state.tasks || []
    tasks.push(this.state.task)
    this.setState({tasks:tasks, task:''})
  }
  removeTask(index, event) {
    const tasks = this.state.tasks
    tasks.splice(index, 1)    
    this.setState({tasks})
  }
  render(){
    const tasks = (this.state.tasks||[]).map((task,index)=>(
      <li class="list-group-item">
        {task} <button name="removeTask" class="float-right" 
          onClick={event=>this.handleClickIndex(index,event)}>x</button>
      </li>
    ))
    return (
      <div className="container">
        <h4 class="text-white">{this.state.name}</h4>
        <div>
          <ul id="todo">
            {tasks}
            {
              this.state.task &&
              <li>{this.state.task}</li>
            }
          </ul>
          <div>
            <form name="sendTask" onSubmit={this.handleSubmit}>
              <input name="task" value={this.state.task} onChange={this.handleChange}/>
              <button type="submit" name="addTask" onClick={this.handleClick}> Add </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

// ============ To do ===========
ReactDOM.render(
  <Todo/>,
  document.getElementById('todo')
);


// ============= progress ===========
class Progress extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      // name: 'TODO list',
      count: 0,
      tasks: ['Progress']
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClickIndex = this.handleClickIndex.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleClick(event){
    eval(this[event.target.name]).bind(this)(event)
  }
  handleClickIndex(index, event){
    eval(this[event.target.name]).bind(this)(index, event)
  }
  handleChange(event){
    eval(this[event.target.name]).bind(this)(event)
  }
  handleSubmit(event){
    event.preventDefault()
    eval(this[event.target.name]).bind(this)(event)
  }
  task(event) {
    this.setState({task:event.target.value})
  }
  addTask(event) {
    if (!this.state.task) return
    const tasks = this.state.tasks || []
    tasks.push(this.state.task)
    this.setState({tasks:tasks, task:''})
  }
  removeTask(index, event) {
    const tasks = this.state.tasks
    tasks.splice(index, 1)    
    this.setState({tasks})
  }
  render(){
    const tasks = (this.state.tasks||[]).map((task,index)=>(
      <li class="list-group-item">
        {task} <button name="removeTask" class="float-right" 
          onClick={event=>this.handleClickIndex(index,event)}>x</button>
      </li>
    ))
    return (
      <div className="container">
        <h4 class="text-white">{this.state.name}</h4>
        <div>
          <ul id="progress">
            {tasks}
            {
              this.state.task &&
              <li>{this.state.task}</li>
            }
          </ul>
          <div>
            <form name="sendTask" onSubmit={this.handleSubmit}>
              <input name="task" value={this.state.task} onChange={this.handleChange}/>
              <button type="submit" name="addTask" onClick={this.handleClick}> Add </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

// ========== Progress ===========
ReactDOM.render(
  <Progress/>,
  document.getElementById('progress')
);


// ============= Review ===========
class Review extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      // name: 'TODO list',
      count: 0,
      tasks: ['Review']
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClickIndex = this.handleClickIndex.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleClick(event){
    eval(this[event.target.name]).bind(this)(event)
  }
  handleClickIndex(index, event){
    eval(this[event.target.name]).bind(this)(index, event)
  }
  handleChange(event){
    eval(this[event.target.name]).bind(this)(event)
  }
  handleSubmit(event){
    event.preventDefault()
    eval(this[event.target.name]).bind(this)(event)
  }
  task(event) {
    this.setState({task:event.target.value})
  }
  addTask(event) {
    if (!this.state.task) return
    const tasks = this.state.tasks || []
    tasks.push(this.state.task)
    this.setState({tasks:tasks, task:''})
  }
  removeTask(index, event) {
    const tasks = this.state.tasks
    tasks.splice(index, 1)    
    this.setState({tasks})
  }
  render(){
    const tasks = (this.state.tasks||[]).map((task,index)=>(
      <li class="list-group-item">
        {task} <button name="removeTask" class="float-right" 
          onClick={event=>this.handleClickIndex(index,event)}>x</button>
      </li>
    ))
    return (
      <div className="container">
        <h4 class="text-white">{this.state.name}</h4>
        <div>
            {tasks}
          <ul id="review">
            {
              this.state.task &&
              <li>{this.state.task}</li>
            }
          </ul>
          <div>
            <form name="sendTask" onSubmit={this.handleSubmit}>
              <input name="task" value={this.state.task} onChange={this.handleChange}/>
              <button type="submit" name="addTask" onClick={this.handleClick}> Add </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

// ============ Review ==========
ReactDOM.render(
  <Review/>,
  document.getElementById('review')
);


// ============= Done ===========
class Done extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      // name: 'TODO list',
      count: 0,
      tasks: ['Done']
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClickIndex = this.handleClickIndex.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleClick(event){
    eval(this[event.target.name]).bind(this)(event)
  }
  handleClickIndex(index, event){
    eval(this[event.target.name]).bind(this)(index, event)
  }
  handleChange(event){
    eval(this[event.target.name]).bind(this)(event)
  }
  handleSubmit(event){
    event.preventDefault()
    eval(this[event.target.name]).bind(this)(event)
  }
  task(event) {
    this.setState({task:event.target.value})
  }
  addTask(event) {
    if (!this.state.task) return
    const tasks = this.state.tasks || []
    tasks.push(this.state.task)
    this.setState({tasks:tasks, task:''})
  }
  removeTask(index, event) {
    const tasks = this.state.tasks
    tasks.splice(index, 1)    
    this.setState({tasks})
  }
  render(){
    const tasks = (this.state.tasks||[]).map((task,index)=>(
      <li class="list-group-item">
        {task} <button name="removeTask" class="float-right" 
          onClick={event=>this.handleClickIndex(index,event)}>x</button>
      </li>
    ))
    return (
      <div className="container">
        <h4 class="text-white">{this.state.name}</h4>
        <div>
          <ul id="done">
            {tasks}
            {
              this.state.task &&
              <li>{this.state.task}</li>
            }
          </ul>
          <div>
            <form name="sendTask" onSubmit={this.handleSubmit}>
              <input name="task" value={this.state.task} onChange={this.handleChange}/>
              <button type="submit" name="addTask" onClick={this.handleClick}> Add </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

// ============= Done ============
ReactDOM.render(
  <Done/>,
  document.getElementById('done')
);


