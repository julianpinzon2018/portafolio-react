import styled from "styled-components";

const RedesStyled = styled.div`
  ul {
    display: flex;
    padding: 0;
    gap: 3rem;
    margin: 0;
  }

  ul li {
    list-style: none;
  }

  ul li a {
    width: 80px;
    height: 80px;
    background-color: var(--main-white);
    line-height: 80px;
    font-size: 35px;
    display: block;
    text-align: center;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    border: 3px solid var(--main-white);
    z-index: 1;
  }

  ul li a .icon {
    position: relative;
    color: #262626;
    transition: 0.5s;
    z-index: 3;
  }

  ul li a:hover .icon {
    color: var(--main-white);
    transform: rotateY(360deg);
  }

  ul li a:before {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f00;
    transition: 0.5s;
    z-index: 2;
  }

  ul li a:hover:before {
    top: 0;
  }

  ul li:nth-child(1) a:before {
    background: #6e40c9;
  }

  ul li:nth-child(2) a:before {
    background: #55acee;
  }

  ul li:nth-child(3) a:before {
    background: #0077b5;
  }

  ul li:nth-child(4) a:before {
    background: radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
    );
  }
  @media screen and (max-width: 768px) {
    ul {
      gap: 1rem;
    }
    ul li a {
      width: 40px;
      height: 40px;
      line-height: 40px;
      font-size: 20px;
    }
  }
`;

function Redes() {
  return (
    <RedesStyled>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
        crossorigin="anonymous"
      />

      <ul>
        <li>
          <a
            href="https://github.com/julianpinzon2018"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-brands fa-github icon" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/julanpinzon2018"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter icon"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/julianpinzon2018"
            rel="noreferrer"
          >
            <i className="fab fa-brands fa-linkedin-in icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/julianpinzon2018"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-brands fa-instagram icon" />
          </a>
        </li>
      </ul>
    </RedesStyled>
  );
}

export default Redes;
