
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-image-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 1024 1024"
            strokeWidth={0}
            fill="currentColor"
            stroke="currentColor"
            className="image-icon"
          >
            <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zM338 304c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm513.9 437.1a8.11 8.11 0 0 1-5.2 1.9H177.2c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.9-5.2l170.3-202c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l99.4 118 158.1-187.5c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l229.6 271.6c2.6 3.3 2.2 8.4-1.2 11.2z" />
          </svg>
        </div>
        <p className="card-title">Card Title</p>
        <p className="card-des">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
          inventore natus modi repellendus dolorem unde odio sequi! Porro, cum
          maiores tempore suscipit laudantium perspiciatis, illo sunt,
          reprehenderit quae est blanditiis.
        </p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
  display: flex;
  flex-direction: column;
  width: 230px;
  height: 280px;
  max-height: 330px;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0px 10px 12px rgba(0, 0, 0, 0.08),
    -4px -4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;
  box-sizing: border-box;
  padding: 10px;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1),
    -4px -4px 12px rgba(0, 0, 0, 0.08);
}

.card-image-container {
  width: 100%;
  height: 64%;
  border-radius: 10px;
  margin-bottom: 12px;
  overflow: hidden;
  background-color: rgb(165, 165, 165);
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-icon {
  font-size: 40px;
}

.card-title {
  margin: 0;
  font-size: 17px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 600;
  color: #1797b8;
  cursor: default;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
}

.card-des {
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  margin: 0;
  font-size: 13px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: #1797b8;
  cursor: default;
}

`;

export default Card;
