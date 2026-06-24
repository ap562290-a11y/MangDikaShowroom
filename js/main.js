// ==========================================
// MAIN.JS - MangDika Showroom (FULL VERSION)
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // ==========================================
    // 1. HAMBURGER MENU
    // ==========================================
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('open');
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('open');
            });
        });
    }

    // ==========================================
    // 2. AUTENTIKASI (LOGIN / REGISTER)
    // ==========================================

    // Cek status login dan update navbar
    function checkAuthStatus() {
        const user = JSON.parse(localStorage.getItem('mangdika_user'));
        const navMenu = document.getElementById('navMenu');
        
        if (!navMenu) return;

        // Cari elemen Login di navbar
        const loginLinks = navMenu.querySelectorAll('a[href="login.html"]');
        let loginLi = null;
        loginLinks.forEach(link => {
            const li = link.closest('li');
            if (li) loginLi = li;
        });

        if (user) {
            // Jika sudah login, ubah tampilan navbar
            if (loginLi) {
                loginLi.innerHTML = `
                    <div style="display:flex; align-items:center; gap:8px; background:rgba(255,255,255,0.1); padding:4px 12px 4px 8px; border-radius:30px; flex-wrap:wrap;">
                        <i class="fas fa-user-circle" style="font-size:20px; color:var(--gold);"></i>
                        <span style="font-weight:600; font-size:13px; color:white;">${user.name}</span>
                        <a href="profil.html" style="color:var(--gold); padding:3px 10px; background:rgba(255,255,255,0.15); border-radius:20px; font-size:12px; text-decoration:none;">
                            <i class="fas fa-user"></i> Profil
                        </a>
                        <a href="#" id="logoutNav" style="color:#ff6b6b; padding:3px 10px; background:rgba(255,0,0,0.15); border-radius:20px; font-size:12px; text-decoration:none;">
                            <i class="fas fa-sign-out-alt"></i> Logout
                        </a>
                    </div>
                `;

                // Event listener untuk logout dari navbar
                document.getElementById('logoutNav')?.addEventListener('click', function(e) {
                    e.preventDefault();
                    if (confirm('Apakah Anda yakin ingin logout?')) {
                        localStorage.removeItem('mangdika_user');
                        alert('🔓 Anda telah logout.');
                        window.location.href = 'index.html';
                    }
                });
            }
        } else {
            // Jika belum login, tampilkan tombol Login biasa
            if (loginLi) {
                loginLi.innerHTML = `<a href="login.html" class="btn-login"><i class="fas fa-user"></i> Login</a>`;
            }
        }
    }

    // Panggil cek status auth di semua halaman
    checkAuthStatus();

    // ===== LOGIN FORM =====
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail')?.value.trim();
            const password = document.getElementById('loginPassword')?.value.trim();
            
            if (!email || !password) {
                alert('⚠️ Mohon isi email dan password.');
                return;
            }

            // Cek apakah user sudah terdaftar di localStorage
            const registeredUsers = JSON.parse(localStorage.getItem('mangdika_users')) || [];
            const user = registeredUsers.find(u => u.email === email && u.password === password);

            if (user) {
                // Simpan session user yang login
                localStorage.setItem('mangdika_user', JSON.stringify({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    phone: user.phone
                }));
                
                alert(`✅ Login berhasil!\n\nSelamat datang kembali, ${user.name}!`);
                window.location.href = 'profil.html';
            } else {
                // Cek apakah email terdaftar tapi password salah
                const userExists = registeredUsers.find(u => u.email === email);
                if (userExists) {
                    alert('⚠️ Password salah. Silakan coba lagi.');
                } else {
                    alert('⚠️ Email belum terdaftar. Silakan register terlebih dahulu.');
                }
            }
        });
    }

    // ===== REGISTER FORM =====
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('regName')?.value.trim();
            const email = document.getElementById('regEmail')?.value.trim();
            const phone = document.getElementById('regPhone')?.value.trim();
            const password = document.getElementById('regPassword')?.value;
            const confirm = document.getElementById('regConfirm')?.value;
            const agree = document.getElementById('regAgree')?.checked;

            // Validasi
            if (!name || !email || !phone || !password || !confirm) {
                alert('⚠️ Mohon lengkapi semua field.');
                return;
            }

            if (password !== confirm) {
                alert('⚠️ Password dan konfirmasi password tidak cocok.');
                return;
            }

            if (password.length < 8) {
                alert('⚠️ Password minimal 8 karakter.');
                return;
            }

            if (!agree) {
                alert('⚠️ Anda harus menyetujui syarat & ketentuan.');
                return;
            }

            // Cek apakah email sudah terdaftar
            const registeredUsers = JSON.parse(localStorage.getItem('mangdika_users')) || [];
            if (registeredUsers.find(u => u.email === email)) {
                alert('⚠️ Email sudah terdaftar. Silakan login.');
                return;
            }

            // Simpan user baru
            const newUser = {
                id: Date.now(),
                name: name,
                email: email,
                phone: phone,
                password: password,
                registeredAt: new Date().toISOString()
            };

            registeredUsers.push(newUser);
            localStorage.setItem('mangdika_users', JSON.stringify(registeredUsers));

            // Langsung login setelah register
            localStorage.setItem('mangdika_user', JSON.stringify({
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                phone: newUser.phone
            }));

            alert(`✅ Registrasi berhasil!\n\nSelamat datang ${name}!`);
            window.location.href = 'profil.html';
        });
    }

    // ===== SWITCH TAB LOGIN/REGISTER =====
    const authTabs = document.querySelectorAll('.auth-tab');
    const authForms = {
        login: document.getElementById('formLogin'),
        register: document.getElementById('formRegister')
    };

    if (authTabs.length > 0) {
        authTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                authTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                const target = this.dataset.tab;
                Object.keys(authForms).forEach(key => {
                    authForms[key]?.classList.remove('active');
                });
                authForms[target]?.classList.add('active');
            });
        });
    }

    // ===== TAMPILKAN DATA USER DI PROFIL =====
    function displayUserProfile() {
        const user = JSON.parse(localStorage.getItem('mangdika_user'));
        const userNameDisplay = document.getElementById('userNameDisplay');
        const userEmailDisplay = document.getElementById('userEmailDisplay');
        
        if (user && userNameDisplay && userEmailDisplay) {
            userNameDisplay.textContent = user.name;
            userEmailDisplay.textContent = user.email;
        } else if (userNameDisplay && userEmailDisplay) {
            // Jika tidak ada user, redirect ke login
            window.location.href = 'login.html';
        }
    }

    // Panggil fungsi ini di halaman profil
    if (window.location.pathname.includes('profil.html')) {
        displayUserProfile();
    }

    // ===== LOGOUT DARI HALAMAN PROFIL =====
    const btnLogout = document.getElementById('btnLogout');
    if (btnLogout) {
        btnLogout.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('Apakah Anda yakin ingin logout?')) {
                localStorage.removeItem('mangdika_user');
                alert('🔓 Anda telah logout.');
                window.location.href = 'index.html';
            }
        });
    }

// ==========================================
// 3. DATA UNITS (Simulasi Database)
// ==========================================
const units = [
    // ===== 7 MOBIL =====
    {
        id: 1,
        jenis: 'mobil',
        merek: 'Toyota',
        model: 'All New Avanza',
        tahun: 2025,
        harga: 285000000,
        transmisi: 'Matic',
        bbm: 'Bensin',
        seat: '7 Seater',
        tag: 'BEST SELLER',
        image: 'img/1.jpg',
        deskripsi: 'Mobil keluarga yang nyaman dan irit bahan bakar dengan desain modern.'
    },
    {
        id: 2,
        jenis: 'mobil',
        merek: 'Toyota',
        model: 'Innova Zenix',
        tahun: 2025,
        harga: 450000000,
        transmisi: 'CVT',
        bbm: 'Bensin',
        seat: '7 Seater',
        tag: 'POPULER',
        image: 'img/2.jpg',
        deskripsi: 'MPV premium dengan kenyamanan maksimal dan fitur canggih.'
    },
    {
        id: 3,
        jenis: 'mobil',
        merek: 'Honda',
        model: 'HR-V',
        tahun: 2024,
        harga: 420000000,
        transmisi: 'CVT',
        bbm: 'Bensin',
        seat: '5 Seater',
        tag: 'POPULER',
        image: 'img/3.jpg',
        deskripsi: 'SUV compact dengan desain sporty dan performa handal.'
    },
    {
        id: 4,
        jenis: 'mobil',
        merek: 'Honda',
        model: 'Civic Type R',
        tahun: 2024,
        harga: 980000000,
        transmisi: 'Manual',
        bbm: 'Bensin',
        seat: '4 Seater',
        tag: 'SPORT',
        image: 'img/4.jpg',
        deskripsi: 'Mobil sport performa tinggi dengan desain agresif.'
    },
    {
        id: 5,
        jenis: 'mobil',
        merek: 'BMW',
        model: 'X5',
        tahun: 2025,
        harga: 1850000000,
        transmisi: 'Automatic',
        bbm: 'Bensin',
        seat: '5 Seater',
        tag: 'PREMIUM',
        image: 'img/5.jpg',
        deskripsi: 'SUV premium dengan performa tinggi dan kemewahan kelas atas.'
    },
    {
        id: 6,
        jenis: 'mobil',
        merek: 'Suzuki',
        model: 'Ertiga',
        tahun: 2024,
        harga: 250000000,
        transmisi: 'Manual',
        bbm: 'Bensin',
        seat: '7 Seater',
        tag: 'KELUARGA',
        image: 'img/6.jpg',
        deskripsi: 'MPV keluarga dengan ruang luas dan konsumsi BBM irit.'
    },
    {
        id: 7,
        jenis: 'mobil',
        merek: 'Mitsubishi',
        model: 'Xpander',
        tahun: 2024,
        harga: 275000000,
        transmisi: 'Matic',
        bbm: 'Bensin',
        seat: '7 Seater',
        tag: 'KELUARGA',
        image: 'img/7.jpg',
        deskripsi: 'MPV stylish dengan desain modern dan fitur lengkap.'
    },

    // ===== 8 MOTOR =====
    {
        id: 8,
        jenis: 'motor',
        merek: 'Honda',
        model: 'Beat',
        tahun: 2025,
        harga: 18500000,
        transmisi: 'Matic',
        bbm: 'Bensin',
        cc: '110cc',
        tag: 'HEMAT BBM',
        image: 'img/8.jpg',
        deskripsi: 'Motor matic irit dan praktis untuk aktivitas harian.'
    },
    {
        id: 9,
        jenis: 'motor',
        merek: 'Honda',
        model: 'PCX 160',
        tahun: 2025,
        harga: 33000000,
        transmisi: 'Matic',
        bbm: 'Bensin',
        cc: '160cc',
        tag: 'PREMIUM',
        image: 'img/9.jpg',
        deskripsi: 'Skuter premium dengan fitur canggih dan kenyamanan maksimal.'
    },
    {
        id: 10,
        jenis: 'motor',
        merek: 'Yamaha',
        model: 'NMAX',
        tahun: 2025,
        harga: 32000000,
        transmisi: 'Matic',
        bbm: 'Bensin',
        cc: '155cc',
        tag: 'POPULER',
        image: 'img/10.jpg',
        deskripsi: 'Skuter premium dengan performa tangguh dan desain sporty.'
    },
    {
        id: 11,
        jenis: 'motor',
        merek: 'Yamaha',
        model: 'Aerox 155',
        tahun: 2024,
        harga: 28000000,
        transmisi: 'Matic',
        bbm: 'Bensin',
        cc: '155cc',
        tag: 'SPORT',
        image: 'img/11.jpg',
        deskripsi: 'Skuter sport dengan desain agresif dan performa garang.'
    },
    {
        id: 12,
        jenis: 'motor',
        merek: 'Vespa',
        model: 'Primavera',
        tahun: 2024,
        harga: 48000000,
        transmisi: 'Matic',
        bbm: 'Bensin',
        cc: '150cc',
        tag: 'CLASSIC',
        image: 'img/12.jpg',
        deskripsi: 'Skuter klasik modern dengan gaya timeless dan elegan.'
    },
    {
        id: 13,
        jenis: 'motor',
        merek: 'Vespa',
        model: 'Sprint',
        tahun: 2024,
        harga: 52000000,
        transmisi: 'Matic',
        bbm: 'Bensin',
        cc: '150cc',
        tag: 'PREMIUM',
        image: 'img/13.jpg',
        deskripsi: 'Skuter premium dengan desain sporty dan performa mumpuni.'
    },
    {
        id: 14,
        jenis: 'motor',
        merek: 'Honda',
        model: 'CB150R',
        tahun: 2024,
        harga: 38000000,
        transmisi: 'Manual',
        bbm: 'Bensin',
        cc: '150cc',
        tag: 'SPORT',
        image: 'img/14.jpg',
        deskripsi: 'Motor sport naked dengan performa garang dan desain agresif.'
    },
    {
        id: 15,
        jenis: 'motor',
        merek: 'Yamaha',
        model: 'XSR 155',
        tahun: 2024,
        harga: 35000000,
        transmisi: 'Manual',
        bbm: 'Bensin',
        cc: '155cc',
        tag: 'CLASSIC',
        image: 'img/15.jpg',
        deskripsi: 'Motor classic modern dengan gaya retro dan performa handal.'
    }
];

    // ==========================================
    // 4. DATA PROMO
    // ==========================================
    const promos = [
        {
            id: 1,
            judul: 'Diskon Akhir Tahun',
            deskripsi: 'Dapatkan diskon hingga 15% untuk semua unit Toyota',
            diskon: '15%',
            valid: '1 Des 2025 - 31 Jan 2026',
            image: '🎉'
        },
        {
            id: 2,
            judul: 'Gratis Servis 2x',
            deskripsi: 'Setiap pembelian motor Honda mendapat servis gratis 2x',
            diskon: 'GRATIS',
            valid: '1 Jan - 28 Feb 2026',
            image: '🔧'
        },
        {
            id: 3,
            judul: 'DP 0% untuk Motor',
            deskripsi: 'Kredit motor dengan DP 0% dan cicilan ringan',
            diskon: 'DP 0%',
            valid: '15 Jan - 15 Mar 2026',
            image: '💰'
        },
        {
            id: 4,
            judul: 'Tukar Tambah Bonus',
            deskripsi: 'Tukarkan mobil/motor lama Anda dengan bonus tambahan',
            diskon: 'BONUS',
            valid: '1 Feb - 30 Apr 2026',
            image: '🔄'
        }
    ];

    // ===== RENDER UNIT UNGGULAN (Index) =====
    const featuredContainer = document.getElementById('featuredUnits');
    if (featuredContainer) {
        const featured = units.slice(0, 4);
        featuredContainer.innerHTML = featured.map(unit => `
            <div class="unit-card">
                <div class="unit-img" style="position:relative; background:#e9ecef; overflow:hidden; height:200px;">
                    <span class="tag">${unit.tag}</span>
                    <img src="${unit.image}" alt="${unit.model}" style="width:100%; height:100%; object-fit:cover;">
                </div>
                <div class="unit-body">
                    <h3>${unit.model}</h3>
                    <div class="brand">${unit.merek} • ${unit.tahun}</div>
                    <div class="price">Rp ${unit.harga.toLocaleString('id-ID')}</div>
                    <div class="specs">
                        <span><i class="fas fa-gas-pump"></i> ${unit.bbm}</span>
                        <span><i class="fas fa-cog"></i> ${unit.transmisi}</span>
                        <span><i class="fas fa-chair"></i> ${unit.seat || unit.cc || unit.cc + 'cc'}</span>
                    </div>
                    <div class="btn-group">
                        <button class="btn-small btn-detail" data-id="${unit.id}">Detail</button>
                        <button class="btn-small btn-wa" data-id="${unit.id}"><i class="fab fa-whatsapp"></i> WA</button>
                    </div>
                </div>
            </div>
        `).join('');

        // Event listener untuk tombol detail dan WA (sama seperti sebelumnya)
        document.querySelectorAll('.btn-detail').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.dataset.id);
                const unit = units.find(u => u.id === id);
                if (unit) {
                    alert(`📋 DETAIL UNIT\n\nModel: ${unit.model}\nMerek: ${unit.merek}\nTahun: ${unit.tahun}\nHarga: Rp ${unit.harga.toLocaleString('id-ID')}\nTransmisi: ${unit.transmisi}\nBBM: ${unit.bbm}\nTag: ${unit.tag}\n\n${unit.deskripsi}`);
                }
            });
        });

        document.querySelectorAll('.btn-wa').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.dataset.id);
                const unit = units.find(u => u.id === id);
                if (unit) {
                    alert(`💬 Hubungi sales via WhatsApp untuk unit: ${unit.model}\nNomor: 0812-3456-7890`);
                }
            });
        });
    }

    // ===== RENDER KATALOG =====
    const katalogGrid = document.getElementById('katalogGrid');
    const totalUnit = document.getElementById('totalUnit');
    const pagination = document.getElementById('pagination');

    if (katalogGrid) {
        let currentPage = 1;
        const perPage = 6;
        let filteredUnits = [...units];
        let currentView = 'grid';

        function renderKatalog(unitsData) {
            const start = (currentPage - 1) * perPage;
            const end = start + perPage;
            const pageUnits = unitsData.slice(start, end);

            if (currentView === 'grid') {
                katalogGrid.className = 'unit-grid';
                katalogGrid.innerHTML = pageUnits.map(unit => `
                    <div class="unit-card">
                        <div class="unit-img" style="position:relative; background:#e9ecef; overflow:hidden; height:200px;">
                            <span class="tag">${unit.tag}</span>
                            <img src="${unit.image}" alt="${unit.model}" style="width:100%; height:100%; object-fit:cover;">
                        </div>
                        <div class="unit-body">
                            <h3>${unit.model}</h3>
                            <div class="brand">${unit.merek} • ${unit.tahun}</div>
                            <div class="price">Rp ${unit.harga.toLocaleString('id-ID')}</div>
                            <div class="specs">
                                <span><i class="fas fa-gas-pump"></i> ${unit.bbm}</span>
                                <span><i class="fas fa-cog"></i> ${unit.transmisi}</span>
                                <span><i class="fas fa-chair"></i> ${unit.seat || unit.cc || unit.cc + 'cc'}</span>
                            </div>
                            <div class="btn-group">
                                <button class="btn-small btn-detail" data-id="${unit.id}">Detail</button>
                                <button class="btn-small btn-wa" data-id="${unit.id}"><i class="fab fa-whatsapp"></i> WA</button>
                            </div>
                        </div>
                    </div>
                `).join('');
            } else {
                // List View
                katalogGrid.className = 'unit-list';
                katalogGrid.innerHTML = pageUnits.map(unit => `
                    <div class="unit-list-item" style="display:flex; gap:20px; background:white; padding:20px; border-radius:12px; box-shadow:var(--shadow); margin-bottom:15px; align-items:center; flex-wrap:wrap;">
                        <div style="width:150px; height:100px; overflow:hidden; border-radius:8px; flex-shrink:0;">
                            <img src="${unit.image}" alt="${unit.model}" style="width:100%; height:100%; object-fit:cover;">
                        </div>
                        <div style="flex:1; min-width:200px;">
                            <h3>${unit.model}</h3>
                            <div>${unit.merek} • ${unit.tahun} • ${unit.transmisi}</div>
                            <div style="font-size:20px; font-weight:700; color:var(--primary);">Rp ${unit.harga.toLocaleString('id-ID')}</div>
                        </div>
                        <div style="display:flex; gap:10px; flex-wrap:wrap;">
                            <button class="btn-small btn-detail" data-id="${unit.id}">Detail</button>
                            <button class="btn-small btn-wa" data-id="${unit.id}"><i class="fab fa-whatsapp"></i> WA</button>
                        </div>
                    </div>
                `).join('');
            }

            // Event listener untuk tombol detail
            katalogGrid.querySelectorAll('.btn-detail').forEach(btn => {
                btn.addEventListener('click', function() {
                    const id = parseInt(this.dataset.id);
                    const unit = units.find(u => u.id === id);
                    if (unit) {
                        alert(`📋 DETAIL UNIT\n\nModel: ${unit.model}\nMerek: ${unit.merek}\nTahun: ${unit.tahun}\nHarga: Rp ${unit.harga.toLocaleString('id-ID')}\nTransmisi: ${unit.transmisi}\nBBM: ${unit.bbm}\nTag: ${unit.tag}\n\n${unit.deskripsi}`);
                    }
                });
            });

            // Event listener untuk tombol WA
            katalogGrid.querySelectorAll('.btn-wa').forEach(btn => {
                btn.addEventListener('click', function() {
                    const id = parseInt(this.dataset.id);
                    const unit = units.find(u => u.id === id);
                    if (unit) {
                        alert(`💬 Hubungi sales via WhatsApp untuk unit: ${unit.model}\nNomor: 0812-3456-7890`);
                    }
                });
            });

            // Update total
            if (totalUnit) {
                totalUnit.textContent = `Menampilkan ${unitsData.length} unit`;
            }

            // Render pagination
            renderPagination(unitsData.length);
        }

        function renderPagination(total) {
            if (!pagination) return;
            const totalPages = Math.ceil(total / perPage);
            if (totalPages <= 1) {
                pagination.innerHTML = '';
                return;
            }

            let html = '';
            for (let i = 1; i <= totalPages; i++) {
                html += `<button class="${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
            }
            pagination.innerHTML = html;

            pagination.querySelectorAll('button').forEach(btn => {
                btn.addEventListener('click', function() {
                    currentPage = parseInt(this.dataset.page);
                    renderKatalog(filteredUnits);
                });
            });
        }

        // Filter function
        function applyFilters() {
            const jenis = document.getElementById('filterJenis')?.value || 'all';
            const merek = document.getElementById('filterMerek')?.value || 'all';
            const harga = parseInt(document.getElementById('filterHarga')?.value) || Infinity;
            const tahun = document.getElementById('filterTahun')?.value || 'all';

            filteredUnits = units.filter(unit => {
                if (jenis !== 'all' && unit.jenis !== jenis) return false;
                if (merek !== 'all' && unit.merek.toLowerCase() !== merek) return false;
                if (unit.harga > harga) return false;
                if (tahun !== 'all' && unit.tahun !== parseInt(tahun)) return false;
                return true;
            });

            currentPage = 1;
            renderKatalog(filteredUnits);
        }

        // Event listeners filter
        document.getElementById('btnFilter')?.addEventListener('click', applyFilters);
        document.getElementById('btnReset')?.addEventListener('click', function() {
            document.getElementById('filterJenis').value = 'all';
            document.getElementById('filterMerek').value = 'all';
            document.getElementById('filterHarga').value = '';
            document.getElementById('filterTahun').value = 'all';
            applyFilters();
        });

        // View toggle
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentView = this.dataset.view;
                renderKatalog(filteredUnits);
            });
        });

        // Initial render
        applyFilters();
    }

    // ==========================================
    // 7. RENDER PROMO
    // ==========================================
    const promoGrid = document.getElementById('promoGrid');
    if (promoGrid) {
        promoGrid.innerHTML = promos.map(promo => `
            <div class="promo-card">
                <div class="promo-header">
                    <span style="font-size:40px;">${promo.image}</span>
                    <h3>${promo.judul}</h3>
                </div>
                <div class="promo-body">
                    <div class="discount">${promo.diskon}</div>
                    <p>${promo.deskripsi}</p>
                    <div class="valid"><i class="fas fa-calendar-alt"></i> ${promo.valid}</div>
                    <button class="btn btn-primary btn-small" style="margin-top:15px;" onclick="alert('💡 Promo: ${promo.judul}\\nHubungi sales untuk informasi lebih lanjut.')">
                        <i class="fas fa-info-circle"></i> Detail Promo
                    </button>
                </div>
            </div>
        `).join('');
    }

    // ==========================================
    // 8. TEST DRIVE FORM
    // ==========================================
    const testDriveForm = document.getElementById('testDriveForm');
    if (testDriveForm) {
        testDriveForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const nama = document.getElementById('tdNama')?.value;
            const phone = document.getElementById('tdPhone')?.value;
            const unit = document.getElementById('tdUnit')?.value;
            const date = document.getElementById('tdDate')?.value;
            const time = document.getElementById('tdTime')?.value;

            if (nama && phone && unit && date && time) {
                alert(`✅ Permintaan Test Drive Dikirim!\n\nNama: ${nama}\nUnit: ${unit}\nTanggal: ${date}\nJam: ${time}\n\nSales kami akan menghubungi Anda segera.`);
                this.reset();
            } else {
                alert('⚠️ Mohon lengkapi semua field yang wajib diisi.');
            }
        });
    }

    // ==========================================
    // 9. KONTAK FORM
    // ==========================================
    const kontakForm = document.getElementById('kontakForm');
    if (kontakForm) {
        kontakForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('kName')?.value;
            const email = document.getElementById('kEmail')?.value;
            const phone = document.getElementById('kPhone')?.value;
            const subject = document.getElementById('kSubject')?.value;
            const message = document.getElementById('kMessage')?.value;

            if (name && email && phone && subject && message) {
                alert(`✅ Pesan terkirim!\n\nTerima kasih ${name}, kami akan merespon pesan Anda segera.`);
                this.reset();
            } else {
                alert('⚠️ Mohon lengkapi semua field yang wajib diisi.');
            }
        });
    }

    // ==========================================
    // 10. PROFIL / DASHBOARD
    // ==========================================
    const profilNavLinks = document.querySelectorAll('.profil-nav a:not(#btnLogout)');
    const profilSections = document.querySelectorAll('.profil-section-content');

    if (profilNavLinks.length > 0) {
        profilNavLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                profilNavLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                const target = this.dataset.section;
                profilSections.forEach(section => section.classList.remove('active'));
                document.getElementById(`section-${target}`)?.classList.add('active');
            });
        });
    }

    // ==========================================
    // 11. SET TANGGAL MINIMAL UNTUK TEST DRIVE
    // ==========================================
    const dateInput = document.getElementById('tdDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    // ==========================================
    // 12. CEK AKSES HALAMAN PROFIL (HARUS LOGIN)
    // ==========================================
    if (window.location.pathname.includes('profil.html')) {
        const user = JSON.parse(localStorage.getItem('mangdika_user'));
        if (!user) {
            alert('⚠️ Anda harus login terlebih dahulu untuk mengakses halaman profil.');
            window.location.href = 'login.html';
        }
    }

    console.log('🚗 MangDika Showroom siap digunakan!');
});