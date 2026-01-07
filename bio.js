document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("orderForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // cegah reload halaman

        const nama = document.getElementById("nama").value;
        const varian = document.getElementById("varian").value;
        const jumlah = document.getElementById("jumlah").value;
        const catatan = document.getElementById("catatan").value;

        if(!nama || !varian || !jumlah){
            alert("Mohon lengkapi data pemesanan!");
            return;
        }

        const pesan =
            "Halo, saya mau pesan BioShine\n\n" +
            "Nama: " + nama + "\n" +
            "Varian: " + varian + "\n" +
            "Jumlah: " + jumlah + "\n" +
            "Catatan: " + catatan;

        const nomorWA = "6283896690924"; // ganti nomor WA kamu
        const url = "https://wa.me/" + nomorWA + "?text=" + encodeURIComponent(pesan);

        window.open(url, "_blank"); // buka WA di tab baru
    });
});
