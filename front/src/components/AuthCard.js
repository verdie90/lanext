const AuthCard = ({ logo, children }) => (
    <div className="min-h-screen flex flex-col sm:justify-center items-center bg-gray-100">
        <div>{logo}</div>

        <div className="w-full sm:max-w-md mt-8 px-8 py-6 bg-white shadow-md overflow-hidden sm:rounded-lg">
            {children}
        </div>
    </div>
)

export default AuthCard
