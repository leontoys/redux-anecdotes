import { useSelector } from 'react-redux'

const Notification = () => {

  const {notification,display} = useSelector(state => state.notification) // Access the message directly
    
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: display, // Hide if not visible    
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification