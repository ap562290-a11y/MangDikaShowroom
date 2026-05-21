// ==========================================
// DATABASE KENDARAAN MANGDIKASHOWROOM (16 UNIT)
// ==========================================
const dataKendaraan = [
    // --- MOBIL TOYOTA ---
    {
        id: 1,
        nama: "Toyota Avanza Veloz",
        jenis: "mobil",
        merek: "Toyota",
        kondisi: "baru",
        harga: "Rp 295.000.000",
        tahun: 2026,
        transmisi: "Automatic",
        km: "0 KM",
        gambar: "img/mobil-1.jpg",
        bgBadgeJenis: "bg-blue-600",
        bgBadgeKondisi: "bg-green-600",
        textBadgeKondisi: "text-white"
    },
    {
        id: 2,
        nama: "Toyota Raize GR Sport",
        jenis: "mobil",
        merek: "Toyota",
        kondisi: "bekas",
        harga: "Rp 235.000.000",
        tahun: 2023,
        transmisi: "Automatic",
        km: "18rb KM",
        gambar: "img/mobil-2.jpg",
        bgBadgeJenis: "bg-blue-600",
        bgBadgeKondisi: "bg-amber-500",
        textBadgeKondisi: "text-slate-950"
    },
    {
        id: 3,
        nama: "Toyota Innova Zenix Hybrid",
        jenis: "mobil",
        merek: "Toyota",
        kondisi: "baru",
        harga: "Rp 475.000.000",
        tahun: 2026,
        transmisi: "Automatic",
        km: "0 KM",
        gambar: "img/mobil-3.jpg",
        bgBadgeJenis: "bg-blue-600",
        bgBadgeKondisi: "bg-green-600",
        textBadgeKondisi: "text-white"
    },
    {
        id: 4,
        nama: "Toyota Fortuner VRZ",
        jenis: "mobil",
        merek: "Toyota",
        kondisi: "bekas",
        harga: "Rp 490.000.000",
        tahun: 2022,
        transmisi: "Automatic",
        km: "35rb KM",
        gambar: "img/mobil-4.jpg",
        bgBadgeJenis: "bg-blue-600",
        bgBadgeKondisi: "bg-amber-500",
        textBadgeKondisi: "text-slate-950"
    },

    // --- MOBIL HONDA ---
    {
        id: 5,
        nama: "Honda Civic Turbo",
        jenis: "mobil",
        merek: "Honda",
        kondisi: "bekas",
        harga: "Rp 385.000.000",
        tahun: 2020,
        transmisi: "Automatic",
        km: "45rb KM",
        gambar: "img/mobil-5.jpg",
        bgBadgeJenis: "bg-blue-600",
        bgBadgeKondisi: "bg-amber-500",
        textBadgeKondisi: "text-slate-950"
    },
    {
        id: 6,
        nama: "Honda Brio RS",
        jenis: "mobil",
        merek: "Honda",
        kondisi: "baru",
        harga: "Rp 195.000.000",
        tahun: 2026,
        transmisi: "Manual",
        km: "0 KM",
        gambar: "img/mobil-6.jpg",
        bgBadgeJenis: "bg-blue-600",
        bgBadgeKondisi: "bg-green-600",
        textBadgeKondisi: "text-white"
    },
    {
        id: 7,
        nama: "Honda HR-V SE",
        jenis: "mobil",
        merek: "Honda",
        kondisi: "bekas",
        harga: "Rp 340.000.000",
        tahun: 2023,
        transmisi: "Automatic",
        km: "21rb KM",
        gambar: "img/mobil-7.jpg",
        bgBadgeJenis: "bg-blue-600",
        bgBadgeKondisi: "bg-amber-500",
        textBadgeKondisi: "text-slate-950"
    },

    // --- MOTOR HONDA ---
    {
        id: 8,
        nama: "Honda CRF 150L",
        jenis: "motor",
        merek: "Honda",
        kondisi: "bekas",
        harga: "Rp 27.800.000",
        tahun: 2022,
        transmisi: "Manual",
        km: "12rb KM",
        gambar: "img/motor-1.jpg",
        bgBadgeJenis: "bg-purple-600",
        bgBadgeKondisi: "bg-amber-500",
        textBadgeKondisi: "text-slate-950"
    },
    {
        id: 9,
        nama: "Honda Vario 160 ABS",
        jenis: "motor",
        merek: "Honda",
        kondisi: "baru",
        harga: "Rp 29.500.000",
        tahun: 2026,
        transmisi: "Matic",
        km: "0 KM",
        gambar: "img/motor-2.jpg",
        bgBadgeJenis: "bg-purple-600",
        bgBadgeKondisi: "bg-green-600",
        textBadgeKondisi: "text-white"
    },
    {
        id: 10,
        nama: "Honda Vario 125 Led New",
        jenis: "motor",
        merek: "Honda",
        kondisi: "bekas",
        harga: "Rp 25.000.000",
        tahun: 2024,
        transmisi: "Matic",
        km: "8rb KM",
        gambar: "img/motor-3.jpg",
        bgBadgeJenis: "bg-purple-600",
        bgBadgeKondisi: "bg-amber-500",
        textBadgeKondisi: "text-slate-950"
    },
    {
        id: 11,
        nama: "Honda NSR 150R",
        jenis: "motor",
        merek: "Honda",
        kondisi: "baru",
        harga: "Rp 95.000.000",
        tahun: 2026,
        transmisi: "Manual",
        km: "0 KM",
        gambar: "img/motor-4.jpg",
        bgBadgeJenis: "bg-purple-600",
        bgBadgeKondisi: "bg-green-600",
        textBadgeKondisi: "text-white"
    },

    // --- MOTOR YAMAHA ---
    {
        id: 12,
        nama: "Yamaha 125ZR",
        jenis: "motor",
        merek: "Yamaha",
        kondisi: "baru",
        harga: "Rp 123.000.000",
        tahun: 2026,
        transmisi: "Manual",
        km: "0 KM",
        gambar: "img/motor-5.jpg",
        bgBadgeJenis: "bg-purple-600",
        bgBadgeKondisi: "bg-green-600",
        textBadgeKondisi: "text-white"
    },
    {
        id: 13,
        nama: "Yamaha Aerox Alpha",
        jenis: "motor",
        merek: "Yamaha",
        kondisi: "bekas",
        harga: "Rp 24.500.000",
        tahun: 2023,
        transmisi: "Matic",
        km: "15rb KM",
        gambar: "img/motor-6.jpg",
        bgBadgeJenis: "bg-purple-600",
        bgBadgeKondisi: "bg-amber-500",
        textBadgeKondisi: "text-slate-950"
    },
    {
        id: 14,
        nama: "Yamaha RX-King Cobra",
        jenis: "motor",
        merek: "Yamaha",
        kondisi: "baru",
        harga: "Rp 83.000.000",
        tahun: 2026,
        transmisi: "Manual",
        km: "0 KM",
        gambar: "img/motor-7.jpg",
        bgBadgeJenis: "bg-purple-600",
        bgBadgeKondisi: "bg-green-600",
        textBadgeKondisi: "text-white"
    },
    {
        id: 15,
        nama: "Yamaha TZM 150",
        jenis: "motor",
        merek: "Yamaha",
        kondisi: "bekas",
        harga: "Rp 80.500.000",
        tahun: 2024,
        transmisi: "Manual",
        km: "6rb KM",
        gambar: "img/motor-8.jpg",
        bgBadgeJenis: "bg-purple-600",
        bgBadgeKondisi: "bg-amber-500",
        textBadgeKondisi: "text-slate-950"
    },
    {
        id: 16,
        nama: "Yamaha Mio Sporty",
        jenis: "motor",
        merek: "Yamaha",
        kondisi: "baru",
        harga: "Rp 12.700.000",
        tahun: 2026,
        transmisi: "Matic",
        km: "0 KM",
        gambar: "img/motor-9.jpg",
        bgBadgeJenis: "bg-purple-600",
        bgBadgeKondisi: "bg-green-600",
        textBadgeKondisi: "text-white"
    }
];

// ==========================================
// FUNGSI UNTUK MERENDER KATALOG KE HTML
// ==========================================
function tampilkanKatalog(kendaraanMenyala) {
    const gridKendaraan = document.getElementById('grid-kendaraan');
    gridKendaraan.innerHTML = ""; // Bersihkan kontainer produk sebelum merender ulang

    // Jika pencarian tidak membuahkan hasil
    if (kendaraanMenyala.length === 0) {
        gridKendaraan.innerHTML = `
            <div class="col-span-1 md:col-span-2 xl:col-span-3 text-center py-16 bg-white rounded-xl border border-dashed border-gray-200 p-8 shadow-sm">
                <i class="fa-solid fa-car-tunnel text-6xl text-gray-300 mb-4 animate-bounce"></i>
                <h4 class="text-lg font-bold text-slate-800 mb-1">Unit Tidak Tersedia</h4>
                <p class="text-gray-400 text-sm max-w-sm mx-auto">Maaf, kombinasi unit yang Anda cari belum ada di gudang MangDikaShowroom. Coba sesuaikan filter Anda.</p>
            </div>
        `;
        return;
    }

    // Loop data untuk menghasilkan komponen kartu HTML
    kendaraanMenyala.forEach(item => {
        // Kustomisasi pesan otomatis ke WhatsApp Mang Dika
        const pesanWa = `Halo MangDika, saya lihat dari website dan tertarik dengan unit: *${item.nama} (${item.tahun})* seharga *${item.harga}*. Apakah bisa jadwalkan cek unit?`;
        const urlWa = `https://wa.me/6281234567890?text=${encodeURIComponent(pesanWa)}`;
        
        const card = `
            <div class="bg-white rounded-xl shadow overflow-hidden border border-gray-100 flex flex-col justify-between hover:shadow-xl transition transform hover:-translate-y-1 duration-300">
                <!-- Bagian Gambar & Lencana status -->
                <div class="relative bg-gray-100">
                    <img src="${item.gambar}" alt="${item.nama}" class="w-full h-48 object-cover">
                    <span class="absolute top-3 left-3 ${item.bgBadgeJenis} text-white text-xs font-bold px-2.5 py-1 rounded capitalize shadow-md">${item.jenis}</span>
                    <span class="absolute top-3 right-3 ${item.bgBadgeKondisi} ${item.textBadgeKondisi} text-xs font-bold px-2.5 py-1 rounded capitalize shadow-md">${item.kondisi}</span>
                </div>
                
                <!-- Bagian Informasi Detail Produk -->
                <div class="p-5 flex-1 flex flex-col justify-between">
                    <div>
                        <!-- Judul dibatasi tingginya agar kartu selalu sejajar seimbang -->
                        <h3 class="text-base font-bold text-slate-900 mb-1 leading-tight h-12 flex items-center">${item.nama}</h3>
                        <p class="text-xl font-black text-amber-600 mb-4 tracking-tight">${item.harga}</p>
                        
                        <!-- Grid Spesifikasi Singkat -->
                        <div class="grid grid-cols-3 gap-2 text-center text-xs text-gray-500 border-t pt-3 mb-5">
                            <div><i class="fa-solid fa-calendar mb-1 text-slate-600"></i><br><span class="font-medium text-slate-800">${item.tahun}</span></div>
                            <div><i class="fa-solid fa-gears mb-1 text-slate-600"></i><br><span class="font-medium text-slate-800 text-ellipsis overflow-hidden">${item.transmisi}</span></div>
                            <div><i class="fa-solid fa-gauge mb-1 text-slate-600"></i><br><span class="font-medium text-slate-800">${item.km}</span></div>
                        </div>
                    </div>
                    
                    <!-- CTA Button Menuju WA -->
                    <a href="${urlWa}" target="_blank" class="block text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-lg transition text-sm shadow-sm hover:shadow duration-200">
                        <i class="fa-brands fa-whatsapp mr-2 text-base align-middle"></i>Hubungi Mang Dika
                    </a>
                </div>
            </div>
        `;
        gridKendaraan.innerHTML += card;
    });
}

// ==========================================
// LOGIKA UTAMA SINKRONISASI LIVE FILTER
// ==========================================
function jalankanLiveFilter() {
    const kataKunci = document.getElementById('filter-kata-kunci').value.toLowerCase();
    const filterJenis = document.getElementById('filter-jenis').value;
    const filterMerek = document.getElementById('filter-merek').value;
    const filterKondisi = document.getElementById('filter-kondisi').value;

    const hasilPenyaringan = dataKendaraan.filter(item => {
        const cocokKataKunci = item.nama.toLowerCase().includes(kataKunci);
        const cocokJenis = (filterJenis === "semua" || item.jenis === filterJenis);
        const cocokMerek = (filterMerek === "semua" || item.merek === filterMerek);
        const cocokKondisi = (filterKondisi === "semua" || item.kondisi === filterKondisi);

        return cocokKataKunci && cocokJenis && cocokMerek && cocokKondisi;
    });

    tampilkanKatalog(hasilPenyaringan);
}

// ==========================================
// EVENT LISTENERS UNTUK MENDETEKSI INPUT USER
// ==========================================
document.getElementById('filter-kata-kunci').addEventListener('input', jalankanLiveFilter);
document.getElementById('filter-jenis').addEventListener('change', jalankanLiveFilter);
document.getElementById('filter-merek').addEventListener('change', jalankanLiveFilter);
document.getElementById('filter-kondisi').addEventListener('change', jalankanLiveFilter);

// Inisialisasi Pertama: Tampilkan seluruh isi gudang kendaraan saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    tampilkanKatalog(dataKendaraan);
});