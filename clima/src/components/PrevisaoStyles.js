import styled from 'styled-components';

export const PrevisaoContainer = styled.div`
    margin-top: 20px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    h4 {
        text-align: center;
        margin-bottom: 10px;
        color: #FFF;
    }

    ul {
        list-style: none;
        padding: 0;
        
        li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px;
            margin-bottom: 5px;

            img {
                margin-right: 10px;
            }
        }
    }
`;