
//Exemple de création de composant sous forme de fonction
// En parametre de la fonction on pourrais passer props et appeler le name avec props.name. On va plutot passer
//le name directement en parametre = DESTRUCTURATION
function WelcomeFunct ({name, children}){
    return <React.Fragment>
        <h1> Bonjour {name}</h1>
        <p>
            {children}
        </p>
    </React.Fragment>

}
//Exemple de création d'un composant sous forme de class
class Welcome extends React.Component {

    render(){
        return <React.Fragment>
            <h1>
                Bonjour {this.props.name}
            </h1>
            <p>
                {this.props.children}
            </p>
        </React.Fragment>
    }
}

class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date:new Date()}
        this.timer = null
    }
    //permet de gérer le cycle de vie du composant
    componentDidMount (){
        this.timer = window.setInterval(this.tick.bind(this),1000)
    }

    componentWillUnmount(){
    window.clearInterval(this.timer)
    }

    tick(){
        this.setState({date: new Date()})
    }

    render() {

        return <div>
            Il est {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}
        </div>
    }
}

class Incrementer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {n: props.start, timer:null}

    }
    componentDidMount (){
        this.play()
    }

    componentWillUnmount(){
        window.clearInterval(this.state.timer)
    }

    increment(){
        this.setState({n: this.state.n+1})
    }

    pause(){
        window.clearInterval(this.state.timer)
        this.setState({
            timer: null
        })
    }

    play(){
        window.clearInterval(this.state.timer)
        this.setState({
            timer:window.setInterval(this.increment.bind(this),1000)})
    }

    render(){
        return <div>
            {this.state.n}
            {this.state.timer ?
            <button onClick={this.pause.bind(this)}>Pause</button>:
            <button onClick={this.play.bind(this)}>Play</button>
            }
        </div>
    }
}


class ManualIncrement extends React.Component{
    constructor(props) {
        super(props);
        this.state= {n: 0}
    }
    increment(){
        this.setState({n: this.state.n+1})
    }
    render(){
        return <div>Valeur: {this.state.n} <button onClick={this.increment.bind(this)}>Incrémenter</button></div>
    }
}

function Home(){
    return <React.Fragment>
        <Welcome name = "Dorothée"/>
        <Welcome name = "Jean"/>
        <Welcome name = "Arthur"/>
        <Clock/>
        <Incrementer start={10}/>
        <ManualIncrement/>
    </React.Fragment>
}

ReactDOM.render(<Home/>, document.querySelector("#app"))