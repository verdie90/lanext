import GuestLayout from '@/components/Layouts/GuestLayout'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Link from 'next/link'
import Head from 'next/head'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'

const Register = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        register({
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
        })
    }

    return (
        <GuestLayout>
            <div>
                <Head>
                    <title>Daftar Sekarang</title>

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

                <section className="signinup-section ptb-100 bg-thin">
                    <div className="container">
                        <div className="signin-box">
                            <div className="title-box">
                                <h2>Daftar</h2>
                                <div className="text">
                                    Daftarkan diri anda sekarang juga
                                </div>
                            </div>
                            <form onSubmit={submitForm}>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <Input
                                                id="name"
                                                type="text"
                                                value={name}
                                                className="form-control"
                                                placeholder="Masukan Nama Anda"
                                                onChange={event =>
                                                    setName(event.target.value)
                                                }
                                                required
                                                autofocus
                                            />
                                            <InputError
                                                messages={errors.name}
                                                className="mt-2"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <Input
                                                id="email"
                                                type="email"
                                                className="form-control"
                                                value={email}
                                                onChange={event =>
                                                    setEmail(event.target.value)
                                                }
                                                placeholder="Email"
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
                                                placeholder="Password Baru"
                                                onChange={event =>
                                                    setPassword(
                                                        event.target.value,
                                                    )
                                                }
                                                required
                                                autoComplete="new-password"
                                            />
                                            <InputError
                                                messages={errors.password}
                                                className="mt-2"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <Input
                                                id="passwordConfirmation"
                                                type="password"
                                                className="form-control"
                                                value={passwordConfirmation}
                                                onChange={event =>
                                                    setPasswordConfirmation(
                                                        event.target.value,
                                                    )
                                                }
                                                placeholder="Konfirmasi Password"
                                                required
                                            />

                                            <InputError
                                                messages={
                                                    errors.password_confirmation
                                                }
                                                className="mt-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="cta-btn">
                                    <button className="btn btn-solid">
                                        Daftar
                                    </button>
                                </div>
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
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
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                    <div className="users">
                                        Sudah punya akun?
                                        <Link href="/login">Log In disini</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <div className="copy-right-area">
                    <div className="container">
                        <div className="copy-right-content">
                            <p>
                                Copyright @2021 Solit. Designed By
                                <a
                                    href="https://hibootstrap.com/"
                                    target="_blank">
                                    HiBootstrap.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

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

export default Register
