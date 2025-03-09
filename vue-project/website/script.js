<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #ffffff;
        }
        header {
            background-color: #001f3f;
            color: #ffffff;
            padding: 15px 20px;
            display: flex;
            align-items: center;
        }
        header h1 {
            margin: 0;
            font-size: 1.5em;
            font-family: 'Comic Sans MS', cursive, sans-serif;
            flex: 1;
        }
        header .location {
            font-size: 1em;
            font-family: 'Comic Sans MS', cursive, sans-serif;
        }
        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
        }
        h2 {
            font-size: 1.8em;
            margin-bottom: 15px;
            text-align: center;
        }
        .section {
            margin-bottom: 30px;
        }
        .card-container {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
        }
        .card {
            flex: 1;
            min-width: 200px;
            padding: 20px;
            background-color: #ffffff;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
            text-align: center;
        }
        .card img {
            width: 100%;
            height: auto;
            border-radius: 8px;
            margin-bottom: 10px;
        }
        footer {
            text-align: center;
            padding: 20px;
            background-color: #001f3f;
            color: #ffffff;
        }
        footer a {
            color: #61dafb;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <header>
        <h1>Worldwide</h1>
        <div class="location">Personal Profile Website</div>
    </header>
    <div class="container">
        <!-- Header -->
        <header>
            <h2 style="text-align: center;">Rainier Edward Lopez</h2>
        </header>

        <!-- About Section -->
        <section>
            <h3>About Me</h3>
            <div class="card">
                <p>I am Rainier Lopez, also known as Nyeng. As an active individual with a passion for Flag Football, I bring the same dedication and team spirit to my IT studies. Currently pursuing a Bachelor's degree in Information Technology with a focus on Mobile and Internet Technologies at Asia Pacific College.</p>
            </div>
        </section>

        <!-- Education Section -->
        <section>
            <h3>Education</h3>
            <div class="card">
                <h4>College</h4>
                <p>Asia Pacific College</p>
                <p>BS Information Technology - Mobile and Internet Technologies</p>
            </div>

            <div class="card">
                <h4>Senior High School</h4>
                <p>Asia Pacific College</p>
            </div>

            <div class="card">
                <h4>Junior High School</h4>
                <p>Pasay City West High School</p>
            </div>
        </section>

        <!-- IT Experience Section -->
        <div class="section">
            <h3>IT Experience</h3>
            <div class="card-container">
                <div class="card">
                    <h4>Java</h4>
                    <p>Basic</p>
                </div>
                <div class="card">
                    <h4>Python</h4>
                    <p>Basic</p>
                </div>
                <div class="card">
                    <h4>Figma</h4>
                    <p>Basic</p>
                </div>
                <div class="card">
                    <h4>Android Studio</h4>
                    <p>Basic</p>
                </div>
            </div>
        </div>

        <!-- Hobbies & Interests Section -->
        <div class="section">
            <h3>Hobbies & Interests</h3>
            <div class="card-container">
                <div class="card">
                    <img src="hobby_flag_football.jpg" alt="Flag Football">
                    <h4>Flag Football</h4>
                </div>
                <div class="card">
                    <img src="hobby_cycling.jpg" alt="Cycling">
                    <h4>Cycling</h4>
                </div>
                <div class="card">
                    <img src="hobby_video_games.jpg" alt="Video Games">
                    <h4>Video Games</h4>
                </div>
                <div class="card">
                    <img src="hobby_adventures.jpg" alt="Adventures">
                    <h4>Adventures</h4>
                </div>
            </div>
        </div>

        <!-- Goals Section -->
        <div class="section">
            <h3>Goals in Life</h3>
            <div class="card">
                <h4>Financial Freedom</h4>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer>
        <p>Location: Pasay, 1630</p>
        <p><a href="https://www.instagram.com/rainieredward_/" target="_blank">Instagram</a></p>
    </footer>
</body>
</html>
