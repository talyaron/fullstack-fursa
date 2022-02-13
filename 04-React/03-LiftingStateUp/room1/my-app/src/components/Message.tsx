import '../components/Input.scss'
import '../components/Message.scss'
interface Msg {
  value : string;
}
function Message(prop : Msg) {
  return (
    <div>{prop.value}</div>
  )
}

export default Message;

