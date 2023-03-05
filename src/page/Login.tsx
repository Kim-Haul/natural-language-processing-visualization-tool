import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import PuffLoader from "react-spinners/PuffLoader";
import { useForm } from "react-hook-form";
import { getCookie } from "../shared/cookie";

const SignUp = () => {
  // useNavigate 선언
  const navigate = useNavigate();

  // react-hook-form 타입정의
  interface FormProps {
    email: string;
    password: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({ mode: "onChange" });

  // 폼 버튼 클릭시 작동하는 함수
  const onSubmit = async (data: FormProps) => {
    // 아이디 저장 여부 확인
    save_id
      ? (document.cookie = `ID=${data.email}; max-age=604800; path=/`)
      : (document.cookie = `ID=${data.email}; max-age=1; path=/`);

    Toast.fire({
      icon: "success",
      title: '<span style="font-size: 14px">로그인 요청 대기중입니다.',
      width: 330,
    }).then(() => {
      navigate("/dashboard");
    });
  };

  // 캡스락 활성 여부 확인
  const [capslock, setCapsLock] = useState<boolean>(false);

  // 아이디 저장
  const [save_id, SetSaveId] = useState<boolean>(false);

  // 아이디 저장 체크박스 여부 검증
  useEffect(() => {
    if (getCookie("ID")) {
      SetSaveId(true);
    }
  }, []);

  // sweet-alert 모달창
  const Toast = Swal.mixin({
    toast: true,
    position: "center",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  return (
    <Wrap>
      <Container>
        <PuffLoader color="#093687" />
        <PostForm onSubmit={handleSubmit(onSubmit)}>
          <Line>
            <label htmlFor="email">이메일</label>
            <Input
              id="email"
              type="email"
              autoComplete="off"
              placeholder="이메일을 입력해주세요"
              isInvalid={!!errors.email}
              defaultValue={getCookie("ID")}
              {...register("email", {
                required: "이메일을 입력해주세요",
              })}
            />
            {errors.email && <div className="err">{errors.email.message}</div>}
          </Line>
          <Line className="pw-line">
            <label htmlFor="password">비밀번호</label>
            <Input
              id="password"
              type="password"
              autoComplete="off"
              placeholder="비밀번호를 입력해주세요"
              isInvalid={!!errors.password}
              onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                e.getModifierState("CapsLock") === true ? setCapsLock(true) : setCapsLock(false);
              }}
              {...register("password", {
                required: "비밀번호를 입력해주세요",
              })}
            />
            {errors.password && <div className="err">{errors.password.message}</div>}
            {capslock && <div className="err capslock">CapsLock이 켜져 있습니다.</div>}
          </Line>
          <div className="tool-box">
            <div className="left-box">
              <input
                id="save"
                type="checkbox"
                checked={save_id}
                onClick={() => SetSaveId(!save_id)}
                style={{ cursor: "pointer" }}
                readOnly
              />
              <label htmlFor="save" style={{ cursor: "pointer" }}>
                아이디 저장
              </label>
            </div>
          </div>
          <Button>
            <button className="signUp-email">로그인 하기</button>
          </Button>
        </PostForm>
      </Container>
    </Wrap>
  );
};

export default SignUp;
const Wrap = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  .tool-box {
    display: flex;
    .left-box {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
    }
    input {
      width: 1.5rem;
      height: 1.5rem;
      color: dodgerblue;
      vertical-align: middle;
      -webkit-appearance: none;
      background: none;
      border: 0;
      outline: 0;
      flex-grow: 0;
      border-radius: 50%;
      background-color: #ffffff;
      transition: background-color 300ms;
      cursor: pointer;
      &::before {
        content: "";
        color: transparent;
        display: block;
        width: inherit;
        height: inherit;
        border-radius: inherit;
        border: 0;
        background-color: transparent;
        background-size: contain;
        box-shadow: inset 0 0 0 1px #ccd3d8;
      }
      &:checked {
        background-color: currentcolor;
      }
      &:checked::before {
        box-shadow: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cpath d='M15.88 8.29L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z' fill='%23fff'/%3E %3C/svg%3E");
      }
    }
  }
`;
const Container = styled.main`
  font-size: 1.4rem;
  width: 360px;
  min-height: 660px;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const PostForm = styled.form`
  width: 100%;
  margin-top: 2rem;
`;
const Line = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  .err {
    color: red;
    font-size: 1.2rem;
    margin-top: 0.5rem;
  }
  .err.capslock {
    color: blue;
  }
  label {
    margin-bottom: 1rem;
  }
`;
const Input = styled.input`
  border: 1px solid #e1e1e1;
  width: 100%;
  border-radius: 3px;
  height: 5rem;
  padding: 1rem;
  font-size: 1.4rem;
  outline: ${(props: { isInvalid: boolean }) => props.isInvalid && "none"};
  border: ${(props: { isInvalid: boolean }) => props.isInvalid && "1px solid red"};
  border-color: ${(props: { isInvalid: boolean }) => props.isInvalid && "#fa5963"};
  &:focus {
    border: 2px solid rgb(0, 123, 255);
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    outline: none;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;
const Button = styled.div`
  margin-top: 2rem;
  button {
    width: 100%;
    height: 5rem;
    font-size: 1.5rem;
  }
`;
