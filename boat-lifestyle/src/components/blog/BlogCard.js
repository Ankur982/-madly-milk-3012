import styled from "styled-components";

const BlogCardContainer = styled.div`
    width: 400px;
    height: 370px;
    margin: 30px;
    border-radius: 8px;

    & > img {
        width: 100%;
        cursor: pointer;
        filter: grayscale(100%);
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }
    & > img:hover {
        filter: grayscale(0);
    }
    & > h3 {
        margin-top: 20px;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.1px;
        height: 74px;
        text-align: left;
        cursor: pointer;
    }
    & > h3:hover {
        color: red;
    }
`;

const BlogButton = styled.button`
    background: 0 0;
    color: #fff;
    border-radius: 5px;
    font-size: 13px;
    border: 1px solid red;
    line-height: 1em;
    height: auto;
    padding: 11px 10px;
    margin-top: 30px;
    display: flex;
    align-self: flex-start;

    &:hover {
        background-color: red;
    }
`;

export const BlogCard = ({ blogThumbnail, blogTital }) => {
    return (
        <BlogCardContainer>
            <img src={blogThumbnail} alt={blogTital} />
            <h3>{blogTital}</h3>
            <BlogButton>Read More</BlogButton>
        </BlogCardContainer>
    );
};
