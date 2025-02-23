import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import ImgLogo from "../../../assets/images/logo-white.svg";
import EyeOff from '../../../assets/images/eye_off.svg';
import EyeOn from '../../../assets/images/eye_on.svg';
import { useState } from "react";
import { Preloader } from "../../../components/Preloader/Preloader";
import { useTranslation } from "react-i18next";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();


  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      alert("Los campos son requeridos");
      setLoading(false);
      return;
    }

    try {
      //await dispatch(login({ email, password }));
      setLoading(false);
      navigate("/admin/dashboard");
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="container bg-primary">
      {loading && <Preloader />}
      <div className="block xl:grid grid-cols-2 gap-4">
        <div className="hidden xl:flex flex-col min-h-screen pl-24 animate__animated animate__bounceInLeft form-section">
          <div className="my-auto p-10">
            <img
              alt="GlobalFleet - Office"
              src={ImgLogo}
            />
            <div className="-intro-x font-light text-4xl leading-tight mt-10 text-white">
              The driver’s fellow
            </div>
            <div
              className="-intro-x font-light text-2xl leading-tight text-white"
            >
              ERP Edition
            </div>
          </div>
        </div>

        <div className="h-screen xl:h-auto flex xl:py-0 my-10 xl:my-0 bg-white ">
          <div className="my-auto mx-auto xl:ml-20 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto animate__animated animate__bounceInRight">
            <form onSubmit={onSubmit}>
              <h2 className="intro-x text-primary text-2xl xl:text-3xl text-center xl:text-left">
                {t("login_page.title")}
              </h2>
              <div className="intro-x mt-8">
                <input
                  type="email"
                  className="intro-x form-control py-3 px-4 block mb-3"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <div className="relative">
                  <input
                    className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center px-2">
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <img
                        className="w-6 h-6"
                        src={showPassword ?  EyeOff : EyeOn }
                        alt="Show/Hide password"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="intro-x flex text-slate-600 text-xs sm:text-sm mt-4">
                <div className="flex items-center mr-auto">
                  <input id="remember-me" type="checkbox" className="form-check-input border mr-2" />
                  <label className="cursor-pointer select-none" htmlFor="remember-me">
                    {t("login_page.remember")}
                  </label>
                </div>
                <a href="/reset">{t("login_page.forgot")}</a>
              </div>
              <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                <button type="submit" className="btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top">
                {t("login_page.btn_login")}
                </button>
              </div>
            </form>

            <div className="intro-x mt-10 xl:mt-24 text-slate-600 text-center xl:text-left">
            {t("login_page.terms_txt1")}
              <a className="text-primary" href="#"> {t("login_page.terms_txt2")}</a> {t("login_page.terms_txt3")}
              <a className="text-primary" href="#"> {t("login_page.terms_txt1")}</a>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
