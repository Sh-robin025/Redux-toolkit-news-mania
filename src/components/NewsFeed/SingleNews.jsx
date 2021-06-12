import React from 'react';
import { Container } from 'react-bootstrap';

const SingleNews = ({ news }) => {

    return (
        <div>
            <Container>
                <div className="d-flex mt-4">
                    <img src={news.urlToImage} alt=""
                        style={{ width: '300px' }}
                        className="img-fluid" />
                    <div>
                        <h3>
                            <a href={news.url}>{news.title}</a>
                        </h3>
                        <h6>{news.description}</h6>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default SingleNews;