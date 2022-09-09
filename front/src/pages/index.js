import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useAuth } from '@/hooks/auth'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <div>
                <Head>
                    <title>Landing Page Belajar</title>
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
                <header className="navbar-area nav-style-two">
                    <div className="mobile-nav">
                        <a href="#" className="logo">
                            <img
                                src="assets/img/logos/logo_full_light.png"
                                alt="true"
                            />
                            <img
                                src="assets/img/logos/logo_dark.png"
                                alt="true"
                            />
                        </a>
                    </div>
                    <div className="main-nav">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <div className="container">
                                <a className="navbar-brand" href="index-2.html">
                                    <img
                                        src="assets/img/logos/logo_full_light.png"
                                        alt="true"
                                    />
                                    <img
                                        src="assets/img/logos/logo_dark.png"
                                        alt="true"
                                    />
                                </a>
                                <div
                                    className="collapse navbar-collapse mean-menu"
                                    id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item">
                                            <Link
                                                href="#"
                                                className="nav-link active">
                                                Home
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="cta-btn">
                                        {user ? (
                                            <Link href="/dashboard">
                                                <a className="btn btn-outline">
                                                    <i className="envy envy-user" />
                                                    Dashboard
                                                </a>
                                            </Link>
                                        ) : (
                                            <>
                                                <Link href="/login">
                                                    <a className="btn btn-outline">
                                                        <i className="envy envy-user" />
                                                        Login
                                                    </a>
                                                </Link>
                                                {/* <Link
                                                    href="/register"
                                                    className="btn btn-outline">
                                                    <i className="envy envy-user" />
                                                    Register
                                                </Link> */}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>

                <div id="home" className="home-banner-area banner-type-two">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="banner-content">
                                    <h1>
                                        Best Digital Marketing Service For You
                                    </h1>
                                    <p>
                                        No more Search. World's No. 1 IT
                                        Solution Center for your better
                                        security. Loo car boot bodge smashing I
                                        up the duff!
                                    </p>
                                    <div className="cta-btn">
                                        <Link href="/register">
                                            <a className="btn btn-solid">
                                                Try for free
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="banner-image">
                                    <img
                                        src="assets/img/banner/banner_2.png"
                                        alt="true"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="top-feature-section ptb-100 bg-white">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-12">
                                <div className="section-title">
                                    <span className="subtitle">
                                        top features
                                    </span>
                                    <h2>
                                        What We Provide For Your Successful
                                        Business
                                    </h2>
                                </div>
                                <div className="feature-text-blc">
                                    <p>
                                        If youre searching for talented tech
                                        minds who are dedicated to their work,
                                        we are a perfect fit. We are a dynamic
                                        software development company based in
                                        the USA. Solit workers have been working
                                        on various large-scale complex projects.
                                        Solit has over 30 years of experience,
                                        always meeting clients.
                                    </p>
                                </div>
                                <div className="cta-btn">
                                    <Link href="about.html">
                                        <a className="btn btn-solid">
                                            Read more
                                            <i className="envy envy-right-arrow" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="single-feature">
                                            <div className="single-feature-content">
                                                <i className="envy envy-cloud-computing1" />
                                                <h3 className="mt-3">
                                                    market research
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="single-feature">
                                            <div className="single-feature-content">
                                                <i className="envy envy-code2" />
                                                <h3 className="mt-3">
                                                    IT Computing
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="single-feature">
                                            <div className="single-feature-content">
                                                <i className="envy envy-global" />
                                                <h3 className="mt-3">
                                                    SEO Optimization
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="single-feature">
                                            <div className="single-feature-content">
                                                <i className="envy envy-server" />
                                                <h3 className="mt-3">
                                                    Data Analitics
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shape">
                        <img
                            src="assets/img/resource/circle_shape.png"
                            alt="circle"
                        />
                        <span className="dot-1" />
                        <span className="dot-2" />
                        <span className="dot-3" />
                        <span className="dot-4" />
                        <span className="dot-5" />
                    </div>
                </section>
                <section
                    id="about"
                    className="about-section about-two pt-100 pb-70 bg-white">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-12 pb-30">
                                <div className="about-img">
                                    <div className="grid-img">
                                        <div className="grid-img-inner">
                                            <img
                                                src="assets/img/about/about_1.png"
                                                className="image-responsive"
                                                alt="office_image"
                                            />
                                        </div>
                                        <div className="grid-img-inner">
                                            <img
                                                src="assets/img/about/about_2.png"
                                                className="image-responsive"
                                                alt="office_image"
                                            />
                                        </div>
                                        <div className="grid-img-inner">
                                            <img
                                                src="assets/img/about/about_3.png"
                                                className="image-responsive"
                                                alt="office_image"
                                            />
                                        </div>
                                        <div className="grid-img-inner">
                                            <img
                                                src="assets/img/about/about_4.png"
                                                className="image-responsive"
                                                alt="office_image"
                                            />
                                        </div>
                                    </div>
                                    <div className="logo-overlay">
                                        <img
                                            src="assets/img/logos/logo.png"
                                            alt="logo_without_slogan"
                                        />
                                    </div>
                                    <div className="shape">
                                        <img
                                            src="assets/img/resource/shape_2.png"
                                            alt="shape"
                                            className="shape-inner"
                                        />
                                        <img
                                            src="assets/img/resource/shape_4.png"
                                            alt="shape"
                                            className="shape-inner"
                                        />
                                        <img
                                            src="assets/img/resource/shape_2.png"
                                            alt="shape"
                                            className="shape-inner"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 pb-30">
                                <div className="section-title">
                                    <span className="subtitle">about us</span>
                                    <h2>
                                        Manages IT service across various
                                        business
                                    </h2>
                                </div>
                                <div className="about-text-blc">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        {'{'}' '{'}'}
                                    </p>
                                    <p>
                                        Risus commodo viverra maecenas accumsan
                                        lacus vel facilisis.!
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="about-feature-blc">
                                            <i className="envy envy-quality blue" />
                                            <div className="about-feature-content">
                                                <h6>The Certified Studio</h6>
                                                <p>
                                                    It is a long established
                                                    fact that a reader will be
                                                    distracted by the readable
                                                    content of a page when
                                                    looking at its layout. The
                                                    point of using Lorem Ipsum
                                                    is that it has
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="about-feature-blc">
                                            <i className="envy envy-quality red" />
                                            <div className="about-feature-content">
                                                <h6>Award Ceremony</h6>
                                                <p>
                                                    It is a long established
                                                    fact that a reader will be
                                                    distracted by the readable
                                                    content of a page when
                                                    looking at its layout. The
                                                    point of using Lorem Ipsum
                                                    is that it has
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cta-btn">
                                    <a
                                        href="about.html"
                                        className="btn btn-solid">
                                        Read more
                                        <i className="envy envy-right-arrow" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="video-section ptb-100 bg-white">
                    <div className="container">
                        <div className="section-title title-light">
                            <span className="subtitle">Intro video</span>
                            <h2>See How We Work In Team</h2>
                            <p>
                                Does any industry face a more complex audience
                                journey and marketing sales process than B2B
                                technology .Does any industry face a more
                                complex audience.
                            </p>
                        </div>
                        <div className="video-content">
                            <div className="video-box">
                                <figure className="video-image">
                                    <img
                                        src="assets/img/background/intro_video.png"
                                        alt="video"
                                    />
                                </figure>
                                <a
                                    href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                    className="youtube-popup video-btn">
                                    <i className="fas fa-play" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="service-section bg-white">
                    <div className="container">
                        <div className="section-title">
                            <span className="subtitle">our services</span>
                            <h2>Lets Check Our Services</h2>
                            <p>
                                Does any industry face a more complex audience
                                journey and marketing sales process than B2B
                                technology .Does any industry face a more
                                complex audience.
                            </p>
                        </div>
                        <div className="row pt-70">
                            <div className="col-lg-4 col-md-6 col-sm-12 pb-70">
                                <div className="item-single">
                                    <div className="icon">
                                        <i className="envy envy-magnify-glass2" />
                                        <div className="icon-bg">
                                            <img
                                                src="assets/img/resource/icon_shape_1.png"
                                                alt="icon_shape"
                                            />
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <h6>
                                            <a href="services.html">
                                                market research
                                            </a>
                                        </h6>
                                        <p>
                                            Strategy experience and analytical
                                            expertise combine to enable. Strate
                                            great experience.
                                        </p>
                                        <a
                                            href="services.html"
                                            target="_self"
                                            className="btn btn-text-only">
                                            read more{'{'}' '{'}'}
                                            <i className="envy envy-right-arrow" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 pb-70">
                                <div className="item-single">
                                    <div className="icon">
                                        <i className="envy envy-code" />
                                        <div className="icon-bg">
                                            <img
                                                src="assets/img/resource/icon_shape_2.png"
                                                alt="icon_shape"
                                            />
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <h6>
                                            <a href="services.html">
                                                digital Marketing
                                            </a>
                                        </h6>
                                        <p>
                                            Strategy experience and analytical
                                            expertise combine to enable. Strate
                                            great experience.
                                        </p>
                                        <a
                                            href="services.html"
                                            target="_self"
                                            className="btn btn-text-only">
                                            read more{'{'}' '{'}'}
                                            <i className="envy envy-right-arrow" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 pb-70">
                                <div className="item-single">
                                    <div className="icon">
                                        <i className="envy envy-mic" />
                                        <div className="icon-bg">
                                            <img
                                                src="assets/img/resource/icon_shape_3.png"
                                                alt="icon_shape"
                                            />
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <h6>
                                            <a href="services.html">
                                                Social Media
                                            </a>
                                        </h6>
                                        <p>
                                            Strategy experience and analytical
                                            expertise combine to enable. Strate
                                            great experience.
                                        </p>
                                        <a
                                            href="services.html"
                                            target="_self"
                                            className="btn btn-text-only">
                                            read more{'{'}' '{'}'}
                                            <i className="envy envy-right-arrow" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 pb-70">
                                <div className="item-single">
                                    <div className="icon">
                                        <i className="envy envy-call-center" />
                                        <div className="icon-bg">
                                            <img
                                                src="assets/img/resource/icon_shape_4.png"
                                                alt="icon_shape"
                                            />
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <h6>
                                            <a href="services.html">
                                                IT consalting
                                            </a>
                                        </h6>
                                        <p>
                                            Strategy experience and analytical
                                            expertise combine to enable. Strate
                                            great experience.
                                        </p>
                                        <a
                                            href="services.html"
                                            target="_self"
                                            className="btn btn-text-only">
                                            read more{'{'}' '{'}'}
                                            <i className="envy envy-right-arrow" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 pb-70">
                                <div className="item-single">
                                    <div className="icon">
                                        <i className="envy envy-server2" />
                                        <div className="icon-bg">
                                            <img
                                                src="assets/img/resource/icon_shape_5.png"
                                                alt="icon_shape"
                                            />
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <h6>
                                            <a href="#">SEO &amp; Backlinks</a>
                                        </h6>
                                        <p>
                                            Strategy experience and analytical
                                            expertise combine to enable. Strate
                                            great experience.
                                        </p>
                                        <a
                                            href="services.html"
                                            target="_self"
                                            className="btn btn-text-only">
                                            read more{'{'}' '{'}'}
                                            <i className="envy envy-right-arrow" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 pb-70">
                                <div className="item-single">
                                    <div className="icon">
                                        <i className="envy envy-server" />
                                        <div className="icon-bg">
                                            <img
                                                src="assets/img/resource/icon_shape_6.png"
                                                alt="icon_shape"
                                            />
                                        </div>
                                    </div>
                                    <div className="item-content">
                                        <h6>
                                            <a href="services.html">
                                                Hosting &amp; Email
                                            </a>
                                        </h6>
                                        <p>
                                            Strategy experience and analytical
                                            expertise combine to enable. Strate
                                            great experience.
                                        </p>
                                        <a
                                            href="services.html"
                                            target="_self"
                                            className="btn btn-text-only">
                                            read more{'{'}' '{'}'}
                                            <i className="envy envy-right-arrow" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="pricing" className="pricing-section ptb-100">
                    <div className="container">
                        <div className="section-title title-light pb-100">
                            <span className="subtitle">pricing packages</span>
                            <h2>Choose Your Best Packages</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Itaque, numquam.
                            </p>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="pricing-item-single">
                                    <div className="pricing-item-content">
                                        <div className="content-text">
                                            <span className="label">basic</span>
                                            <h2 className="price">
                                                <span>$</span>11.99
                                            </h2>
                                            <p>monthly</p>
                                        </div>
                                        <div className="content-bg">
                                            <img
                                                src="assets/img/resource/icon_shape_7.png"
                                                alt
                                            />
                                        </div>
                                    </div>
                                    <div className="pricing-item-list">
                                        <ul>
                                            <li>
                                                <i className="envy envy-paper-plane" />
                                                25 Analytics Camping
                                            </li>
                                            <li>
                                                <i className="envy envy-paper-plane" />
                                                1,300 Keywords
                                            </li>
                                            <li>
                                                <i className="envy envy-paper-plane" />
                                                25 Social Media Reviews
                                            </li>
                                            <li>
                                                <i
                                                    className="envy envy-paper-plane"
                                                    style={{ color: '#6a6377' }}
                                                />
                                                1 Free Optimization
                                            </li>
                                            <li>
                                                <i
                                                    className="envy envy-paper-plane"
                                                    style={{ color: '#6a6377' }}
                                                />
                                                24/7 Support
                                            </li>
                                        </ul>
                                        <a
                                            href="pricing.html"
                                            className="btn btn-solid">
                                            choose plan{'{'}' '{'}'}
                                            <i className="envy envy-right-arrow" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="pricing-item-single">
                                    <div className="pricing-item-content">
                                        <div className="content-text">
                                            <span className="label">
                                                premium
                                            </span>
                                            <h2 className="price">
                                                <span>$</span>31.99
                                            </h2>
                                            <p>monthly</p>
                                        </div>
                                        <div className="content-bg">
                                            <img
                                                src="assets/img/resource/icon_shape_8.png"
                                                alt
                                            />
                                        </div>
                                    </div>
                                    <div className="pricing-item-list">
                                        <ul>
                                            <li>
                                                <i className="envy envy-paper-plane" />
                                                25 Analytics Camping
                                            </li>
                                            <li>
                                                <i className="envy envy-paper-plane" />
                                                1,300 Keywords
                                            </li>
                                            <li>
                                                <i className="envy envy-paper-plane" />
                                                25 Social Media Reviews
                                            </li>
                                            <li>
                                                <i className="envy envy-paper-plane" />
                                                1 Free Optimization
                                            </li>
                                            <li>
                                                <i
                                                    className="envy envy-paper-plane"
                                                    style={{ color: '#6a6377' }}
                                                />
                                                24/7 Support
                                            </li>
                                        </ul>
                                        <a
                                            href="pricing.html"
                                            className="btn btn-solid">
                                            choose plan{'{'}' '{'}'}
                                            <i className="envy envy-right-arrow" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="pricing-item-single">
                                    <div className="pricing-item-content">
                                        <div className="content-text">
                                            <span className="label">ultra</span>
                                            <h2 className="price">
                                                <span>$</span>51.99
                                            </h2>
                                            <p>monthly</p>
                                        </div>
                                        <div className="content-bg">
                                            <img
                                                src="assets/img/resource/icon_shape_7.png"
                                                alt
                                            />
                                        </div>
                                    </div>
                                    <div className="pricing-item-list">
                                        <ul>
                                            <li>
                                                <i className="envy envy-paper-plane" />
                                                25 Analytics Camping
                                            </li>
                                            <li>
                                                <i className="envy envy-paper-plane" />
                                                1,300 Keywords
                                            </li>
                                            <li>
                                                <i className="envy envy-paper-plane" />
                                                25 Social Media Reviews
                                            </li>
                                            <li>
                                                <i className="envy envy-paper-plane" />
                                                1 Free Optimization
                                            </li>
                                            <li>
                                                <i className="envy envy-paper-plane" />
                                                24/7 Support
                                            </li>
                                        </ul>
                                        <a
                                            href="pricing.html"
                                            className="btn btn-solid">
                                            choose plan{'{'}' '{'}'}
                                            <i className="envy envy-right-arrow" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="newsletter-section ptb-100">
                    <div className="container">
                        <div className="section-title title-light">
                            <span className="subtitle">get action</span>
                            <h2>Get A Quote Right Now</h2>
                            <p>
                                Does any industry face a more complex audience
                                journey and marketing sales process than B2B
                                technology. Does any industry face a more
                                complex audience.
                            </p>
                        </div>
                        <form
                            className="newsletter-form"
                            data-bs-toggle="validator">
                            <div className="input-group">
                                <input
                                    className="form-control"
                                    placeholder="E-mail address"
                                    type="text"
                                    name="EMAIL"
                                    required
                                    autoComplete="off"
                                />
                                <div className="cta-btn">
                                    <button
                                        className="btn btn-solid"
                                        type="submit">
                                        Subscribe
                                        <i className="envy envy-right-arrow" />
                                    </button>
                                </div>
                            </div>
                            <div
                                id="validator-newsletter"
                                className="form-result"
                            />
                        </form>
                    </div>
                </section>
                <footer className="footer-area pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-5 col-sm-6 col-12">
                                <div className="footer-widget">
                                    <div className="navbar-brand">
                                        <a href="index.html">
                                            <img
                                                src="assets/img/logos/logo_dark.png"
                                                alt="image"
                                            />
                                        </a>
                                    </div>
                                    <p>
                                        Grursus mal suada faci Lorem to the
                                        ipsum dolarorit more ame tion more
                                        consectetu.
                                    </p>
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
                                            className="bg-danger"
                                            target="_blank">
                                            <i className="fab fa-youtube" />
                                        </a>
                                        <a
                                            href="#"
                                            className="bg-info"
                                            target="_blank">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                        <a
                                            href="#"
                                            className="bg-pink"
                                            target="_blank">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-5 col-sm-6 col-12">
                                <div className="footer-widget">
                                    <h5>Our Services</h5>
                                    <ul className="footer-quick-links">
                                        <li>
                                            <a href="service-details.html">
                                                Interface Design
                                            </a>
                                        </li>
                                        <li>
                                            <a href="service-details.html">
                                                SEO Optimizer
                                            </a>
                                        </li>
                                        <li>
                                            <a href="service-details.html">
                                                Digital Marketing
                                            </a>
                                        </li>
                                        <li>
                                            <a href="service-details.html">
                                                Market Monitor
                                            </a>
                                        </li>
                                        <li>
                                            <a href="service-details.html">
                                                Graphic Design
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-5 col-sm-6 col-12">
                                <div className="footer-widget">
                                    <h5>Other Resources</h5>
                                    <ul className="footer-quick-links">
                                        <li>
                                            <a href="about.html">About Us</a>
                                        </li>
                                        <li>
                                            <a href="pricing.html">Pricing</a>
                                        </li>
                                        <li>
                                            <a href="privacy-policy.html">
                                                Privacy Policy
                                            </a>
                                        </li>
                                        <li>
                                            <a href="services.html">Services</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-5 col-sm-6 col-12">
                                <div className="footer-widget">
                                    <h5>Contact info</h5>
                                    <div className="contact-info">
                                        <i className="envy envy-pin" />
                                        <p>
                                            113 Solit, White House, New Jersey,
                                            USA
                                        </p>
                                    </div>
                                    <div className="contact-info">
                                        <i className="envy envy-call" />
                                        <p>
                                            <a href="tel:+001-548-159-2491">
                                                +001-548-159-2491
                                            </a>
                                        </p>
                                        <br />
                                        <p>
                                            <a href="tel:+001-548-159-2492">
                                                +001-548-159-2492
                                            </a>
                                        </p>
                                    </div>
                                    <div className="contact-info">
                                        <i className="envy envy-plane" />
                                        <p>
                                            <a href="mailTo:hello@solit.com">
                                                hello@solit.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="copy-right-area">
                    <div className="container">
                        <div className="copy-right-content">
                            <p>
                                Copyright @2022 Solit. Designed By
                                <a
                                    href="https://hibootstrap.com/"
                                    target="_blank">
                                    ferdian
                                </a>
                            </p>
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
            </div>
        </>
    )
}
