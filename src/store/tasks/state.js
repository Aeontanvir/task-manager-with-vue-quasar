const initialState = {
  tasks: [
    { id: 1, name: 'Go to shop', completed: false, dueDate: '2019/05/05', dueTime: '18:30' },
    { id: 2, name: 'Go to shop', completed: false, dueDate: '2019/05/05', dueTime: '18:30' }
  ]
}

export default {
  initialState,
  ...initialState
}
