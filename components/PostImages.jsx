import { useState, useCallback } from "react";
import styled from "styled-components";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import ImagesZoom from "./ImagesZoom";

const ImageWrapper = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const PostImages = ({ images }) => {
  const [modalToggle, setModalToggle] = useState(false);
  const onClickModalToggle = useCallback(() => {
    setModalToggle(!modalToggle);
  }, []);

  console.log(images[0].src);

  if (images.length === 1) {
    return (
      <ImageWrapper>
        <img
          style={{ width: "50%" }}
          src={`${images[0].src}`}
          alt="첫 번째 이미지"
        />
      </ImageWrapper>
    );
  } else if (images.length === 2) {
    return (
      <ImageWrapper>
        <img
          style={{ width: "50%" }}
          src={`${images[0].src}`}
          alt="첫 번째 이미지"
        />
        <img
          style={{ width: "50%" }}
          src={`${images[1].src}`}
          alt="두 번째 이미지"
        />
      </ImageWrapper>
    );
  } else if (images.length >= 3) {
    return (
      <ImageWrapper>
        <img
          style={{ width: "50%", textAlign: "center" }}
          src={`${images[0].src}`}
          alt="첫 번째 이미지"
        />
        <ButtonWrapper>
          <Button onClick={onClickModalToggle}>
            <SearchOutlined />더 보기
          </Button>
        </ButtonWrapper>
        {modalToggle && (
          <ImagesZoom images={images} setModalToggle={setModalToggle} />
        )}
      </ImageWrapper>
    );
  }
};

export default PostImages;
