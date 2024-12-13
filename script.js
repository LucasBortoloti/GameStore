// Dados dos jogos
const gamesData = {
    'cyberpunk': {
        title: 'Cyberpunk 2077',
        developer: 'CD Projekt RED',
        releaseDate: '10/12/2020',
        genre: 'RPG de Ação',
        price: 'R$ 199,99',
        description: `Cyberpunk 2077 é uma história de ação e aventura em mundo aberto que se passa em Night City, uma megalópole obcecada por poder, glamour e modificações corporais. Você joga como V, um mercenário fora da lei atrás de um implante único que é a chave para a imortalidade.`,
        requirements: `
            <strong>Mínimos:</strong><br>
            - Sistema: Windows 10<br>
            - Processador: Core i7-6700 or Ryzen 5 1600<br>
            - Memória: 12 GB de RAM<br>
            - Placa de vídeo: GeForce GTX 1060 6GB or Radeon RX 580 8GB or Arc A380<br>
            - Armazenamento: 70 GB de espaço disponível`,
        images: [
            'images/cyberpunk1.jpg',
            'images/cyberpunk2.jpg',
            'images/cyberpunk3.jpg'
        ]
    },
    'god-of-war': {
        title: 'God of War',
        developer: 'Santa Monica Studio',
        releaseDate: '20/04/2018',
        genre: 'Ação e Aventura',
        price: 'R$ 199,99',
        description: `Vivendo como um homem fora da sombra dos deuses, Kratos deve se adaptar a terras desconhecidas, ameaças inesperadas e uma segunda chance de ser pai. Junto ao seu filho Atreus, os dois vão se aventurar pelas profundezas dos reinos nórdicos em uma jornada íntima e perigosa.`,
        requirements: `
            <strong>Mínimos:</strong><br>
            - Sistema: Windows 10 64-bit<br>
            - Processador: Intel i5-2500k ou AMD Ryzen 3 1200<br>
            - Memória: 8 GB RAM<br>
            - Placa de vídeo: NVIDIA GTX 960 ou AMD R9 290X<br>
            - Armazenamento: 70 GB de espaço disponível`,
        images: [
            'images/gow1.jpg',
            'images/gow2.jpg',
            'images/gow3.jpg'
        ]
    },
    'rdr2': {
        title: 'Red Dead Redemption 2',
        developer: 'Rockstar Games',
        releaseDate: '26/10/2018',
        genre: 'Ação e Aventura',
        price: 'R$ 249,99',
        description: `América, 1899. O fim da era do Velho Oeste começou. Após um assalto dar errado na cidade de Blackwater, Arthur Morgan e a gangue Van der Linde são forçados a fugir. Com agentes federais e os melhores caçadores de recompensas no seu encalço, a gangue precisa roubar, assaltar e lutar para sobreviver no impiedoso coração dos Estados Unidos.`,
        requirements: `
            <strong>Mínimos:</strong><br>
            - Sistema: Windows 10<br>
            - Processador: Intel Core i5-2500K ou AMD FX-6300<br>
            - Memória: 8 GB RAM<br>
            - Placa de vídeo: NVIDIA GTX 770 2GB ou AMD Radeon R9 280<br>
            - Armazenamento: 150 GB de espaço disponível`,
        images: [
            'images/rdr1.jpg',
            'images/rdr2.jpg',
            'images/rdr3.jpg'
        ]
    },
    'thefinals': {
        title: 'The Finals',
        developer: 'Embark Studios',
        releaseDate: '08/12/2023',
        genre: 'Ação e Aventura',
        price: 'R$ 0,00',
        description: `O THE FINALS é o maior game show de combate gratuito para jogar do mundo! Nossos competidores se conectam ao nosso mundo virtual para disputar torneios acirrados em equipe, lutando em arenas muito bem renderizadas baseadas em locais do mundo real, que podem ser alteradas, exploradas ou destruídas.`,
        requirements: `
            <strong>Mínimos:</strong><br>
            - Sistema: Windows 10<br>
            - Processador: Intel Core i5-6600K ou AMD Ryzen R5<br>
            - Memória: 12 GB RAM<br>
            - Placa de vídeo:  NVIDIA GeForce GTX 1050 Ti or AMD Radeon RX 580<br>
            - Armazenamento: 50 GB de espaço disponível`,
        images: [
            'images/the1.jpg',
            'images/the2.jpg',
            'images/the3.jpg'
        ]
    },'partyanimals': {
        title: 'Party Animals',
        developer: 'Recreate Games',
        releaseDate: '20/09/2023',
        genre: 'Ação e Aventura',
        price: 'R$ 64,95',
        description: `Crie grandes e dolorosas memórias com seus amigos em Party Animals.`,
        requirements: `
            <strong>Mínimos:</strong><br>
            - Sistema: Windows 10<br>
            - Processador: Intel Core i5 / AMD equivalent<br>
            - Memória: 8 GB RAM<br>
            - Placa de vídeo: NVIDIA GTX 750-Ti / AMD RX 550, 2GB VRam<br>
            - Armazenamento: 12 GB de espaço disponível`,
        images: [
            'images/party1.jpg',
            'images/party2.jpg',
            'images/party3.jpg'
        ]
    }
};

let currentSlide = 0;
let currentGame = null;

function showPage(pageId) {
    // Obtenha todas as páginas
    const pages = document.querySelectorAll('.page, .sobre, .contato');
    
    // Esconda todas as páginas
    pages.forEach(page => page.classList.remove('active'));
    
    // Mostre a página correspondente ao ID
    const pageToShow = document.getElementById(pageId);
    if (pageToShow) {
        pageToShow.classList.add('active');
    }
}

function showGameDetails(gameId) {
    currentGame = gameId;
    currentSlide = 0;
    const game = gamesData[gameId];
    
    // Preencher informações do jogo
    document.querySelector('.game-title').textContent = game.title;
    document.querySelector('.developer').textContent = `Desenvolvedor: ${game.developer}`;
    document.querySelector('.release-date').textContent = `Lançamento: ${game.releaseDate}`;
    document.querySelector('.genre').textContent = `Gênero: ${game.genre}`;
    document.querySelector('.detail-price').textContent = game.price;
    document.querySelector('.description').textContent = game.description;
    document.querySelector('.req-content').innerHTML = game.requirements;

    // Configurar o slider
    setupSlider(game.images);
    
    // Mostrar a página de detalhes
    showPage('game-details');
}

function setupSlider(images) {
    const slidesContainer = document.querySelector('.slides');
    const dotsContainer = document.querySelector('.slider-dots');
    
    // Limpar slides e dots anteriores
    slidesContainer.innerHTML = '';
    dotsContainer.innerHTML = '';
    
    // Adicionar imagens ao slider
    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Slide ${index + 1}`;
        slidesContainer.appendChild(img);
        
        // Criar dot para cada imagem
        const dot = document.createElement('div');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.onclick = () => goToSlide(index);
        dotsContainer.appendChild(dot);
    });
    
    updateSlider();
}

function updateSlider() {
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');
    
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function prevSlide() {
    const game = gamesData[currentGame];
    currentSlide = (currentSlide - 1 + game.images.length) % game.images.length;
    updateSlider();
}

function nextSlide() {
    const game = gamesData[currentGame];
    currentSlide = (currentSlide + 1) % game.images.length;
    updateSlider();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}