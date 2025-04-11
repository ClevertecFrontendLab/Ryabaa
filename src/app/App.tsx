import { Box, ChakraProvider, HStack } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';

import Header from '~/components/Header/Header';
import Navbar from '~/components/Navbar/Navbar';
import { useGetPostsQuery } from '~/query/services/posts.ts';
import theme from '~/styles/theme';

function App() {
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <ChakraProvider theme={theme}>
            <Router>
                <Box minH='100vh' display='flex' flexDirection='column'>
                    <Header />
                    <HStack pos='relative'>
                        <Navbar />
                        <div></div>
                    </HStack>
                </Box>

                <Routes>
                    <Route
                        path='/:categorySlug/:subcategorySlug?' /* element={<CatalogPage />} */
                    />
                </Routes>
            </Router>
        </ChakraProvider>
    );
}

export default App;
