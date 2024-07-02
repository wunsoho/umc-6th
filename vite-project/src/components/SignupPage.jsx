import { useForm } from "react-hook-form";
import axios from 'axios';
import * as A from "../SignupPage.style";
import { useNavigate } from "react-router-dom";

function SignupPage () {
    const {
        register,
        formState : { errors, isValid  },
        handleSubmit,
        watch,
    } = useForm();
    const navigate = useNavigate();

    const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const onSubmit = async (data) => {
        try {
            const response = await axios.post("http://localhost:8080/auth/signup", data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
            alert("회원가입이 완료되었습니다!");
            navigate(`/login`);
        } catch (error) {
            console.error("Error signing up:", error);
            alert("회원가입에 실패했습니다. 다시 시도해주세요.");
        }
    };

    const onLogin = () => {
        navigate(`/login`);
    };

    const password = watch('password', '');
    const buttonClassName = isValid ? "sub-active" : "sub";

    return (
        <div>
            <A.title>회원가입 페이지</A.title>
            <form onSubmit={handleSubmit(onSubmit)}>
                <A.inputset>
                    <input className="box" type="text" id="name" placeholder="이름을 입력해주세요"
                        {...register('name', { required: true })} />
                    {errors?.name?.type === 'required' && (
                        <A.info>이름을 입력해주세요!</A.info>
                    )}
                </A.inputset>
                <A.inputset>
                    <input className="box" type="text" id="username" placeholder="아이디를 입력해주세요"
                        {...register('username', { required: true })} />
                    {errors?.username?.type === 'required' && (
                        <A.info>아이디를 입력해주세요!</A.info>
                    )}
                </A.inputset>
                <A.inputset>
                    <input className="box" type="email" id="email" placeholder="이메일을 입력해주세요"
                        {...register('email', {
                            required: true,
                            pattern: emailRegex
                        })} />
                    {errors?.email?.type === 'required' && (
                        <A.info>이메일을 입력해주세요!</A.info>
                    )}
                    {errors?.email?.type === 'pattern' && (
                        <A.info>이메일 양식에 맞게 입력해주세요!</A.info>
                    )}
                </A.inputset>
                <A.inputset>
                    <input className="box" type="number" id="age" placeholder="나이를 입력해주세요"
                        {...register('age', {
                            required: true,
                            validate: {
                                positive: (value) =>
                                    parseInt(value, 10) > 0 || "나이는 양수여야 합니다",
                                wholeNumber: (value) =>
                                    Number.isInteger(parseFloat(value)) || "나이는 정수여야 합니다",
                                minAge: (value) =>
                                    parseInt(value, 10) >= 19 || "나이는 19세 이상이어야 합니다",
                            },
                        })} />
                    {errors?.age?.type === 'required' && (
                        <A.info>나이를 입력해주세요!</A.info>
                    )}
                    {errors?.age?.message && (
                        <A.info>{errors.age.message}</A.info>
                    )}
                </A.inputset>
                <A.inputset>
                    <input className="box" type="password" id="password" placeholder="비밀번호를 입력해주세요"
                        {...register('password', {
                            required: true,
                            minLength: 4,
                            maxLength: 12,
                            validate: (value) => {
                                if (!/[a-z]/.test(value)) {
                                    return "비밀번호는 최소 한 개의 소문자를 포함해야 합니다.";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "비밀번호는 최소 한 개의 대문자를 포함해야 합니다.";
                                }
                                if (!/\d/.test(value)) {
                                    return "비밀번호는 최소 한 개의 숫자를 포함해야 합니다.";
                                }
                                if (!/[!@#]/.test(value)) {
                                    return "비밀번호는 최소 한 개의 특수문자(!@#)를 포함해야 합니다.";
                                }
                                return true;
                            }
                        })} />
                    {errors?.password?.type === 'required' && (
                        <A.info>비밀번호를 입력해주세요.</A.info>
                    )}
                    {errors.password?.type === 'minLength' && (
                        <A.info>최소 4자리 이상 입력해주세요.</A.info>
                    )}
                    {errors.password?.type === 'maxLength' && (
                        <A.info>최대 12자리까지 입력 가능합니다.</A.info>
                    )}
                    {errors.password?.message && (
                        <A.info>{errors.password.message}</A.info>
                    )}
                </A.inputset>
                <A.inputset>
                    <input className="box" type="password" id="passwordCheck" placeholder="비밀번호 확인"
                        {...register('passwordCheck', {
                            required: true,
                            validate: (value) =>
                                value === password || "비밀번호가 일치하지 않습니다",
                        })} />
                    {errors?.passwordCheck?.type === 'required' && (
                        <A.info>비밀번호를 다시 입력해주세요.</A.info>
                    )}
                    {errors?.passwordCheck?.message && (
                        <A.info>{errors.passwordCheck.message}</A.info>
                    )}
                </A.inputset>
                <A.inputset>
                    <input className={buttonClassName} type="submit" value="제출하기" />
                </A.inputset>
            </form>
            <A.manage>
                <button className="manage" onClick={onLogin}>이미 아이디가 있으신가요?</button>
                <button className="manage">로그인 페이지로 이동하기</button>
            </A.manage>
        </div>
    );
}

export default SignupPage;