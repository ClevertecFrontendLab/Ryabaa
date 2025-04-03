import { Box, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '~/components/Header/Header';
import { useGetPostsQuery } from '~/query/services/posts.ts';
import theme from '~/styles/theme';

function App() {
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <ChakraProvider theme={theme}>
            <Router>
                <Box minH='100vh' display='flex' flexDirection='column'>
                    <Header />
                </Box>
            </Router>
        </ChakraProvider>
    );
}

export default App;
