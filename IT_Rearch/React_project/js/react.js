
// navbar 
class Navbar extends React.Component {
    render() {
        return (
          <div>
            
            {/* #########navbar########### */}
            <navbar class="navbar navbar-expand-lg navbar-light">
            <div class="container">
            <a class="navbar-brand text-white" href="#">Task Management</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
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


// ###########header############
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 class="text-white">Task Management</h1>
        <hr class="bg-white"/>{this.props.header}
      </div>
    );
  }
}

ReactDOM.render (
  <Header header=""/>,document.getElementById('header')
)


// ###########Task to do###########
class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3 class="text-white">ToDo</h3>
          <hr class="bg-white"/>
          <TodoList items={this.state.items} />
          <hr/>
          <div class="card">
            <div class="card-header">Todo</div>
            <div class="card-body">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                    What needs to be done?
                    </label>
                    <br/>
                    <div class="form-group">
                        <input class="form-control" placeholder="To do"
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                        />
                    </div>
                    <button class="btn btn-block btn-outline-primary">
                    Task Todo #{this.state.items.length + 1}
                    </button>
                </form>
            </div> 
          </div>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  
  class TodoList extends React.Component {
    render() {
      return (
        <ul class="list-group">
          {this.props.items.map(item => (
            <div class="alert alert-light alert-dismissible fade show" role="alert">
              <div class="form-check">
                <input class="form-check-input" type="checkbox"/> {item.text}
              </div>
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          ))}
        </ul>
      );
    }
  }
  
  ReactDOM.render(
    <TodoApp />,
    document.getElementById('todo')
  );
// ###########end task##########


// ###########inprocress#########
class ProcressApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3 class="text-white">In Procress</h3>
          <hr class="bg-white"/>
          <RrocressList items={this.state.items} />
          <hr/>
          <div class="card">
            <div class="card-header">Procress</div>
            <div class="card-body">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                    What needs to be done?
                    </label>
                    <br/>
                    <div class="form-group">
                        <input class="form-control" placeholder="In Procress"
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                        />
                    </div>
                    <button class="btn btn-block btn-outline-primary">
                    Task Procress #{this.state.items.length + 1}
                    </button>
                </form>
            </div> 
          </div>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  
  class RrocressList extends React.Component {
    render() {
      return (
        <ul class="list-group">
          {this.props.items.map(item => (
            <div class="alert alert-light alert-dismissible fade show" role="alert">
              <div class="form-check">
                <input class="form-check-input" type="checkbox"/> {item.text}
              </div>
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          ))}
        </ul>
      );
    }
  }
  
  ReactDOM.render(
    <ProcressApp />,
    document.getElementById('inprogress')
  );
// ############end procress###########


// #############To check##############
class CheckApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3 class="text-white">In Check</h3>
          <hr class="bg-white"/>
          <CheckList items={this.state.items} />
          <hr/>
          <div class="card">
            <div class="card-header">Check</div>
            <div class="card-body">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                    What needs to be done?
                    </label>
                    <br/>
                    <div class="form-group">
                        <input class="form-control" placeholder="In Procress"
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                        />
                    </div>
                    <button class="btn btn-block btn-outline-primary">
                    Task Check #{this.state.items.length + 1}
                    </button>
                </form>
            </div> 
          </div>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  
  class CheckList extends React.Component {
    render() {
      return (
        <ul class="list-group">
          {this.props.items.map(item => (
            <div class="alert alert-light alert-dismissible fade show" role="alert">
              <div class="form-check">
                <input class="form-check-input" type="checkbox"/> {item.text}
              </div>
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          ))}
        </ul>
      );
    }
  }
  
ReactDOM.render(
    <CheckApp />,
    document.getElementById('tocheck')
);
// #############end tocheck###############


// #############done###############
class DoneApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3 class="text-white">Done</h3>
          <hr class="bg-white"/>
          <DoneList items={this.state.items} />
          <hr/>
          <div class="card">
            <div class="card-header">Done</div>
            <div class="card-body">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                    What needs to be done?
                    </label>
                    <br/>
                    <div class="form-group">
                        <input class="form-control" placeholder="In Procress"
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                        />
                    </div>
                    <button class="btn btn-block btn-outline-primary">
                    Task Done #{this.state.items.length + 1}
                    </button>
                </form>
            </div> 
          </div>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  
  class DoneList extends React.Component {
    render() {
      return (
        <ul class="list-group">
          {this.props.items.map(item => (
            <div class="alert alert-light alert-dismissible fade show" role="alert">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" checked/> {item.text}
              </div>
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          ))}
        </ul>
      );
    }
  }
  
ReactDOM.render(
    <DoneApp />,
    document.getElementById('done')
);
// ############# end task done ###########


// ########## footer ############
class Footer extends React.Component {
  render () {
    return (
      <div>
        <br/><br/>
        <footer class="page-footer font-small indigo bg-secondary">
        
          <div class="footer-copyright text-center py-3">© 2019 Copyright:
            <a href="#!" class="text-white"> React WEP_2019</a>
          </div>

        </footer>{this.props.footer}
    </div>
    );
  }
}

ReactDOM.render(
  <Footer footer=""/>,document.getElementById('footer')
) 
