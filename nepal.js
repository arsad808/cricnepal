        document.addEventListener('DOMContentLoaded', function() {
            // Sample data for Nepali cricket players
            const players = [
               
                { 
                    name: "Sandeep Lamichhane", 
                    role: "Bowler", 
                    Born:"August 2, 2000 (age 23 years), Aruchour", 
                    ODIDebut:"1 August 2018 v Netherlands", 
                    battingStyle: "Right-handed", 
                    bowlingStyle: "Leg-break, Googly",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuh0hpVCznUjQ9DNz8lF4njyryEbMf0jU8DQ&s"  // Replace with actual image URL
                },
                { 
                    name: "Aasif Sheikh", 
                    role: "Opening-Batter", 
                    Born:"January 22, 2001 (age 23 years), Birgunj", 
                    ODIDebut:"7 September 2021 v PNG", 
                    battingStyle: "Right-handed", 
                    bowlingStyle: "None",
                    image: "https://www.cricnepal.com/wp-content/uploads/2023/06/Md-Aasif-Sheikh-Nepal-WCQ23-DP.webp"  // Replace with actual image URL
                },
                { 
                    name: "Aasif Sheikh", 
                    role: "Opening-Batter", 
                    Born:"January 22, 2001 (age 23 years), Birgunj", 
                    ODIDebut:"7 September 2021 v PNG", 
                    battingStyle: "Right-handed", 
                    bowlingStyle: "None",
                    image: ""  // Replace with actual image URL
                },
                { 
                    name: "Aasif Sheikh", 
                    role: "Opening-Batter", 
                    Born:"January 22, 2001 (age 23 years), Birgunj", 
                    ODIDebut:"7 September 2021 v PNG", 
                    battingStyle: "Right-handed", 
                    bowlingStyle: "None",
                    image: "https://www.cricnepal.com/wp-content/uploads/2022/07/Anil-Sah-nepalcricket-994c75c052d0e5f338e1ac209b9f9e16.webp"  // Replace with actual image URL
                },
                { 
                    name: "Aasif Sheikh", 
                    role: "Opening-Batter", 
                    Born:"January 22, 2001 (age 23 years), Birgunj", 
                    ODIDebut:"7 September 2021 v PNG", 
                    battingStyle: "Right-handed", 
                    bowlingStyle: "None",
                    image: "https://www.cricnepal.com/wp-content/uploads/2023/06/Rohit-Paudel-Nepal-WCQ23-DP.webp"  // Replace with actual image URL
                },
                { 
                    name: "Dipendra Singh Airee", 
                    role: "Opening-Batter", 
                    Born:"January 22, 2001 (age 23 years), Birgunj", 
                    ODIDebut:"7 September 2021 v PNG", 
                    battingStyle: "Right-handed", 
                    bowlingStyle: "None",
                    image: "https://www.cricnepal.com/wp-content/uploads/2023/06/Dipendra-Singh-Airee-Nepal-WCQ23-DP.webp"  // Replace with actual image URL
                },
                { 
                    name: "Aasif Sheikh", 
                    role: "Opening-Batter", 
                    Born:"January 22, 2001 (age 23 years), Birgunj", 
                    ODIDebut:"7 September 2021 v PNG", 
                    battingStyle: "Right-handed", 
                    bowlingStyle: "None",
                    image: "https://via.placeholder.com/100"  // Replace with actual image URL
                },
                { 
                    name: "Aasif Sheikh", 
                    role: "Opening-Batter", 
                    Born:"January 22, 2001 (age 23 years), Birgunj", 
                    ODIDebut:"7 September 2021 v PNG", 
                    battingStyle: "Right-handed", 
                    bowlingStyle: "None",
                    image: "https://via.placeholder.com/100"  // Replace with actual image URL
                },
                { 
                    name: "Aasif Sheikh", 
                    role: "Opening-Batter", 
                    Born:"January 22, 2001 (age 23 years), Birgunj", 
                    ODIDebut:"7 September 2021 v PNG", 
                    battingStyle: "Right-handed", 
                    bowlingStyle: "None",
                    image: "https://via.placeholder.com/100"  // Replace with actual image URL
                },
                { 
                    name: "Aasif Sheikh", 
                    role: "Opening-Batter", 
                    Born:"January 22, 2001 (age 23 years), Birgunj", 
                    ODIDebut:"7 September 2021 v PNG", 
                    battingStyle: "Right-handed", 
                    bowlingStyle: "None",
                    image: "https://via.placeholder.com/100"  // Replace with actual image URL
                },
                { 
                    name: "Aasif Sheikh", 
                    role: "Opening-Batter", 
                    Born:"January 22, 2001 (age 23 years), Birgunj", 
                    ODIDebut:"7 September 2021 v PNG", 
                    battingStyle: "Right-handed", 
                    bowlingStyle: "None",
                    image: "https://via.placeholder.com/100"  // Replace with actual image URL
                },
                { 
                    name: "Aasif Sheikh", 
                    role: "Opening-Batter", 
                    Born:"January 22, 2001 (age 23 years), Birgunj", 
                    ODIDebut:"7 September 2021 v PNG", 
                    battingStyle: "Right-handed", 
                    bowlingStyle: "None",
                    image: "https://via.placeholder.com/100"  // Replace with actual image URL
                },
                { 
                    name: "Aasif Sheikh", 
                    role: "Opening-Batter", 
                    Born:"January 22, 2001 (age 23 years), Birgunj", 
                    ODIDebut:"7 September 2021 v PNG", 
                    battingStyle: "Right-handed", 
                    bowlingStyle: "None",
                    image: "https://via.placeholder.com/100"  // Replace with actual image URL
                },
                { 
                    name: "Aasif Sheikh", 
                    role: "Opening-Batter", 
                    Born:"January 22, 2001 (age 23 years), Birgunj", 
                    ODIDebut:"7 September 2021 v PNG", 
                    battingStyle: "Right-handed", 
                    bowlingStyle: "None",
                    image: "https://via.placeholder.com/100"  // Replace with actual image URL
                },
                { 
                    name: "Aasif Sheikh", 
                    role: "Opening-Batter", 
                    Born:"January 22, 2001 (age 23 years), Birgunj", 
                    ODIDebut:"7 September 2021 v PNG", 
                    battingStyle: "Right-handed", 
                    bowlingStyle: "None",
                    image: "https://via.placeholder.com/100"  // Replace with actual image URL
                },
                { 
                    name: "Aasif Sheikh", 
                    role: "Opening-Batter", 
                    Born:"January 22, 2001 (age 23 years), Birgunj", 
                    ODIDebut:"7 September 2021 v PNG", 
                    battingStyle: "Right-handed", 
                    bowlingStyle: "None",
                    image: "https://via.placeholder.com/100"  // Replace with actual image URL
                },
                { 
                    name: "Aasif Sheikh", 
                    role: "Opening-Batter", 
                    Born:"January 22, 2001 (age 23 years), Birgunj", 
                    ODIDebut:"7 September 2021 v PNG", 
                    battingStyle: "Right-handed", 
                    bowlingStyle: "None",
                    image: "https://via.placeholder.com/100"  // Replace with actual image URL
                },
                { 
                    name: "Aasif Sheikh", 
                    role: "Opening-Batter", 
                    Born:"January 22, 2001 (age 23 years), Birgunj", 
                    ODIDebut:"7 September 2021 v PNG", 
                    battingStyle: "Right-handed", 
                    bowlingStyle: "None",
                    image: "https://via.placeholder.com/100"  // Replace with actual image URL
                },
                { 
                    name: "Aasif Sheikh", 
                    role: "Opening-Batter", 
                    Born:"January 22, 2001 (age 23 years), Birgunj", 
                    ODIDebut:"7 September 2021 v PNG", 
                    battingStyle: "Right-handed", 
                    bowlingStyle: "None",
                    image: "https://via.placeholder.com/100"  // Replace with actual image URL
                },
                { 
                    name: "Aasif Sheikh", 
                    role: "Opening-Batter", 
                    Born:"January 22, 2001 (age 23 years), Birgunj", 
                    ODIDebut:"7 September 2021 v PNG", 
                    battingStyle: "Right-handed", 
                    bowlingStyle: "None",
                    image: "https://via.placeholder.com/100"  // Replace with actual image URL
                },
                { 
                    name: "Aasif Sheikh", 
                    role: "Opening-Batter", 
                    Born:"January 22, 2001 (age 23 years), Birgunj", 
                    ODIDebut:"7 September 2021 v PNG", 
                    battingStyle: "Right-handed", 
                    bowlingStyle: "None",
                    image: "https://via.placeholder.com/100"  // Replace with actual image URL
                },
                { 
                    name: "Aasif Sheikh", 
                    role: "Opening-Batter", 
                    Born:"January 22, 2001 (age 23 years), Birgunj", 
                    ODIDebut:"7 September 2021 v PNG", 
                    battingStyle: "Right-handed", 
                    bowlingStyle: "None",
                    image: "https://via.placeholder.com/100"  // Replace with actual image URL
                },
                { 
                    name: "Aasif Sheikh", 
                    role: "Opening-Batter", 
                    Born:"January 22, 2001 (age 23 years), Birgunj", 
                    ODIDebut:"7 September 2021 v PNG", 
                    battingStyle: "Right-handed", 
                    bowlingStyle: "None",
                    image: "https://via.placeholder.com/100"  // Replace with actual image URL
                },
                { 
                    name: "Aasif Sheikh", 
                    role: "Opening-Batter", 
                    Born:"January 22, 2001 (age 23 years), Birgunj", 
                    ODIDebut:"7 September 2021 v PNG", 
                    battingStyle: "Right-handed", 
                    bowlingStyle: "None",
                    image: "https://via.placeholder.com/100"  // Replace with actual image URL
                },
                { 
                    name: "Aasif Sheikh", 
                    role: "Opening-Batter", 
                    Born:"January 22, 2001 (age 23 years), Birgunj", 
                    ODIDebut:"7 September 2021 v PNG", 
                    battingStyle: "Right-handed", 
                    bowlingStyle: "None",
                    image: "https://via.placeholder.com/100"  // Replace with actual image URL
                },                
                // Add more players similarly
            ];

            // Sample data for Nepal cricket teams
            const teams = [
                "Nepal National Cricket Team Seniour team",
                "Nepal Under-19 Cricket Team",
                "Nepal A Cricket Team",
                "Nepal Womens",
                // Add more team names as needed
            ];

            // Sample data for matches, fixtures, and results
            const matches = [
                { id: 1, team1: "Nepal", team2: "India", date: "2024-07-15", venue: "Kathmandu" },
                { id: 2, team1: "Nepal", team2: "Sri Lanka", date: "2024-07-20", venue: "Pokhara" },
            ];

            const fixtures = [
                { id: 1, team1: "Nepal", team2: "Pakistan", date: "2024-08-05", venue: "Lahore" },
                { id: 2, team1: "Nepal", team2: "Bangladesh", date: "2024-08-10", venue: "Dhaka" },
                // Add more fixture objects as needed
            ];

            const results = [
                { id: 1, team1: "Nepal", team2: "India", result: "India won by 5 wickets" },
                { id: 2, team1: "Nepal", team2: "Sri Lanka", result: "Match abandoned due to rain" },
                { id: 3, team1: "Nepal", team2: "UAE", result: "Match abandoned due to rain" },
                // Add more result objects as needed
            ];

            // Function to populate list items
            const populateList = (listId, data) => {
                const list = document.getElementById(listId);
                list.innerHTML = ''; // Clear existing items
                data.forEach(item => {
                    const listItem = document.createElement('li');
                    if (typeof item === 'string') {
                        listItem.textContent = item;
                    } else if (item.name) {
                        const playerProfile = document.createElement('div');
                        playerProfile.classList.add('player-profile');
                        playerProfile.innerHTML = `
                            <img src="${item.image}" alt="${item.name}">
                            <h3>${item.name}</h3>
                            <p>Role: ${item.role}</p>
                            <p>Born: ${item.Born}</p>
                            <p>ODIDebut: ${item.ODIDebut}</p>
                            <p>Batting Style: ${item.battingStyle}</p>
                            <p>Bowling Style: ${item.bowlingStyle}</p>
                        `;
                        listItem.appendChild(playerProfile);
                    } else {
                        listItem.textContent = `${item.team1} vs ${item.team2} - ${item.date}, Venue: ${item.venue || ''}`;
                    }
                    list.appendChild(listItem);
                });
            };

            // Function to open image in new tab
            const openImage = (url) => {
                window.open(url, '_blank');
            };

            // Toggle section visibility based on clicked link
            const toggleSection = (sectionId) => {
                const sections = document.querySelectorAll('section');
                sections.forEach(section => {
                    if (section.id === sectionId) {
                        section.classList.add('active');
                    } else {
                        section.classList.remove('active');
                    }
                });
            };

            // Event listeners for navigation links
            const navLinks = document.querySelectorAll('nav ul li a');
            navLinks.forEach(link => {
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                    const sectionId = link.getAttribute('href').substring(1); // Remove leading #
                    toggleSection(sectionId);
                });
            });

            // Event listener for player images
            document.addEventListener('click', function(event) {
                if (event.target.tagName === 'IMG' && event.target.parentElement.classList.contains('player-profile')) {
                    openImage(event.target.src);
                }
            });

            // Call functions to populate lists on page load
            populateList('player-list', players);
            populateList('team-list', teams);
            populateList('match-list', matches);
            populateList('fixtures-list', fixtures);
            populateList('results-list', results);
        });