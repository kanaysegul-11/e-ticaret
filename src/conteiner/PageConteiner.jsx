import React from 'react'
import Container from '@mui/material/Container';

export default function PageConteiner({ children }) {
    return (
        <Container maxWidth="lg">
            {children}
        </Container>

    )
}
