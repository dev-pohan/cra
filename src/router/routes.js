import App from '../App'
import ApiPage from '../page/ApiPage'
import CounterPage from '../page/CounterPage'
import TodoPage from '../page/TodoPage'

const routes = [
  { path: '/', element: <App /> },
  { path: '/counter', element: <CounterPage /> },
  { path: '/todo', element: <TodoPage /> },
  { path: '/api', element: <ApiPage /> }
]

export default routes
