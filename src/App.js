import './App.css';

function App() {
  return (
    <div className="form-container">
      <h2>Student Information Form</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label htmlFor="mssv">MSSV:</label>
          <input type="text" id="mssv" placeholder="Enter your MSSV" />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="text" id="phone" placeholder="Enter your phone number" />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
