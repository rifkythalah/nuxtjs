<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div class="container-fluid">
        <a class="navbar-brand text-primary" href="#">My Profile</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" :class="{ active: isActive === 'about' }" href="#about" @click="setActive('about')">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ active: isActive === 'portfolio' }" href="#portfolio" @click="setActive('portfolio')">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ active: isActive === 'contact' }" href="#contact" @click="setActive('contact')">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Profile Section -->
    <div class="container mt-5 text-light" id="about">
      <div class="row">
        <div class="col-md-4">
          <img src="/kiki.jpg" alt="Profile Image" class="img-fluid rounded-circle mb-4 profile-img shadow">
        </div>
        <div class="col-md-8">
          <h1 class="display-4 text-primary">Rifqi Athallah Genta Ramadhan</h1>
          <p class="lead">Web Developer | Desaign | Network Engineering</p>
          <p>
            Hello, I am a third semester student of the D3 Information Technology study program at Brawijaya University. I am currently studying web programming and UIUX design in college. I also have skills in compiling event concepts, teamwork skills, and communication skills in organizational activities.
          </p>
          <a href="#" class="btn btn-outline-primary btn-lg mt-3">Downlod Cv</a>
        </div>
      </div>
    </div> 

    <!-- Education Section -->
    <div class="container mt-5 text-light" id="education">
      <h2 class="text-center text-primary mb-4">Education</h2>
      <div class="row">
        <div class="col-md-6">
          <div class="card bg-dark text-light mb-4 shadow">
            <div class="card-body">
              <h5 class="card-title text-primary">Brawijaya University</h5>
              <p class="card-text">D3 Information Technology (2023 - Present)</p>
              <p class="card-text">Focusing on Web Development, UI/UX Design, and Networking.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card bg-dark text-light mb-4 shadow">
            <div class="card-body">
              <h5 class="card-title text-primary">High School</h5>
              <p class="card-text">SMK 1 Perguruan Cikini Jakarta (2020 - 2023)</p>
              <p class="card-text">computer network Engineering.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Experience Section -->
    <div class="container mt-5 text-light" id="experience">
      <h2 class="text-center text-primary mb-4">Experience</h2>
      <div class="row">
        <div class="col-md-6">
          <div class="card bg-dark text-light mb-4 shadow">
            <div class="card-body">
              <h5 class="card-title text-primary">Field practice</h5>
              <p class="card-text">Feb 2021 - Maret</p>
            <li><i class="fas fa-check-circle text-primary me-2"></i>Creating a wifi network in the office.</li>
            <li><i class="fas fa-check-circle text-primary me-2"></i>Performing CCTV and computer repairs.</li>
            <li><i class="fas fa-check-circle text-primary me-2"></i>Helping to fix network troubleshooting.</li>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card bg-dark text-light mb-4 shadow">
            <div class="card-body">
              <h5 class="card-title text-primary">Internship at Fakultas Vokasi</h5>
              <p class="card-text">Sept 2024 - Sekarang</p>
              <li><i class="fas fa-check-circle text-primary me-2"></i>Tim Podcast</li>
              <li><i class="fas fa-check-circle text-primary me-2"></i>Copywriter</li>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Portfolio Section -->
    <div class="container mt-5" id="portfolio">
      <h2 class="text-center text-primary mb-4">My Portfolio</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="card bg-dark text-light mb-4 shadow">
            <img src="/project.png" class="card-img-top project-img" alt="Project 1">
            <div class="card-body">
              <h5 class="card-title text-primary">Project 1</h5>
              <p class="card-text">Description of the project.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card bg-dark text-light mb-4 shadow">
            <img src="/project.png" class="card-img-top project-img" alt="Project 2">
            <div class="card-body">
              <h5 class="card-title text-primary">Project 2</h5>
              <p class="card-text">Description of the project.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card bg-dark text-light mb-4 shadow">
            <img src="/project.png" class="card-img-top project-img" alt="Project 3">
            <div class="card-body">
              <h5 class="card-title text-primary">Project 3</h5>
              <p class="card-text">Description of the project.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <div class="container mt-5 mb-5" id="contact">
      <h2 class="text-center text-primary mb-4">Contact Me</h2>
      <form>
        <div class="mb-3">
          <label for="name" class="form-label text-light">Your Name</label>
          <input type="text" class="form-control bg-dark text-light" id="name" placeholder="Enter your name">
        </div>
        <div class="mb-3">
          <label for="email" class="form-label text-light">Email address</label>
          <input type="email" class="form-control bg-dark text-light" id="email" placeholder="Enter your email">
        </div>
        <div class="mb-3">
          <label for="message" class="form-label text-light">Message</label>
          <textarea class="form-control bg-dark text-light" id="message" rows="3" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" class="btn btn-outline-primary btn-lg">Send Message</button>
      </form>
    </div>

    <!-- Footer Section -->
    <footer class="bg-dark text-light py-4">
      <div class="container">
        <div class="row">
          <div class="col-md-4 text-start">
            <h5 class="text-primary">Alamat</h5>
            <p>Jl. Dieng Atas</p>
            <p>No. 36 RT. 005/RW. 06</p>
            <p>Kabupaten Malang</p>
            <p>Jawa Timur, Indonesia</p>
          </div>
          <div class="col-md-4 text-center">
            <h5 class="text-primary">Follow Me</h5>
            <ul class="list-unstyled d-flex justify-content-center">
              <li><a href="#" class="text-light mx-2"><i class="fab fa-linkedin"></i></a></li>
              <li><a href="#" class="text-light mx-2"><i class="fab fa-instagram"></i></a></li>
              <li><a href="#" class="text-light mx-2"><i class="fab fa-youtube"></i></a></li>
            </ul>
            <!-- <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script> -->
          </div>
          <div class="col-md-4">
            <h5 class="text-primary">Contact Details</h5>
            <p>Email: rifqiathallah29@gmail.com</p>
            <p>Phone: +62 121 1316 5523</p>
          </div>
        </div>
        <hr class="bg-primary">
        <p class="mt-3">&copy; 2024 Rifqi. All Rights Reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: 'about' // Default tab active state
    };
  },
  methods: {
    setActive(section) {
      this.isActive = section; // Update active state
    }
  }
};
</script>

<style>
/* Custom Styling */
body {
  background-color: #121212;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
}

.navbar-brand {
  font-weight: bold;
  font-size: 1.5rem;
}

.nav-link {
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #007bff;
}

.nav-link.active {
  color: #007bff;
  font-weight: bold;
}

.profile-img {
  max-width: 250px;
  width: 100%;
  height: auto;
  border: 3px solid #007bff;
}

.project-img {
  max-width: 100%;
  height: auto;
}

.card {
  border: none;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}

.btn-outline-primary {
  border-color: #007bff;
  color: #007bff;
}

.btn-outline-primary:hover {
  background-color: #007bff;
  color: #ffffff;
}

footer {
  background-color: #1a1a1a;
}

footer h5 {
  font-size: 1.25rem;
}

footer p {
  font-size: 0.9rem;
}

footer .list-unstyled {
  padding: 0;
  margin: 0;
  list-style: none;
}

footer a {
  color: #ffffff;
}

footer a:hover {
  color: #007bff;
}

footer hr {
  border-top: 1px solid #007bff;
}
</style>
