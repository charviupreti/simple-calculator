import Output from "./Output";
function Screen(props) {
  return (
    <div className="screen">
      <Output value={props.ques}></Output>
      <Output value={props.ans}></Output>
    </div>
  );
}
export default Screen;
