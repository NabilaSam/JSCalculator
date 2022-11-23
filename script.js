let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));



function app(){
    const [expression, setExpression] = React.useState("")
    const display = (symbol) => {
        setExpression(prev => prev + symbol)
    };


    return(
        <div className="container">
            <div className="grid">
                <div onClick={display} className="padButton AC">AC</div>
                <div onClick={display} className="padButton DEL">DEL</div>
                <div onClick={display} className="padButton div">&divide;</div>
                <div onClick={display} className="padButton seven">7</div>
                <div onClick={display} className="padButton eight">8</div>
                <div onClick={display} className="padButton nine">9</div>
                <div onClick={display} className="padButton times">&times;</div>
                <div onClick={display} className="padButton four">4</div>
                <div onClick={display} className="padButton five">5</div>
                <div onClick={display} className="padButton six">6</div>
                <div onClick={display} className="padButton plus">&plus;</div>
                <div onClick={display} className="padButton one">1</div>
                <div onClick={display} className="padButton two">2</div>
                <div onClick={display} className="padButton three">3</div>
                <div onClick={display} className="padButton minus">&minus;</div>
                <div onClick={display} className="padButton zero">0</div>
                <div onClick={display} className="padButton dot">.</div>
                <div onClick={calculate} className="padButton equal">&equals;</div>
            </div>
        </div>
    )
}

ReactDOM.render(<app/>, document.getElementById("root"));