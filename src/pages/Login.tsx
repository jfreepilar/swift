import { useEffect, useState, ChangeEvent } from "react";
import womanWithPhoneThree from "../assets/images/login/woman-with-phone-3.png";
import swiftLogo from "../assets/images/swift-logo.png"
import swiftLogoWhite from "../assets/images/login/swift-logo-white.png";
import secure from "../assets/images/login/secure.png";
import bancnet from "../assets/images/login/bancnet.png";
import contact from "../assets/images/login/contact.png";
import FAQ from "../assets/images/login/FAQ.png";
import pdic from "../assets/images/login/pdic.png";
import pinLocation from "../assets/images/login/pin-location.png";
import recatcha from "../assets/images/login/recaptcha.png";
import dpodps from "../assets/images/dpodps.png";
import { IoLockClosedOutline } from "react-icons/io5";

interface InputValue  {
    user: string;
    password: string;
    checked: boolean;
};

const inputInitialValue: InputValue = {
    user: "",
    password: "",
    checked: false,
};

export const Login = () => {
    const [inputValue, SetInputValue] = useState(inputInitialValue);
    const [ touched, setTouched ] = useState<{user?: boolean; password?: boolean}>({});
    const [ error, setError ] = useState<{user?: string; password?: string}>({});
    const [ disabledButton, setDisableButton ] = useState<boolean>(true);


    const validateField = (name: "user" | "password", value: string ) => {

        if (!value.trim()) {
            if (name === "user") {
                return "User ID is required"
            } else {
                return "Password is required"
            }
        }
        return "";
    };

    useEffect(() => {
    const isValid =
        inputValue.user.trim() !== "" &&
        inputValue.password.trim() !== "" &&
        inputValue.checked;

    setDisableButton(!isValid);
    }, [inputValue]);

    
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "user" || name === "password") {
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setError((prev) => ({ ...prev, [name]: error }));
    }
    };    

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked} = e.target;

        SetInputValue((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));

        if ((name === "user" || name === "password") && touched[name]) {
        const error = validateField(name, value);
        setError((prev) => ({ ...prev, [name]: error }));
    }};

    useEffect(() => {
    document.title = "Swift | All-in-1 Digital Bank ";
    }, []);

    const submitButtonStyle: string = "w-[90%] rounded-lg p-2 mt-4 cursor-pointer";
    const userProfileText: string = "text-[14px]! text-gray-700 cursor-pointer";
    const iconStyle:string = "w-12 cursor-pointer";
    const iconTextStyle:string = "text-[14px]! text-gray-600 mt-4 cursor-pointer";
    const descriptionTextStyle:string = "text-[14px]! text-gray-400";
    const errorStyle: string = "text-red-400 text-sm!";

    const getInputFieldStyle = (field: "user" | "password") => {
    return `w-full py-2 pl-2 rounded-lg mb-4 border-2 ${
        touched[field] && error[field] ? "border-red-400" : "border-gray-400"}`;
    };
    
    const getLabelStyle = (field: "user" | "password") => {
        return `${touched[field] && error[field] ? "text-red-400" : "text-gray-700" }`
    }

    return (
        <div className="flex bg-linear-to-bl from-violet-500 to-fuchsia-500 h-[100vh]">
            <section className="hidden md:flex w-[65%]">
                <img src={swiftLogoWhite}
                     className="h-20 mt-auto xl:mr-10 lg:mr-[-100px] md:mr-[-195px] z-10"/>
                <img src={womanWithPhoneThree}
                     className="xl:w-[660px] lg:w-full h-auto"/>                   

            </section>

            <section className="w-full lg:w-[35%] md:w-[42%] flex flex-col items-center py-8 px-12 md:px-26 bg-white overflow-y-scroll" >
                <div className="flex justify-center mb-4">
                    <img src={swiftLogo}
                        className="w-[140px] h-[56px]"/>
                </div>


                {/* cybersecure */}
                <div className="w-[300px] h-[200px] rounded-xl py-4  bg-fuchsia-200"> 
                    <div className="flex justify-center px-6">
                        <img src={secure}
                                className="h-[36px]"/>
                        <div className="flex flex-col justify-end px-3 text-gray-500">
                            <p className="text-[1rem]!">CyberSecure</p>
                            <p className="text-[.75rem]!">Verify that the URL in your browser is correct and secure.</p>                         
                        </div>   
                    </div>
                    <div className="flex bg-gray-50 mt-4 mx-8 p-2 rounded-lg">
                        <span className="text-[1.25rem] mt-[1px] mr-2"><IoLockClosedOutline /></span>
                        <p className="text-[14px]! text-gray-400">jfreepilar.github.io/swift/login</p>
                    </div>
                </div>
                {/* inputfield */}
                <form className="w-full md:w-[300px] mt-12">
                    <div>
                        <label className={getLabelStyle("user")}>User ID</label> <br />
                        <input type="text"
                               className={getInputFieldStyle("user")}
                               name="user"
                               value={inputValue.user}
                               onBlur={handleBlur}
                               onChange={handleChange}/>
                        {touched.user && error.user && (
                        <p className={errorStyle}>{error.user}</p>
                        )}                               
                        <br />

                        <label className={getLabelStyle("password")}>Password</label> <br />
                        <input type="password"
                               className={getInputFieldStyle("password")}
                               name="password"
                               onBlur={handleBlur}
                               value={inputValue.password}
                               onChange={handleChange}/>
                        {touched.password && error.password && (
                        <p className={errorStyle}>{error.password}</p>
                        )}                                 
                               <br />
                    </div>
                    {/* recaptcha */}
                    <div className="border-1 border-gray-400 rounded-lg p-2">
                        <div className="flex items-center">
                            <input type="checkbox"
                                   className="ml-[-12px] h-8 w-18 accent-green-600 border-gray-300 rounded transition:all duration-700 ease-in"
                                   name="checked"
                                   checked={inputValue.checked}
                                   onChange={handleChange}/>
                            <p className="text-[14px]! text-gray-700 ml-[-12px]">I'm not a robot</p>

                            <div className="ml-auto text-gray-400">
                                <img src={recatcha}
                                     className="w-6 ml-5"/>
                                <p className="text-[12px]!">reCAPTCHA</p>
                                <p className="text-[12px]!">Privacy - Terms</p>
                            </div>                           
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <button className={`${submitButtonStyle} text-white ${disabledButton ? 
                                            "disabled:cursor-not-allowed disabled:bg-gray-300" :
                                             "cursor-pointer bg-razzmatazz" }
                                            `}
                                disabled={disabledButton}>
                                    Log In
                        </button>
                        <button className={`${submitButtonStyle} border-1 border-razzmatazz text-razzmatazz hover:bg-razzmatazz hover:text-white translate-all duration-300 ease-out`}>
                            Sign Up
                        </button>
                    </div>

                </form>

                <div className="mt-6 flex flex-col items-center gap-3">
                    <p className={userProfileText}>Forgot my User ID or Password</p>
                    <p className={userProfileText}>Unblock my Profile</p>
                </div>

                {/* icons */}
                <div className="w-[300px] flex justify-between mt-12 p-4 rounded-lg bg-gray-100">
                    <div className="w-[33%]">
                        <img src={pinLocation}
                             className={iconStyle}/>
                        <p className={iconTextStyle}>ATM & Branches</p>
                    </div>
                    <div className="ml-[-22px]">
                        <img src={FAQ}
                             className={iconStyle}/>
                        <p className={iconTextStyle}>FAQ</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={contact}
                             className={iconStyle}/>
                        <p className={iconTextStyle}>Contact Us</p>
                    </div>
                </div>

                <div className="w-[300px] flex flex-col gap-4 text-center mt-12">
                    <p className={descriptionTextStyle}>Swift Digital Bank is regulated by the Bangko Sentral ng Pilipinas. For inquiries and comments, please contact our</p>
                    <p className={`${descriptionTextStyle} text-razzmatazz mt-[-14px] hover:cursor-pointer`}>24-Hour Customer Line.</p>
                    <p className={descriptionTextStyle}>A proud member of Bancnet and PDIC</p>
                    <p className={descriptionTextStyle}>Deposits are insured by PDIC up to P1 Million per depositor.</p>

                    <div className="w-[300px] flex justify-around">
                        <img className="w-[70px] h-[70px] mt-4" src={bancnet}/>
                        <img className="w-[80px] h-[140px]" src={dpodps}/>
                        <img className="w-[100px] h-[106px]" src={pdic}/>
                    </div>
                </div>

                
            </section>            
        </div>
    )
}
