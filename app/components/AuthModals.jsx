'use client';

const LoginModal = () => {
  return `
    <div class="bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl p-8 rounded-2xl max-w-md w-full mx-4 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
      <div class="absolute inset-0 border-2 border-white/20 rounded-2xl"></div>
      <div class="relative">
        <h3 class="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Login to Your Account</h3>
        <div class="space-y-4">
          <div class="relative group">
            <input type="email" placeholder="Email" class="w-full px-4 py-3 bg-white/5 dark:bg-gray-900/5 border-2 border-white/20 rounded-lg focus:outline-none focus:border-indigo-500 transition-all duration-300 group-hover:border-indigo-500/50" />
            <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 blur transition-opacity duration-300"></div>
          </div>
          <div class="relative group">
            <input type="password" placeholder="Password" class="w-full px-4 py-3 bg-white/5 dark:bg-gray-900/5 border-2 border-white/20 rounded-lg focus:outline-none focus:border-indigo-500 transition-all duration-300 group-hover:border-indigo-500/50" />
            <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 blur transition-opacity duration-300"></div>
          </div>
          <button class="w-full py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity">Login</button>
        </div>
        <button class="absolute top-0 right-0 p-2 hover:opacity-75" onclick="this.closest('.fixed').remove()">
          <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  `;
};

const SignUpModal = () => {
  return `
    <div class="bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl p-8 rounded-2xl max-w-md w-full mx-4 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
      <div class="absolute inset-0 border-2 border-white/20 rounded-2xl"></div>
      <div class="relative">
        <h3 class="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Create Your Account</h3>
        <div class="space-y-4">
          <div class="relative group">
            <input type="text" placeholder="Full Name" class="w-full px-4 py-3 bg-white/5 dark:bg-gray-900/5 border-2 border-white/20 rounded-lg focus:outline-none focus:border-indigo-500 transition-all duration-300 group-hover:border-indigo-500/50" />
            <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 blur transition-opacity duration-300"></div>
          </div>
          <div class="relative group">
            <input type="email" placeholder="Email" class="w-full px-4 py-3 bg-white/5 dark:bg-gray-900/5 border-2 border-white/20 rounded-lg focus:outline-none focus:border-indigo-500 transition-all duration-300 group-hover:border-indigo-500/50" />
            <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 blur transition-opacity duration-300"></div>
          </div>
          <div class="relative group">
            <input type="password" placeholder="Password" class="w-full px-4 py-3 bg-white/5 dark:bg-gray-900/5 border-2 border-white/20 rounded-lg focus:outline-none focus:border-indigo-500 transition-all duration-300 group-hover:border-indigo-500/50" />
            <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 blur transition-opacity duration-300"></div>
          </div>
          <button class="w-full py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity">Sign Up</button>
        </div>
        <button class="absolute top-0 right-0 p-2 hover:opacity-75" onclick="this.closest('.fixed').remove()">
          <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  `;
};

const showModal = (content) => {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50';
  modal.innerHTML = content;
  document.body.appendChild(modal);
};

export const showLoginModal = () => showModal(LoginModal());
export const showSignUpModal = () => showModal(SignUpModal());
