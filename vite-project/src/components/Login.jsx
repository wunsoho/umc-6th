import { useForm } from "react-hook-form";
import * as A from "../SignupPage.style";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Login () {
    const {
        register,
        formState : { errors, isValid  },
        handleSubmit,
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = async(data) => {
        try{
            const response = await axios.post("http://localhost:8080/auth/login", data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const token = response.data.token;
            localStorage.setItem('Token', token);
            console.log(response.data);
        } catch(error){
            console.log(error);
        }
        alert("로그인에 성공하셨습니다!");
        navigate(`/`);
    }
    const buttonClassName = isValid ? "sub-active" : "sub";
    return(
        <div>
            <A.title>로그인 페이지</A.title>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <A.inputset>
                    <input className = "box" type="text" id="username" placeholder="아이디을 입력해주세요"
                    {...register('username', {required: true})}/>
                    {errors?.username?.type === 'required' && (
                    <A.info>아이디를 입력해주세요!</A.info>
                    )}
                </A.inputset>
                <A.inputset>
                    <input className = "box" type="password" id="password" placeholder="비밀번호를 입력해주세요"
                    {...register('password', {
                        required: true, 
                        minLength : 4,
                        maxLength : 12,
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
                    })}/>
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
                    <input className = {buttonClassName} type="submit" value="로그인    "/>
                </A.inputset>
            </form>
        </div>
        
    );
}

export default Login;