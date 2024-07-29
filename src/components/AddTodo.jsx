import { Button, HStack, Input, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { nanoid } from 'nanoid'

const AddTodo = ({addTodo}) => {

    const toast = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!content){
            toast({
                title: 'No Content.',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
            return
        }

        const todo = {
            id: nanoid(),
            body: content
        }

        addTodo(todo);
        setContent('');
    }

    const [content, setContent] = useState('');

    return (
        <form onSubmit={handleSubmit}>
            <HStack>
                <Input 
                    variant="filled" 
                    placeholder='Learning JavaScript...' 
                    value={content} 
                    onChange={ (e) => setContent(e.target.value)}
                />
                <Button colorScheme='pink' px="8" type='submit'>Add Todo</Button>
            </HStack>

        </form>
    )
}

export default AddTodo
