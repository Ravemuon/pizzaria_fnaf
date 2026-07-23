/**
 * ============================================================
 *   LOGIN.JS – SISTEMA DE AUTENTICAÇÃO CENTRALIZADO
 *   Gerencia usuários, sessão e redirecionamentos
 * ============================================================
 */

const Auth = {
  /**
   * Registra um novo usuário no localStorage
   * @param {string} email
   * @param {string} password
   * @returns {boolean} - true se registrou, false se já existe
   */
  register: function(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(u => u.email === email)) {
      return false; // usuário já existe
    }
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    // Faz login automático após registro
    this.login(email, password);
    return true;
  },

  /**
   * Realiza o login do usuário
   * @param {string} email
   * @param {string} password
   * @returns {boolean} - true se login bem-sucedido
   */
  login: function(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('currentUser', email);
      this.updateNavbar();
      return true;
    }
    return false;
  },

  /**
   * Realiza o logout
   */
  logout: function() {
    localStorage.removeItem('currentUser');
    this.updateNavbar();
    window.location.href = '/index.html';
  },

  /**
   * Verifica se o usuário está logado
   * @returns {boolean}
   */
  isLoggedIn: function() {
    return !!localStorage.getItem('currentUser');
  },

  /**
   * Retorna o e-mail do usuário logado ou null
   * @returns {string|null}
   */
  getUser: function() {
    return localStorage.getItem('currentUser') || null;
  },

  /**
   * Define a URL de redirecionamento após login/registro
   * @param {string} url
   */
  setRedirect: function(url) {
    sessionStorage.setItem('redirectAfterLogin', url);
  },

  /**
   * Obtém a URL de redirecionamento ou fallback
   * @returns {string}
   */
  getRedirect: function() {
    const redirect = sessionStorage.getItem('redirectAfterLogin');
    sessionStorage.removeItem('redirectAfterLogin');
    return redirect || '/index.html';
  },

  /**
   * Atualiza os links da navbar (Login/Sair e Meus Pedidos)
   */
  updateNavbar: function() {
    const currentUser = this.getUser();
    const authLink = document.getElementById('authLink');
    const authAnchor = document.getElementById('authAnchor');
    const meusPedidosLink = document.getElementById('meusPedidosLink');

    if (!authLink || !authAnchor) return;

    if (currentUser) {
      authAnchor.textContent = '🚪 Sair';
      authAnchor.href = '#';
      authAnchor.onclick = function(e) {
        e.preventDefault();
        Auth.logout();
      };
      if (meusPedidosLink) meusPedidosLink.style.display = 'block';
    } else {
      authAnchor.textContent = '🔐 Login';
      authAnchor.href = '/paginas/login/login.html';
      authAnchor.onclick = null;
      if (meusPedidosLink) meusPedidosLink.style.display = 'none';
    }
  }
};

// Atualiza a navbar automaticamente quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
  Auth.updateNavbar();
});