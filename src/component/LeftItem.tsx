import React, { useState, useRef } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const LeftItem = () => {
  // input창 검색어 핸들링
  const [searchInput, setSearchInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  // 검색어 버튼 (돋보기) 눌렀을 때 핸들링
  const handleSearch = () => {
    setSearchInput(inputRef.current!.value);
  };

  // input 문자열 배열로 변환
  const list = searchInput.split("\\n");

  return (
    <Wrap>
      <Search>
        <div className="input-box">
          <input
            type="text"
            placeholder="대화내용을 입력하세요"
            ref={inputRef}
            onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
              const inputElement = e.target as HTMLInputElement;
              if (e.key === "Enter") {
                e.preventDefault();
                setSearchInput(inputElement.value);
              }
            }}
          />
        </div>
        <div className="search-icon" onClick={handleSearch}>
          <AiOutlineSearch />
        </div>
      </Search>
      <Main>
        <div className="conversation-box">
          <ul>
            {list.map((v: string, i: number) => {
              return <li key={i}>{list.length > 1 ? <div className="speech-bubble">{v.substr(3)}</div> : null}</li>;
            })}
          </ul>
        </div>
        <div className="footer-desc">
          <div className="warning">올바른 시각화를 위해서는 input 데이터 형식을 준수해주세요.</div>
          <div className="warning-desc">다음 샘플 데이터를 복사해 붙여넣어 보세요.</div>
          <div className="sample-data">
            A : i am frank . nice to meet you . what is your name ?\nB : my name is gary . great to meet you too .
          </div>
        </div>
      </Main>
    </Wrap>
  );
};

export default LeftItem;
const Wrap = styled.div`
  width: 100%;
  height: 1097px;
  background-color: #fff;
`;
const Search = styled.div`
  display: flex;
  height: 45px;
  border-bottom: 1px solid #e1e1e1;
  margin-bottom: 5rem;
  .input-box {
    width: 90%;
    input {
      width: 100%;
      height: 100%;
      padding: 10px;
      font-size: 1.4rem;
      border: none;
      &:focus {
        border: 2px solid rgb(0, 123, 255);
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
        outline: none;
      }
    }
  }
  .search-icon {
    cursor: pointer;
    width: 10%;
    border-left: 1px solid #e1e1e1;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 2.2rem;
      color: #093687;
    }
  }
`;
const Main = styled.div`
  height: 1002px;
  .conversation-box {
    height: 900px;
    overflow-y: auto;
    ul {
      li {
        padding: 10px;
      }
      li:nth-child(even) {
        display: flex;
        div {
          width: 85%;
          background-color: #e5e5e5;
          color: #000;
          padding: 10px;
          border-radius: 10px;
        }
      }
      li:nth-child(odd) {
        display: flex;
        justify-content: end;
        div {
          width: 85%;
          background-color: #007aff;
          color: #fff;
          padding: 10px;
          border-radius: 10px;
        }
      }
    }
    // 스크롤바 커스텀
    &::-webkit-scrollbar-thumb {
      background: #217af4;
    }
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-track {
      background: rgba(33, 122, 244, 0.1);
    }
  }
  .footer-desc {
    padding: 10px;
    font-size: 1.4rem;
    height: 102px;
    line-height: 1.2;
    .warning {
      font-weight: 700;
    }
    .warning-desc {
      margin-bottom: 5px;
    }
    .sample-data {
      color: #d3d3d3;
    }
  }
`;
