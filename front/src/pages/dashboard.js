import Header from './backoffice/Header'
import Navbar from './backoffice/Navbar'
import Sidebar from './backoffice/Sidebar'
import ContentHeader from './backoffice/ContentHeader'
import Content from './backoffice/Content'
import Footer from './backoffice/Footer'
import ScriptBody from './backoffice/ScriptBody'

const Dashboard = () => {
    return (
        <>
            <div>
                <Header />
                <div className="wrapper">
                    <Navbar />
                    <Sidebar />
                    {/* Content Wrapper. Contains page content */}
                    <div className="content-wrapper">
                        <ContentHeader />
                        <Content />
                    </div>
                    {/* /.content-wrapper */}
                    <Footer />
                    {/* Control Sidebar */}
                    <aside className="control-sidebar control-sidebar-dark">
                        {/* Control sidebar content goes here */}
                    </aside>
                    {/* /.control-sidebar */}
                </div>
                <ScriptBody />
            </div>
        </>
    )
}

export default Dashboard
