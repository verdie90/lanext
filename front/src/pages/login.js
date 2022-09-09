import AuthSessionStatus from '@/components/AuthSessionStatus'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

const Login = () => {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.query.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.query.reset))
        } else {
            setStatus(null)
        }
    })

    const submitForm = async event => {
        event.preventDefault()

        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        })
    }

    return (
        <GuestLayout>
            <div>
                <Head>
                    <title>LOGIN AREA</title>
                    <link
                        rel="stylesheet"
                        href="assets/css/bootstrap.min.css"
                    />
                    <link
                        rel="stylesheet"
                        href="assets/css/fontawesome.min.css"
                    />
                    <link rel="stylesheet" href="assets/css/envyicon.min.css" />
                    <link rel="stylesheet" href="assets/css/animate.min.css" />
                    <link
                        rel="stylesheet"
                        href="assets/css/magnific-popup.min.css"
                    />
                    <link
                        rel="stylesheet"
                        href="assets/css/owl.carousel.min.css"
                    />
                    <link rel="stylesheet" href="assets/css/meanmenu.min.css" />
                    <link rel="stylesheet" href="assets/css/style.css" />
                    <link rel="stylesheet" href="assets/css/responsive.css" />
                    <link
                        rel="icon"
                        href="assets/img/logos/favicon.png"
                        type="image/png"
                        sizes="16x16"
                    />
                </Head>
                {/* <div className="preloader-main">
                    <div className="loader">
                        <div className="loader-dot" />
                        <div className="loader-dot" />
                        <div className="loader-dot" />
                    </div>
                </div> */}
            </div>

            <section className="signinup-section ptb-100 bg-thin">
                <div className="container">
                    <div className="signin-box">
                        <AuthSessionStatus className="mb-4" status={status} />
                        {/* Title Box */}
                        <div className="title-box">
                            <Link href="/">
                                <h2>Log In Area</h2>
                            </Link>
                            <div className="text">
                                Silahkan masuk ke akun yang sudah anda daftarkan
                            </div>
                        </div>
                        {/* signin Form */}
                        <form className="signin-form" onSubmit={submitForm}>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <Input
                                            id="email"
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            onChange={event =>
                                                setEmail(event.target.value)
                                            }
                                            placeholder="email"
                                            value={email}
                                            autofocus
                                            required
                                        />
                                        <InputError
                                            messages={errors.email}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <Input
                                            id="password"
                                            type="password"
                                            className="form-control"
                                            value={password}
                                            onChange={event =>
                                                setPassword(event.target.value)
                                            }
                                            placeholder="masukan password"
                                            required
                                            autocomplete={false}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 form-check-box">
                                    <div className="form-check">
                                        <Input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="checkme"
                                            onChange={event =>
                                                setShouldRemember(
                                                    event.target.checked,
                                                )
                                            }
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="checkme">
                                            Ingat Kredensial ini
                                        </label>
                                    </div>
                                    <p className="forgot-password">
                                        <Link href="/forgot-password">
                                            Lupa password?
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            <div className="cta-btn">
                                <button className="btn btn-solid">
                                    Log In
                                </button>
                            </div>
                            <div className="form-group col-lg-12">
                                <div className="social-link">
                                    <a
                                        href="#"
                                        className="bg-tertiary"
                                        target="_blank">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-success"
                                        target="_blank">
                                        <i className="fab fa-tumblr" />
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-info"
                                        target="_blank">
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                </div>
                            </div>
                            <div className="form-group col-lg-12">
                                <div className="users">
                                    Belum punya akun ?
                                    <Link href="/register"> Daftar disini</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* start copy right area */}
            <div className="copy-right-area">
                <div className="container">
                    <div className="copy-right-content">
                        <p>
                            Copyright @2021 Solit. Designed By
                            <a href="https://hibootstrap.com/" target="_blank">
                                HiBootstrap.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            {/* end copy right area*/}

            <script src="assets/js/jquery.min.js"></script>
            <script src="assets/js/bootstrap.min.js"></script>
            <script src="assets/js/popper.min.js"></script>
            <script src="assets/js/jquery.magnific-popup.min.js"></script>
            <script src="assets/js/owl.carousel.min.js"></script>
            <script src="assets/js/meanmenu.min.js"></script>
            <script src="assets/js/form-validator.min.js"></script>
            <script src="assets/js/contact-form-script.js"></script>
            <script src="assets/js/jquery.ajaxchimp.min.js"></script>
            <script src="assets/js/main.js"></script>
        </GuestLayout>
    )
}

export default Login
