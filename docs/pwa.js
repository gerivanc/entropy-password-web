// Configuração PWA
class PWAHelper {
    constructor() {
        this.deferredPrompt = null;
        this.init();
    }

    init() {
        // Registrar Service Worker
        this.registerServiceWorker();
        
        // Gerenciar instalação
        this.setupInstallPrompt();
        
        // Verificar se já está instalado
        this.checkIfPWAInstalled();
    }

    // Registrar Service Worker
    registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('./sw.js')
                    .then(registration => {
                        console.log('✅ Service Worker registrado:', registration);
                    })
                    .catch(error => {
                        console.log('❌ Falha no Service Worker:', error);
                    });
            });
        }
    }

    // Configurar prompt de instalação
    setupInstallPrompt() {
        const installButton = document.getElementById('installButton');
        
        if (!installButton) return;

        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            this.deferredPrompt = e;
            
            // Mostrar botão de instalação
            installButton.style.display = 'block';
            
            installButton.addEventListener('click', async () => {
                if (this.deferredPrompt) {
                    this.deferredPrompt.prompt();
                    const { outcome } = await this.deferredPrompt.userChoice;
                    
                    if (outcome === 'accepted') {
                        console.log('✅ Usuário aceitou instalar o PWA');
                        installButton.textContent = '✅ Instalado!';
                        installButton.disabled = true;
                        document.body.classList.add('pwa-installed');
                    }
                    
                    this.deferredPrompt = null;
                    installButton.style.display = 'none';
                }
            });
        });

        // Esconder botão se já estiver instalado
        window.addEventListener('appinstalled', () => {
            console.log('✅ PWA instalado com sucesso');
            installButton.style.display = 'none';
            document.body.classList.add('pwa-installed');
            this.deferredPrompt = null;
        });
    }

    // Verificar se PWA já está instalado
    checkIfPWAInstalled() {
        if (window.matchMedia('(display-mode: standalone)').matches || 
            window.navigator.standalone === true) {
            document.body.classList.add('pwa-installed');
        }
    }

    // Mostrar loading
    showLoading() {
        const loading = document.createElement('div');
        loading.className = 'pwa-loading spinning';
        loading.innerHTML = `
            <div class="pwa-spinner"></div>
            <p style="margin-top: 20px; color: #2F3BA2;">Carregando...</p>
        `;
        document.body.appendChild(loading);
    }

    // Esconder loading
    hideLoading() {
        const loading = document.querySelector('.pwa-loading');
        if (loading) {
            loading.remove();
        }
    }
}

// Inicializar PWA quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new PWAHelper();
});

// Eventos para loading
window.addEventListener('beforeinstallprompt', () => {
    // Mostrar loading durante instalação
    const pwa = new PWAHelper();
    pwa.showLoading();
});

window.addEventListener('appinstalled', () => {
    const pwa = new PWAHelper();
    pwa.hideLoading();
});
