import React from 'react'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'
import Authform from '../Authform/Authform'
import ChatUi from '../Chats/ChatUi'

export default function Renderpage() {
    const router=createBrowserRouter([
        {path:"/", element:<Authform/>},
        {path:"/chats", element:<ChatUi/>},
    ])
  return (
    <RouterProvider router={router}>
    <Outlet />
  </RouterProvider>
  )
}
