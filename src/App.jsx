import './App.css';

function App() {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr67SVmDZKEmuxOPuEIECVxMIST10D0zqb0Q&s"
          alt="University of Batangas Logo"
          className="profile-image"
        />
        <h2 className="profile-name">Luis Gabriel Ariola</h2>
        <p className="profile-description">
           I am willing to learn from my mistakes to grow wiser everyday..
        </p>

        <div className="contact-info">
          <p><strong>Email:</strong> ariolaluisgabriel@gmail.com</p>
          <p><strong>Phone:</strong> +63 916 687 7310</p>
        </div>

        <button className="contact-button">Contact Me</button>
      </div>
    </div>
  );
}

export default App;
