import Link from "next/link"
export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>

        <section className="page-header">
            <div className="page-header__bg" style={{ backgroundImage: ' url(/assets/images/backgrounds/page-header-bg.jpg)' }} >
            </div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape3 float-bob-y"><img src="/assets/images/shapes/page-header-shape2.png" alt=""/></div>
            <div className="shape4 float-bob-y"><img src="/assets/images/shapes/page-header-shape3.png" alt=""/></div>
            <div className="shape5 float-bob-x"><img src="/assets/images/shapes/page-header-shape1.png" alt=""/></div>
            <div className="container">
                <div className="page-header__inner">
                    <h2 className="wow fadeInDown" data-wow-duration="1500ms">{breadcrumbTitle}</h2>
                    <ul className="thm-breadcrumb wow fadeInUp" data-wow-duration="1500ms">
                        <li><Link href="/">Home</Link></li>
                        <li><span className="icon-right"></span></li>
                        <li>{breadcrumbTitle}</li>
                    </ul>
                </div>
            </div>
        </section>
      

        </>
    )
}
