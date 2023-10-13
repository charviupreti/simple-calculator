function Button(props) {
  return (
    <input type="button" className="Button" value={props.label}
     onClick={props.handleClick} />
  );
}

export default Button;
