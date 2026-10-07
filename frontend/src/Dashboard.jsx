import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Header from './Header';
function Dashboard() {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const savedUser = localStorage.getItem('user');

        if (!token) {
            navigate('/login');
            return;
        }

        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        navigate('/login');
    };

    return (
      <>
      <Header />
        <div className="dashboard-page">
            <aside className="sidebar">

                <div className="profile-section">

                    <div className="profile-icon">
                        👤
                    </div>

                    {user && (
                        <>
                            <h3>
                                {user.first_name} {user.last_name}
                            </h3>

                            <p>{user.email}</p>
                        </>
                    )}

                </div>

                <nav className="sidebar-menu">

                    <button onClick={() => navigate('/dashboard')}>
                        🏠
                        <span>Home</span>
                    </button>

                    <button onClick={() => navigate('/profile')}>
                        👤
                        <span>Profile</span>
                    </button>

                    <button onClick={() => navigate('/projects')}>
                        📁
                        <span>Projects</span>
                    </button>

                </nav>

                <button
                    className="sidebar-logout"
                    onClick={handleLogout}
                >
                    🚪
                    <span>Logout</span>
                </button>

            </aside>
            <main className="dashboard-main">

                {/* TOP HEADER */}
                <div className="dashboard-top">

                    <div>
                        <h1>Dashboard</h1>

                        <p>
                            Welcome back, {user?.first_name || 'User'}!
                        </p>
                    </div>

                    <button
                        className="top-profile-btn"
                        onClick={() => navigate('/profile')}
                    >
                        👤 Profile
                    </button>

                </div>
                <div className="dashboard-cards">

                    {/* PROFILE */}
                    <div className="dashboard-card">

                        <div className="card-icon">
                            👤
                        </div>

                        <h2>Profile</h2>

                        <p>
                            View and manage your personal information.
                        </p>

                        <button
                            className="dashboard-btn"
                            onClick={() => navigate('/profile')}
                        >
                            View Profile
                        </button>

                    </div>


                    {/* PROJECT */}
                    <div className="dashboard-card">

                        <div className="card-icon">
                            📁
                        </div>

                        <h2>Projects</h2>

                        <p>
                            View and manage your projects and work.
                        </p>

                        <button
                            className="dashboard-btn"
                            onClick={() => navigate('/projects')}
                        >
                            View Projects
                        </button>

                    </div>


                    {/* LOGOUT */}
                    <div className="dashboard-card logout-card">

                        <div className="card-icon">
                            🚪
                        </div>

                        <h2>Logout</h2>

                        <p>
                            Sign out from your account securely.
                        </p>

                        <button
                            className="dashboard-btn logout-button"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>

                    </div>

                </div>
                {user && (
                    <div className="user-info-card">

                        <div className="user-info-header">
                            <h2>Account Information</h2>

                            <button
                                onClick={() => navigate('/profile')}
                            >
                                Edit Profile
                            </button>
                        </div>

                        <div className="user-info-grid">

                            <div>
                                <span>First Name</span>
                                <strong>{user.first_name}</strong>
                            </div>

                            <div>
                                <span>Last Name</span>
                                <strong>{user.last_name}</strong>
                            </div>

                            <div>
                                <span>Email</span>
                                <strong>{user.email}</strong>
                            </div>

                            <div>
                                <span>Phone</span>
                                <strong>{user.phone_nbr}</strong>
                            </div>

                        </div>

                    </div>
                )}

            </main>

        </div>
        </>
    );
}

export default Dashboard;