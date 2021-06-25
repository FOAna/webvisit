import "./Button.css";

//props от слова properties, это объект, который получается из <Button content="Check" onClick... >
function Button(props) {
    return (
        <button className={`Button Button_color_${props.color}`} onClick={props.onClick}>{props.content}</button>
    );
}

export default Button;