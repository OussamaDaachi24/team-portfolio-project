const teamMembers = [
    {
        name: "Daachi Daachi",
        role: "Team Leader",
        bio: "Backend engineer , experience in developing REST API's and building scalable systems",
        avatar: "DO",
        color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        page: "daachi_oussama_portfolio.html"
    },
    {
        name: "Sad-Chemloul Alaa ",
        role: "Backend developer",
        bio: "Computer Science student passionate about building innovative and reliable digital experiences.",
        avatar: "SA",
        color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        page: "sad_chemloul_alaa.html"
    },
     {
        name: "Chebaani Youcef",
        role: "Ui/Ux Designer  Frontend Developer",
        bio: "Designer, Frontend Developer experience in building brands from design to deployment.",
        avatar: "CY",
        color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        page: "chebaani-youcef/index.html"
    },
    {
        name: "Kellaf Dhoha",
        role: " ",
        bio: "",
        avatar: "KD",
        color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        page: "dhoha-khellaf.html"
    },
    {
        name: "Redhoua Ghezlene",
        role: "",
        bio: "",
        avatar: "RG",
        color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        page: "ghezlene-gasmi.html"
    }
];

function createTeamCards() {
    const teamGrid = document.getElementById('teamGrid');
    
    teamMembers.forEach(member => {
        const card = document.createElement('a');
        card.href = member.page;
        card.className = 'team-card';
        
        card.innerHTML = `
            <div class="member-avatar" style="background: ${member.color}">
                ${member.avatar}
            </div>
            <h2 class="member-name">${member.name}</h2>
            <p class="member-role">${member.role}</p>
            <p class="member-bio">${member.bio}</p>
            <span class="view-profile">View Profile</span>
            
        `;
        
        teamGrid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', createTeamCards);