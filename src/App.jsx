import React, { useState, useEffect } from 'react';
import { Heading, VStack, IconButton, useColorMode } from '@chakra-ui/react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { FaSun, FaMoon } from 'react-icons/fa';

const App = () => {

  const initialTodos = [
    {
        id: 1,
        body: 'learn Javascript'
    },
    {
        id: 2,
        body: 'watch Deadpool 2'
    }
  ];

  const [todos, setTodos] = useState( () => JSON.parse(localStorage.getItem('todos')) || []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <VStack p={5} width='80%' m='auto' >
      <IconButton 
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        isRound='true' 
        size='lg'
        alignSelf='flex-end'
        onClick={toggleColorMode}
      />

      <Heading mb='8' 
        fontWeight='extrabold' 
        size='2xl' 
        bgGradient='linear(to-r, pink.500, pink.300, blue.500)'
        bgClip='text'>
      Todo App</Heading>

      <TodoList todos={todos} deleteTodo={deleteTodo}/>
      <AddTodo addTodo={addTodo} />  
    </VStack>
  )
}

export default App

