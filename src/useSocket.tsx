import React from 'react'
import io from 'socket.io-client'

export type SocketContext = {
  socket?: SocketIOClient.Socket
}

export const SocketContext = React.createContext<SocketContext>({})
export const SocketProvider: React.FC = ({ children }) => {
  const [socket, setSocket] = React.useState<SocketIOClient.Socket>()

  React.useEffect(() => {
    const protocol = document.location.protocol
    const host = document.location.host

    setSocket(() => io.connect(`${protocol}//${host}`))
  }, [])

  React.useEffect(() => {
    return () => socket?.close()
  }, [socket])

  return (
    <SocketContext.Provider value={{socket}}>
      {children}
    </SocketContext.Provider>
  )
}

export const useSocket = (
  on: (socket: SocketIOClient.Socket) => void,
  off: (socket: SocketIOClient.Socket) => void
) => {
  const { socket } = React.useContext(SocketContext)

  React.useEffect(() => {
    if (socket) {
      on(socket)
    }

    return () => {
      if (socket) {
        off(socket)
      }
    }
  }, [socket])
}

export default useSocket
