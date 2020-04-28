import React from "react";
import { Container } from "../../components/Grid";
import Header from "../../components/Header";

const NoMatch = () => (
    <Container>
        <Header>
            <h1>404 Page Not Found</h1>
            <h1>
                <span role="img" aria-label="Face With Rolling Eyes Emoji">
                    🙄
            </span>
            </h1>
        </Header>
    </Container>
);

export default NoMatch;