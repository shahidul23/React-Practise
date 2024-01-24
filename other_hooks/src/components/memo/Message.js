import React, {memo} from 'react'

const Message = () => {
    console.log("renser Message")
  return (
    <div>
      <h1>send 0 message</h1>
    </div>
  )
}

export default memo(Message);
