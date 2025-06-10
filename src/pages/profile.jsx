import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LinkedInLogoInitials from '../assets/LinkedIn_logo_initials.png';
import './Profile.css'; // Import the external CSS

const Profile = () => {
  const [postText, setPostText] = useState('');
  const navigate = useNavigate();

  const handlePostChange = (e) => setPostText(e.target.value);

  const handlePostSubmit = () => {
    alert(`Posting: ${postText}`);
    setPostText('');
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // clear login flag
    navigate('/'); // go to login page
  };

  return (
    <div className="profile-container">
      {/* Header */}
      <header className="profile-header">
        <div className="profile-logo-search">
          <img
            src={LinkedInLogoInitials}
            alt="LinkedIn Logo"
            className="profile-logo"
          />
          <input
            type="text"
            placeholder="Search"
            aria-label="Search"
            className="profile-search"
          />
        </div>
        <nav className="profile-nav">
          <a href="#">Home</a>
          <a href="#">My Network</a>
          <a href="#">Jobs</a>
          <a href="#">Messaging</a>
          <a href="#">Notifications</a>
          <button onClick={handleLogout}>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 1200 1200">
              <path
                fill="#ff0b0b"
                d="M513.94 0v693.97h172.12V0zM175.708 175.708C67.129 284.287 0 434.314 0 600c0 331.371 268.629 600 600 600s600-268.629 600-600c0-165.686-67.13-315.713-175.708-424.292l-120.85 120.85c77.66 77.658 125.684 184.952 125.684 303.442c0 236.981-192.146 429.126-429.126 429.126c-236.981 0-429.126-192.145-429.126-429.126c0-118.49 48.025-225.784 125.684-303.442z"
              ></path>
            </svg>
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="profile-main">
        {/* Left Sidebar */}
        <aside className="profile-sidebar">
          <div className="profile-user-card">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="User Avatar"
              className="profile-avatar"
            />
            <h2>Your Name</h2>
            <p>Aspiring Developer | Learner</p>
          </div>
        </aside>

        {/* Feed */}
        <section className="profile-feed">
          <div className="profile-post-box">
            <textarea
              placeholder="Start a post"
              className="profile-textarea"
              rows="3"
              value={postText}
              onChange={handlePostChange}
              aria-label="Start a post"
            />
            <div className="profile-post-button">
              <button
                onClick={handlePostSubmit}
                disabled={!postText.trim()}
              >
                Post
              </button>
            </div>
          </div>

          {/* Example Post */}
          <div className="profile-post">
            <h3>John Doe</h3>
            <p className="profile-job-title">Software Engineer at TechCorp</p>
            <p>
              Just deployed my portfolio website! Check it out here: johnsportfolio.com
            </p>
          </div>
        </section>

        {/* Right Sidebar */}
        <aside className="profile-news">
          <h3>LinkedIn News</h3>
          <ul>
            <li>🔹 Tech hiring rebounds in Q3</li>
            <li>🔹 Remote jobs still popular</li>
            <li>🔹 How to ace a virtual interview</li>
            <li>🔹 Startups get fresh funding</li>
          </ul>
        </aside>
      </main>
    </div>
  );
};

export default Profile;
