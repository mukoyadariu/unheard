document.addEventListener('DOMContentLoaded', function() {
    // Set current date in featured article
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').textContent = currentDate.toLocaleDateString('en-US', options);

    // Sample articles data (in a real app, this would come from an API)
    const articles = [
        {
            id: 1,
            title: "The Rise of Populism in Western Democracies",
            excerpt: "Examining the factors contributing to the recent surge in populist movements across Europe and North America.",
            category: "Political Theory",
            date: "May 15, 2023",
            readTime: "8 min read",
            image: "https://www.populismstudies.org/wp-content/uploads/2024/04/Populism.jpg"
        },
        {
            id: 2,
            title: "Climate Policy: The New Political Battleground",
            excerpt: "How environmental issues are reshaping traditional political alliances and creating new ones.",
            category: "Domestic Policy",
            date: "May 10, 2023",
            readTime: "12 min read",
            image: "https://s.lorientlejour.com/storage/attachments/1433/ScreenShot2024-10-24at35154PM_349280.png/r/1200/ScreenShot2024-10-24at35154PM_349280.png"
        },
        {
            id: 3,
            title: "The Future of US-China Relations",
            excerpt: "Analyzing the potential trajectories of the world's most important bilateral relationship.",
            category: "International Relations",
            date: "May 5, 2023",
            readTime: "10 min read",
            image: "https://www.stimson.org/wp-content/uploads/2021/03/AdobeStock_302929886.jpeg"
        },
        {
            id: 4,
            title: "Voter Behavior in the Digital Age",
            excerpt: "How social media and digital platforms are influencing electoral outcomes worldwide.",
            category: "Election Analysis",
            date: "April 28, 2023",
            readTime: "9 min read",
            image: "https://www.orfonline.org/public/uploads/seo/20240310212331.jpg"
        },
        {
            id: 5,
            title: "The Ethics of Political Lobbying",
            excerpt: "A critical look at the influence of corporate interests on policy-making processes.",
            category: "Political Theory",
            date: "April 22, 2023",
            readTime: "11 min read",
            image: "https://betterboards.net/images/legal/political-lobbying-web.jpg"
        },
        {
            id: 6,
            title: "Urban vs Rural: The Growing Political Divide",
            excerpt: "Exploring how geographic differences are creating distinct political identities and priorities.",
            category: "Domestic Policy",
            date: "April 15, 2023",
            readTime: "7 min read",
            image: "https://thesoutherneronline.com/wp-content/uploads/2021/01/IMG_1734-900x675.jpg"
        }
    ];

    // Function to render articles
    function renderArticles(articlesToRender) {
        const articlesContainer = document.getElementById('articles-container');
        
        articlesToRender.forEach(article => {
            const articleCol = document.createElement('div');
            articleCol.className = 'col-md-6 col-lg-4';
            
            articleCol.innerHTML = `
                <div class="card article-card h-100 shadow-sm">
                    <img src="${article.image}" class="card-img-top" alt="${article.title}">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <span class="badge bg-secondary">${article.category}</span>
                            <small class="text-muted">${article.date}</small>
                        </div>
                        <h5 class="card-title">${article.title}</h5>
                        <p class="card-text">${article.excerpt}</p>
                    </div>
                    <div class="card-footer bg-transparent border-top-0">
                        <div class="d-flex justify-content-between align-items-center">
                            <a href="#" class="btn btn-sm btn-outline-primary">Read More</a>
                            <small class="text-muted">${article.readTime}</small>
                        </div>
                    </div>
                </div>
            `;
            
            articlesContainer.appendChild(articleCol);
        });
    }

    // Initial render (first 3 articles)
    renderArticles(articles.slice(0, 3));

    // Load more functionality
    const loadMoreBtn = document.getElementById('load-more');
    let currentIndex = 3;
    
    loadMoreBtn.addEventListener('click', function() {
        const nextArticles = articles.slice(currentIndex, currentIndex + 3);
        renderArticles(nextArticles);
        currentIndex += 3;
        
        if (currentIndex >= articles.length) {
            loadMoreBtn.style.display = 'none';
        }
    });

    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});