import React from 'react';

function Profile() {
  // Inline styles
  const styles = {
    profileContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f4f4f9',
    },
    profileCard: {
      backgroundColor: 'white',
      borderRadius: '10px',
      padding: '40px',
      width: '300px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    profileAvatar: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      marginBottom: '20px',
    },
    profileName: {
      fontSize: '24px',
      color: '#333',
      marginBottom: '10px',
    },
    profileRole: {
      fontSize: '18px',
      color: '#555',
      marginBottom: '20px',
    },
    profileInfo: {
      fontSize: '14px',
      color: '#777',
      margin: '5px 0',
    },
    icon: {
      marginRight: '8px',
    },
  };

  return (
    <div style={styles.profileContainer}>
      <div style={styles.profileCard}>
        <div>
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            style={styles.profileAvatar}
          />
        </div>
        <h1 style={styles.profileName}>John Doe</h1>
        <h2 style={styles.profileRole}>Customer</h2>
        <p style={styles.profileInfo}>
          <span style={styles.icon}>📧</span>johndoe@example.com
        </p>
        <p style={styles.profileInfo}>
          <span style={styles.icon}>📞</span>+1234567890
        </p>
        <p style={styles.profileInfo}>
          <span style={styles.icon}>🏠</span>123 Food Street, City, Country
        </p>
      </div>
    </div>
  );
}

export default Profile;
